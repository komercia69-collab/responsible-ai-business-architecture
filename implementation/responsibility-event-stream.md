# Responsibility Event Stream

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — implementation direction  
**Related concepts:** Responsibility Management Interface, Responsibility Layer for Agentic AI Architecture, Approval State Specification, Decision Log Schema

---

## Purpose

RABA defines how responsibility should be structured in AI-supported workflows: action boundaries, approval states, escalation ownership, human accountability, decision logs, and auditability.

To become practical, these responsibility concepts need an implementation path.

One possible direction is a **Responsibility Event Stream**: an event-driven architecture where every relevant responsibility transition in an AI workflow is captured as a structured event.

The goal is to make responsibility not only documented, but technically observable, queryable, auditable, and integrable with enterprise systems.

---

## Core idea

AI workflows should not only produce technical traces.

They should also produce responsibility events.

Examples:

```text
ActionDrafted
ActionRecommended
ApprovalRequested
ApprovalGranted
ApprovalRejected
AuthorizationCreated
ExecutionStarted
ExecutionCompleted
EscalationTriggered
EscalationAssigned
EscalationResolved
HumanOwnerAssigned
DecisionLogged
AuditTraceSigned
PolicyBoundaryReached
ActionBoundaryCrossed
AuthorizationRevoked
AuthorizationExpired
ReapprovalRequired
```

These events can form a reliable stream of accountability across AI systems, workflow engines, approval interfaces, compliance tools, and audit storage.

---

## Why event-driven responsibility matters

Many AI governance frameworks define policies, principles, and review procedures. But in production systems, responsibility needs to be captured at the moment the workflow changes state.

For example:

- when AI moves from draft to recommendation;
- when a recommendation requests approval;
- when a human approves execution;
- when a workflow crosses an action boundary;
- when a case escalates to a responsible owner;
- when an external action is executed;
- when the business decision log is created;
- when an audit trace is signed.

If these transitions are represented as structured events, they can be reviewed, monitored, stored, and connected to business systems.

---

## Relationship to event streaming platforms

The Responsibility Event Stream is technology-agnostic.

It could be implemented using platforms such as Apache Kafka, cloud-native event buses, message queues, workflow engines, or audit-log infrastructures.

The important architectural point is not the specific technology.

The important point is that responsibility-relevant workflow transitions become structured events with stable schemas and clear ownership.

---

## Kafka-style analogy

Apache Kafka and similar systems provide useful implementation concepts for RABA.

| Event streaming concept | RABA interpretation |
|---|---|
| Topic | A stream of responsibility events, e.g. `ai-responsibility-events` |
| Partition | Separation by workflow, project, tenant, customer, risk level, or business domain |
| Offset | The exact position of an event in the responsibility history |
| Producer | AI workflow runtime, approval interface, policy engine, or tool gateway emitting responsibility events |
| Consumer | Audit service, compliance dashboard, risk monitor, management reporting, incident review process |
| Consumer group | Multiple organizational functions reading the same responsibility stream for different purposes |
| Retention | How long responsibility and audit events are preserved |
| Schema Registry | Stable event definitions for approval, escalation, execution, and decision logging |
| Connector | Integration with CRM, ERP, ticketing, document management, audit storage, or data warehouse systems |

This analogy helps translate RABA from governance architecture into an enterprise implementation pattern.

---

## Example event flow

Scenario: AI prepares and sends a customer email.

```text
1. ActionDrafted
2. ActionRecommended
3. ApprovalRequested
4. ApprovalGranted
5. AuthorizationCreated
6. ExecutionStarted
7. ExecutionCompleted
8. DecisionLogged
9. AuditTraceSigned
```

If the workflow detects legal, financial, or reputational risk, the flow changes:

```text
1. ActionDrafted
2. ActionRecommended
3. PolicyBoundaryReached
4. EscalationTriggered
5. EscalationAssigned
6. EscalationResolved
7. ApprovalGranted or ApprovalRejected
8. DecisionLogged
9. AuditTraceSigned
```

