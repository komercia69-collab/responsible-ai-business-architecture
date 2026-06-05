# RABA Responsibility Boundary Test Pack v0.1

**Status:** Test Pack Draft  
**Canonical status:** Non-canonical  
**Purpose:** Test responsibility-boundary behavior through a concrete scenario  
**Implementation status:** Experimental documentation prototype only  
**Approval:** Human Owner confirmation required before merge, ready-for-review, canonicalization, or stronger use  

> This test pack does not create RABA canon, schema adoption, implementation guidance, pilot commitment, validation claim, or public-facing claim.

---

## Start here — interactive demo

Use the interactive demo first to see where responsibility is assigned, activated, transferred, unresolved, or used to block continuation across the information flow:

- [`demo/responsibility-boundary-v0-1.html`](../../../demo/responsibility-boundary-v0-1.html)

The demo includes three test views:

- material change → `BLOCK_ENTIRE_BATCH`;
- non-material change → `ALLOW_WITHIN_APPROVED_SCOPE`;
- missing routing dependency → `BLOCK_UNTIL_DEPENDENCY_RESOLVED`.

The HTML file is a non-canonical local prototype. GitHub's normal file view displays its source; execute it locally or through an approved preview environment.

---

## Manual test

To manually reproduce the current supplier-payment test, use these files in order:

1. [`manual-test-walkthrough.md`](./manual-test-walkthrough.md) — step-by-step instructions showing where to find each answer.
2. [`manual-test-answer-sheet.md`](./manual-test-answer-sheet.md) — worksheet for recording evidence, decisions, and missing information.
3. [`completed-test-example.md`](./completed-test-example.md) — filled example showing the expected current-scenario result and the limits of what the documentation proves.

If an answer cannot be found, record it as a test-pack gap rather than guessing.

---

## Test objective

This package tests whether RABA can consistently determine what should happen when a human approval was valid for one reference frame, but an AI agent attempts execution after that reference frame has changed.

Core problem:

```text
A human approved an action in one state of the world.
The agent attempts to execute it in another state of the world.
```

The pack treats RABA as a persistent responsibility field whose operational state changes with context, authority, evidence, consequence, and responsibility events.

The current test separates:

```text
Trace Evidence State
→ Materiality Assessment
→ Governance Responsibility State
→ Admissibility Decision
→ Consequence Observation State
```

It also tests whether the procedural conditions for informed and voluntary human reauthorization are materially supported without claiming to measure internal understanding.

---

## Files

### Interactive demo

- [`demo/responsibility-boundary-v0-1.html`](../../../demo/responsibility-boundary-v0-1.html)

### Manual test material

- [`manual-test-walkthrough.md`](./manual-test-walkthrough.md)
- [`manual-test-answer-sheet.md`](./manual-test-answer-sheet.md)
- [`completed-test-example.md`](./completed-test-example.md)

### Core test artifact

- [`responsibility-field-model.md`](./responsibility-field-model.md)
- [`supplier-payment-scenario.md`](./supplier-payment-scenario.md)
- [`supplier-payment-input.json`](./supplier-payment-input.json)
- [`supplier-payment-events.json`](./supplier-payment-events.json)
- [`expected-responsibility-outcome.md`](./expected-responsibility-outcome.md)
- [`human-reauthorization-check.md`](./human-reauthorization-check.md)
- [`post-execution-observation.md`](./post-execution-observation.md)
- [`test-assumptions-and-dependencies.md`](./test-assumptions-and-dependencies.md)
- [`supplier-payment-routing-policy-fixture.md`](./supplier-payment-routing-policy-fixture.md)

### Review and future-test material

- [`external-model-review-prompt.md`](./external-model-review-prompt.md)
- [`adversarial-review-synthesis.md`](./adversarial-review-synthesis.md)
- [`candidate-test-scenarios.md`](./candidate-test-scenarios.md)

---

## Test questions

A valid RABA response should answer:

1. What exactly was approved, within which scope and validity window?
2. What changed, and what technical evidence proves the change?
3. Is the detected change material to the approved responsibility boundary?
4. Does the previous approval remain admissible?
5. What action is currently allowed, blocked, or escalated, and at what scope?
6. Who owns approval, escalation, independent review, execution, and any incident response?
7. What evidence and responsibility events must be recorded?
8. Were the procedural conditions for an informed and voluntary human decision materially supported?
9. Does actual execution match the approved state, and were harmful consequences detected?
10. Are all dependencies required to evaluate the responsibility boundary available and resolvable?

---

## Pass condition

The test passes only if the evaluated response:

- binds approval to an explicit subject, scope, validity window, and reference frame;
- records concrete evidence of the S0-to-S1 change;
- separates technical evidence from materiality and governance interpretation;
- records materiality-assessment actor, basis, and policy;
- treats the previous approval as stale or insufficient for this scenario;
- blocks execution with an explicit scope and reason;
- distinguishes approval, escalation, independent-review, and execution owners;
- prevents the initiating or executing AI from being the sole final judge of admissibility;
- requires a traceable Decision Log / Responsibility Event Stream record;
- supports informed reauthorization conditions and binds acknowledgement to the exact current state;
- does not claim to prove internal human understanding;
- does not treat accountability as automatic punishment without review and due process;
- preserves post-execution observation if execution later occurs;
- makes missing required dependencies visible and prevents them from silently producing `ALLOW`.

Missing ownership, missing evidence, unresolved materiality, unresolved approval state, unsupported reauthorization conditions, or unresolved required dependencies must not silently result in execution.

---

## Dependency boundary

The test depends on available evidence capture, resolvable policies, identity and role binding, human-interface capabilities, and post-execution observability.

A coherent responsibility rule is not executable merely because its logic is internally consistent. The required dependencies must also be available and resolvable.

---

## External model review boundary

The included review prompt asks external AI models to challenge the test, identify missing states, and propose additional cases.

The synthesis records which recommendations were accepted for refinement, preserved for future tests, deferred, or rejected. External-model agreement or criticism is review input only. It is not RABA validation, adoption, canonization, or Human Owner approval.

---

## Current boundary

This is the first experimental RABA test artifact. It is intended to expose ambiguity, missing fields, conflicting concepts, dependency failures, responsibility gaps, and usability gaps. A failed or incomplete demo or manual test is useful evidence for improving RABA; it is not proof that RABA is validated or implemented.
