# Decision Log — Tranche 1.1 Candidate

**Status:** Canonical candidate  
**Canonical status:** Pending Human Owner approval, PR review, and merge  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  

> This document is a canonical candidate only.  
> It does not adopt a full Decision Log schema.  
> It defines candidate minimum governance elements for review only.

---

## 1. Purpose

Decision Log must remain a governance record, not a generic audit log.

A technical audit log may show that an event happened.

A RABA Decision Log should show why consequential AI-supported use was allowed, limited, refused, escalated, or blocked, under whose responsibility, and within what scope.

---

## 2. Minimum governance elements

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

## 5. Relationship to Action Boundary

Action Boundary handling may indicate that a Decision Log entry is required.

However, an Action Boundary signal alone is not a Decision Log.

A Decision Log requires an identifiable responsibility acceptance record with a named human, defined scope, and timestamp of acceptance.

---

## 6. Governance boundary

This document is:

- a canonical candidate only;
- not final canon;
- not a full Decision Log schema adoption;
- not implementation guidance;
- not public positioning.

Canonical adoption requires Human Owner approval, PR review, merge, and a separate decision trail.
