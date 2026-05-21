# RABA and the Rubber-Stamp Approval Risk

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — governance failure pattern  
**Core principle:** AI may be probabilistic. Responsibility must not be.

---

## Purpose

Approval-based AI governance has a known failure mode:

> A human is formally asked to approve AI-supported actions, but in practice approves everything without meaningful review.

This is the rubber-stamp approval risk.

If not addressed, the approval layer becomes compliance theater: an apparent human control that does not create real accountability, risk reduction, or decision quality.

This document defines rubber-stamp approval as a RABA governance failure pattern and proposes controls to detect and reduce it.

---

## Why this matters

RABA uses approval states to make AI-supported actions governable.

However, approval states are only meaningful if approval represents a real decision.

A weak approval process can make an organization appear responsible while actually delegating decisions to AI by default.

This is especially dangerous when AI-supported actions involve:

- customer-facing communication;
- legal or financial commitments;
- regulated data;
- payments or transactions;
- HR or employment decisions;
- healthcare or insurance workflows;
- destructive tool execution;
- high-volume operational workflows.

---

## What rubber-stamp approval looks like

Rubber-stamp approval may appear as:

- very short review time before approval;
- repeated approval of high-risk recommendations;
- approval without decision reasons;
- repeated approval by the same person at unusual volume;
- approval outside normal working context;
- escalation overridden without explanation;
- no modification of AI output across many cases;
- approval of actions that later trigger incidents;
- approval after unread or hidden context;
- approval because the interface makes rejection or escalation difficult.

---

## RABA principle

Approval must be treated as a responsibility event, not only as a button click.

A RABA-aligned approval should capture:

- who approved;
- what was approved;
- which state transition was authorized;
- what context was visible;
- which action boundary was crossed;
- why approval was given;
- whether escalation was considered;
- whether approval expires;
- what happened after approval.

---

## Approval state implications

Rubber-stamp risk is most relevant in the transition:

```text
RECOMMEND → AUTHORIZED
```

This transition means that a proposed AI-supported action becomes permitted for execution.

If this transition is weak, then later execution may be technically valid but organizationally hollow.

The key distinction:

```text
Recommendation is not authorization.
Authorization is not execution.
Execution is not accountability unless the decision is recorded.
```

---

## Minimum controls

### 1. Decision reason capture

Approvers should provide a short reason for approvals involving medium, high, or critical risk.

Weak reasons:

```text
OK.
Approved.
Looks fine.
```

Stronger reasons:

```text
Reviewed draft; no refund promise, legal claim or regulated-data issue; approved standard customer response.
```

Decision reasons make approval reviewable.

---

### 2. Review time monitoring

The system should record the time between:

- recommendation shown;
- relevant context opened or reviewed;
- approval granted.

Very short review time is not always invalid, but repeated fast approval can indicate rubber-stamping.

---

### 3. Approval volume monitoring

The system should detect unusually high approval volume by one approver, especially for high-risk actions.

This can indicate:

- overload;
- automation disguised as human approval;
- unclear accountability;
- weak review expectations;
- pressure to approve quickly.

---

### 4. Escalation override review

If an escalation is overridden or downgraded, the reason must be recorded.

The record should include:

- who overrode escalation;
- why escalation was not needed;
- which policy or role allowed the override;
- whether the final action proceeded.

---

### 5. Approval expiration

Authorization should not remain valid forever.

A RABA approval may expire when:

- a time window passes;
- action parameters change;
- tool schema changes;
- risk level changes;
- customer context changes;
- business threshold changes;
- a higher-risk signal appears.

Expired approval should trigger re-approval.

---

### 6. Random audit sampling

A subset of approvals should be reviewed after the fact.

Audit sampling should ask:

- Was the approval reasonable?
- Was the AI output checked?
- Was escalation needed?
- Was the decision reason meaningful?
- Did the final executed action match the approved action?

---

## Responsibility events for rubber-stamp detection

A Responsibility Event Stream can help detect rubber-stamp patterns.

Relevant events include:

```text
ApprovalRequested
ApprovalGranted
ApprovalRejected
ApprovalReasonCaptured
ApprovalGrantedWithoutReason
ApprovalReviewTimeRecorded
ApprovalVolumeThresholdReached
EscalationTriggered
EscalationOverridden
RubberStampRiskDetected
ReapprovalRequired
DecisionLogged
AuditSampleSelected
```

---

## Minimal detection signals

| Signal | Possible interpretation |
|---|---|
| Approval in under a few seconds | Approver may not have reviewed context |
| High approval rate with no rejections | Review may be formal only |
| Repeated approvals without reasons | Accountability record may be weak |
| Frequent escalation overrides | Escalation path may be ineffective |
| Same approver handles all high-risk cases | Concentrated accountability or bottleneck |
| Approval after content changed | Re-approval may be required |
| Executed action differs from approved action | Authorization integrity failure |

These signals should not automatically prove misconduct.

They should trigger review.

---

## Interface implications

A Responsibility Management Interface should not encourage blind approval.

It should show:

- the proposed action;
- risk level;
- action boundary;
- key source context;
- AI confidence or uncertainty indicators where available;
- policy reference;
- escalation option;
- decision reason field;
- approval expiration rule;
- visible accountability notice.

Example accountability notice:

```text
By approving this action, you authorize the workflow to cross the external customer communication boundary. Your approval and decision reason will be recorded in the decision log.
```

---

## Relationship to decision log

The decision log should allow later review of approval quality.

Useful fields include:

- authorizer ID or role;
- decision reason;
- recommendation timestamp;
- approval timestamp;
- review duration;
- context references shown;
- escalation status;
- whether approval was modified, revoked, expired or overridden;
- final execution outcome.

---

## Relationship to pilot workflows

Every RABA pilot should test whether approval is meaningful.

For example, in a customer communication pilot, the retrospective should ask:

- Did reviewers actually change AI drafts?
- Were any drafts rejected?
- Were any cases escalated?
- Were decision reasons useful?
- Did approvals happen too quickly?
- Did the approval layer catch real risk?
- Was the review burden acceptable?

If all AI recommendations are approved quickly with no changes and no reasons, the pilot has discovered a governance weakness.

That discovery is valuable.

---

## Open questions

- What review-time threshold should trigger rubber-stamp risk review?
- Should decision reasons be required for all approvals or only medium/high risk?
- How should organizations balance speed and meaningful review?
- When should repeated approval patterns trigger escalation?
- Can approval quality be measured without creating surveillance pressure on workers?
- Should rubber-stamp risk be visible to approvers in the interface?

---

## Conclusion

Human approval is not automatically human accountability.

For approval to matter, it must be visible, reasoned, recorded and reviewable.

RABA treats approval behavior itself as part of the governance system.

If an organization cannot tell whether approval was meaningful, then it cannot rely on approval as a control.
