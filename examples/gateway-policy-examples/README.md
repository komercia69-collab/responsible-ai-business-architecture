# Gateway Policy Examples

This folder contains minimal policy examples for the RABA Governance Gateway.

The purpose is to show how governance concepts can become explicit policy inputs for AI-assisted or agentic workflows.

These examples are not production-ready access-control systems. They are small, readable policy artifacts that help reviewers and implementers understand how RABA approval states can be assigned before an AI-supported action creates an external effect.

---

## Current Examples

| File | Workflow | Purpose |
|---|---|---|
| [`customer-email-policy.md`](customer-email-policy.md) | Customer communication | Demonstrates how an AI-drafted customer email moves from `DRAFT` or `RECOMMEND` toward `AUTHORIZED`, `EXECUTED` or `ESCALATE` |
| [`high-risk-action-policy.md`](high-risk-action-policy.md) | Generic high-risk action | Demonstrates escalation-first handling for irreversible, sensitive or high-impact actions |

---

## How These Policies Relate to RABA

A gateway policy should help answer:

1. Is the action inside an allowed action boundary?
2. Is the action only a draft or recommendation?
3. Does the action require human authorization?
4. Has authorization already happened?
5. Would execution create an external effect?
6. Does the action require escalation?
7. What decision log and responsibility events should be produced?

---

## State Model Used

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

`AUTHORIZED` means the action is permitted but may not yet have produced an external effect.

`EXECUTED` means the action has actually produced an external effect.

---

## Related Documents

- [`docs/approval-state-specification.md`](../../docs/approval-state-specification.md)
- [`docs/governance-gateway-implementation.md`](../../docs/governance-gateway-implementation.md)
- [`docs/decision-log-schema.md`](../../docs/decision-log-schema.md)
- [`implementation/responsibility-event-stream.md`](../../implementation/responsibility-event-stream.md)
- [`examples/responsibility-event-examples/`](../responsibility-event-examples/)
- [`examples/decision-log-examples/`](../decision-log-examples/)
