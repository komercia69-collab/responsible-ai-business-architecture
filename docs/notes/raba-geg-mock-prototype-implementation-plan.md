# RABA Governed Execution Gateway — Mock Prototype Implementation Plan

```yaml
title: RABA Governed Execution Gateway — Mock Prototype Implementation Plan
status: implementation plan candidate
canonical_status: non-canonical
use: planning only / review aid
implementation_authorization: not granted
execution_mode: mock-only
real_ui_tars_integration: blocked
production_status: blocked
related_pr: PR #164
```

## 1. Executive Summary

This document defines a candidate implementation plan for a mock-only prototype of the **RABA Governed Execution Gateway**.

The plan describes how to implement a local prototype that tests RABA governance logic without connecting to real UI-TARS, real GUI automation, real credentials, production systems, GitHub write surfaces, banks, authorities, healthcare systems, or external services.

The implementation plan is not implementation authorization. It is a planning artifact only.

Core implementation goal:

```text
agent proposes action
→ RABA classifies action
→ RABA checks policy
→ RABA checks consequence boundary
→ RABA checks reversibility
→ RABA applies autonomy mode
→ RABA returns decision
→ mock execution proceeds only if allowed
→ audit log records the trace
```

Core RABA boundary:

```text
No proposed action reaches execution unless RABA decision allows it.
```

Russian control version:

```text
Ни одно предложенное действие не попадает в исполнение,
пока RABA явно не разрешила его.
```

## 2. Status and Authority

This document is:

- implementation plan candidate;
- non-canonical;
- planning only;
- review aid;
- mock-only;
- not implementation authorization;
- not merge authorization;
- not production readiness;
- not validation;
- not compliance;
- not certification.

Human Owner confirmation is required before:

- creating implementation files;
- creating code;
- adding tests;
- installing dependencies;
- committing implementation;
- pushing implementation;
- opening an implementation PR;
- connecting any real UI-TARS adapter;
- running any real GUI automation.

AI may assist. Human Owner decides.

Repository presence does not mean approval. Commit existence does not mean canon. Draft PR existence does not mean implementation authorization.

## 3. Relationship to PR #164

PR #164 contains the candidate MVP specification:

```text
docs/notes/raba-governed-execution-gateway-mvp.md
```

This implementation plan is a separate planning document.

PR #164 remains:

```text
draft
non-canonical
review-only
mock-only
implementation blocked
real UI-TARS integration blocked
```

This plan does not modify PR #164 and does not authorize merging PR #164.

## 4. Implementation Scope

If implementation is later authorized by the Human Owner, the prototype scope should be:

```text
TypeScript / Node.js local CLI prototype
Mock execution only
YAML policy loading
JSON scenario loading
Zod validation
JSONL audit logs
Vitest tests
No external services
No real UI automation
No real UI-TARS integration
No credentials
No production systems
```

The implementation must demonstrate governance logic, not autonomous GUI control.

## 5. Non-goals

The implementation must not:

- control a real desktop;
- control a real browser;
- connect to UI-TARS;
- run Puppeteer/NutJS against a real target;
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
- claim provider approval;
- claim partnership;
- claim adoption;
- claim real autonomous GUI safety.

## 6. Proposed File Tree for Future Implementation

The following file tree is a planning candidate only. It must not be created unless implementation is separately authorized.

```text
package.json
tsconfig.json
vitest.config.ts

src/
  types.ts
  policy/
    policy-loader.ts
    policy-schema.ts
  consequence/
    consequence-classifier.ts
  reversibility/
    reversibility-classifier.ts
  autonomy/
    autonomy-controller.ts
  gateway/
    action-filter.ts
    gateway.ts
  session/
    session-manager.ts
  telemetry/
    audit-log.ts
    sanitizer.ts
  providers/
    mock-uitars/
      mock-provider.ts
      scenario-loader.ts
  cli/
    demo.ts

policies/
  sandbox-readonly.yaml
  limited-data-entry.yaml
  blocked-high-risk.yaml

scenarios/
  safe-readonly.json
  data-entry-stop-before-submit.json
  blocked-high-risk.json

tests/
  policy-loader.test.ts
  consequence-classifier.test.ts
  reversibility-classifier.test.ts
  autonomy-controller.test.ts
  action-filter.test.ts
  sanitizer.test.ts
  session-manager.test.ts
  audit-log.test.ts
  scenarios.test.ts
```

