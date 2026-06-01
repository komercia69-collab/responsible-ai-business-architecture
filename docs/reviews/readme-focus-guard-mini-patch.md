# README Focus Guard Mini Patch Proposal

**Status:** Proposed README Patch  
**Canonical status:** Non-canonical  
**Purpose:** Prepare a small public-navigation focus guard for Human Owner review  
**Related review:** [`raba-core-support-rd-focus-review.md`](raba-core-support-rd-focus-review.md)  

> This is a proposed patch only.  
> It has not been applied to README.  
> It does not change public positioning.  
> Human Owner confirmation is required before applying any README change.

---

## 1. Patch intent

The proposed patch should help a new external reader quickly see that RABA has a hierarchy:

```text
Core RABA Scope
Supporting Materials
Experimental Future Tracks
Project Internal Governance Showcase
Deferred Commercial Concepts
```

The goal is not to reduce the project.

The goal is to prevent strong R&D and meta-governance tracks from visually competing with the core.

---

## 2. Suggested README insertion

Suggested insertion location:

```text
Near the existing Research Directions section, or before a long list of future / experimental tracks.
```

Suggested text:

```md
## Scope hierarchy

RABA is organized around a small core and several supporting or experimental layers.

### Core RABA scope

The core of RABA is operational responsibility architecture for AI-supported consequential work:

- explicit responsibility;
- governed speed;
- action boundaries;
- approval states;
- governance gateway;
- Decision Log;
- Responsibility Event Stream;
- policy integrity.

This is the current center of the framework.

### Supporting materials

Supporting materials help explain, apply, test, or demonstrate the core.

Examples include role-based guides, assessments, pilot materials, mappings, diagrams, examples, and starter kits.

They are valuable adoption aids, but they do not redefine the core.

### Experimental future tracks

Research Directions are out-of-core experimental tracks.

They may inform future RABA evolution, but they do not define the current core and should not be read as finished products or current implementation commitments.

### Project internal governance showcase

The multi-AI operating model, AI collaboration protocol, and recommendation triage materials are project-internal governance showcases.

They demonstrate RABA principles applied to the development of RABA itself.

They are not a separate product scope.

### Deferred commercial concepts

Commercial concepts, paid offerings, and product packaging remain deferred unless explicitly activated by Human Owner decision.

The open RABA core remains separate from any future commercial packaging.
```

---

## 3. Optional shorter README marker

If the README should remain compact, use only this shorter marker:

```md
> **Scope note:** RABA's current core is operational responsibility architecture: responsibility, governed speed, action boundaries, governance gateway, Decision Log, Responsibility Event Stream, and policy integrity. Research Directions are experimental future tracks. Multi-AI operating materials are project-internal governance showcases. Commercial concepts remain deferred unless explicitly activated by Human Owner decision.
```

---

## 4. What this patch must not do

This patch must not:

- promote Research Directions to core;
- turn multi-AI workflow into a separate product scope;
- activate commercial concepts;
- rewrite the project value proposition;
- imply certification or compliance coverage;
- create canonical architecture;
- change Tranche 1.1 or Tranche 1.2 status.

---

## 5. Human Owner decision options

### Option A — Apply full scope hierarchy block

Use the full `Scope hierarchy` section.

### Option B — Apply short scope note only

Use the compact scope note.

### Option C — Do not change README yet

Keep this as a review proposal for later.

---

## 6. Governance boundary

This patch proposal is:

- non-canonical;
- not applied;
- not public positioning approval;
- not architecture approval;
- not a Decision Log entry;
- not a schema change;
- not event-family adoption.

README changes require Human Owner confirmation and a separate decision trail.
