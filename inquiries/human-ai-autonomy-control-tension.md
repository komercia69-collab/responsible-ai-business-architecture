# Inquiry — Human-AI Autonomy and Control Tension

**Status:** Open Problem / Inquiry  
**Canonical status:** Non-canonical. This inquiry frames an unresolved problem and does not define accepted RABA architecture.  
**Problem area:** Human-AI autonomy, control, responsibility, speed, governance boundaries  
**Related working note:** [`docs/notes/human-ai-autonomy-control-tensions.md`](../docs/notes/human-ai-autonomy-control-tensions.md)  
**Related concepts:** Responsibility Throughput Model, Speed Protection Principle, Human Authority Constitution, Action Classes, Bind-Time Admissibility, Governance Gateway, Responsibility Event Topology, Decision Log, Policy Integrity, Semantic Dependency Map

---

## 1. Problem Question

How can AI autonomy create speed without dissolving human responsibility?

Or more explicitly:

> Under what conditions may autonomous or multi-agent AI systems move processes forward quickly without causing human authority, understanding, accountability, and correction duties to disappear into automation?

---

## 2. Why This Matters

Autonomous AI systems create value through:

- speed;
- scale;
- continuity;
- reduced handoffs;
- reduced manual waiting;
- faster movement from input to outcome.

Human responsibility depends on:

- understanding;
- authority;
- control;
- confirmation;
- accountability;
- correction;
- ability to explain and review what happened.

The tension is structural:

```text
Too much control can destroy the value of autonomy.
Too much autonomy can dissolve responsibility.
```

RABA must therefore avoid two weak answers:

1. universal human approval for every AI action;
2. unconstrained AI autonomy with responsibility reconstructed only after failure.

The open problem is how to design the conditions for responsible speed.

---

## 3. Current RABA Direction

Current RABA work suggests that autonomy should be governed through a combination of:

- action classes;
- risk and reversibility profiles;
- evidence availability and freshness;
- authority scope;
- Human Owner confirmation where required;
- bind-time admissibility checks;
- Governance Gateway allow / block / escalate outcomes;
- Responsibility Event chains;
- Decision Log records;
- post-consequence correction.

Current guiding formula:

```text
fast where possible;
stopped where necessary;
accountable throughout.
```

This is not yet a complete solution.

It is a working direction under topology stabilization.

---

## 4. Key Sub-Problems

### 4.1 Speed vs Responsibility

How can automation move quickly while still preserving meaningful responsibility checkpoints?

### 4.2 Autonomy vs Predictability

How much freedom can an AI system have before the resulting path becomes too difficult to explain or govern?

### 4.3 Control vs Automation Value

Where should human control be concentrated so it protects responsibility without reducing automation to manual review?

### 4.4 Machine Speed vs Human Understanding

How can humans retain sufficient understanding when AI systems move faster than humans can inspect each intermediate step?

### 4.5 Formal Approval vs Real Accountability

How can systems prevent human approval from becoming rubber-stamping?

### 4.6 Delegation vs Non-Delegable Authority

Which decisions may be delegated, and which must remain human-reserved?

### 4.7 Local Efficiency vs Systemic Risk

How can a system detect when a locally efficient AI action creates broader governance or responsibility risk?

### 4.8 Observability vs Authority

How can dashboards and traces inform governance without becoming hidden authority?

### 4.9 Human Approval vs Executable Admissibility

When is human approval insufficient because evidence, authority, policy, reversibility, or context conditions are not satisfied?

### 4.10 Hidden Authority Accumulation

How can the architecture prevent authority from silently accumulating through repeated use, prior access, prior approval, or lack of prior blocking?

---

## 5. Possible Solution Paths

The following RABA mechanisms may contribute to a solution:

| Mechanism | Contribution |
|---|---|
| Action Classes | Distinguish low-risk drafting from external commitment, payment approval, production action, or irreversible high-risk action. |
| Bind-Time Admissibility | Check whether an action is admissible at the moment execution permission is considered. |
| Governance Gateway | Route actions to allow, block, or escalate. |
| Human Authority Constitution | Define what may be delegated and what remains human-reserved. |
| Responsibility Event Topology | Preserve event chains for replay and audit. |
| Decision Log | Preserve human-relevant decisions and rationale. |
| Policy Integrity | Protect derived policies from drift, broken traceability, or unauthorized change. |
| Reversibility Profile | Adjust control strength according to how reversible the action is. |
| Active Confirmation Interlock | Reduce rubber-stamp approval risk. |

---

## 6. Open Decisions

This inquiry remains unresolved until RABA clarifies:

1. Which action classes may proceed under delegated authority?
2. Which action classes always require Human Owner confirmation?
3. Which conditions should route to escalation?
4. Which conditions should block or fail closed?
5. Which Responsibility Events are required for replayability?
6. Which Gateway outcomes require Decision Log entries?
7. How should hidden authority accumulation be detected?
8. How should human approval be separated from executable admissibility?
9. How should community input influence this open problem without becoming approval?
10. What minimum implementation profile could test this in one workflow?

---

## 7. Related Documents

- [`docs/notes/human-ai-autonomy-control-tensions.md`](../docs/notes/human-ai-autonomy-control-tensions.md)
- [`docs/architecture/semantic-dependency-map.md`](../docs/architecture/semantic-dependency-map.md)
- [`docs/architecture/responsibility-event-topology.md`](../docs/architecture/responsibility-event-topology.md)
- [`docs/notes/action-classes-working-note.md`](../docs/notes/action-classes-working-note.md)
- [`docs/notes/bind-time-admissibility-scenario-tests.md`](../docs/notes/bind-time-admissibility-scenario-tests.md)
- [`concepts/constitutional-responsibility-layer.md`](../concepts/constitutional-responsibility-layer.md)
- [`docs/reviews/veritas-bind-time-admissibility-raba-side-review-questions.md`](../docs/reviews/veritas-bind-time-admissibility-raba-side-review-questions.md)
- [`inquiries/community-discussion-intake.md`](community-discussion-intake.md)

---

## 8. Community Discussion Angle

This inquiry is a good candidate for future GitHub Discussions under an `Open Problems` category.

Possible discussion prompt:

> Where should human control be placed in autonomous AI workflows so responsibility remains meaningful without destroying the value of automation?

Community input may help identify:

- real enterprise workflow examples;
- action classes not yet covered;
- hidden authority accumulation risks;
- cases where approval is not enough;
- practical evidence and replay requirements.

Community discussion is input only.

It does not create approval or adoption.

---

## 9. Current Status

This inquiry is open.

It supports the current RABA topology stabilization phase.

It should not be treated as solved until RABA can demonstrate a stable relationship between:

```text
human authority
→ action class
→ evidence
→ admissibility
→ gateway outcome
→ responsibility event
→ decision log
→ audit / correction
```

---

## Governance Boundary

This inquiry is non-canonical.

Open problem framing is not accepted architecture.

Community discussion is not adoption.

External review is not approval.

Multi-AI agreement is not approval.

Final architectural approval belongs to the Human Owner.

---

## Key Takeaway

The central RABA challenge is not choosing between autonomy and control.

The challenge is designing conditions under which AI autonomy can create speed while human responsibility remains explicit, replayable, and accountable.
