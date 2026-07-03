import type { ProposedAction, AuditLogEntry } from '../types';

const SENSITIVE_KEY_PATTERNS = [
  'password',
  'passwd',
  'secret',
  'api_key',
  'apikey',
  'token',
  'bearer',
  'card-number',
  'credit-card',
  'card',
  'iban',
  'ssn',
  'tax-id',
  'email',
  'phone',
  'address',
];

// Patterns detected in value content regardless of target/key name
const SENSITIVE_VALUE_PATTERNS: RegExp[] = [
  /api_key=/i,
  /apikey=/i,
  /token=/i,
  /bearer\s/i,
  /password=/i,
  /passwd=/i,
  /secret=/i,
  /card-number=/i,
  /credit-card=/i,
  /iban=/i,
  /ssn=/i,
  /tax-id=/i,
  // 13–19 digit card-like number sequences
  /\b\d{13,19}\b/,
];

function isSensitiveKey(key: string): boolean {
  const lower = key.toLowerCase();
  return SENSITIVE_KEY_PATTERNS.some((p) => lower.includes(p));
}

function hasSensitiveContent(value: string): boolean {
  return SENSITIVE_VALUE_PATTERNS.some((re) => re.test(value));
}

function maskValue(_value: string): string {
  return '[MASKED]';
}

export function sanitizeAction(action: ProposedAction): ProposedAction {
  const sanitized: ProposedAction = { ...action };

  if (action.value !== undefined) {
    if (isSensitiveKey(action.target) || hasSensitiveContent(action.value)) {
      sanitized.value = maskValue(action.value);
    }
  }

  if (action.metadata) {
    const maskedMeta: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(action.metadata)) {
      const strV = String(v);
      maskedMeta[k] =
        isSensitiveKey(k) || hasSensitiveContent(strV) ? maskValue(strV) : v;
    }
    sanitized.metadata = maskedMeta;
  }

  return sanitized;
}

export function sanitizeAuditEntry(entry: AuditLogEntry): AuditLogEntry {
  return {
    ...entry,
    proposed_action: sanitizeAction(entry.proposed_action),
  };
}
