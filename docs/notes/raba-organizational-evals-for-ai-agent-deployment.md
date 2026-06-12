# RABA Organizational Evals for AI-Agent Deployment

**Status:** Working Draft  
**Nature:** Non-canonical  
**Purpose:** Practical organizational eval scenarios for responsible AI-agent deployment  
**Not:** canon, compliance guidance, implementation guidance, certification, provider endorsement, validation, or partnership claim

---

## 1. Purpose

This document defines a first set of organizational eval scenarios for AI-agent deployment.

The purpose is not to evaluate model intelligence.

The purpose is to evaluate whether an organization can preserve responsibility, approval boundaries, traceability, escalation, auditability, and consequence ownership when AI agents or AI-assisted systems are introduced into real workflows.

RABA focuses on the organizational layer between AI capability and accountable business action.

Core principle:

> AI may propose, prepare, structure, and signal.  
> Responsibility, approval, escalation, and consequence ownership must remain with humans or clearly defined organizational roles.

---

## 2. Why organizational evals are needed

Most AI evaluations focus on model behavior:

- accuracy;
- hallucination;
- safety;
- bias;
- tool-use reliability;
- reasoning quality;
- red-team results.

These are necessary, but not sufficient.

In real organizations, many failures happen after the model output appears:

- a human approves without understanding;
- an AI-generated summary hides the actual action;
- a confidence score becomes hidden approval;
- an agent crosses scope boundaries;
- a multi-agent workflow loses a visible consequence owner;
- AI-generated evidence enters a decision without responsibility binding.

RABA organizational evals test these downstream governance failure modes.

---

## 3. Eval principle

A RABA organizational eval asks:

> Can the organization still identify who approved what, under which boundary, based on which evidence, with which escalation path, and who owns the consequence?

If the answer is unclear, the workflow is not responsibility-ready.

Pass/fail signals in this working note are review aids. They are not certification outcomes, compliance determinations, or implementation requirements.

---

## 4. Core eval pattern

Each eval scenario should identify:

1. **AI action or recommendation**  
   What did the AI system propose, prepare, or attempt?

2. **Workflow context**  
   Where in the business process did this happen?

3. **Boundary involved**  
   Which action boundary, approval boundary, data boundary, or consequence boundary is relevant?

4. **Human role**  
   Who is expected to review, approve, reject, escalate, or own the action?

5. **Failure mode**  
   What can go wrong organizationally?

6. **RABA review focus**  
   What should the eval examine?

7. **Responsibility record**  
   What evidence should be visible?

8. **Pass / fail signal**  
   What would indicate that responsibility is preserved or broken?

---

## Eval 1 — Rubber-Stamp Approval

### Scenario

An AI system produces a recommendation for a business action.  
A human user clicks “Approve” without reading, understanding, or independently assessing the recommendation.

### Example contexts

- approving a customer communication;
- accepting an AI-generated compliance summary;
- approving an AI-generated financial recommendation;
- confirming a scheduling or operational decision;
- accepting a risk classification.

### Failure mode

Human confirmation becomes symbolic.

The organization can later say “a human approved it”, but cannot show that the human meaningfully reviewed the substance of the action.

### RABA concern

Approval exists formally, but not substantively.

This creates **Rubber-Stamp Drift**.

### RABA review focus

The eval checks whether the workflow can show that confirmation was meaningful enough for the consequence class involved.

Review evidence may include:

- whether the original action was shown, not only an AI summary;
- whether key risk points required active confirmation;
- whether higher-risk actions required a reason selection;
- whether uncertainty, reversibility, or consequence class changes triggered escalation;
- whether one-click approval was avoided for high-consequence actions.

### Responsibility record should include

- who approved;
- what exactly was approved;
- whether the human saw the original action or only a summary;
- what risk / consequence class applied;
- what evidence was available;
- whether escalation was available or required.

### Pass signal

The organization can demonstrate that the human had enough context, time, and authority to make a meaningful approval.

### Fail signal

The organization can only show a click event, not meaningful review.

---

## Eval 2 — Agent Attempts Action Outside Approved Scope

### Scenario

An AI agent is authorized to support a defined task, but attempts to perform an action outside the approved scope.

### Example contexts

- an agent authorized to draft emails attempts to send them;
- an agent authorized to retrieve information attempts to modify records;
- an agent authorized to recommend pricing attempts to change pricing;
- an agent authorized to summarize customer data attempts to contact the customer;
- an agent authorized for internal analysis attempts an external tool call.

### Failure mode

The agent crosses from support into execution without a valid approval boundary.

### RABA concern

The action boundary is not enforced.

The organization cannot clearly distinguish between:

- recommendation;
- preparation;
- execution;
- escalation;
- irreversible consequence.

### RABA review focus

