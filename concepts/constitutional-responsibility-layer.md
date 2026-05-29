# Human Authority Constitution

**Former working name:** Constitutional Responsibility Layer  
**Alternative framing:** Root Responsibility Constitution  
**Mechanism name:** Responsibility Delegation Chain  
**Status:** Discussion Draft  
**Version:** 0.3  
**Canonical status:** Non-canonical. This document records a working architectural direction for Human Owner review.  
**Owner:** Oleksandr Shuliak — Human Owner  
**Review sources:** Claude critical review; Gemini stress-test review  
**Related concepts:** Responsibility Realization Model, Governance Gateway, Responsibility Event Stream, Human Owner Confirmation, Contextual Legitimacy, Human Interpretive Stability, Bind-Time Admissibility Checklist, Policy Integrity, Escalation Ownership, Reversibility Profile, Decision Log

## Summary

The Human Authority Constitution is a proposed RABA concept for preserving human responsibility while AI systems receive meaningful operational autonomy.

The core idea is:

> Human responsibility should move upward, not disappear.

As AI systems receive more autonomy at the operational level, human responsibility must become clearer at the level of intention, authority, scope, constraints, escalation, and accountability.

This concept is not canonical. It is a discussion draft for Human Owner review.

## Core Principle

> The more autonomy AI systems receive at the operational level, the stronger the Human Authority Constitution must become at the human level.

Autonomy increases the distance between human intent and AI action.

That distance increases drift risk.

A clear Human Authority Constitution helps prevent operational autonomy from becoming unaccountable autonomy.

## What This Is Not

The Human Authority Constitution is not:

- a runtime prompt;
- a policy document by itself;
- a checklist;
- a Governance Gateway rule;
- a substitute for Human Owner responsibility;
- a source of legal or compliance claims.

It defines the human authority source from which operational policies and admissibility checks derive.

## Authority and Execution Structures

Claude review identified that the original single chain mixed different abstraction levels. RABA should distinguish vertical authority from horizontal execution.

### Vertical authority structure

```text
Human Authority Constitution
→ Operational Policy
→ Agent Instruction
```

The vertical structure defines what humans reserve, what may be delegated, and how authorized action classes are translated into rules or instructions.

### Horizontal execution pipeline

```text
Runtime Interpretation
→ Action Boundary
→ Bind-Time Admissibility
→ Governance Gateway
→ Allow / Block / Escalate
```

The horizontal structure defines how a live action is interpreted, checked, routed, and recorded.

These structures are connected, but they must not be collapsed.

A Governance Gateway cannot authorize what the Human Authority Constitution reserves for the Human Owner.

## Human / Policy / AI / System Domain Separation

Gemini review added an important runtime isolation warning: the Constitution must not become a probabilistic runtime prompt for an operational AI agent.

RABA should separate domains as follows:

| Domain | Artifact | Function |
|---|---|---|
| Human Domain | Human Authority Constitution | Defines human intent, reserved authority, and non-delegable boundaries. |
| Bridge Domain | Operational Policy | Translates constitutional clauses into operational rules, thresholds, and constraints. |
| AI Domain | Agent Instruction | Gives an AI system a task inside policy-derived boundaries. |
| System Domain | Governance Gateway | Enforces allow / block / escalate decisions based on policies and admissibility checks. |
| Audit Domain | Decision Log / Responsibility Event Stream | Records what happened, what was authorized, and what can or cannot be proven. |

## Runtime Isolation Rule

Operational AI agents must not interpret constitutional text directly during task execution.

The Constitution is a human authority artifact.

It may be referenced by governance infrastructure through clause IDs, hashes, derived policy links, and metadata.

But operational agents should act through policies and instructions derived from the Constitution, not through free-form probabilistic interpretation of the Constitution's intent or spirit.

RABA should therefore prohibit this pattern:

```text
LLM agent reads Constitution → LLM decides whether action fits the spirit of the Constitution → action proceeds
```

RABA should prefer this pattern:

```text
Human Authority Constitution → Operational Policy with traceability link → Gateway check → allow / block / escalate
```

## Operational Testability Requirement

A constitutional clause is useful only if it can be translated into operational constraints, escalation triggers, admissibility checks, or explicit human-reserved decisions.

Weak examples:

- Act responsibly.
- Use good evidence.
- Avoid risk.
- Stay aligned.

Operationally testable translations:

- Do not execute external commitments without Human Owner confirmation.
- Require evidence to be present, fresh, referenceable, and scope-relevant before execution.
- Escalate high-risk actions and block irreversible high-risk actions with missing authority or missing evidence.
- Require escalation when authority scope, approval path, or Human Owner identity is unclear.

A vague constitution creates the appearance of responsibility without giving the system enough structure to preserve responsibility at runtime.

