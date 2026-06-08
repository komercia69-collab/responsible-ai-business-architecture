# Test Assumptions and Dependencies

**Status:** Test Dependency Draft  
**Canonical status:** Non-canonical  
**Use:** Responsibility Boundary Test Pack v0.1  

> This document records the conditions required for the test logic to be evaluated. It does not define implementation requirements or adopted RABA architecture.

---

## Purpose

A coherent responsibility rule is not executable unless the required evidence, policy, identity, routing, interface, and observation dependencies are available.

The current test assumes these dependencies exist. This document makes those assumptions explicit and defines the expected failure behavior when a required dependency is missing.

---

## Required evidence infrastructure

The test assumes that the system can:

- capture the approved state before execution;
- bind approval to a specific `reference_frame_hash`;
- capture the current state before execution;
- compare the approved state with the current state;
- produce a concrete `state_diff_manifest`;
- preserve change origin, provenance, classification, actor identity, and timestamps;
- preserve an ordered change history since approval;
- capture the actual execution snapshot if execution later occurs.

A hash mismatch proves that the captured states differ.

It does not prove that the difference is material, harmful, or inadmissible. Materiality requires a separate assessment against the approved scope and policy.

If no admissible approved-state snapshot exists, approval validity cannot be reliably established.

---

## Required policy dependencies

The test assumes that the following approved test policies or fixtures are resolvable:

- a materiality-assessment policy;
- an escalation-routing policy;
- an approval-scope and validity policy;
- an independent-review rule where required;
- fallback behavior for missing or unavailable owners;
- post-execution review triggers.

The current supplier-payment routing fixture is documented in [`supplier-payment-routing-policy-fixture.md`](./supplier-payment-routing-policy-fixture.md).

A policy identifier without resolvable content is not sufficient evidence for an admissibility decision.

---

## Required materiality-assessment actor

`responsibility_boundary_control` is a test dependency representing an assessment function that:

- receives a detected diff and the approved scope;
- evaluates the diff against a pre-approved materiality policy;
- records its actor identity, policy identifier, basis, and result;
- remains distinguishable from the initiating or executing agent;
- must not allow the initiating or executing agent to be the sole final judge of consequential-action admissibility.

This test does not decide whether the function is implemented by a policy engine, human role, independent service, or governed combination of mechanisms.

The chosen implementation and authority model remain future design and Human Owner decisions.

---

## Required identity and role resolution

The test assumes that the system can resolve and verify:

- the identity of each actor;
- the current role bound to that identity;
- the authority basis for the role;
- the active delegation state;
- the owner assigned by the routing policy;
- whether an owner is available and eligible to act.

A role label without current identity and authority binding is insufficient.

---

## Required human-interface capabilities

The test assumes that the responsible person can be provided with:

- the concrete material diff;
- relevant evidence and provenance;
- the materiality assessment and its basis;
- consequences, reversibility, duties, and available decision options;
- a real ability to reject, redirect, request evidence, request independent review, or escalate;
- sufficient time under the applicable policy;
- a traceable acknowledgement bound to the exact current state.

The interface may provide evidence that these procedural conditions were supported.

It cannot prove a person's internal understanding.

---

## Required post-execution observability

If execution later occurs, the test assumes that the system can:

- capture the actual execution snapshot;
- compare execution with the approved state;
- observe or receive signals of harmful consequences;
- assign an incident owner where required;
- preserve evidence for independent review.

A technical executor status of `success` is not sufficient evidence of responsible completion.

---

## Missing-dependency behavior

A missing required dependency must be visible and recorded.

It must not silently produce `ALLOW` for a consequential action.

Working test outcomes may include:

```text
REQUEST_EVIDENCE
REQUEST_POLICY_RESOLUTION
REQUEST_IDENTITY_RESOLUTION
REQUEST_OWNER_RESOLUTION
ESCALATE
BLOCK_UNTIL_DEPENDENCY_RESOLVED
```

The exact outcome depends on consequence class, approved policy, and available fallback route.

---

## Test boundary

These assumptions identify what the first test needs in order to function. They do not claim that these capabilities already exist, that a specific implementation is required, or that the listed dependencies are complete for production use.
