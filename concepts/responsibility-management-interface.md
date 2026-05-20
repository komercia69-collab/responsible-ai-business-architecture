# Responsibility Management Interface

> AI may be probabilistic. Responsibility must not be only documented — it must be visible and manageable at runtime.

## Purpose

The **Responsibility Management Interface** is a proposed operational layer for AI workflows.

Its goal is to make responsibility visible, assignable, reviewable, and auditable inside the workflow environment itself — not only in external governance documents.

RABA defines the governance architecture: action boundaries, approval states, escalation ownership, human accountability, and auditability.

A runtime platform can enforce these constructs through workflow nodes, approval gates, tool gateways, trace spans, policy checks, and signed audit logs.

The Responsibility Management Interface is the bridge between these two levels.

## Core idea

Governance should not remain only in policies, PDFs, or compliance documents.

For production AI systems, responsibility must be operationalized in the interface where AI actions are reviewed, approved, executed, escalated, and audited.

In other words:

> Responsibility needs a user interface.

## What the interface should show

A Responsibility Management Interface should make the following visible:

### 1. Action boundaries

Where the AI is still assisting, and where it begins to act.

Examples:

- drafting a message;
- recommending a decision;
- sending an email;
- writing to a CRM;
- triggering a payment;
- creating a legally or financially relevant action.

The interface should clearly show when a workflow crosses from recommendation into execution.

### 2. Approval states

RABA distinguishes more than simple allow / block logic.

A practical responsibility interface should support states such as:

- **draft** — AI may create a draft, but not decide or act;
- **recommend** — AI may recommend an action to a human;
- **execute** — AI or the workflow may execute within defined limits;
- **escalate** — the case must be transferred to a responsible human or higher authority.

These states can be implemented as workflow primitives, approval nodes, or policy-controlled transitions.

### 3. Escalation ownership

The interface should show who owns the escalation path.

This includes:

- who must be notified;
- who must approve;
- who can override;
- who is accountable if the action proceeds;
- when escalation is mandatory rather than optional.

### 4. Human accountability

A technical system can record what happened.

RABA adds the question:

> Who was the accountable human for this AI-supported action?

The interface should connect each relevant AI action to a named human role, owner, or decision authority.

This is especially important when AI systems move from drafting and recommendation into operational execution.

### 5. Technical trace linked to business decision log

AI runtime platforms often produce technical traces: model calls, tool calls, inputs, outputs, latency, policy decisions, and workflow execution steps.

RABA requires a higher-level business accountability record:

- what decision was being supported;
- what the AI recommended;
- which boundary was reached;
- who approved or rejected the action;
- why the decision was made;
- what was escalated;
- what was finally executed.

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
- Was approval given?
- Was the action boundary crossed?
- Was escalation required?
- Was escalation completed?
- Which policy or governance rule applied?

## Relationship to RABA

Within RABA, the Responsibility Management Interface can become the operational expression of governance architecture.

RABA provides the vocabulary:

- action boundaries;
- approval states;
- escalation ownership;
- human accountability;
- technical trace vs business decision log;
- auditability.

The interface makes this vocabulary visible and usable in real workflows.

## Relationship to runtime infrastructure

A runtime AI workflow platform could support this concept through primitives such as:

- workflow nodes;
- approval nodes;
- tool gateway controls;
- policy decisions;
- trace spans;
- custom attributes;
- signed audit logs;
- deployment / project / organization-level governance settings.

This makes the Responsibility Management Interface a possible bridge between RABA as a governance architecture and runtime platforms that enforce AI workflows in production.

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
- Could this become a shared vocabulary for governance and runtime AI platforms?
