# RABA Notes Classification Review

**Status:** Classification Review  
**Canonical status:** Non-canonical  
**Purpose:** Consolidation / navigation aid  
**Related note:** [`../notes/raba-concept-map.md`](../notes/raba-concept-map.md)  

> This review does not adopt, reject, or canonicalize any RABA concept.  
> It classifies existing notes according to the current scope guard.  
> Human Owner confirmation is required before any file is promoted, deprecated, merged, or moved.

---

## 1. Review question

The review question is:

```text
Which current RABA notes are core, which are boundary patterns, which are implementation or market-facing extensions, and which are external inputs or review aids?
```

This helps prevent the project from becoming “everything about AI” instead of a responsibility architecture.

---

## 2. Classification criteria

A note is classified by its primary function:

- **Core** — defines or supports the minimal RABA responsibility architecture.
- **Boundary Pattern** — identifies a specific transition where responsibility conditions change.
- **Implementation / Market-Facing Extension** — helps explain, implement, observe, or position RABA.
- **Review / External Input** — preserves outside input or review process without adoption.
- **Navigation / Scope Guard** — helps structure the project and prevent concept drift.

A note may relate to more than one layer, but it should have one primary classification.

---

## 3. Current notes classification

| File | Primary classification | Rationale | Current status |
|---|---|---|---|
| `docs/notes/action-classes-working-note.md` | Core / Candidate Core | Helps define kinds of AI-supported action and consequence relevance. | Working / non-canonical |
| `docs/notes/ai-speed-responsibility-acceptance.md` | Core / Candidate Core | Connects speed, bypass, and explicit responsibility acceptance. | Working / non-canonical |
| `docs/notes/decision-log-governed-bypass-extension.md` | Core / Candidate Core | Directly extends Decision Log and Governed Bypass logic. | Working / non-canonical |
| `docs/notes/governance-mapping-workshop-add-on.md` | Implementation / Market-Facing Extension | Practical workshop artifact for mapping roles, boundaries, escalation, and logs. | Working / non-canonical |
| `docs/notes/raba-concept-map.md` | Navigation / Scope Guard | Organizes existing material and prevents concept drift. | Working / non-canonical |
| `docs/notes/recursive-evidence-boundary.md` | Boundary Pattern | Defines proof transfer as incoming claim requiring local admissibility. | Working / non-canonical |
| `docs/notes/reliance-boundary-control-loop.md` | Boundary Pattern | Defines receiving-boundary control loop for external proof becoming local reliance. | Working / non-canonical |
| `docs/notes/agentic-ai-responsibility-threshold.md` | Boundary Pattern | Defines threshold where AI output becomes workflow state change and consequence risk. | Working / non-canonical |
| `docs/notes/responsibility-observability-layer.md` | Implementation / Market-Facing Extension | Makes responsibility transitions visible, analyzable, and replayable. | Working / non-canonical |

---

## 4. External reviews and review aids classification

| File | Primary classification | Rationale | Current status |
|---|---|---|---|
| `docs/reviews/decisionassure-raba-trace-example.md` | External Input / Review Aid | External trace example for stale confirmation, hidden commitment, rollback assumptions, and human responsibility boundaries. | Non-canonical |
| `docs/reviews/amber-generative-ai-introduction-raba-review.md` | External Market Input | Market review of enterprise generative AI / RAG implementation guide. | Non-canonical |
| `docs/reviews/raba-over-rag-governance-extension-recommendation.md` | External AI Recommendation / Implementation Stress Test | Stress-tests RABA insertion points for RAG governance. | Non-canonical |
| `docs/reviews/peter-cranstone-receiving-boundary-reliance-layer.md` | External Conceptual Input | Preserves receiving-boundary reliance decisioning concept. | Non-canonical |
| `docs/reviews/reliance-boundary-control-loop-canonicalization-review.md` | Canonicalization Review Checklist | Defines what must be reviewed before promoting Reliance Boundary Control Loop. | Non-canonical |
| `docs/reviews/raba-notes-classification-review.md` | Classification Review | Classifies current notes by scope layer. | Non-canonical |

---

## 5. Consolidated project shape

Current project shape:

```text
RABA Core
  → Action classes
  → AI speed and responsibility acceptance
  → Decision Log / Governed Bypass extension

Boundary Patterns
  → Recursive Evidence Boundary
  → Reliance Boundary Control Loop
  → Agentic AI Responsibility Threshold

Implementation / Market-Facing Extensions
  → Governance Mapping Workshop Add-on
  → Responsibility Observability Layer
  → RABA-over-RAG stress test

Review / External Inputs
  → DecisionAssure trace example
  → Amber RAG market review
  → Peter Cranstone receiving-boundary input

Navigation / Scope Guard
  → RABA Concept Map and Scope Guard
  → Notes Classification Review
```

---

## 6. Risk assessment

Current risk:

```text
The project is conceptually coherent, but the navigation layer must keep pace with the growth of notes.
```

Main risk areas:

- too many non-canonical notes without clear hierarchy;
- boundary patterns being mistaken for core canon;
- external market signals being mistaken for RABA architecture;
- implementation-facing ideas being mistaken for product commitments;
- candidate events being mistaken for accepted Responsibility Event Stream schema.

---

## 7. Immediate recommendations

1. Keep `docs/notes/raba-concept-map.md` as the current scope guard.
2. Avoid adding new concepts unless they sharpen a responsibility boundary.
3. Do not promote candidate events without a separate event-family review.
4. Do not update README until the Human Owner confirms the desired public positioning.
5. Consider later creating a cleaner architecture index that separates Core, Boundary Patterns, and Extensions.

---

## 8. Current recommendation

Current recommendation:

```text
Keep all listed notes as non-canonical working material for now.
Do not promote any note to canon yet.
Use the concept map to guide future consolidation.
```

Reason:

```text
The project needs consolidation before canonicalization.
```

---

## 9. Governance boundary

This review is:

- non-canonical;
- a classification aid;
- not architecture approval;
- not a Decision Log entry;
- not a schema change;
- not a file reorganization;
- not a deprecation decision.

Canonical adoption, promotion, merging, deletion, or restructuring requires Human Owner confirmation and a separate decision trail.
