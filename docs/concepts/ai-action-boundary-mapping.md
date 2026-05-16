# AI Action Boundary Mapping

## Concept

**AI Action Boundary Mapping** is a governance method for defining what an AI system may analyze, recommend, decide, trigger or execute inside a real workflow.

Before assigning AI to an operational process, organizations should map the boundary between:

- analysis;
- recommendation;
- decision support;
- human decision;
- automated execution;
- accountability.

The goal is not to block AI adoption.

The goal is to make AI participation governable before AI output becomes operational action.

---

## Why This Matters

Many organizations introduce AI into workflows by asking:

> What can AI automate?

A more governable question is:

> Where exactly is AI allowed to act, and where must human responsibility remain explicit?

AI systems may move very quickly from helpful assistance into operational participation.

A chatbot may become a customer support agent.

A summarizer may become a decision preparation layer.

A recommendation engine may become a workflow trigger.

An AI assistant may become a delegated operational identity.

Without action boundary mapping, organizations may lose clarity about where responsibility, approval and intervention should exist.

---

## From Service Boundaries to Action Boundaries

In software architecture, service boundaries help define where one service ends and another begins.

In AI-native operational architecture, action boundaries help define where AI assistance ends and operational responsibility begins.

| Software Architecture Question | AI Governance Question |
|---|---|
| What is the business capability? | What workflow or human purpose is AI supporting? |
| Where is the service boundary? | Where is the AI action boundary? |
| Who owns the data? | Who authorizes AI access to the data? |
| Which API may be called? | Which tool, connector or workflow may AI trigger? |
| How does the service communicate? | How does AI communicate uncertainty, recommendation and escalation? |
| What happens on failure? | What happens when AI is wrong, uncertain or misaligned? |
| How is the system observed? | How are AI outputs, actions, approvals and consequences logged? |
| Who owns the service? | Who remains accountable for AI-enabled action? |

---

## Action Boundary Levels

AI participation can be mapped across levels of operational power:

| Level | AI Role | Governance Requirement |
|---|---|---|
| 0 | No AI involvement | No AI-specific governance required |
| 1 | AI observes or summarizes | Source clarity and privacy boundaries |
| 2 | AI analyzes and explains | Review of assumptions and limitations |
| 3 | AI recommends options | Human decision remains explicit |
| 4 | AI drafts operational output | Human approval before external impact |
| 5 | AI triggers low-risk actions | Logging, limits and reversibility |
| 6 | AI triggers high-risk actions | Explicit human approval and escalation |
| 7 | AI operates autonomously in a bounded domain | Runtime governance, monitoring and corrective controls |

This mapping helps distinguish productivity assistance from operational delegation.

---

## Core Mapping Questions

For each workflow, organizations should ask:

1. What business capability or human purpose is being supported?
2. What task or decision is AI involved in?
3. Does AI only observe, analyze, recommend, draft or execute?
4. Which data sources, tools and systems does AI need?
5. Which actions are low-risk, medium-risk or high-risk?
6. Which actions require human approval?
7. Which actions must never be delegated to AI?
8. How are AI outputs reviewed before affecting people, records or systems?
9. How are AI actions logged and monitored?
10. Who remains accountable for the result?

---

## Relationship to AI Governance Gateway

AI Action Boundary Mapping defines the boundaries.

The AI Governance Gateway enforces them.

```text
AI Action Boundary Mapping
  define allowed roles • risk levels • approval points • accountability
        ↓
AI Governance Gateway
  enforce access • limits • logging • escalation • human approval
        ↓
Operational AI Agents
  act within governed boundaries
```

Without mapping, a gateway has no clear governance logic to enforce.

Without a gateway, mapped boundaries may remain only policy language.

Both are needed for operational governance.

---

## Relationship to Human-AI Operational Coordination

AI Action Boundary Mapping helps preserve coordination between humans and AI systems by making five distinctions explicit:

1. **Understanding vs. acting** — AI may understand a situation without being allowed to act.
2. **Drafting vs. committing** — AI may prepare output without sending or executing it.
3. **Recommendation vs. decision** — AI may suggest options while humans remain accountable.
4. **Access vs. authority** — AI may access data without having permission to modify outcomes.
5. **Automation vs. responsibility** — automation does not remove human or organizational accountability.

---

## Example

A company wants to use AI in customer support.

| Workflow Step | AI Boundary | Governance Control |
|---|---|---|
| Read incoming customer request | Allowed | Access logged |
| Summarize customer issue | Allowed | Source linked |
| Suggest possible answer | Allowed | Confidence and source shown |
| Send answer to customer | Conditional | Human approval for sensitive cases |
| Offer refund | Restricted | Requires policy check and human approval |
| Process refund | High risk | Human approval and audit log required |
| Update customer record | Conditional | Role-based permission and traceability |
| Escalate legal complaint | Required | Must route to human specialist |

This makes the workflow useful for AI while preserving responsibility.

---

## Design Principles

AI Action Boundary Mapping should be:

- **workflow-specific** — boundaries depend on the actual operational process;
- **risk-sensitive** — not all actions require the same level of control;
- **human-accountable** — responsibility must remain explicit;
- **tool-aware** — AI permissions depend on available tools and connectors;
- **data-aware** — sensitive data changes the governance level;
- **auditable** — action boundaries and exceptions should be traceable;
- **adaptable** — boundaries should be updated as AI systems and workflows evolve.

---

## Key Insight

AI governance should not start only with abstract principles.

It should start with operational boundaries.

> **Before AI acts, define where AI is allowed to act.**
