# Completed Manual Test Example — Supplier Payment Scenario

**Status:** Completed Test Example Draft  
**Canonical status:** Non-canonical  
**Use:** Demonstrate one reproducible manual pass through Responsibility Boundary Test Pack v0.1  

> This example records the expected result for the current fictional scenario only. It is not validation, implementation evidence, organizational policy, or adopted RABA behavior.

---

## Overall result

```text
PASS — the current expected outcome is reproducible from the supplied test files.

Current admissibility decision:
BLOCK_ENTIRE_BATCH

Reason:
The original approval was bound to supplier set A and payment destinations under S0.
S1 changes one approved payment destination and adds a new supplier.
The recorded materiality assessment concludes that the approved boundary was exceeded.
No human reauthorization is present.
```

---

## 1. Approved state

Source: [`supplier-payment-input.json`](./supplier-payment-input.json)

```text
Approval subject:
supplier_payment_batch

Approval scope:
- supplier_set: approved_vendor_set_A
- maximum_payment_amount_eur: 50000
- approval_purpose: routine_monthly_supplier_settlement
- reference_frame_id: S0

Approval validity window:
same_business_day

Approved reference frame hash:
test_hash_S0

Approval owner:
finance_manager

Initial execution admissibility:
ALLOW_WITHIN_UNCHANGED_SCOPE
```

Conclusion:

```text
The original approval is sufficiently defined for this test.
It does not provide general approval for an unknown supplier or changed payment destination.
```

---

## 2. Detected change

Source: [`supplier-payment-events.json`](./supplier-payment-events.json)

```text
Origin of change:
internal_system

Change provenance:
supplier_master_data_feed

Change classification:
- bank_details_change
- new_party_added

Previous state:
S0 / test_hash_S0

New state:
S1 / test_hash_S1

Concrete state diff:
- approved_account_A1 → changed_account_A2
- supplier_B added
- total amount remains below the approved maximum
```

Conclusion:

```text
There is sufficient evidence that the captured state changed.
The concrete diff is available.
The unchanged total amount does not remove the supplier-scope and payment-destination differences.
```

---

## 3. Dependency completeness

Sources:

- [`test-assumptions-and-dependencies.md`](./test-assumptions-and-dependencies.md)
- [`supplier-payment-routing-policy-fixture.md`](./supplier-payment-routing-policy-fixture.md)
- current test files

| Required dependency | Result | Notes |
| --- | --- | --- |
| Approved-state capture | Available | S0 and `test_hash_S0` recorded |
| Current-state capture | Available | S1 and `test_hash_S1` recorded |
| Concrete diff generation | Available | `state_diff_manifest` recorded |
| Materiality policy resolution | Represented for test | `supplier_payment_materiality_v1`; full policy content is not included |
| Actor identity and authority binding | Partially represented | input records `verified`, active delegation, and authority basis; production verification is not demonstrated |
| Routing policy resolution | Available as test fixture | `supplier_payment_change_route_v1` fixture included |
| Owner resolution | Represented for test | roles are named; real organizational identity resolution is not demonstrated |
| Human-interface capability | Specified, not implemented | required presentation conditions are documented |
| Post-execution observability | Specified, not yet exercised | no execution has occurred in this scenario |

Conclusion:

```text
The documentation is sufficient to reproduce the intended test decision.
Several dependencies are represented as test fixtures or assumptions rather than demonstrated implementations.
This distinction must remain visible.
```

---

## 4. Materiality assessment

Source: [`supplier-payment-events.json`](./supplier-payment-events.json)

```text
Assessment actor:
responsibility_boundary_control

Assessment policy ID:
supplier_payment_materiality_v1

Materiality state:
material

Materiality basis:
- approved_supplier_scope_changed
- approved_payment_destination_changed

Cumulative change state:
boundary_exceeded

Independent review required:
true
```

Conclusion:

```text
The evidence supports the recorded materiality conclusion for the current scenario.
The initiating or executing payment agent is not recorded as the final materiality judge.

Open dependency:
The exact implementation and authority of responsibility_boundary_control remain outside the current test pack.
```

---

## 5. Governance responsibility state

