# Start Here by Role

> From rich architecture to guided adoption.

## Purpose

This document helps different readers enter the Responsible AI Business Architecture project without getting lost in the full repository.

The project contains concepts, frameworks, demos, failure patterns and prototype interfaces.

New visitors should not need to read everything first.

They should be able to answer quickly:

- Is this project relevant to me?
- Which three files should I open first?
- What can I do in 60 minutes?
- What outcome should I expect?
- What is the next practical step?

---

## Quick Role Map

| Role | Main Question | Start With | Expected Outcome |
|---|---|---|---|
| Business Owner / CEO | How do I keep control while AI enters operations? | Project Intent, Coordination Room demo, Readiness Quick Check | Owner-level governance snapshot |
| CTO / Head of AI | How do we deploy AI agents without losing governability? | Coordination Stack, AI Governance Gateway, Model-Agent Fit Governance | Technical-governance architecture map |
| AI Engineer / Agent Builder | How do I design agents with boundaries and recovery paths? | Agent Design Failure Pattern, Action Boundary Mapping, Model-Agent Fit Governance | Safer agent design checklist |
| Consultant / Architect | How do I assess a client AI workflow? | Readiness Assessment, Failure Patterns, Coordination Room Prototype | Repeatable diagnostic method |
| Governance / Legal / Security Specialist | Where do risk, responsibility and approval enter the workflow? | AI Governance Gateway, Trusted Decision Intelligence, Failure Patterns | Governance and accountability review map |
| Researcher / Community Contributor | How can I contribute concepts, critique or examples? | Project Intent, Development Tracks, Discussion Prompts | Clear contribution angle |

---

## 1. Business Owner / CEO

### Your likely problem

You do not need every technical detail.

You need to know whether AI is improving the business process or silently increasing risk.

You need a clear view of:

- what is improving;
- what is deteriorating;
- what should be developed;
- what should be corrected;
- what should be stopped or limited;
- where human decisions are required;
- where AI autonomy is creating value or risk.

### Start with these files

1. [`docs/project-intent.md`](project-intent.md)
2. [`demo/human-ai-coordination-room.html`](../demo/human-ai-coordination-room.html)
3. [`frameworks/ai-governance-readiness-assessment.md`](../frameworks/ai-governance-readiness-assessment.md)

### Do this in 60 minutes

1. Read the project intent.
2. Open the Human–AI Coordination Room demo.
3. Choose one real business process where AI is already used or planned.
4. Ask:
   - What is AI allowed to do?
   - Who approves risky actions?
   - What is improving?
   - What is getting worse?
   - What would I need to see as owner before increasing autonomy?

### Expected outcome

A one-page owner-level governance snapshot:

- current AI use;
- value signals;
- risk signals;
- missing approvals;
- next decision needed.

### Next step

Map one AI-assisted workflow using the Human–AI Coordination Room logic.

---

## 2. CTO / Head of AI

### Your likely problem

You need to move from AI experiments to operational AI systems without creating uncontrolled autonomy.

You need architecture for:

- model selection;
- tool permissions;
- agent boundaries;
- approval thresholds;
- logging and tracing;
- escalation;
- rollback;
- runtime governance.

### Start with these files

1. [`docs/architecture/human-ai-operational-coordination-stack.md`](architecture/human-ai-operational-coordination-stack.md)
2. [`docs/concepts/ai-governance-gateway.md`](concepts/ai-governance-gateway.md)
3. [`docs/concepts/model-agent-fit-governance.md`](concepts/model-agent-fit-governance.md)

### Do this in 60 minutes

1. Pick one current or planned AI agent.
2. Identify its role:
   - observe;
   - analyze;
   - recommend;
   - draft;
   - trigger;
   - execute.
3. List all tools and APIs the agent can access.
4. Define which actions require human approval.
5. Identify what must be logged and traced.

### Expected outcome

A technical-governance architecture map for one agent:

```text
Agent role
  ↓
Model capability
  ↓
Tool permissions
  ↓
Action boundary
  ↓
Approval threshold
  ↓
Logging / tracing
  ↓
Escalation / rollback
  ↓
Accountability owner
```

### Next step

Create an AI Governance Gateway around the highest-risk agent action.

---

## 3. AI Engineer / Agent Builder

### Your likely problem

You need to build useful agents without turning beginner design mistakes into future governance failures.

A working prompt is not enough.

A connected tool is not yet a governed action.

### Start with these files

