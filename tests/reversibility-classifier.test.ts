import { describe, it, expect } from 'vitest';
import { classifyReversibility } from '../src/reversibility/reversibility-classifier';
import type { ProposedAction } from '../src/types';

const dummyAction: ProposedAction = { type: 'read_screen', target: 'mock://x' };

describe('reversibility-classifier', () => {
  it('read_only → reversible', () => {
    expect(classifyReversibility(dummyAction, 'read_only')).toBe('reversible');
  });

  it('local_ui_navigation → reversible', () => {
    expect(classifyReversibility(dummyAction, 'local_ui_navigation')).toBe('reversible');
  });

  it('data_entry → partially_reversible', () => {
    expect(classifyReversibility(dummyAction, 'data_entry')).toBe('partially_reversible');
  });

  it('external_submission → unknown', () => {
    expect(classifyReversibility(dummyAction, 'external_submission')).toBe('unknown');
  });

  it('configuration_change → unknown', () => {
    expect(classifyReversibility(dummyAction, 'configuration_change')).toBe('unknown');
  });

  it('credential_or_secret_handling → unknown', () => {
    expect(classifyReversibility(dummyAction, 'credential_or_secret_handling')).toBe('unknown');
  });

  it('unknown → unknown', () => {
    expect(classifyReversibility(dummyAction, 'unknown')).toBe('unknown');
  });

  it('file_or_record_deletion → irreversible', () => {
    expect(classifyReversibility(dummyAction, 'file_or_record_deletion')).toBe('irreversible');
  });

  it('payment_or_financial_action → irreversible', () => {
    expect(classifyReversibility(dummyAction, 'payment_or_financial_action')).toBe('irreversible');
  });

  it('public_or_provider_facing_action → irreversible', () => {
    expect(classifyReversibility(dummyAction, 'public_or_provider_facing_action')).toBe('irreversible');
  });
});
