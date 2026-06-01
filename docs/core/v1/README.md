# RABA Core v1 — Tranche 1.1 Candidate Package

**Status:** Canonicalization candidate  
**Canonical status:** Not adopted  
**Branch status:** PR-ready proposal branch only  
**Human Owner status:** Final architectural approval remains with the Human Owner  
**Tranche:** 1.1 — Data and Boundary Canon Readiness

> This directory is a canonicalization candidate package.  
> Its presence in `docs/core/v1/` on this branch does not make it canon.  
> It does not adopt schemas, event families, implementation guidance, dashboards, integrations, public claims, vendor references, pilot claims, or commercial commitments.  
> Canonical adoption requires separate Human Owner approval, PR review, and merge decision trail.

---

## 1. Purpose

This candidate package proposes, for review, the minimum RABA core foundation needed to describe how AI-supported activity approaches consequential business action and how responsibility should remain visible before action proceeds.

Tranche 1.1 is proposed as a data-and-boundary canon-readiness step.

It does not define runtime implementation, UI behavior, workflow automation, SLA, timeout policy, bypass behavior, dashboard logic, or market-facing positioning.

---

## 2. Candidate review sequence

This package should be reviewed in this order:

```text
Consequential Action Definition
→ Action Classes
→ Action Boundary
→ Decision Log
→ Responsibility Event Stream stub
```

This order matters because each element depends on the previous one.

This review sequence is not merge approval and does not by itself adopt canon.

---

## 3. Candidate files

- [`consequential-action.md`](consequential-action.md) — candidate definition of consequential AI-supported action;
- [`action-classes.candidate.yaml`](action-classes.candidate.yaml) — candidate flat taxonomy for reviewing AI-supported action type;
- [`action-boundary.md`](action-boundary.md) — candidate definition of the Action Boundary and its admissibility constraint;
- [`decision-log-minimum-governance-elements.md`](decision-log-minimum-governance-elements.md) — candidate minimum governance elements for responsibility acceptance;
- [`responsibility-event-stream-stub.md`](responsibility-event-stream-stub.md) — minimal candidate stub for responsibility-relevant boundary transition trace.

---

## 4. Deferred from Tranche 1.1

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

## 5. Non-adoption boundary

This candidate package does not authorize:

- canonical adoption;
- schema adoption;
- event-family adoption;
- implementation guidance;
- serialization formats;
- data contracts;
- dashboards;
- integrations;
- public positioning changes;
- vendor references;
- pilot claims;
- commercial commitments;
- merge approval.

Final architectural approval belongs to the Human Owner.
