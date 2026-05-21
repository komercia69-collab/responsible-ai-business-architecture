# RABA Governance Gateway — Implementation Pattern

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — implementation pattern  
**Core principle:** AI may be probabilistic. Responsibility must not be.

---

## Purpose

The RABA Governance Gateway is the operational control point between an AI system's proposed action and the execution of that action.

It answers a practical question:

> Before an AI-supported action affects a real business system, who decides whether it may proceed, and what must be recorded?

This document describes a minimal implementation pattern for a governance gateway.

It is not tied to one vendor, model provider, workflow engine, or protocol.

It can be implemented in:

- an AI host application;
- an MCP host layer;
- a tool gateway;
- a workflow engine;
- an agent runtime;
- middleware between model output and tool execution;
- a platform-specific policy layer.

---

## Core role

A governance gateway does not simply allow or block.

It manages state transitions.

The gateway should determine whether an AI-supported action moves to:

```text
DRAFT
RECOMMEND
AUTHORIZED
EXECUTED
ESCALATE
BLOCKED
REAPPROVAL_REQUIRED
```

The gateway should also create or update:

- a decision log entry;
- responsibility events;
- a link to the technical trace;
- escalation records where required;
- authorization records where required.

---

## Minimal gateway flow

```text
1. AI proposes or selects an action
2. Gateway receives action request before execution
3. Gateway classifies action boundary and risk
4. Gateway checks agent authority and policy
5. Gateway determines required approval state
6. Gateway routes action:
   - remain DRAFT
   - move to RECOMMEND
   - request AUTHORIZED state
   - block execution
   - trigger ESCALATE
7. Gateway records decision log / responsibility event
8. Gateway releases or blocks execution
9. Gateway records EXECUTED, FAILED, REVOKED or EXPIRED outcome
```

---

## Minimal input object

A gateway needs enough context to classify and govern the action.

```json
{
  "request_id": "req_001",
  "timestamp": "2026-05-21T14:30:00Z",
  "workflow_id": "wf_customer_email_001",
  "action_id": "act_send_email_001",
  "agent_id": "agent_customer_support",
  "user_id": "user_123",
  "action_type": "send_customer_email",
  "tool_name": "send_email",
  "target_system": "customer_email_platform",
  "proposed_parameters_ref": "params_001",
  "technical_trace_id": "trace_001",
  "context_refs": ["case_123", "policy_customer_email_v1"],
  "current_state": "RECOMMEND"
}
```

---

## Minimal policy object

A simple policy can define the action boundary, required state, and escalation threshold.

```json
{
  "policy_id": "policy_customer_email_v1",
  "action_type": "send_customer_email",
  "action_boundary": "external_customer_communication",
  "default_required_state": "AUTHORIZED",
  "allowed_agent_roles": ["customer_support_assistant"],
  "required_authorizer_role": "support_team_lead",
  "escalation_owner_role": "compliance_officer",
  "escalation_triggers": [
    "legal_claim",
    "refund_above_threshold",
    "regulated_personal_data",
    "high_value_customer",
    "sensitive_complaint"
  ],
  "authorization_expires_after_minutes": 60,
  "decision_reason_required": true,
  "decision_log_required": true,
  "technical_trace_required": true
}
```

---

## Minimal gateway decision

The gateway should return a structured decision.

```json
{
  "gateway_decision_id": "gw_dec_001",
  "request_id": "req_001",
  "timestamp": "2026-05-21T14:31:00Z",
  "decision": "REQUEST_AUTHORIZATION",
  "current_state": "RECOMMEND",
  "next_state": "AUTHORIZED",
  "action_boundary": "external_customer_communication",
  "risk_level": "medium",
  "required_authorizer_role": "support_team_lead",
  "decision_log_required": true,
  "responsibility_events": [
    "ApprovalRequested"
  ],
  "execution_released": false,
  "reason": "External customer communication requires named authorization before sending."
}
```

Possible gateway decisions:

```text
ALLOW_DRAFT
REQUEST_REVIEW
REQUEST_AUTHORIZATION
AUTHORIZE
RELEASE_EXECUTION
BLOCK
ESCALATE
REAPPROVAL_REQUIRED
REVOKE_AUTHORIZATION
MARK_EXECUTED
MARK_FAILED
```

---

## Core gateway checks

### 1. Action boundary check

The gateway identifies what boundary the action approaches or crosses.

Examples:

- internal draft boundary;
- external customer communication boundary;
- system-of-record write boundary;
- destructive action boundary;
- financial execution boundary;
- legal or regulated decision boundary;
- sensitive context boundary.

### 2. Agent authority check

The gateway verifies whether the agent role is permitted to perform or recommend the action.

Questions:

- Is this agent allowed to draft this action?
- Is it allowed to recommend it?
- Is it allowed to execute it automatically?
- Does execution require a human authorizer?
- Is escalation mandatory?

### 3. Approval state check

The gateway validates the requested state transition.

Examples:

```text
DRAFT → RECOMMEND                allowed
RECOMMEND → AUTHORIZED           requires authorizer
AUTHORIZED → EXECUTED            requires valid unexpired authorization
RECOMMEND → EXECUTED             blocked unless explicitly auto-executable
AUTHORIZED → EXECUTED after expiry  blocked / reapproval required
```

### 4. Risk trigger check

