# System Integration Map

This document shows how the main RABA components connect as an operational system.

---

## Phase 1 Scope

Phase 1 focuses on governing action progression after an action request has been formed.

Important boundary:

```text
Input Integrity Governance is out of scope for Phase 1.
```

Phase 1 does not fully cover source data quality, upstream context validation, or provenance review.

It focuses on the governance path after a structured action request exists.

---

## System Chain

```text
AI Agent / Assistant
  ↓
Action Request
  ↓
Action Boundary
  ↓
Governance Gateway + Policy
  ↓
Approval State
  ↓
Decision Log
  ↓
Responsibility Event Stream
  ↓
Human Review / Escalation Path
  ↓
Business System / Workflow
```

---

## Component Responsibilities

| Component | Responsibility |
|---|---|
| AI Agent / Assistant | prepares or proposes an action request |
| Action Request | structured representation of the proposed action |
| Action Boundary | defines whether the action is inside an allowed scope |
| Governance Gateway | evaluates the action request against policy |
| Policy | defines rules, required review, escalation triggers and responsible parties |
| Approval State | represents where the action is in the governed lifecycle |
| Decision Log | records the business reason and responsible role |
| Responsibility Event Stream | emits responsibility-related lifecycle events |
| Human Review / Escalation Path | handles actions requiring review or clarification |
| Business System / Workflow | receives actions that have passed the required governance path |

---

## Approval State Model

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

Key distinction:

```text
AUTHORIZED ≠ EXECUTED
```

Authorization means the action is permitted.

Execution means the action has completed in the business workflow.

---

## Responsible Party by Stage

| Stage | Typical responsible party |
|---|---|
| DRAFT | agent operator or workflow owner |
| RECOMMEND | workflow owner or reviewer |
| AUTHORIZED | accountable human role |
| EXECUTED | system executor plus accountable business role |
| ESCALATE | escalation owner |

---

## Escalation Loop

```text
ESCALATE
  ↓
escalation owner review
  ↓
clarify boundary / reject / request changes / authorize
  ↓
update Decision Log
  ↓
emit Responsibility Event
  ↓
return to RECOMMEND, AUTHORIZED, or closed outcome
```

---

## Related Documents

- [`docs/approval-state-specification.md`](approval-state-specification.md)
- [`docs/governance-gateway-runtime-model.md`](governance-gateway-runtime-model.md)
- [`docs/governance-gateway-implementation.md`](governance-gateway-implementation.md)
- [`docs/decision-log-schema.md`](decision-log-schema.md)
- [`implementation/responsibility-event-stream.md`](../implementation/responsibility-event-stream.md)
- [`examples/gateway-policy-examples/`](../examples/gateway-policy-examples/)
- [`starter-kit/README.md`](../starter-kit/README.md)
