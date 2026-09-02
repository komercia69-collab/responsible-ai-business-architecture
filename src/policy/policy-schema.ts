import { z } from 'zod';

const ActionTypeSchema = z.enum([
  'read_screen',
  'click',
  'type',
  'scroll',
  'open_url',
  'copy',
  'paste',
  'submit',
  'delete',
  'download',
  'upload',
  'run_command',
]);

const ConsequenceClassSchema = z.enum([
  'read_only',
  'local_ui_navigation',
  'data_entry',
  'external_submission',
  'configuration_change',
  'credential_or_secret_handling',
  'file_or_record_deletion',
  'payment_or_financial_action',
  'public_or_provider_facing_action',
  'unknown',
]);

const ReversibilitySchema = z.enum([
  'reversible',
  'partially_reversible',
  'irreversible',
  'unknown',
]);

// unrestricted_full_autonomy is explicitly forbidden
const AutonomyModeSchema = z.enum([
  'manual_assist',
  'limited_autonomy',
  'sandbox_autonomy_only',
]);

export const PolicyBundleSchema = z.object({
  id: z.string(),
  status: z.string(),
  canonical_status: z.literal('non_canonical'),
  autonomy_mode: AutonomyModeSchema,
  allowed_task_classes: z.array(z.string()),
  blocked_action_types: z.array(ActionTypeSchema),
  confirmation_required: z.object({
    consequence_classes: z.array(ConsequenceClassSchema),
    reversibility: z.array(ReversibilitySchema),
  }),
  limits: z.object({
    max_steps: z.number().int().positive(),
    max_retries: z.number().int().nonnegative().optional(),
  }),
  environment_scope: z.object({
    allowed_targets: z.array(z.string()),
    blocked_targets: z.array(z.string()),
  }),
});

export type ValidatedPolicyBundle = z.infer<typeof PolicyBundleSchema>;
