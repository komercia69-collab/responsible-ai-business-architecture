# Consequence Transition Control Layer

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Input basis:** Internal RABA synthesis across boundary-control notes  
**Related notes:** [`reliance-boundary-control-loop.md`](reliance-boundary-control-loop.md), [`agentic-ai-responsibility-threshold.md`](agentic-ai-responsibility-threshold.md), [`consequence-boundary-trigger-matrix.md`](consequence-boundary-trigger-matrix.md)  
**Related mechanisms:** Responsibility Event Stream, Responsibility Event Topology, Decision Log reconstruction, Source Log / Decision Log bridge, Bind-Time Admissibility, Governance Gateway, Human Authority Constitution

> This note is not approved architecture.  
> It proposes a candidate integration pattern for consequence-transition governance.  
> Human Owner confirmation is required before canonical adoption, schema changes, event-family adoption, implementation commitments, or treatment as an approved RABA layer.

---

## 1. Core idea

RABA controls not only AI actions, but the transitions through which AI output, external evidence, or workflow proposals become consequential.

```text
RABA controls not only AI actions.
It controls transitions into consequence.
```

Russian formulation:

```text
RABA управляет не только действиями ИИ.
RABA управляет переходами в последствие.
```

The dangerous moment is not only generation.

The dangerous moment is transition into consequence.

---

## 2. Why this matters

AI systems may appear safe while they are only producing text, summaries, drafts, classifications, recommendations, or plans.

Responsibility risk increases when that output is allowed to become one of the following:

- local reliance;
- workflow state change;
- tool use;
- external commitment;
- data update;
- production/API effect;
- financial consequence;
- human-reserved decision;
- escalation or denial;
- replayable responsibility record.

The central RABA question is therefore not only:

```text
What did the AI generate?
```

The stronger responsibility question is:

```text
What transition turned that output, evidence, or proposal into consequence?
```

---

## 3. Candidate definition

The Consequence Transition Control Layer is a candidate integration pattern for identifying, routing, recording, and replaying transitions where something becomes consequential.

It does not control every AI step.

It does not replace existing RABA mechanisms.

It provides a possible architectural frame for connecting boundary-control mechanisms that already point to the same responsibility problem.

Working formulation:

```text
A consequence transition occurs when information, evidence, AI output, or a workflow proposal gains operational force that can affect a person, organization, record, payment, obligation, decision, or external state.
```

Short formulation:

```text
Risk begins where interpretation becomes consequence.
```

Russian formulation:

```text
Риск начинается там, где интерпретация становится последствием.
```

---

## 4. Boundary concepts unified by this note

This note connects three non-canonical boundary concepts.

| Boundary concept | Transition governed | Core question |
|---|---|---|
| Reliance Boundary Control Loop | external evidence → local reliance | When may a receiving domain rely on external evidence? |
| Agentic AI Responsibility Threshold | AI output → workflow state change | When does AI-supported behavior become consequential action? |
| Consequence Boundary Trigger Matrix | proposed action → new consequence class | When must a proposed action leave the fast path and enter admissibility handling? |

These concepts do not duplicate each other.

They describe different transition problems within the same responsibility architecture.

---

## 5. Shared RABA pattern

All three concepts strengthen the same RABA pattern:

```text
The dangerous moment is not only generation.
The dangerous moment is transition into consequence.
```

In each case, RABA asks:

1. What crossed the boundary?
2. From which state to which state?
3. Who allowed the transition?
4. Under what authority?
5. Based on what evidence?
6. Under which policy or admissibility rule?
7. What consequence class was attached?
8. Who remains accountable?
9. Can the transition be replayed later?
10. Did the transition create a new proof object, event, obligation, or decision record?

---

## 6. Transition types

Candidate transition types include:

```text
evidence_to_claim
claim_to_reliance
reliance_to_decision
ai_output_to_plan
plan_to_tool_use
tool_use_to_state_change
state_change_to_external_effect
proposal_to_consequence_class
preparation_to_execution
recommendation_to_commitment
simulation_to_production
draft_to_send
read_to_write
reversible_to_irreversible
human_feedback_to_authority
```

These are candidate transition labels only.

They are not canonical Responsibility Event Stream schema.

---

## 7. Candidate control flow

A possible non-canonical flow:

```text
Input / Evidence / AI Output / Proposed Action
        ↓
Transition candidate detected
        ↓
Boundary type identified
        ↓
Consequence class checked
        ↓
Authority and admissibility checked
        ↓
Allow / Limit / Block / Escalate
        ↓
Responsibility event recorded
        ↓
Decision Log / Source Log / proof reference linked
        ↓
Replay becomes possible
```

