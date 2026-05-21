# Recovery Protocol

This document defines how RABA returns from a degraded or breached governance condition back to trusted operation.

It focuses on recovery from `AUDIT_INTEGRITY_BREACH`, but the same pattern can be adapted to other governance conditions.

---

## Core Formula

> Technical validation proves consistency. Governance recovery restores trust.

A system can technically verify that records are consistent.

But returning to trusted operation is a governance decision, not only a technical event.

---

## Recovery Lifecycle

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
Return to OPERATIONAL
```

The system should not automatically return to `OPERATIONAL` after a technical check passes.

---

## 1. Detection

Recovery begins only after a breach or degraded condition has been detected.

Detection sources may include:

- hash-chain verification failure;
- event signature verification failure;
- missing decision log entry;
- mismatch between technical trace and business decision record;
- conflicting gateway records;
- suspected signing key compromise;
- manual audit finding;
- monitoring alert.

Detection creates a breach record and changes the governance condition.

```text
governance_condition: AUDIT_INTEGRITY_BREACH
```

---

## 2. Containment

Containment prevents unsafe execution while preserving useful low-risk work.

Recommended containment rules:

| State or action | Containment behavior |
|---|---|
| `DRAFT` | may continue in degraded mode |
| `RECOMMEND` | may continue in degraded mode |
| `AUTHORIZED` but not executed | hold or require re-authorization |
| New external execution | block inside affected scope |
| High-impact workflow | fail-closed inside affected scope |
| Unclear responsibility owner | escalate |

Containment should be scoped.

A node-local issue should not automatically collapse the whole system.

---

## 3. Quarantine

During the breach, new records should be written to a Quarantine Log.

The Quarantine Log keeps potentially untrusted records separate from the trusted Decision Log and trusted Responsibility Event Stream.

Quarantine records should include:

- action id;
- workflow id;
- gateway instance id;
- attempted state transition;
- current approval state;
- governance condition;
- reason for quarantine;
- technical trace reference;
- timestamp;
- containment decision.

Quarantine records should be reviewed before they are reconciled, discarded, or marked as trusted evidence.

---

## 4. Verification

Verification checks whether the technical evidence is internally consistent.

Verification may include:

- validating hash-chain continuity;
- validating event signatures;
- checking event order;
- comparing Decision Log entries with Responsibility Events;
- comparing business decision records with technical traces;
- verifying key status;
- checking policy version consistency;
- checking gateway instance reports.

Verification output should be explicit:

```text
verification_status: passed | failed | partial | inconclusive
```

---

## 5. Impact Assessment

After verification, the system should assess the impact of the breach.

Questions:

1. Which actions were affected?
2. Which workflows were affected?
3. Which gateway instances were affected?
4. Were any external effects produced during the breach window?
5. Were any `AUTHORIZED` actions executed without a trusted record?
6. Are any signing keys or policies suspected to be compromised?
7. Can quarantined records be reconciled?
8. Does the affected scope remain local, or should it be expanded?

Impact assessment determines whether recovery can proceed.

---

## 6. Recovery Decision Record

Before returning to `OPERATIONAL`, RABA should create a Recovery Decision Record.

This record should include:

- recovery id;
- breach id;
- affected scope;
- detection timestamp;
- containment timestamp;
- recovery decision timestamp;
- verification status;
- impact assessment summary;
- quarantined records reviewed;
- unresolved risks;
- key rotation status;
- policy version status;
- decision: restore, partially restore, continue containment, or escalate further;
- accountable recovery role;
- approval evidence.

The Recovery Decision Record explains why the system was allowed to resume trusted operation.

---

## 7. Human Recovery Approval

RABA should not automatically restore trust only because technical checks pass.

A human accountable role should approve recovery.

Possible recovery approval roles:

- Audit Owner;
- Risk Officer;
- Security Owner;
- Governance Owner;
- Workflow Owner for low-scope incidents.

For high-impact or global incidents, approval may require more than one role.

---

## 8. Return to OPERATIONAL

The system may return to `OPERATIONAL` only when:

1. verification has passed or known gaps are accepted by an accountable role;
2. affected scope has been identified;
3. quarantine log has been reviewed;
4. required key rotation or policy correction has been completed;
5. Recovery Decision Record has been created;
6. accountable human approval has been recorded.

Return state:

```text
governance_condition: OPERATIONAL
recovery_status: approved
```

---

## Partial Recovery

Not all recovery must be global.

A system may restore one workflow, tenant, or zone while another remains contained.

Example:

```text
workflow_A: OPERATIONAL
workflow_B: AUDIT_INTEGRITY_BREACH
zone_1: OPERATIONAL
zone_2: CONTAINED_DEGRADED
```

Partial recovery helps balance safety and availability.

---

## Key Rotation

If signing key compromise is suspected, recovery should include key rotation.

Key rotation record should include:

- old key id;
- new key id;
- rotation timestamp;
- reason for rotation;
- affected records;
- verification status before rotation;
- recovery approval reference.

The system should distinguish between:

- chain inconsistency;
- event signing failure;
- key compromise;
- policy mismatch;
- storage corruption.

Each may require a different recovery path.

---

## Recovery Anti-Patterns

Avoid:

- automatic return to `OPERATIONAL` without accountable approval;
- mixing quarantine records into trusted logs without review;
- treating technical consistency as full business trust;
- global shutdown for every node-local issue;
- continuing high-impact execution during unresolved breach;
- deleting suspicious records instead of preserving them for audit.

---

## Relationship to RABA State Model

Recovery Protocol does not replace the action state model.

Action states remain:

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

Recovery Protocol governs the system condition in which those action states operate.

---

## Core Principle

> RABA should not only detect broken audit integrity. It must define how trust is contained, investigated, restored, and explicitly re-authorized.
