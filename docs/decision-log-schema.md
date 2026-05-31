# RABA Decision Log Schema

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — core schema  
**Core principle:** AI may be probabilistic. Responsibility must not be.  
**Related extension:** [`docs/notes/decision-log-governed-bypass-extension.md`](notes/decision-log-governed-bypass-extension.md)

---

## Purpose

A decision log is the business accountability record for an AI-supported action.

Technical traces can show what happened inside a system: model calls, tool calls, parameters, latency, errors, and outputs.

A RABA decision log answers a different question:

> Who authorized this AI-supported action, under which responsibility state, for what reason, and with what accountable outcome?

The decision log links technical execution to organizational accountability.

For governed bypass handling, see [`Decision Log Governed Bypass Extension`](notes/decision-log-governed-bypass-extension.md).

---

## What a decision log is not

A decision log is not only:

- a model trace;
- an application log;
- a tool-call record;
- a token usage record;
- a chat transcript;
- a system debug log.

These may be linked to the decision log, but they do not replace it.

A decision log is a business-facing record that supports audit, review, accountability, escalation, and incident reconstruction.

---

## Minimal decision log entry

A minimal RABA decision log entry should contain:

```json
{
  "decision_log_id": "dec_001",
  "timestamp": "2026-05-21T14:30:00Z",
  "workflow_id": "wf_customer_email_001",
  "action_id": "act_send_email_001",
  "agent_id": "agent_customer_support",
  "action_type": "send_customer_email",
  "action_boundary": "external_customer_communication",
  "approval_state": "AUTHORIZED",
  "previous_state": "RECOMMEND",
  "risk_level": "medium",
  "human_owner_role": "support_team_lead",
  "authorizer_id": "user_123",
  "authorizer_role": "support_team_lead",
  "decision_reason": "Reviewed and approved standard customer response",
  "policy_reference": "policy_customer_email_v1",
  "technical_trace_id": "trace_789",
  "tool_call_id": "tool_456",
  "external_system": "customer_email_platform",
  "external_reference": "email_draft_998",
  "outcome": "authorized_pending_execution"
}
```

This schema is intentionally minimal. Organizations can extend it based on regulation, domain, security requirements, and audit practices.

---

## Core fields

| Field | Required | Purpose |
|---|---:|---|
| `decision_log_id` | Yes | Unique ID of the business accountability record |
| `timestamp` | Yes | Time when the decision event was recorded |
| `workflow_id` | Yes | Workflow or process where the decision occurred |
| `action_id` | Yes | Specific action being governed |
| `agent_id` | Yes | AI agent, model workflow, or automation involved |
| `action_type` | Yes | Human-readable category of action |
| `action_boundary` | Yes | Boundary crossed or being approached |
| `approval_state` | Yes | Current RABA state |
| `previous_state` | Recommended | Previous RABA state |
| `risk_level` | Recommended | Low, medium, high, critical, or organization-specific equivalent |
| `human_owner_role` | Yes for non-draft actions | Accountable role for the workflow/action |
| `authorizer_id` | Required when authorization is human-based | Human who authorized the transition |
| `authorizer_role` | Required when authorization is role-based | Role that authorized the transition |
| `decision_reason` | Yes for approval, rejection, escalation, override | Human-readable rationale |
| `policy_reference` | Recommended | Policy, rule, or governance condition used |
| `technical_trace_id` | Recommended | Link to technical trace |
| `tool_call_id` | Recommended for tool execution | Link to tool call or function call |
| `external_system` | Recommended for external effects | System affected by action |
| `external_reference` | Recommended after execution | External record, email, ticket, transaction, document, etc. |
| `outcome` | Yes | Result of the decision or action |

---

## Approval-state-specific requirements

### `DRAFT`

Required:

- `decision_log_id`
- `timestamp`
- `workflow_id`
- `action_id`
- `agent_id`
- `action_type`
- `approval_state`

Recommended:

- draft content reference;
- technical trace ID;
- model ID;
- source context reference.

### `RECOMMEND`

Required:

- proposed action;
- action boundary;
- risk level;
- reviewer route or responsible role;
- recommendation reason.

### `AUTHORIZED`

Required:

- authorizer ID or role;
- decision reason;
- approved action parameters;
- policy reference or approval basis;
- timestamp;
- approval scope;
- expiration rule if applicable.

### `EXECUTED`

Required:

- linked authorization record;
- execution timestamp;
- external system;
- external reference;
- execution result;
- technical trace ID.

### `ESCALATE`

Required:

- escalation reason;
- escalation trigger;
- escalation owner role;
- routing timestamp;
- expected response rule;
- resolution status.

---

## Governed bypass extension

Governed bypass is an emerging non-canonical RABA direction.

It should not be treated as part of this core schema until reviewed and accepted by the Human Owner.

For the current working note, see:

