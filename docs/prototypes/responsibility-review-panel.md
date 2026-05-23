# Responsibility Review Panel Prototype

This document explains the first RABA interface prototype:

- [`demo/responsibility-review-panel.html`](../../demo/responsibility-review-panel.html)

The prototype demonstrates how RABA can represent responsible action review without becoming a static compliance questionnaire or a human surveillance interface.

---

## Purpose

The Responsibility Review Panel shows the interaction space between:

```text
AI-supported action
responsible human role
baseline compliance
runtime governance
decision log
```

It is designed to help a responsible subject decide whether a concrete AI-supported action may move forward, escalate, be deferred, be rejected or require more context.

---

## Core Distinction

The prototype visually separates two layers:

```text
Baseline Compliance
Runtime Governance
```

### Baseline Compliance

Baseline Compliance defines the static policy floor.

It answers:

```text
Is this category of action allowed, restricted, prohibited or allowed with conditions?
```

Example shown in the prototype:

```text
Status: allowed with conditions
Sources: GDPR / EU AI Act / Internal Customer Communication Policy
Required controls: human review, decision log, escalation path
```

### Runtime Governance

Runtime Governance controls the concrete crossing.

It answers:

```text
Can this specific action responsibly move forward now?
```

Example shown in the prototype:

```text
Approval State: RECOMMEND
Boundary: external customer communication
Risk: medium
Uncertainty: known and bounded
Allowed paths: AUTHORIZE / ESCALATE / REQUEST_CONTEXT / DEFER / REJECT
```

---

## Interface Sections

The prototype contains the following sections:

1. Action Statement
2. Runtime Governance
3. Responsible Subject
4. Baseline Compliance
5. Human Readiness Check
6. Decision Options
7. Decision Log Preview

---

## Responsible Subject

The prototype does not assess the person.

It records responsibility through role-based context:

```text
Acting role
Authority
Continuity
Exit path
```

This follows the project rule:

```text
Readiness is declared through accountable role-based action,
not inferred through behavioral monitoring.
```

---

## Decision Options

The prototype intentionally avoids making `Authorize` the only normal path.

Valid governance outcomes include:

```text
Authorize
Escalate
Request more context
Defer decision
Reject
Request second review
```

This protects against rubber-stamp approval and supports responsible refusal.

---

## Relationship to Core RABA Documents

This prototype is connected to:

- [`../human-ai-interaction-space.md`](../human-ai-interaction-space.md)
- [`../human-readiness-context.md`](../human-readiness-context.md)
- [`../responsibility-boundary-under-uncertainty.md`](../responsibility-boundary-under-uncertainty.md)
- [`../responsibility-review-panel-requirements.md`](../responsibility-review-panel-requirements.md)
- [`../compliance-checker-vs-runtime-governance.md`](../compliance-checker-vs-runtime-governance.md)
- [`../rubber-stamp-risk.md`](../rubber-stamp-risk.md)

---

## One-Sentence Summary

> The Responsibility Review Panel shows how baseline compliance, runtime governance, responsible subject, uncertainty and decision logging can be made visible at the moment AI-supported action approaches business effect.
