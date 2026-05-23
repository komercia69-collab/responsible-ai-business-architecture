# Responsibility Boundary Under Uncertainty

This document defines an important RABA principle:

> Responsibility does not require certainty. Responsibility requires governed uncertainty.

In AI-supported workflows, outcomes often include a degree of uncertainty.

RABA does not assume that responsible actors can perfectly predict every result.

Instead, it focuses on whether uncertainty is understood, bounded, accepted, logged and governed before an action becomes an external business effect.

---

## Core Formula

```text
The boundary of responsibility is not the boundary of certainty.
It is the boundary of authorized risk.
```

A responsible subject does not need to know everything.

But they must know enough to authorize the risk they are accepting.

---

## Why This Matters

If responsibility required complete certainty, then responsibility would disappear in most AI-assisted or agentic systems.

That would be the wrong conclusion.

Responsible governance should not ask:

```text
Can we guarantee the result?
```

It should ask:

```text
Do we understand the action, boundary, risk, authority and follow-up responsibility enough to authorize it?
```

---

## Five Responsibility Layers

RABA separates responsibility under uncertainty into five layers.

### 1. Responsibility for intention

Who initiated the action and why?

The responsible subject should understand the purpose of the proposed action.

### 2. Responsibility for acceptable risk

The responsible subject does not guarantee every detail of the outcome.

They accept or reject a defined level of risk.

### 3. Responsibility for action boundary

The responsible subject should understand what boundary the action may cross:

- internal draft boundary;
- external communication boundary;
- system-of-record boundary;
- financial or operational boundary;
- destructive or irreversible boundary.

### 4. Responsibility for decision process

In uncertain systems, accountability attaches to the governed decision process, not to perfect prediction.

A responsible process includes context, review, escalation path, decision log and traceability.

### 5. Responsibility after execution

Responsibility does not end at approval.

After execution, the organization may still need monitoring, correction, escalation, explanation, recovery or policy improvement.

---

## State Model Interpretation

RABA approval states can be interpreted through the lens of uncertainty.

| State | Meaning under uncertainty |
|---|---|
| `DRAFT` | uncertainty may be explored without external effect |
| `RECOMMEND` | AI may propose an action and surface expected effect or risk |
| `AUTHORIZED` | responsible subject accepts the risk within a defined boundary |
| `EXECUTED` | the action produced an effect and post-action responsibility continues |
| `ESCALATE` | uncertainty exceeds the current authority, context or acceptable risk boundary |

Core rule:

```text
If uncertainty is understood and acceptable, the action may be authorized.
If uncertainty is unclear or exceeds the allowed boundary, the action should escalate.
```

---

## Interface Requirement

Before an action moves to `AUTHORIZED`, the interface should help the responsible subject answer:

- What is the intended action?
- What boundary does it cross?
- What external effect may occur?
- What is the expected risk level?
- Is the risk within the subject's authority?
- Is enough context available?
- Is escalation required?
- What must be monitored after execution?

The interface should not ask the human to guarantee the outcome.

It should help the human decide whether the uncertainty is governable.

---

## Relationship to Governance Gateway

The Governance Gateway should not treat uncertainty as a binary error.

It should evaluate whether uncertainty is:

| Condition | Gateway response |
|---|---|
| low and bounded | allow draft or recommendation |
| understood and within authority | allow authorization |
| unclear | request more context or escalate |
| above threshold | escalate |
| outside policy | block or reject according to implementation |

---

## Relationship to Decision Log

The Decision Log should record not only the final decision, but also the uncertainty accepted at the time of authorization.

Useful fields may include:

- accepted risk level;
- known uncertainty;
- action boundary;
- authorizing role;
- reason for accepting risk;
- escalation status;
- monitoring requirement;
- follow-up owner.

---

## Anti-Patterns

Avoid:

- pretending that AI-supported outcomes are fully predictable;
- treating uncertainty as a reason to remove accountability;
- asking humans to approve without showing risk or boundary;
- recording only technical logs without decision rationale;
- considering responsibility finished once the action is executed;
- turning human approval into a rubber stamp.

---

## Design Principle

```text
Do not require certainty.
Require visible, bounded and accepted uncertainty.
```

---

## One-Sentence Summary

> RABA defines responsibility not as perfect control over outcomes, but as accountable authorization of bounded uncertainty before AI-supported action becomes business effect.
