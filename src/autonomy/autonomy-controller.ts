import type { PolicyBundle, ProposedAction, ConsequenceClass, Reversibility, GatewayDecision } from '../types';

const HIGH_RISK_CLASSES: ConsequenceClass[] = [
  'credential_or_secret_handling',
  'file_or_record_deletion',
  'payment_or_financial_action',
  'public_or_provider_facing_action',
];

function isMockTarget(target: string): boolean {
  return target.startsWith('mock://') || target.startsWith('mock-');
}

export function decideAutonomy(
  policy: PolicyBundle,
  action: ProposedAction,
  consequenceClass: ConsequenceClass,
  reversibility: Reversibility
): { decision: GatewayDecision; reason_codes: string[] } {
  const mode = policy.autonomy_mode;

  if (mode === 'manual_assist') {
    return {
      decision: 'require_confirmation',
      reason_codes: ['CONFIRMATION_REQUIRED_BY_POLICY'],
    };
  }

  if (mode === 'sandbox_autonomy_only') {
    if (action.type === 'open_url' && !isMockTarget(action.target)) {
      return { decision: 'block', reason_codes: ['ACTION_BLOCKED_HIGH_RISK', 'TARGET_OUT_OF_SCOPE'] };
    }
    if (HIGH_RISK_CLASSES.includes(consequenceClass)) {
      return { decision: 'block', reason_codes: ['ACTION_BLOCKED_HIGH_RISK'] };
    }
    if (reversibility === 'irreversible' || reversibility === 'unknown') {
      return { decision: 'require_confirmation', reason_codes: ['REVERSIBILITY_UNKNOWN'] };
    }
    return { decision: 'allow', reason_codes: ['ACTION_ALLOWED_LOW_RISK'] };
  }

  // limited_autonomy
  if (consequenceClass === 'read_only' || consequenceClass === 'local_ui_navigation') {
    return { decision: 'allow', reason_codes: ['ACTION_ALLOWED_LOW_RISK'] };
  }
  if (consequenceClass === 'data_entry') {
    const sensitiveTarget = /password|passwd|token|api_key|apikey|secret|bearer|card|iban|ssn|tax-id|email|phone|address/.test(
      action.target.toLowerCase()
    );
    if (!sensitiveTarget) {
      return { decision: 'allow', reason_codes: ['ACTION_ALLOWED_LOW_RISK'] };
    }
    return { decision: 'require_confirmation', reason_codes: ['CONSEQUENCE_CREDENTIAL_OR_SECRET_HANDLING'] };
  }
  if (
    consequenceClass === 'external_submission' ||
    consequenceClass === 'credential_or_secret_handling'
  ) {
    return {
      decision: 'require_confirmation',
      reason_codes: ['CONSEQUENCE_EXTERNAL_SUBMISSION'],
    };
  }
  if (
    consequenceClass === 'file_or_record_deletion' ||
    consequenceClass === 'payment_or_financial_action' ||
    consequenceClass === 'public_or_provider_facing_action'
  ) {
    return { decision: 'block', reason_codes: ['ACTION_BLOCKED_HIGH_RISK'] };
  }
  // configuration_change or unknown
  return {
    decision: 'require_confirmation',
    reason_codes: ['UNKNOWN_OR_AMBIGUOUS_ACTION'],
  };
}
