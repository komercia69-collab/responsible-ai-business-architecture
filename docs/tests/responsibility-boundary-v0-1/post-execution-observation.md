# Post-Execution Observation Check

**Status:** Test Check Draft  
**Canonical status:** Non-canonical  
**Use:** Responsibility Boundary Test Pack v0.1  

> This check does not define an implementation, rollback engine, incident-response standard, or adopted RABA control.

---

## Purpose

Pre-execution controls may fail, and a valid approval does not guarantee that execution matches the approved state or produces an acceptable outcome.

The responsibility field therefore remains active after execution.

---

## Minimum observations

Where execution eventually occurs after admissible reauthorization, the test should record:

```text
execution_snapshot
execution_matches_approved_state
harm_detected
recovery_required
incident_owner
post_execution_review_required
```

The minimum comparison is:

```text
approved snapshot
vs
execution snapshot
vs
actual observed outcome
```

---

## Expected outcomes

### Execution matches the approved state and no harm is detected

```text
execution_matches_approved_state: true
harm_detected: false
post_execution_review_required: false
```

The execution event and outcome still remain traceable.

### Execution differs from the approved state

```text
execution_matches_approved_state: false
harm_detected: unknown or true
recovery_required: evaluate
post_execution_review_required: true
```

The mismatch must not be treated as successful completion merely because the executor returned a technical success status.

### Harm is detected despite matching the approved state

```text
execution_matches_approved_state: true
harm_detected: true
recovery_required: evaluate
post_execution_review_required: true
```

This state shows that correct procedural execution can still produce harmful consequences and may require policy or responsibility-field revision.

---

## Pass criteria

The post-execution check passes only if:

- actual execution can be compared with the approved snapshot;
- technical success is distinguished from responsible completion;
- detected mismatch or harm receives a named incident owner;
- evidence is preserved for independent review;
- recovery need is explicitly evaluated;
- lessons may inform future controls without allowing the system to silently rewrite its own responsibility boundaries.

---

## Failure signals

The check fails if:

- the process ends when the executor returns `success`;
- actual execution is not compared with the approved state;
- harm or mismatch is detected without an assigned incident owner;
- evidence is lost or overwritten;
- policy or autonomy boundaries are automatically changed without accountable approval.

---

## Boundary

This document introduces only a minimal post-execution test layer. Detailed rollback, recovery, incident management, and learning-loop behavior remain future test and implementation questions.
