# Failure Analysis: Where the Controls Break

## Purpose

This analysis explains why the example policy looks responsible but fails as operational governance.

The problem is not that the policy has no governance language.

The problem is that the governance language does not reliably change runtime behavior.

---

## Failure 1: Allowed by Default

The policy says:

```json
"allowedByDefault": true
```

This means actions proceed unless they are explicitly forbidden.

That is dangerous for AI-assisted operations because many risky actions are not obvious at design time.

### Result

Ambiguous actions such as `case_closure`, `record_update`, `priority_downgrade` and `customer_commitment` can proceed because they are not strictly blocked.

### Real Control Needed

Use deny-by-default for operational actions.

```text
Unknown or ambiguous action
        ↓
REQUIRE_APPROVAL or BLOCK
```

---

## Failure 2: Human Review Is Vague

The policy says:

```json
"reviewMode": "as-needed"
```

This sounds reasonable but does not define:

- who decides when review is needed;
- how quickly review must happen;
- what happens if review is skipped;
- what happens under time pressure;
- whether execution is paused until approval.

### Result

Human review becomes symbolic.

The organization can claim oversight exists while actions continue without meaningful approval.

### Real Control Needed

Define review as a runtime decision state:

```text
REQUIRE_APPROVAL
```

Execution should pause until a qualified human approves, rejects or escalates.

---

## Failure 3: High-Risk Review Is Recommended, Not Enforced

The policy says:

```json
"humanReviewForHighRisk": "recommended"
```

This creates a soft control where a hard control is needed.

### Result

High-risk actions may proceed if the system or operator treats review as optional.

### Real Control Needed

High-risk actions should route to:

```text
ESCALATE
```

and require a qualified role before execution continues.

---

## Failure 4: Logging Without Monitoring

The policy says logs are enabled, but:

```json
"reviewFrequency": "monthly",
"alertOnBlockedAction": false,
"alertOnRepeatedEscalation": false,
"alertOnApprovalDelay": false
```

This creates an archive, not a governance system.

### Result

Problems are recorded but not acted on.

Repeated failures, delayed approvals or risky patterns may remain invisible until after harm occurs.

### Real Control Needed

Logs should support operational monitoring:

- repeated blocked actions trigger review;
- repeated escalations trigger management visibility;
- approval delays trigger queue management;
- high-risk actions trigger immediate alerts;
- unresolved escalations remain visible.

---

## Failure 5: Escalation Depends on AI Self-Selection

The policy says escalation triggers:

```json
"when the AI determines escalation is necessary"
```

This makes escalation depend on the same system whose action needs governance.

### Result

The AI may fail to escalate cases it misunderstands.

### Real Control Needed

Escalation should also be triggered by independent rule checks:

- high-risk category;
- irreversible action;
- safety-related terms;
- repeated faults;
- cost threshold;
- sensitive data;
- legal or human-impact context;
- low confidence;
- missing required information.

---

## Failure 6: Unsafe Fallback

The policy says:

```json
"fallbackIfManagerUnavailable": "continue normal workflow"
```

This is a serious operational weakness.

### Result

When the escalation path fails, the workflow proceeds as if risk disappeared.

### Real Control Needed

Fallback should preserve control:

```text
manager unavailable
        ↓
route to alternate responsible role
        ↓
or pause / queue / block depending on risk
```

High-risk actions should not silently proceed when the escalation path is unavailable.

---

## Failure 7: Governance Without Runtime Gate

The policy contains principles but no executable control point.

### Result

There is no clear place where action is transformed into one of:

```text
ALLOW
BLOCK
REQUIRE_APPROVAL
ESCALATE
```

### Real Control Needed

Use a Governance Gateway:

```text
AI agent action
        ↓
policy and boundary check
        ↓
ALLOW / BLOCK / REQUIRE_APPROVAL / ESCALATE
        ↓
decision log
```

---

## Summary Table

| Governance theater weakness | Real control needed |
|---|---|
| Allowed by default | Deny-by-default for operational actions |
| Human review as-needed | Explicit approval state before execution |
| High-risk review recommended | Mandatory escalation |
| Logs reviewed monthly | Runtime monitoring and alerts |
| AI decides when to escalate | Independent gateway rules |
| Manager unavailable → continue | Alternate responsible role or pause |
| Policy without gateway | Executable decision gate |

---

## Key Lesson

This policy is not bad because it lacks responsible language.

It is bad because responsible language does not become operational control.

> Governance theater begins when the organization mistakes the appearance of control for control itself.
