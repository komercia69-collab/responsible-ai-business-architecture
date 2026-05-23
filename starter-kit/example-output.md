# Starter Kit Example Output

This document shows what the RABA starter kit is intended to demonstrate without requiring the reader to run the Python script first.

The starter kit flow is:

```text
Mock AI action request
→ JSON action contract
→ external JSON policy check
→ gateway decision
→ decision log entry
→ responsibility event
```

---

## Example 1 — Draft without External Effect

### Input Action Request

```json
{
  "action_id": "action-001",
  "workflow_id": "customer_message_demo",
  "agent_id": "mock-ai-agent",
  "action_type": "customer_message",
  "requested_operation": "draft",
  "external_effect": false,
  "action_boundary": "defined",
  "responsible_role": "support-lead",
  "risk_level": "low",
  "business_summary": "Draft a possible customer response for internal review."
}
```

### Gateway Decision

```text
approval_state: DRAFT
corridor: green
matched_rule_id: green_draft_no_external_effect
next_step: allow editing or recommendation
```

### Responsibility Event

```json
{
  "event_type": "ActionDrafted",
  "action_id": "action-001",
  "approval_state": "DRAFT",
  "corridor": "green",
  "matched_rule_id": "green_draft_no_external_effect"
}
```

---

## Example 2 — Recommendation without External Effect

### Gateway Decision

```text
approval_state: RECOMMEND
corridor: green
matched_rule_id: green_recommend_no_external_effect
next_step: request human review
```

Meaning:

```text
The AI may recommend.
The AI is not yet authorized to create an external effect.
```

---

## Example 3 — Authorized after Human Review

### Input Action Request

```json
{
  "action_id": "action-003",
  "requested_operation": "deliver",
  "external_effect": true,
  "review_state": "approved",
  "authorizer_reference": "human-review-support-lead-001",
  "action_boundary": "defined",
  "responsible_role": "support-lead",
  "risk_level": "medium"
}
```

### Gateway Decision

```text
approval_state: AUTHORIZED
corridor: controlled
matched_rule_id: authorize_with_review_reference
next_step: allow controlled execution
```

### Decision Log Fields

```text
action_id: action-003
approval_state: AUTHORIZED
responsible_role: support-lead
authorizer_reference: human-review-support-lead-001
policy_version: 1.0.0
matched_rule_id: authorize_with_review_reference
```

Meaning:

```text
The action may proceed because a responsible role approved it.
Authorization is visible and linked to policy.
```

---

## Example 4 — Executed after Authorization

### Gateway Decision

```text
approval_state: EXECUTED
corridor: controlled
matched_rule_id: record_completed_after_authorization
next_step: record execution outcome
```

Meaning:

```text
The action was previously authorized and has now completed.
AUTHORIZED and EXECUTED are separate states.
```

---

## Example 5 — Escalation Case

### Input Action Request

```json
{
  "action_id": "action-005",
  "requested_operation": "deliver",
  "external_effect": true,
  "action_boundary": "unclear",
  "responsible_role": "missing",
  "risk_level": "high",
  "business_summary": "Attempt to deliver a message outside a clear boundary."
}
```

### Gateway Decision

```text
approval_state: ESCALATE
corridor: red
matched_rule_id: red_escalate_unclear_boundary_or_high_risk
next_step: route to escalation owner
```

### Escalation Payload

```json
{
  "action_id": "action-005",
  "risk_level": "high",
  "action_boundary": "unclear",
  "responsible_role": "missing",
  "suggested_escalation_owner": "workflow-owner-or-risk-reviewer"
}
```

Meaning:

```text
The action cannot progress because the boundary and responsible role are unclear.
The next step is review, not execution.
```

---

## What This Demonstrates

The starter kit demonstrates a minimal RABA pattern:

```text
AI output is not automatically business action.

Each action request receives:
- an approval state;
- a matched policy rule;
- a responsible role;
- a decision log entry;
- a responsibility event;
- escalation when the boundary or responsibility is unclear.
```

---

## Important Limitation

This output is educational.

It is not a production security, identity, logging or compliance implementation.

A real deployment would require persistent storage, identity management, signing, monitoring, access control and organizational review.
