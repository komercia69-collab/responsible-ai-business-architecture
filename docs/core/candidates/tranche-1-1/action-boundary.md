# Action Boundary — Tranche 1.1 Candidate

**Status:** Canonicalization candidate  
**Canonical status:** Non-canonical  
**Tranche:** 1.1 — Data and Boundary Canon Readiness

> This file is a candidate for review.  
> It is not final canon.  
> It does not define Human Response Window, Governed Bypass, timeout behavior, UI behavior, SLA behavior, or implementation guidance.

---

## 1. Candidate definition

An Action Boundary is the point at which AI-supported output, recommendation, evidence, or planning moves from preparation or review aid toward consequential use and therefore requires explicit authority, admissibility, responsibility, and record handling.

The boundary is not crossed merely because an AI system produces internal output.

The boundary may be approached or crossed when, in a consequential context, AI-supported output is relied on, routed, ranked, recorded, escalated, de-escalated, used to prepare a commitment, or materially shapes a decision field.

---

## 2. Dependency order

Action Boundary depends on:

```text
Consequential Action Definition
→ Action Classes
```

The boundary cannot be reviewed safely before consequentiality and candidate action classes are understood.

---

## 3. Boundary constraint

AI may detect boundary approach.

AI must not be the final judge of admissibility.

The admissibility judgment belongs to the responsible governance process and, where required, a named human authority.

---

## 4. Boundary non-trigger and trigger rules

Internal AI output, recommendation, evidence, or planning is not an Action Boundary crossing merely because it exists.

It remains a review aid unless, in a consequential context, it is used, relied on, routed, ranked, recorded as rationale or basis, escalated, de-escalated, used to prepare a commitment, or used in a way that materially shapes the decision field.

Technical workflow-state change is not the only possible boundary trigger.

Decision-field shaping is a boundary condition across action classes. It may occur when AI ranks options, frames risk, changes reviewer attention, routes or de-escalates a case, or becomes recorded rationale or the practical basis for human judgment.

---

## 5. What the boundary detects

The Action Boundary detects when AI-supported activity approaches or crosses into:

- workflow state change;
- data mutation;
- external communication;
- external transaction;
- approval or denial;
- compliance sign-off;
- escalation, de-escalation, or handoff;
- routing or prioritization of cases, tasks, people, resources, or obligations;
- ranking that changes attention, urgency, or practical order of review;
- recording AI output as rationale, evidence summary, risk framing, or decision basis;
- preparation of a commitment, refusal, approval, denial, transaction, or external communication;
- material shaping of a consequential decision field;
- unclassified consequential action.

---

## 6. What this candidate does not define

This Tranche 1.1 candidate does not define:

- Human Response Window;
- Governed Bypass;
- timeout or bypass rules;
- UI confirmation design;
- SLA mechanics;
- runtime enforcement;
- serialization format;
- implementation architecture;
- schema adoption;
- event-family adoption;
- public positioning;
- validation, adoption, compliance, certification, audit-readiness, public-standard, provider, partnership, pilot, or commercial claims.

These remain deferred to later review.

---

## 7. Governance boundary

This file may be reviewed as part of the Tranche 1.1 canonicalization proposal.

It may become canonical only after separate Human Owner approval, PR review, merge, and the required decision trail.

Boundary detection does not authorize action.

AI review, AI confidence, or AI consensus does not close a governance gate and does not remove Human Owner or human governance review.

AI may assist in detecting boundary approach, but the admissibility judgment belongs to the responsible governance process and, where required, a named human authority.

This candidate does not create validation, adoption, compliance, certification, audit-readiness, public-standard, public-positioning, provider, partnership, pilot, or commercial claims.