## What Belongs in the Constitution

A statement belongs in the Human Authority Constitution if it defines what humans reserve, what authority may be delegated, or what cannot be delegated without losing meaning.

Boundary criterion:

> Constitutional statements define what humans reserve for themselves. Policy statements define how AI systems implement what humans have authorized.

If a statement can be fully delegated to a policy engine without losing meaning, it belongs primarily in policy.

If delegating it would erase human authority, accountability, or reserved judgment, it belongs in the Constitution.

Examples of constitutional statements:

- External commitment creation is reserved for Human Owner confirmation.
- Canonical architecture changes require explicit Human Owner approval and Decision Log entry.
- Multi-AI agreement does not constitute approval.
- AI systems may not act under unclear authority. If Human Owner identity, approval scope, or action authority is ambiguous, the action is blocked or escalated.

## Narrowed Example: External Commitment

A stronger constitutional clause should avoid unresolved words such as `authorized` without defining scope.

Recommended wording:

> External commitment creation is reserved for Human Owner confirmation. An action creates an external commitment if it implies obligation, timeline, or resource allocation to a party outside the current workflow.

This can then be translated into operational policy and Gateway checks.

## Policy Traceability Rule

Every Operational Policy derived from the Human Authority Constitution should include a traceability link to the constitutional clause that authorizes or constrains it.

Suggested field:

```json
{
  "policy_id": "external_commitment_policy_v1",
  "derived_from_constitution_clause": "HAC-001",
  "constitution_hash": "<hash>",
  "policy_integrity_state": "valid | drifted | broken_traceability | unauthorized_change"
}
```

The Governance Gateway should enforce operational policies.

It should not rely on an LLM's direct interpretation of constitutional language.

## Boundary with Policy Integrity

The Human Authority Constitution defines the source and scope of human authorization: what humans reserve, what may be delegated, and under which authority boundaries AI systems may operate.

Policy Integrity protects the policies derived from that Constitution from drift, contradiction, unauthorized change, broken traceability, or misuse.

In RABA terms:

- the Constitution is the authority source;
- Policy Integrity is the protection mechanism;
- Operational Policy is the bridge from authority to enforceable rules;
- Governance Gateway is the enforcement point.

Policies derive from the Constitution; they do not override it.

## Boundary with Responsibility Realization Model

The Responsibility Realization Model describes how responsibility becomes real across time, roles, process state, context, action, consequence, and audit.

The Human Authority Constitution defines the upstream human authority and reserved responsibility from which that realization begins.

In short:

- Human Authority Constitution defines the authority source;
- Responsibility Realization Model describes how responsibility is carried through the workflow;
- Governance Gateway and Responsibility Event Stream operationalize and record responsibility-relevant decisions.

## Closing the Recursion

The Human Owner's stated intent is the terminal authority inside RABA.

The Human Authority Constitution derives its validity from the Human Owner, not from a meta-constitutional process.

There is no higher AI-generated governance layer above the Human Owner within RABA.

This closes recursive governance semantics explicitly.

## Constitutional Drift and Amendment Path

Constitutions should not change casually, but they must not drift away from actual practice.

RABA therefore needs a lightweight amendment path controlled by the Human Owner.

A constitutional amendment should require:

- Human Owner confirmation;
- clear change summary;
- reason for change;
- affected clauses;
- affected operational policies;
- updated constitution hash or version;
- Decision Log entry;
- Policy Integrity check for derived policies.

AI may draft amendment proposals, but may not ratify them.

## Machine-Readable Constitutional Entry

A constitutional entry should produce a queryable record that governance infrastructure can reference without asking an operational LLM agent to interpret the full constitutional text.

```json
{
  "constitution_id": "raba-hac-v0.3",
  "clause_id": "HAC-001",
  "issued_by": "human_owner",
  "ratified_by_human_id": "oleksandr_shuliak",
  "issued_at": "<ISO 8601>",
  "valid_until": null,
  "authority_scope": [
    "internal_documentation",
    "draft_communications",
    "governance_review"
  ],
  "excluded_actions": [
    "external_commitment_creation",
    "canonical_architecture_change_without_confirmation",
    "partner_facing_publication"
  ],
  "escalation_triggers": [
    "action_scope_outside_authority_scope",
    "human_owner_identity_unclear",
    "evidence_missing_or_stale",
    "policy_traceability_broken"
  ],
  "evidence_requirement": "active_confirmation_interlock",
  "amendment_authority": "human_owner_only",
  "constitution_hash": "<hash>",
  "version": "0.3"
}
```

Narrative values or purpose statements may remain in documentation. Runtime-queryable records should contain only fields that Gateway, admissibility, or Policy Integrity checks can use.

## What Stronger Means

