# RABA Governed Execution Gateway MVP

```yaml
title: RABA Governed Execution Gateway MVP
status: candidate prototype spec
canonical_status: non-canonical
use: review-only / local prototype planning
execution_mode: mock-only
production_status: blocked
human_owner_approval_required_for:
  - repository changes
  - prototype implementation
  - real UI-TARS integration
  - public positioning
  - provider-facing use
  - compliance or validation claims
```

## 1. Executive Summary

This document defines a candidate MVP for a **RABA Governed Execution Gateway**.

The purpose of the prototype is to show how RABA can sit above a GUI execution agent such as UI-TARS and decide whether proposed interface actions are:

- admissible;
- observable;
- reversible;
- authorized;
- within the current autonomy boundary.

The MVP must not connect to real UI-TARS, real browser automation, real operating system control, real credentials, production SaaS, customer data, GitHub write actions, banks, authorities, or external systems.

The first prototype uses a **mock execution provider**. The mock provider simulates GUI actions so that RABA governance logic can be tested safely.

Core formula:

```text
UI-TARS may execute interface-level actions,
but RABA determines whether an action is admissible, observable, reversible, and authorized.
```

Russian control version:

```text
UI-TARS может выполнять действия на уровне интерфейса,
но RABA определяет, допустимо ли действие, наблюдаемо ли оно,
обратимо ли оно и авторизовано ли оно.
```

## 2. Purpose

The MVP exists to test a governance pattern before connecting to any real execution layer.

The prototype should demonstrate:

1. an agent proposes an action;
2. RABA classifies the action;
3. RABA checks policy;
4. RABA detects consequence boundary crossing;
5. RABA checks reversibility;
6. RABA determines autonomy mode;
7. RABA returns a decision:
   - allow;
   - block;
   - require_confirmation;
   - sanitize_then_allow;
8. the decision is written to audit log;
9. mock execution proceeds only if allowed.

The prototype is not a proof of safety, compliance, certification, readiness, adoption, partnership, or validation.

## 3. Non-goals

The MVP must not:

- control a real desktop;
- control a real browser;
- enter real credentials;
- submit real forms;
- modify real records;
- delete real files;
- send real emails;
- access bank, government, healthcare, production SaaS, or GitHub write surfaces;
- claim that RABA "makes UI-TARS safe";
- claim production readiness;
- claim compliance;
- claim certification;
- claim external validation;
- claim provider approval.

The MVP is a **governance demonstration**, not a production agent.

## 4. Architecture

The MVP architecture has six conceptual layers:

```text
1. RABA Canon & Policy Layer
2. Business Capability & Risk Layer
3. Governance & Orchestration Layer
4. Governed Execution Gateway
5. Mock UI-TARS Execution Layer
6. Mock Host Environment
```

For the MVP, layers 5 and 6 are simulated.

### Layer 1 — RABA Canon & Policy Layer

Defines the authority boundary:

```text
AI may assist.
Human Owner decides.
Repository presence does not mean approval.
Commit existence does not mean canon.
Prototype success does not mean validation.
```

### Layer 2 — Business Capability & Risk Layer

Defines the business process context for a session:

```yaml
business_process_id: sandbox-data-entry-demo
task_class: sandbox_data_entry
risk_level: medium
environment: mock
```

### Layer 3 — Governance & Orchestration Layer

Contains:

- Policy Engine;
- Consequence Boundary Classifier;
- Reversibility Classifier;
- Autonomy Controller;
- Human Confirmation Router.

### Layer 4 — Governed Execution Gateway

The central gateway between proposed actions and execution.

It receives:

```json
{
  "session_id": "session-001",
  "action": {
    "type": "submit",
    "target": "mock-form-submit-button"
  }
}
```

It returns:

```json
{
  "decision": "require_confirmation",
  "reason_codes": ["CONSEQUENCE_EXTERNAL_SUBMISSION", "CONFIRMATION_REQUIRED_BY_POLICY"],
  "human_readable_reason": "Submitting this form may create an external state change and requires Human Owner confirmation."
}
```

