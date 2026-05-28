# RABA Action Classes Working Note

**Status:** Working Note  
**Canonical status:** Non-canonical. This document stabilizes an open gap and does not define accepted RABA architecture.  
**Purpose:** Define a first working model for `action_class` / `allowed_action_classes` so Human Authority Constitution, Bind-Time Admissibility, Governance Gateway, and Responsibility Event Topology can reference actions consistently.  
**Review context:** Multiple RABA notes identified `action_class` as a critical gap, especially Human Authority Constitution and Bind-Time Admissibility Scenario Tests.  
**Related concepts:** Human Authority Constitution, Bind-Time Admissibility, Governance Gateway, Responsibility Event Stream, Responsibility Event Topology, Reversibility Profile, Escalation Ownership, Policy Integrity, Semantic Dependency Map

## 1. Why Action Classes Matter

RABA repeatedly needs to know what kind of action an AI-assisted workflow is attempting.

Without action classes, the system cannot reliably determine:

- whether the action is inside delegated authority;
- whether the action is excluded or human-reserved;
- what evidence is required;
- what policy constraints apply;
- whether reversibility is sufficient;
- whether the Gateway should allow, block, or escalate;
- what Responsibility Events should be emitted;
- what should be recorded for replay and audit.

Action class classification is therefore a prerequisite for stable governance routing.

## 2. Definition

An **Action Class** is a normalized category describing the type of action a workflow is attempting, independent of the specific tool, model, or UI that performs it.

Examples:

- drafting a message;
- sending an external email;
- updating an internal record;
- approving a payment;
- changing canonical architecture;
- triggering a production API action.

The same technical mechanism may belong to different action classes depending on consequence.

For example, an API call may be low-risk if it creates an internal ticket, but high-risk if it changes production configuration or sends data to an external party.

## 3. Core Principle

RABA should classify actions by consequence and authority boundary, not by technical surface.

```text
Technical action ≠ Governance action class
```

A button click, API call, commit, email, or prompt may have very different governance meaning depending on:

- external effect;
- reversibility;
- authority required;
- evidence required;
- policy constraints;
- affected parties;
- downstream consequence.

## 4. Relationship to Allowed Action Classes

`allowed_action_classes` are the action classes that a person, role, AI system, or workflow is permitted to perform under a defined authority scope.

`excluded_action_classes` are the action classes that are explicitly outside delegated authority.

`human_reserved_action_classes` are action classes that require Human Owner confirmation or another defined human approval path.

Suggested fields:

```json
{
  "allowed_action_classes": ["draft_only", "internal_low_risk_update"],
  "excluded_action_classes": ["external_commitment", "payment_approval"],
  "human_reserved_action_classes": ["canonical_architecture_change", "irreversible_high_risk_action"]
}
```

## 5. First Working Action Class Set

This is an initial non-canonical set.

| Action class | Description | Typical baseline outcome |
|---|---|---|
| `draft_only` | Creates text, proposal, recommendation, or plan without execution. | allow within scope |
| `internal_documentation_update` | Updates internal non-canonical documentation. | allow or escalate depending on scope |
| `canonical_architecture_change` | Changes accepted or canonical RABA architecture. | human confirmation required |
| `external_message` | Sends or prepares a message to an external party. | escalate if commitment/sensitive |
| `external_commitment` | Creates obligation, timeline, offer, resource promise, or binding expectation outside current workflow. | human confirmation required / block if unauthorized |
| `public_publication` | Publishes externally visible content. | human confirmation required |
| `internal_low_risk_update` | Updates low-risk internal operational data. | allow if evidence fresh and reversible |
| `sensitive_record_update` | Updates CRM, HR, legal, compliance, billing, or customer-impacting record fields. | escalate or require authority |
| `payment_preparation` | Prepares payment data or draft approval package. | allow with evidence, no execution |
| `payment_approval` | Approves or releases financial payment. | high control / block if authority or evidence missing |
| `api_internal_low_risk` | Triggers low-risk internal API action with limited downstream effect. | allow if authorized |
| `api_external_effect` | Triggers API action affecting external party, external system, data transfer, or obligation. | escalate or block if unclear |
| `production_configuration_change` | Changes production configuration, deployment, access, or operational state. | escalate / human approval required |
| `security_sensitive_action` | Changes access, credentials, permissions, account status, or security posture. | escalate / multi-role confirmation |
| `irreversible_high_risk_action` | Action with difficult or impossible rollback and high impact. | block or require strongest approval path |
| `rollback_or_correction` | Attempts to reverse, correct, or mitigate previous action. | allow/escalate based on risk |
| `external_review_input` | Records external feedback, review, or comparison. | record only; not approval |
| `governance_metadata_update` | Updates classification, policy metadata, traceability, or event schemas. | escalate if canonical impact |

## 6. Classification Dimensions

Action class should be derived from several dimensions.

| Dimension | Example values |
|---|---|
| Externality | internal / external / public / third-party |
| Execution effect | draft / update / send / approve / execute / publish / delete |
| Reversibility | reversible / partially reversible / difficult to reverse / irreversible / unknown |
| Authority requirement | delegated / role-based / Human Owner / independent multi-role |
| Evidence requirement | none / referenceable evidence / fresh evidence / evidence snapshot / active confirmation |
| Risk class | low / medium / high / critical / unknown |
| Canonical impact | none / non-canonical / canonical / architecture-changing |
| Financial impact | none / estimate / commitment / payment |
| Data sensitivity | public / internal / confidential / regulated / unknown |
| Downstream effect | none / limited / broad / production / external |

