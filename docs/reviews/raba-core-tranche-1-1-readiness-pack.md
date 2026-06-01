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

Review questions:

- Is the definition broad enough to cover business, legal, operational, and customer-facing consequences?
- Is it too broad for first-core review?
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
```

Purpose:

```text
Action classes help determine whether Action Boundary handling, Decision Log capture, or Responsibility Event Stream recording is required.
```

Status:

```text
Candidate taxonomy only. Not schema. Not canonical.
```

Review questions:

- Which classes are always non-consequential?
- Which classes are potentially consequential depending on context?
- Which classes always require Decision Log capture?
- Which classes always require Responsibility Event Stream capture?
- Are any classes missing, overlapping, or too implementation-specific?

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

Candidate minimum decision questions:

- What action or boundary was involved?
- Why was action allowed, limited, refused, escalated, or blocked?
- Who had authority?
- What evidence or source reference was used?
- What limits, uncertainty, or conditions remained?
- Which Responsibility Event Stream event, if any, links to this decision?

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
```

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

Review questions:

- Are these required fields too many or too few?
- Should `decision_log_ref` be required for every event?
- Should `action_class` be required before action classes are canonical?
- What event types are needed for Tranche 1.1?
- How is replay integrity protected?

---

## 7. Tranche 1.1 boundary

Tranche 1.1 does not authorize:

- canonical schemas;
- event-family adoption;
- dashboards;
- integrations;
- market-facing claims;
- implementation commitments;
- public README updates;
- vendor references;
- pilot claims.

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
- [ ] Candidate action classes are suitable for review.
- [ ] Action Boundary definition is suitable for review.
- [ ] Decision Log purpose is suitable for review.
- [ ] Responsibility Event Stream should remain in Tranche 1.1 with a schema stub.
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
