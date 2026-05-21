# Responsibility Management Interface

> AI may be probabilistic. Responsibility must not be only documented — it must be visible and manageable at runtime.

## Purpose

The **Responsibility Management Interface** is a proposed operational layer for AI workflows.

Its goal is to make responsibility visible, assignable, reviewable, and auditable inside the workflow environment itself — not only in external governance documents.

RABA defines the governance architecture: action boundaries, approval states, escalation ownership, human accountability, decision logs, responsibility events, and auditability.

A runtime platform can enforce these constructs through workflow nodes, approval gates, tool gateways, trace spans, policy checks, decision logs, responsibility events, and signed audit logs.

The Responsibility Management Interface is the bridge between these two levels.

## Core idea

Governance should not remain only in policies, PDFs, or compliance documents.

For production AI systems, responsibility must be operationalized in the interface where AI actions are drafted, recommended, authorized, executed, escalated, and audited.

In other words:

> Responsibility needs a user interface.

## What the interface should show

A Responsibility Management Interface should make the following visible.

### 1. Action boundaries

Where the AI is still assisting, and where it begins to act.

Examples:

- drafting a message;
- recommending a decision;
- authorizing a tool execution;
- sending an email;
- writing to a CRM;
- triggering a payment;
- creating a legally or financially relevant action.

The interface should clearly show when a workflow crosses from recommendation into authorization, and from authorization into completed execution.

### 2. Approval states

RABA distinguishes more than simple allow / block logic.

A practical responsibility interface should support the core states defined in [`docs/approval-state-specification.md`](../docs/approval-state-specification.md):

- **DRAFT** — AI may create a draft or identify a possible action; no external effect has occurred.
- **RECOMMEND** — AI may recommend an action to a human or policy route; decision is pending.
- **AUTHORIZED** — a human role or approved policy has authorized the action to proceed, but execution may not yet have completed.
- **EXECUTED** — the authorized action has completed and produced an external effect.
- **ESCALATE** — the case must be transferred to a responsible human or higher authority.

These states can be implemented as workflow primitives, approval nodes, authorization records, execution records, or policy-controlled transitions.

### 3. Escalation ownership

The interface should show who owns the escalation path.

This includes:

- who must be notified;
- who must approve or authorize;
- who can override;
- who is accountable if the action proceeds;
- when escalation is mandatory rather than optional;
- what happens if escalation is not acknowledged.

### 4. Human accountability

A technical system can record what happened.

RABA adds the question:

> Who was the accountable human for this AI-supported action?

The interface should connect each relevant AI action to a named human role, owner, or decision authority.

This is especially important when AI systems move from drafting and recommendation into authorization and operational execution.

### 5. Technical trace linked to business decision log

AI runtime platforms often produce technical traces: model calls, tool calls, inputs, outputs, latency, policy decisions, and workflow execution steps.

RABA requires a higher-level business accountability record:

- what decision was being supported;
- what the AI recommended;
- which boundary was reached;
- who approved, authorized, rejected or escalated the action;
- why the decision was made;
- what was escalated;
- what was authorized;
- what was finally executed;
- whether the executed action matched the authorization.

The Responsibility Management Interface should connect the **technical trace** with the **business decision log**.

### 6. Auditability

The interface should support later review by:

- management;
- compliance teams;
- legal teams;
- auditors;
- regulators;
- internal governance boards.

Auditability should not only answer: “What did the system do?”

It should also answer:

- Who was responsible?
- Was approval required?
- Was authorization given?
- Did execution occur?
- Did the executed action match the authorization?
- Was the action boundary crossed?
- Was escalation required?
- Was escalation completed?
- Which policy or governance rule applied?

## Minimum viable interface

A minimum useful Responsibility Management Interface should show six elements for any governed AI-supported action:

1. **Current state** — DRAFT, RECOMMEND, AUTHORIZED, EXECUTED, ESCALATE, or an extended state such as BLOCKED or FAILED.
2. **Action boundary** — what boundary the action is approaching or crossing.
3. **Accountable owner** — the human role or owner responsible for the action or workflow.
4. **Required decision** — approve, authorize, reject, escalate, revoke, re-approve, or execute.
5. **Decision log link** — the business accountability record for the decision.
6. **Technical trace link** — the technical trace that supports later reconstruction.

Without these six elements, responsibility may exist in policy but remain invisible in operation.

## Interface components

A practical interface could include:

| Component | Purpose |
|---|---|
| State badge | Shows current RABA state |
| Boundary indicator | Shows the relevant action, context, data, financial, legal or communication boundary |
| Owner panel | Shows workflow owner, reviewer, authorizer and escalation owner |
| Decision panel | Captures approve, authorize, reject, escalate, revoke or re-approve actions |
| Reason field | Captures human-readable decision reason |
| Risk signal | Shows risk level and trigger conditions |
| Trace link | Links to model/tool/runtime trace |
| Decision log link | Links to business accountability record |
| Event history | Shows responsibility events for the action |
| Expiration indicator | Shows whether authorization expires or needs re-approval |
| Escalation panel | Shows route, owner, deadline and resolution |

## Relationship to RABA

Within RABA, the Responsibility Management Interface can become the operational expression of governance architecture.

RABA provides the vocabulary:

- action boundaries;
- approval states;
- governance gateways;
- decision logs;
- responsibility events;
- escalation ownership;
- human accountability;
- technical trace vs business decision log;
- auditability.

The interface makes this vocabulary visible and usable in real workflows.

## Relationship to runtime infrastructure

A runtime AI workflow platform could support this concept through primitives such as:

- workflow nodes;
- approval nodes;
- authorization records;
- execution records;
- tool gateway controls;
- policy decisions;
- trace spans;
- custom attributes;
- decision logs;
- responsibility events;
- signed audit logs;
- deployment / project / organization-level governance settings.

This makes the Responsibility Management Interface a possible bridge between RABA as a governance architecture and runtime platforms that enforce AI workflows in production.

## Relationship to rubber-stamp risk

The interface should not encourage blind approval.

For medium, high or critical actions, the interface should support:

- decision reason capture;
- review context visibility;
- review time tracking;
- escalation option;
- approval expiration;
- warning when approval creates accountability;
- visibility into repeated approval patterns where appropriate.

See also: [`docs/rubber-stamp-risk.md`](../docs/rubber-stamp-risk.md)

## Why this matters

Many AI governance approaches remain document-centered.

They define principles, policies, and responsibilities, but the actual AI workflow interface often does not show who is responsible, where the action boundary is, or when escalation is required.

The Responsibility Management Interface addresses this gap.

It turns responsibility from a static document into an operational control surface.

## Possible joint framing

A useful framing for further work:

> Runtime + Governance Architecture for Production AI

This framing connects two complementary layers:

1. **Governance architecture** — what responsibility requires.
2. **Runtime infrastructure** — how responsibility is enforced and recorded.

The Responsibility Management Interface sits between them as the human-operational layer.

## Open questions

- Which RABA constructs should become visible interface elements?
- Which constructs should become enforceable workflow primitives?
- How should approval states be represented technically?
- How should technical traces be mapped to business decision logs?
- How should escalation ownership be assigned and audited?
- What is the minimum useful version of this interface for real teams?
- How should the interface reduce rubber-stamp approval without creating excessive friction?
- Could this become a shared vocabulary for governance and runtime AI platforms?
