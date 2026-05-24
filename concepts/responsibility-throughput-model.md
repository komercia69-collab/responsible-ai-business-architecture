# Responsibility Throughput Model

## 1. Core Problem

A common objection to responsibility controls in AI workflows is that they may slow automation down until the business value of automation disappears.

This objection is valid.

If every AI-supported action requires the same approval flow, the same human review, and the same documentation burden, then governance becomes a bottleneck rather than an enabling architecture.

RABA therefore does not treat responsibility as a universal brake.

RABA treats responsibility as a routing and control layer that determines which actions may run fast, which actions require friction, which actions require human approval, and which actions must be blocked or escalated.

> Responsibility should not stop automation.  
> Responsibility should define the safe speed of automation.

The routing path for any action class must be determined by human-defined business rules, not by the AI system’s self-assessment of risk. AI may apply the rules. AI may provide signals to the rules. AI may not set or relax the rules that determine its own level of oversight.

For macro-level safeguards against biased bypass briefs, Fast Path cascades, and remediation scale gaps, see [`governed-speed-safety-controls.md`](governed-speed-safety-controls.md).

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

However, speed must never be justified only by technical convenience or by a latency budget. A fast path is acceptable only when the organization can defend the action through policy, evidence, real-world recoverability, and accountability.

A latency budget explains how fast governance must operate. It does not excuse negligent routing.

---

## 3. Fast Path, Review Path, Escalation Path, and Bypass Lane

To avoid unnecessary slowdown, RABA separates AI-supported actions into multiple operational paths.

### 3.1 Fast Path

The system may execute automatically when the action is:

- low impact;
- reversible in the real world, not only technically reversible;
- within predefined policy limits;
- based on sufficient data quality;
- covered by monitoring;
- logged for audit;
- connected to a remediation path.

Fast Path is not ungoverned automation. It is governed automation with low runtime friction.

Fast Path should never be justified only by model confidence. It must be justified by deterministic policy conditions, impact limits, real-world recoverability, and accountable ownership of the policy limits.

At high volume, Fast Path also requires macro-level safeguards: circuit breaker thresholds, Time-to-Halt targets, and mass remediation capacity.

### 3.2 Review Path

The system requires human review, batch review, sampled review, or delayed approval when the action is:

- medium impact;
- partially reversible;
- unusual but not critical;
- dependent on incomplete context;
- likely to affect customer trust or operational stability;
- part of a pattern that may indicate drift or misuse.

Review Path introduces proportional oversight without blocking every action.

Review Path must also protect against **batch-stamping** and alert fatigue. A human reviewing many cases must not become a passive approval device.

### 3.3 Escalation Path

The system must pause, block, or escalate when the action is:

- high impact;
- hard or impossible to reverse in the real world;
- legally sensitive;
- safety-relevant;
- rights-affecting;
- outside policy limits;
- based on high uncertainty;
- detected as anomalous or boundary-violating.

Escalation Path protects the organization from fast wrong action.

Changes to the policy limits that determine routing should themselves go through Escalation Path. If policy limits can be changed casually, the gateway can be weakened without an explicit governance decision.

### 3.4 Governed Bypass Lane

When a high-risk action requires human approval, the main execution decision may need to wait. But the whole information flow does not have to freeze.

RABA can use a **Governed Bypass Lane**: a parallel processing lane that keeps useful, non-final, non-destructive work moving while the final decision is slowed down for human judgment.

The bypass lane may perform supporting actions such as:

- collecting additional evidence;
- improving data quality;
- re-running analysis with another model or rule set;
- preparing alternative recommendations;
- generating a decision brief for the human approver;
- checking policy, legal, or contract constraints;
- simulating outcomes;
- preparing rollback or remediation options;
- notifying internal stakeholders that a decision is pending;
- queueing downstream work without executing the final external action.

The bypass lane is not a way to evade responsibility. It is a way to preserve throughput while responsibility controls do their work.

A bypass lane must not perform the blocked high-impact action itself. It may only perform allowed supporting actions that are reversible, internal, non-destructive, or explicitly permitted by policy.

#### What is explicitly prohibited in Governed Bypass Lane

The following actions must not occur inside a Governed Bypass Lane, regardless of preparation purpose:

