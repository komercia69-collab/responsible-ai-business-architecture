# DecisionAssure Verifier Fields ↔ RABA Responsibility Event Stream

**Status:** DISCUSSION_DRAFT  
**Canonical status:** Non-canonical  
**Source type:** External verifier field mapping correction  
**Approval status:** Human Owner review required  
**Correction source:** External review input from Akhilesh Warik / DecisionAssure  
**Correction recorded:** 2026-06-03

> Multi-AI agreement is not approval.  
> External trace compatibility is not adoption.  
> Field mapping is not schema acceptance.  
> Final architectural approval belongs to the Human Owner.

## Purpose

This document maps actual DecisionAssure verifier `--json` schema v1.1 fields, as identified by external review, to possible RABA Responsibility Event Stream concepts.

Earlier draft mappings incorrectly treated RABA governance concepts as if they were DecisionAssure-native output fields.

Corrected separation:

```text
DecisionAssure verifier output
= technical trace evidence and verifier signals

RABA responsibility synthesis
= workflow-specific responsibility interpretation, Human Owner accountability, Decision Log context, and governance state
```

This mapping does not make DecisionAssure a required RABA component and does not adopt DecisionAssure field names as canonical RABA schema.

## Source

Related external review input:

- [`docs/reviews/decisionassure-raba-trace-example.md`](../reviews/decisionassure-raba-trace-example.md)

Related RABA implementation document:

- [`implementation/responsibility-event-stream.md`](../../implementation/responsibility-event-stream.md)

## Correction Notice

External review clarified that the following are **not** DecisionAssure verifier output fields:

- `confirmation_freshness`
- `hidden_commitment_detected`
- `hidden_commitment_flag`
- `rollback_viable`
- `human_responsibility_remains`
- phase-style `step` string values such as `commit_attempt`

These may remain useful RABA concepts, but they must be treated as RABA synthesis-layer or extension candidates, not as DecisionAssure-native fields.

## Corrected Mapping Table

| DecisionAssure native field | DecisionAssure-native meaning | Possible RABA interpretation | Boundary / limitation |
|---|---|---|---|
| `step_index` | Ordered verifier step index | Trace ordering / event sequence reference | Not a phase-name string such as `commit_attempt`. |
| `failure_class` | Verifier failure category | Evidence or policy failure classification input | External verifier classification, not RABA canon taxonomy adoption. |
| `evidence_status` | Evidence trust, completeness, or verifiability status | Evidence admissibility input for RABA review | Not full business responsibility or final accountability. |
| `execution_allowed` | Immediate verifier gate decision | Possible Governance Gateway signal or execution-blocking input | Not final Human Owner approval and not complete governance diagnosis. |
| `requires_human_review` | Human review is required | Escalation or review trigger | Does not provide the specific list of human responsibilities. |
| `requires_reauthorization` | Fresh authorization is required | Reapproval required / possible stale confirmation signal | Not a structured `confirmation_freshness` object. |
| `severity` | Severity level | Prioritization or risk signal | Not a full RABA consequence class by itself. |
| `retryable` | Whether retry may be possible | Remediation or operational retry signal | Not rollback viability and not reversibility assessment. |
| `incident_class` | Incident category | Incident routing / failure-pattern input | Not RABA incident taxonomy adoption. |
| `recommended_next_action` | Verifier-recommended next action | Suggested next workflow step for review | Not execution approval and not Human Owner decision. |
| `rule_id` | External verifier rule identifier | Policy or rule trace reference | External rule namespace; not RABA rule adoption. |
| `rule_version` | External verifier rule version | Policy version traceability input | External version namespace; not RABA schema version. |
| `reason` | Free-text explanation | Human-readable evidence for review and Decision Log context | Not guaranteed to be structured or machine-parseable. |

## Example Value Sets Identified by External Review

```text
failure_class:
HASH_MISMATCH, SIGNATURE_FAILURE, CHAIN_BREAK, SCHEMA_INCOMPATIBLE, POLICY_VIOLATION, NONE

evidence_status:
TRUSTED, UNTRUSTED, UNAUTHENTICATED, INCOMPLETE, UNVERIFIABLE, VALID

severity:
CRITICAL, HIGH, MEDIUM, LOW

incident_class:
CORRUPTION, PROVENANCE, TAMPERING, VERSION, POLICY
```

These value sets are recorded as external verifier schema information, not as RABA canonical enum adoption.

## RABA Synthesis Layer — Not DecisionAssure Output

RABA may synthesize responsibility states from DecisionAssure verifier output, but those synthesized states belong to RABA.

They must not be represented as DecisionAssure-native fields.

### Fresh authorization synthesis

If DecisionAssure outputs:

```json
{
  "execution_allowed": false,
  "requires_reauthorization": true,
  "requires_human_review": true,
  "failure_class": "POLICY_VIOLATION",
  "evidence_status": "UNTRUSTED"
}
```

RABA may synthesize:

```json
{
  "raba_synthesis": {
    "confirmation_freshness": "stale_or_insufficient",
    "reapproval_required": true,
    "execution_state": "blocked_until_fresh_human_authorization"
  }
}
```

