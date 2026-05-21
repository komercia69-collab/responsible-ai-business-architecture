# Customer Email Gateway Policy Example

This file describes a minimal Governance Gateway policy for an AI-assisted customer email workflow.

The goal is to show how the RABA state model can be applied before a customer-facing action creates an external effect.

---

## State Model

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

---

## Policy Intent

The AI system may draft or recommend customer emails.

A customer-facing email must not be treated as executed merely because it was approved.

RABA separates:

- `AUTHORIZED`: the action is permitted;
- `EXECUTED`: the action actually happened in an external system.

---

## Example Rules

| Rule | Condition | Gateway state | Responsibility output |
|---|---|---|---|
| Draft allowed | AI creates text without external effect | `DRAFT` | `ActionDrafted` event |
| Recommend for review | AI proposes a customer response | `RECOMMEND` | recommendation record and decision context |
| Authorize send | accountable reviewer approves sending | `AUTHORIZED` | decision log and `ApprovalGranted` event |
| Record send result | external mail system confirms sending | `EXECUTED` | decision log update and execution event |
| Escalate high-risk message | high-impact or unclear customer-facing content | `ESCALATE` | escalation owner and decision log |

---

## Minimum Decision Log Fields

A governed customer-email action should record at least:

- decision log id;
- timestamp;
- workflow id;
- action id;
- agent id;
- action type;
- action boundary;
- approval state;
- accountable human or role;
- outcome.

---

## Notes

This example is intentionally small.

It is not a production policy engine. It is a readable policy artifact for testing the RABA implementation chain.
