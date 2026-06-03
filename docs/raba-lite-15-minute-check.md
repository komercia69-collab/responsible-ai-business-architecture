# RABA Lite: 15-Minute AI Workflow Responsibility Check

**Status:** Practical orientation tool  
**Canonical status:** Non-canonical  
**Purpose:** Help teams quickly inspect one AI-assisted workflow for responsibility, authority, approval, logging and escalation gaps.

> This checklist does not create new RABA canon.  
> It is a lightweight entry point for applying existing RABA ideas to one real or planned AI workflow.  
> It does not replace legal, compliance, privacy, security, procurement or sector-specific review.

---

## 1. When to use this check

Use this checklist when an AI system, AI agent, automation, workflow assistant or multi-agent process may influence a real business action.

Examples:

- sending or drafting customer communication;
- approving, rejecting or escalating a request;
- offering a refund or discount;
- changing a CRM, ERP, ticketing or case-management record;
- triggering a payment, shipment, account action or access change;
- recommending a HR, legal, finance, compliance or operational decision;
- using tools through MCP or another agentic execution layer.

The goal is not to slow everything down.

The goal is to preserve governed useful speed:

```text
AI can help work move faster,
but responsibility, authority, evidence, escalation and human accountability remain visible and manageable.
```

---

## 2. The 15-minute check

Choose one specific workflow and answer the questions below.

### Step 1 — Describe the AI-supported action

| Question | Answer |
|---|---|
| What is the AI proposing, recommending or executing? |  |
| Is this only information, a recommendation, or an operational action? |  |
| What real-world consequence could this create? |  |
| Which system, customer, employee, partner, record or process is affected? |  |

Quick classification:

```text
Information only
Recommendation
Draft action
Action awaiting approval
Autonomous action
Escalated action
Blocked action
```

---

### Step 2 — Identify the action boundary

| Question | Answer |
|---|---|
| Where does AI assistance become consequential action? |  |
| What must not happen without approval? |  |
| What is allowed automatically? |  |
| What must always be blocked or escalated? |  |

Boundary statement:

```text
The action boundary is crossed when: ________________________________
```

---

### Step 3 — Assign responsibility

| Question | Answer |
|---|---|
| Who owns the workflow? |  |
| Who has authority to approve the action? |  |
| Who is accountable if the action causes harm or dispute? |  |
| Who has corrective duty if something goes wrong? |  |
| Is the responsible person or role named clearly enough? |  |

Minimum requirement:

```text
Every consequential AI-supported action should be tied to a named role or accountable owner.
```

---

### Step 4 — Determine approval state

Select the current state.

Use the uppercase value when writing a schema-compatible Decision Log entry.

| Approval state value | Practical meaning | Selected? |
|---|---|---|
| `DRAFT` | AI or human is preparing the action |  |
| `RECOMMEND` | AI recommends, but cannot execute |  |
| `REAPPROVAL_REQUIRED` | Fresh human confirmation is required before execution |  |
| `AUTHORIZED` | The action has valid approval |  |
| `EXECUTED` | The action has been carried out |  |
| `ESCALATE` | Higher authority or specialist review is required |  |
| `BLOCKED` | The action must not proceed |  |
| `REJECTED` | The action was reviewed and rejected |  |
| `FAILED` | The action failed during execution or verification |  |
| `REVOKED` | Prior authorization is no longer valid |  |
| `EXPIRED` | Prior authorization or evidence is no longer valid due to time or context |  |

State reason:

```text
The action is currently in this state because: ______________________
```

---

### Step 5 — Check evidence and admissibility

| Question | Answer |
|---|---|
| What evidence supports the AI output or proposed action? |  |
| Is the evidence source-side, receiver-side, model-generated or inferred? |  |
| Is the evidence fresh enough for this decision? |  |
| Is the evidence admissible for this business context? |  |
| Who can validate the evidence? |  |
| What response is allowed before validation? |  |

Evidence boundary:

```text
The AI output may support review, but it does not by itself prove that the action is authorized.
```

---

### Step 6 — Check confirmation freshness

| Question | Answer |
|---|---|
| Was this action already approved? |  |
| What exactly was approved? |  |
| Has the scope changed since approval? |  |
| Has the evidence changed since approval? |  |
| Has the responsible owner changed since approval? |  |
| Is reapproval required? |  |

Red flag:

```text
Prior confirmation must not be reused for a changed action scope.
```

---

### Step 7 — Check reversibility

| Question | Answer |
|---|---|
| Can the action be rolled back? |  |
| How quickly can it be reversed? |  |
| What harm remains even after rollback? |  |
| Who can authorize rollback or correction? |  |
| What must be logged if rollback is used? |  |

Reversibility profile:

```text
Reversible
Partially reversible
Hard to reverse
Irreversible
Unknown
```

---

### Step 8 — Decide routing

Choose the correct route:

| Route | Use when | Possible schema-compatible approval state |
|---|---|---|
| Fast Path | Low consequence, clear policy, clear owner, reversible, no boundary issue | `AUTHORIZED` or `EXECUTED`, depending on whether execution already occurred |
| Require Approval | Consequential action needs named human confirmation | `REAPPROVAL_REQUIRED`, `RECOMMEND`, or `ESCALATE`, depending on policy |
| Escalate | Higher authority, specialist review, unclear ownership or unclear evidence | `ESCALATE` |
| Block | Action is forbidden, unsupported, unsafe, unauthorized or outside policy | `BLOCKED` |
| Reapproval Required | Prior approval became stale due to scope, evidence or authority change | `REAPPROVAL_REQUIRED` |

Routing decision:

```text
This workflow should route to: ______________________________________
```

Schema-compatible approval state:

```text
Use approval_state: _________________________________________________
```

Reason:

```text
Because: ____________________________________________________________
```

---

### Step 9 — Define Decision Log minimum record

For a schema-compatible Decision Log entry, include at least the required fields from `schemas/decision-log-entry.schema.json`:

| Required schema field | Value |
|---|---|
| `decision_log_id` |  |
| `timestamp` |  |
| `workflow_id` |  |
| `action_id` |  |
| `agent_id` |  |
| `action_type` |  |
| `action_boundary` |  |
| `approval_state` |  |
| `outcome` |  |

Additional recommended responsibility context:

| Additional field | Value |
|---|---|
| Responsible owner / role |  |
| Evidence used |  |
| Confirmation timestamp |  |
| Scope confirmed |  |
| Routing decision |  |
| Escalation reason, if any |  |
| Reversibility profile |  |
| Human responsibility that remains |  |
| Policy reference / threshold rule |  |
| Technical trace or external reference |  |

Minimum principle:

```text
A technical log can show what happened.
A Decision Log should show who was responsible for the business decision.
```

---

### Step 10 — Final RABA Lite result

Summarize the result in five lines:

```text
AI-supported action:
Action boundary:
Approval state:
Responsible owner:
Routing decision:
```

Then add:

```text
What must be logged:
What remains human responsibility:
What must happen next:
```

---

## 3. Quick red flags

Escalate or block if any of these are true:

- no responsible owner is named;
- approval exists but the action scope changed;
- AI can execute before human confirmation where consequences are material;
- the evidence is stale, inferred or not admissible;
- rollback is impossible or unclear;
- the action crosses legal, financial, medical, HR, safety or rights-impacting boundaries;
- the AI output is treated as proof instead of review input;
- the workflow depends on informal human trust rather than explicit authority;
- multiple agents produce partial findings but no one owns the final decision;
- the technical trace exists but business responsibility is unclear.

---

## 4. Example: refund workflow

```text
AI-supported action:
Offer a €750 refund to a customer.

Action boundary:
The boundary is crossed when the refund offer is sent or the refund is initiated.

Approval state:
REAPPROVAL_REQUIRED.

Responsible owner:
Customer Support Manager.

Routing decision:
Require Approval.

Reason:
Refund amount exceeds autonomous threshold.

What must be logged:
decision_log_id, timestamp, workflow_id, action_id, agent_id, action_type, action_boundary, approval_state, outcome, proposed refund, customer case, evidence, threshold rule, approving manager, confirmation time, reversibility profile.

What remains human responsibility:
Final refund approval, scope validation, customer impact, corrective duty.

What must happen next:
Manager reviews the case and either approves, rejects, escalates or changes the proposed refund.
```

---

## 5. How to interpret the result

This check does not certify the workflow as safe or compliant.

It helps identify whether the workflow has visible responsibility structure.

A workflow is more RABA-ready when:

- the action boundary is clear;
- the approval state is explicit and schema-compatible;
- a responsible owner is named;
- evidence is reviewable and admissible;
- confirmation is fresh;
- reversibility is understood;
- routing is explainable;
- the Decision Log captures the required schema fields and business accountability context;
- human responsibility remains visible.

A workflow is not RABA-ready when AI can create consequences while responsibility is implicit, stale, fragmented or hidden inside technical logs.

---

## 6. Next step after the 15-minute check

If the workflow passes the quick check, the next step is to map it into a more detailed RABA review:

- Action Boundary definition;
- Approval State model;
- Governance Gateway routing rules;
- Decision Log schema;
- Responsibility Event Stream events;
- escalation and rollback procedure;
- Responsibility Management Interface requirements.

If the workflow fails the quick check, do not start with more automation.

Start by clarifying ownership, authority, admissible evidence, approval requirements and escalation paths.
