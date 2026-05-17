# Core Concepts Bundle

> A compact map of the project’s most important concepts.

## Purpose

The project contains many concepts, prototypes, failure patterns and governance documents.

This bundle gives new visitors a smaller conceptual entry point.

It does not replace the full repository.

It highlights the core concepts that help readers understand the project quickly and apply it to one real workflow.

---

## The Core Bundle

| Concept | What It Solves | Start Here |
|---|---|---|
| Human–AI Operational Coordination Stack | Shows the full layered architecture between humans, AI agents and execution environments | [`docs/architecture/human-ai-operational-coordination-stack.md`](architecture/human-ai-operational-coordination-stack.md) |
| AI Action Boundary Mapping | Defines where AI may observe, analyze, recommend, draft, trigger or execute | [`docs/concepts/ai-action-boundary-mapping.md`](concepts/ai-action-boundary-mapping.md) |
| AI Governance Gateway | Controls the transition from AI output to operational action | [`docs/concepts/ai-governance-gateway.md`](concepts/ai-governance-gateway.md) |
| Governance Nervous System | Monitors, stabilizes and coordinates AI-native operational environments | [`docs/concepts/governance-nervous-system.md`](concepts/governance-nervous-system.md) |
| Human–AI Coordination Room | Prototype interface for owner decisions, process dynamics, risks and approvals | [`demo/human-ai-coordination-room.html`](../demo/human-ai-coordination-room.html) |
| Failure Patterns | Identifies ways human judgment, coordination and accountability can break down | [`docs/failure-patterns/README.md`](failure-patterns/README.md) |
| Model–Agent Fit Governance | Connects model selection to agent role, risk, tools and accountability | [`docs/concepts/model-agent-fit-governance.md`](concepts/model-agent-fit-governance.md) |
| Trusted Decision Intelligence | Connects BI, AI, Blockchain, auditability and human accountability | [`docs/concepts/trusted-decision-intelligence.md`](concepts/trusted-decision-intelligence.md) |

---

## 1. Human–AI Operational Coordination Stack

### What it solves

It gives the project its core architecture.

It shows how human accountability, AI action boundaries, personalized AI work layers, governance gateways, monitoring systems and operational AI agents connect.

### When to use it

Use it when you need a high-level map of how Human–AI Operational Coordination works as a system.

### Key question

> How should a governable human-AI operational environment be structured?

### Start here

- [`docs/architecture/human-ai-operational-coordination-stack.md`](architecture/human-ai-operational-coordination-stack.md)

---

## 2. AI Action Boundary Mapping

### What it solves

It prevents unclear AI delegation.

It helps teams distinguish between different levels of AI participation:

- observe;
- analyze;
- recommend;
- draft;
- trigger;
- execute;
- escalate.

### When to use it

Use it before giving an AI system tools, workflow access, memory or authority to influence real outcomes.

### Key question

> Where is AI allowed to act, and where must it stop?

### Start here

- [`docs/concepts/ai-action-boundary-mapping.md`](concepts/ai-action-boundary-mapping.md)

---

## 3. AI Governance Gateway

### What it solves

It controls the moment when AI output becomes operational action.

This includes actions such as:

- sending messages;
- updating records;
- triggering workflows;
- approving refunds;
- publishing content;
- changing data;
- calling tools or APIs.

### When to use it

Use it whenever an AI system can do more than produce text and may affect tools, customers, money, contracts, records or operations.

### Key question

> What must be checked before an AI recommendation becomes an action?

### Start here

- [`docs/concepts/ai-governance-gateway.md`](concepts/ai-governance-gateway.md)

---

## 4. Governance Nervous System

### What it solves

It describes the monitoring and stabilization layer for AI-native operations.

It helps organizations see and respond to:

- drift;
- incidents;
- escalating risk;
- coordination gaps;
- overloaded human review;
- repeated failures;
- loss of visibility.

### When to use it

Use it when AI systems begin operating across multiple workflows, agents, tools or teams.

### Key question

> How does the organization sense, respond and stabilize when AI autonomy scales?

