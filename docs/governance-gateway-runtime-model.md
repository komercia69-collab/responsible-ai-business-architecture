# Governance Gateway Runtime Model

The RABA Governance Gateway is an architectural control point between AI intent and governed business action.

It is not limited to one mandatory product form.

A Governance Gateway can be implemented as:

- a policy-evaluation library;
- a middleware layer;
- a service boundary;
- a workflow checkpoint;
- a proxy in front of tool execution;
- an approval-state controller inside an AI orchestration runtime.

The required function is always the same:

> before an AI-supported action creates an external effect, the gateway evaluates whether the action is inside an approved boundary, which approval state applies, and what responsibility record must be produced.

---

## Runtime Position

A Governance Gateway sits between:

```text
AI output / agent intent
        ↓
Governance Gateway
        ↓
Business system / tool / workflow action
```

It does not replace the business system.

It does not replace identity and access management.

It does not replace compliance review.

It adds an operational responsibility checkpoint before AI-supported actions move from recommendation toward external effect.

---

## Minimal Runtime Responsibility

At runtime, the gateway should answer:

1. What is the proposed action?
2. Is the action inside a defined action boundary?
3. Is the action only a draft, a recommendation, an authorized action, or an executed action?
4. Does the action require human review or escalation?
5. Is the accountable human, role, or escalation owner visible?
6. What decision log entry is required?
7. What responsibility event should be emitted?
8. Should the action proceed, wait, or escalate?

---

## Implementation Forms

### 1. Library

A team can implement the gateway as a small library inside an application.

This is useful for prototypes, proofs of concept, and narrow workflow pilots.

```text
application code → gateway function → policy result → action handling
```

### 2. Middleware

A gateway can run as middleware inside an AI-enabled workflow or service.

This is useful when multiple AI actions should pass through a shared policy layer.

```text
agent runtime → gateway middleware → business operation
```

### 3. Service Layer

A gateway can run as a standalone service.

This is useful when several teams, tools, or workflows need a shared governance checkpoint.

```text
AI workflow → gateway API → decision result → business system
```

### 4. Tool Proxy

A gateway can sit in front of tools that an AI agent may call.

This is especially relevant for MCP-style tool execution, where tool calls may create real external effects.

```text
agent tool request → gateway proxy → approved tool call / escalation
```

### 5. Workflow Checkpoint

A gateway can be represented as a checkpoint in BPMN, ticketing, CRM, ERP, or case-management workflows.

This is useful when the organization already has strong process infrastructure and RABA should complement it rather than replace it.

```text
workflow state → RABA checkpoint → next workflow state
```

---

## What the Gateway Should Not Do

A RABA Governance Gateway should not be treated as:

- a complete legal compliance engine;
- a complete security boundary;
- a replacement for authentication or authorization systems;
- a substitute for organizational accountability;
- a generic AI safety guarantee.

It is a responsibility-control point.

---

## AUTHORIZED vs EXECUTED

The gateway must distinguish between authorization and execution.

```text
AUTHORIZED ≠ EXECUTED
```

`AUTHORIZED` means the action is permitted.

`EXECUTED` means the action actually produced an external effect.

This distinction matters because a business action may be approved but not yet performed, or performed by an external system after approval.

RABA treats both as separate accountability moments.

---

## Escalation Feedback Loop

The gateway is not only a one-way filter.

When an action enters `ESCALATE`, the workflow should create a feedback loop:

```text
ESCALATE
  ↓
escalation owner review
  ↓
policy clarification / rejection / approval
  ↓
updated decision log
  ↓
return to RECOMMEND, AUTHORIZED, or closed outcome
```

Escalation is therefore a governed state transition, not an informal human fallback.

---

## Relationship to Existing Systems

RABA should complement existing enterprise systems.

It can integrate with:

- CI/CD pipelines;
- BPMN workflows;
- CRM systems;
- ERP systems;
- ticketing systems;
- AI orchestration frameworks;
- MCP tool layers;
- audit and observability platforms.

The purpose is not to replace these systems.

The purpose is to add an explicit responsibility layer where AI-supported actions cross into business impact.

---

## Minimum Viable Gateway Output

A minimal gateway output should include:

- gateway decision;
- approval state;
- reason;
- required next step;
- decision log requirement;
- responsibility event type;
- escalation owner if needed.

Example shape:

```text
state: RECOMMEND
reason: customer-facing action requires human review
next_step: request approval
log_required: true
event_type: ActionRecommended
```

---

## Core Principle

> No AI-supported external effect should proceed without a visible responsibility state.
