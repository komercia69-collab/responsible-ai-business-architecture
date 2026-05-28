# RABA Governance Gateway ↔ VERITAS Fail-Closed Execution Boundary

**Status:** Working Note  
**Canonical status:** Non-canonical. This note is prepared for external conceptual review and does not define accepted RABA architecture.  
**External review context:** Takeshi Fujishita / VERITAS OS conceptual exchange and review refinement  
**Purpose:** Compare RABA's Governance Gateway with VERITAS OS fail-closed execution boundary at the Level 3 → Level 4 AI-agent transition.  
**Commercial boundary:** No partnership, integration, endorsement, pilot, referral, or commercial commitment is implied by this note.  
**Related RABA concepts:** Governance Gateway, Responsibility Event Stream, Active Evidence Interlock, Human Owner Confirmation, Independent Multi-Role Confirmation, Responsibility Realization Model, Decision Log, Escalation Ownership, Reversibility Profile

## 1. Purpose

This working note compares two related governance framings:

- **RABA Governance Gateway** — a proposed RABA control point that routes AI-assisted or AI-agent actions before execution.
- **VERITAS OS fail-closed execution boundary** — as described and refined by Takeshi Fujishita in conceptual exchange: a bind-time admissibility boundary where an AI-agent action is allowed, blocked, or escalated around execution.

The goal is not to merge the architectures.

The goal is to identify where the approaches overlap, where they may differ, and what each architecture is trying to protect.

## 2. Shared Problem

Both framings address the same critical transition:

```text
AI recommendation / preparation → AI-agent execution
```

This is the Level 3 → Level 4 boundary:

- Level 3: AI recommends, drafts, analyzes, or prepares.
- Level 4: AI begins to execute or trigger actions with real-world or organizational effect.

At this boundary, a simple approval button is not enough.

The system needs governance conditions that determine whether execution should be:

- allowed;
- blocked;
- escalated;
- delayed pending evidence;
- rerouted to a different approval path.

## 3. VERITAS Boundary Conditions

Based on Takeshi's description, the VERITAS OS side currently frames the execution boundary around these conditions:

- the intended action must be clearly defined;
- the required evidence must be present and fresh enough;
- the risk level must be evaluated before execution;
- the correct human approval path must be determined;
- high-risk or unclear cases should fail closed or escalate;
- the decision and reasoning must be recorded for later audit and replay.

In this framing, the execution boundary is not simply an approval button.

It is a governance checkpoint that decides whether the action should be allowed, blocked, or escalated around execution.

## 4. VERITAS Refinement from Takeshi Review

Takeshi refined the VERITAS side in three important ways.

### 4.1 Bind-Time Admissibility Boundary

VERITAS should not be understood only as a pre-execution gate.

A more precise formulation is:

> VERITAS treats the execution boundary as a bind-time admissibility boundary.

This shifts the key question from:

> Was approval given?

To:

> Why was this action admissible at the moment it was allowed to proceed?

This means the boundary is not only about checking before execution.

It is about showing why the action was admissible at the moment the system bound the action to execution permission.

### 4.2 Approval as One Part of Admissibility

Human approval is important, but in the VERITAS framing it is only one part of admissibility.

Approval should be supported by:

- evidence state;
- authority conditions;
- risk context;
- policy constraints.

This is closely aligned with RABA's concern that Human Owner confirmation must not become a standalone rubber stamp.

### 4.3 Replayable Governance Record

VERITAS also emphasizes what remains after the decision.

The execution boundary should produce or preserve a replayable governance record that can support later:

- audit;
- review;
- accountability;
- explanation.

This connects the boundary not only to prevention before execution, but also to accountability after the decision.

## 5. RABA Equivalent Mechanisms

RABA approaches the same boundary through several related mechanisms:

- **Action Boundary / Target Action** — the system must know what action is being considered.
- **Active Evidence Interlock** — evidence should be available, relevant, and engaged with where required.
- **Evidence Freshness** — prior evidence or confirmation may become stale when scope or context changes.
- **Risk Class** — actions should be classified by risk before execution.
- **Human Owner Confirmation** — responsibility must remain with a human or defined organizational role.
- **Independent Multi-Role Confirmation** — critical actions may require confirmation by independent roles.
- **Governance Gateway** — routes the action to allow, block, or escalate.
- **Responsibility Event Stream** — records responsibility-relevant events across the workflow.
- **Decision Log** — records decision rationale, scope, approval state, and limitations.
- **Reversibility Profile** — captures whether consequences can be reversed or rolled back.

## 6. Refined Comparison

Takeshi's review suggests this refined distinction:

| Framing | Primary emphasis |
|---|---|
| RABA Governance Gateway | Operational responsibility checkpoint before execution |
| VERITAS Fail-Closed Execution Boundary | Admissibility, evidence, authority, and replay record around execution |

This is not a disagreement.

It is a clarification of emphasis.

RABA asks how responsibility is preserved, routed, confirmed, recorded, or escalated as AI approaches action.

VERITAS asks why the action was admissible at the moment it was allowed to proceed, and what governance record remains for audit and replay.

## 7. Conceptual Mapping

| VERITAS OS boundary condition | RABA equivalent mechanism |
|---|---|
| Intended action clearly defined | Action Boundary / Target Action |
| Evidence present and fresh enough | Active Evidence Interlock / Evidence Freshness |
| Risk evaluated before execution | Risk Class / Governance Gateway Routing |
| Correct human approval path determined | Human Owner Confirmation / Independent Multi-Role Confirmation |
| Approval supported by evidence, authority, risk, and policy | Human Owner Confirmation + Governance Gateway conditions |
| High-risk or unclear cases fail closed or escalate | Governance Gateway: Block / Escalate |
| Bind-time admissibility shown at execution permission | Governance Gateway decision + Responsibility Event Stream |
| Decision and reasoning recorded for audit and replay | Responsibility Event Stream / Decision Log |
| Replayable governance record after decision | Responsibility Event Stream / Decision Log / Audit record |

## 8. Shared Protection Goals

Both approaches appear to protect against:

- AI-agent execution without clear action scope;
- execution based on stale or missing evidence;
- unclear human approval responsibility;
- human approval treated as sufficient without evidence, authority, risk, or policy support;
- high-risk actions proceeding by default;
- hidden operational drift between recommendation and execution;
- weak auditability after the fact;
- treating approval as a single button rather than a governance checkpoint;
- losing the explanation of why an action was allowed to proceed.

## 9. Potential Differences to Explore

This note does not assume that RABA and VERITAS OS use the same architecture.

Potential differences worth clarifying:

1. **Primary object of control**  
   Does the system control individual actions, workflow states, agent permissions, or deployment boundaries?

2. **Evidence model**  
   What counts as sufficient evidence, and how is freshness measured?

3. **Approval path logic**  
   How is the correct human approval path selected?

4. **Fail-closed behavior**  
   What exactly happens when the system cannot determine whether execution is safe or admissible?

5. **Admissibility model**  
   What conditions must be true for an action to be admissible at bind-time?

6. **Replayability**  
   What is replayed later: event trace, decision reasoning, evidence state, policy checks, or full agent workflow?

7. **Human responsibility boundary**  
   How does the system distinguish what the trace proves from what remains human responsibility?

8. **Role independence**  
   Are multi-person approvals checked for independence, or only counted as multiple approvals?

9. **Reversibility**  
   Is rollback or reversibility part of the execution boundary decision?

## 10. RABA View of the Boundary

From the RABA side, an AI-agent action should not proceed toward execution unless the Governance Gateway can answer at least these questions:

- What is the intended action?
- Has the action scope changed?
- What evidence supports the action?
- Is the evidence fresh enough?
- What risk class applies?
- Who is the Human Owner?
- Is single confirmation sufficient?
- Is independent multi-role confirmation required?
- Is there a known escalation owner?
- Is the action reversible?
- What does the trace prove?
- What does the trace not prove?