- sending any external communication to customers, partners, or regulators;
- modifying customer or user data records;
- reserving, committing, or blocking financial resources;
- creating legally significant records or documents;
- triggering downstream automated workflows that cannot be reversed before the accountable decision is made;
- communicating the likely decision outcome to any external party;
- creating obligations on behalf of the organization.

The boundary rule:

> Bypass may prepare the decision environment.  
> Bypass must not create facts that constrain the accountable decision.

Bypass processing must follow Evidence Neutrality: facts, AI interpretation, uncertainty, supporting evidence, opposing evidence, alternatives, and remediation options should be separated so that the decision brief does not steer the human through hidden framing.

In short:

> Slow the final decision when needed.  
> Do not unnecessarily stop useful preparation, enrichment, analysis, or remediation planning.

---

## 4. Path Classification Rules

Speed paths must be defined at the level of action classes before runtime.

An action class is a recurring type of AI-supported action such as:

- classify an internal ticket;
- draft a customer response;
- send a customer response;
- issue a refund;
- block an account;
- change a production parameter;
- approve a procurement step;
- update access rights.

For each action class, the organization should define:

- the default path: Fast Path, Review Path, Escalation Path, or Block;
- the deterministic filters that allow or prevent Fast Path;
- the real-world reversibility class;
- the maximum allowed impact;
- the data quality requirements;
- the policy owner;
- the review cadence;
- escalation triggers;
- rollback or remediation requirements;
- audit sampling requirements;
- whether bypass processing is allowed while review is pending;
- whether circuit breaker protection is required;
- whether mass remediation playbooks are required.

The AI system may classify facts or provide signals that are used by the routing rules, but it must not be the sole source of the routing rule itself.

A safe routing rule should look like this:

```text
IF action_class = low_value_refund
AND amount <= 20 EUR
AND customer_status = verified
AND data_completeness = sufficient
AND real_world_reversibility = full
AND no boundary violation is detected
THEN Fast Path
ELSE Review Path or Escalation Path
```

A weak routing rule looks like this:

```text
IF model_risk_score = low
THEN Fast Path
```

RABA rejects model-only routing because it allows the AI system to become the judge of its own oversight.

---

## 5. Speed-Path Governance

The path classification for each action class is itself a governance object.

It should have an owner, version, review cycle, approval state, and audit trail.

### 5.1 Who Defines the Path?

Speed paths should be defined by accountable human or organizational roles, such as:

- process owner;
- risk owner;
- product owner;
- compliance or legal reviewer;
- operations lead;
- security owner;
- audit representative where appropriate.

AI may assist in drafting or analyzing path rules, but the accepted rule must be owned by a human or organization.

### 5.2 How Often Should Paths Be Reviewed?

Each path classification should have a review cadence.

Examples:

- high-risk action classes: monthly or after every incident;
- medium-risk action classes: quarterly or after drift indicators;
- low-risk action classes: semi-annually or after significant volume change;
- experimental action classes: after a defined observation window.

### 5.3 What Triggers Path Downgrade or Escalation?

An action class should move from Fast Path to Review Path, Escalation Path, or Block when:

- incident rate increases;
- audit sample error rate exceeds threshold;
- data quality decreases;
- drift is detected;
- customer complaints increase;
- legal or regulatory context changes;
- real-world reversibility is lower than expected;
- remediation takes longer than expected;
- remediation capacity is exceeded or projected to be exceeded;
- policy limits are exceeded or repeatedly approached;
- reviewers show signs of rubber-stamping or alert fatigue;
- circuit breaker thresholds are exceeded.

### 5.4 What Triggers Path Upgrade?

An action class may move toward more autonomy only when:

- the observation period is complete;
- error rates remain below defined thresholds;
- real-world remediation has been tested;
- mass remediation capacity has been evaluated for expected volume;
- audit results are acceptable;
- the action stays within policy limits;
- the decision owner approves the change;
- the change is logged as a governance decision.

In short:

> Speed paths are not runtime conveniences.  
> They are governed policy objects.

---

## 6. Responsibility Latency Budget

Every workflow has a tolerance for delay. A fraud system, trading control, medical triage queue, customer support assistant, procurement approval, and internal report generator do not have the same timing requirements.

RABA can therefore define a **Responsibility Latency Budget**:

> the maximum acceptable delay introduced by responsibility controls for a given action class.

