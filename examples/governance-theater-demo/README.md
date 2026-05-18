# Governance Theater Demo

## Purpose

This demo shows a governance anti-pattern:

> governance that looks complete on paper but fails to control real operational behavior.

It is intentionally different from the working Governance Gateway demo.

The goal is not to provide a good implementation.

The goal is to show how a policy can sound responsible while leaving critical gaps in enforcement, monitoring, escalation and accountability.

---

## What This Demonstrates

A governance policy may include impressive language:

- human oversight;
- escalation paths;
- decision logs;
- risk classification;
- approval requirements;
- audit readiness;
- responsible AI principles.

But if these controls do not affect runtime behavior, the system may still fail.

This is governance theater.

---

## Files

| File | Purpose |
|---|---|
| `policy-that-looks-good.json` | A governance policy that sounds comprehensive but has weak or ambiguous controls |
| `workflow-that-breaks-it.json` | Example AI agent actions that technically fit the policy but violate its intent |
| `failure-analysis.md` | Explains where the policy breaks under operational pressure |
| `comparison.md` | Compares this anti-pattern to the working Governance Gateway demo |

---

## Scenario

An organization deploys an AI operations assistant.

The assistant can:

- classify incoming issues;
- draft operational messages;
- recommend urgency;
- update internal records;
- suggest case closure;
- route escalations.

Leadership wants to show that the system is governed.

A policy is created.

It includes oversight language, logs and escalation rules.

But the policy does not enforce clear runtime checks.

---

## Anti-Pattern Flow

```text
AI agent proposes action
        ↓
Policy looks like it covers the case
        ↓
No executable gateway blocks or routes the action
        ↓
Action proceeds because it is not explicitly forbidden
        ↓
Decision is logged but not reviewed
        ↓
Governance appears present but does not change behavior
```

---

## Key Lesson

A governance policy is not enough.

A dashboard is not enough.

A log is not enough.

A human oversight statement is not enough.

Governance must change what happens when AI acts.

---

## Compare With Working Demo

Working proof-layer demo:

```text
examples/governance-gateway-demo/
```

That demo includes:

```text
AI agent action
        ↓
Governance policy check
        ↓
ALLOW / BLOCK / REQUIRE_APPROVAL / ESCALATE
        ↓
Decision log
```

This anti-pattern demo shows what happens when that control point is missing.

---

## Related Failure Pattern

See:

```text
docs/failure-patterns/governance-theater.md
```

---

## Key Principle

> If governance does not affect action, it is not governance.
>
> It is theater.