If these conditions are unclear, RABA should prefer block or escalate over silent execution.

## 11. VERITAS View of the Boundary

Based on Takeshi's refinement, VERITAS can be represented as asking:

- Was the intended action clearly defined?
- Was the required evidence present and fresh enough?
- Was the risk evaluated before execution?
- Were authority conditions satisfied?
- Were policy constraints satisfied?
- Was the correct approval path determined?
- Should the case fail closed or escalate?
- Why was the action admissible at the moment it was allowed to proceed?
- What replayable governance record remains after the decision?

This view emphasizes admissibility around execution and the record that remains after the action decision.

## 12. Example Boundary Decision

A simplified RABA-style decision could look like this:

```json
{
  "boundary_check": "governance_gateway",
  "target_action_defined": true,
  "evidence_present": true,
  "evidence_freshness": "fresh",
  "risk_class": "high",
  "approval_path": "human_owner_plus_independent_reviewer",
  "reversibility_profile": "partially_reversible",
  "gateway_decision": "escalate",
  "reason": "High-risk action requires independent multi-role confirmation before execution.",
  "audit_record_required": true,
  "human_responsibility_remains": [
    "final approval authority",
    "scope validation",
    "risk acceptance"
  ]
}
```

A simplified VERITAS-style interpretation of the same boundary might emphasize:

```json
{
  "boundary_check": "bind_time_admissibility",
  "action_defined": true,
  "evidence_state": "present_and_fresh_enough",
  "risk_evaluated": true,
  "authority_conditions": "satisfied",
  "policy_constraints": "satisfied",
  "approval_path": "determined",
  "boundary_decision": "escalate",
  "admissibility_reason": "Action is not yet admissible for execution because high-risk approval conditions are incomplete.",
  "replay_record_required": true,
  "post_decision_record_supports": [
    "audit",
    "review",
    "accountability",
    "explanation"
  ]
}
```

## 13. What This Note Does Not Claim

This note does not claim that:

- RABA and VERITAS OS are the same architecture;
- either architecture endorses the other;
- a partnership or integration exists;
- RABA has adopted VERITAS OS concepts;
- VERITAS OS has adopted RABA concepts;
- this comparison is technically complete;
- this note is legal, compliance, security, or implementation advice.

## 14. Questions for Takeshi / External Review

1. Does this mapping fairly represent the overlap between RABA and VERITAS OS at the execution boundary?
2. Is `bind-time admissibility boundary` the most accurate phrase for the VERITAS side?
3. What does VERITAS OS treat as the primary unit: action, agent, workflow, deployment, or decision?
4. How does VERITAS determine whether evidence is fresh enough?
5. How is the correct human approval path selected?
6. What should happen when evidence is missing but the business pressure to proceed is high?
7. Does VERITAS distinguish between audit replay and responsibility assignment?
8. How does VERITAS handle cases where multiple human approvals are not independent?
9. Does reversibility affect the fail-closed decision?
10. What part of the boundary should remain human judgment rather than machine-readable control?
11. Does the refined distinction between `operational responsibility checkpoint` and `bind-time admissibility boundary` fairly represent the difference in emphasis?

## 15. Governance Boundary

Multi-AI agreement is not approval.

External comparison is not adoption.

Conceptual overlap is not partnership.

Fail-closed gating is not a substitute for human responsibility.

Bind-time admissibility is not a substitute for human responsibility.

Final architectural approval belongs to the Human Owner.

## Key Takeaway

Both RABA and VERITAS OS appear to focus on the same critical problem:

> Before AI agents move from recommendation toward execution, the system must verify action clarity, evidence, risk, authority, approval path, escalation conditions, and auditability.

For RABA, this is framed primarily as the role of the Governance Gateway: an operational responsibility checkpoint before execution.

For VERITAS OS, this is framed more precisely as a fail-closed, bind-time admissibility boundary around execution, with a replayable governance record after the decision.

This note is a conceptual comparison prepared for external review, not an adoption decision.
