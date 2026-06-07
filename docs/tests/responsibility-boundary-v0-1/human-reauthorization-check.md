# Human Reauthorization Check

**Status:** Test Check Draft  
**Canonical status:** Non-canonical  
**Use:** Responsibility Boundary Test Pack v0.1 governance check  

This check is draft test vocabulary only.

It does not define legal duties, sanctions, enforcement mechanisms, accepted RABA architecture, an adopted RABA human-approval standard, implementation requirements, interface requirements, conformance criteria, or certification criteria.

Final architectural approval remains with the Human Owner.

---

## Purpose

This check tests whether a human reauthorization request is procedurally meaningful after a reference-frame change.

It rejects the idea that human approval is meaningful merely because a person clicked a generic button.

The check does not claim to measure or prove a person's internal understanding.

It only asks whether the system can support an informed and accountable human decision by presenting the required decision conditions.

---

## Core principle under review

```text
Human approval is not a checkbox.
```

A generic `Approve` click is insufficient where:

- the approved reference frame has changed;
- the material diff is hidden;
- the authority basis is unclear;
- consequences or reversibility are not visible;
- the person cannot refuse, escalate, or request evidence;
- the acknowledgement is not bound to the exact current state.

---

## Procedurally Supported Human Reauthorization

The following formula is a canonicalization candidate only.

It is not accepted RABA canon.

It requires separate Human Owner review before any architectural adoption.

```text
Procedurally Supported Human Reauthorization
=
Material diff presented
+
Relevant evidence accessible
+
Consequences and duties presented
+
Real authority and decision options
+
Sufficient opportunity to refuse or escalate
+
Traceable acknowledgement bound to the current state
```

This formula is useful as a test check.

It must not be treated as an adopted RABA standard, legal standard, interface requirement, or certification criterion.

---

## Required procedural conditions

For the fictional supplier-payment fixture, reauthorization is procedurally supported only if the responsible person receives:

- the proposed action;
- the current reference frame;
- the previous approved reference frame;
- the concrete diff;
- relevant evidence and provenance;
- materiality assessment and basis;
- consequence and reversibility context;
- role duties and accountability notice;
- available decision options;
- ability to reject, redirect, request evidence, request independent review, or escalate;
- acknowledgement bound to the exact current state.

These are draft test conditions only.

They do not define production UI, product behavior, legal sufficiency, or implementation requirements.

---

## What the system may evidence

A system may provide evidence that:

- required information was displayed;
- relevant evidence was available;
- decision options were presented;
- the person had an assigned role and authority basis;
- the acknowledgement was bound to the exact state;
- a timestamped decision record exists.

This procedural evidence may support later review.

It does not prove internal understanding, intent, consent quality, legal accountability, or moral responsibility.

---

## Failure signals

The check should fail within the draft fixture if:

- the human sees only a generic approval request;
- the material diff is hidden or reduced to a hash mismatch;
- responsibility is implied but no responsible role is assigned;
- consequences or reversibility are hidden;
- the person is pressured by SLA, automation momentum, or sanctions language;
- the system implies automatic guilt or punishment;
- the person cannot refuse, escalate, or request evidence;
- the acknowledgement is not bound to the exact current state;
- a Boolean challenge is treated as proof of understanding.

---

## Accountability enforceability boundary

`credible` enforceability, where used in draft fixtures or examples, is a draft test label only.

It does not assert legal enforceability in any real organization.

It does not mean automatic punishment.

It only means that, for the draft fixture, a later reviewer should be able to see:

- who had the role;
- what duty was assigned;
- what information was available;
- what decision was recorded;
- what uncertainty remained;
- what review route existed.

Actual accountability consequences require established, fair, proportionate, domain-specific, and legally valid review processes.

Those are outside this draft test.

---

## Boundary

This check does not create canon.

It does not approve Human Review State, Responsibility Field, any UI pattern, any legal duty, any sanction mechanism, any conformance test, or any certification process.

It preserves a candidate concept for future review only.
