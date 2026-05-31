# RABA Responsibility Event Topology

**Status:** Architecture Working Note  
**Canonical status:** Non-canonical. This document is a topology stabilization aid and does not define accepted RABA architecture.  
**Purpose:** Normalize responsibility-relevant event types, state transitions, replay requirements, and audit boundaries across RABA.  
**Review context:** Created after external structural review identified a missing canonical Responsibility Event topology.  
**Related concepts:** Responsibility Event Stream, Governance Gateway, Decision Log, Human Owner Confirmation, Responsibility Acceptance, Governed Bypass Lane, Human Response Window, Active Evidence Interlock, Bind-Time Admissibility, Contextual Legitimacy, Reversibility Profile, Escalation Ownership, Policy Integrity, Semantic Dependency Map

## 1. Why This Topology Exists

RABA uses responsibility events across many concepts:

- approval states;
- Governance Gateway decisions;
- escalation;
- audit;
- Decision Log entries;
- corrective governance;
- contextual legitimacy;
- responsibility realization;
- responsibility acceptance;
- governed bypass;
- Human Response Window;
- bind-time admissibility;
- human confirmation.

The risk is that events are referenced everywhere but not normalized.

Without a topology, the project may lose consistency in:

- replay reconstruction;
- audit consistency;
- state-transition integrity;
- governance drift detection;
- responsibility traceability.

This working note defines a first non-canonical topology for responsibility events.

## 2. Core Principle

A Responsibility Event is not just a technical log entry.

It is a structured record of a responsibility-relevant state change.

A valid Responsibility Event should help answer:

- what changed;
- who or what caused the change;
- what authority existed;
- what evidence existed;
- what policy or gateway condition applied;
- whether responsibility was requested, assigned, accepted, rejected, or expired;
- whether the workflow entered governed bypass or remained in consequential execution path;
- whether the Human Response Window was opened, extended, expired, or satisfied;
- whether the action was allowed, blocked, escalated, bypassed, or executed;
- what remains human or organizational responsibility;
- what can be replayed later.

## 3. Event Topology Direction

The event topology should preserve the dependency direction defined in the Semantic Dependency Map:

```text
Human authority
→ policy
→ runtime check
→ gateway outcome
→ event record
→ decision log
→ audit/review
```

Responsibility Events record transitions.

They do not authorize transitions by themselves.

## 4. Protected State Separation

RABA should preserve the difference between:

```text
RECOMMEND → AUTHORIZED → EXECUTED
```

These states must not collapse.

A recommendation is not authorization.

Authorization is not execution.

Execution does not remove human or organizational accountability.

Responsibility Events should make transitions between these states explicit.

RABA should also preserve the difference between:

```text
VISIBLE → ASSIGNED → ACCEPTED
```

A visible responsible role is not accepted responsibility.

An assigned role is not accepted responsibility.

Accepted responsibility requires an accountable person or role to accept a defined scope, authority boundary, and correction obligation.

RABA should also preserve the difference between:

```text
WAITING → GOVERNED BYPASS → CONSEQUENTIAL EXECUTION
```

Governed bypass is not passive waiting.

Governed bypass is consequence-safe continuation while missing authority, responsibility, evidence, or admissibility conditions are resolved.

A bypass path must not be treated as authority to create consequence.

## 5. Event Families

Responsibility Events can be grouped into families.

| Event family | Purpose |
|---|---|
| Proposal events | Record AI or human proposals before authorization. |
| Evidence events | Record evidence availability, freshness, source, and admissibility. |
| Review events | Record human or role-based review activity. |
| Confirmation events | Record active confirmation or authorization state. |
| Responsibility acceptance events | Record responsibility request, assignment, acceptance, rejection, expiration, and correction obligation. |
| Bypass events | Record governed bypass entry, allowed preparatory actions, Human Response Window state, bypass exit, escalation, or block. |
| Gateway events | Record allow / block / escalate / bypass decisions. |
| Execution events | Record attempted, completed, failed, or blocked execution. |
| Escalation events | Record routing of unclear or high-risk cases. |
| Consequence events | Record observed downstream outcomes or harms. |
| Correction events | Record rollback, correction, amendment, or remediation. |
| Audit events | Record replay, audit, inspection, and decision-log linkage. |

