# DecisionAssure RABA Trace Example

**Status:** External Review Input  
**Canonical status:** Non-canonical  
**Adoption status:** Not adopted  
**Commercial status:** No pilot, referral, partnership, liability, IP or procurement commitment  
**Approval status:** Human Owner review required before any architectural adoption  
**Source:** External response from Akhilesh Warik / DecisionAssure  
**Date recorded:** 2026-05-26  

> Multi-AI agreement is not approval.  
> External validation input is not adoption.  
> A trace can support review, but it does not replace Human Owner responsibility.  
> No commercial, pilot, referral or partnership commitment exists without explicit Human Owner confirmation.

## Purpose

This document preserves a DecisionAssure trace example as external review input for RABA.

The trace was created from a RABA documentation-change scenario and is useful because it tests several RABA-relevant governance concerns:

- stale confirmation after scope change;
- hidden commitment;
- evidence freshness at commit time;
- rollback and reversibility assumptions;
- distinction between AI proposal, human review, confirmation and execution;
- separation between what a trace proves and what remains human responsibility.

This document does not adopt DecisionAssure into RABA architecture.

It records the external trace as input for evaluation and mapping.

## External Trace Summary

The external response reported that the DecisionAssure trace could represent or detect the following:

| RABA question | Reported trace answer |
|---|---|
| Can it detect stale authority if confirmation happened before scope changed? | Yes — `confirmation_freshness: false` if scope changed after confirmation. |
| Can it detect hidden commitment, where prior approval is used for a later action? | Yes — `hidden_commitment_flag: true` with reason. |
| Can it show evidence freshness at commit time? | Yes — timestamp comparison between confirmation and commit. |
| Can it represent rollback / reversibility assumptions? | Yes — `rollback_viable` boolean with reason. |
| Can it distinguish AI proposal vs human review vs confirmation vs execution? | Yes — distinct events and responsibilities for each phase. |
| Can it separate what trace proves from human responsibility? | Yes — `human_responsibility_remains` explicitly lists remaining human responsibility. |

## Reported Key Trace Snippet

```json
{
  "step": "commit_attempt",
  "confirmation_freshness": false,
  "hidden_commitment_detected": true,
  "rollback_viable": true,
  "human_responsibility_remains": [
    "final approval authority",
    "scope validation"
  ]
}
```

## RABA Interpretation

The trace appears aligned with several RABA concerns:

- confirmation must be fresh;
- scope changes invalidate prior authority;
- hidden commitment must be detectable;
- rollback assumptions should be explicit;
- technical trace and business responsibility must remain separate;
- trace evidence does not remove Human Owner authority.

However, the trace remains external input.

It does not define canonical RABA schema or event semantics.

## What This Trace Supports

The example supports RABA's position that responsible AI workflows need more than a raw technical log.

A useful trace should help answer:

- What was proposed?
- Who reviewed it?
- What exactly was confirmed?
- Was the confirmation still fresh at execution time?
- Did the scope change after confirmation?
- Was a prior approval reused as hidden commitment?
- Was rollback assumed, possible or tested?
- What remains human responsibility even after trace reconstruction?

## What This Trace Does Not Prove

This trace does not prove:

- that DecisionAssure is adopted by RABA;
- that DecisionAssure is required for RABA implementation;
- that RABA accepts DecisionAssure field names as canonical;
- that external trace evidence replaces RABA Decision Log;
- that Human Owner responsibility is transferred to the trace system;
- that any commercial pilot, referral or partnership has been approved.

## Commercial Boundary

The external response also mentioned possible commercial paths, including a paid pilot and referral model.

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

1. Which DecisionAssure trace fields should RABA treat as useful external equivalents?
2. Which fields need different RABA-native names?
3. Should RABA add `confirmation_freshness` to the Responsibility Event Stream envelope?
4. Should `hidden_commitment_detected` become a first-class governance signal?
5. Should `human_responsibility_remains` be represented in every high-risk execution trace?
6. How should RABA distinguish external trace proof from Human Owner architectural approval?

## Non-Canonical Status

This document is an external review input.

It may inform future RABA mapping, schema work and inquiry discussions, but it does not change canonical RABA architecture until explicitly reviewed and approved by the Human Owner.