Examples:

| Action class | Example latency budget | Governance pattern |
|---|---:|---|
| Micro action | milliseconds to seconds | automated execution with policy limits and logging |
| Operational action | seconds to minutes | fast path or sampled review |
| Customer-impacting action | minutes to hours | human review, bypass enrichment, or batch approval |
| High-risk action | hours to days if needed | explicit approval, legal/compliance review, escalation, bypass preparation |

The point is not to make everything slow. The point is to make governance latency explicit, designed, and justified.

The bypass lane helps use the latency budget productively. While the decision waits, the system can reduce uncertainty, improve the decision package, and prepare safe follow-up actions.

A latency budget must not be used as a legal or ethical excuse for premature automation. It is an engineering constraint for governance design, not a waiver of responsibility.

A latency budget should have a review trigger. If the organization repeatedly expands Fast Path to meet latency goals without proving real-world reversibility and remediation capacity, the governance design is failing.

---

## 7. Reversibility Must Be Real-World Reversibility

RABA uses reversibility as a speed-control factor, but the word “reversible” can be misleading.

A technical rollback is not the same as real-world reversal.

### 7.1 System Reversibility

System reversibility means that a technical state can be changed back.

Examples:

- a database value can be restored;
- a feature flag can be turned off;
- an internal classification can be corrected;
- a workflow state can be reset;
- a transaction can be technically reversed.

System reversibility is useful, but it is not enough for Fast Path routing.

### 7.2 Real-World Reversibility

Real-world reversibility asks whether the organization can meaningfully undo or repair the actual consequence of the action.

Examples:

- Can customer trust be restored?
- Can a wrongly sent message be neutralized?
- Can lost time be returned?
- Can reputation damage be repaired?
- Can a denied service be restored without lasting harm?
- Can a supply chain delay be reversed after downstream commitments changed?
- Can money, access, rights, safety, or legal position be restored quickly and fairly?

For routing into Fast Path, RABA should use **real-world reversibility** as the primary criterion.

System reversibility may reduce technical remediation cost, but it must not be treated as proof that the action is safe to automate.

### 7.3 Reversibility Classes

A practical classification may be:

| Class | Meaning | Routing implication |
|---|---|---|
| Full real-world reversibility | The consequence can be corrected quickly with minimal external harm | Fast Path may be acceptable if other conditions are met |
| Partial real-world reversibility | Technical correction is possible, but external harm, delay, confusion, or trust loss may remain | Review Path or Escalation Path |
| No meaningful real-world reversibility | The action creates lasting harm, legal effect, safety risk, or irreversible external consequence | Escalation Path or Block |

This prevents the myth of easy rollback from weakening the governance gateway.

---

## 8. Automation Friction Gradient

RABA uses friction where it creates responsibility value.

Friction should increase when:

- real-world reversibility decreases;
- impact increases;
- uncertainty increases;
- data quality decreases;
- legal sensitivity increases;
- affected-party vulnerability increases;
- the action moves from internal recommendation to external execution;
- repeated approvals indicate rubber-stamping;
- batch review patterns indicate alert fatigue;
- remediation capacity becomes insufficient for action volume.

Friction should decrease when:

- the action is reversible in the real world;
- the action is low impact;
- the action is routine;
- policy boundaries are clear;
- monitoring is strong;
- remediation is fast and meaningful;
- mass remediation capacity is sufficient;
- historical performance is stable;
- audit sampling is sufficient.

This creates a gradient rather than a binary rule.

RABA should not say:

> Human approval everywhere.

RABA should say:

> More autonomy where the cost of being wrong is low and recoverable. More friction where the cost of being wrong is high, irreversible, or legally sensitive. Parallel bypass processing where the final decision must wait but useful safe work can continue.

---

## 9. Throughput-Preserving Controls

Responsibility can be designed without destroying throughput by using several control patterns.

### 9.1 Policy-Bounded Autonomy

AI-supported systems may execute automatically inside predefined business limits.

Example:

> Auto-refund up to 20 EUR when deterministic policy conditions are met, customer history is clean, and the action is reversible in the real world.

Policy-bounded autonomy must be bounded by reviewed business rules, not by the model’s self-assessment alone.

### 9.2 Exception-Based Human Review

Humans review exceptions rather than every normal case.

Example:

