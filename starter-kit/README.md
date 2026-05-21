# RABA Starter Kit

This starter kit is a minimal technical demonstration of the RABA implementation chain.

It shows how one AI-supported action can be evaluated by a Governance Gateway before it creates an external effect.

No external dependencies are required.

---

## What This Demonstrates

```text
AI action request
  ↓
policy check
  ↓
gateway decision
  ↓
decision log entry
  ↓
responsibility event
```

The starter kit uses the RABA state model:

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

---

## Files

| File | Purpose |
|---|---|
| `raba_gateway.py` | Minimal Python gateway simulation |
| `sample_actions.txt` | Example action requests in a simple line-based format |
| `sample_policy.txt` | Minimal readable policy configuration |
| `decision_log_output.txt` | Example business accountability output |
| `responsibility_events_output.txt` | Example responsibility event output |

---

## How to Run

From the repository root:

```bash
python starter-kit/raba_gateway.py
```

The script reads the sample actions and policy, evaluates each action, and prints:

- the gateway decision;
- the approval state;
- the reason;
- the decision log entry;
- the responsibility event.

---

## Example Flow

```text
Action: customer message draft
Gateway: DRAFT
Event: ActionDrafted

Action: customer message recommendation
Gateway: RECOMMEND
Event: ActionRecommended

Action: customer message delivery with approval
Gateway: AUTHORIZED
Event: ApprovalGranted

Action: customer message delivery after external completion
Gateway: EXECUTED
Event: ActionExecuted

Action: unclear boundary
Gateway: ESCALATE
Event: EscalationTriggered
```

---

## Why This Starter Kit Exists

The goal is not to provide a production-ready gateway.

The goal is to make RABA understandable for developers in a few minutes:

```text
one action
one policy
one gateway decision
one decision log
one responsibility event
one fail-safe rule
```

---

## Related Documents

- [`docs/governance-gateway-runtime-model.md`](../docs/governance-gateway-runtime-model.md)
- [`docs/action-lifecycle-example.md`](../docs/action-lifecycle-example.md)
- [`docs/fail-safe-governance-behavior.md`](../docs/fail-safe-governance-behavior.md)
- [`docs/approval-state-specification.md`](../docs/approval-state-specification.md)
- [`docs/decision-log-schema.md`](../docs/decision-log-schema.md)
- [`implementation/responsibility-event-stream.md`](../implementation/responsibility-event-stream.md)

---

## Important Limitation

This starter kit is intentionally small and educational.

A real implementation would require proper security, identity, authorization, persistence, monitoring, testing, and organizational review.
