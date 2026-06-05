# Responsibility Field Model — Test Draft

**Status:** Working Test Model  
**Canonical status:** Non-canonical  
**Use:** Test-only model for Responsibility Boundary Test Pack v0.1  

> This model is not RABA canon and does not define an adopted schema.

---

## Core idea

RABA does not assemble responsibility from optional modules.

It maintains a persistent responsibility field whose operational state changes with context, authority, evidence, consequence, and responsibility events.

```text
Responsibility Field State
=
Persistent Responsibility Field
+
Contextual Responsibility Conditions
+
Current Responsibility Events
```

The test separates five working layers so that technical facts are not confused with governance interpretation:

```text
Trace Evidence State
→ Materiality Assessment
→ Governance Responsibility State
→ Admissibility Decision
→ Consequence Observation State
```

These are test layers only, not adopted RABA architecture.

---

## Persistent responsibility field

The following constraints remain active across the test:

- responsibility must be attributable to a named human or institutional role;
- AI is not the final accountable authority;
- consequential action requires an admissible basis;
- approval is bound to a defined subject, scope, validity window, and reference frame;
- a material reference-frame change may invalidate prior approval;
- missing ownership, unresolved materiality, or unresolved approval state must not silently permit execution;
- responsibility-relevant events must remain traceable;
- an actor that initiates a change must not be the sole final judge of its materiality or admissibility;
- human approval is not treated as meaningful merely because a button was clicked;
- accountability enforcement must be reviewable, fair, and proportionate rather than automatic;
- post-execution observation is required because pre-execution controls may fail.

---

## Working state layers

### Trace Evidence State

Records what can be technically observed or verified:

- `approval_subject`;
- `approval_scope`;
- `approval_validity_window`;
- `reference_frame_hash`;
- `state_diff_manifest`;
- `origin_of_change`;
- `change_classification`;
- `change_provenance`;
- `identity_and_role_binding`;
- `authority_basis`;
- `delegation_state`;
- `change_history_since_approval`;
- `human_acknowledgement_recorded`.

### Materiality Assessment

Interprets whether detected changes affect the approved responsibility boundary:

```text
materiality_state:
- non_material
- potentially_material
- material
- unknown
```

The assessment should record:

- `materiality_basis`;
- `assessment_actor`;
- `assessment_policy_id`;
- `cumulative_change_state`.

A materiality assessment is itself a responsibility-relevant event.

### Governance Responsibility State

Records the current governance interpretation:

- `approval_state`;
- `execution_admissibility`;
- `block_scope`;
- `approval_owner`;
- `escalation_owner`;
- `independent_review_owner`;
- `execution_owner`;
- `routing_policy_id`;
- `independent_review_required`;
- `accountability_awareness_conditions`;
- `accountability_enforceability`.

### Admissibility Decision

Working outcomes include:

```text
ALLOW
ALLOW_WITHIN_UNCHANGED_SCOPE
BLOCK_AFFECTED_ITEM
BLOCK_AFFECTED_SUBSET
BLOCK_ENTIRE_BATCH
ESCALATE
REQUEST_REAUTHORIZATION
REQUEST_INDEPENDENT_REVIEW
REQUEST_EVIDENCE
```

### Consequence Observation State

Minimum post-execution fields:

- `execution_snapshot`;
- `execution_matches_approved_state`;
- `harm_detected`;
- `recovery_required`;
- `incident_owner`;
- `post_execution_review_required`.

---

## Responsibility field transition

A Responsibility Field Transition occurs when a responsibility-relevant event changes one or more working layers.

For this test:

```text
supplier data change
→ trace evidence records S0-to-S1 differences
→ materiality assessment identifies a material scope change
→ prior approval becomes stale
→ execution becomes inadmissible
→ predetermined escalation and reauthorization are required
→ conditions for an informed human decision must be materially supported
→ a new accountable decision may be recorded
→ actual execution and consequences must remain observable
```

---

## Test boundary

The fields and outcomes in this document are experimental test vocabulary only. They are not adopted schema values, legal classifications, implementation requirements, or canonical RABA concepts.