> Only cases with uncertainty, boundary violation, conflicting signals, or high impact are routed to a human.

### 9.3 Sampling and Audit

A percentage of low-risk actions is reviewed after execution.

Example:

> 2% of low-risk support responses are audited daily; 100% of high-risk escalations are reviewed.

Important: Fast Path percentage is a diagnostic metric, not a performance target.

Increasing Fast Path share without documented evidence of improved real-world reversibility is a governance red flag, not a success indicator.

Organizations must not optimize for Fast Path percentage. They must optimize for accurate path classification.

If Fast Path percentage is increasing, the correct question is: did real-world reversibility improve, or did governance drift?

### 9.4 Batch Approval With Anti-Fatigue Controls

Humans may approve groups of similar actions when individual review adds little value.

Example:

> A manager reviews a batch of 500 low-risk categorization changes with summary statistics, outliers, and rollback options.

Batch approval is useful only if it does not become batch-stamping.

Anti-fatigue controls may include:

- randomly requiring expanded validation for selected items in a batch;
- forcing the reviewer to inspect outliers and edge cases before batch approval;
- requiring meaning-level validation for a sample item, not only syntax-level confirmation;
- showing disagreement between models, rules, or historical patterns;
- limiting batch size when error rate, drift, or uncertainty rises;
- detecting approval speed that is too fast for meaningful review;
- rotating review tasks to reduce attention degradation;
- requiring periodic calibration reviews by a second role.

The goal is not to slow every batch. The goal is to prevent Review Path from becoming a disguised Fast Path.

### 9.5 Shadow Mode and Progressive Autonomy

AI starts by recommending only, then moves to supervised execution, then to bounded autonomy after performance is proven.

Example:

```text
recommend only → human-approved execution → bounded autonomous execution → sampled audit
```

Shadow Mode itself is a governance object, not a casual testing mode.

### 9.6 Shadow Mode Graduation Criteria

Moving from shadow mode to production autonomy should require an explicit approval state.

A graduation decision should define:

- who authorizes the move from shadow mode to production mode;
- the observation period required before graduation;
- the minimum number of cases observed;
- acceptable error rate and severity threshold;
- false positive and false negative tolerance;
- drift and data quality checks;
- evidence that real-world remediation has been tested;
- audit results;
- whether the production mode is Fast Path, Review Path, or bounded autonomy;
- rollback plan if production performance differs from shadow results;
- date of next review.

A model or agent should not graduate itself from shadow mode.

In short:

> Shadow mode may generate evidence.  
> Humans must approve graduation.

### 9.7 Kill Switch and Rollback

Fast automation is safer when stop and remediation mechanisms are explicit.

Example:

> A workflow may auto-execute under policy limits, but if anomaly rate exceeds a threshold, the Governance Gateway pauses the action class and escalates.

However, a kill switch is not proof of safety by itself. A kill switch stops future harm; it may not repair harm already created. Rollback must therefore be evaluated through real-world reversibility.

At high volume, a kill switch should be formalized as a Governance Circuit Breaker with explicit triggers, Time-to-Halt targets, owner role, restart criteria, and post-incident review.

### 9.8 Control by Action Class

Controls apply to action classes, not every individual event in the same way.

Example:

> Internal tagging may be automatic. Customer notification may require review. Account suspension may require explicit approval.

### 9.9 Governed Bypass Processing

When a decision is delayed for review, the workflow can continue with safe supporting operations.

Example:

> A customer account suspension requires human approval. While waiting, the system gathers related events, checks recent customer communications, prepares a summary for the reviewer, identifies reversible alternatives, and prepares a rollback plan. It does not suspend the account until the responsible role approves.

Bypass processing preserves speed by keeping the information flow active while preventing the final high-risk action from executing prematurely.

Bypass processing must not create confirmation bias through selective evidence. Decision briefs should separate facts, AI interpretation, uncertainty, supporting evidence, opposing evidence, alternatives, and remediation options.

### 9.10 Mass Remediation Readiness

For high-volume Fast Path actions, the organization must be able to remediate at the scale at which automation can create harm.

A single-case rollback is not enough.

Fast Path eligibility should include:

- batch remediation capability;
- maximum exposure before halt;
- remediation throughput estimate;
- customer or stakeholder communication capacity;
- evidence export capability;
- escalation if remediation capacity is exceeded.

