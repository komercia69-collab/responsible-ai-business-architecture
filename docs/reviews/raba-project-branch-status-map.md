# RABA Project Branch Status Map

**Status:** Project branch status map  
**Canonical status:** Non-canonical  
**Purpose:** Classify RABA project branches without adopting them as canon  
**Related context:** Project map, NotebookLM roadmap review, PR #74  
**Date:** 2026-06-01  
**Human Owner:** Oleksandr / Александр

> This status map is not canon.  
> It does not approve architecture, schemas, event families, runtime layers, implementation guidance, public positioning, pilots, vendor references, or commercial commitments.  
> It is a project-management and review artifact for preventing semantic expansion and protecting canonicalization boundaries.

---

## 1. Why this map exists

RABA now contains several kinds of material:

```text
core responsibility concepts
runtime architecture candidates
application / market-facing ideas
research directions
meta-governance practices
risk and failure-pattern analysis
```

These materials are useful, but they do not have the same architectural status.

This map helps reviewers avoid treating roadmap coherence as architectural approval.

---

## 2. Status labels

Use the following labels when reviewing RABA branches:

```text
Canonical — accepted by Human Owner and merged through decision trail.
Candidate — proposed for canonicalization or architecture review, not adopted.
Working Note — exploratory or analytical material, not canon.
Research — long-range or speculative direction.
Deferred — important but intentionally outside current tranche.
Application / Pilot — practical use-case or external-facing material, not core canon.
Commercial Concept — possible business-facing concept, not activated without Human Owner decision.
Risk Review — cross-cutting warning, failure mode, or control lens.
```

No label should be inferred automatically from file location alone.

Human Owner confirmation and decision trail remain required for adoption.

---

## 3. Branch A — Principles

| Map item | Recommended status | Notes |
| --- | --- | --- |
| Operational Responsibility | Candidate / core principle under review | Strong candidate for canon, but adoption depends on specific accepted files. |
| Governed Speed | Candidate principle | Important, but must remain bounded by responsibility acceptance. |
| Speed Protection Principle | Candidate / working principle | Useful for avoiding false optimization incentives. |
| Policy Integrity | Candidate / partially developed concept | Should be linked to governance drift prevention. |
| Boundary | Candidate core principle | Must be separated from runtime UI or bypass behavior. |

Review rule:

```text
Principles may guide canon, but principles are not automatically schemas, runtime layers, or implementation guidance.
```

---

## 4. Branch B — Architecture and runtime

| Map item | Recommended status | Notes |
| --- | --- | --- |
| Responsibility Layer / Action Boundary | Candidate core architecture | Narrow portion is included in PR #74 as Tranche 1.1 candidate. |
| Approval States | Deferred / runtime candidate | DRAFT → EXECUTED logic is important but broader than Tranche 1.1. |
| Governance Gateway | Runtime architecture candidate | Should not be adopted through Tranche 1.1. |
| Decision Log & Event Stream | Candidate core architecture | PR #74 includes minimum Decision Log elements and Event Stream stub only. |
| Responsibility Management Interface | Runtime candidate / future tranche | Important bridge between governance architecture and workflow interface. |
| Agent Identity & MCP Layer | Research / runtime candidate | Needs separate review and external technical grounding. |

Review rule:

```text
Runtime architecture must not silently enter core canon through roadmap language.
```

---

## 5. Branch C — Application

| Map item | Recommended status | Notes |
| --- | --- | --- |
| Regulatory Mapping | Application / review support | Useful for mapping, not canon by itself. |
| Policy Integrity Assessment | Application / diagnostic candidate | Could become tool or checklist later. |
| Pilots & Use Cases | Application / Pilot | Requires separate Human Owner activation before external commitments. |
| Business Diagnosis | Application / diagnostic candidate | Useful for explaining failure patterns. |
| Starter Kit & Proof Layer | Application / commercial-adjacent candidate | Must not imply market readiness or pilot commitment. |

Review rule:

```text
Application materials can demonstrate RABA value, but they must not redefine RABA canon.
```

---

## 6. Branch D / E — Meta-governance and evolution

| Map item | Recommended status | Notes |
| --- | --- | --- |
| Multi-AI Operating Model | Meta-governance / working model | Useful project practice, not architectural approval. |
| Project Direction & Whitepaper | Project governance / external narrative candidate | Must be kept separate from canon adoption. |
| Research / Governance Nervous System | Research | Long-range direction. |
| Experimental / Personal AI Twin | Research / experimental | Should remain explicitly non-canonical. |

Review rule:

```text
Multi-AI agreement is not Human Owner approval.
```

---

## 7. Risk layer

| Map item | Recommended status | Notes |
| --- | --- | --- |
| Accountability Gap | Risk Review | Core motivation for RABA. |
| Governance Drift | Risk Review | Strongly linked to Policy Integrity. |
| Semantic Expansion Risk | Risk Review | Critical risk during canonicalization. |
| AI-assisted Development Risk | Risk Review | Important for repository hygiene and human approval boundaries. |

Review rule:

```text
Risk items should constrain architecture, but they do not automatically create canonical controls.
```

---

## 8. Relationship to PR #74

PR #74 is limited to Tranche 1.1 candidate materials:

```text
Consequential Action Definition
Action Classes
Action Boundary
Decision Log minimum governance elements
Responsibility Event Stream minimal stub
```

The broader project branches in this map are context only.

They should not expand PR #74 scope.

---

## 9. Recommended next governance action

Before any future canonicalization tranche, create a small status review for the relevant branch:

```text
What is being proposed?
What is already accepted?
What remains candidate-only?
What is deferred?
What must not be silently adopted?
What requires Human Owner confirmation?
```

---

## 10. Governance boundary

This branch status map is:

- non-canonical;
- not architectural approval;
- not PR approval;
- not merge approval;
- not schema adoption;
- not event-family adoption;
- not implementation guidance;
- not public positioning;
- not pilot activation;
- not a commercial commitment.

Final architectural approval remains with the Human Owner.
