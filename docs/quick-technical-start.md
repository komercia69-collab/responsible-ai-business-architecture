# Quick Technical Start

This guide is for developers, architects, and technical reviewers who want to understand RABA through a minimal working path.

The shortest useful path is:

```text
one action
→ one policy check
→ one gateway decision
→ one decision log
→ one responsibility event
→ one fail-safe rule
```

---

## 1. Read the Runtime Model

Start with:

- [`docs/governance-gateway-runtime-model.md`](governance-gateway-runtime-model.md)

This explains what the Governance Gateway is at runtime.

It can be implemented as:

- a policy-evaluation library;
- middleware;
- a service layer;
- a workflow checkpoint;
- a proxy in front of tool execution.

The key idea is simple:

> before an AI-supported action creates an external effect, the gateway evaluates the action boundary, approval state, responsibility record, and escalation path.

---

## 2. Understand One Action Lifecycle

Then read:

- [`docs/action-lifecycle-example.md`](action-lifecycle-example.md)

This shows how one AI-supported action moves through:

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

The most important distinction is:

```text
AUTHORIZED ≠ EXECUTED
```

Authorization means the action is permitted.

Execution means the action actually produced an external effect.

---

## 3. Review Fail-Safe Behavior

Then read:

- [`docs/fail-safe-governance-behavior.md`](fail-safe-governance-behavior.md)

Core rule:

> No silent execution when responsibility cannot be established.

If the gateway, policy, approval state, decision log, or responsibility owner is missing, the workflow should hold, block, or escalate instead of silently continuing.

---

## 4. Run the Starter Kit

From the repository root:

```bash
python starter-kit/raba_gateway.py
```

The starter kit demonstrates:

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

Relevant files:

- [`starter-kit/README.md`](../starter-kit/README.md)
- [`starter-kit/raba_gateway.py`](../starter-kit/raba_gateway.py)
- [`starter-kit/sample_actions.txt`](../starter-kit/sample_actions.txt)
- [`starter-kit/sample_policy.txt`](../starter-kit/sample_policy.txt)
- [`starter-kit/decision_log_output.txt`](../starter-kit/decision_log_output.txt)
- [`starter-kit/responsibility_events_output.txt`](../starter-kit/responsibility_events_output.txt)

---

## 5. Inspect the Schemas and Examples

Machine-readable schemas:

- [`schemas/decision-log-entry.schema.json`](../schemas/decision-log-entry.schema.json)
- [`schemas/responsibility-event.schema.json`](../schemas/responsibility-event.schema.json)

Examples:

- [`examples/gateway-policy-examples/`](../examples/gateway-policy-examples/)
- [`examples/responsibility-event-examples/`](../examples/responsibility-event-examples/)
- [`examples/decision-log-examples/`](../examples/decision-log-examples/)
- [`demo/customer-email-governance-simulation/`](../demo/customer-email-governance-simulation/)

---

## What You Should Understand After 10 Minutes

After this path, you should understand:

1. where the Governance Gateway sits;
2. how approval states work;
3. why `AUTHORIZED` and `EXECUTED` are separate;
4. how a decision log differs from a technical trace;
5. how responsibility events support observability;
6. what should happen when governance context is missing.

---

## Core Principle

> AI may be probabilistic. Responsibility must not be.