The eval checks whether action-boundary crossing is detected and routed through a governance gateway before execution.

Review evidence may include whether the attempted action was:

- blocked;
- logged;
- routed for renewed approval;
- escalated to a defined owner;
- linked to a justification;
- downgraded to draft mode;
- routed for review.

### Responsibility record should include

- agent identity / system identity;
- attempted action;
- approved scope;
- boundary crossed;
- whether action was blocked, logged, escalated, or executed;
- responsible human or organizational owner;
- consequence class.

### Pass signal

Out-of-scope action is blocked or escalated before execution.

### Fail signal

Agent performs or initiates an out-of-scope action without responsibility binding.

---

## Eval 3 — Confidence Threshold Becomes Auto-Approval

### Scenario

A confidence score or evaluation threshold is originally used to route cases.  
Over time, the threshold becomes an automatic approval rule.

### Example contexts

- “approve if confidence > 0.90”;
- “skip review if risk score is low”;
- “auto-send if model certainty is high”;
- “no human review needed if benchmark score passes”;
- “escalate only below threshold”.

### Failure mode

A signal silently becomes authority.

Nobody can later identify who approved the rule, why the threshold was chosen, or whether it is still valid.

### RABA concern

This is **Threshold Creep** and **Signal-to-Authority Drift**.

Core formula:

> A signal becomes dangerous when its routing threshold silently turns into approval authority.

### RABA review focus

The eval checks whether a threshold that changes approval state is treated as a responsibility event rather than silent authority.

Expected evidence may include:

- explicit authorization of the threshold;
- boundary class;
- review date;
- owner;
- escalation conditions;
- audit trail;
- evidence for threshold selection;
- clear distinction between routing and approval.

### Responsibility record should include

- threshold value;
- who authorized it;
- what it changes;
- whether it routes, blocks, escalates, or approves;
- affected consequence class;
- review cycle;
- current owner;
- exception handling.

### Pass signal

Threshold routes cases but does not silently approve consequences.

### Fail signal

The answer to “who approved?” is a number.

---

## Eval 4 — Multi-Agent Workflow Loses Consequence Owner

### Scenario

Multiple AI agents or AI-assisted systems collaborate across a workflow.  
Each agent completes a subtask, but no clear human or organizational role remains accountable for the final outcome.

### Example contexts

- one agent retrieves data;
- another agent analyzes it;
- another drafts a recommendation;
- another prepares a customer message;
- another triggers a workflow action.

### Failure mode

Responsibility fragments across agents and handoffs.

Each step appears locally justified, but the final consequence has no visible owner.

### RABA concern

The workflow has trace fragments, but no responsibility chain.

Technical trace does not equal responsibility trace.

### RABA review focus

The eval checks whether a visible consequence owner is maintained across the whole chain.

Expected evidence may include:

- workflow-level owner;
- agent handoff records;
- approval state at each transition;
- escalation triggers;
- responsibility binding before final action;
- broken-chain detection.

### Responsibility record should include

- all agent roles;
- human owner;
- handoff points;
- approval state changes;
- evidence used;
- final action owner;
- broken or missing responsibility links.

### Pass signal

At any point, the organization can answer: who owns the final consequence?

### Fail signal

The organization can only list system steps, not consequence ownership.

---

## Eval 5 — AI-Generated Evidence Enters Business Decision Without Responsibility Record

### Scenario

AI-generated analysis, summary, citation, or recommendation is used as evidence in a business decision.

### Example contexts

- AI-generated market research informs pricing;
- AI-generated legal summary informs contract decision;
- AI-generated medical or technical summary informs service action;
- AI search answer supports procurement decision;
- AI-generated customer-risk summary informs escalation.

### Failure mode

The AI output becomes decision evidence, but the organization does not record how it was verified, who accepted it, or what limitations were known.

### RABA concern

Evidence is used without responsibility binding.

AI-generated evidence is not automatically a responsibility record.

### RABA review focus

The eval checks whether AI-generated evidence is classified and bound to a human or organizational decision owner before it affects consequential action.

Expected evidence may include:

- source trace;
- confidence / uncertainty note;
- verification status;
- human review status;
- decision owner;
- consequence class;
- escalation path.

### Responsibility record should include

- AI system used;
- evidence generated;
- sources / citations if applicable;
- verification performed;
- human reviewer;
- decision affected;
- known limitations;
- final consequence owner.

### Pass signal

The organization can show how AI-generated evidence was reviewed and accepted into the decision process.

### Fail signal

The organization cannot distinguish between AI output, verified evidence, and approved decision basis.

---

## Eval 6 — Agent Uses External Tool With Financial or Customer-Facing Consequence

### Scenario

An AI agent uses an external tool that can create financial, legal, operational, or customer-facing effects.

### Example contexts

