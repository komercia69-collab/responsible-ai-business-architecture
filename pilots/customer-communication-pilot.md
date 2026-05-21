# RABA Pilot Template — Customer Communication Workflow

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — pilot template  
**Core principle:** AI may be probabilistic. Responsibility must not be.

---

## Purpose

This pilot template helps an organization test RABA on one concrete workflow:

> AI drafts and supports customer-facing communication, but external sending is governed by action boundaries, approval states, escalation paths and decision logs.

The pilot is intentionally narrow.

It is designed to show whether RABA can make an AI-supported workflow more accountable, reviewable and auditable without blocking useful AI adoption.

---

## Recommended pilot domain

This pilot is especially relevant for:

- financial services;
- insurance;
- healthcare operations;
- regulated customer support;
- public-sector service communication;
- legal or compliance-sensitive customer communication;
- high-value B2B customer operations.

The workflow is simple enough to test quickly, but serious enough to show governance value.

---

## Workflow

Scenario:

An AI system drafts customer-facing responses based on a support case, customer history, policy documents and internal knowledge.

The AI may read and draft.

The AI may recommend.

The AI may not send externally unless the action is authorized according to RABA approval states.

---

## Stakeholders

| Role | Responsibility |
|---|---|
| Workflow owner | Owns the customer communication process |
| AI system owner | Owns configuration, model/tool access and technical traceability |
| Human reviewer | Reviews AI-generated drafts and decides whether to approve, modify or reject |
| Escalation owner | Handles sensitive, legal, financial or high-risk cases |
| Compliance / audit reviewer | Reviews decision logs and pilot evidence |
| Customer communication team | Uses the workflow in daily operations |

---

## Action boundaries

| AI-supported activity | Action boundary | RABA state |
|---|---|---|
| Read support case | Internal data access boundary | `DRAFT` |
| Summarize customer history | Context boundary | `DRAFT` |
| Draft customer response | Draft boundary | `DRAFT` |
| Recommend sending response | Recommendation boundary | `RECOMMEND` |
| Send standard response | External communication boundary | `AUTHORIZED` → `EXECUTED` |
| Send response involving refund, legal claim, complaint or sensitive data | High-risk communication boundary | `ESCALATE` |
| Modify customer record based on communication | System-of-record boundary | `RECOMMEND` or `ESCALATE` depending on risk |

---

## Approval state model for the pilot

### `DRAFT`

The AI may:

- read authorized case data;
- summarize internal context;
- draft a proposed response;
- identify possible next actions.

The AI may not:

- send a message;
- update a customer record;
- promise compensation;
- make legal or financial commitments.

### `RECOMMEND`

The AI may recommend:

- sending a response;
- modifying the draft;
- asking for more information;
- escalating the case.

A human reviewer must decide what happens next.

### `AUTHORIZED`

A human reviewer approves a specific action with specific content and parameters.

Authorization must include:

- reviewer identity or role;
- approval timestamp;
- decision reason;
- approved final content;
- approval scope;
- expiration rule where applicable.

### `EXECUTED`

The approved communication is sent.

The execution record must link back to the authorization and technical trace.

### `ESCALATE`

The case is routed to an escalation owner when risk conditions are met.

No external sending occurs until escalation is resolved.

---

## Escalation triggers

Escalation should be triggered when the draft or case includes:

- legal threat or legal claim;
- refund or compensation above threshold;
- medical, financial, HR or regulated personal data;
- high-value customer;
- unresolved complaint;
- reputational risk;
- uncertain policy interpretation;
- AI uncertainty about permitted response;
- customer anger or vulnerability;
- possible discrimination, safety or compliance issue.

---

## Decision log requirement

Every approved, rejected, escalated or executed communication should create a decision log entry.

Minimum fields:

```json
{
  "decision_log_id": "dec_001",
  "timestamp": "2026-05-21T14:30:00Z",
  "workflow_id": "wf_customer_communication_pilot",
  "action_id": "act_send_customer_email_001",
  "agent_id": "agent_customer_support",
  "action_type": "send_customer_email",
  "action_boundary": "external_customer_communication",
  "approval_state": "AUTHORIZED",
  "previous_state": "RECOMMEND",
  "risk_level": "medium",
  "human_owner_role": "support_team_lead",
  "authorizer_id": "user_123",
  "authorizer_role": "support_team_lead",
  "decision_reason": "Reviewed response; no legal, refund or regulated-data issue; approved standard communication.",
  "policy_reference": "policy_customer_communication_v1",
  "technical_trace_id": "trace_789",
  "external_system": "customer_email_platform",
  "external_reference": "email_456",
  "outcome": "authorized_pending_execution"
}
```

---

## Responsibility events to capture

The pilot should capture at least:

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
DecisionLogged
AuditTraceSigned
```

Optional events:

```text
ApprovalExpired
AuthorizationRevoked
ExecutionFailed
RubberStampRiskDetected
PolicyBoundaryReached
ActionBoundaryCrossed
```

---

## Pilot scope

Recommended size:

- 20 to 50 customer communications;
- one team;
- one channel, such as email or support ticket response;
- one defined escalation path;
- one decision log schema;
- one review period.

Recommended duration:

- 2 to 4 weeks.

---

## Pilot success criteria

The pilot should be evaluated by whether it can answer:

- Which AI-generated drafts were approved?
- Which were modified before approval?
- Which were rejected?
- Which were escalated?
- Who approved each sent communication?
- Why was it approved?
- Which communications crossed a high-risk boundary?
- Which cases required escalation?
- Can the organization reconstruct the full accountability chain?
- Did the governance layer catch or improve any risky responses?
- Did approval become a rubber stamp, or was meaningful review visible?

---

## Pilot output

At the end of the pilot, the organization should have:

1. A mapped customer communication workflow.
2. A list of action boundaries.
3. A configured approval-state model.
4. A set of decision log entries.
5. A set of responsibility events.
6. A list of escalated cases and reasons.
7. A review of approval behavior.
8. A short retrospective:
   - what governance caught;
   - what it slowed down;
   - what it clarified;
   - what should be automated;
   - what should remain human-approved.

---

## Example retrospective questions

- Were reviewers able to understand why approval was required?
- Were escalation criteria clear?
- Did decision reasons contain useful information?
- Were high-risk cases detected early enough?
- Was the workflow too slow or appropriately controlled?
- Did the decision log provide enough accountability evidence?
- Which events should become mandatory in future pilots?
- Which approvals could be safely policy-authorized next time?

---

## Relationship to RABA documents

This pilot uses:

- [`docs/approval-state-specification.md`](../docs/approval-state-specification.md)
- [`docs/decision-log-schema.md`](../docs/decision-log-schema.md)
- [`implementation/responsibility-event-stream.md`](../implementation/responsibility-event-stream.md)
- [`concepts/responsibility-management-interface.md`](../concepts/responsibility-management-interface.md)
- [`architecture/responsibility-layer-for-agentic-ai-architecture.md`](../architecture/responsibility-layer-for-agentic-ai-architecture.md)

---

## Conclusion

This pilot is designed to test the core RABA claim in a real workflow:

> AI can help draft and recommend, but external business action must remain governed by clear responsibility.

The goal is not to slow down customer communication.

The goal is to make AI-supported communication faster without making accountability weaker.
