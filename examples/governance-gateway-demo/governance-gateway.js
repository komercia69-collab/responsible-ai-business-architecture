const fs = require('fs');
const path = require('path');

const demoDir = __dirname;
const policy = JSON.parse(
  fs.readFileSync(path.join(demoDir, 'governance-policy.json'), 'utf8')
);
const actions = JSON.parse(
  fs.readFileSync(path.join(demoDir, 'sample-agent-actions.json'), 'utf8')
);

const Decision = Object.freeze({
  ALLOW: 'ALLOW',
  BLOCK: 'BLOCK',
  REQUIRE_APPROVAL: 'REQUIRE_APPROVAL',
  ESCALATE: 'ESCALATE'
});

function createDecision(action, decision, reasons) {
  return {
    actionId: action.id,
    agent: action.agent,
    decision,
    reasons,
    policyId: policy.policyId,
    timestamp: new Date().toISOString(),
    originalAction: action
  };
}

function evaluateAction(action) {
  const reasons = [];

  if (!policy.allowedAgents.includes(action.agent)) {
    return createDecision(action, Decision.BLOCK, [
      `Agent '${action.agent}' is not allowed by policy.`
    ]);
  }

  if (!policy.allowedActionTypes.includes(action.actionType)) {
    return createDecision(action, Decision.BLOCK, [
      `Action type '${action.actionType}' is outside the approved action boundary.`
    ]);
  }

  if (policy.forbiddenCategories.includes(action.category)) {
    return createDecision(action, Decision.BLOCK, [
      `Category '${action.category}' is forbidden for this agent.`
    ]);
  }

  if (policy.highRiskCategories.includes(action.category)) {
    return createDecision(action, Decision.ESCALATE, [
      `Category '${action.category}' is high-risk and requires specialist review.`
    ]);
  }

  if (policy.irreversibleActionsRequireEscalation && action.reversible === false) {
    return createDecision(action, Decision.ESCALATE, [
      'Irreversible operational actions require escalation.'
    ]);
  }

  if (action.actionType === 'offer_refund') {
    const refundAmount = Number(action.amount);

    if (!Number.isFinite(refundAmount)) {
      return createDecision(action, Decision.BLOCK, [
        `Refund amount '${action.amount}' is invalid or missing.`
      ]);
    }

    if (refundAmount > policy.maxRefundWithManagerApproval) {
      return createDecision(action, Decision.ESCALATE, [
        `Refund amount ${action.amount} exceeds manager approval threshold ${policy.maxRefundWithManagerApproval}.`
      ]);
    }

    if (refundAmount > policy.maxAutonomousRefundAmount) {
      return createDecision(action, Decision.REQUIRE_APPROVAL, [
        `Refund amount ${action.amount} exceeds autonomous threshold ${policy.maxAutonomousRefundAmount}.`
      ]);
    }
  }

  if (
    action.customerImpact &&
    policy.customerFacingActionsRequireApproval.includes(action.actionType)
  ) {
    return createDecision(action, Decision.REQUIRE_APPROVAL, [
      `Customer-facing action '${action.actionType}' requires human approval.`
    ]);
  }

  if (
    policy.requireHumanApprovalForExecutionMode.includes(action.executionMode) &&
    action.customerImpact
  ) {
    reasons.push(
      `Execution mode '${action.executionMode}' with customer impact requires human approval.`
    );
    return createDecision(action, Decision.REQUIRE_APPROVAL, reasons);
  }

  reasons.push('Action is inside the approved governance boundary.');
  return createDecision(action, Decision.ALLOW, reasons);
}

function runDemo() {
  const decisions = actions.map(evaluateAction);
  const outputPath = path.join(demoDir, 'decision-log-example.json');

  fs.writeFileSync(outputPath, JSON.stringify(decisions, null, 2) + '\n', 'utf8');

  console.log('Minimal Governance Gateway Demo');
  console.log('================================');
  decisions.forEach((entry) => {
    console.log(`${entry.actionId}: ${entry.decision}`);
    entry.reasons.forEach((reason) => console.log(`  - ${reason}`));
  });
  console.log('');
  console.log(`Decision log written to: ${outputPath}`);
}

if (require.main === module) {
  runDemo();
}

module.exports = {
  Decision,
  evaluateAction
};