## 6. Candidate Event Types

This is a first working set of event types.

### Proposal events

```text
recommendation_created
proposal_scope_defined
action_class_detected
risk_class_estimated
```

### Evidence events

```text
evidence_requested
evidence_retrieved
evidence_snapshot_created
evidence_freshness_checked
evidence_missing
evidence_stale
evidence_disputed
evidence_admissibility_failed
```

### Review events

```text
human_review_started
human_review_completed
independent_review_requested
independent_review_completed
review_conflict_detected
```

### Confirmation events

```text
confirmation_requested
active_confirmation_started
active_confirmation_completed
confirmation_freshness_checked
confirmation_expired
authorization_granted
authorization_rejected
```

### Responsibility acceptance events

```text
responsibility_acceptance_requested
responsibility_owner_assigned
responsibility_scope_defined
responsibility_acceptance_started
responsibility_accepted
responsibility_rejected
responsibility_expired
correction_obligation_assigned
correction_obligation_accepted
```

### Bypass events

```text
bypass_entered
bypass_reason_recorded
bypass_allowed_actions_defined
bypass_forbidden_actions_defined
human_response_window_opened
human_response_requested
human_response_received
human_response_delayed
human_response_delay_reason_recorded
human_response_window_extended
human_response_window_expired
bypass_preparation_started
bypass_preparation_completed
bypass_exited_to_admissibility
bypass_exited_to_execution
bypass_escalated
bypass_blocked
```

### Gateway events

```text
gateway_evaluation_started
gateway_decision_allow
gateway_decision_block
gateway_decision_escalate
gateway_decision_bypass
gateway_policy_traceability_failed
gateway_authority_scope_failed
gateway_responsibility_acceptance_failed
gateway_contextual_legitimacy_failed
```

### Execution events

```text
execution_attempted
action_executed
action_blocked
action_failed
action_cancelled
external_effect_detected
```

### Escalation events

```text
escalation_triggered
escalation_owner_assigned
escalation_accepted
escalation_resolved
escalation_unresolved
```

### Consequence events

```text
consequence_recorded
wrong_consequence_detected
harm_or_impact_reported
responsibility_review_required
```

### Correction events

```text
rollback_requested
rollback_completed
correction_requested
correction_completed
policy_amendment_requested
constitutional_amendment_requested
```

### Audit events

```text
decision_log_entry_created
replay_requested
replay_completed
audit_review_started
audit_review_completed
governance_drift_detected
```

## 7. Minimal Event Schema

A normalized Responsibility Event should preserve at least:

```json
{
  "event_id": "<unique_event_id>",
  "event_type": "<event_type>",
  "event_family": "proposal | evidence | review | confirmation | responsibility_acceptance | bypass | gateway | execution | escalation | consequence | correction | audit",
  "timestamp": "<ISO 8601>",
  "actor_type": "human | ai_system | governance_gateway | policy_engine | external_system",
  "actor_id": "<actor_or_system_id>",
  "workflow_id": "<workflow_id>",
  "action_id": "<action_id>",
  "action_class": "<action_class_or_unknown>",
  "prior_state": "<state_before_event>",
  "new_state": "<state_after_event>",
  "authority_scope": "<scope_or_unknown>",
  "responsible_party_id": "<person_or_role_or_null>",
  "responsibility_scope": "<defined_scope_or_null>",
  "responsibility_acceptance_state": "not_required | requested | assigned | accepted | rejected | expired | unknown",
  "correction_obligation": "<defined_obligation_or_null>",
  "bypass_state": "not_applicable | entered | active | extended | completed | escalated | blocked | exited",
  "bypass_reason": "<consequence_boundary_or_missing_condition_or_null>",
  "allowed_bypass_actions": [
    "<allowed_preparatory_action>"
  ],
  "forbidden_bypass_actions": [
    "<forbidden_consequential_action>"
  ],
  "human_response_window": "<duration_or_deadline_or_null>",
  "human_response_state": "not_required | pending | received | delayed | expired | unknown",
  "delay_reason": "<reason_or_null>",
  "policy_reference": "<policy_id_or_null>",
  "evidence_reference": "<evidence_snapshot_or_null>",
  "gateway_decision": "allow | block | escalate | bypass | null",
  "reason": "<machine_and_human_readable_reason>",
  "human_responsibility_remains": [
    "<responsibility_item>"
  ],
  "audit_limitations": [
    "<known_limitation>"
  ]
}
```

