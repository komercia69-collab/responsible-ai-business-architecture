# RABA Starter Kit

This starter kit is a minimal technical demonstration of the RABA implementation chain.

It shows how one AI-supported action can be evaluated by a Governance Gateway before it creates an external effect.

No external dependencies are required.

---

## What This Demonstrates

```text
Mock AI action request
  ↓
JSON action contract
  ↓
external JSON policy check
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
| `mock_ai_agent.py` | Generates example AI action requests as JSON |
| `raba_gateway.py` | Minimal Python gateway simulation using JSON action and policy contracts |
| `sample_actions.json` | Example action requests using a JSON contract |
| `sample_policy.json` | External JSON policy with policy id, version, rules and corridors |
| `sample_actions.txt` | Older line-based sample retained for comparison |
| `sample_policy.txt` | Older line-based policy retained for comparison |
| `decision_log_output.txt` | Example business accountability output |
| `responsibility_events_output.txt` | Example responsibility event output |

---

## How to Run

From the repository root:

```bash
python starter-kit/mock_ai_agent.py
python starter-kit/raba_gateway.py
```

The mock agent writes action requests to `sample_actions.json`.

The gateway reads:

- `sample_actions.json`
- `sample_policy.json`

Then it prints:

- the gateway decision;
- the approval state;
- the corridor;
- the policy version;
- the matched rule;
- the decision log entry;
- the responsibility event.

---

## JSON Action Contract

Each action request includes fields such as:

```text
action_id
workflow_id
agent_id
action_type
requested_operation
external_effect
action_boundary
responsible_role
risk_level
business_summary
```

When a human review has occurred, the action may also include:

```text
review_state
authorizer_reference
```

The starter kit records a short `auth_hash` derived from the authorizer reference in the decision log.

This is only a demonstration mechanism, not a production identity system.

---

## Policy Contract

The starter kit now uses an external JSON policy file:

```text
starter-kit/sample_policy.json
```

The policy includes:

- `policy_id`;
- `policy_version`;
- corridors;
- rules;
- matched rule ids;
- escalation behavior.

This keeps the gateway closer to a stateless evaluation component instead of hardcoding all policy logic directly into the gateway.

---

## Green Corridor and Red Corridor

The sample policy demonstrates two simple paths.

```text
Green Corridor
```

Low-risk actions that do not create external effects, such as draft or recommend.

```text
Red Corridor
```

Actions that require escalation because the boundary, responsibility owner or impact level requires review.

This makes the starter kit easier to understand for both developers and pilot partners.

---

## Example Flow

```text
Action: customer message draft
Gateway: DRAFT
Corridor: green
Event: ActionDrafted

Action: customer message recommendation
Gateway: RECOMMEND
Corridor: green
Event: ActionRecommended

Action: customer message delivery with authorizer reference
Gateway: AUTHORIZED
Corridor: controlled
Event: ApprovalGranted

Action: customer message delivery after external completion
Gateway: EXECUTED
Corridor: controlled
Event: ActionExecuted

Action: unclear boundary or high impact
Gateway: ESCALATE
Corridor: red
Event: EscalationTriggered
```

---

## Escalation Payload

When the gateway returns `ESCALATE`, it also returns a minimal escalation payload:

```text
action_id
workflow_id
risk_level
action_boundary
responsible_role
reason
suggested_escalation_owner
```

This does not implement a full human-in-the-loop UI.

It only shows what information should be passed to a human reviewer, workflow owner or risk reviewer.

---

## What Is Deferred

The starter kit intentionally does not yet implement:

- rollback procedure for completed external actions;
- async gateway architecture;
- real identity and access management;
- full escalation UI, email workflow or approval dashboard;
- persistent storage;
- production-grade cryptographic signing;
- monitoring or alerting.

These are important, but they belong to later implementation stages.

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
