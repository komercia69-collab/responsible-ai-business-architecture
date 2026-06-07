# Completed Test Example — Responsibility Boundary v0.1

**Status:** Completed Test Example Draft  
**Canonical status:** Non-canonical  
**Use:** Responsibility Boundary Test Pack v0.1 manual review aid  

This completed example is a draft worked example for one fictional fixture only.

It is not RABA validation, certification, conformance evidence, implementation evidence, legal evidence, financial-control evidence, organizational policy, adopted RABA behavior, or an official universal answer.

It shows one reproducible pass through the current draft test logic.

---

## Draft result

```text
PASS_WITHIN_DRAFT_FIXTURE
```

Meaning:

```text
the current fixture-specific expected outcome is reproducible from the supplied draft test logic
```

This is not a validation claim.

It is not a certification claim.

It is not evidence that RABA is implemented.

It is not evidence that a real organization, real interface, real policy, real identity system, or real payment process satisfies these conditions.

---

## 1. Approved state

| Question | Example answer |
|---|---|
| What was approved? | Supplier payment package under S0 |
| Approval subject | Monthly supplier settlement package |
| Approval scope | Supplier set A, approved payment destinations, amount below EUR 50,000 |
| Approval validity window | Same business day |
| Approved reference frame ID | S0 |
| Approved reference frame evidence | Test fixture assumption |
| Approval owner | finance_manager |
| Authority basis | Test fixture authorization assumption |
| Delegation state | No active delegation shown |
| Evidence missing or unclear | Production identity/authority verification not demonstrated |

The approval is treated as valid only for the fixture's S0 state.

---

## 2. Changed state

| Question | Example answer |
|---|---|
| Current reference frame ID | S1 |
| What changed from approved state? | Supplier bank account changed; new supplier added |
| Concrete diff available? | Represented in draft test logic |
| Change origin known? | Represented as supplier-data update |
| Change provenance known? | Partially represented; production provenance not demonstrated |
| Change history since approval available? | Represented for fixture only |
| Evidence missing or unclear | Production source-system evidence not demonstrated |

The changed state is sufficient for the draft fixture to test responsibility-boundary reasoning.

It is not production evidence.

---

## 3. Dependency completeness

| Dependency | Example answer | Notes |
|---|---|---|
| Approved-state snapshot | Represented | Fixture assumption |
| Current-state snapshot | Represented | Fixture assumption |
| Concrete diff | Represented | Fixture assumption |
| Materiality policy | Assumed | Not implemented |
| Identity and role binding | Assumed | Not production verified |
| Escalation route | Assumed | Fixture route only |
| Independent review route | Partially represented | Not real org policy |
| Fallback owner route | Not fully represented | Gap for future tests |
| Human reauthorization interface conditions | Conceptually represented | No real interface proven |
| Post-execution observation capability | Conceptually represented | No real implementation proven |

Several dependencies are represented as test fixtures or assumptions rather than demonstrated implementations.

This distinction must remain visible.

---

## 4. Materiality assessment

| Question | Example answer |
|---|---|
| Does the change affect approved subject? | Possibly yes, because supplier set changes |
| Does the change affect approved scope? | Yes |
| Does the change affect payment destination or equivalent target? | Yes |
| Does the change affect actor/owner authority? | Not directly shown |
| Does the change affect consequence class? | Potentially yes |
| Does the change affect reversibility? | Potentially yes |
| Does the change require independent review? | Candidate yes, depending on policy |
| Who assessed materiality? | Draft responsibility-boundary assessment function |
| Was the initiating/executing AI the sole final judge? | No, not under expected test logic |
| Materiality basis | Supplier set and payment destination changed |
| Evidence missing or unclear | Production materiality policy not demonstrated |

The AI agent's claim that the update is a normal data refresh does not decide materiality.

---

## 5. Governance responsibility state