The responsibility event stream makes this sequence reconstructable later.

---

## Minimal event envelope

All responsibility events should share a common envelope.

```json
{
  "event_id": "evt_123",
  "event_type": "ApprovalGranted",
  "timestamp": "2026-05-21T14:30:00Z",
  "schema_version": "0.1",
  "workflow_id": "wf_456",
  "action_id": "act_789",
  "agent_id": "agent_customer_support",
  "current_state": "AUTHORIZED",
  "previous_state": "RECOMMEND",
  "action_boundary": "external_customer_communication",
  "risk_level": "medium",
  "human_owner_role": "support_team_lead",
  "decision_log_id": "dec_456",
  "technical_trace_id": "trace_789",
  "policy_reference": "policy_customer_email_v1"
}
```

The exact schema can vary by organization, but the link between technical trace, business decision log, and human accountability should remain explicit.

---

## Minimal event schemas

This section defines three initial event schemas that make the Responsibility Event Stream implementable.

### 1. `ActionDrafted`

Emitted when an AI system creates a draft or identifies a possible action before any external effect occurs.

```json
{
  "event_id": "evt_action_drafted_001",
  "event_type": "ActionDrafted",
  "timestamp": "2026-05-21T14:00:00Z",
  "schema_version": "0.1",
  "workflow_id": "wf_customer_email_001",
  "action_id": "act_send_email_001",
  "agent_id": "agent_customer_support",
  "current_state": "DRAFT",
  "previous_state": null,
  "action_type": "send_customer_email",
  "action_boundary": "external_customer_communication",
  "risk_level": "medium",
  "draft_reference": "draft_001",
  "input_context_refs": ["case_123", "policy_refund_v2"],
  "technical_trace_id": "trace_001"
}
```

Minimum required fields:

- `event_id`
- `event_type`
- `timestamp`
- `workflow_id`
- `action_id`
- `agent_id`
- `current_state`
- `action_type`
- `action_boundary`

---

### 2. `ApprovalGranted`

Emitted when a human role, accountable owner, or approved policy grants authorization for an action to proceed.

```json
{
  "event_id": "evt_approval_granted_001",
  "event_type": "ApprovalGranted",
  "timestamp": "2026-05-21T14:05:00Z",
  "schema_version": "0.1",
  "workflow_id": "wf_customer_email_001",
  "action_id": "act_send_email_001",
  "agent_id": "agent_customer_support",
  "previous_state": "RECOMMEND",
  "current_state": "AUTHORIZED",
  "action_type": "send_customer_email",
  "action_boundary": "external_customer_communication",
  "risk_level": "medium",
  "human_owner_role": "support_team_lead",
  "authorizer_id": "user_123",
  "authorizer_role": "support_team_lead",
  "decision_reason": "Reviewed draft; no legal or financial claim included; approved standard support response.",
  "policy_reference": "policy_customer_email_v1",
  "approval_scope": "single_action",
  "approval_expires_at": "2026-05-21T15:05:00Z",
  "decision_log_id": "dec_001",
  "technical_trace_id": "trace_001"
}
```

Minimum required fields:

- `event_id`
- `event_type`
- `timestamp`
- `workflow_id`
- `action_id`
- `previous_state`
- `current_state`
- `authorizer_id` or `authorizer_role`
- `decision_reason`
- `decision_log_id`

---

### 3. `EscalationTriggered`

Emitted when an action exceeds permitted authority or risk threshold and must be routed to an elevated owner.

