# Audit Integrity Breach Response

This document defines how RABA should respond when the integrity of the Decision Log or Responsibility Event Stream can no longer be trusted.

It introduces `AUDIT_INTEGRITY_BREACH` as a system-level governance condition.

This is not an approval state for one action.

It is a governance condition describing the trust status of the system or an affected scope.

---

## Core Distinction

```text
Approval State = state of an action
Governance Condition = trust / health condition of the governance system
```

Example:

```text
action.approval_state: RECOMMEND
system.governance_condition: AUDIT_INTEGRITY_BREACH
execution_allowed: false
```

This separation allows RABA to keep the action lifecycle clean while still representing system-level trust failures.

---

## Core Principle

> When audit integrity is broken, RABA does not stop all work. It stops untrusted execution.

A broken audit chain should not automatically prevent all drafting, analysis, or recommendation.

But it should prevent or contain external execution until responsibility can be trusted again.

---

## Trigger Conditions

`AUDIT_INTEGRITY_BREACH` may be triggered when one or more of the following conditions occur:

1. Decision Log hash-chain verification fails.
2. Responsibility Event Stream sequence verification fails.
3. A signed event fails signature verification.
4. A Decision Log entry appears to have been modified after creation.
5. Event ordering is inconsistent with approval state transitions.
6. A signing key is suspected to be compromised.
7. Decision Log and technical trace cannot be reconciled.
8. Gateway instances report conflicting governance records for the same action.
9. Required audit records are missing for actions that produced external effects.
10. Recovery from a previous breach was not properly approved.

---

## State Transition Diagram

```text
OPERATIONAL
    ↓ breach detected
AUDIT_INTEGRITY_BREACH
    ↓ containment
CONTAINED_DEGRADED or READ_ONLY_GOVERNANCE_MODE
    ↓ verification and investigation
RECOVERY_PENDING
    ↓ Recovery Decision Record + recovery approval
OPERATIONAL or PARTIAL_OPERATIONAL
```

The system should not return from `AUDIT_INTEGRITY_BREACH` to `OPERATIONAL` automatically.

A Recovery Decision Record must be explicitly recorded.

---

## Immediate Containment Behavior

When a breach is detected, RABA should move into containment.

Recommended behavior:

| Action category | Behavior during breach |
|---|---|
| Internal draft | allow in degraded mode if scope and impact allow |
| Recommendation without external effect | allow in degraded mode if scope and impact allow |
| New authorization | hold, require re-authorization, or enter read-only governance mode |
| Authorized but not executed action | freeze or require re-authorization |
| New external execution | block or fail-contained |
| High-impact workflow | fail-closed or read-only governance mode for affected scope |
| Escalation | trigger immediately |

---

## Containment Modes

RABA distinguishes three containment modes.

| Mode | Purpose | Typical use |
|---|---|---|
| `DEGRADED_MODE` | preserve low-risk preparation while blocking execution | scoped breach with low-impact internal work |
| `READ_ONLY_GOVERNANCE_MODE` | observe, collect evidence, and prevent new action progression | suspected tampering, unclear audit integrity, high-impact or global breach |
| `FAIL_CLOSED` | block execution entirely inside affected scope | key compromise, global breach, high-impact unresolved trust failure |

---

## Degraded Mode

In degraded mode, low-impact non-executing work may continue.

Example:

```text
approval_state: RECOMMEND
governance_condition: AUDIT_INTEGRITY_BREACH
execution_allowed: false
mode: DEGRADED_MODE
```

This allows productivity without allowing untrusted external execution.

---

## Read-Only Governance Mode

`READ_ONLY_GOVERNANCE_MODE` is a strict containment mode.

In this mode, the system may:

- observe actions;
- collect evidence;
- write quarantine records;
- support audit review;
- preserve technical traces;
- prepare a Recovery Decision Record.

It should not allow new action progression toward external execution inside the affected scope.

Example:

```text
governance_condition: AUDIT_INTEGRITY_BREACH
containment_mode: READ_ONLY_GOVERNANCE_MODE
action_progression_allowed: false
execution_allowed: false
quarantine_logging: enabled
recovery_decision_record_required: true
```

Read-only governance mode is especially relevant when:

- audit-chain manipulation is suspected;
- signing key compromise is suspected;
- breach scope is unclear;
- high-impact workflows are affected;
- global or zone-level trust is degraded;
- forensic evidence must be preserved.

---

## Quarantine Log

During a breach, new governance records should not be silently mixed into the trusted Decision Log or trusted Responsibility Event Stream.

RABA should write new records into a Quarantine Log.

The Quarantine Log should contain:

- timestamp;
- action id;
- workflow id;
- gateway instance id;
- current approval state;
- attempted state transition;
- reason for quarantine;
- related policy id;
- related technical trace id if available;
- signature verification status;
- chain verification status;
- containment decision.

The Quarantine Log is not automatically trusted.

It is a separate evidence area for later investigation and recovery.

---

## Disposition of Quarantined Events

A Recovery Decision Record must explain what happened to events recorded during the breach.

Possible dispositions:

- `RECONCILED`;
- `REJECTED`;
- `MANUALLY_REVIEWED`;
- `REINTEGRATED`;
- `PRESERVED_AS_EVIDENCE`;
- `UNRESOLVED`.

No quarantined event should be silently moved into trusted records without disposition.

---

## Scope of Breach

A breach should be scoped before applying broad containment.

Possible scopes:

| Scope | Meaning | Typical response |
|---|---|---|
| `NODE_LOCAL` | one Gateway instance affected | isolate node |
| `WORKFLOW_SCOPE` | one workflow affected | hold execution for that workflow |
| `TENANT_SCOPE` | one customer, tenant, or domain affected | isolate tenant/domain |
| `ZONE_SCOPE` | one region, cluster, or policy zone affected | contain zone |
| `GLOBAL_SCOPE` | shared key, root policy, or shared event stream affected | global fail-contained or read-only governance mode |

Containment should be fast enough to prevent unsafe execution, but narrow enough to avoid unnecessary system-wide availability loss.

---

## AUTHORIZED and EXECUTED During Breach

RABA should treat `AUTHORIZED` and `EXECUTED` differently during an audit integrity breach.

`AUTHORIZED` actions that have not yet produced an external effect should be held or require re-authorization.

`EXECUTED` actions should be preserved for investigation and reconciled against technical traces.

No new high-impact `EXECUTED` actions should proceed inside the affected scope until audit integrity has been restored.

---

## Minimum Breach Record

Every breach should produce a breach record containing:

- breach id;
- timestamp;
- detected by;
- affected scope;
- affected workflows;
- affected gateway instances;
- suspected cause;
- containment action;
- containment mode;
- quarantine log location;
- recovery owner;
- current governance condition;
- Recovery Decision Record requirement.

---

## Recovery Is Required

A system cannot leave `AUDIT_INTEGRITY_BREACH` only because a technical check later passes.

Technical validation can prove consistency.

Governance recovery restores trust.

Return to `OPERATIONAL` requires both:

1. technical verification passed;
2. Recovery Decision Record created;
3. recovery approved by an accountable human role.

---

## Related Documents

- [`docs/recovery-protocol.md`](recovery-protocol.md)
- [`docs/recovery-decision-record.md`](recovery-decision-record.md)
- [`schemas/recovery-decision-record.schema.json`](../schemas/recovery-decision-record.schema.json)
- [`docs/fail-safe-governance-behavior.md`](fail-safe-governance-behavior.md)
- [`docs/governance-gateway-runtime-model.md`](governance-gateway-runtime-model.md)
- [`docs/decision-log-schema.md`](decision-log-schema.md)
- [`implementation/responsibility-event-stream.md`](../implementation/responsibility-event-stream.md)

---

## Core Formula

> Broken audit integrity should not stop all thinking, drafting, or recommendation. It should stop or contain execution until responsibility can be trusted again.