1. [`docs/failure-patterns/agent-design-without-governance-architecture.md`](failure-patterns/agent-design-without-governance-architecture.md)
2. [`docs/concepts/ai-action-boundary-mapping.md`](concepts/ai-action-boundary-mapping.md)
3. [`docs/concepts/model-agent-fit-governance.md`](concepts/model-agent-fit-governance.md)

### Do this in 60 minutes

1. Select one AI agent you are building or imagining.
2. Write its mission in one sentence.
3. Define:
   - allowed actions;
   - forbidden actions;
   - tools;
   - context scope;
   - model fit;
   - human approval points;
   - recovery path.
4. Check whether the agent has a real recovery path if it is wrong.

### Expected outcome

A safer agent design checklist.

### Next step

Convert the checklist into an agent role card or implementation spec.

---

## 4. Consultant / Enterprise Architect

### Your likely problem

You need a repeatable way to diagnose whether an organization is ready for AI agents and autonomous workflows.

You need something that can be used with executives, technical teams and governance stakeholders.

### Start with these files

1. [`frameworks/ai-governance-readiness-assessment.md`](../frameworks/ai-governance-readiness-assessment.md)
2. [`docs/failure-patterns/README.md`](failure-patterns/README.md)
3. [`docs/prototypes/human-ai-coordination-interface-prototype.md`](prototypes/human-ai-coordination-interface-prototype.md)

### Do this in 60 minutes

1. Pick one client or internal AI workflow.
2. Run a lightweight readiness assessment.
3. Identify the top three failure patterns.
4. Sketch the owner-level view:
   - positive dynamics;
   - deterioration;
   - governance load;
   - decision required.

### Expected outcome

A repeatable diagnostic method for one AI-assisted process.

### Next step

Turn the result into a pilot proposal or workshop agenda.

---

## 5. Governance / Legal / Security Specialist

### Your likely problem

You need to identify where responsibility, approval, compliance, data integrity and risk control enter AI-enabled workflows.

You need to know when AI output becomes operational action.

### Start with these files

1. [`docs/concepts/ai-governance-gateway.md`](concepts/ai-governance-gateway.md)
2. [`docs/concepts/trusted-decision-intelligence.md`](concepts/trusted-decision-intelligence.md)
3. [`docs/failure-patterns/erosion-of-human-judgment.md`](failure-patterns/erosion-of-human-judgment.md)

### Do this in 60 minutes

1. Pick one high-impact AI-supported workflow.
2. Identify:
   - where data enters;
   - where AI produces insight;
   - where recommendation appears;
   - where action is triggered;
   - who approves;
   - what is logged;
   - what can be reversed.
3. Separate data integrity from decision integrity.

### Expected outcome

A governance and accountability review map.

### Next step

Define required approval gates, audit logs and escalation points.

---

## 6. Researcher / Community Contributor

### Your likely problem

You want to understand the conceptual direction and decide where your perspective can contribute.

The project is not a finished doctrine.

It is a structured discussion space.

### Start with these files

1. [`docs/project-intent.md`](project-intent.md)
2. [`docs/project-development-tracks.md`](project-development-tracks.md)
3. [`docs/community/discussion-prompts.md`](community/discussion-prompts.md)

### Do this in 60 minutes

1. Read the project intent.
2. Choose one concept or failure pattern that matches your expertise.
3. Use the discussion prompts to formulate a critique, example or improvement.
4. Identify whether your contribution is:
   - conceptual;
   - technical;
   - legal;
   - psychological;
   - operational;
   - design-oriented;
   - business-oriented.

### Expected outcome

A clear contribution angle.

### Next step

Open a discussion, issue, pull request or LinkedIn group conversation.

---

## Minimal Shared Path for Everyone

If you do not know where to start, use this path:

1. Read [`docs/project-intent.md`](project-intent.md).
2. Open [`demo/human-ai-coordination-room.html`](../demo/human-ai-coordination-room.html).
3. Read [`docs/architecture/human-ai-operational-coordination-stack.md`](architecture/human-ai-operational-coordination-stack.md).
4. Read one failure pattern from [`docs/failure-patterns/README.md`](failure-patterns/README.md).
5. Choose one real workflow and ask:

> Where does AI output become operational action, and who remains responsible?

---

## Closing Principle

This project contains many concepts, but the entry path should be simple.

Start with your role.

Choose one workflow.

Map the boundary between AI autonomy and human responsibility.

Then improve the architecture from real use.
