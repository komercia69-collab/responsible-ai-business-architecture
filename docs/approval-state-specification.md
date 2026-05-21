# RABA Approval State Specification

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — core specification  
**Core principle:** AI may be probabilistic. Responsibility must not be.

---

## Purpose

Approval states are the core operational model of RABA.

They define where an AI-supported action sits in the workflow before, during, and after it becomes an external business effect.

The goal of this specification is to remove ambiguity around AI-supported actions by making each state explicit, auditable, and governable.

This document defines:

- core approval states;
- transition rules;
- authorization requirements;
- required decision-log records;
- planned extended states;
- how approval states relate to action boundaries, governance gateways, and responsibility events.

---

## Core state model

RABA uses five core operational states:

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

The original early RABA model used `EXECUTE` as a broad state. This specification splits that meaning into two distinct states:

- `AUTHORIZED` — execution is permitted but may not yet have happened;
- `EXECUTED` — execution has completed and produced an external effect.

This distinction is essential for auditability.

An action that was authorized but failed, revoked, expired, or never executed is not the same as an action that was completed.

---

## State definitions

### `DRAFT`

The AI system has produced output or identified a possible action.

No external effect has occurred.

Examples:

- drafting an email;
- proposing a CRM update;
- identifying a possible payment action;
- preparing a document;
- generating a recommendation.

**Responsibility:** The workflow remains under the responsibility of the system or workflow owner.

**Authorization required:** No execution authorization is required because no external action has occurred.

**Required record:** At minimum, the system should be able to record that a draft was created and by which agent or workflow.

---

### `RECOMMEND`

The AI system surfaces a proposed action for human or policy review.

The AI may explain the proposed action, expected effect, risk level, and reason.

No execution is permitted in this state.

Examples:

- recommending that an email be sent;
- recommending that a task be created;
- recommending a data correction;
- recommending that a payment be reviewed;
- recommending escalation due to risk.

**Responsibility:** The accountable human reviewer, role, or policy owner becomes responsible for deciding whether the recommendation should move forward.

**Authorization required:** Human review, policy review, or explicit approval rule.

**Required record:** Proposed action, agent ID, recommendation reason, reviewer or policy route, timestamp, and risk classification.

---

### `AUTHORIZED`

A human role, accountable owner, or approved policy has authorized the action to proceed.

Execution is permitted but has not necessarily completed.

Examples:

- a reviewer approves sending an email;
- a manager approves a CRM write;
- a finance owner approves a payment below threshold;
- a compliance officer approves a sensitive customer communication.

**Responsibility:** The authorizing human role, accountable owner, or policy authority is responsible for the decision to allow execution.

**Authorization required:** Explicit approval, valid delegated authority, or approved policy condition.

**Required record:** Authorizer identity or role, approval timestamp, decision reason, action parameters, policy reference, and linked technical trace if available.

---

### `EXECUTED`

The authorized action has completed and produced an external effect.

Examples:

- an email was sent;
- a CRM record was updated;
- a document was published;
- a payment was submitted;
- a support ticket was closed;
- a workflow step wrote to an external system.

**Responsibility:** Accountability remains with the authorizer and the relevant workflow owner. The system owner is responsible for trace integrity and operational correctness.

**Authorization required:** Execution must reference a valid prior authorization unless the workflow is explicitly classified as auto-executable.

**Required record:** Execution timestamp, outcome, external system reference, action result, linked authorization record, linked technical trace, and decision log ID.

---

### `ESCALATE`

The action exceeds the AI system's permitted authority, the reviewer’s authority, or the workflow’s risk threshold.

Execution is blocked until the escalation is resolved.

Examples:

- high-value transaction;
- legal or regulated communication;
- sensitive customer dispute;
- destructive data operation;
- uncertain authority boundary;
- suspicious tool behavior;
- sampling request involving sensitive context.

**Responsibility:** The named escalation owner or role is responsible for resolving the case.

**Authorization required:** Elevated role authorization, rejection, modification, or formal resolution.

**Required record:** Escalation reason, trigger condition, escalation owner, timestamp, status, resolution, and any final approval or rejection.

---

## Planned extended states

The five core states are intentionally minimal.

Real implementations may need additional states.

| State | Meaning | Why it matters |
|---|---|---|
| `REJECTED` | A recommendation or approval request was rejected | Distinguishes non-execution from unresolved review |
| `BLOCKED` | The governance gateway prevented execution | Useful for policy denial, prohibited tools, or boundary violations |
| `FAILED` | Execution was attempted but did not complete | Distinguishes technical failure from governance denial |
| `REVOKED` | Authorization was withdrawn before execution | Important when approval changes before action occurs |
| `EXPIRED` | Authorization window elapsed before execution | Prevents stale approval from enabling later action |
| `REAPPROVAL_REQUIRED` | Material change invalidated earlier approval | Useful for schema changes, tool behavior drift, new risk context |

