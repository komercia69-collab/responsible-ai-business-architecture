# RABA Core v1 — Tranche 1.1 Canonical Candidates

**Status:** Canonical candidate  
**Canonical status:** Pending Human Owner approval, PR review, and merge  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  
**Human Owner:** Oleksandr / Александр  

> This directory contains canonical candidate material only.  
> It does not by itself adopt canon, schemas, event families, implementation guidance, public positioning, pilot claims, or commercial commitments.  
> Final architectural approval belongs to the Human Owner.

---

## 1. Purpose

This directory prepares the Tranche 1.1 boundary foundation as RABA Core v1 canonical candidates.

Tranche 1.1 defines the minimum candidate core needed to determine when AI-supported behavior approaches consequential action and therefore requires explicit responsibility handling.

---

## 2. Required review sequence

Review these files in order:

```text
Consequential Action Definition
→ Action Classes
→ Action Boundary
→ Decision Log
→ Responsibility Event Stream stub
```

This order must be preserved because each element depends on the previous one.

---

## 3. Candidate files

1. [`consequential-action.md`](consequential-action.md)  
   Defines the candidate meaning of consequential AI-supported action.

2. [`action-classes.md`](action-classes.md)  
   Defines candidate action classes for governance review.

3. [`action-boundary.md`](action-boundary.md)  
   Defines the candidate Action Boundary and the admissibility guardrail.

4. [`decision-log.md`](decision-log.md)  
   Defines candidate minimum governance elements for a RABA Decision Log.

5. [`responsibility-event-stream-stub.md`](responsibility-event-stream-stub.md)  
   Defines a minimal candidate Responsibility Event Stream stub for boundary transitions.

---

## 4. Tranche 1.1 scope

Included in this tranche:

```text
Consequential Action Definition
Action Classes
Action Boundary
Decision Log minimum governance elements
Responsibility Event Stream minimal stub
```

Deferred from this tranche:

```text
Human Response Window
Governed Bypass
AI Speed and Responsibility Acceptance
Boundary Patterns
Implementation / Market-Facing Extensions
```

Deferred does not mean optional.

These topics remain important for mature RABA, but they depend on a stable Action Boundary, Decision Log, and responsibility trace foundation.

---

## 5. Governance boundary

This directory is:

- canonical candidate material only;
- not final canon;
- not schema adoption;
- not event-family adoption;
- not implementation guidance;
- not a public positioning change;
- not merge approval.

Canonical adoption requires Human Owner approval, PR review, merge, and a separate decision trail.
