# Adversarial Review Synthesis — Test Pack v0.1

**Status:** External adversarial review synthesis  
**Canonical status:** Non-canonical  
**Use:** Preserve accepted, deferred, and rejected recommendations from external-model review  

> Multi-AI agreement is review input only. It is not validation, adoption, canonization, or Human Owner approval.

---

## Strong repeated findings

Across three external reviews, the following gaps repeatedly appeared:

- approval must be bound to an explicit subject, scope, and validity window;
- technical evidence must be separated from governance interpretation;
- reference-frame change requires a materiality assessment rather than automatic full blocking;
- change origin, provenance, and concrete diff must remain visible;
- responsibility roles must be separated rather than assigned to one generic owner;
- internal human understanding cannot be directly measured;
- post-execution observation is required because harmful or silent changes may escape pre-execution checks.

---

## Accepted for Test Pack v0.1 refinement

### Evidence-level additions

- `approval_subject`
- `approval_scope`
- `approval_validity_window`
- `reference_frame_hash`
- `state_diff_manifest`
- `origin_of_change`
- `change_classification`
- `change_provenance`
- `identity_and_role_binding`
- `authority_basis`
- `delegation_state`
- `change_history_since_approval`
- `human_acknowledgement_recorded`

### Governance-interpretation additions

- `materiality_state`
- `materiality_basis`
- `block_scope`
- `execution_admissibility`
- `approval_owner`
- `escalation_owner`
- `independent_review_owner`
- `execution_owner`
- `routing_policy_id`
- `independent_review_required`

### Human-control correction

Replace claims of directly measured human awareness with evidence about conditions supporting an informed decision:

- `accountability_awareness_conditions`
- `human_acknowledgement_recorded`

### Minimal post-execution additions

- `execution_snapshot`
- `execution_matches_approved_state`
- `harm_detected`
- `recovery_required`
- `incident_owner`
- `post_execution_review_required`

---

## Accepted for future test construction

- non-material change;
- partial block;
- separation-of-duties conflict;
- AI-origin change;
- change after reauthorization;
- cumulative / salami change;
- silent change;
- unavailable responsible owner;
- external reference-frame change;
- post-execution harmful outcome;
- cross-workflow reuse or quarantine.

See [`candidate-test-scenarios.md`](./candidate-test-scenarios.md).

---

## Deferred working questions

- action harm vs inaction harm vs delay harm;
- SLA pressure and coercion;
- aggregate exposure and anti-structuring;
- governance-control degradation;
- contextual trust history;
- cross-workflow quarantine policy;
- richer reversibility profiles;
- fairness and non-discrimination.

---

## Rejected or not accepted as current test fields

- a universal numeric `cumulative_change_index`;
- a single `decision_quality_signal`;
- an `intent_signal` claiming to reveal actual intent;
- a Boolean claiming to prove meaningful understanding;
- universal automatic quarantine;
- universal assignment of a specific organizational role;
- automatic legal qualification, guilt, sanctions, or punishment.

---

## Boundary

This synthesis preserves review recommendations and current implementation choices. It does not make the external reviews authoritative and does not convert repeated model agreement into approval.
