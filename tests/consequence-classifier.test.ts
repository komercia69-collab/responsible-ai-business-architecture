import { describe, it, expect } from 'vitest';
import { classifyConsequence } from '../src/consequence/consequence-classifier';
import type { ProposedAction } from '../src/types';

function action(type: ProposedAction['type'], target: string, value?: string): ProposedAction {
  return { type, target, value };
}

describe('consequence-classifier', () => {
  it('read_screen → read_only', () => {
    expect(classifyConsequence(action('read_screen', 'mock://readonly-report'))).toBe('read_only');
  });

  it('scroll → local_ui_navigation', () => {
    expect(classifyConsequence(action('scroll', 'mock://readonly-report'))).toBe('local_ui_navigation');
  });

  it('copy → local_ui_navigation', () => {
    expect(classifyConsequence(action('copy', 'any-target'))).toBe('local_ui_navigation');
  });

  it('paste → local_ui_navigation', () => {
    expect(classifyConsequence(action('paste', 'any-target'))).toBe('local_ui_navigation');
  });

  it('open_url mock://readonly-report → read_only', () => {
    expect(classifyConsequence(action('open_url', 'mock://readonly-report'))).toBe('read_only');
  });

  it('open_url mock://sandbox-form → local_ui_navigation', () => {
    expect(classifyConsequence(action('open_url', 'mock://sandbox-form'))).toBe('local_ui_navigation');
  });

  it('open_url mock://blocked-payment-screen → payment_or_financial_action', () => {
    expect(classifyConsequence(action('open_url', 'mock://blocked-payment-screen'))).toBe(
      'payment_or_financial_action'
    );
  });

  it('open_url non-mock → unknown', () => {
    expect(classifyConsequence(action('open_url', 'https://example.com'))).toBe('unknown');
  });

  it('type to name-field → data_entry', () => {
    expect(classifyConsequence(action('type', 'name-field', 'Alice'))).toBe('data_entry');
  });

  it('type to card-number → credential_or_secret_handling', () => {
    expect(classifyConsequence(action('type', 'card-number', '4111111111111111'))).toBe(
      'credential_or_secret_handling'
    );
  });

  it('type to password field → credential_or_secret_handling', () => {
    expect(classifyConsequence(action('type', 'password', 'secret123'))).toBe(
      'credential_or_secret_handling'
    );
  });

  it('submit to submit-button → external_submission', () => {
    expect(classifyConsequence(action('submit', 'submit-button'))).toBe('external_submission');
  });

  it('submit to pay-button → payment_or_financial_action', () => {
    expect(classifyConsequence(action('submit', 'pay-button'))).toBe('payment_or_financial_action');
  });

  it('delete → file_or_record_deletion', () => {
    expect(classifyConsequence(action('delete', 'some-record'))).toBe('file_or_record_deletion');
  });

  it('run_command → configuration_change', () => {
    expect(classifyConsequence(action('run_command', 'apply-settings'))).toBe('configuration_change');
  });

  it('upload → external_submission', () => {
    expect(classifyConsequence(action('upload', 'file.pdf'))).toBe('external_submission');
  });

  it('download from mock target → local_ui_navigation', () => {
    expect(classifyConsequence(action('download', 'mock://report.pdf'))).toBe('local_ui_navigation');
  });

  it('download from non-mock target → unknown', () => {
    expect(classifyConsequence(action('download', 'https://external.com/file.pdf'))).toBe('unknown');
  });

  it('click on safe mock target → local_ui_navigation', () => {
    expect(classifyConsequence(action('click', 'mock://sandbox-form#next-button'))).toBe(
      'local_ui_navigation'
    );
  });

  it('click on delete button → file_or_record_deletion', () => {
    expect(classifyConsequence(action('click', 'delete-record-btn'))).toBe('file_or_record_deletion');
  });
});
