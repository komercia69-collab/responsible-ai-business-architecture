# AI Permission Matrix

## Responsible AI Business Architecture

> AI may be probabilistic. Responsibility must not be.

---

## Purpose

This document defines a practical permission model for AI systems inside business processes.

The goal is to make clear what AI may do autonomously, what requires human approval, and what must remain strictly human-controlled.

---

## Permission Levels

| Level | Name | Description |
|---|---|---|
| L0 | No AI Access | AI has no permission to access or act. |
| L1 | Read Only | AI may read data but may not modify anything. |
| L2 | Draft / Recommend | AI may prepare recommendations, drafts, summaries, or options. |
| L3 | Execute Low-Risk Actions | AI may execute predefined low-risk actions within limits. |
| L4 | Execute With Human Approval | AI may prepare an action, but a human must approve before execution. |
| L5 | Prohibited Autonomous Action | AI must never execute this action independently. |

---

## Permission Matrix

| Business Area | AI Allowed Action | Permission Level | Human Approval Required | Notes |
|---|---|---:|---|---|
| Customer Support | Answer FAQ questions | L3 | No | Only within approved knowledge base. |
| Customer Support | Handle angry customer escalation | L4 | Yes | Human must review tone and resolution. |
| Sales | Draft offer | L2 | Yes | AI may prepare, human approves. |
| Sales | Apply small discount within rule | L3 | No | Example: max 5 percent. |
| Sales | Apply exceptional discount | L4 | Yes | Requires business owner or sales lead. |
| Finance | Categorize expenses | L3 | No | Must be auditable. |
| Finance | Initiate payment | L4 | Yes | Human approval required. |
| Finance | Transfer large funds | L5 | Always | Prohibited without human control. |
| Legal | Summarize contract | L2 | Yes | Not legal advice. |
| Legal | Modify contract terms | L4 | Yes | Human/legal review required. |
| Legal | Sign contract | L5 | Always | AI must never sign. |
| HR | Draft job description | L2 | Yes | Human approval before publishing. |
| HR | Screen candidates | L4 | Yes | Bias and fairness review required. |
| HR | Reject candidate automatically | L5 | Always | High-risk decision. |
| Governance | Suggest policy improvement | L2 | Yes | Advisory only. |
| Governance | Change AI permissions | L5 | Always | AI must not grant itself power. |
| Security | Detect suspicious activity | L3 | No | Alert generation allowed. |
| Security | Disable user access | L4 | Yes | Except pre-approved emergency playbooks. |
| Security | Delete logs | L5 | Always | Never allowed. |

---

## Default Rule

If an action affects money, legal rights, employment, personal data, safety, or reputation, it must not be fully autonomous by default.

---

## Escalation Triggers

AI must escalate to a human when:

- confidence is low;
- customer emotion is negative or unstable;
- financial exposure exceeds the defined limit;
- legal or compliance language appears;
- personal data is involved;
- the action would change rights, obligations, or access;
- the situation does not match an approved playbook;
- an audit trail cannot be created.

---

## Owner Review Questions

The business owner should regularly ask:

1. Which AI permissions changed this week?
2. Which actions moved from recommendation to autonomous execution?
3. Which processes have no human approval gate?
4. Which high-risk actions were attempted?
5. Which AI actions were overridden by humans?
6. Which permissions should be reduced?

---

## Minimum Governance Requirement

Every AI-enabled process must have:

- assigned human owner;
- permission level;
- approval rule;
- escalation rule;
- audit log;
- emergency stop mechanism.

---

## Strategic Principle

AI may receive operational permissions.

AI must never receive final accountability.
