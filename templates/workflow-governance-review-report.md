# Workflow Governance Review Report

> Template for reviewing one AI-assisted workflow before automation becomes operational risk.

## How to Use This Template

Use this report after reviewing one real or planned AI-assisted workflow.

The goal is to make responsibility, AI action boundaries, human approval, logging and escalation visible before AI autonomy increases.

This template is designed for practical client-facing use, but it is not legal advice, compliance certification or security certification.

---

## 1. Review Summary

| Field | Description |
|---|---|
| Client / organization |  |
| Workflow name |  |
| Review date |  |
| Reviewer |  |
| Version |  |
| Confidentiality level | Public / internal / confidential / anonymized |

## Executive Summary

```text
Short summary of the workflow, the planned AI role, the main governance concern and the recommended next step.
```

---

## 2. Workflow Overview

## Workflow Description

```text
Describe the workflow in plain language.

What happens?
Who is involved?
What systems or tools are used?
What business outcome is expected?
```

## Main Human Roles

| Role | Responsibility | Decision authority |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |

## Systems and Tools

| System / tool | Purpose | AI access? |
|---|---|---|
|  |  | Yes / No / Planned |
|  |  | Yes / No / Planned |

---

## 3. AI Role in the Workflow

## Current or Planned AI Use

| AI activity | Current / planned | Description |
|---|---|---|
| Observe |  |  |
| Analyze |  |  |
| Recommend |  |  |
| Draft |  |  |
| Classify |  |  |
| Decide |  |  |
| Trigger |  |  |
| Execute |  |  |
| Update system records |  |  |

## AI Role Summary

```text
Describe what AI is expected to do and what AI must not do without human approval.
```

---

## 4. AI Action Boundary Map

The AI Action Boundary Map identifies where AI output stays as information and where it begins to affect operational action.

| Workflow step | AI output | Operational effect | Boundary level | Human control needed? |
|---|---|---|---|---|
|  |  |  | Assist / Recommend / Draft / Trigger / Execute | Yes / No |
|  |  |  | Assist / Recommend / Draft / Trigger / Execute | Yes / No |
|  |  |  | Assist / Recommend / Draft / Trigger / Execute | Yes / No |

## Key Boundary Question

```text
Where does AI output stop being advice and start becoming operational action?
```

## Boundary Findings

```text
Summarize the most important boundaries discovered during the review.
```

---

## 5. Human Approval Points

Human approval points are places where AI-supported output should not proceed without human decision or confirmation.

| Approval point | Why approval is needed | Responsible human role | Required evidence |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |

## Meaningful Approval Criteria

Approval should be meaningful, not symbolic.

```text
Describe what the human must be able to see, understand and decide before approving.
```

---

## 6. Escalation Points

Escalation points define when the workflow must move from normal AI-assisted operation to human attention or higher-level review.

| Escalation trigger | Why it matters | Escalation target | Expected response |
|---|---|---|---|
| Low confidence |  |  |  |
| Conflict with policy |  |  |  |
| High-risk customer / case |  |  |  |
| Unclear accountability |  |  |  |
| Tool/action failure |  |  |  |

## Escalation Summary

```text
Describe the most important escalation conditions for this workflow.
```

---

## 7. Logging and Evidence Requirements

Logging helps make AI-supported workflow decisions visible, reviewable and correctable.

| Event to log | Why it should be logged | Minimum evidence | Owner |
|---|---|---|---|
| AI recommendation |  |  |  |
| Human approval |  |  |  |
| AI-triggered action |  |  |  |
| Escalation |  |  |  |
| Override / correction |  |  |  |

## Decision Log Requirements

```text
Describe what must be recorded so that future reviewers can understand what happened and why.
```

---

## 8. Governance Gateway Map

The Governance Gateway defines what must happen before AI output becomes action.

| Gateway condition | Allow / block / escalate | Required human role | Notes |
|---|---|---|---|
| AI confidence below threshold |  |  |  |
| Sensitive customer / case |  |  |  |
| External communication |  |  |  |
| System update |  |  |  |
| Financial / legal / compliance impact |  |  |  |

## Gateway Summary

```text
Summarize the proposed governance gateway for this workflow.
```

---

## 9. Main Governance Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Responsibility blur | Low / Medium / High | Low / Medium / High |  |
| Unapproved action | Low / Medium / High | Low / Medium / High |  |
| Missing log | Low / Medium / High | Low / Medium / High |  |
| Poor escalation | Low / Medium / High | Low / Medium / High |  |
| Human rubber-stamping | Low / Medium / High | Low / Medium / High |  |
| Incorrect system update | Low / Medium / High | Low / Medium / High |  |

## Risk Summary

```text
Summarize the top 3 risks and the most practical mitigation for each.
```

---

## 10. Recommended Next Step

Choose one recommended next step:

- no AI deployment yet;
- improve workflow clarity first;
- run a limited manual pilot;
- add approval gate before automation;
- improve logging before increasing autonomy;
- define escalation rules;
- proceed with a controlled pilot;
- conduct deeper security / legal / compliance review.

## Recommendation

```text
State the recommended next step and why.
```

---

## 11. Open Questions

| Question | Owner | Needed before next step? |
|---|---|---|
|  |  | Yes / No |
|  |  | Yes / No |
|  |  | Yes / No |

---

## 12. Review Limits

This review is limited by:

- information provided by the client;
- simplified or anonymized workflow descriptions;
- lack of production logs, if not provided;
- no legal, security or compliance certification;
- no guarantee that all AI risks are identified.

## Disclaimer

This report is a workflow governance review. It is not legal advice, security certification, compliance certification or a guarantee of safe AI operation.

---

## Closing Principle

> Start with one workflow.
>
> Map the AI action boundary.
>
> Define approval, logging and escalation.
>
> Preserve human responsibility before autonomy increases.
