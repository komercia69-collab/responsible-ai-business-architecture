export type ActionType =
  | 'read_screen'
  | 'click'
  | 'type'
  | 'scroll'
  | 'open_url'
  | 'copy'
  | 'paste'
  | 'submit'
  | 'delete'
  | 'download'
  | 'upload'
  | 'run_command';

export type GatewayDecision =
  | 'allow'
  | 'block'
  | 'require_confirmation'
  | 'sanitize_then_allow';

export type ConsequenceClass =
  | 'read_only'
  | 'local_ui_navigation'
  | 'data_entry'
  | 'external_submission'
  | 'configuration_change'
  | 'credential_or_secret_handling'
  | 'file_or_record_deletion'
  | 'payment_or_financial_action'
  | 'public_or_provider_facing_action'
  | 'unknown';

export type Reversibility =
  | 'reversible'
  | 'partially_reversible'
  | 'irreversible'
  | 'unknown';

// unrestricted_full_autonomy is explicitly forbidden and not included
export type AutonomyMode =
  | 'manual_assist'
  | 'limited_autonomy'
  | 'sandbox_autonomy_only';

export type SessionStatus =
  | 'active'
  | 'completed'
  | 'blocked'
  | 'killed'
  | 'failed';

export interface ProposedAction {
  type: ActionType;
  target: string;
  value?: string;
  metadata?: Record<string, unknown>;
}

export interface DecisionResult {
  decision: GatewayDecision;
  consequence_class: ConsequenceClass;
  reversibility: Reversibility;
  confirmation_required: boolean;
  reason_codes: string[];
  human_readable_reason: string;
  sanitized_action?: ProposedAction;
}

export interface PolicyLimits {
  max_steps: number;
  max_retries?: number;
}

export interface EnvironmentScope {
  allowed_targets: string[];
  blocked_targets: string[];
}

export interface ConfirmationRule {
  consequence_classes: ConsequenceClass[];
  reversibility: Reversibility[];
}

export interface PolicyBundle {
  id: string;
  status: string;
  canonical_status: 'non_canonical';
  autonomy_mode: AutonomyMode;
  allowed_task_classes: string[];
  blocked_action_types: ActionType[];
  confirmation_required: ConfirmationRule;
  limits: PolicyLimits;
  environment_scope: EnvironmentScope;
}

export interface SessionContext {
  session_id: string;
  business_process_id: string;
  policy: PolicyBundle;
  autonomy_mode: AutonomyMode;
  step_count: number;
  step_limit: number;
}

export interface Session {
  session_id: string;
  business_process_id: string;
  policy_bundle: string;
  autonomy_mode: AutonomyMode;
  step_limit: number;
  environment_scope: string;
  started_at: string;
  status: SessionStatus;
  step_count: number;
  steps: Array<{ action: ProposedAction; decision: DecisionResult }>;
  kill_reason?: string;
}

export interface SessionSummary {
  session_id: string;
  business_process_id: string;
  status: SessionStatus;
  step_count: number;
  step_limit: number;
  started_at: string;
  ended_at: string;
  kill_reason?: string;
  steps: Array<{ action: ProposedAction; decision: GatewayDecision }>;
}

export interface AuditLogEntry {
  timestamp: string;
  session_id: string;
  business_process_id: string;
  proposed_action: ProposedAction;
  consequence_class: ConsequenceClass;
  reversibility: Reversibility;
  policy_decision: GatewayDecision;
  reason_codes: string[];
  confirmation_required: boolean;
  simulated_execution_result: string;
}

export interface Scenario {
  name: string;
  description?: string;
  actions: ProposedAction[];
}

export interface MockExecutionResult {
  action: ProposedAction;
  decision: DecisionResult;
  simulated_execution_result: string;
}

export interface ScenarioResult {
  scenario_name: string;
  session_summary: SessionSummary;
  results: MockExecutionResult[];
}
