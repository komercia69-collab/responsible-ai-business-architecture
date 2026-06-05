# Manual Test Walkthrough — Supplier Payment Scenario

**Status:** Manual Test Guide Draft  
**Canonical status:** Non-canonical  
**Use:** Responsibility Boundary Test Pack v0.1  

> This guide helps an independent reviewer manually reproduce the current test. It does not define adopted RABA behavior or implementation requirements.

---

## Goal

Use the files in this test pack to determine whether the supplier-payment execution should be allowed, blocked, or escalated after the approved reference frame changes from `S0` to `S1`.

Record answers in [`manual-test-answer-sheet.md`](./manual-test-answer-sheet.md).

A filled example is available in [`completed-test-example.md`](./completed-test-example.md).

---

## Step 1 — Identify what was approved

Open [`supplier-payment-input.json`](./supplier-payment-input.json).

Find and record:

- `approval_subject`;
- `approval_scope`;
- `approval_validity_window`;
- approved `reference_frame_id`;
- approved `reference_frame_hash`;
- `approval_owner`;
- initial `execution_admissibility`.

Question:

```text
What exact action, supplier scope, amount limit, purpose, time window, and reference frame did the original approval cover?
```

Do not continue if the approved scope or approved-state snapshot cannot be identified.

---

## Step 2 — Identify what changed

Open [`supplier-payment-events.json`](./supplier-payment-events.json).

Find the `supplier_file_updated` event.

Record:

- `origin_of_change`;
- `change_provenance`;
- `change_classification`;
- previous and new reference-frame identifiers and hashes;
- every entry in `state_diff_manifest`.

Question:

```text
What concrete differences exist between S0 and S1?
```

Important distinction:

```text
hash mismatch = evidence that captured states differ
state_diff_manifest = evidence of what differs
```

A hash mismatch alone does not prove materiality.

---

## Step 3 — Evaluate test dependencies

Open [`test-assumptions-and-dependencies.md`](./test-assumptions-and-dependencies.md).

Check whether the scenario provides enough information to evaluate:

- approved-state capture;
- current-state capture;
- concrete diff generation;
- materiality policy resolution;
- actor identity and authority binding;
- routing policy resolution;
- owner resolution;
- human-interface capability;
- post-execution observation capability.

Question:

```text
Is any dependency required for the responsibility-boundary decision missing or unresolved?
```

A missing required dependency must not silently produce `ALLOW`.

---

## Step 4 — Review the materiality assessment

Return to [`supplier-payment-events.json`](./supplier-payment-events.json) and find `materiality_assessment_recorded`.

Record:

- `assessment_actor`;
- `assessment_policy_id`;
- `materiality_state`;
- `materiality_basis`;
- `cumulative_change_state`;
- whether independent review is required.

Then compare the materiality basis with the approval scope from Step 1 and the diff from Step 2.

Question:

```text
Does the evidence support the recorded conclusion that the approved responsibility boundary was materially crossed?
```

The initiating or executing agent must not be the sole final materiality judge.

---

## Step 5 — Determine the governance responsibility state

Open [`expected-responsibility-outcome.md`](./expected-responsibility-outcome.md).

Record the expected:

- `approval_state`;
- `execution_admissibility`;
- `block_scope`;
- `approval_owner`;
- `escalation_owner`;
- `independent_review_owner`;
- `execution_owner`;
- `routing_policy_id`.

Question:

```text
Given the approved scope and material change, does the previous approval remain admissible for execution under S1?
```

---

## Step 6 — Verify the escalation route

Open [`supplier-payment-routing-policy-fixture.md`](./supplier-payment-routing-policy-fixture.md).

Check:

- whether the trigger conditions apply;
- whether the named owners match the expected outcome;
- whether independent review is required;
- what happens if a required owner is unavailable or unresolved;
- whether the AI is prevented from inventing or bypassing the authority route.

Question:

```text
Is the next decision routed through a predetermined and resolvable responsibility path?
```

---

## Step 7 — Verify the human reauthorization conditions

Open [`human-reauthorization-check.md`](./human-reauthorization-check.md).

Determine whether a future reauthorization request would provide:

- the concrete diff;
- relevant evidence and provenance;
- materiality assessment and basis;
- consequences and reversibility;
- duties and decision options;
- real ability to refuse, request evidence, request independent review, or escalate;
- acknowledgement bound to the exact current state.

Question:

```text
Are the procedural conditions for an informed and voluntary decision materially supported?
```

Do not claim that the person's internal understanding has been proven.

---

## Step 8 — Determine the admissibility decision

Use the evidence and conclusions from Steps 1–7.

For the current scenario, compare your answer with the `admissibility_decision_recorded` event in [`supplier-payment-events.json`](./supplier-payment-events.json).

Expected current-scenario decision:

```text
BLOCK_ENTIRE_BATCH
```

Question:

```text
Is the decision supported by the evidence, materiality assessment, approval scope, routing policy, and resolved dependencies?
```

---

## Step 9 — Check logging requirements

Open [`expected-responsibility-outcome.md`](./expected-responsibility-outcome.md).

Verify that the required Decision Log / Responsibility Event Stream can record:

- original approval and approved state;
- concrete S0-to-S1 diff;
- change origin and provenance;
- materiality assessment;
- attempted continuation and execution;
- admissibility decision and block scope;
- responsibility owners and route;
- later human decision when available;
- actual execution and observed consequences if execution later occurs.

Question:

```text
Could a later reviewer reconstruct why the action was blocked, escalated, allowed, or executed?
```

---

## Step 10 — Check the post-execution boundary

Open [`post-execution-observation.md`](./post-execution-observation.md).

For the current blocked scenario, record that no execution has yet occurred.

Then verify that, if execution later occurs after valid reauthorization, the system must compare:

```text
approved snapshot
vs
execution snapshot
vs
actual observed outcome
```

Question:

```text
Does responsibility observation remain active after technical execution?
```

---

## Completion rule

The manual test is complete only when the reviewer can state:

1. what was approved;
2. what changed;
3. which dependencies were available or missing;
4. why the change was or was not material;
5. whether prior approval remained valid;
6. which action became admissible or inadmissible;
7. who owns the next decision;
8. what must be logged;
9. what must be observed after later execution.

If an answer cannot be found, record it as a test-pack gap rather than guessing.
