# RABA Minimum Core Canonicalization Pack

**Status:** Canonicalization Pack for Review  
**Canonical status:** Non-canonical  
**Target:** Candidate minimum RABA core  
**Proposed review set:** Action Boundary, Decision Log, Responsibility Event Stream  
**Repair status:** Requires Tranche 1.1 readiness review before deeper canonicalization  
**Human Owner status:** Review required before any canonical adoption  

> This pack is not a canonicalization decision.  
> It prepares the first possible RABA core review.  
> No concept, schema, event family, dashboard, integration, market-facing claim, or implementation requirement is adopted by this document.  
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

Current repair conclusion:

```text
Minimum Core Pack is not ready for canonicalization.
It is ready for repair into a Tranche 1.1 Readiness Pack.
```

---

## 2. Responsibility spine framing

The proposed first-core set should be understood as a responsibility spine, not as a full operating model.

```text
AI-supported output approaches action
→ boundary is identified
→ decision is recorded
→ responsibility-relevant state change is captured
→ replay becomes possible
```

The current working distinction is:

```text
Governance pair:
- Action Boundary
- Decision Log

Runtime / replay component:
- Responsibility Event Stream
```

This distinction recognizes that the three proposed concepts are not identical in type:

- **Action Boundary** is a governance condition;
- **Decision Log** is a decision record / artifact;
- **Responsibility Event Stream** is a runtime / replay mechanism.

This does not reject Responsibility Event Stream.

It means Responsibility Event Stream should not be canonicalized without at least a minimal schema-stub review.

---

## 3. Consequential action definition requirement

A critical blocker was identified before deeper canonicalization review:

```text
RABA must define what makes an action consequential before Action Boundary can be canonicalized.
```

Candidate definition for review:

```text
A consequential action is an AI-supported action, recommendation, decision, workflow change, external communication, approval, refusal, payment, denial, commitment, or escalation that may materially affect a person, customer, employee, transaction, obligation, entitlement, operational state, compliance status, or business outcome.
```

This definition is not adopted.

It is a candidate activation condition for Action Boundary review.

---

## 4. Tranche framing

### 4.1 Tranche 1.1 — Data and Boundary Canon Readiness

Candidate readiness scope:

```text
Action Classes
Consequential Action Definition
Action Boundary
Decision Log
Responsibility Event Stream minimal schema stub
```

Tranche 1.1 prepares the minimum responsibility spine and its activation condition.

It does not create canon.

### 4.2 Tranche 1.2 — Interface and Exception Canon Readiness

Deferred review scope:

```text
Human Response Window
Governed Bypass
AI Speed and Responsibility Acceptance
```

These items are important, but they should not be canonicalized before Action Boundary and Decision Log are stable.

Human Response Window and Governed Bypass are not optional.

They are baseline operating mechanisms to be evaluated in a later pack.

AI Speed and Responsibility Acceptance should remain a design / risk principle for now, not a schema-level canonical object.

---

## 5. Candidate action classes for review

The following candidate action classes are proposed only to support review of Tranche 1.1.

They are not adopted as schema.

```text
READ_ONLY
INTERNAL_RECOMMENDATION
WORKFLOW_STATE_CHANGE
DATA_MUTATION
EXTERNAL_COMMUNICATION
EXTERNAL_TRANSACTION
APPROVAL_OR_DENIAL
COMPLIANCE_SIGN_OFF
ESCALATION_OR_HANDOFF
```

Review questions:

- Are these classes sufficiently flat for first review?
- Which classes trigger Action Boundary handling?
- Which classes require Decision Log capture?
- Which classes must generate Responsibility Event Stream records?
- Are any classes too broad, redundant, or implementation-specific?

---

## 6. What is intentionally excluded from first-core review

The following are important but not proposed as first-three core concepts in this pack:

- **Human Response Window** — confirmation / escalation timing mechanism to be reviewed later;
- **Governed Bypass** — governed operating mode for preparation without unauthorized consequence;
- **Recursive Evidence Boundary** — strong boundary pattern, not necessarily minimum core;
- **Reliance Boundary Control Loop** — strong boundary pattern, not necessarily minimum core;
- **Agentic AI Responsibility Threshold** — strong boundary pattern, not necessarily minimum core;
- **Responsibility Observability Layer** — implementation / monitoring extension;
- **Governance Mapping Workshop Add-on** — implementation / adoption aid;
- **AI Role Profile** — implementation artifact / role-boundary template.

This exclusion is not rejection.

It only limits the first canonicalization review.

Boundary Patterns and Implementation notes are testbeds and lenses on the core, not constituents of the first canonical set.

---

## 7. Proposed canonical scope for review

### 7.1 Action Boundary candidate scope

Possible minimum definition:

```text
An Action Boundary is the point at which AI-supported output, recommendation, evidence, or plan approaches a consequential business action and therefore requires explicit authority, admissibility, responsibility, and record handling.
```

Review questions:

- What counts as approaching action?
- What consequence classes trigger boundary handling?
- Can an AI system detect boundary approach without deciding admissibility itself?
- Which roles may approve, limit, refuse, or escalate boundary crossing?
- Does the candidate consequential-action definition provide enough activation clarity?

