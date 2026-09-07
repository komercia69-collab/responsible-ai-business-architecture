import { describe, it, expect, beforeEach } from 'vitest';
import { writeAuditLog } from '../src/telemetry/audit-log';
import type { AuditLogEntry } from '../src/types';
import { readFileSync, existsSync, rmSync } from 'fs';

const TEST_LOG_PATH = 'tmp/audit/test-audit.jsonl';

function makeEntry(overrides: Partial<AuditLogEntry> = {}): AuditLogEntry {
  return {
    timestamp: '2024-01-01T00:00:00Z',
    session_id: 'sess-1',
    business_process_id: 'bp-1',
    proposed_action: { type: 'read_screen', target: 'mock://x' },
    consequence_class: 'read_only',
    reversibility: 'reversible',
    policy_decision: 'allow',
    reason_codes: ['ACTION_ALLOWED_LOW_RISK'],
    confirmation_required: false,
    simulated_execution_result: '[MOCK] simulated',
    ...overrides,
  };
}

describe('audit-log', () => {
  beforeEach(() => {
    if (existsSync(TEST_LOG_PATH)) {
      rmSync(TEST_LOG_PATH);
    }
  });

  it('writes a JSONL entry to the log file', () => {
    const entry = makeEntry();
    writeAuditLog(entry, TEST_LOG_PATH);
    const content = readFileSync(TEST_LOG_PATH, 'utf-8').trim();
    const parsed = JSON.parse(content);
    expect(parsed.session_id).toBe('sess-1');
    expect(parsed.policy_decision).toBe('allow');
  });

  it('appends multiple entries as separate lines', () => {
    writeAuditLog(makeEntry(), TEST_LOG_PATH);
    writeAuditLog(makeEntry({ session_id: 'sess-2' }), TEST_LOG_PATH);
    const lines = readFileSync(TEST_LOG_PATH, 'utf-8').trim().split('\n');
    expect(lines).toHaveLength(2);
    expect(JSON.parse(lines[1]).session_id).toBe('sess-2');
  });

  it('masks sensitive values before writing', () => {
    const entry = makeEntry({
      proposed_action: { type: 'type', target: 'password', value: 'secret' },
    });
    writeAuditLog(entry, TEST_LOG_PATH);
    const content = readFileSync(TEST_LOG_PATH, 'utf-8');
    expect(content).not.toContain('secret');
    expect(content).toContain('[MASKED]');
  });

  it('creates directory if it does not exist', () => {
    const newPath = 'tmp/audit/subdir/new-test.jsonl';
    if (existsSync(newPath)) rmSync(newPath);
    writeAuditLog(makeEntry(), newPath);
    expect(existsSync(newPath)).toBe(true);
    rmSync(newPath);
  });
});