If the organization cannot remediate the expected volume of wrong actions, the action class should not be treated as fully real-world reversible.

---

## 10. Speed-Control Matrix

RABA can represent the relationship between speed and responsibility as a matrix.

| Risk / Real-world reversibility | Low impact / fully reversible | Medium impact / partially reversible | High impact / hard to reverse |
|---|---|---|---|
| Low uncertainty | Fast Path: autonomous execution + logging + circuit breaker where volume requires | Review Path: sampled or batch review with anti-fatigue controls | Review Path: approval before execution + bypass preparation |
| Medium uncertainty | Fast Path with audit sampling only if policy limits are deterministic and remediation capacity is sufficient | Review Path: human review or delay + bypass enrichment | Escalation Path: explicit approval + bypass evidence package |
| High uncertainty | Review Path: exception review + bypass data improvement | Escalation Path: pause or approve + bypass analysis | Escalation Path: block final action, continue only allowed bypass processing |

This matrix makes the project more realistic for automation-heavy organizations.

The matrix is not a model-only router. It is a governance design tool. Runtime routing must be enforced through human-defined policy rules, deterministic filters, and Gateway checks.

The goal is not to maximize control. The goal is to allocate control where it changes the outcome while keeping safe work moving.

---

## 11. Governance Gateway Role

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

With bypass processing, the gateway can split the workflow:

```text
AI proposal / action intent
  ↓
Policy and boundary evaluation
  ↓
Final action: Review / Escalation / Block
  ↓
Bypass lane: enrichment / evidence / alternatives / rollback preparation
  ↓
Human decision or policy resolution
  ↓
Execute / modify / reject / remediate
```

The gateway should evaluate:

- action type;
- impact level;
- real-world reversibility;
- uncertainty;
- data quality;
- delegated authority limits;
- legal or policy sensitivity;
- available remediation path;
- current anomaly or drift signals;
- which supporting actions are allowed in the bypass lane.

This allows RABA to preserve automation speed without allowing uncontrolled autonomy.

### 11.1 Policy Limit Change Control

The policy limits that route actions into Fast Path, Review Path, Escalation Path, or Block are themselves high-impact governance objects.

Changing these limits can change the effective autonomy of the system.

Therefore, policy limit changes should not be made by the AI system itself and should not be silently adjusted by operational convenience.

A policy limit change should require:

- a named Decision Owner;
- human approval through Escalation Path or an equivalent governance process;
- a recorded reason for the change;
- impact analysis;
- rollback or expiration plan;
- versioning;
- audit logging;
- monitoring after deployment.

In short:

> The AI may operate inside policy limits.  
> It must not grant itself easier policy limits.

### 11.2 Circuit Breaker Routing

The Governance Gateway should support macro-level circuit breaker routing.

When circuit breaker thresholds are exceeded, the gateway should be able to:

- degrade an action class from Fast Path to Review Path;
- degrade an action class from Review Path to Escalation Path;
- block final external actions;
- keep only governed bypass preparation active;
- notify the owner and incident response roles;
- require governed restart before Fast Path resumes.

---

## 12. Bypass Lane Boundaries

A bypass lane must be governed. Otherwise, it can become a hidden execution path that performs the very action that governance delayed.

Allowed bypass actions usually have these properties:

- internal only;
- reversible;
- non-destructive;
- evidence-generating;
- decision-supporting;
- policy-permitted;
- logged;
- not externally final;
- not rights-affecting by themselves.

Disallowed bypass actions include:

- executing the blocked final action under another name;
- notifying external parties as if the decision were already final;
- changing rights, access, money, legal status, safety posture, or customer standing;
- deleting or overwriting evidence;
- expanding AI authority while review is pending;
- creating downstream commitments that make the human decision meaningless.

The key rule:

> Bypass may accelerate preparation.  
> Bypass must not pre-decide the accountable decision.

### 12.1 Evidence Neutrality

Bypass may prepare a decision brief, but it must not manipulate the reviewer through selective evidence or biased framing.

A bypass decision brief should separate:

- facts;
- AI interpretation;
- uncertainty;
- missing data;
- evidence supporting the proposed action;
- evidence against the proposed action;
- alternatives;
- real-world consequences;
- remediation options.

