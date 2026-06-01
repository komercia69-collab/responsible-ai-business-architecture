# Action Boundary — Tranche 1.1 Candidate

**Status:** Canonicalization candidate  
**Canonical status:** Not adopted  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  
**Human Owner status:** Final architectural approval remains with the Human Owner

> This file is a candidate proposal only.  
> It does not create canon, implementation guidance, schema adoption, event-family adoption, public positioning, or merge approval.  
> Canonical adoption requires separate Human Owner approval and PR/merge decision trail.

---

## 1. Purpose

This candidate proposes the Action Boundary as the point where AI-supported output approaches consequential business action and therefore requires explicit governance handling.

This boundary candidate is not a UI pattern, timeout rule, bypass mechanism, SLA, or implementation workflow.

Those items remain deferred from Tranche 1.1.

---

## 2. Candidate definition

An Action Boundary is the point at which AI-supported output, recommendation, evidence, or plan approaches a consequential business action and therefore requires explicit authority, admissibility, responsibility, and record handling.

This definition is a candidate statement for review, not adopted canon.

---

## 3. Boundary constraint

```text
AI may detect boundary approach, but must not be the final judge of admissibility.
```

This means AI may signal that a boundary is near or crossed.

It must not be the final authority for whether the action is admissible, authorized, or responsibility-accepted.

This constraint is a candidate governance rule for review, not implementation guidance.

---

## 4. Dependency order

Action Boundary should be reviewed after:

```text
Consequential Action Definition
→ Action Classes
→ Action Boundary
```

The boundary should not be reviewed before the consequential-action definition and candidate Action Classes are understood.

---

## 5. What Tranche 1.1 does not define

This Tranche 1.1 candidate does not define:

- Human Response Window;
- timeout behavior;
- UI friction;
- bypass lane;
- SLA;
- automation policy;
- dashboard logic;
- implementation workflow;
- market-facing claim.

These remain deferred to Tranche 1.2 or later.

---

## 6. Candidate governance implication

When an Action Boundary is triggered or approached, RABA should require explicit handling of:

- authority;
- admissibility;
- responsibility;
- record / Decision Log logic;
- responsibility-relevant trace where applicable.

This does not mean every AI output is consequential.

It means consequential transition points must not be hidden inside model confidence, convenience, or workflow speed.

This section is a candidate implication for review, not implementation guidance.

---

## 7. Non-adoption boundary

This file is:

- a candidate proposal only;
- not adopted canon;
- not implementation guidance;
- not a schema;
- not an event family;
- not public positioning;
- not a Decision Log entry;
- not merge approval.

Final architectural approval belongs to the Human Owner.
