# RFC: Audit Integrity and Recovery Protocol

Status: Draft

---

## Epigraph

> Technical validation proves consistency. Governance recovery restores trust.

---

## Summary

This RFC defines how RABA handles audit integrity failures, degraded trust conditions, quarantine logging, distributed breach propagation, Recovery Decision Records, and recovery back to trusted operation.

It introduces `AUDIT_INTEGRITY_BREACH` as a system-level Governance Condition, distinct from action-level Approval States.

It also defines `READ_ONLY_GOVERNANCE_MODE` as a strict containment mode for high-impact, unclear, or global trust failures.

---

## Motivation

AI-assisted and agentic workflows require auditable responsibility records.

If those records are corrupted, incomplete, unverifiable, or suspected to be manipulated, the system must not continue external execution as if governance is still trusted.

However, the system also should not unnecessarily stop all productive work.

RABA therefore needs a model that protects trusted execution, preserves evidence, and allows safe degraded work when appropriate.

---

## Core Distinction

```text
Approval State = state of an action
Governance Condition = trust / health condition of the governance system
```

Action approval states remain:

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

System governance conditions may include:

```text
OPERATIONAL
AUDIT_INTEGRITY_BREACH
CONTAINED_DEGRADED
READ_ONLY_GOVERNANCE_MODE
RECOVERY_PENDING
```

These conditions do not replace approval states.

They define the trusted operating context in which approval states are evaluated.

---

## Design Principles

1. No silent execution when responsibility cannot be established.
2. Broken audit integrity should stop or contain execution, not all drafting or recommendation.
3. Technical consistency is necessary but not sufficient for restored trust.
4. Recovery requires accountable human approval.
5. Breach containment should be scoped.
6. Distributed breach propagation should be fast but not blindly global.
7. Quarantine records must remain separate from trusted logs until reviewed.
8. Recovery decisions must themselves be auditable.
9. Read-only governance mode should preserve evidence while preventing action progression.
10. Recovery Decision Records should document evidence, risk acceptance, quarantined event disposition, and authority.

---

## Governance Condition: AUDIT_INTEGRITY_BREACH

`AUDIT_INTEGRITY_BREACH` means the system cannot currently trust one or more responsibility records, event chains, signatures, policy roots, or gateway outputs.

Example:

```text
action.approval_state: AUTHORIZED
system.governance_condition: AUDIT_INTEGRITY_BREACH
execution_allowed: false
```

---

## Trigger Conditions

This condition may be triggered by:

- Decision Log hash-chain failure;
- Responsibility Event Stream verification failure;
- failed signature verification;
- missing audit record for an external-effect action;
- mismatch between technical trace and Decision Log;
- conflicting Gateway decisions;
- suspected signing key compromise;
- policy root mismatch;
- incomplete or unapproved recovery from prior breach.

---

## Containment Model

Containment should be proportional to the affected scope and impact level.

| Action / state | Default behavior during breach |
|---|---|
| `DRAFT` | allow in degraded mode if impact allows |
| `RECOMMEND` | allow in degraded mode if impact allows |
| `AUTHORIZED` but not executed | hold or require re-authorization |
| new high-impact execution | block or fail-contained |
| unclear boundary | escalate |
| missing responsibility owner | escalate |

---

## Containment Modes

RABA distinguishes three containment modes:

| Mode | Purpose |
|---|---|
| `DEGRADED_MODE` | preserve low-risk non-executing work while blocking execution |
| `READ_ONLY_GOVERNANCE_MODE` | observe, collect evidence, write quarantine records, and prevent new action progression |
| `FAIL_CLOSED` | block execution in the affected scope |

`READ_ONLY_GOVERNANCE_MODE` is especially relevant when tampering, key compromise, unclear scope, high-impact workflow impact, or global breach is suspected.

---

## Quarantine Log

During `AUDIT_INTEGRITY_BREACH`, new governance records should be written to a Quarantine Log rather than silently mixed into trusted logs.

The Quarantine Log should include:

- condition id;
- action id;
- workflow id;
- gateway instance id;
- current approval state;
- attempted transition;
- reason for quarantine;
- related policy id;
- related technical trace id;
- signature status;
- chain verification status;
- containment decision.

Quarantine records may later be reconciled, rejected, reintegrated, manually reviewed, preserved as incident evidence, or marked unresolved.

---

## Disposition of Quarantined Events

A Recovery Decision Record must document what happened to quarantined events.

Possible dispositions:

```text
RECONCILED
REJECTED
MANUALLY_REVIEWED
REINTEGRATED
PRESERVED_AS_EVIDENCE
UNRESOLVED
```

No quarantined event should be silently moved into trusted records without disposition.

---

## Recovery Protocol

Recovery follows this lifecycle:

```text
Detection
  ↓
Containment
  ↓
Quarantine
  ↓
Verification
  ↓
Impact Assessment
  ↓
Recovery Decision Record
  ↓
Human Recovery Approval
  ↓
Return to OPERATIONAL / PARTIAL_OPERATIONAL
```

