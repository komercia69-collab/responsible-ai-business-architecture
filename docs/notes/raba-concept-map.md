# RABA Concept Map and Scope Guard

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Purpose:** Navigation / consolidation aid  
**Scope:** Preserve project coherence and prevent concept drift  

> This document does not define new RABA architecture.  
> It organizes existing working material around the core RABA question.  
> Human Owner confirmation is required before any canonical adoption, schema change, or architecture restructuring.

---

## 1. Core RABA question

RABA is not about everything related to AI.

RABA is about a specific governance problem:

```text
How do we keep human responsibility explicit when AI-supported outputs become consequential business actions?
```

Short formulation:

```text
AI may be probabilistic.
Responsibility must not be.
```

Operational formulation:

```text
AI-supported output
→ boundary transition
→ authority / admissibility / consequence check
→ responsibility event
→ decision log
→ replayable accountability
```

---

## 2. Scope guard

A concept belongs in RABA only if it helps answer at least one of these questions:

1. What AI-supported output, evidence, plan, or action is crossing a boundary?
2. What consequence may be created?
3. Who has authority to allow, limit, refuse, or escalate it?
4. What evidence or admissibility condition supports the action?
5. Who accepts responsibility?
6. What must be recorded for replay, audit, correction, or accountability?
7. How is hidden responsibility drift prevented?

If a concept does not connect to consequence, authority, admissibility, responsibility, or replay, it should not be treated as core RABA architecture.

### 2.1 Scope Guard Test

A new concept passes the scope guard only if it can answer these three questions:

1. **Boundary:** What specific responsibility boundary or consequence transition does this concept sharpen?
2. **Decision:** Who must decide, approve, refuse, limit, or escalate at that boundary?
3. **Record:** What must be recorded for responsibility, replay, correction, or audit?

If the answer to all three is weak, speculative, or dependent on another new concept, the concept should not be added as a new note.

It may be captured as a comment, review input, or deferred question instead.

---

## 3. Level 1 — RABA Core

The core layer should remain small.

It contains the minimum responsibility architecture needed for AI-supported consequential workflows:

- **Action Boundary** — where AI-supported output approaches or becomes action;
- **Decision Log** — why consequential use was allowed, limited, refused, or escalated;
- **Responsibility Event Stream** — how responsibility-relevant state changed;
- **Human Response Window** — when human confirmation or escalation is time-bound;
- **Governed Bypass** — preparation may continue, but unauthorized consequence must not.

Core principle:

```text
Consequential action requires authority, admissibility, decision record, and replay.
```

### 3.1 Minimum Core Question

Before canonicalization, the Human Owner should explicitly answer:

```text
If RABA could only canonicalize three core concepts first, which three would they be?
```

This question prevents the core from solidifying by accumulation rather than by decision.

No answer is adopted by this note.

### 3.2 Human Response Window caution

If Human Response Window is later treated as candidate core, its canonicalization review must include cognitive-friction safeguards against passive approval and rubber-stamp behavior.

A timer alone must not be treated as proof of human understanding.

---

## 4. Level 2 — Boundary Patterns

Boundary patterns extend the core by identifying different kinds of responsibility transitions.

They should remain connected to the same core question:

```text
Which transition creates a new responsibility condition?
```

Current boundary-pattern working notes include:

- **Consequence Boundary Trigger Matrix** — detects transitions into new consequence classes;
- **Recursive Evidence Boundary** — transferred proof becomes an incoming claim requiring local admissibility;
- **Reliance Boundary Control Loop** — external evidence becomes local reliance only after a receiving-boundary decision;
- **Agentic AI Responsibility Threshold** — agentic risk begins when AI output becomes workflow state change.

### 4.1 Consequence Transition Principle

Boundary patterns share a non-canonical organizing principle:

```text
The dangerous moment is not only generation.
The dangerous moment is transition into consequence.
```

Working name:

```text
Consequence Transition Principle
```

This principle is an organizing label only.

It is not canonical architecture unless separately reviewed and approved.

---

## 5. Level 3 — Observability, Implementation, and Market-Facing Extensions

This layer helps explain, implement, test, or position RABA.

It is not the core canon.

Current implementation-facing or market-facing working materials include:

- **Responsibility Observability Layer** — makes responsibility transitions visible, analyzable, and replayable;
- **AI Role Profile** — defines AI role, allowed outputs, forbidden outputs, boundaries, and escalation owners;
- **Governance Mapping Workshop Add-on** — helps organizations map responsibility before AI adoption becomes consequential;
- **RABA-over-RAG** — positions RABA above RAG by distinguishing source traceability from decision admissibility;
- **External market references** — useful as signals only, not as adoption, endorsement, or dependency.

Scope guard:

```text
Implementation and market references may inform RABA.
They must not silently become RABA canon.
```

