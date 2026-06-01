# Action Boundary — Tranche 1.1 Candidate

**Status:** Canonical candidate  
**Canonical status:** Pending Human Owner approval, PR review, and merge  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  

> This document is a canonical candidate only.  
> It does not define Human Response Window, timeout, UI, SLA, or bypass behavior in Tranche 1.1.  
> It does not adopt implementation guidance.

---

## 1. Candidate definition

An Action Boundary is the point at which AI-supported output, recommendation, evidence, or plan approaches a consequential business action and therefore requires explicit authority, admissibility, responsibility, and record handling.

---

## 2. Core guardrail

AI may detect boundary approach, but must not be the final judge of admissibility.

This guardrail prevents the AI system from silently deciding whether its own proposed action is allowed to cross into consequential execution.

---

## 3. What the Action Boundary does

The Action Boundary identifies the transition where AI-supported behavior may require:

- explicit authority;
- admissibility handling;
- responsibility acceptance;
- Decision Log handling;
- responsibility-relevant trace preservation.

---

## 4. What Tranche 1.1 does not define

Tranche 1.1 does not define:

```text
Human Response Window
Governed Bypass
AI Speed and Responsibility Acceptance
Boundary Patterns
Implementation / Market-Facing Extensions
```

These items are deferred, not rejected.

They depend on a stable Action Boundary, Decision Log, and responsibility trace foundation.

---

## 5. Relationship to Decision Log

When an Action Boundary is reached or crossed, the system must be able to determine whether a Decision Log entry is required.

The Action Boundary does not itself prove that responsibility was accepted.

Responsibility acceptance must be recorded through Decision Log handling where applicable.

---

## 6. Governance boundary

This document is:

- a canonical candidate only;
- not final canon;
- not a schema;
- not an event family;
- not a UI requirement;
- not an SLA requirement;
- not bypass behavior;
- not implementation guidance.

Canonical adoption requires Human Owner approval, PR review, merge, and a separate decision trail.