These states should be added only when an implementation needs them.

RABA’s recommended minimal model is:

```text
DRAFT / RECOMMEND / AUTHORIZED / EXECUTED / ESCALATE
```

---

## Transition rules

### Normal path

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
```

This is the standard path for a human-reviewed AI-supported action.

### Low-risk path

```text
DRAFT → EXECUTED
```

Allowed only for actions explicitly classified as low-risk and auto-executable.

Examples:

- read-only retrieval;
- internal summarization;
- non-sensitive metadata lookup;
- low-risk internal draft generation.

The decision to allow this path must be defined before deployment.

### Escalation path

```text
DRAFT → RECOMMEND → ESCALATE → AUTHORIZED → EXECUTED
```

Used when risk, uncertainty, policy boundary, or authority threshold requires elevated review.

### Blocked path

```text
DRAFT → RECOMMEND → BLOCKED
```

Used when the governance gateway or reviewer determines that the action must not proceed.

### Re-approval path

```text
AUTHORIZED → REAPPROVAL_REQUIRED → AUTHORIZED
```

Used when a material change occurs before execution.

Examples:

- tool schema changed;
- action parameters changed;
- risk level changed;
- approval expired;
- customer status changed;
- business threshold changed.

---

## Required transition records

Every state transition should generate a responsibility event and, where relevant, a decision log entry.

| Transition | Required record |
|---|---|
| `DRAFT` created | agent ID, workflow ID, draft content reference, timestamp |
| `DRAFT → RECOMMEND` | proposed action, risk level, action boundary, reviewer route |
| `RECOMMEND → AUTHORIZED` | authorizer role/ID, decision reason, timestamp, approved parameters |
| `AUTHORIZED → EXECUTED` | execution result, external system reference, linked authorization |
| `RECOMMEND → ESCALATE` | escalation reason, owner, trigger condition, timestamp |
| `ESCALATE → AUTHORIZED` | escalation resolver, resolution reason, approval scope |
| `AUTHORIZED → REVOKED` | revoker, reason, timestamp |
| `AUTHORIZED → EXPIRED` | expiration rule, timestamp, original authorization |
| Any state → `BLOCKED` | blocking rule, policy reference, reason |
| `AUTHORIZED → FAILED` | failure reason, system trace, retry status |

---

## Relationship to action boundaries

Approval states are meaningful only when action boundaries are defined.

An action boundary defines where AI assistance becomes operational action.

Examples:

- generating an email draft is inside the draft boundary;
- sending the email crosses an external communication boundary;
- updating a CRM record crosses a system-of-record boundary;
- submitting a payment crosses a financial execution boundary;
- deleting a file crosses a destructive action boundary.

Each action boundary should define:

- allowed AI behavior;
- required approval state;
- escalation threshold;
- accountable owner;
- decision-log requirement;
- retention and audit requirement.

---

## Relationship to governance gateway

A RABA governance gateway should evaluate state transitions before execution occurs.

The gateway should answer:

- What state is the action currently in?
- What state is being requested?
- Is the transition allowed?
- Who can authorize it?
- Is escalation required?
- Has approval expired?
- Has the tool, context, or risk level changed?
- What must be recorded?

The gateway should not simply allow or block.

It should manage transition from one responsibility state to another.

---

## Relationship to responsibility event stream

Approval states should produce responsibility events.

Example event types:

```text
ActionDrafted
ActionRecommended
ApprovalRequested
ApprovalGranted
AuthorizationCreated
ExecutionStarted
ExecutionCompleted
EscalationTriggered
EscalationResolved
AuthorizationRevoked
AuthorizationExpired
ExecutionFailed
DecisionLogged
AuditTraceSigned
```

A responsibility event stream makes the approval-state history reconstructable.

---

## Minimal implementation guidance

A minimal implementation should support:

1. A state field on each AI-supported action.
2. A transition function that validates allowed movement between states.
3. A decision log entry for every authorization, escalation, execution, rejection, or block.
4. A technical trace ID linked to the business decision record.
5. A human owner or accountable role for every non-draft external action.
6. An expiration mechanism for authorization.
7. A way to detect when re-approval is required.

---

## Open questions

- Should `AUTHORIZED` always require a human, or can policy authorize some low-risk actions?
- When does auto-execution become unacceptable?
- How should approval expiration windows be defined?
- Which state transitions must be immutable?
- Should `ESCALATE` be a state, a route, or both?
- How should multi-agent approval states be represented?
- How should responsibility be assigned when multiple humans participate in approval?
- How should state models differ by risk level or regulated domain?

---

## Conclusion

Approval states are the operational core of RABA.

They turn AI governance from a general principle into a stateful workflow model.

The key distinction is simple:

> A recommendation is not authorization. Authorization is not execution. Execution is not accountability unless it is recorded.

RABA uses approval states to make those distinctions visible, enforceable, and auditable.
