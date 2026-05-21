# Customer Email Governance Simulation

This is a minimal proof artifact for the current RABA implementation chain.

It shows how an AI-assisted customer email action can move through the RABA state model without confusing authorization with execution.

---

## Scenario

A customer-support AI assistant drafts a response to a customer.

The response may be useful, but it is customer-facing and can create an external effect if sent.

RABA requires the workflow to distinguish between:

- drafting the email;
- recommending it to a human;
- authorizing it for sending;
- actually sending it;
- escalating it if risk or authority is unclear.

---

## State Path

```text
AI drafts email
→ Governance Gateway classifies it as DRAFT
→ AI recommends the response for review
→ Governance Gateway classifies it as RECOMMEND
→ human reviewer approves the action
→ state becomes AUTHORIZED
→ external mail system sends the email
→ state becomes EXECUTED
→ decision log and responsibility events are available for audit
```

If the message is high-impact or outside the action boundary, the path becomes:

```text
RECOMMEND → ESCALATE
```

---

## RABA Chain Demonstrated

```text
Action Boundary
  ↓
Approval State Specification
  ↓
Governance Gateway
  ↓
Decision Log
  ↓
Responsibility Event Stream
  ↓
Responsibility Management Interface / Audit View
```

---

## Example Governance Steps

| Step | Input | Gateway output | Artifact |
|---|---|---|---|
| 1 | AI drafts a customer email | `DRAFT` | `ActionDrafted` event |
| 2 | AI proposes the draft as a recommended response | `RECOMMEND` | decision context |
| 3 | accountable reviewer approves sending | `AUTHORIZED` | decision log + `ApprovalGranted` event |
| 4 | email is actually sent by external system | `EXECUTED` | execution record + responsibility event |
| 5 | risk or authority is unclear | `ESCALATE` | escalation record |

---

## Related Files

- [`examples/gateway-policy-examples/customer-email-policy.md`](../../examples/gateway-policy-examples/customer-email-policy.md)
- [`examples/responsibility-event-examples/`](../../examples/responsibility-event-examples/)
- [`examples/decision-log-examples/`](../../examples/decision-log-examples/)
- [`schemas/decision-log-entry.schema.json`](../../schemas/decision-log-entry.schema.json)
- [`schemas/responsibility-event.schema.json`](../../schemas/responsibility-event.schema.json)
- [`docs/approval-state-specification.md`](../../docs/approval-state-specification.md)
- [`docs/governance-gateway-implementation.md`](../../docs/governance-gateway-implementation.md)

---

## Why This Exists

This simulation is intentionally small.

Its purpose is to demonstrate that RABA is no longer only a concept. It now has a visible path from governance principle to state model, policy example, decision log, responsibility events and audit view.

> AI may be probabilistic. Responsibility must not be.
