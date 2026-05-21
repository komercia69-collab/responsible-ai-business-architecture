# Multi-AI Operating Model

This document defines how RABA uses multiple AI systems without losing a single canonical project direction.

It describes the operating model for working with ChatGPT, Claude, Gemini, Comet, and GitHub as a coordinated project workspace.

---

## Core Pattern

RABA uses an:

```text
Orchestrator + Experts + Canon + Decision Log
```

model.

The goal is not to let multiple AI systems compete for control.

The goal is to use each system for its strongest role while preserving one canonical project state.

---

## Roles

| Component | Role | Responsibility |
|---|---|---|
| ChatGPT | Integrator / Canon Editor / GitHub Operator | triages recommendations, maintains conceptual consistency, updates the repository |
| Claude | Concept Architect / Deep Structure Reviewer | generates deep architecture ideas, principles, tensions, and conceptual refinements |
| Gemini | Alternative Analyst / Stress Tester / External Reviewer | tests assumptions, finds weak points, proposes alternative framings and practical objections |
| Comet | Browser Coordinator / Cross-tab Context Layer | compares open tabs, keeps working context visible, helps coordinate multi-source review |
| GitHub | Canon / Source of Truth | stores the accepted project state |
| Decision Log | Governance Memory | records why recommendations were accepted, changed, deferred, or rejected |
| Human Owner | Accountable Decision Maker | remains responsible for final direction and approval |

---

## Core Rule

> AI systems may propose, compare, critique, and refine. Only the governed Canon is merged into the repository.

Claude and Gemini do not write the Canon directly.

Comet does not become the source of truth.

ChatGPT integrates, but the human owner remains accountable.

GitHub stores the accepted project state.

---

## Artifact Layers

RABA multi-AI work uses four artifact layers.

| Layer | Purpose |
|---|---|
| Input Brief | defines the current task, goal, audience, constraints, and expected output |
| Expert Notes | raw or lightly structured recommendations from Claude, Gemini, Comet, or human reviewers |
| Canon | accepted and integrated project content in GitHub |
| Decision Log | record of why meaningful recommendations were accepted, changed, deferred, or rejected |

---

## Recommended Workspace Tabs

When using Comet or another browser workspace, the recommended tabs are:

```text
1. GitHub — RABA Repository
2. ChatGPT — Canon / Integrator
3. Claude — Concept Architect
4. Gemini — Stress Test / Alternative Review
5. Current Task Brief
6. Decision Log
```

Comet is best used as a coordination and comparison surface, not as the final editor of Canon.

---

## Operating Flow

```text
Expert Input
  ↓
Recommendation Card
  ↓
ChatGPT Triage
  ↓
Governance Fit Check
  ↓
Decision Card
  ↓
Canon Update
  ↓
GitHub Commit
  ↓
Decision Log Entry
```

This creates a controlled path from raw insight to canonical project change.

---

## Governance Fit Check

Every meaningful recommendation should be checked against the current RABA core before it is merged into Canon.

Minimum questions:

1. Does it clarify an Action Boundary?
2. Does it improve or preserve the Approval State model?
3. Does it strengthen the Governance Gateway?
4. Does it improve Decision Log, Responsibility Event Stream, auditability, or observability?
5. Does it respect the distinction between `AUTHORIZED` and `EXECUTED`?
6. Does it preserve the distinction between Approval State and Governance Condition?
7. Does it add implementation value without unnecessary conceptual expansion?
8. Does it help pilot partners, developers, auditors, or operators understand RABA better?

If the answer is unclear, the recommendation should be compressed, deferred, or sent back for further expert review.

---

## Triage Decisions

ChatGPT or the human owner classifies recommendations as:

| Decision | Meaning |
|---|---|
| Accepted | recommendation is integrated into Canon |
| Partially Accepted | core idea is useful, but wording, scope, or implementation is changed |
| Deferred | idea is valuable but not right for the current consolidation phase |
| Rejected | idea does not fit RABA's current direction, scope, or quality bar |

---

## Canon Protection Rules

To avoid conceptual drift:

1. Do not paste raw expert responses directly into Canon.
2. Do not add new large concepts during consolidation unless explicitly approved.
3. Prefer improving existing documents before creating new conceptual branches.
4. Keep one source of truth in GitHub.
5. Record meaningful decisions in the Decision Log.
6. Separate expert notes from accepted project content.
7. Preserve the RABA core principle across all changes.

---

## Compression Rule

Every accepted recommendation should make the project clearer, more testable, more auditable, or more useful.

If a recommendation adds complexity without increasing clarity or implementation value, it should be compressed, deferred, or rejected.

---

## Why This Matters

Multi-AI collaboration can create powerful insight.

It can also create confusion, duplication, and incompatible branches.

This operating model keeps the benefits while reducing the risks.

---

## Alignment with RABA Principle

This workflow applies RABA to RABA itself.

```text
AI may suggest.
AI may critique.
AI may compare.
AI may accelerate.

But responsibility for Canon must remain visible and governed.
```

Core principle:

> AI may be probabilistic. Responsibility must not be.