```json
{
  "event_id": "evt_escalation_triggered_001",
  "event_type": "EscalationTriggered",
  "timestamp": "2026-05-21T14:03:00Z",
  "schema_version": "0.1",
  "workflow_id": "wf_customer_email_001",
  "action_id": "act_send_email_001",
  "agent_id": "agent_customer_support",
  "previous_state": "RECOMMEND",
  "current_state": "ESCALATE",
  "action_type": "send_customer_email",
  "action_boundary": "external_customer_communication",
  "risk_level": "high",
  "escalation_reason": "Customer dispute mentions legal claim and refund request above support threshold.",
  "escalation_trigger": "legal_or_financial_risk",
  "escalation_owner_role": "compliance_officer",
  "expected_response_by": "2026-05-21T16:00:00Z",
  "policy_reference": "policy_sensitive_customer_communication_v1",
  "decision_log_id": "dec_002",
  "technical_trace_id": "trace_002"
}
```

Minimum required fields:

- `event_id`
- `event_type`
- `timestamp`
- `workflow_id`
- `action_id`
- `previous_state`
- `current_state`
- `escalation_reason`
- `escalation_owner_role`
- `decision_log_id`

---

## Possible consumers of responsibility events

A Responsibility Event Stream can support several operational consumers:

- **Responsibility Management Interface** — shows current state, owner, approval status, escalation path, and decision history.
- **Audit service** — stores immutable or tamper-evident records.
- **Compliance dashboard** — monitors approval patterns, escalation rates, and policy boundary crossings.
- **Risk monitoring** — detects unusual execution volume, repeated approvals, or high-risk workflows.
- **Incident review** — reconstructs who approved what, when, why, and under which policy.
- **Management reporting** — shows how AI-supported operations are governed across teams and business units.

---

## Rubber-stamp approval risk

A responsibility stream also helps detect weak governance patterns.

For example, if a human approver repeatedly approves AI recommendations without meaningful review, the approval process may become a rubber stamp.

The event stream can make this visible through patterns such as:

- very short review time before approval;
- unusually high approval volume by one approver;
- repeated approval of high-risk actions;
- approvals without decision reasons;
- escalations overridden without explanation;
- execution authorized outside normal thresholds.

This turns approval behavior itself into an auditable part of the responsibility system.

---

## Relationship to Responsibility Observability

Responsibility observability asks not only what happened technically, but who was responsible and how the action was governed.

A Responsibility Event Stream provides the data foundation for responsibility observability.

It allows an organization to answer:

- Which AI actions crossed action boundaries?
- Which actions required approval?
- Who approved them?
- Which cases escalated?
- Who received the escalation?
- Was the business decision logged?
- Is the technical trace linked to human accountability?
- Are approval patterns healthy or merely formal?

---

## Relationship to RABA documents

This implementation direction complements:

- [`docs/approval-state-specification.md`](../docs/approval-state-specification.md)
- [`docs/decision-log-schema.md`](../docs/decision-log-schema.md)
- [`concepts/responsibility-management-interface.md`](../concepts/responsibility-management-interface.md)
- [`architecture/responsibility-layer-for-agentic-ai-architecture.md`](../architecture/responsibility-layer-for-agentic-ai-architecture.md)

The Responsibility Management Interface makes responsibility visible to humans.

The Responsibility Event Stream provides the underlying event architecture that can feed such an interface and support auditability.

---

## Open questions

- What is the minimum useful set of responsibility event types?
- Which events must be immutable?
- Which events require human-readable decision reasons?
- How should technical trace IDs be linked to business decision log IDs?
- How long should responsibility events be retained?
- How should sensitive data be minimized while preserving auditability?
- How should organizations detect rubber-stamp approval behavior?
- Which events should trigger real-time alerts?
- How should responsibility event schemas differ by risk level or domain?

---

## Conclusion

RABA should not remain only a governance framework expressed in documents.

It needs implementation directions that show how responsibility can become operational infrastructure.

A Responsibility Event Stream is one such direction.

It translates RABA concepts into structured events that can be produced, consumed, stored, monitored, and audited.

In practical terms:

> If AI workflows are event-driven, responsibility should be event-driven too.

This makes human accountability visible not only after an incident, but during the life of the workflow itself.
