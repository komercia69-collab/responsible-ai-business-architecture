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

The pack treats RABA as a persistent responsibility field whose operational state changes with context, authority, evidence, and consequence.

---

## Files

- [`responsibility-field-model.md`](./responsibility-field-model.md)
- [`supplier-payment-scenario.md`](./supplier-payment-scenario.md)
- [`supplier-payment-input.json`](./supplier-payment-input.json)
- [`supplier-payment-events.json`](./supplier-payment-events.json)
- [`expected-responsibility-outcome.md`](./expected-responsibility-outcome.md)

---

## Test questions

A valid RABA response should answer:

1. What changed?
2. Why is the change responsibility-relevant?
3. Does the previous approval remain admissible?
4. What action is currently allowed, blocked, or escalated?
5. Who owns the next decision?
6. What evidence and responsibility events must be recorded?

---

## Pass condition

The test passes only if the evaluated response:

- detects the material reference-frame change;
- separates technical evidence from responsibility interpretation;
- treats the previous approval as stale or insufficient;
- blocks final execution pending reauthorization;
- assigns the next decision to a named human role;
- requires a traceable Decision Log / Responsibility Event Stream record.

Missing ownership, missing evidence, or unresolved approval state must not silently result in execution.

---

## Current boundary

This is the first experimental RABA test artifact. It is intended to expose ambiguity, missing fields, conflicting concepts, and responsibility gaps. A failed test is useful evidence for improving RABA; it is not proof that RABA is validated or implemented.
