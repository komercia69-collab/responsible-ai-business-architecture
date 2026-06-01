# Decision Log Minimum Governance Fields — Tranche 1.1 Draft

**Status:** PR-ready draft material  
**Canonical status:** Non-canonical  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  

> This file is not canonical architecture.  
> It does not adopt a Decision Log schema.  
> It defines candidate minimum governance elements for review only.  
> Final architectural approval belongs to the Human Owner.

---

## 1. Purpose

Decision Log must remain a governance record, not a generic audit log.

A technical audit log may show that an event happened.

A RABA Decision Log should show why consequential AI-supported use was allowed, limited, refused, escalated, or blocked, under whose responsibility, and within what scope.

---

## 2. Minimum governance elements for review

Candidate non-negotiable governance elements:

```text
named human
scope of responsibility
timestamp of acceptance
```

Working rule:

```text
If a record does not show who accepted responsibility, for what scope, and when, it is not a Decision Log. It is an audit log.
```

---

## 3. Candidate decision questions

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

---

## 4. Boundary from technical audit logs

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

## 5. Governance boundary

This file is:

- non-canonical;
- draft material only;
- not a schema adoption;
- not a Decision Log entry;
- not implementation guidance;
- not public positioning.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