## 7. Core Data Types

### 7.1 ProposedAction

```ts
type ProposedAction = {
  type:
    | "read_screen"
    | "click"
    | "type"
    | "scroll"
    | "open_url"
    | "copy"
    | "paste"
    | "submit"
    | "delete"
    | "download"
    | "upload"
    | "run_command";

  target: string;
  value?: string;
  metadata?: Record<string, unknown>;
};
```

### 7.2 GatewayDecision

```ts
type GatewayDecision =
  | "allow"
  | "block"
  | "require_confirmation"
  | "sanitize_then_allow";
```

### 7.3 DecisionResult

```ts
type DecisionResult = {
  decision: GatewayDecision;
  consequence_class: ConsequenceClass;
  reversibility: Reversibility;
  confirmation_required: boolean;
  reason_codes: string[];
  human_readable_reason: string;
  sanitized_action?: ProposedAction;
};
```

### 7.4 ConsequenceClass

```ts
type ConsequenceClass =
  | "read_only"
  | "local_ui_navigation"
  | "data_entry"
  | "external_submission"
  | "configuration_change"
  | "credential_or_secret_handling"
  | "file_or_record_deletion"
  | "payment_or_financial_action"
  | "public_or_provider_facing_action"
  | "unknown";
```

### 7.5 Reversibility

```ts
type Reversibility =
  | "reversible"
  | "partially_reversible"
  | "irreversible"
  | "unknown";
```

### 7.6 AutonomyMode

```ts
type AutonomyMode =
  | "manual_assist"
  | "limited_autonomy"
  | "sandbox_autonomy_only";
```

Forbidden mode:

```text
unrestricted_full_autonomy
```

## 8. Core Modules

### 8.1 Policy Loader

Candidate function:

```ts
loadPolicy(path: string): PolicyBundle
```

Responsibilities:

- read YAML;
- validate structure;
- require `canonical_status: non_canonical`;
- require explicit non-canonical header/comment in future YAML files;
- reject missing or invalid required fields;
- return typed object.

Policy files must remain prototype policy examples, not canonical RABA policy.

### 8.2 Consequence Boundary Classifier

Candidate function:

```ts
classifyConsequence(action: ProposedAction, context: SessionContext): ConsequenceClass
```

MVP candidate mapping:

```text
read_screen → read_only
scroll → local_ui_navigation
click → local_ui_navigation by default
open_url mock://readonly-report → read_only
open_url mock://sandbox-form → local_ui_navigation
type into normal field → data_entry
type into password/api/key/card/token field → credential_or_secret_handling
submit → external_submission
delete → file_or_record_deletion
run_command → configuration_change or unknown
upload → external_submission
download → partially reversible / unknown depending context
target contains payment/pay/card → payment_or_financial_action
target contains public/provider/post/publish → public_or_provider_facing_action
unknown action or target → unknown
```

The classifier must consider:

```text
action.type
action.target
action.value
session context
policy context
mock target scope
```

Main implementation risk:

```text
classification ambiguity
```

The classifier must fail conservatively. Unknown or ambiguous actions should require confirmation or be blocked.

### 8.3 Reversibility Classifier

Candidate function:

```ts
classifyReversibility(action: ProposedAction, consequenceClass: ConsequenceClass): Reversibility
```

MVP candidate mapping:

```text
read_only → reversible
local_ui_navigation → reversible
data_entry → partially_reversible
external_submission → unknown
configuration_change → unknown
credential_or_secret_handling → unknown
file_or_record_deletion → irreversible
payment_or_financial_action → irreversible
public_or_provider_facing_action → partially_reversible or irreversible
unknown → unknown
```

Default rule:

```text
irreversible or unknown → require_confirmation or block
```

### 8.4 Autonomy Controller

Candidate function:

```ts
decideAutonomy(policy, action, consequenceClass, reversibility): PreliminaryDecision
```

Rules:

```text
manual_assist:
  every action → require_confirmation

limited_autonomy:
  read_only / local_ui_navigation → allow
  data_entry → allow if target is mock and not sensitive
  external_submission → require_confirmation
  unknown → require_confirmation or block
  irreversible → block or require_confirmation depending policy

sandbox_autonomy_only:
  allow only if target starts with mock:// or mock-
  block non-mock targets
  high-risk classes → block by default
```

### 8.5 Action Filter

Candidate function:

```ts
filterAction(action: ProposedAction, session: Session, policy: PolicyBundle): DecisionResult
```

This is the main gateway function.

It must perform:

```text
policy check
consequence classification
reversibility classification
autonomy decision
sanitization
final decision
reason codes
human-readable reason
```

### 8.6 Sensitive Data Sanitizer

Candidate function:

```ts
sanitizeAction(action: ProposedAction): ProposedAction
```

MVP masking patterns:

```text
password
passwd
secret
api_key
apikey
token
bearer
card-number
credit-card
iban
ssn
tax-id
```

Example:

```text
api_key=abc123 → api_key=[MASKED]
card-number=4111111111111111 → card-number=[MASKED]
```

Audit logs must not contain raw secrets.

### 8.7 Session Manager

Candidate functions:

```ts
createSession(config): Session
recordStep(session, action, decision): Session
killSession(session, reason): Session
summarizeSession(session): SessionSummary
```

Session status values:

```text
active
completed
blocked
killed
failed
```

Responsibilities:

- step count;
- max steps;
- retry count;
- timeout;
- kill switch mid-sequence;
- partial-sequence summary;
- session summary.

Kill switch rule:

```text
If kill switch is triggered mid-sequence, session stops immediately,
status becomes killed, partial sequence is logged, and a summary is produced before exit.
```

### 8.8 Human Confirmation Router

Candidate MVP behavior:

```text
CLI confirmation prompt only
no auto-confirm
explicit human response required
confirmation decision logged
```

Responsibilities:

- surface action and decision reason to Human Owner;
- wait for explicit response;
- never auto-confirm;
- record confirmation event in audit log;
- stop session if confirmation is denied or absent.

Important boundary:

```text
CLI confirmation is acceptable for mock MVP only.
It is not sufficient for real UI-TARS integration.
```

### 8.9 Telemetry / Audit Log

Candidate function:

```ts
writeAuditLog(entry): void
```

Format: JSONL.

Required fields:

```json
{
  "timestamp": "ISO_TIMESTAMP",
  "session_id": "session-001",
  "business_process_id": "sandbox-data-entry-demo",
  "proposed_action": {
    "type": "submit",
    "target": "submit-button"
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

All output must be clearly marked:

```text
[MOCK]
[SIMULATED]
```

### 8.10 Mock Execution Provider

Candidate functions:

```ts
loadScenario(path): ProposedAction[]
runScenario(actions, gateway, session): ScenarioResult
```

Responsibilities:

- load JSON scenario;
- emit proposed actions;
- pass actions to gateway;
- receive gateway decisions;
- execute only allowed mock actions;
- stop on block or confirmation requirement;
- never control real systems.

Rule:

```text
MockExecutionProvider does not execute real actions.
It only simulates sequences and prints [MOCK] / [SIMULATED] output.
```

Isolation requirement:

```text
Mock provider must be replaceable without changing RABA policy core.
```

### 8.11 CLI Demo

Candidate commands:

```bash
npm run demo:readonly
npm run demo:data-entry
npm run demo:blocked
npm test
```

CLI output must show:

```text
[MOCK] Proposed action:
[MOCK] Consequence class:
[MOCK] Reversibility:
[MOCK] RABA decision:
[MOCK] Reason:
[SIMULATED] Execution result:
```

## 9. Demo Scenarios

### Scenario A — Safe read-only navigation

Expected decisions:

```text
allow
allow
allow
```

Purpose:

```text
Show that low-risk read-only actions can be allowed.
```

### Scenario B — Data entry stops before Submit

Expected decisions:

```text
allow
allow
allow
require_confirmation
```

Purpose:

```text
Show that data entry may be allowed, but external submission requires confirmation.
```

Core formula:

```text
Preparation is not authorization.
Data entry is not submission.
```

### Scenario C — Blocked high-risk action

Expected MVP default:

```text
block
```

Purpose:

```text
Show that high-risk actions are blocked conservatively.
```

## 10. Test Plan

Required test coverage:

```text
policy loading
policy validation
policy rejects missing non-canonical status
read-only action allowed
local navigation allowed
normal data entry allowed in mock scope
credential-like input blocked or confirmation-required
submit requires confirmation
payment target blocked
delete blocked
unknown action blocked or confirmation-required
manual_assist requires confirmation for every action
limited_autonomy permits low-risk only
sandbox_autonomy_only blocks non-mock targets
sensitive data masking
audit log creation
audit log does not include raw secret
step limit enforcement
kill switch mid-sequence
scenario A result
scenario B result
scenario C result
```

## 11. Claude Code Workflow Problem

The practical implementation problem:

```text
CLAUDE.md requires confirmation before every state-changing action.
Implementation sprint creates many files.
If every file/action is confirmed separately, work becomes too slow.
If authorization is too broad, RABA control is weakened.
```

Candidate solution:

```text
Scoped Batch Authorization
```

This means Human Owner may authorize a bounded implementation package, but only with strict file, branch, scope, and blocked-action limits.

Scoped Batch Authorization is not a general permission. It must be explicit, narrow, and task-bound.

## 12. Proposed Scoped Batch Authorization Model

For a future implementation sprint, Claude Code should not receive:

```text
do everything
continue freely
implement all
```

Instead it should receive a bounded package:

```text
Authorized:
- create one implementation branch
- create only listed files/folders
- implement only mock-only prototype
- use only approved dependencies
- modify only approved files
- run tests
- commit only approved implementation scope
- push only approved branch
- open draft PR only

Blocked:
- real UI-TARS
- real GUI automation
- external services
- credentials
- production systems
- README changes
- canon doc changes
- CLAUDE.md changes
- workflows
- labels/issues/milestones
- ready-for-review
- merge
- public/provider/compliance/validation/safety claims
```

## 13. Proposed Two-Phase Implementation Control

### Phase 1 — Documentation-only Implementation Plan PR

This document.

Status:

```text
planning only
non-canonical
review-only
no implementation
```

### Phase 2 — Mock Prototype Implementation PR

Future separate PR, only after explicit Human Owner authorization.

Status should be:

```text
mock-only implementation
non-canonical
review-only
real UI-TARS blocked
production blocked
```

Phase 2 must not begin from the existence of this plan alone.

## 14. Human Owner Decisions Needed

Before implementation begins:

```text
1. Approve implementation branch.
2. Approve exact file tree.
3. Approve package manager.
4. Approve dependencies.
5. Approve scoped batch authorization.
6. Approve commit boundary.
7. Approve draft PR.
8. Confirm no real UI-TARS.
9. Confirm no real GUI automation.
10. Confirm no credentials.
11. Confirm no production systems.
```

Before any real UI-TARS integration:

```text
1. Separate risk review.
2. Local sandbox only.
3. No credentials.
4. No production.
5. Kill switch.
6. Audit review.
7. Explicit Human Owner approval.
```

## 15. Remaining Open Questions

```text
1. Should package manager be npm, pnpm, or yarn?
2. Which dependencies are approved for Phase 2?
3. Should confirmation simulation use CLI stdin or a fixture file?
4. Should audit logs be written to logs/ or tmp/?
5. Should generated audit logs be gitignored?
6. Should policy YAML live in policies/ or examples/policies/ to avoid canonical confusion?
7. Should scenarios live in scenarios/ or examples/scenarios/?
8. Should the implementation PR include docs/demo-output.md?
9. How strict should CLAUDE.md confirmation be during the implementation sprint?
10. Should Phase 2 be one implementation PR or split into core + CLI + tests?
```

## 16. Recommendation

Recommended next step after this planning PR:

```text
Keep this plan as draft.
Review open questions.
Then decide whether to authorize Phase 2 mock-only implementation.
```

Do not begin implementation from this document alone.
