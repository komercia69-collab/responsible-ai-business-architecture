# Responsibility Throughput Model

## 1. Core Problem

A common objection to responsibility controls in AI workflows is that they may slow automation down until the business value of automation disappears.

This objection is valid.

If every AI-supported action requires the same approval flow, the same human review, and the same documentation burden, then governance becomes a bottleneck rather than an enabling architecture.

RABA therefore does not treat responsibility as a universal brake.

RABA treats responsibility as a routing and control layer that determines which actions may run fast, which actions require friction, which actions require human approval, and which actions must be blocked or escalated.

> Responsibility should not stop automation.  
> Responsibility should define the safe speed of automation.

---

## 2. Principle: Governance Should Scale With Risk

The core answer to the slowdown problem is **risk-proportional governance**.

Different actions require different levels of control:

- low-risk, reversible, bounded actions should move quickly;
- medium-risk actions may use sampled review, monitoring, or batch approval;
- high-risk, irreversible, rights-affecting, safety-affecting, or legally sensitive actions require stronger friction and approval;
- unknown or anomalous actions should escalate or pause.

RABA should not ask:

> Should AI act automatically or should a human approve everything?

RABA should ask:

> What is the highest responsible speed this action can safely have?

---

## 3. Fast Path, Review Path, Escalation Path

To avoid unnecessary slowdown, RABA separates AI-supported actions into at least three operational paths.

### 3.1 Fast Path

The system may execute automatically when the action is:

- low impact;
- reversible;
- within predefined policy limits;
- based on sufficient data quality;
- covered by monitoring;
- logged for audit;
- connected to a remediation path.

Fast Path is not ungoverned automation. It is governed automation with low runtime friction.

### 3.2 Review Path

The system requires human review, batch review, sampled review, or delayed approval when the action is:

- medium impact;
- partially reversible;
- unusual but not critical;
- dependent on incomplete context;
- likely to affect customer trust or operational stability;
- part of a pattern that may indicate drift or misuse.

Review Path introduces proportional oversight without blocking every action.

### 3.3 Escalation Path

The system must pause, block, or escalate when the action is:

- high impact;
- hard or impossible to reverse;
- legally sensitive;
- safety-relevant;
- rights-affecting;
- outside policy limits;
- based on high uncertainty;
- detected as anomalous or boundary-violating.

Escalation Path protects the organization from fast wrong action.

---

## 4. Responsibility Latency Budget

Every workflow has a tolerance for delay. A fraud system, trading control, medical triage queue, customer support assistant, procurement approval, and internal report generator do not have the same timing requirements.

RABA can therefore define a **Responsibility Latency Budget**:

> the maximum acceptable delay introduced by responsibility controls for a given action class.

Examples:

| Action class | Example latency budget | Governance pattern |
|---|---:|---|
| Micro action | milliseconds to seconds | automated execution with policy limits and logging |
| Operational action | seconds to minutes | fast path or sampled review |
| Customer-impacting action | minutes to hours | human review or batch approval |
| High-risk action | hours to days if needed | explicit approval, legal/compliance review, escalation |

The point is not to make everything slow. The point is to make governance latency explicit, designed, and justified.

---

## 5. Automation Friction Gradient

RABA uses friction where it creates responsibility value.

Friction should increase when:

- reversibility decreases;
- impact increases;
- uncertainty increases;
- data quality decreases;
- legal sensitivity increases;
- affected-party vulnerability increases;
- the action moves from internal recommendation to external execution;
- repeated approvals indicate rubber-stamping.

Friction should decrease when:

- the action is reversible;
- the action is low impact;
- the action is routine;
- policy boundaries are clear;
- monitoring is strong;
- remediation is fast;
- historical performance is stable;
- audit sampling is sufficient.

This creates a gradient rather than a binary rule.

RABA should not say:

> Human approval everywhere.

RABA should say:

> More autonomy where the cost of being wrong is low and recoverable. More friction where the cost of being wrong is high, irreversible, or legally sensitive.

---

## 6. Throughput-Preserving Controls

Responsibility can be designed without destroying throughput by using several control patterns.

### 6.1 Policy-Bounded Autonomy

AI-supported systems may execute automatically inside predefined business limits.

Example:

> Auto-refund up to 20 EUR when fraud risk is low, customer history is clean, and the action is reversible in the accounting system.

### 6.2 Exception-Based Human Review

Humans review exceptions rather than every normal case.

Example:

> Only cases with uncertainty, boundary violation, conflicting signals, or high impact are routed to a human.

### 6.3 Sampling and Audit

A percentage of low-risk actions is reviewed after execution.

Example:

> 2% of low-risk support responses are audited daily; 100% of high-risk escalations are reviewed.

### 6.4 Batch Approval

Humans approve groups of similar actions when individual review adds little value.

Example:

> A manager reviews a batch of 500 low-risk categorization changes with summary statistics, outliers, and rollback options.

### 6.5 Shadow Mode and Progressive Autonomy

AI starts by recommending only, then moves to supervised execution, then to bounded autonomy after performance is proven.

