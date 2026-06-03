# DecisionAssure RABA Trace Example

**Status:** External Review Input  
**Canonical status:** Non-canonical  
**Adoption status:** Not adopted  
**Commercial status:** No pilot, referral, partnership, liability, IP or procurement commitment  
**Approval status:** Human Owner review required before any architectural adoption  
**Source:** External review input from Akhilesh Warik / DecisionAssure, including schema-correction feedback  
**Date recorded:** 2026-05-26  
**Correction recorded:** 2026-06-03

> Multi-AI agreement is not approval.  
> External validation input is not adoption.  
> A trace can support review, but it does not replace Human Owner responsibility.  
> No commercial, pilot, referral or partnership commitment exists without explicit Human Owner confirmation.

## Purpose

This document preserves DecisionAssure-related external review input for RABA.

The original draft used a RABA documentation-change scenario to explore several RABA-relevant governance concerns:

- stale confirmation after scope change;
- hidden commitment;
- evidence freshness at commit time;
- rollback and reversibility assumptions;
- distinction between AI proposal, human review, confirmation and execution;
- separation between what a trace proves and what remains human responsibility.

This document does not adopt DecisionAssure into RABA architecture.

It records external trace-related feedback as input for evaluation and mapping.

## Correction Notice — 2026-06-03

Akhilesh Warik reviewed the earlier draft against the actual DecisionAssure verifier `--json` output schema v1.1 and identified that the document overstated DecisionAssure-native structured output.

The earlier draft treated several RABA-desired governance concepts as if they were direct DecisionAssure verifier output fields. That was incorrect.

The following are **not** DecisionAssure verifier output fields:

- `confirmation_freshness`
- `hidden_commitment_detected`
- `hidden_commitment_flag`
- `rollback_viable`
- `human_responsibility_remains`
- phase-style `step` string values such as `commit_attempt`

Those concepts may still be useful for RABA, but they belong to the RABA interpretation / synthesis layer unless DecisionAssure exposes them in a future schema.

## Corrected Layer Separation

DecisionAssure and RABA should be separated as follows:

```text
DecisionAssure verifier output
= technical trace evidence and machine-actionable verifier signals

RABA responsibility layer
= workflow-specific interpretation, responsibility assignment, Human Owner accountability, and Decision Log context
```

Therefore:

```text
Verifier evidence is not Human Owner approval.
Execution allowed / denied is not full business accountability.
Human review required is not a full list of human responsibilities.
Reauthorization required is not a structured confirmation-freshness object.
```

## DecisionAssure-Native Output Fields Identified by External Review

External review identified the following DecisionAssure verifier `--json` schema v1.1 fields as native output fields:

- `step_index`
- `failure_class`
- `severity`
- `retryable`
- `execution_allowed`
- `requires_reauthorization`
- `requires_human_review`
- `incident_class`
- `evidence_status`
- `recommended_next_action`
- `rule_id`
- `rule_version`
- `reason`

The same review identified the following example value sets:

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

## Schema-Aligned Illustrative Example

The earlier fictional trace snippet has been removed.

The following example is **schema-aligned illustrative output**, not a captured production trace. It uses only the field names identified by the external reviewer.

```json
{
  "step_index": 4,
  "failure_class": "POLICY_VIOLATION",
  "severity": "CRITICAL",
  "retryable": false,
  "execution_allowed": false,
  "requires_reauthorization": true,
  "requires_human_review": true,
  "incident_class": "PROVENANCE",
  "evidence_status": "UNTRUSTED",
  "recommended_next_action": "<verifier-recommended-next-action>",
  "rule_id": "<decisionassure-rule-id>",
  "rule_version": "<decisionassure-rule-version>",
  "reason": "Fresh authorization evidence is stale, missing, or insufficient for this execution attempt."
}
```

A future revision may replace this with an exact captured verifier `--json` output example from DecisionAssure documentation or test output.

## Earlier RABA Interpretation — Corrected

The earlier draft asked valid RABA governance questions, but it incorrectly represented some answers as DecisionAssure-native structured fields.

Corrected interpretation:

| RABA question | DecisionAssure-native support | RABA-layer interpretation boundary |
|---|---|---|
| Can technical evidence indicate that execution should be blocked? | Yes, via fields such as `execution_allowed`, `failure_class`, `evidence_status`, `severity`, and `reason`. | RABA must still interpret the business responsibility impact. |
| Can the verifier signal that fresh human authorization is required? | Yes, via `requires_reauthorization`. | RABA may synthesize a confirmation-freshness state, but that state is not a DecisionAssure field. |
| Can the verifier signal that human review is required? | Yes, via `requires_human_review`. | RABA must define which human responsibilities remain in the specific workflow. |
| Can it classify technical/policy failure categories? | Yes, via fields such as `failure_class`, `incident_class`, and `evidence_status`. | RABA must decide how those classifications affect Action Boundary, Approval State, escalation, and Decision Log. |
| Can it output `rollback_viable`? | No, not as an exposed verifier output field according to the external review. | Reversibility remains a RABA workflow/context assessment unless exposed by another tool or layer. |
| Can it output `hidden_commitment_detected`? | No, not as an exposed verifier output field according to the external review. | Hidden commitment remains a RABA interpretation/failure-pattern concern. |
| Can it output `human_responsibility_remains`? | No. | RABA must attach workflow-specific responsibility lists where needed. |

## RABA Interpretation

DecisionAssure verifier evidence may support several RABA concerns:

- evidence admissibility;
- policy violation detection;
- execution blocking;
- reauthorization triggers;
- human review triggers;
- incident classification;
- rule/version traceability;
- human-readable explanation through `reason`.

However, the trace remains external input.

It does not define canonical RABA schema or event semantics.

## What This Trace Evidence Can Support

Verifier evidence can help answer:

- Was execution allowed by the verifier?
- Did the verifier require human review?
- Did the verifier require reauthorization?
- What failure class was reported?
- What evidence status was reported?
- What severity was assigned?
- What rule and rule version were applied?
- What human-readable reason was returned?

These are evidence inputs for RABA.

They are not, by themselves, final RABA responsibility states.

## RABA Questions That Remain RABA-Native

The following remain valid RABA governance questions, but they must not be attributed to DecisionAssure-native verifier output unless a future schema exposes them:

- Was the confirmation still fresh at execution time?
- Did the scope change after confirmation?
- Was prior approval reused as hidden commitment?
- Was rollback assumed, possible, or tested?
- What specific responsibility remains with the Human Owner or responsible role?
- How should technical trace evidence be connected to the business Decision Log?

## What This Trace Does Not Prove

This trace evidence does not prove:

- that DecisionAssure is adopted by RABA;
- that DecisionAssure is required for RABA implementation;
- that RABA accepts DecisionAssure field names as canonical;
- that external trace evidence replaces RABA Decision Log;
- that Human Owner responsibility is transferred to the trace system;
- that verifier evidence contains the full list of human responsibilities;
- that any commercial pilot, referral or partnership has been approved.

## Commercial Boundary

External discussion mentioned possible commercial paths, including a paid pilot and referral model.

RABA records those statements only as context.

Current RABA position:

- no paid pilot approved;
- no referral agreement approved;
- no joint liability accepted;
- no IP transfer accepted;
- no procurement or vendor adoption decision made;
- no commercial commitment exists without explicit Human Owner confirmation.

This is consistent with the commercial Phase 0 deferral decision.

## Relationship to RABA Documents

This review input should be considered together with:

- [`implementation/responsibility-event-stream.md`](../../implementation/responsibility-event-stream.md)
- [`docs/decision-log-schema.md`](../decision-log-schema.md)
- [`docs/approval-state-specification.md`](../approval-state-specification.md)
- [`docs/failure-patterns/confirmed-intent-drift.md`](../failure-patterns/confirmed-intent-drift.md)
- [`docs/mapping/decisionassure-raba-trace-field-mapping.md`](../mapping/decisionassure-raba-trace-field-mapping.md)

## Open Questions

1. Which DecisionAssure-native verifier fields should RABA treat as useful external evidence inputs?
2. Which RABA-native responsibility states should be synthesized from verifier evidence?
3. Should RABA define a formal `trace_evidence` object separate from `responsibility_state`?
4. Should RABA add a non-canonical `confirmation_freshness` synthesis pattern based on `requires_reauthorization` and workflow context?
5. Should hidden commitment detection remain a RABA failure-pattern analysis rather than an external verifier field?
6. How should RABA distinguish external trace proof from Human Owner architectural approval?

## Non-Canonical Status

This document is an external review input.

It may inform future RABA mapping, schema work and inquiry discussions, but it does not change canonical RABA architecture until explicitly reviewed and approved by the Human Owner.
