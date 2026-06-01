# Tranche 1.1 Canonicalization Package Draft

**Status:** PR-ready canonicalization package draft  
**Canonical status:** Non-canonical  
**Location status:** Review workspace only; not under `docs/core/v1/`  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  
**Human Owner status:** Separate approval required before any PR, merge, or canonical adoption  

> This draft is not canon.  
> It does not approve architecture.  
> It does not adopt schemas, event families, dashboards, integrations, or public claims.  
> It is a draft package that may later be used to prepare canonical files only after separate Human Owner confirmation.

---

## 1. Purpose

This draft translates the verified Tranche 1.1 readiness materials into a package that could later become a PR-ready canonicalization proposal.

It captures the minimum candidate core needed to define how RABA identifies consequential AI-supported action, classifies action type, detects action-boundary approach, records responsibility acceptance, and preserves a minimal responsibility transition trace.

---

## 2. Draft package sequence

The proposed review sequence is:

```text
Consequential Action Definition
→ Action Classes
→ Action Boundary
→ Decision Log
→ Responsibility Event Stream stub
```

This order must be preserved because each element depends on the previous one.

---

## 3. Candidate scope for future canonical review

Candidate Tranche 1.1 scope:

```text
Consequential Action Definition
Action Classes
Action Boundary
Decision Log minimum governance elements
Responsibility Event Stream minimal stub
```

Deferred scope:

```text
Human Response Window
Governed Bypass
AI Speed and Responsibility Acceptance
Boundary Patterns
Implementation / Market-Facing Extensions
```

Deferred items are not optional for mature RABA.

They are only excluded from Tranche 1.1 because they depend on a stable data-and-boundary foundation.

---

## 4. Human Owner verification already completed

The Human Owner verified that:

- the Case A / Case B boundary test is accepted;
- candidate Action Classes are suitable for review;
- `UNCLASSIFIED_CONSEQUENTIAL_ACTION` remains a fallback candidate;
- Action Boundary is suitable for Tranche 1.1 review;
- AI may detect boundary approach but must not be the final judge of admissibility;
- Decision Log is a governance record, not a generic audit log;
- `named human`, `scope of responsibility`, and `timestamp of acceptance` are required for review;
- Responsibility Event Stream remains in Tranche 1.1 only as a stub;
- `boundary_transition_event` is candidate-only and not an adopted event family;
- no schema, event family, public positioning, implementation commitment, PR approval, or merge approval is implied.

Source:

```text
docs/reviews/tranche-1-1-human-owner-verification-checklist.md
```

---

## 5. Candidate canonical statements for future review

The following statements are candidates only.

They are not adopted by this draft.

### 5.1 Consequential Action Definition

Candidate statement:

```text
A consequential action is an AI-supported action, recommendation, decision, workflow change, external communication, approval, refusal, transaction, commitment, or escalation that may materially affect a person, customer, employee, obligation, entitlement, operational state, compliance status, or business outcome.
```

Boundary test:

```text
AI prepares information for human review = not automatically consequential.
AI output directly changes workflow state = consequential.
```

### 5.2 Action Classes

Candidate statement:

```text
Action Classes provide a flat candidate taxonomy for classifying AI-supported activity according to governance response, not technical implementation detail.
```

Candidate source:

```text
action-classes.candidate.yaml
```

### 5.3 Action Boundary

Candidate statement:

```text
An Action Boundary is the point at which AI-supported output, recommendation, evidence, or plan approaches a consequential business action and therefore requires explicit authority, admissibility, responsibility, and record handling.
```

Boundary constraint:

```text
AI may detect boundary approach, but must not be the final judge of admissibility.
```

### 5.4 Decision Log

Candidate statement:

```text
A Decision Log records why consequential AI-supported use was allowed, limited, refused, escalated, or blocked, under whose authority, with what evidence, and with what unresolved limits.
```

Minimum governance elements for review:

```text
named human
scope of responsibility
timestamp of acceptance
```

Working rule:

```text
If a record does not show who accepted responsibility, for what scope, and when, it is not a Decision Log. It is an audit log.
```

Candidate source:

```text
decision-log-minimum-fields.md
```

### 5.5 Responsibility Event Stream Stub

Candidate statement:

```text
Responsibility Event Stream may be referenced in Tranche 1.1 only as a minimal stub for responsibility-relevant boundary transitions.
```

Candidate root event type for review:

```text
boundary_transition_event
```

This is not adopted.

It is not an event family.

Candidate source:

```text
boundary-transition-event.stub.yaml
```

---

## 6. What this draft must not authorize

This draft does not authorize:

- canonical adoption;
- PR creation;
- merge approval;
- event-family adoption;
- schema adoption;
- implementation guidance;
- serialization formats;
- data contracts;
- dashboards;
- integrations;
- public positioning changes;
- vendor references;
- pilot claims;
- commercial commitments.

---

## 7. Required next Human Owner decision

Before any real PR-ready canonicalization package is created outside the review workspace, the Human Owner must separately decide whether to create a real PR-ready canonicalization branch or package for Tranche 1.1.

That future package may propose files under a canonical location such as `docs/core/v1/`, but this draft does not create that location or approve that move.

---

## 8. Governance boundary

This document is:

- non-canonical;
- draft material only;
- not architecture approval;
- not a Decision Log entry;
- not a schema change;
- not event-family adoption;
- not PR approval;
- not merge approval;
- not implementation guidance.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
