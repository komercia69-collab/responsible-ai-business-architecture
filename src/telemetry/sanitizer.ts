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

function isSensitiveKey(key: string): boolean {
  const lower = key.toLowerCase();
  return SENSITIVE_KEY_PATTERNS.some((p) => lower.includes(p));
}

function maskValue(_value: string): string {
  return '[MASKED]';
}

export function sanitizeAction(action: ProposedAction): ProposedAction {
  const sanitized: ProposedAction = { ...action };

  if (action.value !== undefined && isSensitiveKey(action.target)) {
    sanitized.value = maskValue(action.value);
  }

  if (action.metadata) {
    const maskedMeta: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(action.metadata)) {
      maskedMeta[k] = isSensitiveKey(k) ? maskValue(String(v)) : v;
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