## 8. State Transition Examples

### 8.1 Recommendation to authorization

```text
recommendation_created
→ evidence_snapshot_created
→ human_review_started
→ confirmation_requested
→ active_confirmation_completed
→ authorization_granted
```

### 8.2 Authorization to execution

```text
authorization_granted
→ confirmation_freshness_checked
→ gateway_evaluation_started
→ gateway_decision_allow
→ execution_attempted
→ action_executed
```

### 8.3 Blocked execution

```text
recommendation_created
→ evidence_missing
→ gateway_evaluation_started
→ gateway_decision_block
→ action_blocked
→ decision_log_entry_created
```

### 8.4 Escalated execution

```text
recommendation_created
→ risk_class_estimated
→ evidence_stale
→ gateway_evaluation_started
→ gateway_decision_escalate
→ escalation_triggered
→ escalation_owner_assigned
```

### 8.5 Post-consequence correction

```text
action_executed
→ consequence_recorded
→ wrong_consequence_detected
→ responsibility_review_required
→ correction_requested
→ correction_completed
→ decision_log_entry_created
```

### 8.6 Responsibility acceptance before governed execution

```text
recommendation_created
→ action_class_detected
→ responsibility_acceptance_requested
→ responsibility_owner_assigned
→ responsibility_scope_defined
→ responsibility_accepted
→ correction_obligation_assigned
→ gateway_evaluation_started
→ gateway_decision_allow
→ execution_attempted
```

### 8.7 Missing responsibility acceptance

```text
recommendation_created
→ action_class_detected
→ responsibility_acceptance_requested
→ responsibility_rejected
→ gateway_evaluation_started
→ gateway_responsibility_acceptance_failed
→ gateway_decision_block
→ action_blocked
→ decision_log_entry_created
```

### 8.8 Governed bypass with productive Human Response Window

```text
recommendation_created
→ action_class_detected
→ gateway_evaluation_started
→ gateway_decision_bypass
→ bypass_entered
→ bypass_reason_recorded
→ bypass_allowed_actions_defined
→ bypass_forbidden_actions_defined
→ human_response_window_opened
→ human_response_requested
→ bypass_preparation_started
→ bypass_preparation_completed
→ human_response_received
→ bypass_exited_to_admissibility
→ gateway_evaluation_started
→ gateway_decision_allow
```

### 8.9 Governed bypass expired without response

```text
recommendation_created
→ gateway_decision_bypass
→ bypass_entered
→ human_response_window_opened
→ human_response_requested
→ bypass_preparation_started
→ human_response_window_expired
→ bypass_escalated
```

or, for higher-risk action classes:

```text
recommendation_created
→ gateway_decision_bypass
→ bypass_entered
→ human_response_window_opened
→ human_response_window_expired
→ bypass_blocked
→ gateway_decision_block
→ action_blocked
```

## 9. Event Ordering Requirements

RABA should preserve ordering rules.

Examples:

- `authorization_granted` should not occur before required confirmation events.
- `responsibility_accepted` should not occur before `responsibility_scope_defined` for governed actions.
- `gateway_decision_allow` should not occur when required responsibility acceptance is missing, rejected, or expired.
- `gateway_decision_bypass` should define what may continue as preparation and what must not continue as consequence.
- `bypass_entered` should not be treated as execution permission.
- `bypass_preparation_completed` should not imply that the consequential action is authorized.
- `human_response_window_expired` should route to escalation, extension with recorded reason, or block.
- `action_executed` should not occur before an allow decision for governed actions.
- `gateway_decision_allow` should not occur if authority scope is missing for high-risk actions.
- `decision_log_entry_created` may occur after block, escalation, execution, bypass, or correction, but must reference the relevant event chain.
- `rollback_completed` should reference the original executed action.

Ordering violations should be treated as topology errors or governance drift signals.

## 10. Event Invariants

The following invariants should hold unless explicitly overridden by Human Owner-approved policy.

