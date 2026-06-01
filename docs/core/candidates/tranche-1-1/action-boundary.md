# Action Boundary — Tranche 1.1 Candidate

**Status:** Canonicalization candidate  
**Canonical status:** Non-canonical  
**Tranche:** 1.1 — Data and Boundary Canon Readiness

> This file is a candidate for review.  
> It is not final canon.  
> It does not define Human Response Window, Governed Bypass, timeout behavior, UI behavior, SLA behavior, or implementation guidance.

---

## 1. Candidate definition

An Action Boundary is the point at which AI-supported output, recommendation, evidence, or plan approaches a consequential business action and therefore requires explicit authority, admissibility, responsibility, and record handling.

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

## 4. What the boundary detects

The Action Boundary detects when AI-supported activity approaches or crosses into:

- workflow state change;
- data mutation;
- external communication;
- external transaction;
- approval or denial;
- compliance sign-off;
- escalation or handoff;
- unclassified consequential action.

---

## 5. What this candidate does not define

This Tranche 1.1 candidate does not define:

- Human Response Window;
- Governed Bypass;
- timeout or bypass rules;
- UI confirmation design;
- SLA mechanics;
- runtime enforcement;
- serialization format;
- implementation architecture.

These remain deferred to later review.

---

## 6. Governance boundary

This file may be reviewed as part of the Tranche 1.1 canonicalization proposal.

It becomes canonical only after Human Owner approval, PR review, merge, and the required decision trail.