### 7.2 Decision Log candidate scope

Possible minimum definition:

```text
A Decision Log records why consequential AI-supported use was allowed, limited, refused, escalated, or blocked, under whose authority, with what evidence, and with what unresolved limits.
```

Review questions:

- What minimum fields are required?
- How does Decision Log differ from technical audit log and Source Log?
- When is a Decision Log entry required?
- How does it connect to Human Owner decisions and business-process owners?
- Can Decision Log remain meaningful without becoming a compliance checkbox?

### 7.3 Responsibility Event Stream candidate scope

Possible minimum definition:

```text
A Responsibility Event Stream records responsibility-relevant state transitions in an AI-supported workflow so that the path from AI proposal to consequence, bypass, escalation, or block can be replayed.
```

Review questions:

- What is the minimum event model?
- Which events are canonical and which remain candidates?
- How does the stream link to Decision Log entries?
- How does it avoid becoming a generic technical event log?
- Is a minimal schema stub required before canonicalization?

---

## 8. Required schema impact review

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

### 8.1 Candidate Responsibility Event Stream schema stub

If Responsibility Event Stream remains in Tranche 1.1, it should be reviewed with a minimal schema stub.

Candidate required fields:

```yaml
event_id:
event_type:
action_class:
boundary_status:
decision_log_ref:
responsibility_owner:
timestamp:
```

Candidate optional fields:

```yaml
source_ref:
consequence_class:
authority_status:
replay_ref:
```

This stub is not adopted.

It is only a review aid.

---

## 9. Required UI / workflow impact review

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

## 10. Decision Log impact

If the pack is later adopted, Decision Log may become a first-core component.

Open questions:

- Does every boundary crossing require a Decision Log entry?
- Which low-risk actions may avoid Decision Log capture?
- How are refused or escalated actions recorded?
- How are unresolved limits recorded?
- How does Decision Log avoid becoming a compliance checkbox?
- Should every Decision Log entry reference a Responsibility Event Stream event, or can some decisions exist without event-stream linkage?

---

## 11. Responsibility Event Stream impact

If the pack is later adopted, Responsibility Event Stream may become a first-core component.

Open questions:

- Which event families are canonical?
- Which candidate events must remain non-canonical?
- What minimum event envelope is required?
- How are Decision Log references linked?
- How is replay integrity protected?
- Should Responsibility Event Stream be deferred until a schema-stub review is accepted?

This pack does not adopt any event family.

---

## 12. Risks of adoption

Adopting this minimum core too early may create risks:

- Action Boundary may remain too abstract;
- consequential action may be underdefined;
- Decision Log may be mistaken for a generic audit log;
- Responsibility Event Stream may be confused with technical observability;
- Human Response Window and Governed Bypass may be underrepresented;
- boundary-pattern insights may be disconnected from core;
- premature schema decisions may freeze immature concepts;
- external adopters may over-interpret conceptual canon as authorization for schemas, event families, dashboards, integrations, or market-facing claims.

Mitigation:

```text
Canonicalization of the minimum core would not authorize any schemas, event families, dashboards, integrations, or public claims unless separately reviewed and approved.
```

---

## 13. Risks of rejection or delay

Rejecting or delaying this minimum core may create risks:

- RABA remains a set of strong working notes without a stable center;
- new collaborators may see the project as broad or unfocused;
- boundary patterns may continue accumulating without core alignment;
- implementation-facing materials may drift into de facto canon;
- canonicalization may stall indefinitely;
- external credibility may weaken if RABA lacks a stable responsibility spine before pilot or partner discussions.

---

## 14. Human Owner questions

The Human Owner should decide:

1. Is `Action Boundary + Decision Log + Responsibility Event Stream` the right first-core review direction?
2. Should the first readiness path use Tranche 1.1 rather than a full seven-item core-set?
3. Is the candidate consequential-action definition suitable for review?
4. Are the candidate action classes suitable for review?
5. Should Responsibility Event Stream remain in Tranche 1.1 only with a minimal schema stub?
6. Should Human Response Window and Governed Bypass be explicitly deferred to Tranche 1.2?
7. Should AI Speed and Responsibility Acceptance remain a design / risk principle for now?
8. Should the first canonicalization review focus on definitions only, or definitions plus schema impact?
9. Should a separate canonical schema index be created before any schema adoption?
10. What level of implementation detail is appropriate before canonical adoption?

---

## 15. Recommended next step

Recommended next step:

```text
Human Owner reviews the Tranche 1.1 Readiness Pack and either selects it for future PR-ready canonicalization work, revises the tranche scope, or defers canonicalization.
```

No AI collaborator should proceed from this pack to canonical adoption without explicit Human Owner confirmation.

---

## 16. Governance boundary

This pack is:

- non-canonical;
- a review package;
- not a Decision Log entry;
- not architecture approval;
- not a schema change;
- not an event-family adoption;
- not an implementation commitment;
- not authorization for schemas, dashboards, integrations, or public claims.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
