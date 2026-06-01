# Tranche 1.1 Canonicalization Proposal

**Status:** PR-ready canonicalization proposal  
**Canonical status:** Non-canonical  
**Location status:** Candidate workspace only; not `docs/core/v1/`  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  
**Human Owner status:** Preparation authorized; canonical adoption not authorized

> This proposal is not canon.  
> It does not approve architecture.  
> It does not adopt schemas, event families, dashboards, integrations, runtime enforcement, implementation guidance, public claims, pilot claims, vendor references, or commercial commitments.  
> It may be reviewed as a candidate package only.

---

## 1. Purpose

This proposal prepares the minimum Tranche 1.1 core needed to review how RABA identifies consequential AI-supported action, classifies action type, detects Action Boundary approach, records responsibility acceptance, and preserves a minimal responsibility transition trace.

It is based on verified non-canonical review materials and the Human Owner confirmation to prepare candidate files under:

```text
docs/core/candidates/tranche-1-1/
```

It intentionally does not create:

```text
docs/core/v1/
```

---

## 2. Review sequence

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

## 3. Candidate scope

Tranche 1.1 candidate scope:

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

They are excluded from Tranche 1.1 because they depend on a stable data-and-boundary foundation.

---

## 4. Candidate canonical statements for review

The following statements are candidates only.

They are not adopted by this proposal.

### 4.1 Consequential Action Definition

Candidate statement:

```text
A consequential action is an AI-supported action, recommendation, decision, workflow change, external communication, approval, refusal, transaction, commitment, or escalation that may materially affect a person, customer, employee, obligation, entitlement, operational state, compliance status, or business outcome.
```

Boundary test:

```text
AI prepares information for human review = not automatically consequential.
AI output directly changes workflow state = consequential.
```

Candidate source:

```text
consequential-action-definition.md
```

### 4.2 Action Classes

Candidate statement:

```text
Action Classes provide a flat candidate taxonomy for classifying AI-supported activity according to governance response, not technical implementation detail.
```

Candidate source:

```text
action-classes.candidate.yaml
```

### 4.3 Action Boundary

Candidate statement:

```text
An Action Boundary is the point at which AI-supported output, recommendation, evidence, or plan approaches a consequential business action and therefore requires explicit authority, admissibility, responsibility, and record handling.
```

Boundary constraint:

```text
AI may detect boundary approach, but must not be the final judge of admissibility.
```

Candidate source:

```text
action-boundary.md
```

### 4.4 Decision Log

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
decision-log-minimum-governance-elements.md
```

### 4.5 Responsibility Event Stream Stub

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
responsibility-event-stream-stub.yaml
```

---

## 5. Adoption blockers

This proposal must not be treated as adoption unless a later Human Owner decision and merge process explicitly approve it.

Open blockers before canonical adoption:

- Human Owner canonical approval not yet given;
- PR review not yet completed;
- merge not yet approved;
- Decision Log adoption decision not yet recorded;
- no `docs/core/v1/` structure has been created;
- no schema has been adopted;
- no event family has been adopted;
- no runtime or implementation guidance has been adopted.

---

## 6. What this proposal must not authorize

This proposal does not authorize:

- canonical adoption;
- PR merge;
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

## 7. Governance boundary

Human Owner confirmation authorized preparation of this candidate package only.

Final architectural approval belongs to the Human Owner.

Multi-AI agreement is not final approval.

PR readiness is not final approval.

Merge requires separate Human Owner confirmation.
