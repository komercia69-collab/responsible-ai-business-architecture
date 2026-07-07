import type {
  Scenario,
  Session,
  PolicyBundle,
  MockExecutionResult,
  ScenarioResult,
} from '../../types';
import { filterAction } from '../../gateway/action-filter';
import { recordStep, setPendingConfirmation, setBlocked, summarizeSession } from '../../session/session-manager';
import { writeAuditLog } from '../../telemetry/audit-log';

function simulateExecution(decision: string, actionType: string): string {
  if (decision === 'block') {
    return `[MOCK] Action type=${actionType} BLOCKED by gateway. No execution performed.`;
  }
  if (decision === 'require_confirmation') {
    return `[SIMULATED] Action type=${actionType} requires Human Owner confirmation. Sequence stopped.`;
  }
  if (decision === 'sanitize_then_allow') {
    return `[MOCK] Action type=${actionType} allowed after sanitization.`;
  }
  return `[MOCK] Action type=${actionType} allowed and simulated successfully.`;
}

export function runScenario(
  scenario: Scenario,
  session: Session,
  policy: PolicyBundle,
  logPath?: string
): ScenarioResult {
  console.log(`[MOCK] Starting scenario: ${scenario.name}`);
  if (scenario.description) {
    console.log(`[MOCK] Description: ${scenario.description}`);
  }
  console.log(`[MOCK] Policy: ${policy.id} | Autonomy: ${policy.autonomy_mode}`);
  console.log(`[MOCK] Actions to process: ${scenario.actions.length}`);
  console.log('');

  const results: MockExecutionResult[] = [];
  let currentSession = session;

  for (const action of scenario.actions) {
    const decision = filterAction(action, currentSession, policy);
    const simResult = simulateExecution(decision.decision, action.type);

    console.log(`[MOCK] Action: type=${action.type} target=${action.target}`);
    console.log(`[MOCK]   Decision: ${decision.decision}`);
    console.log(`[MOCK]   Consequence: ${decision.consequence_class}`);
    console.log(`[MOCK]   Reversibility: ${decision.reversibility}`);
    console.log(`[MOCK]   Codes: ${decision.reason_codes.join(', ')}`);
    console.log(`[SIMULATED] Result: ${simResult}`);
    console.log('');

    const auditEntry = {
      timestamp: new Date().toISOString(),
      session_id: currentSession.session_id,
      business_process_id: currentSession.business_process_id,
      proposed_action: action,
      consequence_class: decision.consequence_class,
      reversibility: decision.reversibility,
      policy_decision: decision.decision,
      reason_codes: decision.reason_codes,
      confirmation_required: decision.confirmation_required,
      simulated_execution_result: simResult,
    };

    writeAuditLog(auditEntry, logPath);

    results.push({ action, decision, simulated_execution_result: simResult });
    currentSession = recordStep(currentSession, action, decision);

    if (decision.decision === 'require_confirmation') {
      currentSession = setPendingConfirmation(currentSession);
      console.log(`[MOCK] Sequence stopped: ${decision.decision} on action type=${action.type}`);
      break;
    }
    if (decision.decision === 'block') {
      currentSession = setBlocked(currentSession);
      console.log(`[MOCK] Sequence stopped: ${decision.decision} on action type=${action.type}`);
      break;
    }
  }

  const summary = summarizeSession(currentSession);

  console.log(`[MOCK] Scenario complete: ${scenario.name}`);
  console.log(`[MOCK] Steps processed: ${summary.step_count}`);
  console.log(`[MOCK] Session status: ${summary.status}`);

  return {
    scenario_name: scenario.name,
    session_summary: summary,
    results,
  };
}
