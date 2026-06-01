# Tranche 1.1 PR-Ready Draft Package

**Status:** PR-ready draft material  
**Canonical status:** Non-canonical  
**Purpose:** Prepare possible future canonicalization files for Human Owner review  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  

> This directory is not canonical architecture.  
> It is not under `docs/core/v1/`.  
> It does not adopt schemas, event families, dashboards, integrations, or public claims.  
> It prepares draft materials that could later be moved into a real PR only after Human Owner confirmation.

---

## 1. Draft package contents

This draft package contains:

- [`action-classes.candidate.yaml`](action-classes.candidate.yaml) — candidate flat action-class taxonomy for review;
- [`boundary-transition-event.stub.yaml`](boundary-transition-event.stub.yaml) — candidate minimal Responsibility Event Stream root event stub for review;
- [`decision-log-minimum-fields.md`](decision-log-minimum-fields.md) — candidate minimum Decision Log governance elements for review.

---

## 2. Intended sequence

Tranche 1.1 should be reviewed in this order:

```text
Consequential Action Definition
→ Action Classes
→ Action Boundary
→ Decision Log
→ Responsibility Event Stream stub
```

The sequence matters because each item depends on the previous one.

---

## 3. Scope

Tranche 1.1 draft materials cover:

```text
Action Classes
Consequential Action Definition
Action Boundary
Decision Log
Responsibility Event Stream minimal stub
```

They do not cover:

```text
Human Response Window
Governed Bypass
AI Speed and Responsibility Acceptance
Boundary Patterns
Implementation / Market-Facing Extensions
```

These deferred items may be reviewed in later packs.

---

## 4. Required Human Owner checks

Before any future PR-ready canonicalization work, Human Owner should confirm:

- the Case A / Case B consequentiality boundary test;
- the candidate Action Classes and fallback class;
- the Decision Log minimum governance fields;
- that `boundary_transition_event` remains candidate-only;
- that no schema or event family is adopted by this draft package.

---

## 5. Governance boundary

This package is:

- non-canonical;
- draft material only;
- not architecture approval;
- not a schema change;
- not an event-family adoption;
- not a Decision Log entry;
- not implementation guidance;
- not public positioning.

Canonical adoption requires Human Owner confirmation, a separate decision trail, and a future PR/merge process.