This flow does not define implementation.

It only describes the responsibility shape that a future implementation may need to preserve.

---

## 8. Relation to Reliance Boundary Control Loop

Reliance Boundary Control Loop governs the transition:

```text
external evidence
→ incoming claim
→ local admissibility
→ local reliance decision
→ responsibility and replay
```

Its central issue is not whether evidence exists.

Its central issue is whether the receiving domain is allowed to rely on that evidence for consequential use.

In Consequence Transition terms:

```text
evidence arrival is not the consequence transition.
local reliance is the consequence transition.
```

---

## 9. Relation to Agentic AI Responsibility Threshold

Agentic AI Responsibility Threshold governs the transition:

```text
AI output
→ plan
→ tool use
→ workflow state change
→ consequential action
→ responsibility and replay
```

Its central issue is not whether the system is a technically pure AI agent.

Its central issue is when AI-supported behavior becomes consequence-capable workflow change.

In Consequence Transition terms:

```text
AI generation is not necessarily the consequence transition.
workflow state change may be the consequence transition.
```

---

## 10. Relation to Consequence Boundary Trigger Matrix

Consequence Boundary Trigger Matrix governs detection of transitions where an AI-proposed action crosses into a new consequence class.

Its central issue is not whether every AI step must be checked.

Its central issue is whether a proposed action remains inside authorized autonomy or must enter explicit admissibility handling.

In Consequence Transition terms:

```text
The matrix detects when a transition candidate requires admissibility handling.
```

The AI system may propose or detect boundary signals.

But the final trigger logic must belong to architecture, not to model confidence.

---

## 11. What this layer must not become

This candidate layer must not become:

- a universal slowdown mechanism;
- a control checkpoint for every AI token, thought, or draft;
- a probabilistic self-permission system;
- a replacement for Human Authority Constitution;
- a replacement for Bind-Time Admissibility;
- a replacement for Governance Gateway;
- a new canonical event family without Human Owner approval;
- an excuse to treat multi-AI agreement as approval.

Core rule:

```text
Transition detection may be assisted by AI.
Transition authority must not be delegated to AI confidence.
```

---

## 12. Candidate responsibility record

A future responsibility record for a consequence transition may need to answer:

```yaml
transition_id: "..."
transition_type: "candidate only"
source_state: "..."
target_state: "..."
boundary_type: "reliance | agentic | consequence_class | other"
consequence_class: "..."
authority_basis: "..."
admissibility_basis: "..."
evidence_reference: "..."
policy_reference: "..."
allowed_by: "..."
responsible_owner: "..."
outcome: "allowed | limited | blocked | escalated"
replay_reference: "..."
```

This is illustrative only.

It is not adopted schema.

---

## 13. Decision Log reconstruction role

Decision Log reconstruction should be able to show not merely that an AI output existed, but how it crossed into consequence.

Minimum reconstruction questions:

```text
What was generated, received, proposed, or inferred?
What transition was attempted?
Why was that transition allowed, limited, blocked, or escalated?
Who had authority?
What evidence was linked?
What responsibility event was recorded?
What consequence followed?
Can the decision path be replayed later?
```

The Decision Log should help reconstruct responsibility movement, not only information movement.

---

## 14. Open questions

1. Should RABA eventually define consequence transitions as a formal event family?
2. Should transition detection belong to Responsibility Event Topology, Governance Gateway, or a separate layer?
3. Which transition types are mandatory for a minimal implementation?
4. Which transitions must always trigger Human Owner review?
5. Can AI detect possible transitions without deciding admissibility itself?
6. How should false positives be reduced without weakening responsibility protection?
7. Should consequence transition records link both Source Log and Decision Log entries?
8. What is the smallest demo that can show transition governance without overbuilding RABA?

---

## 15. Governance boundary

This note is:

- a working note;
- non-canonical;
- an integration candidate;
- not accepted RABA architecture;
- not an implementation commitment;
- not a schema change;
- not a canonical event-family definition;
- not approval of a new RABA layer.

No changes are made by this note to:

- `implementation/responsibility-event-stream.md`;
- `responsibility-event-topology.md`;
- `docs/decision-log-schema.md`;
- `templates/ai-role-profile.yaml`.

Canonical adoption requires Human Owner confirmation and a separate decision trail.

---

## Key takeaway

RABA should not only ask whether AI generated an answer, used a tool, or received evidence.

RABA should ask whether something crossed into consequence.

```text
The responsibility problem is not only output control.
The responsibility problem is consequence transition control.
```
