# Fail-Safe Governance Behavior

This document defines the default RABA behavior when responsibility cannot be established at runtime.

The purpose is to prevent silent execution of AI-supported actions when the governance layer is unavailable, incomplete, or uncertain.

---

## Core Rule

> No silent execution when responsibility cannot be established.

If the system cannot determine the action boundary, approval state, accountable role, required log, or escalation path, the action should not continue as if governance succeeded.

---

## Default Fail-Safe Modes

RABA supports three fail-safe outcomes:

| Outcome | Meaning | Typical use |
|---|---|---|
| `HOLD` | pause the action until governance context is available | medium-impact workflows |
| `BLOCK` | prevent the action from proceeding | high-impact or irreversible workflows |
| `ESCALATE` | route the action to an escalation owner | unclear boundary, missing approval, or missing responsibility owner |

A production implementation may use different names, but the principle should remain the same.

---

## Failure Conditions

A workflow should enter fail-safe behavior when any of the following occurs:

1. Governance Gateway is unavailable.
2. Policy cannot be loaded.
3. Policy does not cover the proposed action.
4. Approval state is missing or invalid.
5. Responsible role cannot be identified.
6. Required decision log cannot be written.
7. Required responsibility event cannot be emitted.
8. External execution result cannot be verified.
9. Action boundary is unclear.
10. Escalation owner cannot be determined.

---

## Recommended Behavior by Condition

| Condition | Recommended behavior | Reason |
|---|---|---|
| Gateway unavailable | `HOLD` or `BLOCK` | governance decision cannot be made |
| Policy missing | `HOLD` or `ESCALATE` | action boundary is undefined |
| Approval state invalid | `ESCALATE` | state transition cannot be trusted |
| Responsible role missing | `ESCALATE` | accountability is not visible |
| Decision log unavailable | `HOLD` | business accountability record cannot be created |
| Responsibility event unavailable | `HOLD` or degraded monitoring mode | observability may be incomplete |
| External result unclear | `ESCALATE` | execution state cannot be confirmed |
| High-impact action with incomplete governance | `BLOCK` or `ESCALATE` | external effect should not proceed without clear responsibility |

---

## Fail-Open vs Fail-Closed

A key design question is whether the workflow should fail open or fail closed.

RABA recommends a conservative default:

```text
If the action may create external business impact, fail closed.
```

Fail closed means the action is held, blocked, or escalated instead of silently proceeding.

For low-impact internal drafts, a degraded mode may be acceptable if no external effect is produced.

---

## Degraded Mode

A degraded mode may be acceptable only when:

- the action remains internal;
- no external effect is produced;
- the action stays in `DRAFT` or `RECOMMEND`;
- missing governance context is clearly marked;
- execution remains unavailable until governance is restored.

Example:

```text
state: RECOMMEND
governance_status: degraded
execution_allowed: false
next_step: wait_for_gateway_or_review
```

---

## Decision Log Failure

If the workflow requires a decision log but cannot write one, the action should not move to `EXECUTED`.

A possible safe behavior is:

```text
state: AUTHORIZED
execution_allowed: false
reason: decision log unavailable
next_step: hold until accountability record can be created
```

This prevents a gap where an external action occurs without a business accountability record.

---

## Event Stream Failure

If the Responsibility Event Stream is unavailable, the workflow should decide whether the action can proceed based on impact.

For high-impact actions, event failure should usually trigger `HOLD` or `ESCALATE`.

For low-impact internal actions, the workflow may continue in degraded mode if a later event backfill is possible.

---

## Escalation Owner Missing

If an action requires escalation but no escalation owner is defined, the workflow should not pretend escalation succeeded.

Recommended behavior:

```text
state: ESCALATE
escalation_status: unresolved
execution_allowed: false
reason: escalation owner missing
```

---

## Minimum Fail-Safe Record

Every fail-safe outcome should record:

- timestamp;
- action id;
- workflow id;
- current approval state;
- proposed next state;
- failure condition;
- fail-safe outcome;
- responsible role if available;
- next required step.

---

## Relationship to Security

Fail-safe governance behavior is not a replacement for security controls.

It should complement:

- authentication;
- authorization;
- access control;
- monitoring;
- incident response;
- audit logging;
- business continuity planning.

RABA focuses specifically on responsibility continuity when AI-supported actions move toward business impact.

---

## Core Principle

> When responsibility is uncertain, autonomy should not silently increase.
