# Responsibility Event Stream Stub — Tranche 1.1 Candidate

**Status:** Canonical candidate stub  
**Canonical status:** Pending Human Owner approval, PR review, and merge  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  

> This document is a minimal candidate stub only.  
> It is not an adopted schema.  
> It is not an event family.  
> It is not a serialization format.  
> It is not a data contract.  
> It is not implementation guidance.

---

## 1. Purpose

Responsibility Event Stream may be referenced in Tranche 1.1 only as a minimal stub for responsibility-relevant boundary transitions.

The purpose of this stub is to preserve a minimal trace concept for Action Boundary handling without adopting a full event model, schema, serialization format, or implementation contract.

---

## 2. Candidate root event type

Candidate root event type for review:

```text
boundary_transition_event
```

This is not adopted.

It is not an event family.

---

## 3. Required stub fields for review

The following fields are candidate-only and required only for reviewing the stub concept:

### 3.1 event_id

Candidate unique identifier for the responsibility-relevant event.

Status:

```text
candidate_only
```

### 3.2 event_type

Candidate event type.

For this stub, expected to reference `boundary_transition_event` only as a candidate root event type.

Status:

```text
candidate_only
```

### 3.3 action_boundary_triggered

Candidate boolean marker indicating that Action Boundary handling was triggered or proposed.

Status:

```text
candidate_only
```

### 3.4 decision_log_reference

Candidate reference to a Decision Log entry when such an entry exists or is required.

This may be nullable during review.

Status:

```text
candidate_only
```

### 3.5 timestamp

Candidate timestamp of the responsibility-relevant transition.

Status:

```text
candidate_only
```

---

## 4. Candidate fields under review, not required

The following fields remain under review and are not required by this Tranche 1.1 stub:

```text
action_class
responsibility_owner
boundary_status
source_ref
consequence_class
authority_status
replay_ref
```

---

## 5. Silent adoption warning

This stub must not be used as an implementation reference without separate Human Owner confirmation.

It does not authorize:

- schema adoption;
- event-family adoption;
- serialization format adoption;
- data contract adoption;
- implementation requirements;
- automated enforcement.

---

## 6. Governance boundary

This document is:

- a canonical candidate stub only;
- not final canon;
- not an adopted schema;
- not an event family;
- not a serialization format;
- not a data contract;
- not implementation guidance.

Canonical adoption requires Human Owner approval, PR review, merge, and a separate decision trail.
