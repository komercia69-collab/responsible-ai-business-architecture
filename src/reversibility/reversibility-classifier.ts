import type { ProposedAction, ConsequenceClass, Reversibility } from '../types';

export function classifyReversibility(
  _action: ProposedAction,
  consequenceClass: ConsequenceClass
): Reversibility {
  switch (consequenceClass) {
    case 'read_only':
    case 'local_ui_navigation':
      return 'reversible';

    case 'data_entry':
      return 'partially_reversible';

    case 'external_submission':
    case 'configuration_change':
    case 'credential_or_secret_handling':
    case 'unknown':
      return 'unknown';

    case 'file_or_record_deletion':
    case 'payment_or_financial_action':
    case 'public_or_provider_facing_action':
      return 'irreversible';

    default:
      return 'unknown';
  }
}