### 5.1 Silent Canonicalization Drift Trigger

Repeated operational use of a non-canonical concept should trigger Human Owner review.

Working trigger:

```text
If a non-canonical implementation or market-facing concept is repeatedly used as a basis for architecture, workflow design, or public positioning, pause and request Human Owner review.
```

This trigger does not canonicalize the concept.

It prevents de facto canon from forming through repetition.

---

## 6. Classification criteria

Current working classification criteria:

| Layer | Primary question | Typical output |
|---|---|---|
| Core | What is required for RABA to preserve explicit responsibility? | Canonical candidate architecture |
| Boundary Pattern | Which transition changes responsibility conditions? | Non-canonical pattern / candidate architecture |
| Implementation / Market-Facing Extension | How can RABA be explained, tested, mapped, or implemented? | Workshop aid, stress test, observability idea, role profile |
| External Input / Review Aid | What external signal or critique should be preserved for evaluation? | Review note, external input, synthesis, checklist |
| Navigation / Scope Guard | How do we prevent drift and keep the project readable? | Index, concept map, transfer summary |

These criteria are non-canonical and may be revised.

---

## 7. Candidate label purpose table

The following labels are not approved as canonical event families, schemas, or architecture components.

They are preserved only to keep context for future review.

| Candidate label | What it was trying to capture | Current status |
|---|---|---|
| `incoming_claim` | External proof entering a new domain as a claim requiring local admissibility | Candidate label only |
| `reliance_boundary` | Receiving-boundary transition from external evidence to local reliance | Candidate label only |
| `agentic_ai` | Mode where AI plans, uses tools, or coordinates workflow beyond answer generation | Candidate label only |
| `agent_boundary` | Boundary where agentic behavior approaches consequence-capable action | Candidate label only |
| `workflow_state_change` | AI output becoming a change in task or business workflow state | Candidate label only |
| `responsibility_observability` | Visibility into responsibility transitions, not just technical events | Candidate label only |
| `observability_layer` | Possible implementation layer for monitoring responsibility behavior | Candidate label only |
| `responsibility_dashboard` | Possible UI/reporting surface for responsibility events and decision replay | Candidate label only |

No Responsibility Event Stream schema change has been made.

No Decision Log schema change has been made.

No single canonical schema source file has been confirmed yet.

---

## 8. Concept map

The current working map can be summarized as:

```text
AI-supported output / evidence / plan
        ↓
boundary transition detected
        ↓
authority + admissibility + consequence checks
        ↓
responsibility event recorded
        ↓
Decision Log explains allowed / limited / refused / escalated use
        ↓
replayable accountability
        ↓
governance insight / correction / drift prevention
```

This map is a navigation aid only.

It does not approve any specific schema.

---

## 9. What RABA is not

RABA should not become:

- a general AI encyclopedia;
- a list of all AI risks;
- a vendor comparison framework;
- a generic compliance checklist;
- a technical observability platform;
- an AI agent taxonomy project;
- a replacement for legal, security, or compliance functions;
- a collection of unrelated market observations.

RABA may reference these areas only when they clarify responsibility boundaries in AI-supported consequential workflows.

---

## 10. Current consolidation rule

Until the concept map is stable, new notes should be added cautiously.

Preferred next work should focus on:

- linking existing notes;
- clarifying levels;
- reducing duplication;
- preparing canonicalization reviews;
- separating core, candidate architecture, and external input;
- improving README / navigation only after Human Owner confirmation.

Working rule:

```text
Do not expand the concept space unless the new concept sharpens a responsibility boundary.
```

---

## 11. Canonicalization Pack Exit Rule

Consolidation is not the destination.

Canonicalization should begin only when the Human Owner explicitly selects a concrete Canonicalization Pack for review.

A Canonicalization Pack should identify:

- target concept or file;
- proposed canonical scope;
- required schema impact, if any;
- required UI or workflow impact, if any;
- Decision Log impact;
- Responsibility Event Stream impact;
- risks of adoption;
- risks of rejection;
- unresolved Human Owner questions.

No AI collaborator may start canonicalization merely because multiple AI systems agree.

---

## 12. Status of current working concepts

Current status overview:

```text
Core concepts: require canonical clarity and careful protection.
Boundary patterns: useful but mostly non-canonical.
Observability / implementation extensions: helpful, but not core canon.
External inputs: preserved for review, not approval.
```

No multi-AI agreement, market signal, or external expert input is sufficient for canonical adoption.

Final architectural approval belongs to the Human Owner.

---

## 13. Governance boundary

This note is:

- a working note;
- non-canonical;
- a navigation and consolidation aid;
- not accepted architecture;
- not a Decision Log entry;
- not a schema change;
- not an implementation commitment.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
