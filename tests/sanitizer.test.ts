import { describe, it, expect } from 'vitest';
import { sanitizeAction, sanitizeAuditEntry } from '../src/telemetry/sanitizer';
import type { ProposedAction, AuditLogEntry } from '../src/types';

describe('sanitizer', () => {
  it('masks value when target matches password', () => {
    const action: ProposedAction = { type: 'type', target: 'password', value: 'secret123' };
    const result = sanitizeAction(action);
    expect(result.value).toBe('[MASKED]');
  });

  it('masks value when target matches card-number', () => {
    const action: ProposedAction = { type: 'type', target: 'card-number', value: '4111111111111111' };
    const result = sanitizeAction(action);
    expect(result.value).toBe('[MASKED]');
  });

  it('masks value when target matches token', () => {
    const action: ProposedAction = { type: 'type', target: 'api-token', value: 'tok_abc123' };
    const result = sanitizeAction(action);
    expect(result.value).toBe('[MASKED]');
  });

  it('does not mask value for non-sensitive target', () => {
    const action: ProposedAction = { type: 'type', target: 'name-field', value: 'Alice' };
    const result = sanitizeAction(action);
    expect(result.value).toBe('Alice');
  });

  it('masks sensitive metadata keys', () => {
    const action: ProposedAction = {
      type: 'type',
      target: 'name-field',
      value: 'Bob',
      metadata: { api_key: 'my-key', session: 'abc' },
    };
    const result = sanitizeAction(action);
    expect(result.metadata?.['api_key']).toBe('[MASKED]');
    expect(result.metadata?.['session']).toBe('abc');
  });

  it('does not mutate original action', () => {
    const action: ProposedAction = { type: 'type', target: 'password', value: 'secret' };
    sanitizeAction(action);
    expect(action.value).toBe('secret');
  });

  it('sanitizeAuditEntry masks proposed_action', () => {
    const entry: AuditLogEntry = {
      timestamp: '2024-01-01T00:00:00Z',
      session_id: 'sess-1',
      business_process_id: 'bp-1',
      proposed_action: { type: 'type', target: 'password', value: 'hunter2' },
      consequence_class: 'credential_or_secret_handling',
      reversibility: 'unknown',
      policy_decision: 'require_confirmation',
      reason_codes: ['CONSEQUENCE_CREDENTIAL_OR_SECRET_HANDLING'],
      confirmation_required: true,
      simulated_execution_result: '[SIMULATED]',
    };
    const result = sanitizeAuditEntry(entry);
    expect(result.proposed_action.value).toBe('[MASKED]');
    expect(entry.proposed_action.value).toBe('hunter2');
  });
});
