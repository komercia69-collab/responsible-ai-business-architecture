# Responsibility Event Examples

This folder contains minimal example events for the RABA Responsibility Event Stream.

These examples are intended to help engineers and reviewers understand how RABA concepts can become structured data.

## Examples

| File | Event type | Purpose |
|---|---|---|
| [`action-drafted.json`](action-drafted.json) | `ActionDrafted` | AI created a draft or identified a possible action before external effect |
| [`approval-granted.json`](approval-granted.json) | `ApprovalGranted` | Human role authorized an AI-supported action |
| [`escalation-triggered.json`](escalation-triggered.json) | `EscalationTriggered` | Action exceeded authority or risk threshold and was routed to escalation owner |

## Related schema

- [`schemas/responsibility-event.schema.json`](../../schemas/responsibility-event.schema.json)

## Related documents

- [`implementation/responsibility-event-stream.md`](../../implementation/responsibility-event-stream.md)
- [`docs/approval-state-specification.md`](../../docs/approval-state-specification.md)
- [`docs/decision-log-schema.md`](../../docs/decision-log-schema.md)
- [`docs/governance-gateway-implementation.md`](../../docs/governance-gateway-implementation.md)
