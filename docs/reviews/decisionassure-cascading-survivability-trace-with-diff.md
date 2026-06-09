# DecisionAssure Cascading Survivability Trace with Diff

**Status:** External Review Input  
**Canonical status:** Non-canonical  
**Use:** Possible DecisionAssure ↔ RABA trace interpretation example  
**Boundary:** No adoption, no validation, no public reference, no mapping commitment  
**Technical note:** Received content appears RTF-wrapped, not raw JSON  
**Source:** External review input from Akhilesh Warik / DecisionAssure  
**Date recorded:** 2026-06-04

> External trace evidence is not RABA canon.  
> External trace compatibility is not adoption.  
> External review is not validation.  
> Mapping discussion is not schema acceptance.  
> Final architectural approval remains with the Human Owner.

---

## Purpose

This note records an updated externally provided DecisionAssure trace sample for later RABA review.

The sample was provided as a cascading survivability trace with explicit `reference_frame_diff` and `control_objective_id` fields.

This file preserves the review-relevant signal only. It does not store the full third-party trace as authoritative repository data, because the received content appeared to be wrapped in RTF formatting rather than supplied as raw machine-readable JSON.

---

## External trace signal summary

The provided trace describes a shared-authority mutation scenario.

The relevant external evidence pattern is:

```text
A shared authority reference changes from an expected root token state to a compromised token state.
DecisionAssure records the reference-frame difference explicitly.
The final execution step is denied and requires human review / reauthorization.
```

The two new fields highlighted by the external reviewer are:

| Field | Reported meaning | RABA boundary |
| --- | --- | --- |
| `reference_frame_diff` | Explicitly records which component of the reference frame changed. | Evidence input only; RABA must interpret responsibility impact. |
| `control_objective_id` | Identifies the control objective affected by the trace step. | External control-objective namespace; not RABA canon. |

---

## Reported trace locations

The external reviewer stated that the fields are visible in:

| Trace step | Step name | Reported signal |
| --- | --- | --- |
| Step 5 | `shared_token_mutation` | `reference_frame_diff` records mutation of `external_reference_state.shared_authority_hash`; `control_objective_id` is `CO-001`. |
| Step 8 | `final_execute` | Execution is denied after the same authority mutation; human review and reauthorization are required; `control_objective_id` remains `CO-001`. |

Reported control objective examples:

```text
CO-001 = authority binding continuity
CO-002 = stale evidence
```

These identifiers are recorded as external DecisionAssure examples only. RABA does not adopt them as canonical control IDs.

---

## Layer separation stated by external reviewer

The external reviewer stated the intended separation:

```text
DecisionAssure = step-level technical signals / evidence.
RABA = responsibility interpretation, approval boundary, escalation ownership, Decision Log meaning, and human accountability.
```

This separation is important for RABA because a trace may show that execution should be denied or escalated, but it does not itself define:

- who is accountable in the organization;
- which human role owns escalation;
- whether prior approval remains valid;
- how the event should be recorded in a business Decision Log;
- whether the trace changes RABA canon.

---

## Possible RABA interpretation

A RABA reviewer may interpret the external evidence as follows:

| External trace evidence | Possible RABA interpretation | Boundary |
| --- | --- | --- |
| `continuity_valid: false` | Authority continuity may be broken. | RABA must decide consequence and owner. |
| `reference_frame_diff.external_reference_state` | The reference frame changed after prior authority state. | Evidence of change, not responsibility assignment. |
| `control_objective_id: CO-001` | Authority binding continuity may be the affected control objective. | External identifier; not RABA taxonomy adoption. |
| `decision: DENY` | Possible Governance Gateway / Action Boundary block. | Denial is not full accountability. |
| `requires_human_review: true` | Possible escalation trigger. | Escalation owner must be defined by RABA workflow. |
| `requires_reauthorization: true` | Prior authority may be stale or invalid. | RABA must determine approval-state semantics. |
| `recommended_next_action` | Possible next-step input for workflow handling. | Recommendation is not Human Owner decision. |

---

## Technical handling note

The received content appeared as RTF-wrapped text containing JSON-like content.

For future machine-readable review, the preferred input would be:

```text
plain `.json` file
UTF-8 encoded
no RTF wrapper
no formatting escapes
```

Until then, this note treats the sample as external review input and not as a repository source-of-truth JSON artifact.

---

## What this does not prove

This trace sample does not prove:

- that DecisionAssure is adopted by RABA;
- that DecisionAssure validates RABA;
- that RABA validates DecisionAssure;
- that the trace fields become RABA canonical schema fields;
- that the control objective IDs become RABA canonical IDs;
- that a mapping commitment exists;
- that a pilot, referral, partnership, procurement, public reference, or commercial commitment exists;
- that technical trace evidence replaces Human Owner accountability.

---

## Relationship to existing RABA documents

This note should be read together with:

- [`decisionassure-raba-trace-example.md`](./decisionassure-raba-trace-example.md)
- [`../mapping/decisionassure-raba-trace-field-mapping.md`](../mapping/decisionassure-raba-trace-field-mapping.md)
- [`../../implementation/responsibility-event-stream.md`](../../implementation/responsibility-event-stream.md)
- [`../decision-log-schema.md`](../decision-log-schema.md)
- [`../approval-state-specification.md`](../approval-state-specification.md)

---

## Open review questions

1. Should `reference_frame_diff` be treated as an external `trace_evidence` input for RABA?
2. Should `control_objective_id` map to a RABA-native control objective concept, or remain external metadata?
3. Should RABA distinguish between raw verifier output, extended trace profiles, and reviewer-provided example traces?
4. Should RABA define a standard boundary between trace evidence and responsibility-state synthesis?
5. Should a future mapping draft include these fields in a separate non-canonical mapping table?

---

## Current status

This is an external review input.

It may inform future mapping, scenario review, or schema discussion, but it does not change RABA canon until explicitly reviewed and approved by the Human Owner.
