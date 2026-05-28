# RABA Semantic Dependency Map

**Status:** Architecture Working Note  
**Canonical status:** Non-canonical. This document is a topology stabilization aid and does not define accepted RABA architecture.  
**Purpose:** Clarify semantic dependencies between major RABA concepts so the framework does not expand faster than its topology stabilizes.  
**Review context:** Created in response to external structural review warning that semantic expansion may outrun topology stabilization.  
**Related concepts:** Human Authority Constitution, Policy Integrity, Governance Gateway, Responsibility Event Stream, Decision Log, Governance Observability, Operational Controllability, Contextual Legitimacy, Bind-Time Admissibility, Escalation Ownership, Human Owner Confirmation, Active Evidence Interlock, Reversibility Profile, Independent Multi-Role Confirmation

## 1. Why This Map Exists

RABA now contains multiple strong governance concepts.

The next risk is not lack of ideas.

The next risk is topology instability:

> semantic expansion outrunning topology stabilization.

This means concepts may begin to overlap, depend on each other recursively, or silently accumulate authority they should not have.

This map exists to make dependency directions explicit and acyclic.

## 2. Core Topology Rules

RABA should preserve the following topology rules:

```text
Authority source ≠ Policy
Policy ≠ Prompt
Prompt ≠ Runtime interpretation
Runtime interpretation ≠ Final authority
Observability ≠ Accountability
Observability ≠ Authority
Gateway enforcement ≠ Human authority
External review ≠ Adoption
Multi-AI agreement ≠ Approval
```

These distinctions protect RABA from governance theatre, recursive oversight semantics, and hidden authority drift.

## 3. Concept Role Categories

RABA concepts should be classified by role.

A concept may support multiple roles, but it should not silently change role without explicit architectural decision.

| Role category | Meaning | Examples |
|---|---|---|
| Authority source | Defines who may authorize, reserve, or delegate responsibility. | Human Owner, Human Authority Constitution |
| Policy source / policy protection | Defines or protects enforceable policy constraints. | Policy Integrity, Operational Policy |
| Runtime check | Evaluates whether action conditions are satisfied at runtime. | Bind-Time Admissibility, Contextual Legitimacy checks, Active Evidence Interlock |
| Enforcement / routing point | Selects allow / block / escalate. | Governance Gateway |
| Evidence source | Supplies or verifies supporting evidence. | Evidence state, evidence snapshot, retrieval source, active confirmation output |
| Event source | Emits structured responsibility-relevant state changes. | Responsibility Event Stream |
| Decision record | Records human, business, or governance decisions. | Decision Log |
| Observability output | Shows traces, state, transitions, dashboards, or telemetry. | Governance Observability, audit views |
| Escalation mechanism | Routes uncertainty, authority gaps, or policy failures. | Escalation Ownership, Independent Multi-Role Confirmation |
| External input | Provides critique, comparison, or review but not approval. | External reviews, multi-AI reviews, partner comments |

## 4. Current Dependency Map

The following is a working dependency map.

```text
Human Owner
  ↓
Human Authority Constitution
  ↓
Operational Policy
  ↓
Policy Integrity
  ↓
Bind-Time Admissibility / Contextual Legitimacy / Evidence checks
  ↓
Governance Gateway
  ↓
allow | block | escalate
  ↓
Responsibility Event Stream
  ↓
Decision Log / Audit / Replay / Corrective Governance
```

This is not a strict linear pipeline.

It is a dependency direction map:

- authority should flow downward from human source to policy;
- runtime checks should not redefine authority;
- Gateway should enforce, not become the authority source;
- Event Stream should record, not authorize;
- Observability should inform, not approve.

## 5. Authority Sources

### Human Owner

The Human Owner is the terminal authority inside RABA.

The Human Owner may confirm, reject, delegate, reserve, or amend authority.

RABA must not create a higher AI-generated governance layer above the Human Owner.

### Human Authority Constitution

The Human Authority Constitution defines reserved human authority, delegation boundaries, and non-delegable decision classes.

It is a human-domain authority artifact.

It is not a runtime prompt.

Operational AI agents must not interpret constitutional text directly.

## 6. Policy Layer

### Operational Policy

Operational Policy translates authority boundaries into enforceable rules, constraints, thresholds, and escalation triggers.

Operational Policy is the bridge between human authority and runtime enforcement.

### Policy Integrity

Policy Integrity protects policies from:

- drift;
- contradiction;
- broken traceability;
- unauthorized change;
- misuse;
- invalid derivation from authority source.

Policy Integrity does not replace the Human Authority Constitution.

It protects the policies derived from it.

## 7. Runtime Checks

Runtime checks determine whether a specific action is currently admissible or legitimate.

Examples include:

- Bind-Time Admissibility;
- Contextual Legitimacy;
- Active Evidence Interlock;
- confirmation freshness check;
- authority scope check;
- evidence freshness check;
- reversibility profile check;
- uncertainty state check.

Runtime checks may detect failure or ambiguity.

They do not create final authority.

## 8. Governance Gateway

The Governance Gateway is the enforcement and routing point.

It decides:

```text
allow | block | escalate
```

The Gateway should enforce policies and admissibility checks.

It must not become hidden final interpretive authority.

The Gateway should not probabilistically interpret constitutional intent.

