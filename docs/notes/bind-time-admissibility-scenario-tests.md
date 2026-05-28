# Bind-Time Admissibility Scenario Tests

**Status:** Working Note  
**Canonical status:** Non-canonical. This note is prepared for external conceptual review and does not define accepted RABA architecture.  
**External review context:** Takeshi Fujishita / VERITAS OS conceptual exchange  
**Purpose:** Stress-test the Bind-Time Admissibility Checklist against concrete AI-agent execution scenarios.  
**Commercial boundary:** No partnership, integration, endorsement, pilot, referral, or commercial commitment is implied by this note.  
**Related RABA concepts:** Bind-Time Admissibility Checklist, Governance Gateway, Responsibility Event Stream, Decision Log, Human Owner Confirmation, Human Authority Constitution, Reversibility Profile, Escalation Ownership, Active Evidence Interlock, Policy Integrity

## 1. Purpose

This working note tests the Bind-Time Admissibility Checklist against concrete AI-agent execution scenarios.

The goal is to move from concept-level alignment to operational clarity.

The tests ask:

- when should the system allow;
- when should the system block;
- when should the system escalate;
- what bind-time state must be preserved to justify that outcome later.

This note is non-canonical and intended for conceptual review only.

## 2. Core Test Question

For each AI-agent execution scenario, the central question is:

> What must be true at bind-time before this action is allowed to proceed?

The answer should include not only the final governance outcome:

```text
allow | block | escalate
```

but also the bind-time state that justifies the outcome later.

## 3. Bind-Time State to Preserve

For each scenario, the replayable governance record should preserve at least:

- target action;
- action scope;
- evidence available;
- evidence freshness;
- authority holder;
- authority scope;
- policy constraints;
- risk class;
- reversibility profile;
- uncertainty remaining;
- governance outcome;
- outcome reason;
- what the record can prove;
- what remains human or organizational responsibility.

This follows Takeshi's VERITAS-side clarification:

> The key issue is not only whether the outcome is allow / block / escalate, but what bind-time state must be preserved to justify that outcome later.

## 4. Scenario Overview

The first scenario set uses four common AI-agent execution examples:

| Scenario | Typical risk | Typical reversibility | Main governance concern |
|---|---:|---:|---|
| Sending an email | low to high | partially reversible | external commitment / reputational risk |
| Updating a CRM record | low to medium | partially reversible | data integrity / customer record accuracy |
| Approving a payment | high | difficult to reverse | financial authority / fraud / obligation |
| Triggering an API action | variable | variable | hidden external effect / system impact |

These scenarios are intentionally simple.

The purpose is not to solve each domain completely, but to reveal where the checklist is clear, where it becomes ambiguous, and where the execution boundary needs sharpening.

## 5. Scenario 1 — Sending an Email

### Target action

An AI agent prepares and attempts to send an email to an external party.

### Risk and reversibility

Risk depends on the content.

- Low risk: routine scheduling or acknowledgement.
- Medium risk: customer-facing explanation or sensitive internal information.
- High risk: external commitment, promise, offer, deadline, legal/financial statement, partner-facing claim.

Reversibility is partial. An email can be corrected, but it cannot be fully unsent once delivered.

### Required evidence

The system should preserve:

- draft email text;
- recipient identity;
- recipient domain;
- purpose of message;
- source material used;
- whether message creates obligation, timeline, resource allocation, or public claim;
- prior Human Owner confirmation if required.

### Authority condition

The system must determine whether the sender has authority for this type of message.

External commitment creation should be reserved for Human Owner confirmation.

### Policy constraints

Possible constraints:

- do not send external commitments without Human Owner confirmation;
- do not send partner-facing claims without source evidence;
- do not disclose private or confidential information;
- require escalation if recipient, scope, or commitment status is unclear.

### Uncertainty state

Escalate if:

- the email may imply external commitment;
- source evidence is missing or stale;
- recipient identity is unclear;
- the message uses ambiguous commitment language;
- the approval scope does not match current content.

### Governance outcome

| Condition | Outcome |
|---|---|
| Routine, low-risk, within authorized scope, no external commitment | allow |
| Possible commitment, unclear authority, stale evidence, sensitive content | escalate |
| Explicit unauthorized external commitment or policy violation | block |

### Bind-time state to preserve

