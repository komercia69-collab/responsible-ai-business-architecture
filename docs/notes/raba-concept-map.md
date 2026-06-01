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

Shared pattern:

```text
The dangerous moment is not only generation.
The dangerous moment is transition into consequence.
```

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

---

## 6. Concept map

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

## 7. What RABA is not

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

## 8. Current consolidation rule

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

## 9. Status of current working concepts

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

## 10. Governance boundary

This note is:

- a working note;
- non-canonical;
- a navigation and consolidation aid;
- not accepted architecture;
- not a Decision Log entry;
- not a schema change;
- not an implementation commitment.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
