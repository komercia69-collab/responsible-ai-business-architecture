# Pilot Partner Talk Track

## RABA Layer 6 — 30–45 Minute Conversation Guide

This document is a practical conversation guide for early pilot discussions with CTOs, platform teams, AI product teams, and risk / compliance stakeholders.

The goal is not to sell a full governance framework.

The goal is to identify one workflow where AI-supported action is already approaching business consequence, and to test whether a minimal RABA governance layer can make responsibility, authorization and auditability visible.

---

## 0. Framing

Purpose of the conversation:

```text
Find where AI already influences real actions.
Identify where responsibility becomes unclear.
Choose one small pilot where RABA can add visible governance without rebuilding the whole system.
```

Opening line:

> Existing AI architectures define how systems generate, route, remember and call tools. RABA asks one additional question: who is responsible when AI-supported output becomes business action?

---

## 1. Opening — 5 minutes

Start with the operational reality, not abstract AI governance.

Suggested opening:

> We are not here to discuss AI policy in the abstract. We are interested in the operational layer between AI capability and business consequence.

Questions:

```text
How do you currently govern LLM or agent activity in production?

Who decides what an AI agent may read, recommend, trigger, or write?

Where are the stop-lines?

If something goes wrong, where can you see:
- who approved it;
- under which policy;
- at what risk level;
- and what was actually executed?
```

Transition:

> Many organizations already have AI governance at the policy level. What is often missing is an enforceable governance layer inside the operational flow.

---

## 2. The Missing Layer — 5–7 minutes

Use the Layer 6 diagram as the visual anchor.

Key message:

> Most AI systems already have layers for model, runtime, memory, tools and routing. But those layers usually do not answer business-accountability questions.

Clarification:

> This is not a criticism of existing AI architecture. These layers were not designed to carry business accountability.

The missing layer decides:

```text
1. Which AI-supported action may progress?
2. Who is responsible for that progression?
3. What must be logged before the action creates external effect?
4. When does the system escalate instead of continue?
```

Positioning:

> We call this Layer 6: the governance layer above agent execution.

Important boundary:

> This is not a committee and not a PDF. It is an operational layer represented through policies, states, logs and gateway decisions.

---

## 3. RABA Primitives — 10–15 minutes

### 3.1 Action Boundary

> First, we define what the AI is allowed to do.

Questions:

```text
May it read?
May it summarize?
May it recommend?
May it prepare a draft?
May it send?
May it update a business system?
May it trigger a financial or customer-facing action?
```

Key phrase:

> The Action Boundary separates AI assistance from AI-supported business action.

---

### 3.2 Approval States

> Second, we make the action state explicit.

Core model:

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

Meaning:

```text
DRAFT = AI prepared something.
RECOMMEND = AI proposes an action.
AUTHORIZED = a responsible role allowed it.
EXECUTED = the action actually happened.
ESCALATE = the system needs review before progression.
```

Key phrase:

> A recommendation is not authorization. Authorization is not execution.

---

### 3.3 Governance Gateway

> Third, we introduce a gateway between AI output and business effect.

The gateway asks:

```text
Is this action inside the boundary?
What is the risk level?
What policy applies?
Is human approval required?
Can this move to AUTHORIZED?
Should it ESCALATE?
What needs to be logged?
```

Key phrase:

> The Governance Gateway does not replace the product. It makes action progression governable.

---

### 3.4 Decision Log

> Fourth, we separate technical logs from business decision records.

Technical logs show:

```text
what happened technically
```

Decision Logs show:

```text
who allowed it;
why;
under which policy;
at what state;
with what responsible party.
```

Key phrase:

> Observability tells you what happened. Decision Log tells you why the organization allowed it.

---

### 3.5 Escalation / Override

> Finally, not every exception should become a workaround.

RABA makes exceptions governable:

```text
why escalation happened;
who reviewed it;
what decision was made;
whether action returned to RECOMMEND;
whether it moved to AUTHORIZED;
or whether it was rejected.
```