The gateway checks whether the action has high-risk trigger conditions.

Examples:

- legal claim;
- refund threshold;
- financial amount threshold;
- destructive tool;
- sensitive data;
- regulated workflow;
- high-value customer;
- tool schema drift;
- untrusted MCP server;
- sampling request involving sensitive context.

### 5. Decision log check

The gateway checks whether a decision log entry is required.

For medium, high or critical actions, RABA recommends a decision log entry before execution.

### 6. Technical trace check

The gateway links the governance decision to the technical trace.

The trace does not replace the decision log.

It supports reconstruction.

---

## Minimal pseudocode

```python
def evaluate_action(request, policy, context):
    boundary = classify_action_boundary(request, policy)
    risk = classify_risk(request, policy, context)

    if not agent_is_allowed(request.agent_id, request.action_type, policy):
        return block("Agent is not allowed to request this action")

    if requires_escalation(request, policy, context):
        return escalate(
            next_state="ESCALATE",
            owner_role=policy["escalation_owner_role"],
            reason="Risk trigger requires escalation"
        )

    if request.current_state == "DRAFT" and should_recommend(request, policy):
        return request_review(next_state="RECOMMEND")

    if request.current_state == "RECOMMEND" and requires_authorization(policy, risk):
        return request_authorization(
            next_state="AUTHORIZED",
            authorizer_role=policy["required_authorizer_role"]
        )

    if request.current_state == "AUTHORIZED":
        if authorization_expired(request):
            return reapproval_required()
        return release_execution(next_state="EXECUTED")

    return block("No valid state transition found")
```

This pseudocode is illustrative. Real implementations must handle authentication, authorization, audit integrity, error states, security controls, and organizational policy.

---

## Relationship to MCP

In MCP-connected workflows, the gateway can sit between:

```text
Model selects tool
        ↓
RABA Governance Gateway
        ↓
MCP client releases or blocks tool call
        ↓
MCP server executes external action
```

The gateway does not need to modify the MCP protocol.

It can operate at the host/runtime layer and decide whether the tool execution request is released, blocked, routed for approval, or escalated.

See also: [`architecture/raba-mcp-governance-layer.md`](../architecture/raba-mcp-governance-layer.md)

---

## Responsibility events emitted by the gateway

The gateway should emit responsibility events such as:

```text
ActionBoundaryReached
ApprovalRequested
ApprovalGranted
AuthorizationCreated
ExecutionReleased
ExecutionStarted
ExecutionCompleted
ExecutionBlocked
EscalationTriggered
EscalationAssigned
AuthorizationExpired
ReapprovalRequired
DecisionLogged
AuditTraceSigned
```

These events can feed:

- Responsibility Management Interface;
- audit service;
- compliance dashboard;
- risk monitoring;
- incident review;
- management reporting.

---

## Decision log integration

For each governed action, the gateway should create or update a decision log entry.

At minimum:

- action ID;
- workflow ID;
- agent ID;
- action type;
- action boundary;
- previous state;
- current state;
- authorizer role or ID;
- decision reason;
- risk level;
- policy reference;
- technical trace ID;
- outcome.

See also: [`docs/decision-log-schema.md`](decision-log-schema.md)

---

## Minimum viable implementation

A minimal credible implementation could include:

1. A JSON policy file.
2. A JSON action request.
3. A gateway decision function.
4. A responsibility event output.
5. A decision log output.
6. Three supported actions:
   - read-only action;
   - customer email send;
   - payment submission above threshold.
7. Five supported states:
   - `DRAFT`
   - `RECOMMEND`
   - `AUTHORIZED`
   - `EXECUTED`
   - `ESCALATE`

This can be implemented as:

- a CLI demo;
- a small Python or TypeScript library;
- middleware in an AI host;
- a mock MCP tool gateway;
- a workflow-engine policy node.

---

## Example: customer email

Input:

```json
{
  "action_type": "send_customer_email",
  "current_state": "RECOMMEND",
  "risk_level": "medium",
  "agent_id": "agent_customer_support",
  "workflow_id": "wf_customer_email_001"
}
```

Gateway output:

```json
{
  "decision": "REQUEST_AUTHORIZATION",
  "next_state": "AUTHORIZED",
  "required_authorizer_role": "support_team_lead",
  "execution_released": false,
  "decision_log_required": true,
  "reason": "Customer-facing communication requires named authorization before sending."
}
```

After human authorization:

```json
{
  "decision": "RELEASE_EXECUTION",
  "previous_state": "AUTHORIZED",
  "next_state": "EXECUTED",
  "execution_released": true,
  "decision_log_required": true,
  "reason": "Authorization valid and execution released."
}
```

---

## Open questions

- Should the gateway be implemented as a host-layer module, tool proxy, workflow node, or standalone service?
- How should policy-as-code be represented?
- Which state transitions should be hard-blocked by default?
- How should authorization expiration be enforced?
- What minimum audit guarantees are required?
- How should gateway decisions be signed or made tamper-evident?
- How should rubber-stamp approval risk be detected in the gateway layer?
- How should the gateway handle multi-agent workflows?

---

## Conclusion

The RABA Governance Gateway is where responsibility becomes operational.

It turns abstract governance principles into state transitions, policy checks, decision logs and responsibility events.

In practical terms:

> The gateway is the point where AI intent becomes governed action — or is stopped before it becomes action.
