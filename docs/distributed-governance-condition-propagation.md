# Distributed Governance Condition Propagation

This document describes how RABA governance conditions should behave when the Governance Gateway runs in a distributed environment.

It focuses on `AUDIT_INTEGRITY_BREACH`, but the same model can apply to other system-level governance conditions.

---

## Core Problem

In a clustered or distributed runtime, one Gateway instance may detect a governance condition before others.

The system must answer:

1. Should one local breach stop the whole cluster?
2. How quickly should breach information propagate?
3. How can the system avoid unsafe execution?
4. How can it avoid unnecessary availability collapse?
5. How does RABA distinguish local failure from shared trust failure?

---

## Core Principle

> Audit integrity breach must propagate fast enough to prevent unsafe execution, but narrowly enough to avoid becoming a denial-of-availability mechanism.

In short:

```text
Propagate quickly. Contain precisely.
```

---

## Governance Condition Scope

A governance condition should include a scope.

Possible scopes:

| Scope | Meaning | Typical response |
|---|---|---|
| `NODE_LOCAL` | one Gateway instance is affected | isolate that node |
| `WORKFLOW_SCOPE` | one workflow is affected | hold execution for that workflow |
| `TENANT_SCOPE` | one tenant, customer, or domain is affected | isolate tenant/domain |
| `ZONE_SCOPE` | one region, cluster, or policy zone is affected | contain that zone |
| `GLOBAL_SCOPE` | shared key, root policy, or shared event stream affected | global fail-contained |

---

## Condition Object

A distributed governance condition should be represented with enough context for other nodes to evaluate scope.

Minimum fields:

```text
governance_condition: AUDIT_INTEGRITY_BREACH
condition_id: condition-001
scope: NODE_LOCAL | WORKFLOW_SCOPE | TENANT_SCOPE | ZONE_SCOPE | GLOBAL_SCOPE
detected_by: gateway-instance-id
detected_at: timestamp
affected_workflow: optional
affected_tenant: optional
affected_zone: optional
affected_policy_root: optional
containment_action: hold | block | escalate | isolate_node | fail_contained
verification_status: pending
```

---

## Node-Local Breach

A node-local breach means the issue appears isolated to one Gateway instance.

Example causes:

- local storage corruption;
- local clock anomaly;
- instance-specific signature verification failure;
- local cache mismatch;
- local event write failure.

Recommended behavior:

1. affected node enters local containment;
2. affected node stops trusted execution;
3. affected node emits signed breach signal if possible;
4. coordination layer marks the node as degraded;
5. neighboring nodes verify whether shared components are affected;
6. traffic may be routed away from affected node.

The whole cluster should not automatically fail-closed unless shared trust components are implicated.

---

## Workflow-Scope Breach

A workflow-scope breach means records or state transitions for one workflow are inconsistent.

Recommended behavior:

- hold execution for that workflow;
- allow unrelated workflows to continue;
- write new records for the affected workflow to quarantine;
- verify Decision Log, Responsibility Events, and technical traces for that workflow;
- escalate to workflow owner and audit owner.

---

## Tenant-Scope Breach

A tenant-scope breach means one customer, domain, or organizational area is affected.

Recommended behavior:

- isolate the tenant or domain;
- stop high-impact execution for the affected tenant;
- continue unaffected tenants if shared components are trusted;
- preserve tenant-specific quarantine records;
- require recovery approval for that tenant or domain.

---

## Zone-Scope Breach

A zone-scope breach affects a region, cluster, policy zone, or deployment area.

Recommended behavior:

- contain the affected zone;
- stop trusted execution in that zone;
- route low-risk draft or recommendation work to degraded mode;
- verify whether shared keys, policies, or event streams are affected;
- avoid automatic global shutdown unless global components are compromised.

---

## Global Breach

A global breach means the shared root of trust may be compromised.

Examples:

- root signing key compromise;
- shared Decision Log integrity failure;
- shared Responsibility Event Stream corruption;
- root policy compromise;
- widespread inconsistent gateway decisions.

Recommended behavior:

```text
governance_condition: AUDIT_INTEGRITY_BREACH
scope: GLOBAL_SCOPE
execution_allowed: false for high-impact or external-effect actions
mode: fail-contained
```

Low-risk internal drafting or recommendation may continue in degraded mode if explicitly allowed.

---

## Breach Signal Propagation

When a Gateway instance detects a breach, it should emit a breach signal.

A breach signal should include:

- condition id;
- detected by;
- detected at;
- suspected scope;
- evidence summary;
- affected workflow, tenant, or zone;
- containment already applied;
- verification request;
- correlation id.

Other instances should not blindly trust the signal.

They should verify whether the breach affects shared components or their own scope.

---

## Avoiding Availability Attacks

If any local breach automatically stops the whole cluster, an attacker or faulty node can create an availability attack.

RABA should avoid this anti-pattern.

Recommended safeguards:

- scope every breach;
- require corroboration before global containment;
- isolate suspicious nodes first;
- separate local cache failures from shared log failures;
- keep trusted read-only policy snapshots for emergency evaluation;
- allow degraded DRAFT / RECOMMEND for unaffected scopes;
- require human recovery approval before returning affected scope to trusted operation.

---

## Escalation of Scope

Scope may expand during investigation.

Example:

```text
NODE_LOCAL → WORKFLOW_SCOPE → ZONE_SCOPE → GLOBAL_SCOPE
```

Expansion should be based on evidence, such as:

- multiple nodes report the same failure;
- shared event stream verification fails;
- root policy hash mismatch is found;
- signing key compromise is suspected;
- technical traces and decision records diverge across zones.

---

## De-Escalation of Scope

Scope may also shrink after verification.

Example:

```text
ZONE_SCOPE → NODE_LOCAL
```

De-escalation should require:

- verification evidence;
- impact assessment;
- quarantine review;
- accountable recovery approval;
- Recovery Decision Record.

---

## Relationship to Recovery Protocol

Distributed propagation does not replace Recovery Protocol.

It determines how the governance condition spreads and how containment is scoped.

Recovery Protocol determines how trust is restored.

Related document:

- [`docs/recovery-protocol.md`](recovery-protocol.md)

---

## Core Formula

> Contain the trust failure, but do not unnecessarily collapse the whole system.
