# Decision Log Minimum Governance Elements — Tranche 1.1 Candidate

**Status:** Canonicalization candidate  
**Canonical status:** Not adopted  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  
**Human Owner status:** Final architectural approval remains with the Human Owner

> This file is a candidate proposal only.  
> It does not adopt a Decision Log schema.  
> It does not create implementation guidance, public positioning, or merge approval.  
> Canonical adoption requires separate Human Owner approval and PR/merge decision trail.

---

## 1. Purpose

This candidate proposes that a RABA Decision Log should be treated as a governance record, not a generic audit log.

A technical audit log may show that an event happened.

A RABA Decision Log should show why consequential AI-supported use was allowed, limited, refused, escalated, or blocked, under whose responsibility, and within what scope.

This purpose statement is candidate material for review, not adopted canon.

---

## 2. Candidate minimum governance elements

Candidate non-negotiable governance elements for review:

```text
named human
scope of responsibility
timestamp of acceptance
```

These elements are proposed as minimum governance elements.

They do not by themselves adopt a full Decision Log schema.

---

## 3. Working rule

```text
If a record does not show who accepted responsibility, for what scope, and when, it is not a Decision Log. It is an audit log.
```

Russian formulation:

```text
Если запись не показывает, кто принял ответственность, за какой объём ответственности и когда, это не Decision Log. Это audit log.
```

This working rule is candidate review material, not implementation guidance.

---

## 4. Candidate decision questions

A Decision Log entry should be able to answer:

1. What action or boundary was involved?
2. Why was action allowed, limited, refused, escalated, or blocked?
3. Who had authority?
4. Who accepted responsibility?
5. What was the scope of responsibility?
6. When was responsibility accepted?
7. What evidence or source reference was used?
8. What limits, uncertainty, or conditions remained?
9. Which Responsibility Event Stream event, if any, links to this decision?

These questions are review prompts, not a schema definition.

---

## 5. Boundary from technical audit logs

A record is not a RABA Decision Log merely because it includes:

- event timestamp;
- system actor;
- status change;
- technical trace;
- request / response metadata;
- model output.

Those may be useful audit records.

They do not by themselves prove responsibility acceptance.

---

## 6. Schema boundary

This Tranche 1.1 file does not adopt a full Decision Log schema.

It proposes minimum governance elements that any later Decision Log schema or implementation should preserve if adopted by separate Human Owner approval.

---

## 7. Non-adoption boundary

This file is:

- a candidate proposal only;
- not adopted canon;
- not a Decision Log schema;
- not a Decision Log entry;
- not implementation guidance;
- not public positioning;
- not merge approval.

Final architectural approval belongs to the Human Owner.