For high-impact cases, the brief should include a reasonable red-team argument against the proposed action.

---

## 13. Avoiding Closed-Loop Routing

The speed-control matrix is only safe if the routing inputs are not controlled only by the same AI system being governed.

A key failure mode is closed-loop routing:

```text
AI estimates low risk
  ↓
AI routes itself to Fast Path
  ↓
AI executes without human review
```

RABA rejects this pattern.

Model signals may contribute to routing, but Fast Path eligibility must depend on deterministic or independently reviewed filters such as:

- action class;
- monetary threshold;
- customer category;
- regulatory category;
- rights impact;
- data completeness rule;
- policy ID;
- prior authorization boundary;
- real-world reversibility class;
- explicit delegated authority limit.

In short:

> The model may provide signals.  
> The policy decides the path.  
> The Governance Gateway enforces the path.  
> Humans own the policy limits.

---

## 14. Avoiding the False Choice

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

Bypass processing adds a third option:

```text
pause the final decision, but continue safe supporting work
```

The project should therefore position responsibility as an acceleration architecture, not merely a restriction architecture.

Good governance can increase speed because it gives organizations confidence to automate more actions safely.

RABA does not slow automation by default. It replaces unknown speed with accountable speed.

---

## 15. Suggested Schema Elements

A future schema may include a throughput governance layer:

```yaml
throughput_governance:
  action_class: "customer_refund"
  routing_path: "fast_path" # fast_path | review_path | escalation_path | block
  responsibility_latency_budget: "2s"
  path_classification:
    determined_by: "human_defined_business_rules"
    ai_may_apply_rules: true
    ai_may_set_rules: false
    ai_may_relax_rules: false
    rule_owner_role: "Customer Operations Lead"
    rule_version: "v3.2"
    review_cadence: "quarterly"
    last_reviewed_at: "2026-05-24"
    next_review_due: "2026-08-24"
    downgrade_triggers:
      - "audit_error_rate_above_threshold"
      - "data_quality_drop"
      - "incident_detected"
      - "complaint_rate_increase"
      - "remediation_sla_breach"
    upgrade_requires_human_approval: true
  impact_level: "low" # low | medium | high
  reversibility:
    system_reversibility: "full" # full | partial | none
    real_world_reversibility: "full" # full | partial | none
    real_world_reversibility_notes: "Refund can be reversed before settlement and customer impact is minimal."
  uncertainty_level: "low" # low | medium | high
  data_quality: "sufficient" # sufficient | incomplete | conflicting
  delegated_authority_policy_id: "POL-AI-REFUND-LOW-RISK"
  routing_controls:
    deterministic_filters_required: true
    model_only_routing_allowed: false
    policy_limit_change_requires_escalation: true
    policy_limit_owner_role: "Customer Operations Lead"
    policy_limit_version: "v3.2"
  human_review:
    required_before_execution: false
    review_mode: "audit_sampling" # none | pre_approval | batch | audit_sampling | escalation
    sampling_rate: "2%"
    batch_approval_controls:
      enabled: true
      random_deep_validation_required: true
      outlier_review_required: true
      max_batch_size: 500
      approval_speed_monitoring: true
  shadow_mode:
    enabled: false
    graduation_requires_approval: true
    required_observation_period: "30d"
    minimum_cases_observed: 1000
    maximum_error_rate: "0.5%"
    severity_threshold: "no_high_severity_errors"
    drift_check_required: true
    real_world_remediation_tested: true
    graduation_owner_role: "Process Owner"
    rollback_plan_required: true
  bypass_lane:
    enabled: true
    allowed_while_pending: true
    allowed_actions:
      - "collect_evidence"
      - "improve_data_quality"
      - "prepare_decision_brief"
      - "simulate_outcomes"
      - "prepare_rollback_plan"
    disallowed_actions:
      - "execute_final_external_action"
      - "change_customer_rights"
      - "delete_evidence"
    requires_logging: true
    bypass_owner_role: "Operations Analyst"
    boundary_policy_id: "POL-AI-BYPASS-01"
    evidence_neutrality:
      required: true
      facts_separated_from_ai_interpretation: true
      opposing_evidence_required: true
      missing_data_visible: true
      alternatives_required: true
      tone_neutrality_required: true
  circuit_breaker:
    enabled: true
    time_to_halt_target: "5m"
    automatic_degradation: "fast_path_to_review_path"
    restart_requires_human_approval: true
  mass_remediation:
    playbook_required: true
    batch_remediation_available: true
    maximum_exposure_before_halt: 1000
    remediation_capacity_per_day: 5000
  escalation:
    trigger_on_boundary_violation: true
    trigger_on_high_uncertainty: true
    trigger_on_policy_limit_change: true
    trigger_on_circuit_breaker_activation: true
    owner_role: "Customer Operations Lead"
  safety_controls:
    kill_switch_available: true
    rollback_available: true
    real_world_remediation_verified: true
    anomaly_threshold_policy_id: "POL-AI-ANOMALY-01"
```

