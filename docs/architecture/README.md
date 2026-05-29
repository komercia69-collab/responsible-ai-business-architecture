# RABA Architecture Notes Index

**Status:** Navigation / Working Index  
**Canonical status:** Non-canonical. This index helps readers navigate architecture working notes and does not define accepted RABA architecture.  
**Purpose:** Make topology stabilization documents easier to find, read, and review in the correct order.

## Why This Index Exists

RABA has entered a topology stabilization phase.

Recent external reviews warned that strong concepts may expand faster than their dependency structure is stabilized.

The purpose of this index is to help readers understand which architecture notes support that stabilization work.

## Recommended Reading Order

### 1. Semantic Dependency Map

File: [`docs/architecture/semantic-dependency-map.md`](semantic-dependency-map.md)

Purpose:

Clarifies how major RABA concepts depend on one another and protects core boundaries such as:

```text
Observability ≠ Authority
Gateway enforcement ≠ Human authority
External review ≠ Adoption
Multi-AI agreement ≠ Approval
```

Core dependency direction:

```text
Human authority → policy → runtime check → gateway outcome → event record → decision log → audit/review
```

Read this first because it defines the semantic topology that other notes should respect.

### 2. Responsibility Event Topology

File: [`docs/architecture/responsibility-event-topology.md`](responsibility-event-topology.md)

Purpose:

Defines a first working topology for responsibility-relevant events across RABA.

Core event direction:

```text
proposal → evidence → review → confirmation → gateway decision → execution/block/escalation → consequence → correction/audit
```

This note helps normalize replay, audit consistency, state-transition integrity, and governance drift detection.

### 3. Action Classes Working Note

File: [`docs/notes/action-classes-working-note.md`](../notes/action-classes-working-note.md)

Purpose:

Defines a first non-canonical action-class model so RABA can classify actions by consequence and authority boundary rather than by technical surface.

Key principle:

```text
Technical action ≠ Governance action class
```

This note supports Human Authority Constitution, Bind-Time Admissibility, Governance Gateway, and Responsibility Event Topology.

## Related Working Notes

### Bind-Time Admissibility Checklist

File: [`docs/notes/bind-time-admissibility-checklist.md`](../notes/bind-time-admissibility-checklist.md)

Purpose:

Defines what must be true at bind-time before an AI-agent action is allowed to proceed.

### Bind-Time Admissibility Scenario Tests

File: [`docs/notes/bind-time-admissibility-scenario-tests.md`](../notes/bind-time-admissibility-scenario-tests.md)

Purpose:

Tests the bind-time admissibility checklist against concrete execution scenarios:

- sending an email;
- updating a CRM record;
- approving a payment;
- triggering an API action.

### RABA for Leadership and Organizational Responsibility

File: [`docs/notes/raba-leadership-responsibility-one-pager.md`](../notes/raba-leadership-responsibility-one-pager.md)

Purpose:

Explains RABA from a leadership and organizational responsibility perspective.

Core leadership questions:

```text
What must never be delegated?
When must the system stop or escalate?
Who remains responsible after consequences?
```

## Related Concept Drafts

### Human Authority Constitution

File: [`concepts/constitutional-responsibility-layer.md`](../../concepts/constitutional-responsibility-layer.md)

Current internal title:

```text
Human Authority Constitution
```

Purpose:

Defines human-reserved authority and delegation boundaries from which operational policy should derive.

Important guardrail:

```text
Human Authority Constitution is not a runtime prompt.
Operational agents must not interpret constitutional text directly.
```

## Related External Reviews

### Davorin Popović Structural Topology Review

File: [`docs/reviews/davorin-popovic-structural-topology-review.md`](../reviews/davorin-popovic-structural-topology-review.md)

Purpose:

External structural review warning that semantic expansion may outrun topology stabilization.

Key warning:

```text
semantic expansion outrunning topology stabilization
```

### RABA ↔ VERITAS Working Notes

Relevant files include:

- [`docs/notes/bind-time-admissibility-checklist.md`](../notes/bind-time-admissibility-checklist.md)
- [`docs/notes/bind-time-admissibility-scenario-tests.md`](../notes/bind-time-admissibility-scenario-tests.md)

Purpose:

Non-canonical conceptual comparison and scenario testing around executable governance boundaries and replayable bind-time records.

## Architecture Guardrails

This index highlights the following guardrails:

```text
Recommendation is not authorization.
Authorization is not execution.
Execution does not discharge responsibility.
Observability is not accountability.
Observability is not authority.
Gateway enforcement is not Human Owner authority.
Policy is not prompt.
Prompt is not constitution.
External review is not adoption.
Multi-AI agreement is not approval.
```

## Current Stabilization Path

The current stabilization path is:

```text
1. Stabilize semantic dependencies.
2. Normalize responsibility event topology.
3. Define action classes.
4. Revisit Governance Gateway schema.
5. Revisit README and public-facing structure.
```

## What This Index Does Not Claim

This index does not claim that:

- listed notes are canonical;
- topology is final;
- all architecture dependencies are resolved;
- external reviews are approvals;
- scenario tests are production controls;
- GitHub documentation alone creates governance.

## Governance Boundary

This index is non-canonical.

Navigation is not architectural approval.

Working notes are not accepted architecture.

External review is not adoption.

Multi-AI agreement is not approval.

Final architectural approval belongs to the Human Owner.

## Key Takeaway

RABA should now be read through a topology-stabilization lens.

The central architecture direction is:

```text
Human authority → policy → runtime check → gateway outcome → event record → decision log → audit/review
```

This index helps readers find the documents that currently stabilize that direction.