When AI autonomy increases, the Human Authority Constitution must become stronger across four dimensions:

- **More specific** — narrower authority scope and fewer implied permissions.
- **More formal** — explicit evidence requirements per authority class.
- **Lower escalation threshold** — broader conditions triggering mandatory review.
- **More auditable** — richer event fields for constitutional queries and derived policy traceability.

## Allowed Action Classes Gap

This concept references `allowed_action_classes`.

RABA now has a non-canonical working note for Action Classes:

[`docs/notes/action-classes-working-note.md`](../docs/notes/action-classes-working-note.md)

However, the action-class model is not yet canonical.

This remains an open stabilization gap.

Before this concept can move toward canonical review, RABA must define how action classes are named, scoped, versioned, and mapped to risk, authority, reversibility, evidence requirements, Policy Integrity checks, and Governance Gateway outcomes.

Open questions:

- What counts as an action class?
- Who defines allowed and excluded action classes?
- How are action classes versioned?
- How are action classes linked to risk class and reversibility profile?
- How does the Gateway detect that a runtime action belongs to an excluded action class?
- Which action classes are required for a minimal RABA v0.1 profile?

## Relationship to Bind-Time Admissibility

Bind-Time Admissibility checks whether a specific action is admissible at the moment it is allowed, blocked, or escalated.

The Human Authority Constitution establishes what makes an instruction or action class eligible for admissibility evaluation in the first place.

An action may satisfy some admissibility checks and still violate constitutional scope if the policy or instruction was derived from an incorrectly scoped authority source.

## Relationship to Governance Gateway

The Governance Gateway is the enforcement point.

It decides:

```text
allow | block | escalate
```

But the Gateway cannot authorize what the Human Authority Constitution reserves.

The Gateway should enforce policies derived from the Constitution, verify policy traceability, and escalate or block when authority scope is unclear.

## What This Concept Tries to Prevent

This concept helps prevent:

- autonomy without accountability;
- vague human responsibility;
- symbolic approval over autonomous workflows;
- lower-level drift from high-level human intent;
- broad delegation without clear boundaries;
- runtime interpretation that quietly expands authority;
- treating prompts as constitutions;
- treating vague values as executable policies;
- treating untestable high-level statements as sufficient governance;
- letting LLM agents interpret constitutional text directly during execution;
- broken traceability between policy and human authority.

## What This Concept Does Not Claim

This concept does not claim that:

- AI systems can carry human responsibility;
- human responsibility can be fully automated;
- high-level instructions are always sufficient;
- autonomy is safe by default;
- a constitution removes the need for runtime checks;
- a vague constitution is sufficient governance;
- prompts can replace policy;
- policy can replace Human Owner responsibility;
- Policy Integrity is redundant;
- this is canonical RABA architecture;
- external or multi-AI agreement equals approval.

## Recommended RABA Position

This concept should remain:

> Discussion Draft / Non-canonical.

It is promising and important, but not ready for canonical status until RABA resolves:

- formal allowed action classes;
- exact amendment path;
- integration with Policy Integrity checks;
- Governance Gateway schema implications;
- how much constitutional material may be exposed to specialized governance/audit agents, if any.

## Open Questions

1. Should the primary name be Human Authority Constitution, Root Responsibility Constitution, or another name?
2. How should allowed action classes be formally defined?
3. What is the minimum schema for a constitutional clause?
4. How should constitution_hash be generated and verified?
5. How should Policy Integrity detect broken traceability from policy to constitution clause?
6. Which specialized governance or audit agents may reference constitutional metadata?
7. How should RABA prevent operational agents from interpreting constitutional text directly?
8. What is the minimum lightweight amendment path controlled by the Human Owner?
9. How should this concept connect to Responsibility Realization Model without becoming an umbrella for everything?
10. Should this concept eventually be moved to a renamed file path?

## Governance Boundary

Multi-AI agreement is not approval.

External agreement is not approval.

Human Authority Constitution is not a runtime prompt.

Operational agents must not interpret constitutional text directly.

Policy derives from constitution; policy does not override constitution.

Governance Gateway enforces policies; it does not probabilistically interpret constitutional intent.

Autonomy is not responsibility transfer.

A high-level constitution is not a substitute for bind-time checks.

A prompt is not a constitution.

Runtime interpretation is not final authority.

Final architectural approval belongs to the Human Owner.

## Key Takeaway

Human responsibility should move upward, not disappear.

As AI systems receive more autonomy, human authority must become more explicit, more traceable, more testable, and better protected from runtime reinterpretation.

The Human Authority Constitution is the proposed human-domain source of authority from which operational policies derive. It is not a runtime instruction for AI agents.

RABA should protect the chain from human authority to policy to gateway enforcement to audit record without allowing probabilistic agents to replace Human Owner authority.
