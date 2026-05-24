# Decision Log: Governed Preparation Route and Shadow Object Merge

**Date:** 2026-05-25  
**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Accepted as discussion-draft architectural direction  
**Recorded by:** Oleksandr Shuliak  
**Decision type:** Architecture / Governance / Runtime Responsibility  
**Related document:** [`docs/governed-preparation-route-review-draft.md`](../../governed-preparation-route-review-draft.md)

---

## Decision

RABA accepts the Governed Preparation Route as the external-facing term for the concept internally discussed as the Governed Bypass Lane.

The Governed Preparation Route is not a separate top-level Approval State.

It is a Governance Gateway route with mandatory execution-lock metadata.

The action remains in DRAFT or RECOMMEND until valid human authorization occurs.

Required preparation metadata includes:

```text
approval_state = DRAFT / RECOMMEND
route = governed_preparation
boundary_status = not_crossed
execution_locked = true
prepared_by = AI
requires_human_authorization = true
shadow_state_isolated = true
```

---

## Rationale

The architecture needs to preserve speed without weakening accountability.

A separate top-level Approval State would overcomplicate the state model and blur the distinction between action accountability and preparation route.

A route-only model would be too invisible and could weaken auditability.

The accepted hybrid model preserves the simplicity of the Approval State model while making AI preparation visible, auditable, and machine-enforceable through execution-lock metadata.

---

## Core Principles Adopted

### 1. Preparation before execution

AI may prepare the decision environment, but must not create external consequences, obligations, irreversible records, or business facts before human authorization.

### 2. No cognitive tunnel

AI preparation must not be so polished, complete-looking, or selectively framed that human review becomes formally present but practically absent.

### 3. Active Evidence Interlock

Shadow Object merge requires evidence of human engagement with source material, not only evidence of a button click.

Valid merge authorization requires:

- named human identity;
- completed Active Evidence Interlock;
- explicit positive authorization action;
- reason capture for medium and high-risk actions;
- context completeness acknowledgment when required;
- conflict acknowledgment when required;
- timestamped authorization record.

Invalid authorization includes timeout, auto-save, inactivity, role-only approval without named identity, approval without completed interlock, approval while context warnings remain unacknowledged, or delegation without explicit transfer of authority.

### 4. Deterministic complexity scoring

`case_complexity_score` must be computed through deterministic or independently controlled signals, not subjective LLM self-assessment.

The preparation AI may suggest that complexity should be reviewed, but it must not assign the authoritative complexity score for its own output.

### 5. Risk and complexity separation

`risk_class` describes the consequence of a wrong decision.

`case_complexity_score` describes the effort required to review the evidence.

Risk primarily determines friction requirements.

Complexity primarily determines minimum feasible review time.

### 6. Threshold governance lifecycle

Rubber-stamp drift thresholds are governance policy parameters, not technical constants.

They must be owned by a named policy owner, implemented by a technical owner, reviewed by an independent reviewer where required, versioned, auditable, and changed only through a documented policy-change process.

### 7. Relaxation requires review before activation

Relaxation of governance controls requires justification before activation.

Protective tightening may be faster, but must remain traceable.

Threshold relaxation must not activate automatically. It must trigger Policy Integrity review and remain pending until Independent Reviewer approval is recorded.

### 8. Rollback requires remediation

Rollback restores configuration. It does not automatically repair decisions already approved while weakened controls were active.

When threshold rollback occurs, RABA requires a remediation report and sampled post-audit review of decisions made during the weakened-control period.

---

## Responsibility Event Stream Implications

The following event types should be considered in future schema work:

```text
shadow_object_created
shadow_state_merge_requested
active_evidence_interlock_completed
shadow_state_merged_by_human
invalid_merge_authorization_blocked
threshold_modified
threshold_change_requested
threshold_change_approved
threshold_version_updated
threshold_review_due
threshold_relaxation_requested
threshold_relaxation_approved
threshold_relaxation_rejected
threshold_relaxation_detected
policy_integrity_review_triggered
threshold_rollback_executed
threshold_remediation_report_generated
```

These event names are not yet final schema definitions. They are accepted as candidate events for future machine-readable implementation work.

---

## Decision Log Implications

Decision Log entries should be required for:

- Shadow Object merge authorization for medium and high-risk actions;
- threshold matrix changes;
- threshold relaxation requests;
- threshold relaxation approvals or rejections;
- threshold rollback events;
- remediation reports after weakened-threshold periods;
- route transitions from Governed Preparation to Fast Path when they materially expand autonomy.

---

## Open Follow-Up Work

1. Create a complete Shadow Object schema.
2. Create a machine-readable Threshold Matrix schema.
3. Define `case_complexity_score` calculation rules.
4. Define Active Evidence Interlock UI requirements.
5. Add candidate Responsibility Event Stream events to the event schema backlog.
6. Review whether the general principle “relaxation requires justification before activation” should be added to `concepts/policy-integrity.md`.
7. Review whether Governed Preparation should be added to README and repository map after G and K review.

---

## Final Position

Governed Preparation is not “AI acts without approval.”

It is:

> AI prepares everything needed for a responsible human decision, but cannot create external consequences before valid human authorization.

The accepted direction is:

> Governed speed may accelerate preparation.  
> It must not bypass responsibility.  
> Shadow Object merge requires Active Evidence Interlock and valid human authorization.
