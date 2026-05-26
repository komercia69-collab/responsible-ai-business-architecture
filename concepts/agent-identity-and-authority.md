# Agent Identity and Authority

**Status:** DISCUSSION_DRAFT  
**Canonical status:** Non-canonical  
**Approval status:** Human Owner review required  
**RABA layer:** Agent governance / authority boundary  

> Multi-AI agreement is not approval.  
> Agent identity is not legal personhood.  
> Agent permission is not Human Owner authority.

## Purpose

This concept defines how RABA treats AI agents as operational actors with technical identity and scoped permissions, without granting them legal personhood or independent authority.

The goal is to make AI-agent activity traceable and controllable while preserving human and organizational responsibility.

## Core Principle

Agent identity is a technical control.

It is not legal identity.

An AI agent may have:

- a model identifier;
- a provider identifier;
- a workflow role;
- a session identifier;
- a tool permission set;
- an execution token;
- an event stream identity;
- a trace record.

An AI agent does not have:

- legal personhood;
- contractual capacity;
- final approval authority;
- ownership of business decisions;
- authority to expand its own scope;
- authority to convert recommendation into execution without Human Owner approval.

## Non-Human Identity (NHI)

RABA uses the term **Non-Human Identity (NHI)** for technical identities assigned to AI agents, services, bots, automation workers, or tool-executing systems.

NHI is used for:

- authentication;
- authorization;
- traceability;
- least-privilege access;
- accountability mapping;
- incident reconstruction;
- separation of human and non-human actions.

NHI must not be used to imply that the agent carries legal responsibility.

## Zero Trust Requirements

AI agents should be treated as non-human actors operating under Zero Trust assumptions.

Minimum requirements:

1. **Scoped permissions** — the agent can only access tools and data required for the current workflow.
2. **Ephemeral tokens** — access tokens should expire and be bound to a session, workflow or action class.
3. **Least privilege** — no broad repository, infrastructure, financial or communication permissions by default.
4. **Per-action authorization** — consequential actions require explicit approval state and Human Owner confirmation.
5. **No silent privilege expansion** — the agent cannot grant itself new tools, new targets or broader scope.
6. **Traceable execution** — every agent action should be attributable to a model, role, session and workflow.
7. **Revocation path** — the Human Owner or authorized operator must be able to revoke or suspend the agent's permissions.

## Authority Boundary

RABA distinguishes technical permission from authority.

| Concept | Meaning | RABA boundary |
|---|---|---|
| Identity | The system knows which agent acted | Required for traceability |
| Permission | The agent is technically allowed to call a tool | Not equivalent to approval |
| Authority | A human or organization has approved the action | Requires Human Owner / delegated role |
| Execution | The tool or system performs the action | Must be gated by approval state |
| Responsibility | Human/organizational answerability and corrective duty | Cannot be transferred to the agent |

## Contractual Boundary

An AI agent must not be treated as having authority to enter into contracts, commitments, offers, referrals, partnerships or liability arrangements unless a legally valid human or organizational approval process exists.

In RABA terms:

- AI may draft a commercial message;
- AI may recommend a next step;
- AI may summarize negotiation options;
- AI may prepare a contract draft;
- AI may not bind the Human Owner or organization without explicit approval.

For high-consequence commitments, approval should be cryptographic, interface-based, or otherwise strongly attributable to the Human Owner.

## Event Record Fields

A RABA-compatible event record may include:

```json
{
  "ai_agent": {
    "agent_id": "<non-human identity>",
    "model": "<model name>",
    "model_provider": "<provider>",
    "role_in_workflow": "<agent role>",
    "session_id": "<session identifier>",
    "tool_scope": ["<allowed tool/action>"],
    "token_expires_at": "<ISO 8601>",
    "action_authored_by_ai": true,
    "action_initiated_by_human": false,
    "requires_human_confirmation": true
  }
}
```

## Relationship to Responsibility Event Stream

Agent identity fields should support Responsibility Event Stream by showing:

- which AI system proposed the action;
- which AI system produced the artifact;
- which tool or action was requested;
- which human confirmed or blocked it;
- whether scope changed after confirmation;
- whether execution occurred within the permitted boundary.

## Failure Patterns

RABA should treat the following as governance failures:

- agent executes outside declared scope;
- agent uses stale Human Owner confirmation;
- agent obtains broader token than required;
- agent sends external communication without approval;
- agent turns a recommendation into execution;
- agent creates a hidden commitment;
- agent identity is missing from event records;
- agent action cannot be reconstructed after an incident.

## Non-Canonical Status

This document is a DISCUSSION_DRAFT.

It does not change canonical RABA architecture until explicitly reviewed and approved by the Human Owner.