```text
recommendation_created ≠ authorization_granted
authorization_granted ≠ action_executed
responsibility_visible ≠ responsibility_accepted
responsibility_assigned ≠ responsibility_accepted
bypass_entered ≠ gateway_decision_allow
bypass_preparation_completed ≠ action_executed
human_response_missing ≠ authority_granted
evidence_retrieved ≠ evidence_admissible
gateway_decision_allow ≠ human accountability discharged
action_executed ≠ consequence accepted
observability_event ≠ authority source
external_review_event ≠ approval
```

## 11. Responsibility Event vs Decision Log

Responsibility Event Stream and Decision Log are related but distinct.

| Responsibility Event Stream | Decision Log |
|---|---|
| Records structured state changes. | Records governance/business decisions and rationale. |
| Supports replay reconstruction. | Supports accountability review. |
| Can include machine-generated events. | Requires human-relevant explanation. |
| Captures transitions. | Captures why a decision mattered. |
| Is not itself business accountability. | Must not be reduced to technical trace. |

A Decision Log entry may summarize and reference one or more Responsibility Event chains.

When responsibility acceptance is required, the Decision Log should not only say that an owner existed.

It should reference whether responsibility was requested, assigned, accepted, rejected, or expired, and what correction obligation was attached.

When governed bypass is used, the Decision Log should preserve why bypass was entered, what preparatory work was allowed, what consequential action was forbidden, what Human Response Window applied, and how bypass was exited.

## 12. Replay Requirements

A replayable event chain should reconstruct:

- original proposal;
- action class;
- risk and reversibility state;
- evidence state;
- confirmation state;
- responsibility acceptance state;
- responsible party and accepted scope, if required;
- correction obligation, if required;
- bypass state, if used;
- bypass reason, allowed actions, and forbidden actions;
- Human Response Window state, if applicable;
- authority scope;
- policy constraints;
- Gateway decision;
- execution attempt;
- consequence if known;
- correction or rollback if any;
- decision log reference.

Replay does not prove legal compliance.

Replay does not prove perfect human understanding.

Replay does not remove human or organizational responsibility.

## 13. Drift Detection

Responsibility Event topology can support governance drift detection.

Potential drift signals:

- allow decisions without evidence snapshots;
- execution events without prior Gateway allow decision;
- authorization reused after scope change;
- required responsibility acceptance missing before high-impact execution;
- responsibility assigned but never accepted;
- responsibility acceptance reused after scope or context change;
- correction obligation missing after responsibility acceptance;
- bypass entered without allowed and forbidden actions;
- bypass preparation treated as execution authority;
- Human Response Window expired without escalation, extension reason, or block;
- lack of human response treated as implicit authority;
- repeated escalation without resolution;
- policy traceability failures;
- confirmation freshness failures;
- observability events treated as approval;
- missing Decision Log after high-risk execution;
- missing Decision Log after governed bypass for high-impact action;
- action class unknown for high-impact action.

## 14. Relationship to Governance Gateway

The Governance Gateway should emit gateway events.

It should not silently execute decisions.

Every governed Gateway decision should produce one of:

```text
gateway_decision_allow
gateway_decision_block
gateway_decision_escalate
gateway_decision_bypass
```

with reason and relevant references.

The Gateway enforces policy-derived routing.

It does not become final human authority.

For action classes requiring responsibility acceptance, the Gateway should treat missing, rejected, stale, or expired responsibility acceptance as a routing condition.

For action classes where the process can continue safely as preparation, the Gateway may route to governed bypass instead of immediate block.

Governed bypass should preserve useful process momentum without permitting unauthorized consequence creation.

## 15. Relationship to Bind-Time Admissibility

Bind-Time Admissibility supplies pre-execution state required for Gateway evaluation.

Responsibility Events should preserve the bind-time state that justified allow / block / escalate / bypass.

This includes:

- evidence state;
- authority scope;
- policy constraints;
- reversibility profile;
- uncertainty state;
- action class;
- responsibility acceptance state;
- bypass state, if used;
- Human Response Window state, if applicable;
- outcome reason.

Bind-time should not be treated only as a timestamp.

It is the condition state at the transition from proposed action to consequential action.

## 16. Relationship to Human Authority Constitution

The Human Authority Constitution defines human-reserved authority and delegation boundaries.

