# Responsibility Review Panel Requirements

This document defines minimum interface requirements for a RABA Responsibility Review Panel.

The panel should help a responsible subject make a role-based decision under uncertainty without turning the interface into human surveillance.

---

## Core Principle

```text
The interface scaffolds the decision.
It does not assess the person.
```

Readiness is declarative, role-based and action-specific.

It is not inferred through behavioral monitoring.

---

## Purpose

The Responsibility Review Panel should make the space between AI suggestion and business action visible.

It should show:

- what the AI-supported action is;
- what boundary it may cross;
- what uncertainty remains;
- what risk may be accepted;
- which role is responsible;
- what response paths are available.

---

## Five Required Interface Elements

### 1. Action Statement

A concise statement of the proposed action.

It should answer:

```text
What is being proposed?
What would happen if this proceeds?
Which workflow or business system is involved?
```

---

### 2. Boundary Signal

A clear indication of the action boundary.

Examples:

```text
Internal draft only
External communication
System-of-record update
Financial operation
High-impact or irreversible action
```

The boundary signal helps the reviewer understand whether the action remains internal or may create an external business effect.

---

### 3. Uncertainty State

The panel should show uncertainty as a governance condition, not as a prediction failure.

Possible states:

```text
Low and bounded
Known and accepted
Requires more context
Above current authority
Escalation required
```

---

### 4. Risk Acceptance Statement

Before authorization, the interface should show what risk is being accepted and by which role.

Example:

```text
By authorizing this action as [role], you accept the documented uncertainty and risk level for this workflow step.
```

This should be connected to the Decision Log.

---

### 5. Response Options

The interface should present multiple legitimate paths.

Minimum options:

```text
Authorize
Escalate
Request more context
Defer decision
Reject
Request second review
```

`Authorize` should not be designed as the only normal outcome.

---

## Friction by Design

For high-impact, unclear-boundary or grey-zone actions, the interface should add appropriate friction.

Examples:

- require a short justification note;
- request a second review;
- require context confirmation;
- route to escalation owner;
- prevent authorization until boundary or authority is clarified.

This friction should be proportional.

Low-risk internal actions should not be overloaded with unnecessary review steps.

---

## Grey-Zone Decision Log Fields

For grey-zone decisions, useful additional fields may include:

```text
declared_uncertainty_state
chosen_mitigation_path
justification_reference
```

These fields should support reviewability without making the first prototype too complex.

---

## Anti-Patterns

Avoid:

- assessing the person instead of structuring the decision;
- making `Authorize` visually dominant for high-risk decisions;
- hiding uncertainty;
- hiding the action boundary;
- forcing approval when context is missing;
- treating human approval as meaningful when authority is absent;
- turning readiness into personal monitoring.

---

## Relationship to Existing RABA Documents

This panel connects to:

- [`docs/human-readiness-context.md`](human-readiness-context.md)
- [`docs/responsibility-boundary-under-uncertainty.md`](responsibility-boundary-under-uncertainty.md)
- [`docs/human-ai-interaction-space.md`](human-ai-interaction-space.md)
- [`docs/approval-state-specification.md`](approval-state-specification.md)
- [`docs/rubber-stamp-risk.md`](rubber-stamp-risk.md)
- [`concepts/responsibility-management-interface.md`](../concepts/responsibility-management-interface.md)

---

## One-Sentence Summary

> A Responsibility Review Panel should make action, boundary, uncertainty, risk and response options visible so that responsibility is accepted through a role-based decision, not inferred from a human click.