## 7. Suggested Action Class Record

A normalized action class record may look like this:

```json
{
  "action_class_id": "external_commitment",
  "display_name": "External Commitment",
  "description": "Creates obligation, timeline, offer, resource promise, or binding expectation outside the current workflow.",
  "baseline_risk_class": "high",
  "baseline_reversibility": "partially_reversible",
  "default_gateway_outcome": "escalate",
  "human_reserved": true,
  "requires_human_owner_confirmation": true,
  "requires_independent_multi_role_confirmation": false,
  "requires_evidence_snapshot": true,
  "policy_constraints": [
    "external_commitment_requires_human_owner_confirmation",
    "evidence_snapshot_required"
  ],
  "typical_events": [
    "action_class_detected",
    "evidence_snapshot_created",
    "confirmation_requested",
    "gateway_decision_escalate"
  ]
}
```

## 8. Gateway Use

The Governance Gateway should use action class as one input, not as the only input.

A Gateway decision should consider:

- action class;
- authority scope;
- evidence state;
- policy constraints;
- reversibility profile;
- contextual legitimacy;
- confirmation state;
- uncertainty state.

Example:

```text
if action_class = external_commitment
and Human Owner confirmation is missing
then gateway_decision = escalate or block
```

For high-risk irreversible actions with missing authority or evidence, the safer default is block / fail closed.

## 9. Relationship to Human Authority Constitution

The Human Authority Constitution defines which action classes are:

- allowed;
- delegated;
- excluded;
- human-reserved;
- multi-role confirmation required.

It should not require operational AI agents to interpret constitutional text directly.

Instead, the Constitution should produce or reference structured action-class permissions.

Example:

```json
{
  "constitution_clause_id": "HAC-001",
  "human_reserved_action_classes": [
    "external_commitment",
    "canonical_architecture_change",
    "irreversible_high_risk_action"
  ]
}
```

## 10. Relationship to Bind-Time Admissibility

Bind-Time Admissibility asks whether a specific action may proceed at the moment execution is considered.

Action class helps determine the starting threshold.

Examples:

- `draft_only` may require minimal evidence and no execution authorization;
- `external_commitment` requires Human Owner confirmation;
- `payment_approval` requires financial authority and evidence;
- `production_configuration_change` requires rollback plan and stronger approval path;
- `irreversible_high_risk_action` should normally fail closed if evidence or authority is missing.

## 11. Relationship to Responsibility Event Topology

Responsibility Events should record the detected action class.

Suggested event field:

```json
{
  "event_type": "action_class_detected",
  "action_id": "<action_id>",
  "action_class": "external_commitment",
  "classification_confidence": "high | medium | low | unknown",
  "classification_reason": "<reason>",
  "requires_human_confirmation": true
}
```

If action class is unknown for a high-impact action, the Gateway should escalate or block.

## 12. Classification Failure Modes

RABA should treat action-class ambiguity as governance-relevant.

Failure modes include:

- low-risk action misclassified as draft-only when it creates external effect;
- API call classified by endpoint name rather than downstream consequence;
- email classified as message when it actually creates external commitment;
- CRM update classified as metadata when it affects billing or legal status;
- payment preparation silently becoming payment approval;
- non-canonical note silently becoming canonical architecture change;
- public publication treated as internal documentation;
- rollback action creating new external consequence.

## 13. Escalation Rules for Unknown Action Class

If action class is unknown, the system should not assume low risk.

Suggested default:

| Condition | Default outcome |
|---|---|
| Unknown action class, low apparent impact, reversible | escalate |
| Unknown action class, external effect possible | escalate |
| Unknown action class, high impact possible | block or escalate |
| Unknown action class, irreversible effect possible | block |
| Unknown action class, policy unavailable | block or escalate |

## 14. Open Questions

1. Should action classes be maintained as a registry?
2. Should action classes live in `docs/architecture/` or `schemas/` once stabilized?
3. Who may add or modify action classes?
4. Should every action class have a default Gateway outcome?
5. How should action class relate to risk class and reversibility profile?
6. How should action class classification be tested?
7. Should action class detection be deterministic, AI-assisted, or hybrid?
8. What minimum action classes are required for RABA v0.1?
9. Should action classes be canonical before Responsibility Event Topology becomes canonical?
10. How should action classes be represented in demo traces?

## 15. What This Working Note Does Not Claim

This note does not claim that:

- the listed action classes are canonical;
- the taxonomy is complete;
- action class alone determines Gateway outcome;
- AI systems may decide their own authority based on action class;
- action classification replaces Human Owner confirmation;
- action classification proves legal compliance;
- external review has approved this taxonomy.

## 16. Governance Boundary

This document is non-canonical.

Action class classification is not authorization.

Allowed action class does not remove human responsibility.

Unknown action class must not default to allow.

External review is not adoption.

Multi-AI agreement is not approval.

Final architectural approval belongs to the Human Owner.

## Key Takeaway

RABA needs action classes to connect human authority, policy, runtime checks, Gateway outcomes, event topology, and audit replay.

The system should classify actions by consequence and authority boundary, not by technical surface.

Without action classes, RABA cannot reliably decide what may be allowed, blocked, or escalated.