Responsibility Events should not directly interpret constitutional text.

They may reference:

- constitution clause ID;
- constitution hash;
- policy derived from constitution clause;
- authority scope;
- Human Owner confirmation;
- required responsibility acceptance scope;
- bypass conditions derived from constitutional or policy boundaries.

## 17. Relationship to Responsibility Acceptance

Responsibility acceptance is not identical to visibility, assignment, confirmation, or authorization.

RABA should preserve the distinction:

```text
responsibility visibility
→ responsibility assignment
→ responsibility acceptance
→ monitoring / escalation / correction obligation
```

Responsibility acceptance events should help determine whether a named person or role has accepted responsibility for a defined scope under a defined authority boundary.

For high-impact or irreversible action classes, responsibility acceptance may become a precondition for Gateway allow.

This remains a non-canonical working direction.

## 18. Relationship to Governed Bypass

Governed bypass is not a way around governance.

It is a governed continuation path that preserves process momentum while preventing unauthorized consequence creation.

RABA should distinguish:

```text
process continues as preparation
≠
process continues as consequence
```

Bypass events should record:

- why bypass was entered;
- what missing condition caused bypass;
- which preparatory actions were allowed;
- which consequential actions were forbidden;
- whether Human Response Window was opened;
- whether human response was received, delayed, expired, or escalated;
- how bypass exited.

Human Response Window should not become an undefined waiting state.

If response is delayed, the delay should be justified and recorded.

This remains a non-canonical working direction.

## 19. Open Questions

1. Which event types should become canonical first?
2. Should event IDs be globally unique or workflow-scoped?
3. How should events reference evidence snapshots?
4. How should events reference Human Owner confirmation artifacts?
5. How should action class be normalized?
6. Which state transitions should be forbidden by default?
7. Should every Gateway decision require a Decision Log entry, or only high-risk cases?
8. How should event topology detect hidden commitment and stale authority?
9. How should external review inputs be represented in event topology, if at all?
10. How should Responsibility Event topology connect to GitHub commits, demo traces, and external comparison notes?
11. Which action classes require explicit responsibility acceptance events?
12. How should responsibility acceptance expire when context, authority, or action scope changes?
13. How should correction obligation be represented without turning every owner into unlimited liability?
14. Which action classes should enter governed bypass instead of block?
15. Which preparatory actions may be allowed during bypass?
16. How should Human Response Window duration be defined by action class?
17. When should bypass be extended, escalated, or blocked?
18. How should productive waiting be measured without turning bypass into hidden execution authority?

## 20. What This Topology Does Not Claim

This topology does not claim that:

- the event list is complete;
- all event types are canonical;
- responsibility acceptance is fully modeled;
- governed bypass is fully modeled;
- RABA already has a production event schema;
- replay proves legal compliance;
- event logging replaces human responsibility;
- responsibility visibility equals responsibility acceptance;
- responsibility assignment equals responsibility acceptance;
- bypass is permission to create consequence;
- Human Response Window can be ignored without governance impact;
- observability creates authority;
- Gateway events replace Decision Log entries;
- external review creates approval.

## 21. Governance Boundary

This document is non-canonical.

Responsibility Event topology is not final architecture approval.

Event logging is not accountability by itself.

Replay is not legal validation.

Observability is not authority.

Gateway outcome is not Human Owner responsibility transfer.

Visible responsibility is not realized responsibility.

Assigned responsibility is not accepted responsibility.

Governed bypass is not an authority bypass.

Productive waiting is not consequential execution.

External review is not approval.

Final architectural approval belongs to the Human Owner.

## Key Takeaway

RABA needs a normalized Responsibility Event topology to preserve replayability, audit consistency, state-transition integrity, and governance drift detection.

Responsibility Events should record responsibility-relevant state changes without becoming authority themselves.

The core event direction should remain:

```text
proposal → evidence → review → confirmation → responsibility acceptance → gateway decision → allow / bypass / block / escalate → execution or consequence-safe preparation → consequence → correction/audit
```

The added responsibility acceptance layer helps distinguish visible, assigned, and accepted responsibility before AI speed turns a proposed action into operational momentum.

The added governed bypass layer helps preserve useful process momentum without allowing preparation, waiting, or lack of human response to become hidden execution authority.
