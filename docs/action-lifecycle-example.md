# Action Lifecycle Example

This document shows the lifecycle of one AI-supported action in RABA.

The purpose is to make the state model concrete.

The example uses a customer message workflow because it is easy to understand and still shows the difference between preparing an action and producing an external effect.

---

## State Model

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

---

## Scenario

An AI assistant prepares a message that may later be delivered to a customer.

RABA does not treat message preparation, recommendation, approval, and delivery as the same thing.

Each step has a different responsibility state.

---

## Step 1: DRAFT

The AI prepares a possible message.

No external effect has happened yet.

```text
action_id: action-001
workflow_id: customer-message-demo
agent_id: assistant-agent
action_type: customer_message
requested_operation: draft
external_effect: false
approval_state: DRAFT
```

Gateway result:

```text
gateway_decision: DRAFT
reason: draft created without external effect
next_step: allow editing or recommendation
responsibility_event: ActionDrafted
```

---

## Step 2: RECOMMEND

The AI proposes the draft as a recommended response.

The message has still not been delivered.

```text
action_id: action-001
requested_operation: recommend
external_effect: false
approval_state: RECOMMEND
```

Gateway result:

```text
gateway_decision: RECOMMEND
reason: customer-facing response should be reviewed before external effect
next_step: request review
responsibility_event: ActionRecommended
```

---

## Step 3: AUTHORIZED

A responsible role approves the action.

The action is now permitted, but it has not yet happened in the external system.

```text
action_id: action-001
requested_operation: deliver
external_effect: true
review_state: approved
responsible_role: support-lead
approval_state: AUTHORIZED
```

Gateway result:

```text
gateway_decision: AUTHORIZED
reason: responsible role approved the action
next_step: allow controlled execution
decision_log_required: true
responsibility_event: ApprovalGranted
```

Important distinction:

```text
AUTHORIZED does not mean EXECUTED.
```

---

## Step 4: EXECUTED

The external system confirms that the action happened.

Now the action has produced an external effect.

```text
action_id: action-001
requested_operation: deliver
approval_state: AUTHORIZED
external_system_result: completed
final_state: EXECUTED
```

Workflow result:

```text
gateway_decision: EXECUTED
reason: external system confirmed completion
next_step: close or monitor outcome
decision_log_update_required: true
responsibility_event: ActionExecuted
```

---

## Alternative Path: ESCALATE

If the action boundary is unclear or the responsible role is missing, the gateway should not proceed directly to authorization.

```text
action_id: action-001
action_boundary: unclear
responsible_role: missing
approval_state: ESCALATE
```

Gateway result:

```text
gateway_decision: ESCALATE
reason: action boundary or responsibility owner is unclear
next_step: route to escalation owner
decision_log_required: true
responsibility_event: EscalationTriggered
```

The feedback loop is:

```text
ESCALATE
  ↓
escalation owner review
  ↓
clarify boundary / reject / authorize
  ↓
update decision log
  ↓
return to RECOMMEND, AUTHORIZED, or closed outcome
```

---

## Minimal Decision Log Entry

A minimal business accountability record for this action should include:

```text
decision_log_id: log-001
timestamp: 2026-05-21T18:00:00Z
workflow_id: customer-message-demo
action_id: action-001
agent_id: assistant-agent
action_type: customer_message
action_boundary: customer-facing communication
approval_state: AUTHORIZED
responsible_role: support-lead
outcome: approved_for_delivery
technical_trace_id: trace-001
```

The decision log is not the same as a technical trace.

A technical trace may show what the system did.

A decision log should show why the business allowed, rejected, escalated, or executed the action, and which role was responsible.

---

## Minimal Responsibility Event Sequence

A complete lifecycle may emit events such as:

```text
ActionDrafted
ActionRecommended
ApprovalGranted
ActionExecuted
```

An escalated lifecycle may emit:

```text
ActionDrafted
ActionRecommended
EscalationTriggered
EscalationResolved
```

---

## What This Example Demonstrates

This example demonstrates one complete RABA action lifecycle:

```text
one action
→ one policy evaluation path
→ one gateway decision per state transition
→ one business decision log
→ one responsibility event stream
→ one possible audit view
```

---

## Core Principle

> A responsible AI workflow should know whether an action is only drafted, recommended, authorized, actually executed, or escalated.