This schema separates responsibility from mandatory synchronous approval.

It allows automation to remain fast while keeping responsibility visible and auditable.

---

## 16. Practical Example: High-Volume Customer Refunds

### Without Throughput-Aware Responsibility

Every refund recommendation requires human approval.

Result:

- queues grow;
- customers wait;
- employees rubber-stamp approvals;
- governance becomes performative;
- automation value decreases.

### With RABA Throughput Model

Refunds are routed by risk and real-world reversibility:

- refund action classes are classified by human-defined business rules;
- refunds under a low threshold are auto-approved if deterministic policy conditions are met;
- unusual cases go to exception review;
- high-value or suspicious refunds require approval;
- while the case is pending, the bypass lane gathers evidence, prepares a decision brief, and checks remediation options;
- the decision brief separates facts, AI interpretation, evidence for, evidence against, uncertainty, alternatives, and remediation options;
- a sample of low-risk refunds is audited daily;
- batch approvals include anti-fatigue controls and outlier review;
- anomaly spikes trigger a circuit breaker;
- policy limit changes require escalation and human approval;
- the Decision Owner owns the policy limits;
- the Remediation Executor can reverse or correct transactions where real-world remediation is still meaningful;
- a mass remediation playbook defines how affected refunds are identified and corrected at scale;
- the Decision Log preserves evidence.

Result:

- most routine actions remain fast;
- risky actions receive attention;
- humans focus where judgment matters;
- pending cases become better prepared instead of simply blocked;
- cascade risk is reduced;
- responsibility remains visible.

---

## 17. Practical Example: Account Suspension

### Scenario

An AI-supported fraud system recommends suspending a customer account. The action is high-impact because it affects access, trust, and possibly money.

### Without Bypass

The account suspension waits for human approval. Nothing else happens.

Result:

- the reviewer receives a weak decision package;
- evidence gathering happens manually;
- the queue grows;
- pressure increases to approve quickly;
- rubber-stamping becomes more likely.

### With Governed Bypass

The final suspension waits for human approval, but the bypass lane continues safe work:

- collects recent fraud signals;
- checks real-world reversibility of possible actions;
- summarizes customer history;
- identifies evidence for and against suspension;
- identifies less harmful alternatives, such as temporary transaction hold or step-up verification;
- prepares customer communication drafts but does not send them;
- prepares remediation instructions if suspension is approved and later found wrong;
- logs all supporting actions.

Result:

- the human decision is slower than full automation but faster and better than manual review;
- the decision package is richer and less biased;
- the final high-impact action remains governed;
- responsibility and throughput are both preserved.

---

## 18. RABA Principle Statement

**RABA Principle: Governed Speed**

RABA does not slow automation by requiring human approval for every AI-supported action.

RABA increases the responsible speed of automation by routing actions through risk-proportional control paths.

Low-risk, real-world reversible, policy-bounded actions may execute quickly only when stopping and remediation capacity can scale with the automation.

High-risk, irreversible, uncertain, or rights-affecting actions require friction, review, escalation, or blocking.

When a final action must wait for human judgment, a governed bypass lane may continue safe supporting work: evidence gathering, data improvement, alternative analysis, decision-brief preparation, simulation, and remediation planning.

The goal is not maximum automation and not maximum control.

The goal is the highest responsible speed for each action class.

RABA replaces unknown speed with accountable speed.

> Governance must scale faster than autonomy.  
> But governance must also be fast enough to govern autonomy in real time.  
> When final execution must slow down, safe preparation should continue.  
> The model may provide signals; policy must own the path.  
> No governed speed without governed stopping.