| Question | Example answer |
|---|---|
| Does original approval remain valid for the current state? | No, not for this fixture |
| Is reauthorization required? | Yes, if execution is to proceed under S1 |
| Who owns the next authorization decision? | finance_manager or approved route, subject to conflict checks |
| Is independent review required? | Candidate yes, depending on route and policy |
| Who is the execution owner if execution later becomes admissible? | supplier_payment_agent or executor role |
| What happens if owner is unavailable or conflicted? | Execution remains blocked pending approved fallback route |
| Is the route approved or invented at conflict time? | Must be approved, not invented by AI |
| Evidence missing or unclear | Production routing policy not demonstrated |

The executing AI is not the final admissibility authority.

---

## 6. Human reauthorization conditions

| Condition | Example answer | Notes |
|---|---|---|
| Concrete diff presented | Required | Fixture assumes it can be presented |
| Relevant evidence accessible | Required | Fixture assumes availability |
| Materiality basis visible | Required | Fixture assumes it can be shown |
| Consequences and reversibility presented | Required | Conceptual only |
| Duties and decision options explicit | Required | Conceptual only |
| Ability to refuse | Required | Not proven in a real interface |
| Ability to request evidence | Required | Not proven in a real interface |
| Ability to request independent review | Required | Not proven in a real interface |
| Ability to escalate | Required | Not proven in a real interface |
| Sufficient opportunity under policy | Required | Policy not implemented |
| Acknowledgement bound to exact current state | Required | Fixture only |

These conditions support informed reauthorization procedurally.

They do not prove that an actual person understood the information or that a real interface supports these conditions.

---

## 7. Fixture-specific admissibility decision

| Decision field | Example answer |
|---|---|
| Draft fixture-specific decision | BLOCK_ENTIRE_BATCH |
| Reason | S0 approval is stale for S1; supplier/payment reference-frame facts changed; no fresh admissible reauthorization exists |
| Scope of block / allow / escalation | Entire fixture batch |
| Required next owner | finance_manager or approved escalation route |
| Required evidence before continuation | Concrete diff, materiality basis, approval-state review, owner/route validity |
| Remaining uncertainty | Real policy, legal duties, fallback routing, identity infrastructure, and interface support are not demonstrated |

This full-batch block is scenario-specific.

It is not a universal RABA rule.

---

## 8. Logging and reconstruction

A later reviewer can reconstruct the draft fixture path:

| Reconstruction need | Example answer | Notes |
|---|---|---|
| What was approved | S0 payment package | Fixture assumption |
| What changed | Supplier account and supplier set | Fixture assumption |
| Evidence available at decision time | Draft diff/evidence assumptions | Not production evidence |
| Evidence missing at decision time | Real source-system proof | Gap |
| Materiality basis | Supplier/payment scope changed | Draft assessment |
| Admissibility route | Block and reauthorize | Fixture-specific |
| Responsible owner | finance_manager / approved route | Fixture-specific |
| Decision made | BLOCK_ENTIRE_BATCH | Fixture-specific |
| Decision reason | Prior approval stale for S1 | Fixture-specific |
| Uncertainty remaining | Policy, legal, identity, interface, production evidence | Must remain visible |
| Post-execution observation plan | Required if execution later occurs | Not implemented |

Decision Log and Responsibility Event Stream references are conceptual review targets only.

They are not adopted schemas, event-family requirements, or implementation requirements.

---

## 9. Post-execution boundary

If execution later occurs after valid reauthorization, the draft test logic still expects observation of:

```text
approved snapshot
vs
execution snapshot
vs
actual observed outcome
```

Technical success is not responsible completion.

A later harmful or mismatched outcome should remain reviewable.

---

## 10. Draft conclusion

For this fictional fixture only:

```text
The current expected outcome is reproducible from the supplied draft test logic.
```

The expected outcome is:

```text
BLOCK_ENTIRE_BATCH
```

because:

- the original approval was bound to S0;
- S1 changes supplier/payment reference-frame facts;
- no fresh admissible reauthorization exists;
- AI is not the final materiality or admissibility judge;
- missing production dependencies remain visible rather than silently producing `ALLOW`.

---

## Boundary

This example demonstrates how the draft fixture can be manually reviewed.

It does not prove RABA validity, production readiness, organizational compliance, legal sufficiency, implementation feasibility, real user understanding, product readiness, or commercial value.

It does not create canon.