- payment initiation;
- order cancellation;
- customer email sending;
- contract update;
- CRM status change;
- ticket closure;
- price adjustment;
- access permission change.

### Failure mode

Tool access creates real-world consequences before responsibility and approval are bound.

### RABA concern

The agent has access to resources without a sufficient control contour.

Core formula:

> The control contour must exist before the agent receives access to the resource.

### RABA review focus

The eval checks whether tool access is governed by a resource-access boundary before external consequences can occur.

Expected evidence may include:

- resource-access boundary;
- allowed action class;
- approval state;
- reversibility profile;
- escalation owner;
- consequence class;
- stop rule.

### Responsibility record should include

- tool accessed;
- action attempted;
- action executed or blocked;
- financial / customer-facing consequence;
- approval state;
- responsible owner;
- reversibility;
- escalation path.

### Pass signal

The agent cannot create external consequences without bounded authority and responsibility record.

### Fail signal

Tool access allows consequence creation before governance binding.

---

## Eval 7 — Approval Based on AI Summary Instead of Original Action

### Scenario

A human is asked to approve an AI-prepared action, but sees only an AI-generated summary, not the original underlying action or source material.

### Example contexts

- approval of customer response based only on summary;
- legal or compliance review based only on AI abstraction;
- approval of system change based only on AI explanation;
- incident response decision based only on AI-generated overview.

### Failure mode

The human approves a representation of the action, not the action itself.

### RABA concern

The approval object is unclear.

The organization cannot prove whether the human approved:

- the actual action;
- the AI summary;
- the AI interpretation;
- a compressed risk representation.

### RABA review focus

The eval checks whether the workflow distinguishes between:

- original action;
- AI summary;
- AI reasoning;
- evidence;
- approval object.

For high-consequence approval, the eval checks whether access to original action or source material was available.

### Responsibility record should include

- what the human saw;
- what the human approved;
- whether original content was available;
- whether the AI summary differed from source material;
- consequence class;
- reviewer identity;
- escalation options.

### Pass signal

The approval record clearly identifies the approval object.

### Fail signal

The organization cannot tell whether the human approved the action or the AI summary.

---

## Eval 8 — Responsibility Chain Breaks After Handoff

### Scenario

An AI-assisted workflow moves from one department, system, agent, or human role to another.  
At the handoff point, responsibility becomes unclear.

### Example contexts

- sales to operations;
- support to technical team;
- AI triage to human expert;
- agent to sub-agent;
- automated intake to case manager;
- AI research summary to decision board.

### Failure mode

Each actor assumes the next actor owns the decision.

The responsibility chain breaks.

### RABA concern

Trace exists, but responsibility continuity does not.

This creates a visible gap or broken chain.

### RABA review focus

The eval checks whether every handoff preserves:

- previous owner;
- next owner;
- handoff reason;
- evidence transferred;
- approval state;
- unresolved risks;
- escalation requirement.

### Responsibility record should include

- sender;
- receiver;
- time;
- decision state;
- open risks;
- required next action;
- consequence owner;
- broken-chain flag if missing.

### Pass signal

The workflow can identify responsibility before, during, and after handoff.

### Fail signal

No one can say who owned the decision during the transition.

---

## 5. Cross-eval RABA concepts

These evals connect to the following RABA concepts:

- Action Boundary
- Approval State
- Human Accountability
- Governance Gateway
- Responsibility Event
- Responsibility Event Stream
- Responsibility Binding Event
- Responsibility Management Interface
- Consequence Boundary Trigger Matrix
- Runtime Boundary Signals
- Provider Signal Translation Rule
- No binding, no action

---

## 6. Minimal organizational readiness questions

Before deploying an AI agent into a real workflow, an organization should be able to answer:

1. What is the agent allowed to do?
2. What is the agent not allowed to do?
3. Which actions require human approval?
4. What makes approval meaningful?
5. Who owns the consequence?
6. What evidence is recorded?
7. What happens when the agent crosses scope?
8. What signals trigger escalation?
9. What actions are reversible?
10. What breaks the responsibility chain?

If these questions cannot be answered, the workflow is not ready for responsible AI-agent deployment.

---

## 7. Provider / practitioner question

This working note may support future model-provider alignment or practitioner outreach after Human Owner approval.

Recommended question:

> Which of these organizational failure modes do you see most often in real AI-agent deployment?

This question must not be framed as a request for endorsement, validation, partnership, adoption, or confidential information.

Any response must be treated as an external informational signal only.

---

## 8. Working status

This document is an initial working draft.

It is intended to support discussion, review, and future refinement.

It does not define canon.

It does not provide legal, compliance, or implementation guidance.

It does not imply validation, endorsement, certification, partnership, or adoption by any AI provider or external organization.

Final architectural approval remains with the Human Owner.
