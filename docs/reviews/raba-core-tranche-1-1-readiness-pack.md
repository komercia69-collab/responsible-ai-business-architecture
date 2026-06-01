# RABA Core Tranche 1.1 Readiness Pack

**Status:** Readiness Pack  
**Canonical status:** Non-canonical  
**Purpose:** Prepare a future PR-ready canonicalization package without adopting canon  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  
**Human Owner status:** Human Owner review required before PR-ready canonicalization work  

> This pack is not canonical architecture.  
> It is not a schema change.  
> It is not a Decision Log entry.  
> It prepares the minimum materials needed to decide whether a future canonicalization PR should be created.  
> Final architectural approval belongs to the Human Owner.

---

## 1. Target scope

Tranche 1.1 prepares the responsibility spine and its activation condition.

Candidate scope:

```text
Action Classes
Consequential Action Definition
Action Boundary
Decision Log
Responsibility Event Stream minimal schema stub
```

Internal review sequence:

```text
Consequential Action Definition
→ Action Classes
→ Action Boundary
→ Decision Log
→ Responsibility Event Stream stub
```

This sequence matters because each element depends on the previous one.

This tranche does not include:

```text
Human Response Window
Governed Bypass
AI Speed and Responsibility Acceptance
Boundary Patterns
Implementation / Market-Facing Extensions
```

Those may be evaluated in later packs.

---

## 2. Candidate consequential action definition

Candidate definition:

```text
A consequential action is an AI-supported action, recommendation, decision, workflow change, external communication, approval, refusal, payment, denial, commitment, or escalation that may materially affect a person, customer, employee, transaction, obligation, entitlement, operational state, compliance status, or business outcome.
```

Purpose:

```text
This definition acts as the activation condition for Action Boundary review.
```

Status:

```text
Candidate definition only. Not adopted.
```

### 2.1 Consequentiality boundary test

The candidate definition must distinguish between:

```text
Case A:
AI summarizes a contract and presents the summary to a human who then decides whether to sign.

Case B:
AI summarizes a contract and pre-fills a signature field in a workflow system.
```

Expected classification:

```text
Case A = not automatically consequential.
Case B = consequential, because AI output moves into workflow state change.
```

If the definition captures both cases as consequential by default, it may be too broad.

If the definition excludes both cases, it may be too narrow.

Review questions:

- Is the definition broad enough to cover business, legal, operational, and customer-facing consequences?
- Is it too broad for first-core review?
- Does it pass the Case A / Case B test?
- Should “materially affect” be defined later?
- Should consequence classes be separate from action classes?

---

## 3. Candidate action classes

