# DecisionAssure Trace Fields ↔ RABA Responsibility Event Stream

**Status:** DISCUSSION_DRAFT  
**Canonical status:** Non-canonical  
**Source type:** External trace field mapping  
**Approval status:** Human Owner review required  

> Multi-AI agreement is not approval.  
> External trace compatibility is not adoption.  
> Field mapping is not schema acceptance.  
> Final architectural approval belongs to the Human Owner.

## Purpose

This document maps reported DecisionAssure trace fields from an external RABA trace example to possible RABA Responsibility Event Stream concepts.

The goal is to evaluate compatibility and learning value.

This mapping does not make DecisionAssure a required RABA component and does not adopt DecisionAssure field names as canonical RABA schema.

## Source

Related external review input:

- [`docs/reviews/decisionassure-raba-trace-example.md`](../reviews/decisionassure-raba-trace-example.md)

Related RABA implementation document:

- [`implementation/responsibility-event-stream.md`](../../implementation/responsibility-event-stream.md)

## Mapping Table

| DecisionAssure field / concept | Reported meaning | Possible RABA equivalent | Mapping status | Notes |
|---|---|---|---|---|
| `step` | Current trace phase, for example `commit_attempt` | `event_type`, `current_state`, `action_type` | Partial | RABA should distinguish event type from state and action. |
| `confirmation_freshness` | Whether confirmation is still valid after scope changes | `confirmation_freshness`, `approval_expires_at`, `scope_match`, `ReapprovalRequired` | Strong candidate | Should likely become a RABA-native governance signal. |
| `hidden_commitment_detected` | Prior approval reused for later or different action | `hidden_commitment_detected`, `PolicyBoundaryReached`, `EscalationTriggered`, `AuthorizationRevoked` | Strong candidate | Useful for preventing authority transfer by implication. |
| `hidden_commitment_flag` | Boolean flag for hidden commitment risk | `hidden_commitment_detected` | Strong candidate | Prefer one RABA-native field name for consistency. |
| `rollback_viable` | Whether the action can be rolled back | `reversibility_profile.rollback_viable`, `rollback_viable` | Strong candidate | Should connect to Action Reversibility work and incident response. |
| `human_responsibility_remains` | Responsibilities not discharged by trace evidence | `human_responsibility_remains`, `human_owner_role`, `final_authority_required` | Strong candidate | Important distinction: trace supports review but does not carry responsibility. |
| Phase distinction: AI proposal / human review / confirmation / execution | Separation of workflow phases and responsibilities | `ActionDrafted`, `ActionRecommended`, `ApprovalRequested`, `ApprovalGranted`, `ExecutionStarted`, `ExecutionCompleted` | Strong | Already aligned with Responsibility Event Stream direction. |
| Evidence freshness at commit time | Timestamp comparison between confirmation and execution/commit | `confirmation_timestamp`, `execution_timestamp`, `approval_expires_at`, `confirmation_freshness` | Strong candidate | RABA should record both timestamp and freshness evaluation. |

## Proposed RABA-Native Event Fields

The DecisionAssure trace suggests several fields that may be useful for RABA-native events.

```json
{
  "confirmation_freshness": {
    "is_fresh": false,
    "confirmed_at": "<ISO 8601>",
    "executed_at": "<ISO 8601>",
    "scope_changed_after_confirmation": true,
    "reapproval_required": true
  },
  "intent_alignment": {
    "confirmed_scope": "<scope summary>",
    "executed_scope": "<scope summary>",
    "scope_match": false,
    "drift_detected": true
  },
  "hidden_commitment": {
    "detected": true,
    "reason": "Prior confirmation was reused for a changed action scope."
  },
  "reversibility_profile": {
    "rollback_viable": true,
    "rollback_reason": "Change is reversible through repository revert."
  },
  "human_responsibility_remains": [
    "final approval authority",
    "scope validation"
  ]
}
```

## Mapping to Existing RABA Event Types

| RABA event type | Possible DecisionAssure-supported signal |
|---|---|
| `ActionDrafted` | AI proposal phase |
| `ActionRecommended` | AI recommendation phase |
| `ApprovalRequested` | Human review requested |
| `ApprovalGranted` | Human confirmation granted |
| `ReapprovalRequired` | Confirmation freshness failed or scope changed |
| `PolicyBoundaryReached` | Hidden commitment, scope drift or authority mismatch detected |
| `EscalationTriggered` | Human Owner or elevated review required |
| `AuthorizationRevoked` | Prior confirmation invalidated |
| `ExecutionStarted` | Commit/action attempt begins |
| `ExecutionCompleted` | Commit/action completed |
| `DecisionLogged` | Business accountability record created |
| `AuditTraceSigned` | Trace evidence finalized |

## Relationship to Confirmed Intent Drift

The DecisionAssure trace is especially relevant to the RABA failure pattern:

- [`docs/failure-patterns/confirmed-intent-drift.md`](../failure-patterns/confirmed-intent-drift.md)

Confirmed Intent Drift occurs when the Human Owner confirms one scope but the AI workflow executes another, stale, adjacent or previously discussed action.

The fields `confirmation_freshness`, `hidden_commitment_detected`, timestamp comparison and `human_responsibility_remains` can help detect or explain this failure pattern.

## What RABA Should Consider Adopting Later

Candidate RABA-native concepts for later schema discussion:

1. `confirmation_freshness`
2. `intent_alignment`
3. `hidden_commitment`
4. `reversibility_profile`
5. `human_responsibility_remains`
6. `scope_changed_after_confirmation`
7. `reapproval_required`

These should not be adopted automatically. They require schema review, naming review, examples and Human Owner confirmation.

## Boundary

This document is a mapping draft.

It does not:

- adopt DecisionAssure as a RABA dependency;
- accept DecisionAssure schema as canonical;
- create commercial or referral commitment;
- replace RABA Decision Log;
- transfer responsibility to an external trace system;
- certify any workflow as compliant.

## Open Questions

1. Should RABA add an `intent_alignment` object to the minimal event envelope?
2. Should `confirmation_freshness` be required for all actions or only consequential actions?
3. Should hidden commitment detection be a separate event or a field inside `PolicyBoundaryReached`?
4. How should reversibility be represented for non-code business actions?
5. Should `human_responsibility_remains` be mandatory in high-risk workflows?
6. How should external trace systems sign or reference RABA Decision Log entries?

## Current Status

This mapping is a DISCUSSION_DRAFT.

It can guide future schema work but does not change canonical RABA architecture until explicitly reviewed and approved by the Human Owner.