The system must not automatically return to `OPERATIONAL` only because technical verification passes.

---

## Recovery Decision Record

A Recovery Decision Record is the governance artifact that explains why a system, workflow, tenant, zone, or cluster was allowed to return to trusted operation after a governance integrity breach.

It should include five required sections:

1. Incident and Scope
2. Evidence of Integrity
3. Disposition of Quarantined Events
4. Risk Acceptance Statement
5. Authority and Approval Evidence

The RDR answers:

> Why was the system allowed to return to OPERATIONAL after audit integrity was broken?

Related files:

- [`docs/recovery-decision-record.md`](../docs/recovery-decision-record.md)
- [`schemas/recovery-decision-record.schema.json`](../schemas/recovery-decision-record.schema.json)

---

## Evidence of Integrity

Evidence of Integrity should include:

- hash-chain verification result;
- signature verification result;
- event sequence verification result;
- Decision Log and Responsibility Event Stream reconciliation;
- technical trace reconciliation;
- policy version verification;
- key status;
- gateway instance consistency check.

Technical evidence can prove consistency.

It does not alone restore trust.

---

## Risk Acceptance Statement

Recovery does not always mean zero risk.

The RDR should explicitly record:

- unresolved risks;
- accepted risks;
- compensating controls;
- monitoring requirements after recovery;
- accountable role accepting risk.

---

## Authority and Approval Evidence

Recovery requires an accountable human role.

Possible roles:

- Audit Owner;
- Risk Officer;
- Security Owner;
- Governance Owner;
- Workflow Owner for low-scope incidents.

For high-impact or global incidents, recovery may require multiple approvals.

Approval evidence may include:

- digital signature;
- signed approval event;
- signed recovery decision hash;
- approval record in an external GRC system;
- multi-party approval record.

---

## Distributed Propagation

In distributed deployments, `AUDIT_INTEGRITY_BREACH` must include scope.

Possible scopes:

```text
NODE_LOCAL
WORKFLOW_SCOPE
TENANT_SCOPE
ZONE_SCOPE
GLOBAL_SCOPE
```

One node-local issue should not automatically stop the whole cluster.

At the same time, shared trust failures must propagate quickly enough to prevent unsafe execution.

Core formula:

> Audit integrity breach must propagate fast enough to prevent unsafe execution, but narrowly enough to avoid becoming a denial-of-availability mechanism.

---

## Scope Escalation

Scope may expand when evidence shows shared components are affected.

Example:

```text
NODE_LOCAL → WORKFLOW_SCOPE → ZONE_SCOPE → GLOBAL_SCOPE
```

Expansion signals include:

- multiple nodes reporting the same failure;
- shared event stream verification failure;
- root policy mismatch;
- signing key compromise suspicion;
- cross-zone trace and decision record divergence.

---

## Scope De-Escalation

Scope may shrink after verification and recovery approval.

Example:

```text
ZONE_SCOPE → NODE_LOCAL
```

De-escalation requires:

- verification evidence;
- impact assessment;
- quarantine review;
- Recovery Decision Record;
- accountable approval.

---

## Key Rotation

If signing key compromise is suspected, recovery should include key rotation.

Key rotation should record:

- old key id;
- new key id;
- reason for rotation;
- affected records;
- verification status;
- recovery approval reference.

---

## Non-Goals

This RFC does not define:

- a full cryptographic implementation;
- a specific database technology;
- a specific distributed consensus protocol;
- a production-ready key-management system;
- legal or regulatory compliance guarantees.

It defines the governance architecture pattern that implementation teams can map to their infrastructure.

---

## Related Documents

- [`docs/audit-integrity-breach-response.md`](../docs/audit-integrity-breach-response.md)
- [`docs/recovery-protocol.md`](../docs/recovery-protocol.md)
- [`docs/recovery-decision-record.md`](../docs/recovery-decision-record.md)
- [`docs/distributed-governance-condition-propagation.md`](../docs/distributed-governance-condition-propagation.md)
- [`schemas/recovery-decision-record.schema.json`](../schemas/recovery-decision-record.schema.json)
- [`docs/fail-safe-governance-behavior.md`](../docs/fail-safe-governance-behavior.md)
- [`docs/decision-log-schema.md`](../docs/decision-log-schema.md)
- [`implementation/responsibility-event-stream.md`](../implementation/responsibility-event-stream.md)

---

## Open Questions

1. What minimum cryptographic guarantees should the reference implementation demonstrate?
2. How should recovery approval be represented in the Responsibility Event Stream?
3. What level of distributed consistency is required for high-impact workflows?
4. Should global recovery require multi-party approval by default?
5. Should RABA define a separate Quarantine Event schema?
6. Should RABA define a formal Read-Only Governance Mode transition event?

---

## Core Formula

> RABA should not only detect broken audit integrity. It must define how trust is contained, investigated, restored, and explicitly re-authorized.
