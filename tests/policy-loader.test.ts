import { describe, it, expect } from 'vitest';
import { loadPolicy } from '../src/policy/policy-loader';
import path from 'path';

const POLICY_DIR = path.resolve(__dirname, '../examples/policies');

describe('policy-loader', () => {
  it('loads sandbox-readonly policy without error', () => {
    const policy = loadPolicy(path.join(POLICY_DIR, 'sandbox-readonly.yaml'));
    expect(policy.id).toBe('sandbox-readonly-v1');
    expect(policy.canonical_status).toBe('non_canonical');
    expect(policy.autonomy_mode).toBe('sandbox_autonomy_only');
  });

  it('loads limited-data-entry policy without error', () => {
    const policy = loadPolicy(path.join(POLICY_DIR, 'limited-data-entry.yaml'));
    expect(policy.autonomy_mode).toBe('limited_autonomy');
    expect(policy.canonical_status).toBe('non_canonical');
  });

  it('loads blocked-high-risk policy without error', () => {
    const policy = loadPolicy(path.join(POLICY_DIR, 'blocked-high-risk.yaml'));
    expect(policy.autonomy_mode).toBe('limited_autonomy');
    expect(policy.canonical_status).toBe('non_canonical');
  });

  it('throws on non-existent file', () => {
    expect(() => loadPolicy('/nonexistent/path.yaml')).toThrow();
  });

  it('throws on invalid policy (missing canonical_status)', () => {
    const { writeFileSync, unlinkSync } = require('fs');
    const tmp = '/tmp/bad-policy.yaml';
    writeFileSync(
      tmp,
      'id: bad\nstatus: test\nautonomy_mode: limited_autonomy\n'
    );
    expect(() => loadPolicy(tmp)).toThrow();
    unlinkSync(tmp);
  });

  it('rejects unrestricted_full_autonomy as autonomy_mode', () => {
    const { writeFileSync, unlinkSync } = require('fs');
    const tmp = '/tmp/forbidden-policy.yaml';
    writeFileSync(
      tmp,
      `id: forbidden
status: test
canonical_status: non_canonical
autonomy_mode: unrestricted_full_autonomy
allowed_task_classes: []
blocked_action_types: []
confirmation_required:
  consequence_classes: []
  reversibility: []
limits:
  max_steps: 10
environment_scope:
  allowed_targets: []
  blocked_targets: []
`
    );
    expect(() => loadPolicy(tmp)).toThrow();
    unlinkSync(tmp);
  });
});
