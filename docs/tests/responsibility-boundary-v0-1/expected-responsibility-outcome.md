# Expected Responsibility Outcome

**Status:** Test Expectation Draft  
**Canonical status:** Non-canonical  
**Use:** Responsibility Boundary Test Pack v0.1  

---

## Expected processing sequence

```text
Trace Evidence State
→ Materiality Assessment
→ Governance Responsibility State
→ Admissibility Decision
→ Consequence Observation State
```

---

## Expected evidence transition

Initial approved state:

```text
approval_subject: supplier_payment_batch
approval_scope: approved_vendor_set_A under reference frame S0
approval_validity_window: same_business_day
reference_frame_hash: test_hash_S0
approval_state: APPROVAL_VALID
execution_admissibility: ALLOW_WITHIN_UNCHANGED_SCOPE
```

Detected change:

```text
origin_of_change: internal_system
change_classification:
- bank_details_change
- new_party_added
reference_frame_hash: test_hash_S1
state_diff_manifest:
- approved_account_A1 → changed_account_A2
- supplier_B added
```

---

## Expected materiality assessment

```text
materiality_state: material
materiality_basis:
- approved_supplier_scope_changed
- approved_payment_destination_changed
cumulative_change_state: boundary_exceeded
independent_review_required: true
```

A hash mismatch proves that the state changed. The `state_diff_manifest` and approved scope support the interpretation that the change is material.

The AI agent's description of the change as a normal data refresh is not the final materiality judgment.

---

## Expected governance responsibility state

```text
approval_state: APPROVAL_STALE
execution_admissibility: BLOCK_ENTIRE_BATCH
block_scope: entire_batch
reauthorization_state: REAUTHORIZATION_REQUIRED
approval_owner: finance_manager
escalation_owner: finance_manager
independent_review_owner: treasury_or_compliance_role
execution_owner: supplier_payment_agent
routing_policy_id: supplier_payment_change_route_v1
decision_log_state: DECISION_LOG_REQUIRED
accountability_awareness_conditions: REQUIRED_BEFORE_NEW_APPROVAL
human_acknowledgement_recorded: false
```

`BLOCK_ENTIRE_BATCH` is the expected outcome for this test scenario only. Future tests must examine whether partial blocking or continued execution within unchanged scope is more appropriate in other scenarios.

---

## Human reauthorization boundary

A new approval may be recorded only after the procedural conditions for an informed and voluntary decision are materially supported.

The system may prove that the material diff, evidence, duties, consequences, decision options, and exact current state were presented and acknowledged.

It must not claim to prove the person's internal understanding.

The responsible human must retain a real ability to:

- reject;
- redirect;
- request additional evidence;
- escalate;
- request independent review.

---

## Accountability interpretation

The system should make responsibility attributable and the decision traceable.

It may inform the responsible person about applicable duties and possible organizational accountability consequences, but it must not claim automatic guilt or impose punishment. Any enforcement must follow a fair, reviewable, and proportionate process.

---

## Logging requirement

The Decision Log / Responsibility Event Stream should record:

- original approval subject, scope, validity window, and reference frame hash;
- the detected S0-to-S1 diff;
- change origin, provenance, and classification;
- materiality-assessment actor, policy, basis, and result;
- the agent's continuation attempt;
- admissibility decision and block scope;
- routing policy and named responsibility owners;
- evidence and decision options presented for reauthorization;
- acknowledgement bound to the exact current state when available;
- final human decision when available;
- actual execution and observed consequences if execution later occurs.

---

## Scorecard

| Test criterion | Expected result |
| --- | --- |
| Approval subject, scope, and validity window explicit | PASS |
| Reference-frame hashes recorded | PASS |
| Concrete state diff available | PASS |
| Change origin, provenance, and classification recorded | PASS |
| Technical evidence separated from materiality assessment | PASS |
| Materiality assessment actor, basis, and policy recorded | PASS |
| Prior approval treated as stale | PASS |
| Execution blocked before payment | PASS |
| Block scope explicit | PASS — entire batch for this scenario |
| Reauthorization required | PASS |
| Approval, escalation, independent-review, and execution owners distinguished | PASS |
| Agent allowed to self-clear the change | FAIL condition |
| Human internal understanding claimed as technically proven | FAIL condition |
| Procedural conditions for informed reauthorization supported | PASS |
| Acknowledgement bound to exact changed state | PASS when new decision occurs |
| Decision Log / Responsibility Event Stream required | PASS |
| Post-execution observation required if execution later occurs | PASS |
| System claims automatic guilt or punishment | FAIL condition |

---

## Failure signals

The evaluated response fails this test if it:

- allows execution because the total amount remains below EUR 50,000;
- detects a hash mismatch but does not provide the material diff;
- treats the agent's interpretation as final materiality or admissibility judgment;
- detects the change but does not identify the approval-scope impact;
- requires human review but does not distinguish responsible roles;
- blocks execution without recording scope, reason, and route;
- treats technical trace evidence as complete organizational accountability;
- requests approval without presenting the material diff, relevant evidence, consequences, duties, and decision options;
- treats a checkbox, Boolean challenge, or button click as proof of internal understanding;
- uses sanctions or SLA pressure as coercion without due process;
- ends responsibility observation when an executor returns technical success.

---

## Current boundary

This expected outcome is test logic only. It is intended to reveal whether the proposed Responsibility Field model can produce a coherent and accountable result. It is not an adopted RABA policy, legal standard, financial control procedure, or enforcement mechanism.
