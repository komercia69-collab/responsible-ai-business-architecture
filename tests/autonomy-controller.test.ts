import { describe, it, expect } from 'vitest';
import { decideAutonomy } from '../src/autonomy/autonomy-controller';
import type { PolicyBundle, ProposedAction } from '../src/types';

function makePolicy(autonomy_mode: PolicyBundle['autonomy_mode']): PolicyBundle {
  return {
    id: 'test',
    status: 'test',
    canonical_status: 'non_canonical',
    autonomy_mode,
    allowed_task_classes: [],
    blocked_action_types: [],
    confirmation_required: { consequence_classes: [], reversibility: [] },
    limits: { max_steps: 10 },
    environment_scope: { allowed_targets: [], blocked_targets: [] },
  };
}

const readAction: ProposedAction = { type: 'read_screen', target: 'mock://x' };
const deleteAction: ProposedAction = { type: 'delete', target: 'record-123' };
const typeAction: ProposedAction = { type: 'type', target: 'name-field', value: 'Alice' };
const submitAction: ProposedAction = { type: 'submit', target: 'submit-button' };
const externalUrlAction: ProposedAction = { type: 'open_url', target: 'https://real.site.com' };

describe('autonomy-controller', () => {
  describe('manual_assist', () => {
    it('always returns require_confirmation', () => {
      const policy = makePolicy('manual_assist');
      const r = decideAutonomy(policy, readAction, 'read_only', 'reversible');
      expect(r.decision).toBe('require_confirmation');
      expect(r.reason_codes).toContain('CONFIRMATION_REQUIRED_BY_POLICY');
    });
  });

  describe('sandbox_autonomy_only', () => {
    it('blocks open_url to non-mock target', () => {
      const policy = makePolicy('sandbox_autonomy_only');
      const r = decideAutonomy(policy, externalUrlAction, 'unknown', 'unknown');
      expect(r.decision).toBe('block');
    });

    it('blocks high-risk consequence class', () => {
      const policy = makePolicy('sandbox_autonomy_only');
      const r = decideAutonomy(policy, deleteAction, 'file_or_record_deletion', 'irreversible');
      expect(r.decision).toBe('block');
    });

    it('requires confirmation for unknown reversibility', () => {
      const policy = makePolicy('sandbox_autonomy_only');
      const r = decideAutonomy(policy, submitAction, 'external_submission', 'unknown');
      expect(r.decision).toBe('require_confirmation');
    });

    it('allows low-risk reversible action', () => {
      const policy = makePolicy('sandbox_autonomy_only');
      const r = decideAutonomy(policy, readAction, 'read_only', 'reversible');
      expect(r.decision).toBe('allow');
    });
  });

  describe('limited_autonomy', () => {
    it('allows read_only action', () => {
      const policy = makePolicy('limited_autonomy');
      const r = decideAutonomy(policy, readAction, 'read_only', 'reversible');
      expect(r.decision).toBe('allow');
    });

    it('allows local_ui_navigation action', () => {
      const policy = makePolicy('limited_autonomy');
      const r = decideAutonomy(policy, { type: 'scroll', target: 'mock://x' }, 'local_ui_navigation', 'reversible');
      expect(r.decision).toBe('allow');
    });

    it('allows non-sensitive data_entry', () => {
      const policy = makePolicy('limited_autonomy');
      const r = decideAutonomy(policy, typeAction, 'data_entry', 'partially_reversible');
      expect(r.decision).toBe('allow');
    });

    it('requires confirmation for external_submission', () => {
      const policy = makePolicy('limited_autonomy');
      const r = decideAutonomy(policy, submitAction, 'external_submission', 'unknown');
      expect(r.decision).toBe('require_confirmation');
    });

    it('blocks payment_or_financial_action', () => {
      const policy = makePolicy('limited_autonomy');
      const r = decideAutonomy(policy, { type: 'submit', target: 'pay-button' }, 'payment_or_financial_action', 'irreversible');
      expect(r.decision).toBe('block');
    });

    it('blocks file_or_record_deletion', () => {
      const policy = makePolicy('limited_autonomy');
      const r = decideAutonomy(policy, deleteAction, 'file_or_record_deletion', 'irreversible');
      expect(r.decision).toBe('block');
    });
  });
});