### Layer 5 — Mock UI-TARS Execution Layer

Simulates an execution agent that proposes GUI actions.

It does not control any real screen.

### Layer 6 — Mock Host Environment

Simulated application state, for example:

```text
mock://sandbox-form
mock://readonly-report
mock://blocked-payment-screen
```

## 5. Component Model

### 5.1 Policy Engine

Loads YAML policy bundles.

Required policy fields:

```yaml
id: limited-data-entry
status: candidate_prototype
canonical_status: non_canonical
mode: limited_autonomy

allowed_task_classes:
  - read_only_navigation
  - sandbox_data_entry

blocked_action_types:
  - delete
  - payment
  - credential_entry
  - run_command
  - upload

confirmation_required:
  consequence_classes:
    - external_submission
    - configuration_change
    - file_or_record_deletion
    - payment_or_financial_action
    - public_or_provider_facing_action
  reversibility:
    - irreversible
    - unknown

limits:
  max_steps: 20
  max_retries: 2

environment_scope:
  allowed_targets:
    - mock://sandbox-form
    - mock://readonly-report
  blocked_targets:
    - production
    - banking
    - github-write
    - government-portal
```

Policy YAML files must include an explicit non-canonical header comment. Example:

```yaml
# status: candidate_prototype
# canonical_status: non_canonical
# This policy file is not canonical RABA policy.
# It is a review-only example for local prototype use only.
```

This comment must appear at the top of every policy YAML file created for the prototype. Policy YAML files must not be shared, published, or used outside the local prototype without separate Human Owner authorization.

### 5.2 Consequence Boundary Classifier

Classifies proposed actions into consequence classes:

```text
read_only
local_ui_navigation
data_entry
external_submission
configuration_change
credential_or_secret_handling
file_or_record_deletion
payment_or_financial_action
public_or_provider_facing_action
unknown
```

Boundary rule:

```text
If an action crosses into a higher consequence class,
RABA must either require confirmation or block it.
```

### 5.3 Reversibility Classifier

Classifies reversibility:

```text
reversible
partially_reversible
irreversible
unknown
```

Default rule:

```text
irreversible or unknown → require_confirmation or block
```

### 5.4 Autonomy Controller

Allowed autonomy modes:

```text
manual_assist
limited_autonomy
sandbox_autonomy_only
```

Not allowed:

```text
unrestricted_full_autonomy
```

Rules:

```text
manual_assist:
  every action requires confirmation

limited_autonomy:
  low-risk read-only or local navigation actions may be allowed
  boundary-crossing actions require confirmation

sandbox_autonomy_only:
  actions may execute only in mock/sandbox targets
  no production or external side effects
```

### 5.5 Action Filter

Supported proposed actions:

```text
read_screen
click
type
scroll
open_url
copy
paste
submit
delete
download
upload
run_command
```

Possible decisions:

```text
allow
block
require_confirmation
sanitize_then_allow
```

### 5.6 Session Manager

Each session must include:

```json
{
  "session_id": "session-001",
  "business_process_id": "sandbox-data-entry-demo",
  "policy_bundle": "limited-data-entry",
  "autonomy_mode": "limited_autonomy",
  "step_limit": 20,
  "environment_scope": "mock",
  "started_at": "ISO_TIMESTAMP",
  "status": "active"
}
```

Session manager must support:

- step counting;
- retry counting;
- timeout;
- stop;
- kill switch;
- summary report.

### 5.7 Telemetry & Audit Log

Every decision must be logged as JSONL.

Required fields:

```json
{
  "timestamp": "ISO_TIMESTAMP",
  "session_id": "session-001",
  "business_process_id": "sandbox-data-entry-demo",
  "proposed_action": {
    "type": "submit",
    "target": "mock-form-submit-button"
  },
  "consequence_class": "external_submission",
  "reversibility": "unknown",
  "policy_decision": "require_confirmation",
  "reason_codes": [
    "CONSEQUENCE_EXTERNAL_SUBMISSION",
    "REVERSIBILITY_UNKNOWN",
    "CONFIRMATION_REQUIRED_BY_POLICY"
  ],
  "confirmation_required": true,
  "simulated_execution_result": "not_executed_pending_confirmation"
}
```

