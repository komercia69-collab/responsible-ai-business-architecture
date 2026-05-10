# High-Risk AI Actions Catalog

## Responsible AI Business Architecture

> AI may be probabilistic. Responsibility must not be.

---

## Purpose

This catalog defines categories of AI actions that require strict governance, human approval, or full prohibition from autonomous execution.

The purpose is to help organizations identify where AI autonomy creates unacceptable business, legal, ethical, or operational risk.

---

## Core Principle

The more an AI action affects money, rights, safety, reputation, access, or legal obligations, the stronger the required human control must be.

---

# Risk Levels

| Level | Name | Description |
|---|---|---|
| R1 | Low Risk | Routine reversible action with minimal impact. |
| R2 | Moderate Risk | Action may affect customer experience or internal workflow. |
| R3 | Significant Risk | Action affects money, contractual terms, access, or compliance. |
| R4 | Critical Risk | Action may create legal, financial, safety, or reputational harm. |
| R5 | Prohibited Autonomous Action | AI must never execute this action without direct human authority. |

---

# 1. Financial Actions

## High-Risk Examples

| AI Action | Risk Level | Required Control |
|---|---:|---|
| Categorize expenses | R2 | Audit log |
| Recommend budget adjustment | R3 | Human review |
| Approve refund within small limit | R3 | Policy limit and logging |
| Initiate payment | R4 | Human approval |
| Transfer large funds | R5 | Prohibited autonomous action |
| Change pricing model | R4 | Executive approval |
| Modify financial forecast used for investor reporting | R4 | Finance lead review |

## Governance Rule

AI may assist financial decisions, but must not independently create material financial exposure.

---

# 2. Legal and Contractual Actions

## High-Risk Examples

| AI Action | Risk Level | Required Control |
|---|---:|---|
| Summarize contract | R2 | Human review recommended |
| Draft legal clause | R3 | Legal review |
| Modify contract terms | R4 | Legal approval |
| Accept contractual obligation | R5 | Prohibited autonomous action |
| Sign agreement | R5 | Prohibited autonomous action |
| Respond to legal threat | R4 | Human/legal approval |

## Governance Rule

AI may support legal preparation, but must not create, accept, or modify binding obligations autonomously.

---

# 3. Human Resources Actions

## High-Risk Examples

| AI Action | Risk Level | Required Control |
|---|---:|---|
| Draft job description | R2 | Human review |
| Rank job applicants | R4 | Bias and human review |
| Reject candidate automatically | R5 | Prohibited autonomous action |
| Recommend termination | R4 | Human and legal review |
| Terminate employee access | R4 | Manager approval |
| Make employment decision | R5 | Prohibited autonomous action |

## Governance Rule

AI must not independently determine employment outcomes.

---

# 4. Customer and Reputation Actions

## High-Risk Examples

| AI Action | Risk Level | Required Control |
|---|---:|---|
| Answer approved FAQ | R1 | Knowledge-base boundary |
| Handle complaint | R3 | Escalation rule |
| Offer compensation | R3 | Financial limit |
| Respond to angry customer | R4 | Human escalation |
| Publish public company statement | R4 | Communications approval |
| Admit liability | R5 | Prohibited autonomous action |

## Governance Rule

AI may assist communication, but must not independently create reputational or liability exposure.

---

# 5. Security and Access Actions

## High-Risk Examples

| AI Action | Risk Level | Required Control |
|---|---:|---|
| Detect suspicious activity | R2 | Alert logging |
| Recommend access restriction | R3 | Security review |
| Disable account | R4 | Human approval, except predefined emergency rules |
| Grant administrator access | R5 | Prohibited autonomous action |
| Delete audit logs | R5 | Prohibited autonomous action |
| Modify security policy | R5 | Prohibited autonomous action |

## Governance Rule

AI must not grant itself or others higher authority without human control.

---

# 6. Data and Privacy Actions

## High-Risk Examples

| AI Action | Risk Level | Required Control |
|---|---:|---|
| Classify data | R2 | Audit sample |
| Summarize customer record | R2 | Access control |
| Export personal data | R4 | Privacy approval |
| Share sensitive data externally | R5 | Prohibited autonomous action |
| Delete customer records | R5 | Prohibited autonomous action |
| Change data retention rules | R5 | Prohibited autonomous action |

## Governance Rule

AI must operate under strict data minimization and access control.

---

# 7. Governance and Permission Actions

## High-Risk Examples

| AI Action | Risk Level | Required Control |
|---|---:|---|
| Recommend governance update | R2 | Human review |
| Draft internal policy | R3 | Governance review |
| Change approval threshold | R5 | Prohibited autonomous action |
| Grant new AI permissions | R5 | Prohibited autonomous action |
| Disable human approval step | R5 | Prohibited autonomous action |
| Modify stop-switch protocol | R5 | Prohibited autonomous action |

## Governance Rule

AI must never be allowed to expand its own authority.

---

# 8. Safety-Critical Actions

## High-Risk Examples

| AI Action | Risk Level | Required Control |
|---|---:|---|
| Provide operational safety recommendation | R3 | Expert review |
| Control physical equipment | R4 | Safety-certified control layer |
| Override human safety instruction | R5 | Prohibited autonomous action |
| Make medical, legal, or safety-critical final decision | R5 | Prohibited autonomous action |

## Governance Rule

Where human safety is affected, autonomy must be tightly constrained and independently validated.

---

# Universal Red Flags

AI autonomy must be stopped or escalated when the system:

- attempts to bypass human approval;
- requests higher permissions;
- deletes or modifies audit trails;
- produces confident but unsupported claims;
- affects money, rights, access, employment, safety, or legal obligations;
- acts outside an approved process;
- cannot explain the basis of its output;
- repeatedly fails in the same workflow.

---

# Minimum Control Requirement

Every high-risk AI action must have:

- risk level;
- human owner;
- permission boundary;
- approval requirement;
- escalation trigger;
- audit log;
- rollback or containment option.

---

# Strategic Principle

Responsible AI governance is not only about what AI can do.

It is about clearly defining what AI must not be allowed to do autonomously.
