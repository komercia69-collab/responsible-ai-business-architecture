# Status and Adoption Boundary — RABA Core v1 Candidate

**Status:** Canonical candidate support document  
**Canonical status:** Pending Human Owner approval, PR review, and merge  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  

> This document clarifies status boundaries for the Tranche 1.1 candidate package.  
> It does not by itself adopt final canon, schemas, event families, or implementation guidance.

---

## 1. Purpose

RABA must clearly distinguish between draft material, candidate material, reviewed material, canonical material, and implemented material.

This prevents silent adoption, where useful draft text starts being treated as final architecture without explicit Human Owner approval.

---

## 2. Status meanings

### Draft

Exploratory or preparatory material.

A draft is not approved architecture.

### Candidate

Material prepared for structured review.

A candidate may be placed near a future canonical location, but location alone does not make it final canon.

### Accepted for review

Material mature enough for Human Owner review as a possible canonical element.

Accepted for review does not mean adopted.

### Canonical

Architecture approved through the required Human Owner decision trail, review, and merge process.

Canonical material may define RABA architecture.

### Implemented

Architecture translated into a concrete product, workflow, schema, data contract, dashboard, runtime behavior, or operational process.

Implementation requires a separate approval path.

---

## 3. Adoption boundary rules

```text
Draft is not canon.
Candidate is not canon.
Accepted for review is not canon.
Canonical is not automatically implemented.
Implementation requires separate approval.
```

---

## 4. What PR-ready means

PR-ready means the material is organized enough to be reviewed in a pull request.

PR-ready does not mean:

- final canon;
- merge approval;
- schema adoption;
- event-family adoption;
- implementation guidance;
- public positioning change.

---

## 5. Human Owner authority

Final architectural approval belongs to the Human Owner.

Multi-AI agreement, reviewer agreement, draft quality, or successful PR preparation does not replace Human Owner approval.

---

## 6. Tranche 1.1 application

The current Tranche 1.1 package under `docs/core/v1/` is a canonical candidate package.

It prepares the following for review:

```text
Consequential Action Definition
Action Classes
Action Boundary
Decision Log minimum governance elements
Responsibility Event Stream minimal stub
```

It does not adopt:

```text
final canon
machine-readable schemas
event families
implementation requirements
runtime behavior
```

---

## 7. Governance boundary

This document is:

- a canonical candidate support document;
- not final canon by itself;
- not schema adoption;
- not event-family adoption;
- not implementation guidance;
- not merge approval.

Canonical adoption requires Human Owner approval, PR review, merge, and a separate decision trail.
