# Tranche 1.1 Canonicalization Candidate Package

**Status:** Canonicalization candidate  
**Canonical status:** Non-canonical until Human Owner approval, PR review, merge, and decision trail completion  
**Location status:** Candidate workspace only; not `docs/core/v1/`  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  
**Human Owner confirmation:** Preparation authorized; canonical adoption not authorized

> This directory is not final canon.  
> It does not create `docs/core/v1/`.  
> It does not adopt schemas, event families, dashboards, integrations, implementation guidance, public claims, pilot claims, or commercial commitments.  
> It prepares candidate files for review only.

---

## 1. Purpose

This package prepares a PR-ready draft candidate package for Tranche 1.1.

PR-ready does not mean ready for merge, ready for review, or ready for canonical adoption.

It translates verified Tranche 1.1 review materials into a candidate core package that can be reviewed before any future canonical adoption.

The package is intentionally placed under:

```text
docs/core/candidates/tranche-1-1/
```

It is intentionally not placed under:

```text
docs/core/v1/
```

This preserves the distinction between candidate material and accepted canon.

---

## 2. Scope

Tranche 1.1 covers only:

```text
Consequential Action Definition
Action Classes
Action Boundary
Decision Log minimum governance elements
Responsibility Event Stream minimal stub
```

Required review sequence:

```text
Consequential Action Definition
→ Action Classes
→ Action Boundary
→ Decision Log
→ Responsibility Event Stream stub
```

This sequence must be preserved because each element depends on the previous one.

---

## 3. Deferred scope

The following remain deferred to Tranche 1.2 or later:

```text
Human Response Window
Governed Bypass
AI Speed and Responsibility Acceptance
Boundary Patterns
Implementation / Market-Facing Extensions
```

Deferred does not mean optional.

These items are important for mature RABA, but they depend on a stable Action Boundary, Decision Log, and responsibility trace foundation.

---

## 4. Candidate files

This package contains:

- [`tranche-1-1-canonicalization-proposal.md`](tranche-1-1-canonicalization-proposal.md) — package-level proposal and governance boundary;
- [`consequential-action-definition.md`](consequential-action-definition.md) — candidate definition and Case A / Case B boundary test;
- [`action-classes.candidate.yaml`](action-classes.candidate.yaml) — candidate flat action-class taxonomy;
- [`action-boundary.md`](action-boundary.md) — candidate Action Boundary definition and constraints;
- [`decision-log-minimum-governance-elements.md`](decision-log-minimum-governance-elements.md) — minimum governance elements for a RABA Decision Log;
- [`responsibility-event-stream-stub.yaml`](responsibility-event-stream-stub.yaml) — minimal Responsibility Event Stream stub for boundary transition review.

---

## 5. Review rule

This package may support a future canonicalization PR review.

It does not by itself authorize:

- canonical adoption;
- merge approval;
- schema adoption;
- event-family adoption;
- implementation guidance;
- runtime enforcement;
- public positioning changes.

---

## 6. Governance boundary

Human Owner confirmation authorized preparation of this candidate package only.

Final architectural approval remains with the Human Owner.

Multi-AI agreement, reviewer agreement, or clean PR status must not be treated as final RABA approval.