If authority, evidence, policy, or legitimacy is unclear, the Gateway should prefer block or escalate over silent execution.

## 9. Responsibility Event Stream

The Responsibility Event Stream records responsibility-relevant state changes.

It may record:

- recommendation created;
- evidence checked;
- confirmation requested;
- authorization granted;
- Gateway decision made;
- action blocked;
- action escalated;
- action executed;
- consequence recorded;
- rollback requested;
- decision logged.

The Event Stream is an event source and replay substrate.

It is not the authority source.

## 10. Decision Log

The Decision Log records human, business, and governance decisions.

It should separate:

- business accountability;
- technical traces;
- evidence references;
- human rationale;
- known limitations;
- post-consequence correction.

The Decision Log does not replace observability, but it also must not be reduced to observability.

## 11. Governance Observability

Governance Observability may show:

- traces;
- event streams;
- dashboards;
- transition states;
- evidence status;
- Gateway decisions;
- policy status;
- audit views.

But observability does not authorize action.

Core guardrail:

> Governance Observability informs governance, but does not become Governance Authority.

## 12. Contextual Legitimacy and Human Interpretive Drift

Contextual Legitimacy checks whether the conditions that made an action legitimate still validly bind the action.

Human interpretive drift should be treated carefully.

Current topology recommendation:

> Human Interpretive Stability should remain a failure mode or condition inside Contextual Legitimacy degradation unless Human Owner explicitly elevates it to a separate architecture layer.

This avoids recursive oversight semantics:

```text
Who interprets the interpreter?
```

## 13. Escalation and Independent Confirmation

Escalation Ownership defines who receives unresolved authority, evidence, policy, or legitimacy problems.

Independent Multi-Role Confirmation may be required for high-risk actions where one person's approval is insufficient.

These concepts support responsibility preservation.

They do not replace Human Owner authority unless explicitly defined by policy and confirmed by Human Owner.

## 14. External Reviews and Multi-AI Reviews

External reviews, partner comments, and multi-AI critiques may strengthen RABA.

They can provide:

- stress tests;
- terminology improvements;
- architecture warnings;
- comparison points;
- implementation suggestions.

They cannot provide final architectural approval.

Core guardrails:

```text
External review is not adoption.
Multi-AI agreement is not approval.
Conceptual overlap is not partnership.
```

## 15. Acyclic Dependency Rule

RABA should avoid circular definitions such as:

```text
Gateway decides legitimacy because Contextual Legitimacy says Gateway may decide legitimacy.
```

or:

```text
Observability proves accountability because accountability is what observability displays.
```

or:

```text
AI interprets Human Authority Constitution because the Constitution authorizes AI to interpret the Constitution.
```

A valid topology should preserve clear dependency direction:

```text
Human authority → policy → runtime check → gateway outcome → event record → decision log → audit/review
```

Review may feed back into future policy or constitutional amendments, but only through Human Owner confirmation.

## 16. Topology Boundaries Table

| Boundary | Must preserve | Failure mode if blurred |
|---|---|---|
| Human Authority vs Operational Policy | Authority defines; policy implements. | Policy becomes its own authority source. |
| Policy vs Prompt | Policy governs; prompt instructs. | Prompt becomes unapproved governance rule. |
| Runtime Check vs Authority | Checks evaluate; authority authorizes. | Runtime check starts granting authority. |
| Gateway vs Human Owner | Gateway enforces; Human Owner retains final authority. | Gateway accumulates hidden interpretive power. |
| Event Stream vs Decision Log | Event stream records transitions; Decision Log records governance/business decisions. | Technical trace is mistaken for accountability. |
| Observability vs Authority | Observability informs; authority authorizes. | Dashboard state becomes approval. |
| External Review vs Adoption | Review informs; Human Owner approves. | External agreement becomes implied validation. |
| Human Interpretive Drift vs Contextual Legitimacy | Drift is a condition/failure mode unless elevated intentionally. | Recursive governance universe. |

## 17. Implications for Next Architecture Work

This map suggests that the next stabilization work should focus on:

1. Responsibility Event topology;
2. Action Classes;
3. explicit state transitions;
4. Gateway outcome semantics;
5. observability vs authority guardrails;
6. Contextual Legitimacy degradation modes;
7. policy-to-constitution traceability;
8. non-recursive escalation semantics.

## 18. What This Map Does Not Claim

This map does not claim that:

- all listed concepts are canonical;
- the topology is final;
- every dependency is fully resolved;
- RABA already has a complete normalized event model;
- Human Interpretive Stability must be permanently subordinated to Contextual Legitimacy;
- external reviews have approved these boundaries;
- GitHub documentation alone creates governance.

## 19. Governance Boundary

This map is non-canonical.

Topology stabilization is not final architecture approval.

Observability is not authority.

Gateway enforcement is not Human Owner authority.

External review is not adoption.

Multi-AI agreement is not approval.

Final architectural approval belongs to the Human Owner.

## Key Takeaway

RABA should now stabilize its semantic topology before expanding concepts further.

The strongest dependency direction is:

```text
Human authority → policy → runtime check → gateway outcome → event record → decision log → audit/review
```

If RABA preserves this direction, it can continue expanding without turning governance into recursive abstraction or symbolic compliance theatre.
