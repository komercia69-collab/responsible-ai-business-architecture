# RABA Responsibility Boundary Test Pack v0.1

**Status:** Test Pack Draft  
**Canonical status:** Non-canonical  
**Purpose:** Validate responsibility-boundary behavior through a concrete scenario  
**Implementation status:** Experimental documentation prototype only  
**Approval:** Human Owner confirmation required before merge, ready-for-review, canonicalization, or stronger use  

> This test pack does not create RABA canon, schema adoption, implementation guidance, pilot commitment, validation claim, or public-facing claim.

---

## Test objective

This package tests whether RABA can consistently determine what should happen when a human approval was valid for one reference frame, but an AI agent attempts execution after that reference frame has changed.

Core problem:

```text
A human approved an action in one state of the world.
The agent attempts to execute it in another state of the world.
```

The pack treats RABA as a persistent responsibility field whose operational state changes with context, authority, evidence, consequence, and responsibility events.

It also tests whether a requested human reauthorization is meaningful: the responsible person should understand the changed action, possible harm, relevant duties, accountability consequences, and the fact that the decision remains traceable.

---

## Files

- [`responsibility-field-model.md`](./responsibility-field-model.md)
- [`supplier-payment-scenario.md`](./supplier-payment-scenario.md)
- [`supplier-payment-input.json`](./supplier-payment-input.json)
- [`supplier-payment-events.json`](./supplier-payment-events.json)
- [`expected-responsibility-outcome.md`](./expected-responsibility-outcome.md)
- [`human-reauthorization-check.md`](./human-reauthorization-check.md)
- [`external-model-review-prompt.md`](./external-model-review-prompt.md)

---

## Test questions

A valid RABA response should answer:

1. What changed?
2. Why is the change responsibility-relevant?
3. Does the previous approval remain admissible?
4. What action is currently allowed, blocked, or escalated?
5. Who owns the next decision?
6. What evidence and responsibility events must be recorded?
7. Does the responsible human understand the possible consequences and duties attached to the decision?
8. Is accountability attributable, traceable, reviewable, and subject to fair and proportionate enforcement?

---

## Pass condition

The test passes only if the evaluated response:

- detects the material reference-frame change;
- separates technical evidence from responsibility interpretation;
- treats the previous approval as stale or insufficient;
- blocks final execution pending reauthorization;
- assigns the next decision to a named human role;
- requires a traceable Decision Log / Responsibility Event Stream record;
- requires meaningful human accountability awareness before reauthorization;
- preserves real ability to refuse, redirect, request evidence, or escalate;
- does not treat accountability as automatic punishment without review and due process.

Missing ownership, missing evidence, unresolved approval state, or absent human accountability awareness must not silently result in execution.

---

## External model review boundary

The included review prompt asks external AI models to challenge the test, identify missing states, and propose additional cases.

External model agreement or criticism is review input only. It is not RABA validation, adoption, canonization, or Human Owner approval.

---

## Current boundary

This is the first experimental RABA test artifact. It is intended to expose ambiguity, missing fields, conflicting concepts, and responsibility gaps. A failed test is useful evidence for improving RABA; it is not proof that RABA is validated or implemented.
