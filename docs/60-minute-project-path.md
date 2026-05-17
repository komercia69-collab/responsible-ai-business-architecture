# 60-Minute Project Path

> A fast route from first contact to practical understanding.

## Purpose

This path is for visitors who want to understand the practical value of the project in about one hour.

It is not meant to cover the whole repository.

It is meant to answer quickly:

- What is this project about?
- Why does Human–AI Operational Coordination matter?
- What does the prototype look like?
- What can I apply to one real workflow?
- What should I read or do next?

---

## Who This Is For

Use this path if you are:

- new to the project;
- exploring whether the framework is useful;
- preparing to discuss the project with a team;
- evaluating a possible pilot;
- looking for a quick but structured overview;
- unsure which role-based route fits you.

If you already know your role, you can also use [`start-here-by-role.md`](start-here-by-role.md).

---

## The 60-Minute Route

### 0–10 minutes: Understand the project intent

Read:

- [`docs/project-intent.md`](project-intent.md)

Focus on the basic idea:

> We are not trying to invent the wheel. We are trying to help build a bridge.

The project contributes reusable orientation material for people building the bridge between AI autonomy and human responsibility.

Expected takeaway:

- The project is not a closed doctrine.
- It is not only about AI control.
- It focuses on governable operational environments.

---

### 10–20 minutes: See the interface direction

Open:

- [`demo/human-ai-coordination-room.html`](../demo/human-ai-coordination-room.html)

Look for these sections:

- Owner Overview;
- Positive Dynamics;
- Needs Correction;
- Mission Interface;
- Agent Boundary Map;
- Governance Gateway;
- Process Dynamics;
- Learning Log.

Expected takeaway:

> The project is not only about documents. It explores what humans may need to see when AI agents enter real workflows.

---

### 20–30 minutes: Understand the core architecture

Read:

- [`docs/architecture/human-ai-operational-coordination-stack.md`](architecture/human-ai-operational-coordination-stack.md)

Focus on the stack:

```text
Human Layer
  ↓
AI Action Boundary Mapping
  ↓
Personal AI Operational Twin
  ↓
Living Human-AI Operational Interface
  ↓
AI Governance Gateway
  ↓
Governance Nervous System
  ↓
Operational AI Agents
  ↓
Execution Environment
```

Expected takeaway:

> The project is about the relationship between human accountability, AI action boundaries, governance gateways and autonomous operations.

---

### 30–40 minutes: Test the risk lens

Read one failure pattern:

- [`docs/failure-patterns/agent-design-without-governance-architecture.md`](failure-patterns/agent-design-without-governance-architecture.md)

Focus on these formulas:

> A prompt is not a governance architecture.

> Human oversight must be designed, not assumed.

> No recovery path means no responsible autonomy.

Expected takeaway:

> Many AI-agent risks begin before deployment: in unclear objectives, weak context, missing boundaries, assumed oversight and absent recovery paths.

---

### 40–50 minutes: Apply the project to one real workflow

Choose one workflow where AI is already used or could be used.

Examples:

- customer support;
- sales outreach;
- document review;
- CRM update;
- internal reporting;
- recruiting;
- BI recommendation;
- coding assistant;
- finance approval;
- operations monitoring.

Answer these questions:

1. What is the mission of the workflow?
2. Where does AI produce analysis, recommendations or drafts?
3. Where could AI trigger an action?
4. Which action requires human approval?
5. What must be logged?
6. What can be reversed?
7. Who remains accountable?

Expected takeaway:

> You should be able to identify where AI output becomes operational action and where governance is needed.

---

### 50–60 minutes: Decide your next step

Choose one next path.

| If you want to... | Go next |
|---|---|
| Navigate by role | [`docs/start-here-by-role.md`](start-here-by-role.md) |
| Assess readiness | [`frameworks/ai-governance-readiness-assessment.md`](../frameworks/ai-governance-readiness-assessment.md) |
| Understand action boundaries | [`docs/concepts/ai-action-boundary-mapping.md`](concepts/ai-action-boundary-mapping.md) |
| Understand gateway controls | [`docs/concepts/ai-governance-gateway.md`](concepts/ai-governance-gateway.md) |
| Understand model selection risk | [`docs/concepts/model-agent-fit-governance.md`](concepts/model-agent-fit-governance.md) |
| Explore AI + BI + Blockchain governance | [`docs/concepts/trusted-decision-intelligence.md`](concepts/trusted-decision-intelligence.md) |
| Contribute to the discussion | [`docs/community/discussion-prompts.md`](community/discussion-prompts.md) |

---

## 60-Minute Output Template

After one hour, you should be able to create a small governance snapshot.

```text
Workflow:

AI role:

Current or planned AI actions:

Where AI output becomes operational action:

Human approval required:

Risk signals:

Missing logs / tracing:

Rollback or recovery path:

Accountability owner:

Next recommended step:
```

---

## Example Output

```text
Workflow:
Customer support refund handling

AI role:
Drafting responses and recommending refund options

Current or planned AI actions:
Classify ticket, retrieve policy, draft response, suggest refund

Where AI output becomes operational action:
Sending customer message or updating CRM refund status

Human approval required:
All refund-related messages and CRM updates

Risk signals:
Unauthorized promise, wrong policy interpretation, customer escalation

Missing logs / tracing:
Which policy section was used, who approved, what was changed in CRM

Rollback or recovery path:
CRM status correction, customer follow-up message, incident log

Accountability owner:
Customer Support Supervisor

Next recommended step:
Create AI Action Boundary Map and Governance Gateway for refund workflow
```

---

## What This Path Is Not

This path is not a full implementation guide.

It does not replace:

- deep architecture review;
- legal review;
- security assessment;
- technical integration planning;
- operational change management.

It is a first structured orientation.

---

## Closing Principle

In 60 minutes, the goal is not to understand everything.

The goal is to identify one real workflow where autonomy and responsibility must be connected.

> Start small. Map one workflow. Find the boundary. Preserve responsibility.
