# Agentic AI Responsibility Threshold

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Input type:** External market signal / LinkedIn discussion observation  
**Related directions:** AI Role Profile, Action Boundary, Responsibility Event Stream, Governed Bypass, Human Response Window, Decision Log reconstruction

> This note is not approved architecture.  
> It preserves a market-facing distinction for review: not every LLM-powered workflow is agentic AI, but responsibility concerns increase when AI-supported behavior starts to plan, use tools, update workflow state, coordinate agents, or create consequences.  
> Human Owner confirmation is required before canonical adoption, schema changes, event-family adoption, or implementation commitments.

---

## 1. Core observation

External market discussions often distinguish between:

```text
LLM chatbot → answers
RAG → answers with retrieved sources
RPA → executes predefined workflows
Agentic AI → plans, uses tools, coordinates agents, updates task state, and may continue work across workflow boundaries
```

RABA does not need to define “true AI Agent” technically.

RABA needs to define the responsibility threshold where AI-assisted behavior becomes consequential action.

```text
Agentic risk begins when AI output becomes workflow state change.
```

Russian formulation:

```text
Агентный риск начинается там, где вывод ИИ становится изменением состояния рабочего процесса.
```

---

## 2. RABA framing

For RABA, the key question is not only:

```text
Is this truly Agentic AI?
```

The responsibility question is:

```text
At what point does agentic behavior become consequential, and who remains accountable?
```

The distinction matters because risk often increases when AI moves from producing text to affecting workflow state.

Examples:

```text
answer → recommendation
recommendation → plan
plan → tool call
tool call → record update
record update → commitment / denial / payment / external message
```

---

## 3. Responsibility threshold

The proposed threshold is crossed when AI-supported behavior can:

- create or revise a plan;
- choose or request tool use;
- update task state;
- coordinate another agent or service;
- transfer work across workflow boundaries;
- request human feedback in order to continue;
- prepare or execute an externally visible action;
- create, deny, approve, pay, send, escalate, or commit.

The threshold is not simply technical autonomy.

The threshold is consequence-capable workflow change.

---

## 4. Relation to AI Role Profile

This note may inform a future AI Role Profile extension.

Candidate fields only:

```yaml
ai_mode:
  type: "chatbot | rag | rpa | agentic"
  planning_allowed: true
  tool_use_allowed: true
  workflow_state_update_allowed: true
  multi_agent_coordination_allowed: false
  human_feedback_request_allowed: true
```

These fields are not adopted.

They do not change any existing template.

---

## 5. Relation to Action Boundary

Agentic AI becomes responsibility-relevant when planning or tool use approaches an action boundary.

Candidate formulation:

```text
The action boundary is crossed when agentic planning becomes consequential workflow change.
```

Russian formulation:

```text
Граница действия пересекается тогда, когда агентное планирование становится изменением рабочего процесса с последствиями.
```

---

## 6. Relation to Responsibility Event Stream

Possible responsibility events:

```text
agent_plan_created
tool_use_requested
tool_use_allowed
workflow_state_change_proposed
workflow_state_change_executed
human_feedback_requested
task_handoff_to_agent
agent_boundary_crossed
consequence_attached
```

These are candidate responsibility events only.

They are not canonical Responsibility Event Stream schema.

---

## 7. Relation to Governed Bypass

If an agent cannot execute because authority, admissibility, or responsibility acceptance is missing, the agent may continue preparation.

Examples:

- collect data;
- prepare a plan;
- mark risk;
- request confirmation;
- open a Human Response Window;
- escalate to the responsible owner.

But it must not continue consequence without authority.

```text
Agent may continue preparation.
Agent must not continue consequence without authority.
```

---

## 8. RABA positioning value

This note supports a sharper positioning distinction:

```text
AI Safety asks: can the system avoid harmful behavior?
AI Compliance asks: does the system meet rules?
Agentic AI Architecture asks: can the system plan and act?
RABA asks: when AI-supported action becomes consequential, who remains responsible?
```

This positions RABA as responsibility architecture for AI-supported action, not merely safety, compliance, or agent orchestration.

---

## 9. Open questions

1. Should RABA define an `agentic_ai` mode in AI Role Profile?
2. Should workflow state change become a first-class boundary signal?
3. Should `agent_boundary_crossed` be a candidate event or only a conceptual marker?
4. When does agentic preparation become consequence?
5. How should Human Response Window interact with agent tool-use requests?
6. Can AI detect an agentic responsibility threshold without judging final admissibility itself?
7. Which agentic actions must always be blocked until human authority is confirmed?

---

## 10. Governance boundary

This note is:

- a working note;
- non-canonical;
- based on external market signal / discussion observation;
- not accepted RABA architecture;
- not an implementation commitment;
- not a schema change;
- not a canonical event-family definition.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