Candidate flat action-class list:

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
UNCLASSIFIED_CONSEQUENTIAL_ACTION
```

Purpose:

```text
Action classes help determine whether Action Boundary handling, Decision Log capture, or Responsibility Event Stream recording is required.
```

Status:

```text
Candidate taxonomy only. Not schema. Not canonical.
```

### 3.1 Governance-response test

Action Classes should remain flat, minimal, and governance-relevant.

Working test:

```text
If two action classes trigger the same Decision Log requirement,
the same escalation path,
and the same confirmation requirement,
they should be merged.
```

### 3.2 Fallback class

`UNCLASSIFIED_CONSEQUENTIAL_ACTION` is a fallback candidate class.

It prevents consequential actions from disappearing when they do not fit the first taxonomy.

It is not a license to avoid later classification.

Review questions:

- Which classes are always non-consequential?
- Which classes are potentially consequential depending on context?
- Which classes always require Decision Log capture?
- Which classes always require Responsibility Event Stream capture?
- Are any classes missing, overlapping, or too implementation-specific?
- Do the classes pass the governance-response test?

---

## 4. Candidate Action Boundary definition

Candidate definition:

```text
An Action Boundary is the point at which AI-supported output, recommendation, evidence, or plan approaches a consequential business action and therefore requires explicit authority, admissibility, responsibility, and record handling.
```

Purpose:

```text
Action Boundary identifies the governance condition where RABA responsibility handling begins.
```

Status:

```text
Candidate definition only. Not adopted.
```

Review questions:

- Can an AI system detect boundary approach without judging final admissibility?
- Who may allow, limit, refuse, or escalate boundary crossing?
- Which action classes require boundary handling?
- How does Action Boundary connect to Decision Log and Responsibility Event Stream?
- What happens when a consequential action is unclassified?

---

## 5. Candidate Decision Log purpose

Candidate definition:

```text
A Decision Log records why consequential AI-supported use was allowed, limited, refused, escalated, or blocked, under whose authority, with what evidence, and with what unresolved limits.
```

Purpose:

```text
Decision Log makes the reason for consequential use replayable and reviewable.
```

Status:

```text
Candidate definition only. Not adopted.
```

### 5.1 Decision Log versus audit log

A Decision Log is a governance record, not a generic audit log.

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

Candidate minimum decision questions:

- What action or boundary was involved?
- Why was action allowed, limited, refused, escalated, or blocked?
- Who had authority?
- What evidence or source reference was used?
- What limits, uncertainty, or conditions remained?
- Which Responsibility Event Stream event, if any, links to this decision?
- Who accepted responsibility, for what scope, and when?

---

## 6. Candidate Responsibility Event Stream stub

Candidate definition:

```text
A Responsibility Event Stream records responsibility-relevant state transitions in an AI-supported workflow so that the path from AI proposal to consequence, bypass, escalation, or block can be replayed.
```

Purpose:

```text
Responsibility Event Stream provides runtime sequence and replay integrity for responsibility-relevant workflow transitions.
```

Status:

```text
Candidate schema stub only. Not adopted.
Not canonical.
Not an event family.
Not an implementation commitment.
```

Candidate root event type for review:

```text
boundary_transition_event
```

This is not adopted.

It is only a candidate root event type for review.

Candidate required stub fields for review:

```yaml
event_id:
event_type:
action_boundary_triggered:
decision_log_reference:
timestamp:
```

Candidate fields under review, not required:

```yaml
action_class:
responsibility_owner:
boundary_status:
source_ref:
consequence_class:
authority_status:
replay_ref:
```

Review questions:

- Are these required stub fields too many or too few?
- Should `decision_log_reference` be nullable?
- Should `action_class` remain under review until Action Classes are accepted?
- Is `boundary_transition_event` too broad, too narrow, or suitable as a candidate root event type?
- How is replay integrity protected without adopting a full schema?

---

## 7. Silent adoption hygiene

Tranche 1.1 does not authorize:

- canonical schemas;
- event-family adoption;
- dashboards;
- integrations;
- market-facing claims;
- implementation commitments;
- public README updates;
- vendor references;
- pilot claims;
- concrete serialization formats;
- SIEM / observability dependencies;
- product-specific examples.

Any examples must be explicitly marked as non-canonical examples or kept outside readiness / PR-ready materials.

It only prepares the Human Owner to decide whether a future PR-ready canonicalization package should be created.

---

## 8. Later pack candidates

Tranche 1.2 may later review:

```text
Human Response Window
Governed Bypass
AI Speed and Responsibility Acceptance
```

Working distinction:

- **Human Response Window** — timing / confirmation / escalation mechanism;
- **Governed Bypass** — governed operating mode for preparation without unauthorized consequence;
- **AI Speed and Responsibility Acceptance** — design / risk principle that should guide later UI and governance design.

These are not optional for mature RABA, but they are not part of Tranche 1.1.

---

## 9. Readiness checklist

Before any PR-ready canonicalization work, Human Owner should confirm:

- [ ] Tranche 1.1 is the right first readiness scope.
- [ ] Consequential action definition is suitable for review.
- [ ] Case A / Case B boundary test is accepted.
- [ ] Candidate action classes are suitable for review.
- [ ] Action Classes pass the governance-response test.
- [ ] `UNCLASSIFIED_CONSEQUENTIAL_ACTION` is acceptable as fallback candidate.
- [ ] Action Boundary definition is suitable for review.
- [ ] Decision Log purpose is suitable for review.
- [ ] Decision Log minimum governance elements are accepted for review.
- [ ] Responsibility Event Stream should remain in Tranche 1.1 with a stub only.
- [ ] `boundary_transition_event` remains candidate-only.
- [ ] Human Response Window and Governed Bypass are deferred to Tranche 1.2.
- [ ] AI Speed and Responsibility Acceptance remains a design / risk principle for now.
- [ ] No event families are adopted by this readiness pack.
- [ ] No schema is adopted by this readiness pack.

---

## 10. Recommended Human Owner decision options

### Option A — Approve Tranche 1.1 for future PR-ready canonicalization work

This means AI collaborators may prepare draft canonical files for Human Owner review, but nothing is canonical until approved and merged.

### Option B — Revise Tranche 1.1 scope

Human Owner may add, remove, split, or defer elements before any PR-ready package is created.

### Option C — Defer canonicalization

Human Owner may decide that more consolidation is needed before any PR-ready canonicalization work.

---

## 11. Governance boundary

This readiness pack is:

- non-canonical;
- a review aid;
- not architecture approval;
- not a Decision Log entry;
- not a schema change;
- not event-family adoption;
- not a PR-ready canonical specification.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