Sensitive strings must be masked.

Example:

```text
password=secret123 → password=[MASKED]
api_key=abc123 → api_key=[MASKED]
```

### 5.8 Human Confirmation Router

Routes decisions that require Human Owner confirmation before execution may proceed.

Responsibilities:

- receive a `require_confirmation` decision from the Action Filter;
- surface the proposed action, consequence class, reversibility, and reason codes to the Human Owner;
- wait for explicit Human Owner response before allowing or rejecting execution;
- record the confirmation or rejection in the audit log;
- never infer confirmation from timeout, silence, or AI agreement.

Required confirmation log entry:

```json
{
  "confirmation_event": "human_confirmation_received",
  "decision": "confirmed",
  "confirmed_by": "human_owner",
  "session_id": "session-001",
  "action_type": "submit",
  "timestamp": "ISO_TIMESTAMP"
}
```

For MVP, confirmation may be simulated via CLI prompt.
The router must never auto-confirm.

### 5.9 Mock Execution Provider

Simulates a GUI execution agent (UI-TARS) for the MVP.

Responsibilities:

- emit a pre-defined sequence of proposed actions from a scenario file;
- pass each proposed action to the Governed Execution Gateway;
- receive the gateway decision and log the simulated execution result;
- not control any real screen, browser, OS, or external system.

The mock provider must be isolated from the RABA policy core so that it can later be replaced by a real UI-TARS adapter without modifying any policy, consequence, reversibility, autonomy, or session logic.

Interface contract:

```text
Input:  proposed action (JSON)
Output: gateway decision + reason codes
```

The mock provider must label every output as simulated:

```text
[MOCK] Action: submit → Decision: require_confirmation
[MOCK] Simulated execution: not_executed_pending_confirmation
```

## 6. Demo Scenarios

### Scenario A — Safe read-only navigation

Purpose:

```text
Show that low-risk read-only actions can be allowed.
```

Mock action sequence:

```json
[
  { "type": "open_url", "target": "mock://readonly-report" },
  { "type": "read_screen", "target": "mock-report-page" },
  { "type": "scroll", "target": "mock-report-page" }
]
```

Expected result:

```text
allow
allow
allow
```

### Scenario B — Data entry stops before Submit

Purpose:

```text
Show that data entry may be allowed, but external submission requires confirmation.
```

Mock action sequence:

```json
[
  { "type": "open_url", "target": "mock://sandbox-form" },
  { "type": "type", "target": "name-field", "value": "Test User" },
  { "type": "type", "target": "note-field", "value": "Sandbox note" },
  { "type": "submit", "target": "submit-button" }
]
```

Expected result:

```text
allow
allow
allow
require_confirmation
```

Core RABA rule demonstrated:

```text
Preparation is not authorization.
Data entry is not submission.
```

### Scenario C — Blocked high-risk action

Purpose:

```text
Show that high-risk actions are blocked or require explicit confirmation.
```

Mock action sequence:

```json
[
  { "type": "open_url", "target": "mock://blocked-payment-screen" },
  { "type": "type", "target": "card-number", "value": "4111111111111111" },
  { "type": "submit", "target": "pay-button" }
]
```

Expected result:

```text
block
```

or:

```text
require_confirmation
```

depending on policy, but MVP default should be **block**.

## 7. Acceptance Criteria

The MVP is acceptable as a prototype only if:

```text
1. It runs locally.
2. It uses mock execution only.
3. It loads YAML policies.
4. It validates proposed actions.
5. It classifies consequence class.
6. It classifies reversibility.
7. It applies autonomy mode.
8. It returns allow / block / require_confirmation / sanitize_then_allow.
9. It writes JSONL audit logs.
10. It masks sensitive strings.
11. It enforces step limits.
12. It supports kill switch.
13. It includes tests.
14. It does not connect to real UI-TARS or real GUI automation.
15. It clearly states non-canonical, review-only status.
16. The RABA policy core (policy, consequence, reversibility, autonomy, session, gateway) is fully separable from the mock execution provider. Replacing the mock provider with a real adapter must require zero changes to policy core files.
17. The CLI demo output labels every result as mock/simulated. No result may be printed without a [MOCK] or [SIMULATED] prefix.
18. When the kill switch is triggered mid-sequence, the session stops immediately, no further actions are proposed or executed, the partial sequence is written to the audit log with status killed, and the session summary is produced before exit.
```

## 8. Tests

Required unit tests:

```text
policy loading
policy validation
allowed read-only action
blocked action type
confirmation-required action
consequence boundary escalation
reversibility unknown handling
sensitive string masking
step limit enforcement
kill switch
audit log creation
mock scenario A
mock scenario B
mock scenario C
```

## 9. Suggested Implementation Stack

Recommended:

```text
TypeScript / Node.js
YAML policy files
Zod for validation
Vitest for tests
JSONL for audit logs
CLI demo
```

Why TypeScript:

```text
UI-TARS / Agent TARS ecosystem is close to Node/TS.
Policies and action schemas benefit from typed validation.
CLI prototype can stay local and lightweight.
```

No external services required.

## 10. Suggested Folder Structure

```text
src/
  policy/
  consequence/
  reversibility/
  autonomy/
  gateway/
  session/
  telemetry/
  providers/
    mock-uitars/
  cli/

policies/
  sandbox-readonly.yaml
  limited-data-entry.yaml
  blocked-high-risk.yaml

scenarios/
  safe-readonly.json
  data-entry-stop-before-submit.json
  blocked-high-risk.json

tests/

docs/
  prototype-overview.md
  architecture.md
  safety-boundaries.md
```

## 11. Blocked Claims

The prototype must not claim:

```text
RABA controls UI-TARS in production
RABA makes UI-TARS safe
RABA is validated
RABA is certified
RABA is compliant
RABA is audit-ready
RABA is regulator-approved
RABA is provider-approved
RABA has adoption
RABA has partnership approval
RABA is production-ready
RABA can safely run autonomous GUI agents
```

Allowed wording:

```text
candidate prototype
non-canonical
review-only
mock-only
governance gateway pattern
local demonstration
architecture validation aid
```

## 12. Human Owner Decisions Needed

Before any repository work beyond this authorized documentation-only PR:

```text
1. Approve further edits.
2. Approve ready-for-review.
3. Approve merge.
4. Approve prototype implementation.
5. Approve real UI-TARS integration.
```

Before implementation:

```text
1. Approve prototype implementation.
2. Approve implementation scope.
3. Approve mock-only execution mode.
4. Approve separate implementation branch.
5. Approve files to be created.
```

Before real UI-TARS integration:

```text
1. Approve real adapter design.
2. Approve local sandbox only.
3. Approve no credentials.
4. Approve no production systems.
5. Approve kill switch and audit controls.
6. Complete a separate risk re-evaluation before any real UI-TARS adapter is connected.
```

Note: mock prototype success does not constitute risk re-evaluation for real execution.
A real adapter introduces real-system side effects, real credential exposure risk, and real
irreversible action risk that are not present in mock execution. A separate, scoped risk
review must be authorized and completed by the Human Owner before any real adapter work begins.

## 13. Open Questions

```text
1. Should MVP start as documentation-only PR or implementation PR?
2. Should policy YAML be treated as prototype policy or candidate RABA policy?
3. Should confirmation simulation be CLI-based or file-based?
4. Should audit logs include screenshots later, or only hashes / metadata?
5. Should the first real adapter target UI-TARS Desktop, Agent TARS, or a neutral ExecutionProvider interface?
6. Should CLAUDE.md strict confirmation mode be adjusted before implementation work begins?
```

## 14. Recommended Next Best Step

Do **not** start implementation yet.

Recommended next step after this PR:

```text
Review documentation-only MVP Spec PR.
```

Suggested PR status:

```text
draft
non-canonical
review-only
no implementation
```