Example:

```text
recommend only → human-approved execution → bounded autonomous execution → sampled audit
```

### 6.6 Kill Switch and Rollback

Fast automation is safer when stop and rollback mechanisms are explicit.

Example:

> A workflow may auto-execute under policy limits, but if anomaly rate exceeds a threshold, the Governance Gateway pauses the action class and escalates.

### 6.7 Control by Action Class

Controls apply to action classes, not every individual event in the same way.

Example:

> Internal tagging may be automatic. Customer notification may require review. Account suspension may require explicit approval.

---

## 7. Speed-Control Matrix

RABA can represent the relationship between speed and responsibility as a matrix.

| Risk / Reversibility | Low impact / reversible | Medium impact / partially reversible | High impact / hard to reverse |
|---|---|---|---|
| Low uncertainty | Fast Path: autonomous execution + logging | Review Path: sampled or batch review | Review Path: approval before execution |
| Medium uncertainty | Fast Path with audit sampling | Review Path: human review or delay | Escalation Path: explicit approval |
| High uncertainty | Review Path: exception review | Escalation Path: pause or approve | Escalation Path: block until reviewed |

This matrix makes the project more realistic for automation-heavy organizations.

The goal is not to maximize control. The goal is to allocate control where it changes the outcome.

---

## 8. Governance Gateway Role

The Governance Gateway should not only decide whether an action is allowed.

It should route the action to the correct speed-control path:

```text
AI proposal / action intent
  ↓
Policy and boundary evaluation
  ↓
Fast Path | Review Path | Escalation Path | Block
  ↓
Execution / approval / audit / remediation
```

The gateway should evaluate:

- action type;
- impact level;
- reversibility;
- uncertainty;
- data quality;
- delegated authority limits;
- legal or policy sensitivity;
- available remediation path;
- current anomaly or drift signals.

This allows RABA to preserve automation speed without allowing uncontrolled autonomy.

---

## 9. Avoiding the False Choice

The debate is often framed as:

```text
speed vs responsibility
```

RABA should reject this framing.

The better framing is:

```text
ungoverned speed vs governed speed
```

Ungoverned speed creates hidden risk, unclear accountability, and expensive failures.

Governed speed makes automation faster where it is safe and slower where the cost of error is high.

The project should therefore position responsibility as an acceleration architecture, not merely a restriction architecture.

Good governance can increase speed because it gives organizations confidence to automate more actions safely.

---

## 10. Suggested Schema Elements

A future schema may include a throughput governance layer:

```yaml
throughput_governance:
  action_class: "customer_refund"
  routing_path: "fast_path" # fast_path | review_path | escalation_path | block
  responsibility_latency_budget: "2s"
  impact_level: "low" # low | medium | high
  reversibility: "full" # full | partial | none
  uncertainty_level: "low" # low | medium | high
  data_quality: "sufficient" # sufficient | incomplete | conflicting
  delegated_authority_policy_id: "POL-AI-REFUND-LOW-RISK"
  human_review:
    required_before_execution: false
    review_mode: "audit_sampling" # none | pre_approval | batch | audit_sampling | escalation
    sampling_rate: "2%"
  escalation:
    trigger_on_boundary_violation: true
    trigger_on_high_uncertainty: true
    owner_role: "Customer Operations Lead"
  safety_controls:
    kill_switch_available: true
    rollback_available: true
    anomaly_threshold_policy_id: "POL-AI-ANOMALY-01"
```

This schema separates responsibility from mandatory synchronous approval.

It allows automation to remain fast while keeping responsibility visible and auditable.

---

## 11. Practical Example: High-Volume Customer Refunds

### Without Throughput-Aware Responsibility

Every refund recommendation requires human approval.

Result:

- queues grow;
- customers wait;
- employees rubber-stamp approvals;
- governance becomes performative;
- automation value decreases.

### With RABA Throughput Model

Refunds are routed by risk and reversibility:

- refunds under a low threshold are auto-approved if policy conditions are met;
- unusual cases go to exception review;
- high-value or suspicious refunds require approval;
- a sample of low-risk refunds is audited daily;
- anomaly spikes trigger a kill switch;
- the Decision Owner owns the policy;
- the Remediation Executor can reverse or correct transactions;
- the Decision Log preserves evidence.

Result:

- most routine actions remain fast;
- risky actions receive attention;
- humans focus where judgment matters;
- responsibility remains visible.

---

## 12. RABA Principle Statement

**RABA Principle: Governed Speed**

RABA does not slow automation by requiring human approval for every AI-supported action.

RABA increases the responsible speed of automation by routing actions through risk-proportional control paths.

Low-risk, reversible, policy-bounded actions may execute quickly.

High-risk, irreversible, uncertain, or rights-affecting actions require friction, review, escalation, or blocking.

The goal is not maximum automation and not maximum control.

The goal is the highest responsible speed for each action class.

> Governance must scale faster than autonomy.  
> But governance must also be fast enough to govern autonomy in real time.
