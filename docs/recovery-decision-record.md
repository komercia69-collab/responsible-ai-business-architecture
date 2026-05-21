# Recovery Decision Record

A Recovery Decision Record (RDR) is the RABA governance artifact that explains why a system, workflow, tenant, zone, or cluster was allowed to return to trusted operation after a governance integrity breach.

It is not merely a technical log.

It is the point where technical consistency becomes organizational trust again.

---

## Core Formula

> Recovery Decision Record is the point where technical consistency becomes organizational trust again.

Related formula:

> Technical validation proves consistency. Governance recovery restores trust.

---

## Purpose

The Recovery Decision Record answers the auditor's question:

> Why was the system allowed to return to OPERATIONAL after audit integrity was broken?

It records:

- what happened;
- which scope was affected;
- how the breach was contained;
- what evidence was reviewed;
- which risks remain;
- what happened to quarantined events;
- which accountable role approved recovery;
- when trusted operation resumed.

---

## When an RDR Is Required

An RDR should be required before returning to `OPERATIONAL` after any of the following conditions:

- `AUDIT_INTEGRITY_BREACH`;
- failed Decision Log hash-chain verification;
- failed Responsibility Event Stream verification;
- suspected signing key compromise;
- missing Decision Log entries for external-effect actions;
- mismatch between technical trace and business decision log;
- conflicting Governance Gateway records;
- recovery from `READ_ONLY_GOVERNANCE_MODE`;
- recovery from high-impact `DEGRADED_MODE`;
- global, zone, tenant, or workflow-level containment.

---

## Required Sections

A Recovery Decision Record should contain five required sections:

1. Incident and Scope
2. Evidence of Integrity
3. Disposition of Quarantined Events
4. Risk Acceptance Statement
5. Authority and Approval Evidence

---

## 1. Incident and Scope

This section identifies the breach and affected area.

Minimum fields:

- recovery id;
- breach id;
- governance condition;
- affected scope;
- affected workflow, tenant, zone, or gateway instance;
- detection timestamp;
- containment timestamp;
- recovery decision timestamp;
- return-to-operational timestamp if recovery is approved.

Example scope values:

```text
NODE_LOCAL
WORKFLOW_SCOPE
TENANT_SCOPE
ZONE_SCOPE
GLOBAL_SCOPE
```

---

## 2. Evidence of Integrity

This section records the technical evidence reviewed before recovery.

It should include:

- hash-chain verification result;
- signature verification result;
- event sequence verification result;
- Decision Log and Responsibility Event Stream reconciliation result;
- technical trace reconciliation result;
- policy version verification;
- key status;
- gateway instance consistency check;
- verification summary.

Example:

```text
hash_chain_verification: passed
signature_verification: passed
event_sequence_verification: passed
technical_trace_reconciliation: partial
policy_version_status: confirmed
key_rotation_status: completed
verification_status: passed_with_known_gaps
```

Technical evidence can show whether records are consistent.

It does not alone restore business trust.

---

## 3. Disposition of Quarantined Events

During `AUDIT_INTEGRITY_BREACH`, new governance records may be written into a Quarantine Log.

The RDR must explain what happened to those records.

Possible dispositions:

| Disposition | Meaning |
|---|---|
| `RECONCILED` | event was verified and reconciled with trusted records |
| `REJECTED` | event was found invalid or unreliable |
| `MANUALLY_REVIEWED` | event was reviewed by an accountable role |
| `REINTEGRATED` | event was added back into trusted records after verification |
| `PRESERVED_AS_EVIDENCE` | event remains isolated for audit or investigation |
| `UNRESOLVED` | event cannot yet be trusted or rejected |

Minimum fields:

- quarantine log id;
- number of quarantined events;
- number reviewed;
- number reconciled;
- number rejected;
- number preserved as evidence;
- number unresolved;
- reviewer role;
- disposition summary.

---

## 4. Risk Acceptance Statement

Recovery does not always mean zero risk.

