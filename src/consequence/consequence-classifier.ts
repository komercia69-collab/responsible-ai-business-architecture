import type { ProposedAction, ConsequenceClass, SessionContext } from '../types';

const SENSITIVE_TARGET_PATTERNS = [
  'card',
  'password',
  'passwd',
  'token',
  'api_key',
  'apikey',
  'secret',
  'bearer',
  'iban',
  'ssn',
  'tax-id',
  'email',
  'phone',
  'address',
  'credit',
];

const PAYMENT_TARGET_PATTERNS = ['payment', 'pay-button', 'pay_button', 'checkout', 'billing', 'card-number', 'credit-card'];
const PUBLIC_TARGET_PATTERNS = ['publish', 'public', 'provider', 'send-report', 'submit-public'];
const DELETE_TARGET_PATTERNS = ['delete', 'remove', 'trash', 'discard'];
const CONFIG_TARGET_PATTERNS = ['config', 'save-settings', 'apply-settings', 'settings'];
const RISKY_CLICK_PATTERNS = ['submit', 'send', 'pay', 'order', 'confirm', 'purchase', 'buy'];

function isMockTarget(target: string): boolean {
  return target.startsWith('mock://') || target.startsWith('mock-');
}

function matchesAny(target: string, patterns: string[]): boolean {
  const lower = target.toLowerCase();
  return patterns.some((p) => lower.includes(p));
}

export function classifyConsequence(
  action: ProposedAction,
  _context?: SessionContext
): ConsequenceClass {
  const { type, target, value } = action;
  const lowerTarget = target.toLowerCase();
  const lowerValue = (value ?? '').toLowerCase();

  switch (type) {
    case 'read_screen':
      return 'read_only';

    case 'scroll':
    case 'copy':
    case 'paste':
      return 'local_ui_navigation';

    case 'open_url': {
      if (target === 'mock://readonly-report') return 'read_only';
      if (target === 'mock://sandbox-form') return 'local_ui_navigation';
      if (target === 'mock://blocked-payment-screen') return 'payment_or_financial_action';
      if (isMockTarget(target)) return 'local_ui_navigation';
      return 'unknown';
    }

    case 'type': {
      if (matchesAny(lowerTarget, SENSITIVE_TARGET_PATTERNS) || matchesAny(lowerValue, SENSITIVE_TARGET_PATTERNS)) {
        return 'credential_or_secret_handling';
      }
      return 'data_entry';
    }

    case 'submit': {
      if (matchesAny(lowerTarget, PAYMENT_TARGET_PATTERNS)) return 'payment_or_financial_action';
      if (matchesAny(lowerTarget, PUBLIC_TARGET_PATTERNS)) return 'public_or_provider_facing_action';
      return 'external_submission';
    }

    case 'delete':
      return 'file_or_record_deletion';

    case 'run_command':
      return 'configuration_change';

    case 'upload':
      return 'external_submission';

    case 'download': {
      if (isMockTarget(target)) return 'local_ui_navigation';
      return 'unknown';
    }

    case 'click': {
      if (matchesAny(lowerTarget, PAYMENT_TARGET_PATTERNS)) return 'payment_or_financial_action';
      if (matchesAny(lowerTarget, PUBLIC_TARGET_PATTERNS)) return 'public_or_provider_facing_action';
      if (matchesAny(lowerTarget, DELETE_TARGET_PATTERNS)) return 'file_or_record_deletion';
      if (matchesAny(lowerTarget, CONFIG_TARGET_PATTERNS)) return 'configuration_change';
      if (matchesAny(lowerTarget, RISKY_CLICK_PATTERNS)) return 'unknown';
      if (!isMockTarget(target)) return 'unknown';
      return 'local_ui_navigation';
    }

    default:
      return 'unknown';
  }
}
