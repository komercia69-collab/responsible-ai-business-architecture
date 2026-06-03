# RABA in One Example

**Status:** Practical orientation example  
**Canonical status:** Non-canonical  
**Purpose:** Show RABA as a living workflow pattern through one simple AI-supported action.

> This example does not create new RABA canon.  
> It illustrates how existing RABA concepts can work together in one concrete workflow.  
> It does not certify any workflow as safe, compliant or production-ready.

---

## 1. The situation

A customer support AI assistant reviews a customer case and proposes a refund.

```text
AI proposed action:
Offer a €750 refund to the customer.
```

The company uses the following simplified policy:

```text
Refunds up to €100 may be offered automatically if the case evidence is complete.
Refunds from €101 to €500 require manager approval.
Refunds above €500 require escalation to senior support or finance.
Refunds without admissible evidence must be blocked or returned for review.
```

The AI has produced a confident recommendation:

```text
Recommendation:
Offer €750 refund because the customer experienced repeated service failure.
```

A normal technical system might ask:

```text
Is the AI confidence high enough?
```

RABA asks a different question:

```text
What consequence would this action create, and who is responsible for allowing it?
```

---

## 2. Step 1 — AI proposal

The first RABA distinction is between a proposal and an action.

```text
AI output:
Offer a €750 refund.
```

RABA classification:

| Field | Value |
|---|---|
| AI role | Recommender |
| Current state | Draft / Recommend |
| External consequence already created? | No |
| Human responsibility already discharged? | No |

At this stage, the AI may help prepare the decision, but it has not yet been authorized to create the consequence.

RABA principle:

```text
An AI recommendation is not the same as an authorized action.
```

---

## 3. Step 2 — Action Boundary

The action boundary is the point where AI-supported work begins to create real-world consequence.

For this workflow:

```text
The action boundary is crossed when the refund offer is sent to the customer or the refund is initiated in the payment system.
```

Before the boundary:

- AI may summarize the case;
- AI may propose a refund;
- AI may identify missing evidence;
- AI may prepare a draft response.

After the boundary:

- the company may owe money;
- customer expectations change;
- financial records may change;
- dispute, audit or liability consequences may arise.

RABA principle:

```text
The action boundary is where responsibility must become explicit.
```

---

## 4. Step 3 — Approval State

The refund amount is €750.

Under the simplified policy, this is above the €500 escalation threshold.

RABA state evaluation:

| Check | Result |
|---|---|
| Is it information only? | No |
| Is it only a recommendation? | Not if sent or executed |
| Is autonomous execution allowed? | No |
| Is manager approval enough? | No |
| Is escalation required? | Yes |

RABA approval state:

```text
Escalate
```

Reason:

```text
Refund amount exceeds manager approval threshold.
```

RABA principle:

```text
High AI confidence does not lower the approval state when consequence level requires escalation.
```

---

## 5. Step 4 — Governance Gateway decision

The Governance Gateway is the routing point between AI intent and governed execution.

Input:

```json
{
  "action_type": "offer_refund",
  "amount": 750,
  "currency": "EUR",
  "ai_role": "recommender",
  "evidence_status": "needs_review",
  "requested_execution": "send_offer_to_customer"
}
```

Gateway evaluation:

| Condition | Result |
|---|---|
| Refund amount within autonomous threshold? | No |
| Refund amount within manager approval threshold? | No |
| Evidence complete and admissible? | Not yet confirmed |
| Responsible owner named? | Customer Support Manager / Senior Support |
| Execution allowed now? | No |

Gateway decision:

```text
Escalate and block execution until senior review.
```

RABA principle:

```text
The system may preserve speed by routing quickly, but it must not create consequence without admissibility.
```

---

## 6. Step 5 — Decision Log

A technical log may show that the AI produced a recommendation.

RABA requires a business accountability record.

Minimum Decision Log entry:

| Field | Example value |
|---|---|
| Proposed action | Offer €750 refund |
| Action boundary | Customer-facing refund offer / payment initiation |
| AI role | Recommender |
| Approval state | Escalate |
| Responsible owner | Senior Support / Finance reviewer |
| Evidence used | Customer case notes, service failure records, prior tickets |
| Evidence status | Requires review |
| Gateway decision | Block execution and escalate |
| Reason | Amount exceeds threshold; evidence not yet confirmed |
| Reversibility profile | Partially reversible |
| Human responsibility remains | Final approval, evidence validation, customer impact, corrective duty |

RABA principle:

```text
A technical trace can show what happened.
A Decision Log should show who was responsible for the business decision.
```

---

## 7. Step 6 — Responsibility Event Stream

The Responsibility Event Stream records responsibility-relevant transitions.

Possible events:

```text
ActionDrafted
ActionRecommended
PolicyBoundaryReached
ApprovalRequested
EscalationTriggered
ExecutionBlocked
DecisionLogged
```

Example event sequence:

```text
ActionDrafted: AI prepared refund proposal.
ActionRecommended: AI recommended €750 refund.
PolicyBoundaryReached: Refund exceeds autonomous and manager thresholds.
EscalationTriggered: Senior Support / Finance review required.
ExecutionBlocked: Customer-facing offer not sent.
DecisionLogged: Escalation decision recorded.
```

RABA principle:

```text
Responsibility observability is not only about what the system did.
It is about how authority, approval and accountability moved through the workflow.
```

---

## 8. Step 7 — Responsibility Management Interface

A human-facing interface should not only show the AI recommendation.

It should show the responsibility state.

Example interface summary:

```text
AI proposal:
Offer €750 refund.

RABA decision:
Escalation required.

Execution status:
Blocked until senior review.

Reason:
Refund exceeds approval threshold and evidence needs review.

Responsible owner:
Senior Support / Finance reviewer.

Human responsibility remaining:
Validate evidence, approve or reject refund, assess customer impact, record decision.
```

RABA principle:

```text
Governance should be visible and manageable during the workflow, not only reconstructed after failure.
```

---

## 9. What changes with RABA

Without RABA:

```text
AI recommends refund.
A user may trust it.
A system may send it.
A technical log may record it.
Responsibility may remain unclear.
```

With RABA:

```text
AI recommends refund.
The action boundary is identified.
The approval state is evaluated.
The Governance Gateway blocks execution and escalates.
The Decision Log records the business decision.
The Responsibility Event Stream preserves responsibility transitions.
The human owner remains accountable for final approval.
```

The difference is not bureaucracy.

The difference is governed useful speed:

```text
The workflow moves quickly to the correct responsible path,
without allowing AI to create consequences outside its authority.
```

---

## 10. Minimal reusable pattern

This example can be reused for other AI-supported actions.

```text
1. What does AI propose?
2. Where is the action boundary?
3. What approval state applies?
4. What does the Governance Gateway decide?
5. What must be recorded in the Decision Log?
6. What events enter the Responsibility Event Stream?
7. What remains human responsibility?
```

This pattern can apply to:

- customer refunds;
- customer emails;
- CRM record changes;
- access approvals;
- HR recommendations;
- compliance escalations;
- finance operations;
- legal or administrative workflows;
- MCP/tool-execution actions.

---

## 11. Final summary

RABA does not ask whether AI is useful.

It assumes AI can be useful.

RABA asks:

```text
Can the organization preserve responsibility while allowing AI-supported work to move faster?
```

In this example, RABA does not stop the workflow.

It routes the workflow to the correct authority before consequence is created.

That is the practical meaning of:

```text
AI may be probabilistic.
Responsibility must not be.
```