- [`docs/notes/decision-log-governed-bypass-extension.md`](notes/decision-log-governed-bypass-extension.md)

The extension explains how a Decision Log may preserve:

- bypass reason;
- allowed bypass actions;
- forbidden bypass actions;
- Human Response Window;
- human response received / delayed / expired;
- bypass exit condition;
- bypass exit decision.

Core boundary:

```text
process continues as preparation
≠
process continues as consequence
```

---

## Extended fields

Organizations may add fields such as:

```json
{
  "model_id": "gpt-5.5-thinking",
  "model_provider": "openai",
  "mcp_server_id": "github_mcp_vendor",
  "mcp_tool_name": "create_issue",
  "input_context_refs": ["ctx_001", "ctx_002"],
  "data_classification": "confidential",
  "customer_id": "cust_123",
  "business_unit": "customer_operations",
  "jurisdiction": "EU",
  "retention_class": "audit_7_years",
  "approval_expires_at": "2026-05-21T15:30:00Z",
  "escalation_owner_id": "user_999",
  "rubber_stamp_risk_score": 0.12,
  "integrity_hash": "sha256:..."
}
```

These fields are not mandatory for all implementations, but they become important in regulated or high-impact environments.

---

## Decision reason requirements

A decision reason should be human-readable and specific enough to support later review.

Weak examples:

```text
Approved.
Looks fine.
OK.
```

Better examples:

```text
Customer response reviewed; no legal or financial claim included; approved for standard support communication.
```

```text
Escalated because payment amount exceeds 5,000 EUR threshold and requires finance manager approval.
```

```text
Rejected because AI-generated draft referenced an unverified policy and included unsupported refund language.
```

Decision reasons help prevent approval from becoming a rubber stamp.

---

## Relationship to technical traces

The decision log should link to technical traces, not duplicate them.

Technical trace may include:

- model inputs and outputs;
- tool calls;
- tool parameters;
- latency;
- errors;
- system-level events;
- token usage.

Decision log should include:

- business action;
- approval state;
- accountable owner;
- authorization record;
- decision reason;
- escalation record;
- outcome;
- audit reference.

A complete audit view needs both.

---

## Relationship to responsibility events

Responsibility events are the stream of state transitions and governance-relevant changes.

A decision log entry can be created from one or more responsibility events.

Example:

```text
ActionRecommended
ApprovalRequested
ApprovalGranted
AuthorizationCreated
DecisionLogged
```

The event stream is operational.  
The decision log is the business accountability record.

Governed bypass-related event chains are described in [`Decision Log Governed Bypass Extension`](notes/decision-log-governed-bypass-extension.md).

---

## Minimal JSON Schema draft

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://raba.dev/schemas/decision-log-entry.schema.json",
  "title": "RABA Decision Log Entry",
  "type": "object",
  "required": [
    "decision_log_id",
    "timestamp",
    "workflow_id",
    "action_id",
    "agent_id",
    "action_type",
    "action_boundary",
    "approval_state",
    "outcome"
  ],
  "properties": {
    "decision_log_id": { "type": "string" },
    "timestamp": { "type": "string", "format": "date-time" },
    "workflow_id": { "type": "string" },
    "action_id": { "type": "string" },
    "agent_id": { "type": "string" },
    "action_type": { "type": "string" },
    "action_boundary": { "type": "string" },
    "approval_state": {
      "type": "string",
      "enum": [
        "DRAFT",
        "RECOMMEND",
        "AUTHORIZED",
        "EXECUTED",
        "ESCALATE",
        "REJECTED",
        "BLOCKED",
        "FAILED",
        "REVOKED",
        "EXPIRED",
        "REAPPROVAL_REQUIRED"
      ]
    },
    "previous_state": { "type": "string" },
    "risk_level": {
      "type": "string",
      "enum": ["low", "medium", "high", "critical"]
    },
    "human_owner_role": { "type": "string" },
    "authorizer_id": { "type": "string" },
    "authorizer_role": { "type": "string" },
    "decision_reason": { "type": "string" },
    "policy_reference": { "type": "string" },
    "technical_trace_id": { "type": "string" },
    "tool_call_id": { "type": "string" },
    "external_system": { "type": "string" },
    "external_reference": { "type": "string" },
    "outcome": { "type": "string" }
  }
}
```

---

## Open questions

- Which fields should be mandatory for regulated environments?
- Should the decision log be immutable or append-only?
- Should decision reasons be required for low-risk approvals?
- How should sensitive content be referenced without storing it directly?
- How should decision logs map to SOC 2, ISO 42001, EU AI Act, or internal audit controls?
- How should organizations detect rubber-stamp approval behavior from decision logs?
- How should governed bypass extension fields be integrated without making the core schema too heavy?

---

## Conclusion

A technical trace can show that an AI-supported action happened.

A decision log shows how that action was governed.

RABA requires both because production AI systems need both operational visibility and organizational accountability.
