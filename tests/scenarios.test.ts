import { describe, it, expect } from 'vitest';
import path from 'path';
import { loadPolicy } from '../src/policy/policy-loader';
import { loadScenario } from '../src/providers/mock-uitars/scenario-loader';
import { createSession } from '../src/session/session-manager';
import { runScenario } from '../src/providers/mock-uitars/mock-provider';

const POLICIES = path.resolve(__dirname, '../examples/policies');
const SCENARIOS = path.resolve(__dirname, '../examples/scenarios');
const TEST_LOG = 'tmp/audit/test-scenarios.jsonl';

describe('scenarios end-to-end', () => {
  it('safe-readonly: all 3 actions allowed', () => {
    const policy = loadPolicy(path.join(POLICIES, 'sandbox-readonly.yaml'));
    const scenario = loadScenario(path.join(SCENARIOS, 'safe-readonly.json'));
    const session = createSession(scenario.name, policy);
    const result = runScenario(scenario, session, policy, TEST_LOG);

    expect(result.results).toHaveLength(3);
    expect(result.results[0].decision.decision).toBe('allow');
    expect(result.results[1].decision.decision).toBe('allow');
    expect(result.results[2].decision.decision).toBe('allow');
    expect(result.session_summary.step_count).toBe(3);
  });

  it('data-entry-stop-before-submit: 3 allowed, 1 stopped', () => {
    const policy = loadPolicy(path.join(POLICIES, 'limited-data-entry.yaml'));
    const scenario = loadScenario(path.join(SCENARIOS, 'data-entry-stop-before-submit.json'));
    const session = createSession(scenario.name, policy);
    const result = runScenario(scenario, session, policy, TEST_LOG);

    expect(result.results.length).toBeGreaterThanOrEqual(1);
    // open_url mock://sandbox-form → local_ui_navigation → allow
    expect(result.results[0].decision.decision).toBe('allow');
    // type name-field → data_entry → allow
    expect(result.results[1].decision.decision).toBe('allow');
    // type note-field → data_entry → allow
    expect(result.results[2].decision.decision).toBe('allow');
    // submit → external_submission → require_confirmation (stops)
    expect(result.results[3].decision.decision).toBe('require_confirmation');
    // sequence stopped after 4 steps
    expect(result.session_summary.step_count).toBe(4);
    // Patch A: session status must be pending_confirmation after HITL stop
    expect(result.session_summary.status).toBe('pending_confirmation');
  });

  it('blocked-high-risk: first action blocks, sequence stops', () => {
    const policy = loadPolicy(path.join(POLICIES, 'blocked-high-risk.yaml'));
    const scenario = loadScenario(path.join(SCENARIOS, 'blocked-high-risk.json'));
    const session = createSession(scenario.name, policy);
    const result = runScenario(scenario, session, policy, TEST_LOG);

    // First action: open_url mock://blocked-payment-screen → payment_or_financial_action
    // limited_autonomy blocks payment_or_financial_action
    expect(result.results).toHaveLength(1);
    expect(result.results[0].decision.decision).toBe('block');
    expect(result.session_summary.step_count).toBe(1);
    // Patch A: session status must not be active after a block stop
    expect(result.session_summary.status).not.toBe('active');
  });

  it('scenario name is preserved in result', () => {
    const policy = loadPolicy(path.join(POLICIES, 'sandbox-readonly.yaml'));
    const scenario = loadScenario(path.join(SCENARIOS, 'safe-readonly.json'));
    const session = createSession(scenario.name, policy);
    const result = runScenario(scenario, session, policy, TEST_LOG);
    expect(result.scenario_name).toBe('safe-readonly');
  });
});
