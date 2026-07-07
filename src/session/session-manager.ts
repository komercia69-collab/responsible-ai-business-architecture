import type {
  Session,
  PolicyBundle,
  ProposedAction,
  DecisionResult,
  SessionStatus,
  SessionSummary,
} from '../types';

let sessionCounter = 0;

export function createSession(
  businessProcessId: string,
  policy: PolicyBundle
): Session {
  sessionCounter += 1;
  return {
    session_id: `session-${sessionCounter}`,
    business_process_id: businessProcessId,
    policy_bundle: policy.id,
    autonomy_mode: policy.autonomy_mode,
    step_limit: policy.limits.max_steps,
    environment_scope: policy.environment_scope.allowed_targets.join(','),
    started_at: new Date().toISOString(),
    status: 'active',
    step_count: 0,
    steps: [],
  };
}

export function recordStep(
  session: Session,
  action: ProposedAction,
  decision: DecisionResult
): Session {
  const updated: Session = {
    ...session,
    step_count: session.step_count + 1,
    steps: [...session.steps, { action, decision }],
  };
  if (updated.step_count >= session.step_limit) {
    updated.status = 'blocked';
  }
  return updated;
}

export function setPendingConfirmation(session: Session): Session {
  return { ...session, status: 'pending_confirmation' };
}

export function setBlocked(session: Session): Session {
  return { ...session, status: 'blocked' };
}

export function killSession(session: Session, reason: string): Session {
  return { ...session, status: 'killed', kill_reason: reason };
}

export function summarizeSession(session: Session): SessionSummary {
  return {
    session_id: session.session_id,
    business_process_id: session.business_process_id,
    status: session.status,
    step_count: session.step_count,
    step_limit: session.step_limit,
    started_at: session.started_at,
    ended_at: new Date().toISOString(),
    kill_reason: session.kill_reason,
    steps: session.steps.map((s) => ({
      action: s.action,
      decision: s.decision.decision,
    })),
  };
}
