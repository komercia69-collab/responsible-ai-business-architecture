import type { ProposedAction, Session, PolicyBundle, DecisionResult } from '../types';
import { classifyConsequence } from '../consequence/consequence-classifier';
import { classifyReversibility } from '../reversibility/reversibility-classifier';
import { decideAutonomy } from '../autonomy/autonomy-controller';
import { sanitizeAction } from '../telemetry/sanitizer';

function buildHumanReadableReason(
  decision: string,
  consequenceClass: string,
  reversibility: string,
  reason_codes: string[]
): string {
  return `Decision: ${decision}. Consequence: ${consequenceClass}. Reversibility: ${reversibility}. Codes: ${reason_codes.join(', ')}.`;
}

export function filterAction(
  action: ProposedAction,
  session: Session,
  policy: PolicyBundle
): DecisionResult {
  const consequenceClass = classifyConsequence(action);
  const reversibility = classifyReversibility(action, consequenceClass);

  // 1. Check blocked_action_types
  if (policy.blocked_action_types.includes(action.type)) {
    return {
      decision: 'block',
      consequence_class: consequenceClass,
      reversibility,
      confirmation_required: false,
      reason_codes: ['POLICY_BLOCKED_ACTION_TYPE'],
      human_readable_reason: buildHumanReadableReason(
        'block',
        consequenceClass,
        reversibility,
        ['POLICY_BLOCKED_ACTION_TYPE']
      ),
    };
  }

  // 2. Check blocked_targets
  const isBlockedTarget = policy.environment_scope.blocked_targets.some((bt) =>
    action.target.includes(bt)
  );
  if (isBlockedTarget) {
    return {
      decision: 'block',
      consequence_class: consequenceClass,
      reversibility,
      confirmation_required: false,
      reason_codes: ['TARGET_OUT_OF_SCOPE'],
      human_readable_reason: buildHumanReadableReason(
        'block',
        consequenceClass,
        reversibility,
        ['TARGET_OUT_OF_SCOPE']
      ),
    };
  }

  // 3. Autonomy decision
  const { decision: autonomyDecision, reason_codes } = decideAutonomy(
    policy,
    action,
    consequenceClass,
    reversibility
  );

  // 4. Policy confirmation_required override
  let finalDecision = autonomyDecision;
  let finalCodes = [...reason_codes];
  const confirmationRequired =
    policy.confirmation_required.consequence_classes.includes(consequenceClass) ||
    policy.confirmation_required.reversibility.includes(reversibility);

  if (finalDecision === 'allow' && confirmationRequired) {
    finalDecision = 'require_confirmation';
    finalCodes = [...finalCodes, 'CONFIRMATION_REQUIRED_BY_POLICY'];
  }

  // 5. Sanitization check
  const sanitized = sanitizeAction(action);
  const valueChanged = sanitized.value !== action.value;

  if (finalDecision === 'allow' && valueChanged) {
    return {
      decision: 'sanitize_then_allow',
      consequence_class: consequenceClass,
      reversibility,
      confirmation_required: confirmationRequired,
      reason_codes: [...finalCodes, 'ACTION_SANITIZED'],
      human_readable_reason: buildHumanReadableReason(
        'sanitize_then_allow',
        consequenceClass,
        reversibility,
        [...finalCodes, 'ACTION_SANITIZED']
      ),
      sanitized_action: sanitized,
    };
  }

  return {
    decision: finalDecision,
    consequence_class: consequenceClass,
    reversibility,
    confirmation_required: confirmationRequired,
    reason_codes: finalCodes,
    human_readable_reason: buildHumanReadableReason(
      finalDecision,
      consequenceClass,
      reversibility,
      finalCodes
    ),
    sanitized_action: valueChanged ? sanitized : undefined,
  };
}
