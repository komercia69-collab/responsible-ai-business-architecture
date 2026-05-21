# Responsibility Layer for Agentic AI Architecture

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — open for review and contribution  
**Core principle:** AI may be probabilistic. Responsibility must not be.

---

## Introduction

Agentic AI architecture describes how AI systems are built, coordinated, and operated. It covers agent decomposition, orchestration, tool invocation, memory, observability, security, and deployment. These are necessary engineering concerns.

But technical architecture does not answer the governance question.

When an AI agent invokes a tool, who authorized that action? When an agent orchestrates a multi-step workflow, who owns the outcome? When an agent produces a recommendation, who decides whether it becomes authorized execution? When something is actually executed, who is accountable — and is that accountability traceable?

These questions are not answered by architecture diagrams alone. They require an explicit responsibility layer.

Without this layer, organizations may deploy technically capable AI systems that are ungovernable in practice: no clear action boundaries, no named accountability, no auditable decision log, and no defined escalation path.

RABA exists to define and operationalize this missing layer.

---

## What Agentic AI Architecture Covers — and What It Does Not

| Concern | Agentic AI Architecture | RABA |
|---|---|---|
| Primary question | How does the system operate? | Who is accountable, and under what conditions? |
| Agent structure | Decomposition, roles, orchestration | Authority limits, escalation path, delegated identity |
| Tool usage | Invocation, function calling, API access | Action boundary, approval state, authorization, execution accountability |
| Observability | Traces, logs, metrics, monitoring | Responsibility visibility, decision log, accountability record |
| Security | Access control, sandboxing, policy enforcement | Role-based authority, approval chains, permission boundaries |
| Human involvement | Human-in-the-loop feedback mechanism | Named approver, authorizer, decision reason, accountability assignment |
| Deployment | Infrastructure, environment, configuration | Organizational owner, responsibility assignment per workflow |

Neither replaces the other. RABA is the governance layer that makes agentic systems auditable and accountable in production.

---

## Missing Responsibility Questions

Current agentic AI architecture maps do not explicitly surface the following questions. Any production system operating in a regulated or high-impact context must answer them.

### Ownership

- Who owns this AI action?
- Who owns this workflow?
- Which human role is responsible for the outcome?

### Action state

- Is the AI drafting, recommending, authorized to execute, executed, or escalating?
- Which state is currently active?
- Who authorized the transition to the current state?
- Did the authorized action actually execute?

### Action boundaries

- Where is the boundary between AI-permitted and human-required action?
- Which actions may the AI execute autonomously?
- Which actions require authorization before execution?

### Approval and authorization

- Who approves the transition from recommendation to authorization?
- What is the approval mechanism — manual, role-based, or conditional?
- Is the approval decision recorded?
- Does authorization expire or require re-approval?

### Accountability record

- What is recorded in the business decision log?
- Is the technical trace linked to a business accountability record?
- Is the log auditable and tamper-evident?

### Escalation

- When must the system escalate instead of proceeding?
- Which human role receives the escalation?
- What happens if the escalation is not acknowledged?

### Harm and impact

- Who is accountable if the workflow causes harm or material business impact?
- Is that accountability defined before the system operates — or only after an incident?

---

## Delegated AI Identity

Agentic systems often act as delegated operational actors inside a workflow. This creates a responsibility question that is not solved by model identity alone.

RABA treats delegated AI identity as a governance concern:

- On whose behalf is the AI agent acting?
- Which human role, team, project, or organization delegated authority to the agent?
- What is the agent allowed to do without approval?
- What is the agent allowed to recommend but not execute?
- Which actions require explicit human authorization?
- Which actions must always escalate?
- Where does delegated authority end?
- Which human role remains accountable after delegation?

Delegated AI identity should not be confused with human accountability. An AI agent may have an operational identity, role, permissions, and traceable activity. Responsibility for business-relevant actions must still map back to a human or organizational owner.

---

## Mapping: Technical Components to Responsibility Concerns

| Technical Component | RABA Responsibility Concern | Possible Interface / Control Element |
|---|---|---|
| Tool invocation | Action boundary | Tool execution approval state |
| Agent orchestration | Delegated responsibility | Agent role, authority limit, escalation path |
| Observability | Accountability visibility | Technical trace linked to business decision log |
| Human-in-the-loop | Accountable decision-making | Named approver, decision reason, timestamp |
| Security / access control | Authority and permission boundaries | Role-based approval chain, permission scope per agent |
| Deployment | Organizational responsibility | Named owner per deployment, workflow, or project |
| Policy enforcement | Governance boundary enforcement | Allow/deny rules with audit record |
| Memory stores | Context accountability | Traceability of what information the agent used and why |
| Agent messaging | Coordination accountability | Inter-agent actions logged with responsibility attribution |
| Simulation / testing | Pre-production responsibility review | Responsibility scenarios validated before deployment |
| Delegated AI identity | Delegated authority and accountability mapping | Agent identity linked to human or organizational owner |

---

## Responsibility Management Interface

Responsibility should not exist only in architecture documents or policy files. It must be visible and manageable inside the operational workflow — at runtime, not only in retrospect.