Key phrase:

> An override without a decision record is not governance. It is just a hidden exception.

---

## 4. Finding the Pilot Pain — 5–10 minutes

Move from architecture to partner pain.

Question:

> If we had to choose only one pain point for a first pilot, where would you feel the most value?

Possible pilot focus areas:

```text
1. Agent action boundaries.
2. Approval workflow.
3. Centralized LLM / agent gateway.
4. Decision Log.
5. Escalation and override handling.
```

Follow-up questions:

```text
Where do AI outputs already influence real decisions?

Which workflow would be risky if scaled from 10 users to 1,000 users?

Where do risk / compliance teams currently lack visibility?

Where do developers currently hardcode policy decisions?

Where would an audit question be painful today?
```

Pilot boundary:

> We should not start with the whole architecture. We should pick one workflow, one risk boundary, and two or three RABA primitives.

---

## 5. Closing — 5 minutes

Minimal pilot proposal:

```text
One workflow.
One product or team.
One AI integration.
Two or three RABA primitives.
Clear before / after comparison.
```

Expected pilot outputs:

```text
- visible Action Boundary;
- explicit Approval States;
- basic Governance Gateway decision;
- Decision Log for key transitions;
- escalation rule for unclear or higher-risk cases.
```

Closing phrase:

> The goal is not to slow the system down. The goal is to know when the system is allowed to move fast — and who is responsible when it does.

Call to action:

> The next useful step would be one working session with product, technical lead, and risk / compliance. In that session we map one real workflow into Action Boundary, Approval States and a minimal Governance Gateway policy.

---

## CTO / Platform Emphasis

For CTOs and platform teams, emphasize RABA as a control layer for AI-supported action progression.

Positioning:

> RABA does not require replacing your LLM stack. It helps make the boundary between model output, tool use, approval and execution explicit.

What to emphasize:

```text
- integrates with existing architecture;
- avoids hardcoded governance inside application logic;
- allows policy to evolve separately from product code;
- creates structured records for high-risk AI-supported actions;
- helps platform teams offer governance as shared infrastructure.
```

CTO phrase:

> The platform question is not only “which model do we route to?” It is “under what conditions is this AI-supported action allowed to progress?”

---

## Risk / Compliance Emphasis

For risk and compliance stakeholders, emphasize RABA as an operational decision path.

Positioning:

> RABA turns AI governance from a document into an operational decision path.

What to emphasize:

```text
- explicit responsible party;
- approval before external effect;
- decision records, not only technical logs;
- escalation path for unclear cases;
- audit-ready explanation of why action was allowed.
```

Risk / compliance phrase:

> The audit question is not only “what did the AI produce?” It is “who allowed this output to become business action, under which rule, and where is that recorded?”

---

## 5–7 Minute Short Pitch

> Most AI architectures already define models, runtime, memory, tools and routing. But when AI starts acting inside business workflows, another layer becomes necessary: governance of responsibility.
>
> RABA calls this the missing governance layer.
>
> It answers five practical questions:
>
> What is the AI allowed to do? When is output only a draft or recommendation? Who can authorize it? When does it become executed action? Where is the decision recorded?
>
> The core model is simple:
>
> DRAFT → RECOMMEND → AUTHORIZED → EXECUTED, with ESCALATE when the boundary or responsibility is unclear.
>
> The goal is not to slow AI down. The goal is to let AI move fast only where boundaries, approval, responsibility and auditability are visible.
>
> A first pilot should be small: one workflow, one AI integration, two or three governance primitives, and a clear before / after view of accountability.

---

## Related Documents

- [`docs/why-governance-matters.md`](why-governance-matters.md)
- [`docs/system-integration-map.md`](system-integration-map.md)
- [`assets/diagrams/raba-6th-layer.html`](../assets/diagrams/raba-6th-layer.html)
- [`starter-kit/README.md`](../starter-kit/README.md)
- [`offers/minimal-human-ai-governance-pilot.md`](../offers/minimal-human-ai-governance-pilot.md)