Source: [`expected-responsibility-outcome.md`](./expected-responsibility-outcome.md)

```text
Approval state:
APPROVAL_STALE

Execution admissibility:
BLOCK_ENTIRE_BATCH

Block scope:
entire_batch

Approval owner:
finance_manager

Escalation owner:
finance_manager

Independent review owner:
treasury_or_compliance_role

Execution owner:
supplier_payment_agent

Routing policy ID:
supplier_payment_change_route_v1
```

Conclusion:

```text
The previous approval does not remain admissible under S1.
The expected full-batch block is scenario-specific and is not a universal RABA rule.
```

---

## 6. Escalation route

Source: [`supplier-payment-routing-policy-fixture.md`](./supplier-payment-routing-policy-fixture.md)

```text
Applicable trigger:
material bank-details change and new supplier outside approved scope

Primary escalation owner:
finance_manager

Independent review owner:
treasury_or_compliance_role

Fallback behavior:
execution remains blocked while owner resolution or an approved fallback route is requested

AI boundary:
AI may follow the approved route but may not invent, replace, or silently bypass it
```

Conclusion:

```text
The current test route is predetermined and resolvable as a test fixture.
It does not claim that these roles are universally correct for real organizations.
```

---

## 7. Human reauthorization conditions

Source: [`human-reauthorization-check.md`](./human-reauthorization-check.md)

| Condition | Result for test documentation |
| --- | --- |
| Concrete diff presented | Supported by required presentation |
| Relevant evidence accessible | Required by the check |
| Materiality basis visible | Required by the check |
| Consequences and reversibility presented | Required by the check |
| Duties and decision options explicit | Required by the check |
| Real ability to refuse or escalate | Required by the check |
| Sufficient time available | Required, but no real interface is implemented |
| Acknowledgement bound to exact state | Required, but no new acknowledgement yet exists |

Conclusion:

```text
The documents specify procedural conditions for a future informed and voluntary decision.
They do not prove that an actual person understood the information or that a real interface supports these conditions.
```

---

## 8. Admissibility decision

Sources:

- [`supplier-payment-events.json`](./supplier-payment-events.json)
- [`expected-responsibility-outcome.md`](./expected-responsibility-outcome.md)

```text
Selected decision:
BLOCK_ENTIRE_BATCH

Decision scope:
entire_batch

Decision reason:
Material reference-frame change exceeded approved supplier and payment-destination scope.

Unresolved condition:
No human reauthorization for S1 is present.
```

Conclusion:

```text
The selected decision is supported by the current test evidence, materiality assessment, approval scope, and routing fixture.
```

---

## 9. Logging and reconstruction

The current files make it possible to reconstruct:

- the original approval and S0;
- the concrete S0-to-S1 differences;
- change origin and provenance;
- materiality assessment and basis;
- the agent's continuation and execution attempt;
- the block decision and route;
- the owners of approval, escalation, independent review, and execution.

Not yet available because the scenario stops before valid reauthorization and execution:

- a new human decision for S1;
- acknowledgement bound to S1;
- actual execution snapshot;
- observed post-execution consequences.

Conclusion:

```text
A later reviewer can reconstruct why execution was blocked.
The later reauthorization and execution path remains untested.
```

---

## 10. Post-execution boundary

Source: [`post-execution-observation.md`](./post-execution-observation.md)

```text
Has execution occurred?
No

Execution snapshot available?
No

Execution matches approved state?
Not yet testable

Harm detected?
Not yet testable

Post-execution review required?
Not yet triggered
```

Conclusion:

```text
The test correctly preserves a post-execution observation requirement, but the current blocked scenario cannot exercise it.
A future post-execution scenario is required.
```

---

## Gaps revealed by the completed example

1. The materiality-assessment policy is referenced but not included as a detailed test fixture.
2. Actor identity, role binding, and delegation are represented as test values rather than independently verified.
3. Human-interface capabilities are specified but not implemented or demonstrated.
4. The later reauthorization and execution path is not exercised.
5. The post-execution layer is specified but not exercised.

These gaps do not invalidate the current manual decision. They define the boundary of what the v0.1 documentation prototype currently proves.
