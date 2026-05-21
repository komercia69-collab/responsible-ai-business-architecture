# Decision Log Examples

This folder contains minimal examples of RABA Decision Log entries.

A decision log is the business accountability record for an AI-supported action. It links organizational responsibility to the technical trace.

## Examples

| File | State | Purpose |
|---|---|---|
| [`customer-email-authorized.json`](customer-email-authorized.json) | `AUTHORIZED` | A human role has authorized a customer-facing email before execution |
| [`customer-email-executed.json`](customer-email-executed.json) | `EXECUTED` | The authorized email has been sent and linked to the execution record |
| [`customer-email-escalated.json`](customer-email-escalated.json) | `ESCALATE` | A sensitive customer email was routed to compliance before execution |

## Related schema

- [`schemas/decision-log-entry.schema.json`](../../schemas/decision-log-entry.schema.json)

## Related documents

- [`docs/decision-log-schema.md`](../../docs/decision-log-schema.md)
- [`docs/approval-state-specification.md`](../../docs/approval-state-specification.md)
- [`docs/governance-gateway-implementation.md`](../../docs/governance-gateway-implementation.md)
- [`pilots/customer-communication-pilot.md`](../../pilots/customer-communication-pilot.md)
