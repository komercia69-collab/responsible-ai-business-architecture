# Decision Log Minimum Governance Elements — Tranche 1.1 Candidate

**Status:** Canonicalization candidate  
**Canonical status:** Non-canonical  
**Tranche:** 1.1 — Data and Boundary Canon Readiness

> This file is a candidate for review.  
> It is not a Decision Log schema adoption.  
> It is not a Decision Log entry.  
> It is not implementation guidance.  
> It is not runtime control, event-family adoption, validation claim, compliance claim, certification claim, audit-readiness claim, public-standard claim, public-positioning claim, provider claim, partnership claim, pilot claim, or commercial claim.

---

## 1. Purpose

A RABA Decision Log is a governance record, not a generic audit log.

A technical audit log may show that an event happened.

A RABA Decision Log should show why consequential AI-supported use was allowed, limited, refused, escalated, de-escalated, or blocked, under whose authority, under whose accepted responsibility, and within what scope.

A Decision Log records governance handling when AI-supported output is used in a consequential context.

Internal AI output is not logged as consequential merely because it exists.

---

## 2. Candidate minimum governance elements

Candidate non-negotiable governance elements:

```text
named human
scope of responsibility
timestamp of acceptance
```

Candidate responsibility-trace elements under review:

```text
who proposed
who reviewed
who authorized
who accepted responsibility
what was AI-prepared
what was human-confirmed
consequence class
uncertainty remaining
admissibility rationale
```

Working rule:

```text
If a record does not show who accepted responsibility, for what scope, and when, it is not a Decision Log. It is an audit log.
```

Additional working distinction:

```text
AI-prepared material is not the same as human-confirmed rationale.
```

---

## 3. Candidate trigger vocabulary

Candidate trigger vocabulary includes:

```text
reliance
routing
ranking
prioritization
recording_as_rationale_or_basis
escalation
de_escalation
commitment_preparation
material_decision_field_shaping
```

These triggers are responsibility-relevant only in a consequential context.

The purpose of this vocabulary is review alignment only. It does not create an adopted schema, enum, event family, runtime control, or implementation requirement.

---

## 4. Candidate decision questions

A Decision Log entry should be able to answer:

1. What action, boundary, or trigger was involved?
2. Was the AI-supported output used, relied on, routed, ranked, prioritized, recorded, escalated, de-escalated, used for commitment preparation, or used to materially shape the decision field?
3. Why was action allowed, limited, refused, escalated, de-escalated, or blocked?
4. What was AI-prepared?
5. What was human-confirmed?
6. Who proposed?
7. Who reviewed?
8. Who had authority?
9. Who accepted responsibility?
10. What was the scope of responsibility?
11. When was responsibility accepted?
12. What consequence class was involved?
13. What evidence or source reference was used?
14. What limits, uncertainty, or conditions remained?
15. Which Responsibility Event Stream event, if any, links to this decision?

---

## 5. Boundary from technical audit logs

A record is not a RABA Decision Log merely because it includes:

- event timestamp;
- system actor;
- status change;
- technical trace;
- request / response metadata;
- model output;
- AI-generated rationale;
- AI confidence score;
- AI review result;
- AI consensus result.

Those may be useful audit records.

They do not by themselves prove responsibility acceptance, human confirmation, admissibility, or authorization.

---

## 6. Governance boundary

This file may be reviewed as part of the Tranche 1.1 canonicalization proposal.

It may become canonical only after separate Human Owner approval, PR review, merge, and the required decision trail.

A Decision Log records governance handling; it does not itself authorize action.

AI review, AI confidence, or AI consensus does not close a governance gate and does not remove required Human Owner or human governance review.

Human Owner / human governance remains the final authority for admissibility, authorization, and canonical approval where required.

This candidate does not create validation, adoption, compliance, certification, audit-readiness, public-standard, public-positioning, provider, partnership, pilot, or commercial claims.

It is not a schema, runtime control, event-family adoption, implementation guide, or approval mechanism.