```json
{
  "scenario": "send_email",
  "target_action": "send_external_email",
  "recipient_type": "external",
  "content_commitment_detected": true,
  "evidence_state": "present_and_fresh_enough",
  "authority_holder": "human_owner",
  "authority_scope": "external_commitment_confirmation",
  "policy_constraints": [
    "external_commitment_requires_human_owner_confirmation"
  ],
  "reversibility_profile": "partially_reversible",
  "uncertainty_remaining": "commitment_language_ambiguous",
  "governance_outcome": "escalate",
  "outcome_reason": "External commitment may be implied; Human Owner confirmation required before sending."
}
```

### RABA interpretation

RABA treats this as a boundary between drafting and external execution.

Drafting may be allowed.

Sending may require escalation or Human Owner confirmation depending on commitment, risk, recipient, and evidence state.

### VERITAS comparison point

VERITAS bind-time admissibility asks why this email was admissible, blocked, or escalated at the moment the send action was opened.

The replayable record must preserve the content, authority, evidence, policy constraints, reversibility, and uncertainty state.

### Boundary weakness revealed

The hard part is detecting external commitment language reliably.

RABA may need a separate `external_commitment_detection` or `commitment_boundary` policy pattern.

## 6. Scenario 2 — Updating a CRM Record

### Target action

An AI agent updates a customer or partner record in a CRM system.

### Risk and reversibility

Risk is usually low to medium, but can become high if the update affects billing, eligibility, compliance status, customer segmentation, legal record, or sales commitment.

Reversibility is partial. A CRM record can often be corrected, but downstream workflows may already have used the wrong value.

### Required evidence

The system should preserve:

- source of the proposed update;
- record ID;
- fields to be changed;
- prior field values;
- new field values;
- evidence supporting the change;
- timestamp of evidence;
- whether downstream systems depend on the field.

### Authority condition

The AI system may have authority to update low-risk descriptive fields.

It should not update authority-sensitive or financial fields unless policy allows it and evidence is sufficient.

### Policy constraints

Possible constraints:

- allow low-risk metadata updates with fresh evidence;
- require snapshot of prior value before update;
- escalate if field affects billing, compliance, legal status, or customer commitment;
- block if evidence is missing or source is untrusted.

### Uncertainty state

Escalate if:

- field sensitivity is unclear;
- evidence conflicts with current record;
- customer identity match is uncertain;
- downstream impact is unknown.

### Governance outcome

| Condition | Outcome |
|---|---|
| Low-risk field, trusted fresh evidence, prior value snapshotted | allow |
| Sensitive field, unclear downstream impact, conflicting evidence | escalate |
| Missing evidence, wrong identity match, policy violation | block |

### Bind-time state to preserve

```json
{
  "scenario": "update_crm_record",
  "target_action": "update_customer_record",
  "record_id": "<crm_record_id>",
  "fields_changed": ["company_size", "contact_role"],
  "prior_values_snapshot_id": "<snapshot_id>",
  "new_values": {
    "company_size": "51-200",
    "contact_role": "procurement_lead"
  },
  "evidence_state": "present_and_fresh_enough",
  "evidence_referenceable": true,
  "field_sensitivity": "low",
  "authority_scope": "low_risk_crm_metadata_update",
  "policy_constraints": [
    "snapshot_prior_value_before_update",
    "trusted_source_required"
  ],
  "reversibility_profile": "partially_reversible",
  "uncertainty_remaining": false,
  "governance_outcome": "allow",
  "outcome_reason": "Low-risk CRM metadata update supported by fresh evidence and prior value snapshot."
}
```

### RABA interpretation

RABA treats CRM updates as controlled operational actions.

The key issue is whether the action remains within delegated authority and whether the record change can be reconstructed later.

### VERITAS comparison point

VERITAS bind-time admissibility focuses on why the record update was admissible at the moment of update and what replayable record remains after the update.

### Boundary weakness revealed

Field sensitivity classification is essential.

RABA may need an `action_class` or `field_sensitivity` model to distinguish routine metadata updates from high-impact record changes.

## 7. Scenario 3 — Approving a Payment

### Target action

An AI agent prepares or attempts to approve a payment.

### Risk and reversibility

Risk is high.

Reversibility may be difficult or delayed.

Payment approval can create financial loss, fraud exposure, compliance concerns, and organizational obligation.

### Required evidence

The system should preserve:

- invoice or payment request;
- vendor identity;
- amount;
- currency;
- payment purpose;
- budget or contract reference;
- approval authority;
- fraud checks;
- policy threshold;
- whether dual approval is required;
- whether payment can be reversed.

### Authority condition

Payment approval requires explicit authority.

Depending on amount, vendor, and risk, it may require Human Owner confirmation or independent multi-role confirmation.