### Start here

- [`docs/concepts/governance-nervous-system.md`](concepts/governance-nervous-system.md)

---

## 5. Human–AI Coordination Room

### What it solves

It turns the architecture into an interface direction.

It asks what humans — especially business owners and operational managers — need to see when AI agents participate in real workflows.

It focuses on:

- positive dynamics;
- deterioration;
- pending approvals;
- blocked actions;
- governance load;
- development recommendations;
- sanitation recommendations;
- process dynamics;
- learning logs.

### When to use it

Use it when you need to explain the project visually or imagine how the architecture could become usable for humans.

### Key question

> What must become visible and decision-ready for humans before autonomy expands?

### Start here

- [`demo/human-ai-coordination-room.html`](../demo/human-ai-coordination-room.html)
- [`docs/prototypes/human-ai-coordination-interface-prototype.md`](prototypes/human-ai-coordination-interface-prototype.md)

---

## 6. Failure Patterns

### What it solves

Failure patterns show how AI-native environments can lose responsibility, judgment or coordination even when individual AI outputs look useful.

They help detect early warning signs before they become systemic failures.

### When to use it

Use them during:

- pilot reviews;
- incident retrospectives;
- agent design reviews;
- architecture assessments;
- governance workshops;
- AI readiness evaluations.

### Key question

> Where can this AI-enabled workflow lose judgment, accountability or coordination?

### Start here

- [`docs/failure-patterns/README.md`](failure-patterns/README.md)
- [`docs/failure-patterns/agent-design-without-governance-architecture.md`](failure-patterns/agent-design-without-governance-architecture.md)
- [`docs/failure-patterns/erosion-of-human-judgment.md`](failure-patterns/erosion-of-human-judgment.md)

---

## 7. Model–Agent Fit Governance

### What it solves

It treats model selection as a governance decision.

The right model is not simply the strongest model.

It is the model whose capabilities, risks and boundaries fit the agent’s role, tool permissions, human approval thresholds and accountability requirements.

### When to use it

Use it when designing, reviewing or upgrading AI agents.

### Key question

> Does this model fit this agent’s role, risk and responsibility level?

### Start here

- [`docs/concepts/model-agent-fit-governance.md`](concepts/model-agent-fit-governance.md)

---

## 8. Trusted Decision Intelligence

### What it solves

It distinguishes data integrity from decision integrity.

It connects Business Intelligence, AI, Blockchain, auditability and human accountability.

It is useful when BI systems move from passive dashboards toward recommendations, workflows, automation or smart-contract triggers.

### When to use it

Use it when AI-generated insights or BI recommendations may lead to business action.

### Key question

> Does trusted data lead to responsible action, or only to auditable automation?

### Start here

- [`docs/concepts/trusted-decision-intelligence.md`](concepts/trusted-decision-intelligence.md)

---

## How These Concepts Connect

```text
Human–AI Operational Coordination Stack
  ↓
AI Action Boundary Mapping
  ↓
Model–Agent Fit Governance
  ↓
AI Governance Gateway
  ↓
Human–AI Coordination Room
  ↓
Governance Nervous System
  ↓
Failure Patterns and Learning Loops
```

Trusted Decision Intelligence can connect to this chain when business data, AI recommendations, Blockchain auditability or BI systems are involved.

---

## Minimal Application Path

To apply the bundle to one workflow:

1. Pick one workflow.
2. Define the mission.
3. Map AI action boundaries.
4. Check model-agent fit.
5. Identify gateway controls.
6. Identify failure patterns.
7. Define what the human owner needs to see.
8. Define what must be logged, escalated or corrected.

---

## Output Template

```text
Workflow:

Mission:

AI role:

Action boundary:

Model-agent fit risk:

Gateway controls needed:

Failure patterns to watch:

Owner-level information needed:

Logging / tracing needed:

Escalation / recovery path:

Accountability owner:
```

---

## Closing Principle

The project has many documents, but the core question is simple:

> Where does AI autonomy meet human responsibility, and how do we keep that boundary governable?