See also: [`concepts/responsibility-management-interface.md`](../concepts/responsibility-management-interface.md)

A responsibility management interface makes the following visible and actionable.

### Action boundary indicator

Shows whether the current action is within the AI's permitted execution scope or requires human authorization.

### Approval state

Every AI-supported action exists in one of the core RABA states defined in [`docs/approval-state-specification.md`](../docs/approval-state-specification.md):

| State | Meaning |
|---|---|
| `DRAFT` | AI has produced output; no external action has occurred. The workflow remains under the responsibility of the system or workflow owner. |
| `RECOMMEND` | AI output is surfaced to a human or policy route for review; decision is pending. |
| `AUTHORIZED` | A human role or approved policy has authorized the action to proceed, but execution may not yet have completed. |
| `EXECUTED` | The authorized action has completed and produced an external effect. |
| `ESCALATE` | Action exceeds AI authority or approval threshold; routed to a human owner. |

### Escalation ownership

Each escalation has a named recipient role and a defined response expectation.

### Human accountability display

Shows who is currently responsible for the action. The AI system does not hold responsibility; a human role always does.

### Decision log link

Each action state transition is linked to a business decision log entry. The technical trace and the accountability record are connected, not separate.

### Auditability

The history of state transitions, approvals, authorizations, executions, escalations, and decisions is retained and queryable.

---

## Responsibility Observability

Technical observability and responsibility observability address different questions. Both are necessary. They are not the same.

### Technical observability asks:

- What happened in the system?
- Which model, tool, agent, or API was used?
- What was the trace, latency, or token count?
- Did the system perform as expected technically?

### Responsibility observability asks:

- Who was responsible for this action?
- Was the AI permitted to act at this point?
- Was approval required — and was it obtained?
- Was the action authorized before execution?
- Was the authorized action actually executed?
- Was escalation required — and did it occur?
- Was an action boundary crossed?
- Is the business decision properly logged and attributable?
- Can an auditor reconstruct the accountability chain without ambiguity?

A system with full technical observability and no responsibility observability may be well-monitored but ungovernable.

Agentic AI systems do not only need technical observability. They need responsibility observability.

RABA defines responsibility observability as a first-class architectural requirement.

---

## Use Case: AI Prepares and Sends a Customer Email

This workflow demonstrates how approval states change the accountability structure of the same AI action.

**Scenario:** An AI agent drafts a customer-facing email based on a support case.

### State: `DRAFT`

The AI generates the email content. Nothing is sent. No external effect occurs. The output exists only within the system. No external action has occurred, but the workflow remains under the responsibility of the system or workflow owner.

**RABA record:** Draft produced by AI system `[ID]`. No external action executed. Workflow owner: `[Role]`.

### State: `RECOMMEND`

The AI surfaces the draft to a human agent for review. The human reads the draft and decides whether to approve, modify, reject, or escalate it. The AI has no further authority. Accountability for the decision rests with the human reviewer or defined approval route.

**RABA record:** Draft produced by AI system `[ID]`, reviewed by `[Role]`, decision pending.

### State: `AUTHORIZED`

A human approver reviews the draft and authorizes sending. The approval decision, approver identity, timestamp, approval scope, and email content are recorded in the decision log.

**RABA record:** Email authorized by `[Role]` at `[timestamp]`. Authorization record `[ID]` created. Execution may proceed within the approved scope.

### State: `EXECUTED`

The system sends the authorized email. The execution result, external reference, timestamp, linked authorization record, and technical trace are recorded.

**RABA record:** Email sent following authorization `[ID]`. Decision log entry `[ID]` linked to technical trace `[ID]` and external reference `[ID]`.

### State: `ESCALATE`

The AI detects that the email involves a sensitive topic, a high-value customer, or a legal risk condition that exceeds its permitted authority. Instead of proceeding, it escalates to the defined escalation owner — for example, a compliance officer or senior account manager. No email is sent until the escalation is resolved.

**RABA record:** Escalation triggered by AI system `[ID]` at `[timestamp]`. Routed to `[Role]`. Reason: `[condition]`. Resolution pending.

---

## Conclusion

Agentic AI architecture maps describe how AI systems are built, coordinated, and operated. They are useful engineering references. They are not governance frameworks.

RABA adds the responsibility layer that makes production AI systems governable, accountable, and auditable:

- Action boundaries defined before deployment
- Approval states embedded in the workflow
- Named accountability at every decision point
- Clear distinction between recommendation, authorization, and completed execution
- Delegated AI identity linked to human or organizational ownership
- Escalation paths defined and enforced at runtime
- Technical traces linked to business decision records
- Responsibility observability as a first-class operational requirement

A system without this layer may operate correctly in engineering terms while being unaccountable in organizational terms. In regulated environments, high-impact workflows, or any context where AI actions have real-world consequences, that gap is not acceptable.

The goal of RABA is not to slow down AI adoption. It is to make AI adoption sustainable — by ensuring that as AI acts faster, human responsibility remains clear.

---

*This document is part of the RABA open project. Contributions, critique, and real-world use cases are welcome.*
