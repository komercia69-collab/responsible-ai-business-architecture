# RABA Minimum Core Canonicalization Pack

**Status:** Canonicalization Pack for Review  
**Canonical status:** Non-canonical  
**Target:** Candidate minimum RABA core  
**Proposed review set:** Action Boundary, Decision Log, Responsibility Event Stream  
**Human Owner status:** Review required before any canonical adoption  

> This pack is not a canonicalization decision.  
> It prepares the first possible RABA core review.  
> No concept, schema, event family, or implementation requirement is adopted by this document.  
> Final architectural approval belongs to the Human Owner.

---

## 1. Purpose

This pack starts a focused review of the smallest possible RABA core.

The guiding question is:

```text
If RABA could only canonicalize three core concepts first, which three would they be?
```

Candidate answer for review:

```text
Action Boundary
Decision Log
Responsibility Event Stream
```

This is a review candidate only.

---

## 2. Why these three

These three concepts form a minimal chain:

```text
AI-supported output approaches action
→ boundary is identified
→ decision is recorded
→ responsibility-relevant state change is captured
→ replay becomes possible
```

### 2.1 Action Boundary

Action Boundary answers:

```text
Where does AI-supported output approach or become consequential action?
```

Without an Action Boundary, RABA cannot distinguish harmless generation from responsibility-relevant action.

### 2.2 Decision Log

Decision Log answers:

```text
Why was consequential use allowed, limited, refused, or escalated?
```

Without a Decision Log, RABA cannot reconstruct the human or organizational reason for allowing consequence.

### 2.3 Responsibility Event Stream

Responsibility Event Stream answers:

```text
How did responsibility-relevant state change over time?
```

Without a Responsibility Event Stream, RABA cannot replay how an AI-supported process moved from proposal to consequence, escalation, bypass, or block.

---

## 3. What is intentionally excluded from first-core review

The following are important but not proposed as first-three core concepts in this pack:

- **Human Response Window** — may be a confirmation / escalation mechanism rather than a first-core concept;
- **Governed Bypass** — may be a governed mode triggered when action cannot proceed as consequence;
- **Recursive Evidence Boundary** — strong boundary pattern, not necessarily minimum core;
- **Reliance Boundary Control Loop** — strong boundary pattern, not necessarily minimum core;
- **Agentic AI Responsibility Threshold** — strong boundary pattern, not necessarily minimum core;
- **Responsibility Observability Layer** — implementation / monitoring extension;
- **Governance Mapping Workshop Add-on** — implementation / adoption aid;
- **AI Role Profile** — implementation artifact / role-boundary template.

This exclusion is not rejection.

It only limits the first canonicalization review.

---

## 4. Proposed canonical scope for review

### 4.1 Action Boundary candidate scope

Possible minimum definition:

```text
An Action Boundary is the point at which AI-supported output, recommendation, evidence, or plan approaches a consequential business action and therefore requires explicit authority, admissibility, responsibility, and record handling.
```

Review questions:

- What counts as approaching action?
- What consequence classes trigger boundary handling?
- Can an AI system detect boundary approach without deciding admissibility itself?
- Which roles may approve, limit, refuse, or escalate boundary crossing?

### 4.2 Decision Log candidate scope

Possible minimum definition:

```text
A Decision Log records why consequential AI-supported use was allowed, limited, refused, escalated, or blocked, under whose authority, with what evidence, and with what unresolved limits.
```

Review questions:

- What minimum fields are required?
- How does Decision Log differ from technical audit log and Source Log?
- When is a Decision Log entry required?
- How does it connect to Human Owner decisions and business-process owners?

### 4.3 Responsibility Event Stream candidate scope

Possible minimum definition:

```text
A Responsibility Event Stream records responsibility-relevant state transitions in an AI-supported workflow so that the path from AI proposal to consequence, bypass, escalation, or block can be replayed.
```

Review questions:

- What is the minimum event model?
- Which events are canonical and which remain candidates?
- How does the stream link to Decision Log entries?
- How does it avoid becoming a generic technical event log?

---

## 5. Required schema impact review

This pack does not change schema.

Before canonical adoption, review must decide whether the first-core concepts require:

- a canonical Decision Log field list;
- a canonical Responsibility Event Stream event envelope;
- an Action Boundary classification field;
- source / evidence references;
- authority status fields;
- consequence class fields;
- replay record references.

No single canonical schema source file has been confirmed yet.

No field is adopted by this pack.

---

## 6. Required UI / workflow impact review

Before canonical adoption, review must decide whether the first-core concepts require UI or workflow rules for:

- boundary warnings;
- explicit approval / refusal / limitation / escalation;
- source and evidence review;
- responsibility acceptance;
- cognitive friction against passive approval;
- replay access;
- separation between preparation and consequence.

This pack does not define UI requirements.

---

## 7. Decision Log impact

If the pack is later adopted, Decision Log may become a first-core component.

Open questions:

- Does every boundary crossing require a Decision Log entry?
- Which low-risk actions may avoid Decision Log capture?
- How are refused or escalated actions recorded?
- How are unresolved limits recorded?
- How does Decision Log avoid becoming a compliance checkbox?

---

## 8. Responsibility Event Stream impact

If the pack is later adopted, Responsibility Event Stream may become a first-core component.

Open questions:

- Which event families are canonical?
- Which candidate events must remain non-canonical?
- What minimum event envelope is required?
- How are Decision Log references linked?
- How is replay integrity protected?

This pack does not adopt any event family.

---

## 9. Risks of adoption

Adopting this minimum core too early may create risks:

- Action Boundary may remain too abstract;
- Decision Log may be mistaken for a generic audit log;
- Responsibility Event Stream may be confused with technical observability;
- Human Response Window and Governed Bypass may be underrepresented;
- boundary-pattern insights may be disconnected from core;
- premature schema decisions may freeze immature concepts.

---

## 10. Risks of rejection or delay

Rejecting or delaying this minimum core may create risks:

- RABA remains a set of strong working notes without a stable center;
- new collaborators may see the project as broad or unfocused;
- boundary patterns may continue accumulating without core alignment;
- implementation-facing materials may drift into de facto canon;
- canonicalization may stall indefinitely.

---

## 11. Human Owner questions

The Human Owner should decide:

1. Is `Action Boundary + Decision Log + Responsibility Event Stream` the right first-core review set?
2. Should Human Response Window be part of first-core instead of Responsibility Event Stream or alongside it?
3. Should Governed Bypass be treated as first-core or as a downstream operating mode?
4. Should the first canonicalization review focus on definitions only, or definitions plus schema impact?
5. Should a separate canonical schema index be created before any schema adoption?
6. What level of implementation detail is appropriate before canonical adoption?

---

## 12. Recommended next step

Recommended next step:

```text
Human Owner reviews this pack and either selects it for deeper canonicalization review, revises the first-core set, or defers canonicalization.
```

No AI collaborator should proceed from this pack to canonical adoption without explicit Human Owner confirmation.

---

## 13. Governance boundary

This pack is:

- non-canonical;
- a review package;
- not a Decision Log entry;
- not architecture approval;
- not a schema change;
- not an event-family adoption;
- not an implementation commitment.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
