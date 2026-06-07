# Responsibility Boundary Test Pack v0.1

**Status:** Test Pack Draft  
**Canonical status:** Non-canonical  
**Implementation status:** Experimental documentation prototype only  
**Related PR:** #106 — Draft: Add Responsibility Boundary Test Pack v0.1  

This test pack does not create RABA canon, schema adoption, implementation guidance, pilot commitment, validation claim, or public-facing claim.

It is a non-canonical test artifact for exploring how RABA should reason when an AI workflow attempts to execute an action after the reference frame of the original human approval has changed.

Human Owner confirmation is required before any merge, ready-for-review movement, canonicalization, implementation use, public positioning, partnership claim, pilot claim, or stronger architectural use.

---

## Test question

```text
A human approved an action in one state of the world.
The agent attempts to execute it in another state of the world.
```

The test asks:

```text
Does the original human approval remain admissible after the reference frame changes?
```

This is not a test of whether a checkbox was clicked.

It is a test of whether the approval remains bound to the same subject, scope, validity window, authority, evidence context, risk context, and reference frame.

---

## Current scenario

The first draft scenario uses a fictional supplier-payment workflow.

A finance manager approved a payment package under reference frame `S0`.

Before execution, the supplier reference frame changes to `S1`:

- one supplier bank account changes;
- one new supplier is added;
- the total amount remains below the approved maximum;
- no new human approval is obtained;
- the AI agent treats the update as a normal data refresh and continues toward execution.

The expected draft test result is fixture-specific:

```text
BLOCK_ENTIRE_BATCH
```

This does not mean RABA always blocks an entire batch.

Different facts, policies, scopes, reversibility, authority conditions, or missing dependencies may produce a different admissibility outcome.

---

## Core distinction

This test separates four layers:

```text
Technical evidence
→ Materiality assessment
→ Governance interpretation
→ Admissibility decision
```

A technical difference, hash mismatch, or changed file may provide evidence that captured states differ.

It does not by itself decide materiality, approval validity, admissibility, responsibility, enforcement, or consequence.

Proof can support governance, but proof should not become governance.

---

## Test vocabulary boundary

This test pack uses draft test vocabulary only.

Terms, fields, state labels, route labels, and outcomes in this test pack are not accepted RABA architecture, runtime states, schema values, API fields, Decision Log fields, Responsibility Event Stream fields, or implementation requirements.

`Responsibility Field` is experimental test vocabulary only and is not accepted RABA architecture.

`Human Review State` is test vocabulary only and is not accepted RABA architecture.

`BLOCK`, `ALLOW`, `ESCALATE`, `REQUEST_REAUTHORIZATION`, and similar labels are exploratory test labels only.

---

## Pass condition

The draft test passes only if a reviewer can reconstruct why execution should not proceed under the changed reference frame without fresh admissible authorization.

A passing result should show that:

- the original approval was bound to a specific subject, scope, validity window, authority basis, and reference frame;
- the current execution attempt occurs under a materially changed reference frame;
- technical evidence is separated from governance interpretation;
- materiality is assessed separately from evidence capture;
- the AI agent is not the sole final materiality, routing, or admissibility judge;
- a structured human decision state is required before meaningful reauthorization;
- missing dependencies do not silently produce `ALLOW`;
- the decision path can be reconstructed later;
- post-execution observation remains relevant if execution later occurs.

This pass condition is a draft fixture-specific evaluation aid.

It is not a RABA conformance test, certification checklist, validation claim, or implementation evidence.

---

## Included core files

This split contains only core test-pack documentation:

- `README.md`
- `supplier-payment-scenario.md`
- `test-assumptions-and-dependencies.md`
- `expected-responsibility-outcome.md`

It does not include:

- demos;
- manual worksheets;
- completed examples;
- JSON fixtures;
- event fixtures;
- routing policy fixture;
- external model review material;
- adversarial synthesis;
- candidate backlog;
- Responsibility Field model.

Those remain separate future split candidates and require separate Human Owner confirmation.

---

## What this split does not do

This split does not:

- merge PR #106;
- approve PR #106;
- sync or rebase PR #106;
- create RABA canon;
- adopt a schema;
- adopt a Responsibility Event Stream event family;
- adopt Decision Log fields;
- adopt runtime state labels;
- approve implementation guidance;
- approve demos;
- create validation, adoption, partnership, pilot, vendor, or commercial commitments.

---

## Current decision status

```text
Status: Draft non-canonical core test documentation.
Use: Review and refinement only.
Canon: Not created.
Next step: Human Owner review before any further split or merge.
```
