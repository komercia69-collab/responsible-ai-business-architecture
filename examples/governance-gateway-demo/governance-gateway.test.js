const test = require('node:test');
const assert = require('node:assert/strict');

const { Decision, evaluateAction } = require('./governance-gateway');

const baseAction = {
  id: 'test-action',
  agent: 'customer-support-agent',
  actionType: 'classify_ticket',
  executionMode: 'recommend',
  amount: 0,
  customerImpact: false,
  reversible: true,
  category: 'support_triage',
  description: 'Test action'
};

test('allows a low-risk action inside the approved boundary', () => {
  const result = evaluateAction(baseAction);

  assert.equal(result.decision, Decision.ALLOW);
  assert.equal(result.actionId, baseAction.id);
  assert.equal(result.agent, baseAction.agent);
  assert.ok(result.reasons.some((reason) => reason.includes('approved governance boundary')));
  assert.equal(result.originalAction, baseAction);
});

test('blocks an action from an unapproved agent', () => {
  const action = {
    ...baseAction,
    id: 'blocked-agent-action',
    agent: 'unknown-agent'
  };

  const result = evaluateAction(action);

  assert.equal(result.decision, Decision.BLOCK);
  assert.ok(result.reasons.some((reason) => reason.includes('not allowed by policy')));
});

test('blocks a forbidden category', () => {
  const action = {
    ...baseAction,
    id: 'forbidden-category-action',
    actionType: 'draft_reply',
    category: 'legal_advice',
    customerImpact: true
  };

  const result = evaluateAction(action);

  assert.equal(result.decision, Decision.BLOCK);
  assert.ok(result.reasons.some((reason) => reason.includes('forbidden')));
});

test('requires approval when refund exceeds autonomous threshold', () => {
  const action = {
    ...baseAction,
    id: 'refund-approval-action',
    actionType: 'offer_refund',
    executionMode: 'execute',
    amount: 120,
    customerImpact: true,
    category: 'refund'
  };

  const result = evaluateAction(action);

  assert.equal(result.decision, Decision.REQUIRE_APPROVAL);
  assert.ok(result.reasons.some((reason) => reason.includes('exceeds autonomous threshold')));
});

test('escalates when refund exceeds manager approval threshold', () => {
  const action = {
    ...baseAction,
    id: 'refund-escalation-action',
    actionType: 'offer_refund',
    executionMode: 'execute',
    amount: 600,
    customerImpact: true,
    category: 'refund'
  };

  const result = evaluateAction(action);

  assert.equal(result.decision, Decision.ESCALATE);
  assert.ok(result.reasons.some((reason) => reason.includes('exceeds manager approval threshold')));
});

test('escalates irreversible operational action', () => {
  const action = {
    ...baseAction,
    id: 'irreversible-action',
    actionType: 'close_complaint',
    executionMode: 'execute',
    customerImpact: true,
    reversible: false,
    category: 'complaint_resolution'
  };

  const result = evaluateAction(action);

  assert.equal(result.decision, Decision.ESCALATE);
  assert.ok(result.reasons.some((reason) => reason.includes('Irreversible operational actions')));
});

test('escalates high-risk category before normal approval logic', () => {
  const action = {
    ...baseAction,
    id: 'high-risk-action',
    actionType: 'draft_reply',
    executionMode: 'draft',
    customerImpact: true,
    category: 'medical'
  };

  const result = evaluateAction(action);

  assert.equal(result.decision, Decision.ESCALATE);
  assert.ok(result.reasons.some((reason) => reason.includes('high-risk')));
});
