# Human Readiness Context

This document defines an interface-level requirement for RABA:

> Responsible actions should be handled by subjects of responsibility who are able to accept and carry responsibility across the relevant interaction with the system.

This is not a new core concept.

It strengthens the Responsibility Management Interface, rubber-stamp risk handling, approval states and escalation design.

---

## Core Idea

Human approval is only meaningful when the human has:

```text
context
capacity
authority
continuity
```

A person may be formally present in the workflow but not actually ready to accept responsibility for a decision.

RABA should not treat every human click as meaningful accountability.

---

## Subject of Responsibility

A subject of responsibility is a person or role that can accept and carry responsibility for an action within a defined system interaction.

A subject of responsibility should have:

| Requirement | Meaning |
|---|---|
| Context | understands what is being approved, rejected, deferred or escalated |
| Capacity | has enough operational readiness to make the decision |
| Authority | is allowed to make the decision |
| Continuity | can remain responsible across the relevant workflow window |
| Visibility | can see the action boundary, expected effect and risk level |
| Exit path | can escalate, defer, reject or request more context |

---

## Why This Matters

Human-in-the-loop can fail when the human becomes only a formal checkpoint.

Examples:

- the reviewer approves mechanically;
- the reviewer does not understand the operational effect;
- the reviewer lacks authority;
- the reviewer lacks context;
- the interface hides risk or expected impact;
- the workflow pressures the reviewer into quick approval;
- the system offers no clear escalation or defer option.

This creates rubber-stamp approval risk.

---

## Interface Requirement

A Responsibility Management Interface should help the responsible subject understand:

- what action is proposed;
- what boundary may be crossed;
- what external effect may occur;
- what risk is being accepted;
- who remains responsible after execution;
- what evidence supports the decision;
- whether escalation or second review is required.

The interface should support responsible refusal, not only approval.

Possible options:

```text
Authorize
Escalate
Request more context
Defer decision
Reject
Request second review
```

---

## Operational Readiness, Not Surveillance

RABA should support human responsibility, not monitor or punish human vulnerability.

This requirement should not be implemented as personal profiling or medical assessment.

The goal is to support responsible decision conditions.

Acceptable signals are operational, such as:

- missing context;
- unclear boundary;
- high-impact action;
- repeated rapid approvals;
- lack of authority;
- second-review requirement;
- explicit user-selected low-energy or defer mode.

---

## Relationship to Responsibility Boundary Under Uncertainty

Human readiness is especially important when outcomes contain uncertainty.

A responsible subject does not need to know everything.

But they must know enough to authorize the risk they are accepting.

See:

- [`docs/responsibility-boundary-under-uncertainty.md`](responsibility-boundary-under-uncertainty.md)

---

## Anti-Patterns

Avoid:

- treating a button click as full accountability;
- hiding uncertainty or risk from the reviewer;
- requiring approval without an escalation path;
- giving responsibility to a role without authority;
- making the reviewer accountable for outcomes they could not reasonably understand;
- confusing formal approval with real responsibility.

---

## One-Sentence Summary

> Human approval becomes meaningful only when the human or role has context, capacity, authority and continuity to carry responsibility for the action.
