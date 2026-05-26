# Confirmed Intent Drift

**Status:** DISCUSSION_DRAFT  
**Canonical status:** Non-canonical  
**Pattern type:** Scope / confirmation / execution alignment failure  
**Approval status:** Human Owner review required  

> Multi-AI agreement is not approval.  
> A technically valid action is not necessarily aligned with the confirmed human intent.  
> Final architectural approval belongs to the Human Owner.

## Short Summary

Confirmed Intent Drift occurs when the Human Owner confirms one intended action, but the AI-assisted workflow executes a different, stale, adjacent or previously discussed action while preserving the appearance of valid governance.

The action may be technically correct.

The commit, log, trace or output may be valid.

But the execution no longer matches the current confirmed intent.

## Core Problem

RABA assumes that human confirmation must be bound to a specific action scope.

If the AI system uses an earlier context, a stale task, or a nearby unresolved instruction after a new confirmation, the workflow can drift from:

```text
confirmed human intent
```

to:

```text
valid-looking execution of a different action
```

This creates a governance failure even when the executed change is small, reversible, technically correct or useful.

## Why This Matters

Confirmed Intent Drift shows that traceability alone is not enough.

A trace can prove:

- what was changed;
- when it was changed;
- which file was affected;
- which tool executed the action;
- which commit was produced.

But trace alone may not prove:

- that the action matched the current Human Owner instruction;
- that the scope was still fresh;
- that the AI did not reuse stale context;
- that a prior confirmation was not silently applied to a new or different task.

In short:

> Technical trace does not automatically prove responsibility alignment.

## Key Symptoms

- The Human Owner confirms task A, but the system performs task B.
- The system continues a previously discussed task after the user has moved to a new task.
- The output is valid, but it belongs to a stale scope.
- The action is described as successful even though it does not match the current requested package.
- The assistant uses old context as if it were still the active instruction.
- Commit metadata is correct, but the intent-to-execution link is weak or wrong.
- The Human Owner has to ask: “What does this demonstrate?” after execution.

## Practical Scenario

A Human Owner confirms work on a new package:

```text
DecisionAssure external review input + trace-field mapping
```

The AI assistant acknowledges the new package, but then performs a leftover action from the previous package:

```text
README wording fix
```

The resulting commit is valid. The file update is small and useful. The repository is not damaged.

However, the action does not match the currently confirmed intent.

This is not primarily a technical failure.

It is a responsibility alignment failure.

## Failure Formula

```text
Human confirms current scope A
→ AI reuses stale or adjacent scope B
→ execution occurs successfully
→ trace exists
→ governance appearance remains valid
→ intent-to-execution alignment is broken
```

## Relationship to RABA Concepts

### Active Confirmation Interlock

Confirmed Intent Drift shows why an interlock must verify not only that confirmation exists, but also that it is fresh and bound to the exact current action.

### Responsibility Event Stream

The event stream should capture:

- intended action scope;
- confirmed action scope;
- execution action scope;
- scope hash or summary;
- confirmation timestamp;
- execution timestamp;
- drift detection result.

### Decision Log

The Decision Log should not only record the executed change. It should also preserve the reason why the action matched the confirmed intent.

### Human Owner Authority

The Human Owner remains the final authority, but the system must not force the Human Owner to detect every scope drift manually after execution.

## Possible Controls

### 1. Current Scope Echo

Before execution, the AI must restate the exact current scope:

```text
I will now execute: <specific action>
Files expected to change: <file list>
No other files will be changed.
```

### 2. Confirmation Binding

Confirmation should bind to:

- task name;
- file list;
- action type;
- expected outcome;
- timestamp;
- scope summary.

### 3. Scope Freshness Check

If the intended action changed after confirmation, previous approval must not be reused.

### 4. Execution Diff Check

After execution, compare:

```text
confirmed scope ↔ actual changed files ↔ commit message
```

### 5. Stale Context Warning

If the assistant is about to act on a prior thread topic, it should warn:

```text
This appears to belong to a previous task. Please confirm that this is still the active scope.
```

### 6. Responsibility Event Field

Add or map an event field such as:

```json
{
  "intent_alignment": {
    "confirmed_scope": "<scope summary>",
    "executed_scope": "<scope summary>",
    "scope_match": true,
    "drift_detected": false
  }
}
```

## Governance Questions

1. How should RABA represent the current active scope in a machine-readable way?
2. Should each Human Owner confirmation generate a scope hash?
3. Should any file change outside the confirmed file list automatically trigger escalation?
4. How should RABA distinguish harmless typo fixes from scope drift?
5. Should confirmed intent drift be treated as an incident, warning, or review finding?
6. How should external tools like trace systems validate intent alignment, not only event sequence?

## Open Questions

This pattern needs further review against:

- Active Confirmation Interlock;
- Responsibility Event Stream;
- Decision Log schema;
- DecisionAssure trace field mapping;
- future runtime governance tools.

## Non-Canonical Status

This is a discussion draft failure pattern.

It documents a real RABA development incident pattern, but it does not change canonical RABA architecture until explicitly reviewed and approved by the Human Owner.
