# Consequence Boundary Trigger Matrix

**Status:** Working Note  
**Canonical status:** Non-canonical. This note proposes a mechanism for discussion and does not define accepted RABA architecture.  
**Related inquiry:** [`inquiries/human-ai-autonomy-control-tension.md`](../../inquiries/human-ai-autonomy-control-tension.md)  
**Related concepts:** Action Classes, Human Authority Constitution, Bind-Time Admissibility, Governance Gateway, Responsibility Event Topology, Policy Integrity, Active Confirmation Interlock, Reversibility Profile

---

## 1. Working Definition

The Consequence Boundary Trigger Matrix is not a control layer that manages every AI step.

It is an embedded admissibility structure that detects when an AI-proposed action crosses into a new consequence class.

Its purpose is to preserve speed inside authorized autonomy while making authority, evidence, policy, reversibility, and human responsibility explicit at execution-relevant boundaries.

---

## 2. Core Problem

Autonomous AI systems create value by continuously translating instructions into next actions.

Human responsibility requires that some transitions cannot remain continuous.

When an AI-proposed action crosses into a new consequence class, the system must not rely only on model confidence, prior success, tool access, or broad instruction interpretation.

It must invoke an admissibility boundary.

The local contradiction:

```text
Autonomy needs execution continuity.
Responsibility needs consequence-boundary interruption.
```

If every transition is checked, autonomy loses speed.

If the AI system decides for itself which transitions require checking, execution capability can become hidden authority.

---

## 3. What the Matrix Does

The matrix does not ask whether every AI action is good, useful, or intelligent.

It asks whether a proposed action crosses a boundary that requires explicit admissibility validation.

The matrix should help determine:

```text
Does this proposed action remain inside authorized autonomy,
or does it cross into a consequence class that requires allow / block / escalate handling?
```

---

## 4. What the Matrix Must Not Do

The matrix must not become a probabilistic self-permission mechanism.

It must not allow the AI system to be the final judge of whether its own action requires review.

The AI system may propose or detect possible boundary signals.

But mandatory boundary triggers must belong to the architecture, not to the model's confidence.

Core rule:

```text
The AI system may propose the next action.
It must not be the final judge of whether that action requires admissibility review.
```

---

## 5. Trigger Sources

A trigger may fire when a proposed action changes or touches one or more of the following:

| Trigger source | Example |
|---|---|
| Instruction scope | `draft` becomes `send`; `recommend` becomes `execute` |
| Action class | Routine communication becomes external commitment |
| External effect | Internal note becomes customer-facing statement |
| Authority relevance | Action requires a role, person, or Human Owner authority |
| Evidence dependency | Action depends on evidence being present, fresh, and referenceable |
| Policy sensitivity | Action touches a policy rule or explicit prohibition |
| Reversibility | Reversible step becomes difficult to reverse or irreversible |
| Financial consequence | Preparation becomes approval or transfer |
| Data consequence | Read-only access becomes write/update/delete |
| Production consequence | Simulation becomes production/API action |
| Human-reserved decision | Action enters a class reserved by the Human Authority Constitution |

---

## 6. Relationship to Existing RABA Mechanisms

| Mechanism | Relationship |
|---|---|
| Human Authority Constitution | Defines what remains human-reserved and what may be delegated. |
| Action Classes | Provide the consequence classes the matrix must detect. |
| Bind-Time Admissibility | Performs the admissibility check once a trigger indicates that validation is required. |
| Governance Gateway | Routes the proposed action to allow, block, or escalate. |
| Responsibility Event Topology | Preserves the trigger, decision, and outcome for replay. |
| Policy Integrity | Ensures rules derived from human authority do not drift silently. |
| Active Confirmation Interlock | Reduces rubber-stamp risk where human confirmation is required. |
| Reversibility Profile | Adjusts strictness according to how reversible the proposed action is. |

---

## 7. Draft Flow

```text
Human Authority Constitution
        ↓
Operational Policies
        ↓
Task Instructions
        ↓
AI Runtime Interpretation
        ↓
Proposed Action
        ↓
Consequence Boundary Trigger Matrix
        ↓
Bind-Time Admissibility
        ↓
Governance Gateway
        ↓
Allow / Block / Escalate
        ↓
Responsibility Event Record
        ↓
Decision Log / Human Decision where needed
```

The matrix sits between the proposed action and the admissibility boundary.

It answers:

```text
Does this action require admissibility validation, and why?
```

The gateway answers:

```text
Given the relevant authority, evidence, policy, uncertainty, and reversibility state, should this action be allowed, blocked, or escalated?
```

---

## 8. Fast Path and Boundary Path

The matrix should preserve speed where possible.

A proposed action may remain on a fast path when it is:

- inside instruction scope;
- inside authorized action class;
- low risk;
- reversible;
- supported by required evidence;
- compliant with applicable policy;
- not externally committing;
- not human-reserved.

A proposed action should leave the fast path when it introduces:

- external commitment;
- unclear authority;
- missing or stale evidence;
- explicit policy violation;
- financial approval or irreversible consequence;
- production/API effect;
- customer-impacting data change;
- human-reserved decision;
- unresolved uncertainty that affects admissibility.

---

## 9. Hidden Authority Accumulation Risk

The matrix exists partly to prevent hidden authority accumulation.

Hidden authority accumulation occurs when technical capability, human approval, tool access, past success, or operational speed begins to function as permission without explicit admissibility validation.

Examples:

```text
Prior approval becomes broader authority.
Tool access becomes action permission.
Past success becomes future authorization.
Speed becomes evidence of correctness.
Repeated execution becomes assumed legitimacy.
```

RABA boundary statements:

```text
Human approval is not automatically executable admissibility.
Tool access is not authority.
Past success is not expanded authority.
Speed is not permission.
Repeated use is not approval.
```

---

## 10. Open Design Questions

This working note does not yet define the matrix implementation.

Open questions include:

1. What minimal set of trigger sources is required for a useful first implementation?
2. Should triggers be encoded as deterministic rules, policy references, schema constraints, or event transitions?
3. How should AI-detected boundary signals be used without giving the AI final authority over trigger activation?
4. How should action classes be formally defined and versioned?
5. How should trigger events be recorded in Responsibility Event Topology?
6. Which trigger outcomes require Decision Log entries?
7. How should false positives be reduced without weakening responsibility protection?
8. How should a workflow continue when one branch escalates but other safe branches may proceed?
9. How should the matrix handle conflicting triggers?
10. What is the smallest demo that can show the matrix without overbuilding it?

---

## 11. Community Discussion Angle

This working note should be connected to the broader open problem:

```text
How can AI autonomy create speed without dissolving human responsibility?
```

A useful discussion prompt:

> Where should the admissibility trigger belong: inside the AI system, inside deterministic policy infrastructure, inside workflow orchestration, or in a hybrid design?

Community input may help identify:

- real transition points in enterprise workflows;
- missing trigger sources;
- over-control risks;
- under-control risks;
- cases where a process should continue while only a specific action branch escalates.

Community input remains external input only.

It does not create approval, adoption, or canonical architecture.

---

## Governance Boundary

This working note is non-canonical.

It does not define accepted RABA architecture.

It does not claim that the matrix is approved, complete, or implementation-ready.

External review is input, not approval.

GitHub discussion is input, not approval.

Multi-AI agreement is not approval.

Final architectural approval belongs to the Human Owner.

---

## Key Takeaway

The Consequence Boundary Trigger Matrix is a proposed way to preserve AI autonomy without allowing autonomy to become hidden authority.

It does not slow every action.

It detects transitions where AI interpretation may cross into a new consequence class and therefore requires explicit admissibility handling.