Boundary:

```text
`confirmation_freshness` is RABA synthesis, not DecisionAssure verifier output.
```

### Human responsibility synthesis

If DecisionAssure outputs:

```json
{
  "requires_human_review": true,
  "recommended_next_action": "<verifier-recommended-next-action>"
}
```

RABA may attach workflow-specific responsibility metadata:

```json
{
  "responsibility_state": {
    "human_responsibility_remains": [
      "final_scope_validation",
      "fresh_authorization_decision"
    ]
  }
}
```

Boundary:

```text
`human_responsibility_remains` is context-specific RABA responsibility metadata.
DecisionAssure does not output this list.
```

### Hidden commitment analysis

If DecisionAssure outputs a policy violation, blocked execution, or reauthorization requirement, RABA may analyze whether a hidden commitment pattern exists.

However:

```text
`hidden_commitment_detected` is not DecisionAssure verifier output.
It is a possible RABA failure-pattern interpretation.
```

### Reversibility / rollback analysis

If DecisionAssure reports a failure, severity, incident class, or retryability, RABA may separately assess reversibility.

However:

```text
`rollback_viable` is not an exposed DecisionAssure verifier output field according to the external review.
Reversibility remains a RABA workflow/context assessment unless a tool explicitly exposes it.
```

## Mapping to Existing RABA Event Types

| RABA event type | DecisionAssure-native signal that may support it | Boundary |
|---|---|---|
| `ActionDrafted` | No direct field; may be represented in RABA workflow context | RABA event, not DecisionAssure output. |
| `ActionRecommended` | `recommended_next_action` may inform next-step review | Recommendation is not approval. |
| `ApprovalRequested` | `requires_human_review: true` may trigger review request | Does not define reviewer authority by itself. |
| `ApprovalGranted` | No direct field in the identified verifier output | Must come from RABA / Human Owner workflow. |
| `ReapprovalRequired` | `requires_reauthorization: true` | RABA may synthesize reapproval state. |
| `PolicyBoundaryReached` | `failure_class`, `incident_class`, `evidence_status`, `execution_allowed: false` | Boundary classification remains RABA-contextual. |
| `EscalationTriggered` | `requires_human_review: true`, `severity`, `incident_class` | Escalation owner must be defined by RABA workflow. |
| `AuthorizationRevoked` | No direct field in the identified verifier output | RABA must define revocation semantics. |
| `ExecutionStarted` | No direct field in the identified verifier output | RABA workflow event. |
| `ExecutionCompleted` | `execution_allowed: true` may be precondition evidence only | Execution completion must be recorded separately. |
| `DecisionLogged` | `reason`, `rule_id`, `rule_version` may support evidence context | RABA Decision Log is not replaced by external trace. |
| `AuditTraceSigned` | Rule/version/evidence fields may support audit context | Details depend on external verifier implementation. |

## Relationship to Confirmed Intent Drift

The DecisionAssure verifier evidence may be relevant to the RABA failure pattern:

- [`docs/failure-patterns/confirmed-intent-drift.md`](../failure-patterns/confirmed-intent-drift.md)

Corrected framing:

- DecisionAssure may output `requires_reauthorization`, `requires_human_review`, `execution_allowed`, `failure_class`, `evidence_status`, and `reason`.
- RABA may interpret those signals as evidence that confirmation is stale, insufficient, or mismatched.
- RABA must not claim that DecisionAssure directly outputs `confirmation_freshness` or `hidden_commitment_detected` unless the external schema changes.

## What RABA Should Consider Later

Candidate RABA-native synthesis concepts for later schema discussion:

1. `confirmation_freshness`
2. `intent_alignment`
3. `hidden_commitment`
4. `reversibility_profile`
5. `human_responsibility_remains`
6. `scope_changed_after_confirmation`
7. `reapproval_required`
8. `trace_evidence`
9. `responsibility_state`

These should not be adopted automatically.

They require schema review, naming review, examples, and Human Owner confirmation.

## Boundary

This document is a mapping draft and correction record.

It does not:

- adopt DecisionAssure as a RABA dependency;
- accept DecisionAssure schema as canonical RABA schema;
- adopt DecisionAssure enums as RABA enums;
- claim DecisionAssure outputs RABA responsibility states;
- create commercial or referral commitment;
- replace RABA Decision Log;
- transfer responsibility to an external trace system;
- certify any workflow as compliant.

## Open Questions

1. Should RABA define a separate `trace_evidence` object for external verifier outputs?
2. Should RABA define a separate `responsibility_state` object for synthesized governance states?
3. Should `confirmation_freshness` be a derived RABA state rather than an input field?
4. Should hidden commitment detection remain a RABA failure-pattern analysis rather than a verifier-field expectation?
5. How should reversibility be represented for non-code business actions?
6. Should `human_responsibility_remains` be mandatory in high-risk workflows?
7. How should external trace systems reference RABA Decision Log entries without replacing them?

## Current Status

This mapping is a DISCUSSION_DRAFT.

It can guide future schema work but does not change canonical RABA architecture until explicitly reviewed and approved by the Human Owner.