### Policy constraints

Possible constraints:

- block payment if authority is missing;
- block payment if evidence is missing;
- escalate payment above threshold;
- require independent approval for high-value or high-risk payment;
- block irreversible high-risk payment with unresolved uncertainty;
- verify vendor identity and payment destination.

### Uncertainty state

Escalate or block if:

- vendor identity is unclear;
- invoice evidence is missing;
- amount exceeds authority scope;
- payment destination changed recently;
- fraud risk is unresolved;
- reversibility is low.

### Governance outcome

| Condition | Outcome |
|---|---|
| Low amount, trusted vendor, fresh evidence, within explicit authority | allow or escalate depending on policy |
| Amount near threshold, unclear authority, new payment destination | escalate |
| Missing evidence, missing authority, fraud signal, irreversible high-risk payment | block |

### Bind-time state to preserve

```json
{
  "scenario": "approve_payment",
  "target_action": "approve_vendor_payment",
  "amount": "<amount>",
  "currency": "EUR",
  "vendor_id": "<vendor_id>",
  "payment_destination_verified": false,
  "evidence_state": "incomplete",
  "evidence_referenceable": true,
  "authority_holder": "finance_approver",
  "authority_scope": "payments_under_threshold_only",
  "policy_constraints": [
    "payment_requires_verified_vendor",
    "payment_above_threshold_requires_independent_approval",
    "missing_evidence_blocks_payment"
  ],
  "risk_class": "high",
  "reversibility_profile": "difficult_to_reverse",
  "uncertainty_remaining": "payment_destination_recently_changed",
  "governance_outcome": "block",
  "outcome_reason": "Payment evidence incomplete and destination not verified; high-risk payment must fail closed."
}
```

### RABA interpretation

RABA treats payment approval as a high-risk action with strong authority and evidence requirements.

Human approval alone is insufficient if evidence, authority, policy, or reversibility conditions are not satisfied.

### VERITAS comparison point

VERITAS bind-time admissibility emphasizes that the system must show why the payment was admissible, blocked, or escalated at the moment execution permission was considered.

### Boundary weakness revealed

Payment approval shows why unresolved uncertainty should not always escalate.

For high-risk, low-reversibility actions with missing evidence or authority, the correct outcome may be block / fail closed rather than escalate.

## 8. Scenario 4 — Triggering an API Action

### Target action

An AI agent triggers an API action in another system.

Examples:

- create a support ticket;
- change a configuration;
- notify a customer;
- start a deployment;
- disable an account;
- update a production system;
- send data to a third-party service.

### Risk and reversibility

Risk varies widely.

Some API actions are low-risk and reversible.

Others may create external effects, security changes, data exposure, deployment impact, or irreversible downstream consequences.

### Required evidence

The system should preserve:

- API endpoint;
- action type;
- target system;
- parameters;
- payload snapshot;
- authentication context;
- policy governing the endpoint;
- expected effect;
- reversibility or rollback path;
- downstream dependencies;
- whether action crosses external boundary.

### Authority condition

The AI agent must have explicit authority for the action class and target system.

If the API action can affect production, external parties, security posture, customer data, or financial state, stronger approval is required.

### Policy constraints

Possible constraints:

- allow low-risk internal ticket creation;
- require approval for production changes;
- block unauthorized data transfer;
- escalate if API effect is unclear;
- require rollback plan for configuration changes;
- require audit event for all externally impactful API calls.

### Uncertainty state

Escalate if:

- API effect is ambiguous;
- target system sensitivity is unclear;
- payload contains potentially sensitive data;
- downstream effect is unknown;
- rollback path is unclear.

Block if:

- endpoint is not approved;
- payload violates data policy;
- authority is missing;
- production-impacting action lacks required approval;
- irreversible external effect is possible and evidence is missing.

### Governance outcome

| Condition | Outcome |
|---|---|
| Low-risk internal action, approved endpoint, reversible, within authority | allow |
| Effect unclear, rollback unclear, system sensitivity uncertain | escalate |
| Unauthorized endpoint, data violation, missing authority, irreversible impact | block |

### Bind-time state to preserve