It means the remaining risk is understood, documented, and accepted by an accountable role.

The Risk Acceptance Statement should include:

- unresolved risks;
- accepted risks;
- rejected risks;
- compensating controls;
- monitoring requirements after recovery;
- time-limited conditions if recovery is conditional;
- accountable role accepting risk.

Example:

```text
unresolved_risk: three quarantined events preserved as evidence
compensating_control: read-only monitoring for affected workflow for 24 hours
risk_acceptance: accepted by Audit Owner
```

---

## 5. Authority and Approval Evidence

Recovery must not be treated as an automatic system event.

The RDR should include evidence that recovery was approved by an accountable role.

Minimum fields:

- accountable recovery role;
- approver identity or role reference;
- approval timestamp;
- approval decision;
- approval rationale;
- cryptographic evidence of authority where available;
- signature or approval artifact reference.

Cryptographic authority evidence may include:

- digital signature;
- signed approval event;
- signed recovery decision hash;
- approval record in an external GRC system;
- multi-party approval record for high-impact recovery.

---

## Recovery Decisions

Possible recovery decisions:

| Decision | Meaning |
|---|---|
| `RESTORE_OPERATIONAL` | affected scope may return to trusted operation |
| `PARTIAL_RESTORE` | only selected workflows, tenants, zones, or actions may resume |
| `CONTINUE_CONTAINMENT` | recovery is not approved yet |
| `ENTER_READ_ONLY_GOVERNANCE_MODE` | strict evidence-gathering mode continues |
| `ESCALATE_RECOVERY` | higher-level role must decide |
| `FAIL_CLOSED` | execution remains blocked in affected scope |

---

## Relationship to Read-Only Governance Mode

`READ_ONLY_GOVERNANCE_MODE` is a strict containment mode.

In this mode, the system may observe, collect evidence, write quarantine records, and support audit review.

It should not allow new action progression toward external execution inside the affected scope.

An RDR is required to leave Read-Only Governance Mode and return to `OPERATIONAL` or partial operation.

---

## Relationship to Decision Log

The Recovery Decision Record is related to, but different from, the Decision Log.

| Artifact | Purpose |
|---|---|
| Decision Log | records business accountability for an AI-supported action |
| Recovery Decision Record | records business accountability for restoring trust in the governance system |

A Decision Log answers:

> Why was this action allowed, rejected, escalated, or executed?

An RDR answers:

> Why was this system or scope trusted again after governance integrity was broken?

---

## Minimum RDR Shape

```text
recovery_id: rdr-001
breach_id: breach-001
governance_condition: AUDIT_INTEGRITY_BREACH
affected_scope: WORKFLOW_SCOPE
verification_status: passed_with_known_gaps
quarantine_disposition: reviewed_and_partially_reconciled
risk_acceptance: accepted_with_compensating_controls
recovery_decision: PARTIAL_RESTORE
accountable_recovery_role: Audit Owner
approval_timestamp: 2026-05-21T18:30:00Z
return_to_operational_timestamp: 2026-05-21T18:45:00Z
```

---

## Anti-Patterns

Avoid:

- automatic recovery without accountable approval;
- treating technical verification as sufficient business trust;
- omitting unresolved risks;
- mixing quarantined records into trusted logs without disposition;
- returning globally to OPERATIONAL after a scoped recovery;
- allowing execution before RDR approval in high-impact breach scenarios.

---

## Related Documents

- [`docs/audit-integrity-breach-response.md`](audit-integrity-breach-response.md)
- [`docs/recovery-protocol.md`](recovery-protocol.md)
- [`docs/distributed-governance-condition-propagation.md`](distributed-governance-condition-propagation.md)
- [`rfcs/rfc-audit-integrity-and-recovery-protocol.md`](../rfcs/rfc-audit-integrity-and-recovery-protocol.md)

---

## Core Principle

> A system may technically recover before the organization is ready to trust it again. The RDR records when and why trust was restored.
