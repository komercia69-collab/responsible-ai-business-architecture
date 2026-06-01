# RABA Minimum Core Multi-AI Review Synthesis

**Status:** Multi-AI Review Synthesis  
**Canonical status:** Non-canonical  
**Purpose:** Consolidate Claude, Perplexity, and Gemini feedback on the proposed minimum core  
**Reviewed pack:** [`raba-minimum-core-canonicalization-pack.md`](raba-minimum-core-canonicalization-pack.md)  
**Human Owner status:** Human Owner action required before canonicalization  

> This synthesis is analysis only.  
> Multi-AI agreement is not approval.  
> It does not adopt any core concept, schema, event family, or implementation requirement.  
> Final architectural approval belongs to the Human Owner.

---

## 1. Review inputs

Three review inputs were considered:

- **Claude** — strict structural review of the proposed minimum core;
- **Perplexity** — validation of the proposed responsibility spine with usability and over-interpretation concerns;
- **Gemini** — process review warning against scope bloat and recommending staged canonicalization tranches.

The originally proposed review set was:

```text
Action Boundary
Decision Log
Responsibility Event Stream
```

---

## 2. Shared conclusion

The proposed minimum core is directionally suitable, but it is not yet ready for canonicalization.

It should be repaired into a Tranche 1.1 readiness package before any deeper canonicalization review begins.

Working conclusion:

```text
Minimum Core Pack is not ready for canonicalization.
It is ready for repair into a Tranche 1.1 Readiness Pack.
```

---

## 3. Consolidated findings

| Finding | Claude | Perplexity | Gemini | Synthesis |
|---|---|---|---|---|
| Proposed core direction is useful | Partially suitable | Suitable as responsibility spine | Core-set suitable but too broad if all 7 are included | Keep the first-core direction, but repair before review |
| Consequential action definition missing | Critical blocker | Not considered critical | Implied through action classes and boundary activation | Add candidate consequential-action definition before review |
| Responsibility Event Stream level | Runtime / infrastructure dependency | Core responsibility spine element | Depends on action classes and metadata | Keep in Tranche 1.1 only with minimal schema-stub review |
| Human Response Window | Exclude from first review; timing mechanism | Exclude but mark later baseline mechanism | Put in later Tranche 1.2 | Exclude from Tranche 1.1, but not optional |
| Governed Bypass | Exclude; exception/operating mode | Exclude but mark later baseline mechanism | Put in later Tranche 1.2 | Exclude from Tranche 1.1, but not optional |
| AI speed and responsibility acceptance | Not first-core | Not addressed directly | Design principle, not schema-level core | Treat as design principle / risk principle for now |
| Action classes | Consequentiality logic needed | Not critical | Required before Event Stream maturity | Add candidate action classes to Tranche 1.1 readiness |
| Over-interpretation risk | Implied | Explicit concern | Implied through PR / schema caution | Add explicit disclaimer |
| Canonicalization process | Not ready due to blocker | Ready after minor edits | Split into tranches | Use Tranche 1.1 Readiness Pack before canon |

---

## 4. Recommended tranche framing

### Tranche 1.1 — Data and Boundary Canon Readiness

Candidate review scope:

```text
Action Classes
Consequential Action Definition
Action Boundary
Decision Log
Responsibility Event Stream minimal schema stub
```

This tranche prepares the minimum responsibility spine and its activation condition.

### Tranche 1.2 — Interface and Exception Canon Readiness

Deferred review scope:

```text
Human Response Window
Governed Bypass
AI Speed and Responsibility Acceptance
```

These are important mechanisms and principles, but they depend on a stable Action Boundary and Decision Log foundation.

---

## 5. Required repair before deeper review

The minimum core pack should be updated to include:

1. candidate definition of consequential action;
2. responsibility spine framing;
3. Tranche 1.1 / Tranche 1.2 distinction;
4. candidate action classes for review;
5. minimal Responsibility Event Stream schema stub for review;
6. explicit status of Human Response Window and Governed Bypass as later baseline operating mechanisms;
7. warning that AI Speed and Responsibility Acceptance is currently a design / risk principle, not a schema-level core object;
8. risk of over-interpretation by external adopters;
9. disclaimer that minimum-core review does not authorize schemas, event families, dashboards, integrations, or public claims.

---

## 6. Human Owner decision points

Before canonicalization, the Human Owner should decide:

1. Should the first readiness path be Tranche 1.1 rather than the full seven-item core-set?
2. Is the proposed consequential-action definition suitable for review?
3. Are the proposed candidate action classes suitable for review?
4. Should Responsibility Event Stream be included in Tranche 1.1 only with a minimal schema stub?
5. Should Human Response Window and Governed Bypass be explicitly deferred to Tranche 1.2?
6. Should AI Speed and Responsibility Acceptance remain a design principle for now?
7. What file or future PR will become the first canonical authority document, if any?

AI collaborators may recommend answers, but may not decide them.

---

## 7. What should not happen yet

Do not yet:

- create `docs/core/v1/`;
- create `docs/core/canonical-schemas.json`;
- adopt event families;
- modify Responsibility Event Stream schema;
- modify Decision Log schema;
- create a Decision Log entry;
- update README public positioning;
- open a PR as if canon were already selected;
- treat this synthesis as approval.

---

## 8. Current recommendation

Current recommendation:

```text
Prepare a non-canonical Tranche 1.1 Readiness Pack.
Use it to decide whether a future PR-ready canonicalization package should be created.
Do not canonicalize yet.
```

Reason:

```text
RABA needs to move beyond consolidation, but first-core canonicalization requires an activation condition, candidate action classes, and explicit schema-boundary discipline.
```

---

## 9. Governance boundary

This synthesis is:

- non-canonical;
- analysis only;
- not architecture approval;
- not a Decision Log entry;
- not a schema change;
- not an event-family adoption;
- not a PR-ready canonical specification.

Any canonical adoption requires Human Owner confirmation and a separate decision trail.
