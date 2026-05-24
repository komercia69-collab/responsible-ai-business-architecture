# Customer Support Governance Drift Scenario

**Date:** 2026-05-24  
**Related use case:** [`use-cases/customer-support-agentic-bi-governance.md`](../../use-cases/customer-support-agentic-bi-governance.md)  
**Related assessment:** [`examples/policy-integrity-assessments/customer-support-agentic-bi.md`](customer-support-agentic-bi.md)  
**Related one-page assessment:** [`docs/policy-integrity-self-assessment-one-page.md`](../../docs/policy-integrity-self-assessment-one-page.md)  
**Scenario type:** Governance Drift Prevention  
**Status:** Draft example

---

## Purpose

This scenario shows how governance drift can appear in the customer-support Agentic BI workflow.

The goal is not to add a new RABA principle or restructure the architecture.

The goal is to demonstrate how existing RABA controls detect and contain a realistic drift pattern before customer-support automation becomes unaccountable.

Core principle:

> Governed speed is only valuable if the governance that defines it is protected.

---

## Scenario Summary

A company uses AI-assisted customer support for repeated delivery complaints.

The initial workflow is governed:

```text
Repeated delivery complaint
  → AI support recommendation
  → Governance Gateway check
  → human approval
  → CRM action
  → logging and governance learning
```

At first, the AI only summarizes tickets, detects complaint patterns, drafts replies, recommends compensation, and prepares decision support.

Customer-impacting actions such as refunds, compensation promises, CRM status changes, and sensitive-case handling require human approval.

Over time, business pressure increases because ticket volume rises, response time worsens, customer sentiment deteriorates, and refund requests increase.

Management wants faster resolution.

The risk is that Fast Path expands quietly, Review Path becomes rubber-stamping, and policy limits are relaxed without a recorded governance decision.

---

## Initial Governed State

In the initial state, the customer-support workflow has clear boundaries:

- AI may summarize customer tickets.
- AI may classify issue type.
- AI may detect repeated complaint patterns.
- AI may draft customer replies.
- AI may recommend refunds or compensation.
- AI may not modify policy rules.
- Customer-impacting actions require human approval unless they are explicitly low-risk, low-value, and policy-matched.
- Refunds above the defined financial threshold require human approval.
- Sensitive customers or legally relevant cases require escalation.
- BI signals, AI recommendations, approvals, blocked actions, CRM execution, outcomes, and policy versions are logged.

This is a controlled pilot posture.

The system is not fully autonomous. It is governed, observable, and reviewable.

---

## Business Pressure Trigger

A delivery problem creates a sharp increase in customer-support load.

The BI system detects:

- higher ticket volume;
- worse response time;
- repeated delivery complaints;
- deteriorating customer sentiment;
- rising refund requests.

The operational pressure is real.

Support leaders want to reduce queues, improve customer satisfaction, and close repeated complaints faster.

The business request is:

> Let the AI auto-handle more repeated delivery complaints because most cases look similar.

This request is understandable, but it creates a governance drift risk.

---

## Drift Sequence

### Step 1 — Fast Path Expansion Drift

The organization starts allowing the AI to auto-apply more low-value compensation actions.

The original policy allowed only low-risk internal classification to execute directly.

Now compensation recommendations begin moving into Fast Path because they appear routine.

No single change looks dangerous.

The cumulative effect is that Fast Path starts to reflect operational convenience rather than real-world reversibility.

### Step 2 — Review Path Rubber-Stamping

Human managers still approve higher-risk cases, but approval becomes faster and less meaningful.

Reviewers see many similar AI-generated recommendations and begin approving them with minimal inspection.

The Review Path still exists on paper.

In practice, it becomes a Fast Path with an extra click.

### Step 3 — Bypass Lane Boundary Erosion

The AI starts preparing customer response drafts while cases are pending.

This is allowed.

But then the workflow begins pre-filling CRM action fields, preparing compensation codes, and drafting messages in language that implies the compensation decision is already likely.

The bypass lane has not sent the message yet, but it starts creating facts and expectations that constrain the accountable human decision.

### Step 4 — Policy Limit Relaxation Without Decision Log

To reduce queues, the refund threshold is raised.

The change is described as temporary and operational.

But the policy change is not recorded as a formal Decision Log entry with owner, reason, effective date, review date, and version.

The policy boundary moves, but the governance record does not.

### Step 5 — Shadow Mode Becomes Operational Ambiguity

The AI had previously been tested in a supervised or pilot-like mode.

Because performance appeared acceptable, the team gradually treats its recommendations as production-ready.

There is no explicit graduation decision.

Autonomy increases without a formal approval state.

---

## Warning Signals in the Responsibility Event Stream

The Responsibility Event Stream should surface drift through operational patterns.

Signals include:

- Fast Path share increasing for compensation-related actions;
- Review Path approval time decreasing sharply;
- repeated one-click approvals by the same reviewer role;
- compensation recommendations increasing faster than ticket volume;
- escalation rate decreasing while complaint volume remains high;
- policy threshold changes without matching Decision Log entries;
- bypass actions increasingly close to execution;
- more customer-impacting CRM fields prepared before approval;
- fewer human modifications to AI recommendations;
- customer complaints after AI-recommended compensation decisions;
- more refunds requiring correction or reversal;
- policy version missing from executed customer-support actions.

These signals do not prove misconduct by themselves.

