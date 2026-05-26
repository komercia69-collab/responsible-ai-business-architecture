# Unbounded Autonomous Pipeline

**Status:** DISCUSSION_DRAFT  
**Canonical status:** Non-canonical  
**Pattern type:** Agentic architecture / action-boundary failure  
**Approval status:** Human Owner review required  

> Multi-agent routing is not governance.  
> Retrieval is not execution.  
> A technically capable pipeline is not automatically a responsible business workflow.

## Short Summary

Unbounded Autonomous Pipeline occurs when an AI or multi-agent workflow routes input through models, tools, sub-agents and response generation without explicit responsibility gates, action boundaries, human confirmation, escalation paths or decision logs.

The architecture may appear to be a Retrieval-Augmented Generation (RAG) system, but if it includes tools such as Mail, Chat, CRM updates, API POST calls or other write-capable actions, it has crossed from information retrieval into operational execution.

## Core Problem

A RAG pipeline can begin as a read-only information system and silently become an action-capable workflow.

The risk appears when a diagram or implementation treats the following as one continuous flow:

```text
Input → Query → Router Agent → Sub-Agent → Tool → LLM → Response / Action
```

without separating:

```text
retrieval / reasoning / recommendation
```

from:

```text
external action / communication / system mutation / commitment
```

## Why This Matters

Multi-agent systems can improve speed, specialization and retrieval quality.

But more agents do not create more responsibility.

A Router Agent delegating work to Agent X, Y or Z does not answer the RABA questions:

- Who owns the business decision?
- Which tools are read-only and which can affect the world?
- Where does recommendation become execution?
- Which action requires fresh human confirmation?
- Who receives escalation?
- Which decision log records the authorization?
- How can the route be reconstructed after an incident?

## Key Symptoms

- The workflow is called RAG, but includes action-capable tools.
- Mail, Chat, CRM, ticketing, payment, order, deployment or API-write tools appear in the same pipeline as retrieval tools.
- The diagram shows continuous flow from input to response without governance gates.
- Router Agent decisions are not logged as responsibility-relevant events.
- Sub-agent tool use is not visible in a business decision record.
- There is no Human Owner for external communication or system mutation.
- A multi-agent consensus or routing result is treated as sufficient authority.
- The system can send, publish, update, delete, commit or trigger external effects without Active Confirmation Interlock.

## Practical Scenario

A multi-agent RAG system receives a business query.

A Retrieval Router Agent delegates the task to specialized sub-agents:

- Agent X searches vector databases;
- Agent Y searches web sources;
- Agent Z accesses Mail and Chat tools.

The system produces a response.

If Agent Z only reads messages, the system remains primarily retrieval-oriented.

If Agent Z can send email, post a chat message, update a ticket or trigger an API action, the workflow becomes action-capable.

At that point, RABA requires an explicit Action Boundary and governance gate.

## Failure Formula

```text
Read-oriented RAG architecture
→ action-capable tools added
→ router delegates to sub-agent
→ sub-agent performs or prepares external action
→ no Human Owner confirmation
→ no Decision Log
→ no route-level responsibility trace
→ autonomous pipeline becomes unbounded
```

## RABA Interpretation

RABA does not reject Agentic RAG or multi-agent architectures.

RABA rejects the absence of responsibility boundaries around action-capable tools.

The correct pattern is not:

```text
Agentic RAG without autonomy
```

The correct pattern is:

```text
Agentic RAG with bounded execution authority
```

## Required Responsibility Controls

### 1. Read / Write Tool Classification

Every tool available to an AI agent should be classified as:

- `read_only` — retrieves or summarizes information;
- `recommendation_only` — drafts or proposes action;
- `action_capable` — can affect external systems, people, records, communications or commitments;
- `high_consequence_action` — can create legal, financial, safety, employment, medical, regulatory or reputational impact.

### 2. Action Boundary Check

Any transition from retrieval to action requires explicit authority validation.

### 3. Active Confirmation Interlock

Action-capable tools should be wrapped by confirmation, escalation or block logic depending on risk.

### 4. Router Trace

Router Agent delegation should be recorded, including:

- router agent id;
- selected sub-agent;
- reason for delegation;
- tool class requested;
- whether a read/write boundary was crossed;
- whether confirmation was required;
- whether the action was blocked, escalated or authorized.

### 5. Decision Log Link

External action should be connected to a business decision log, not only a technical execution trace.

## Candidate Event Fields

```json
{
  "routing_trace": {
    "router_agent_id": "retrieval_router_agent",
    "delegated_to_agent_id": "retrieval_agent_z",
    "delegation_reason": "mail_and_chat_context_required",
    "tool_requested": "mail.send",
    "tool_class": "action_capable",
    "read_write_boundary_crossed": true,
    "requires_active_confirmation": true,
    "decision_log_id": "dec_123"
  }
}
```

## Governance Questions

1. Which tools are read-only and which are action-capable?
2. Does the router have authority to choose an action-capable agent?
3. Can a sub-agent request a write-capable tool without human confirmation?
4. Is the routing path reconstructable after an incident?
5. Is multi-agent agreement ever mistaken for approval?
6. Where is the Human Owner visible in the architecture?
7. Which external actions require fresh confirmation?
8. Which actions must always escalate?

## Possible Controls

- Require tool classification before deployment.
- Deny action-capable tool calls by default.
- Add Governance Gateway before every external action.
- Require Human Owner confirmation for Mail, Chat, API POST, CRM update, ticket closure, payment, deployment or contract-related actions.
- Emit Responsibility Event Stream records for router delegation and sub-agent tool use.
- Add policy rule: retrieval tools may be automated; action tools require authority validation.

## Related RABA Documents

- [`concepts/agent-identity-and-authority.md`](../../concepts/agent-identity-and-authority.md)
- [`implementation/responsibility-event-stream.md`](../../implementation/responsibility-event-stream.md)
- [`docs/governance-gateway-implementation.md`](../governance-gateway-implementation.md)
- [`docs/approval-state-specification.md`](../approval-state-specification.md)
- [`docs/decision-log-schema.md`](../decision-log-schema.md)

## Non-Canonical Status

This is a discussion draft failure pattern.

It documents an architecture risk relevant to Agentic RAG and multi-agent systems, but it does not change canonical RABA architecture until explicitly reviewed and approved by the Human Owner.