```json
{
  "scenario": "trigger_api_action",
  "target_action": "invoke_api_endpoint",
  "api_endpoint": "<endpoint>",
  "target_system": "<system_name>",
  "payload_snapshot_id": "<payload_snapshot_id>",
  "action_class": "production_configuration_change",
  "evidence_state": "present_but_uncertain",
  "authority_scope": "internal_low_risk_api_actions_only",
  "policy_constraints": [
    "production_change_requires_human_owner_confirmation",
    "rollback_plan_required",
    "payload_snapshot_required"
  ],
  "risk_class": "high",
  "reversibility_profile": "unknown",
  "uncertainty_remaining": "rollback_path_unclear",
  "governance_outcome": "escalate",
  "outcome_reason": "API action may affect production configuration; rollback path unclear and authority scope insufficient."
}
```

### RABA interpretation

RABA treats API actions as potentially high-risk because their real-world or organizational effect may be hidden behind a technical endpoint.

The action class and downstream effect matter more than the fact that it is technically just an API call.

### VERITAS comparison point

VERITAS bind-time admissibility focuses on the executable boundary: why this API invocation was admissible, blocked, or escalated at the moment the call was considered.

### Boundary weakness revealed

API actions reveal the need for action-class classification and downstream-effect mapping.

Without that, a system may underestimate risk because the action looks technically simple.

## 9. Cross-Scenario Findings

The scenario tests reveal several recurring needs.

### 9.1 Outcome Must Be Explicit

Each scenario should produce a clear governance outcome:

```text
allow | block | escalate
```

Ambiguous success states are not sufficient.

### 9.2 Bind-Time State Must Be Replayable

The record must preserve not only the final decision but the conditions that existed when the decision was made.

### 9.3 Reversibility Changes the Threshold

The less reversible the action is, the stricter the evidence, authority, approval, and policy requirements should become.

### 9.4 Authority Is Scope-Bound

Authority must specify what the human or system is authorized to do, for what scope, under which constraints.

### 9.5 Evidence Must Be Referenceable

Evidence must be available, fresh enough, and referenceable or snapshot-able for later review.

### 9.6 Uncertainty Does Not Always Escalate

Low or moderate uncertainty may escalate.

Policy violation, missing authority, missing evidence, or irreversible high-risk action should normally block or fail closed.

### 9.7 Action Class Is a Critical Gap

All scenarios require action classification.

Examples:

- routine communication;
- external commitment;
- low-risk metadata update;
- sensitive record update;
- payment approval;
- production configuration change;
- external API call.

This connects directly to the open `allowed_action_classes` gap in the Human Authority Constitution concept.

## 10. Minimal Scenario Test Schema

A normalized scenario test record may look like this:

```json
{
  "scenario_id": "<scenario_id>",
  "target_action": "<action_description>",
  "action_class": "<classification>",
  "risk_class": "low | medium | high | critical | unknown",
  "reversibility_profile": "reversible | partially_reversible | difficult_to_reverse | irreversible | unknown",
  "evidence_state": "present | missing | incomplete | stale | disputed | present_and_fresh_enough",
  "evidence_referenceable": true,
  "authority_holder": "<person_or_role>",
  "authority_scope": "<scope_description>",
  "policy_constraints": [
    "<policy_id_or_constraint>"
  ],
  "uncertainty_remaining": "<description_or_false>",
  "governance_outcome": "allow | block | escalate",
  "outcome_reason": "<reason>",
  "bind_time_state_preserved": true,
  "replay_record_required": true,
  "human_responsibility_remains": [
    "scope validation",
    "risk acceptance",
    "final approval authority"
  ],
  "audit_limitations": [
    "does_not_prove_legal_compliance",
    "does_not_prove_human_understanding"
  ]
}
```

## 11. Questions for Takeshi / External Review

1. Do these four scenarios fairly test the bind-time admissibility boundary?
2. Is the distinction between allow, block, and escalate clear enough in each case?
3. What bind-time state is missing from the scenario records?
4. Should uncertainty routing be more formalized?
5. Does the payment scenario correctly show when block is stronger than escalate?
6. Does the API scenario correctly reveal hidden downstream-effect risk?
7. Should action class be part of the checklist itself or a separate prerequisite model?
8. How should VERITAS distinguish policy violation from unresolved uncertainty?
9. What fields are required for replay, but missing here?
10. Which scenario should be added next?

## 12. Governance Boundary

Scenario testing is not adoption.

External review is not approval.

Conceptual overlap is not partnership.

A scenario test is not a production control.

Bind-time admissibility is not a substitute for human responsibility.

Final architectural approval belongs to the Human Owner.

## Key Takeaway

The Bind-Time Admissibility Checklist becomes clearer when tested against concrete AI-agent execution scenarios.

The most important test is not only whether the system returns allow, block, or escalate.

The critical test is whether the system preserves enough bind-time state to explain later why that outcome was chosen.