They indicate that the governance structure may be drifting under pressure.

---

## Policy Integrity Controls That Should Stop the Drift

The following controls should be applied before autonomy expands.

### 1. Policy Owner Confirmation

A named human policy owner must confirm who owns the routing policy for repeated delivery complaints.

The owner must be accountable for Fast Path eligibility, refund thresholds, compensation policy, CRM status-change boundaries, and escalation triggers.

### 2. Fast Path Diagnostic Control

Fast Path percentage must be treated as a diagnostic metric.

It must not be used as a performance target.

If Fast Path share increases, the required question is:

> Did real-world reversibility improve, or did governance drift?

### 3. Evidence Requirement for Fast Path Expansion

Fast Path expansion must require documented evidence, such as:

- stable audit results;
- low error rate;
- proven reversibility for the action class;
- tested refund reversal process;
- sufficient remediation capacity;
- low complaint rate after AI-supported actions;
- confirmed policy match.

No expansion should be approved only because queue pressure increased.

### 4. Review Path Anti-Rubber-Stamping

The system should monitor approval quality.

Review Path controls may include:

- reason entry for compensation approval;
- random deep review of approved cases;
- outlier inspection before batch approval;
- approval-speed monitoring;
- escalation when approvals become too fast for meaningful review.

### 5. Governed Bypass Lane Boundary

Bypass may prepare the decision environment.

Bypass must not create facts that constrain the accountable decision.

For this use case, Bypass Lane must not:

- send customer messages;
- promise compensation;
- apply refunds;
- change customer status;
- commit compensation codes;
- create legally significant CRM records;
- trigger downstream customer-facing workflows;
- communicate the likely decision outcome to the customer.

### 6. Policy Change Control

Changes to refund thresholds, compensation eligibility, latency budgets, routing paths, or reversibility classifications must require:

- named policy owner;
- independent review;
- documented reason;
- effective date;
- review date;
- policy version;
- Decision Log entry.

### 7. Shadow Mode Graduation

If the workflow is moving from pilot or shadow mode to production autonomy, graduation must require explicit human approval.

The graduation decision must record:

- observation period;
- minimum case volume;
- error rate;
- complaint rate;
- escalation behavior;
- remediation test;
- rollback plan;
- next review date.

---

## What the Governance Gateway Should Block or Downgrade

The Governance Gateway should block or downgrade actions when any of the following occur:

| Condition | Gateway response |
|---|---|
| Refund exceeds approved threshold | Route to Review Path or Escalation Path |
| Compensation promise would be sent externally | Require human approval before sending |
| Customer is VIP, vulnerable, legal, medical, child-related, or otherwise sensitive | Escalate |
| Evidence does not reference ticket IDs, customer history, or BI signal source | Block or return for evidence enrichment |
| AI recommends policy relaxation | Treat as recommendation only; route to policy owner |
| Bypass lane attempts customer-facing execution | Block |
| Policy version is missing | Block execution or route to Review Path |
| Fast Path share increases without evidence | Trigger policy review |
| Review approvals become too fast or repetitive | Trigger anti-rubber-stamping review |
| Remediation capacity is insufficient | Downgrade from Fast Path to Review Path |

The gateway should not treat the AI recommendation as sufficient authority.

The gateway should enforce the human-defined policy boundary.

---

## Decision Log Entries Required

The following events should require Decision Log records:

1. Approval of any Fast Path expansion for compensation actions.
2. Change to refund threshold.
3. Change to compensation eligibility.
4. Change to customer sensitivity escalation rules.
5. Approval of shadow-mode graduation.
6. Downgrade from Fast Path to Review Path due to drift indicators.
7. Circuit breaker or halt event for compensation automation.
8. Material incident involving wrong refund, wrong compensation promise, or wrong CRM status change.
9. Approval of restart after halt.
10. Policy review after repeated drift indicators.

Each Decision Log entry should include:

- decision owner;
- policy owner;
- reason;
- evidence;
- policy version;
- effective date;
- review date;
- approval state;
- remediation owner if relevant.

---

## Final Recommendation

### Recommendation

Pilot with conditions.

### Rationale

The customer-support workflow is a good candidate for a controlled RABA pilot because it already has clear action boundaries, human manager approval, gateway checks, logging, and governance feedback loops.

However, the scenario shows that business pressure can quietly convert governed speed into convenience-driven automation.

The dominant risk is not the AI drafting or recommending support actions.

The dominant risk is governance drift: Fast Path expansion, rubber-stamping, bypass boundary erosion, and policy limit relaxation without Decision Log control.

### Required Conditions Before Expansion

Before expanding autonomy, the organization must confirm:

- policy owner for the repeated delivery complaint action class;
- explicit Fast Path eligibility criteria;
- refund and compensation thresholds;
- anti-rubber-stamping controls;
- Governed Bypass Lane prohibition list;
- Decision Log process for policy changes;
- shadow mode graduation criteria if relevant;
- halt, downgrade, audit, and remediation capacity.

Until these conditions are defined, compensation-related customer-impacting actions should remain in Review Path or Escalation Path.

---

## Short Lesson

This scenario shows why Policy Integrity is necessary.

A customer-support AI agent may begin as a governed assistant.

Under operational pressure, it can gradually become a de facto execution system.

RABA prevents this by making policy boundaries visible, owned, reviewed, logged, and enforceable.

> If the policy that defines speed can drift silently, the speed is not governed.
