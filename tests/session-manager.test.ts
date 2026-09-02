import { describe, it, expect } from 'vitest';
import {
  createSession,
  recordStep,
  setPendingConfirmation,
  killSession,
  summarizeSession,
} from '../src/session/session-manager';
import type { PolicyBundle, ProposedAction, DecisionResult } from '../src/types';

function makePolicy(): PolicyBundle {
  return {
    id: 'test-policy',
    status: 'test',
    canonical_status: 'non_canonical',
    autonomy_mode: 'limited_autonomy',
    allowed_task_classes: [],
    blocked_action_types: [],
    confirmation_required: { consequence_classes: [], reversibility: [] },
    limits: { max_steps: 3 },
    environment_scope: { allowed_targets: [], blocked_targets: [] },
  };
}

const dummyAction: ProposedAction = { type: 'read_screen', target: 'mock://x' };
const dummyDecision: DecisionResult = {
  decision: 'allow',
  consequence_class: 'read_only',
  reversibility: 'reversible',
  confirmation_required: false,
  reason_codes: ['ACTION_ALLOWED_LOW_RISK'],
  human_readable_reason: 'allowed',
};

describe('session-manager', () => {
  it('creates session with active status', () => {
    const policy = makePolicy();
    const session = createSession('bp-test', policy);
    expect(session.status).toBe('active');
    expect(session.step_count).toBe(0);
    expect(session.business_process_id).toBe('bp-test');
    expect(session.step_limit).toBe(3);
  });

  it('increments step_count on recordStep', () => {
    const policy = makePolicy();
    const session = createSession('bp-test', policy);
    const updated = recordStep(session, dummyAction, dummyDecision);
    expect(updated.step_count).toBe(1);
    expect(updated.steps).toHaveLength(1);
  });

  it('sets status to blocked when step_limit reached', () => {
    const policy = makePolicy();
    let session = createSession('bp-test', policy);
    session = recordStep(session, dummyAction, dummyDecision);
    session = recordStep(session, dummyAction, dummyDecision);
    session = recordStep(session, dummyAction, dummyDecision);
    expect(session.status).toBe('blocked');
    expect(session.step_count).toBe(3);
  });

  it('killSession sets status to killed', () => {
    const policy = makePolicy();
    const session = createSession('bp-test', policy);
    const killed = killSession(session, 'test reason');
    expect(killed.status).toBe('killed');
    expect(killed.kill_reason).toBe('test reason');
  });

  it('summarizeSession includes step summaries', () => {
    const policy = makePolicy();
    let session = createSession('bp-test', policy);
    session = recordStep(session, dummyAction, dummyDecision);
    const summary = summarizeSession(session);
    expect(summary.step_count).toBe(1);
    expect(summary.steps[0].decision).toBe('allow');
    expect(summary.steps[0].action.type).toBe('read_screen');
  });

  it('summarizeSession includes ended_at', () => {
    const policy = makePolicy();
    const session = createSession('bp-test', policy);
    const summary = summarizeSession(session);
    expect(summary.ended_at).toBeTruthy();
  });

  it('setPendingConfirmation sets status to pending_confirmation', () => {
    const policy = makePolicy();
    const session = createSession('bp-test', policy);
    const updated = setPendingConfirmation(session);
    expect(updated.status).toBe('pending_confirmation');
    // original is not mutated
    expect(session.status).toBe('active');
  });
});
