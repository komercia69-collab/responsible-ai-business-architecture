# Revised Discussion Draft V2.1: Governed Preparation & Bypass Pattern

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Discussion Draft V2.1 — updated with anti-tunneling guards and review corrections  
**Prepared for:** G and K review  
**Prepared by:** Oleksandr Shuliak / ChatGPT  
**External-facing term:** Governed Preparation Route  
**Internal shorthand:** Governed Bypass Lane  
**Purpose:** Define how AI can accelerate decision preparation without creating a cognitive tunnel or weakening human responsibility.

---

## 1. Core Idea and Hybrid Model

The Governed Preparation Route is a controlled acceleration mechanism inside RABA.

It allows AI to prepare the decision environment before human approval, but it is strictly forbidden from creating external consequences, legal obligations, irreversible records, financial commitments, or business facts before an accountable human decision is made.

Architecturally, this is not a separate top-level Approval State. A separate state would overcomplicate the state machine and blur the distinction between accountability status and preparation route.

Instead, Governed Preparation is executed as a specific Governance Gateway Route bound by mandatory execution-lock metadata.

Core rule:

> Governed Preparation may prepare the decision environment.  
> Governed Preparation must not create facts that constrain the accountable decision.  
> Governed Preparation must not create a cognitive tunnel that makes human review purely formal.

A cognitive tunnel occurs when AI preparation is so complete, polished, or selectively framed that human review remains formally present but becomes practically absent.

---

## 2. Why This Matters

Organizations face a tension between machine speed and human responsibility.

Business teams demand:

- faster response times;
- shorter review cycles;
- reduced operational friction;
- more AI assistance;
- lower manual preparation effort.

Governance requires:

- human accountability;
- auditability;
- traceability;
- approval before external action;
- prevention of irreversible AI actions;
- protection against rubber-stamp review.

The Governed Preparation Route resolves part of this tension by allowing AI to do heavy context lifting at machine speed while maintaining a hard technical boundary before any action is committed.

In simple terms:

> AI can accelerate preparation before the decision.  
> AI must not make or execute the accountable decision unless explicitly authorized.

---

## 3. Allowed Actions: What Preparation Is

AI may perform preparatory, reversible, non-binding actions inside this route.

Allowed examples:

- summarize customer history and ticket logs;
- classify issue types;
- detect sentiment signals;
- gather internal evidence packages;
- link relevant policies;
- identify risk flags;
- identify policy mismatches;
- identify anomalies;
- calculate possible options;
- draft proposed response text in an isolated workspace;
- pre-fill non-committed draft fields in a shadow environment;
- surface missing evidence or conflicting facts.

The output of Governed Preparation should help the responsible human make a faster, better, and more accountable decision.

---

## 4. Prohibited Actions: What Preparation Is Not

Governed Preparation must never cross the action boundary.

AI must not:

- send external communications;
- notify clients or external parties;
- promise refunds, compensation, or resource allocation;
- modify master customer records;
- update final CRM statuses;
- trigger downstream workflows that are practically or technically irreversible;
- commit financial assets;
- create organizational obligations;
- change routing policy;
- silently expand Fast Path eligibility;
- communicate a likely decision outcome to an external party.

Governed Preparation is preparation before decision. It is not hidden execution.

---

## 5. Technical Implementation and Gateway Metadata

When a workflow enters the preparation route, the Governance Gateway enforces the following metadata footprint on the transaction object:

```json
{
  "approval_state": "DRAFT",
  "route": "governed_preparation",
  "boundary_status": "not_crossed",
  "execution_locked": true,
  "prepared_by": "AI",
  "requires_human_authorization": true,
  "shadow_state_isolated": true
}
```

Any execution API or write-action invoked while `execution_locked == true` and `route == governed_preparation` must be hard-blocked by the gateway at the infrastructure level.

This keeps the Approval State model clean while making the preparation route visible, enforceable, and auditable.

---

## 6. Shadow Object

The Shadow Object is the isolated preparation container where AI-generated drafts, evidence packages, risk flags, and recommendation material are stored before human authorization.

The Shadow Object must not be a live execution object.

It must not auto-save into a customer-facing system, trigger downstream workflows, or modify master records.

Minimum Shadow Object manifest:

```json
{
  "shadow_object_id": "shadow_123",
  "source_action_id": "action_456",
  "created_by": "AI",
  "route": "governed_preparation",
  "execution_locked": true,
  "merge_requires_human_authorization": true,
  "allowed_merge_targets": [
    "customer_reply_draft",
    "internal_case_note"
  ],
  "prohibited_merge_targets": [
    "sent_customer_message",
    "final_crm_status",
    "refund_execution",
    "payment_commitment"
  ],
  "prepared_content": {
    "summary": "...",
    "draft_response": "...",
    "recommendation": "..."
  },
  "evidence_refs": [],
  "risk_flags": [],
  "context_completeness_status": "complete | partial | unknown",
  "human_merge_authorization": null,
  "created_at": "..."
}
```

A complete Shadow Object schema should be created as a follow-up artifact if the pattern is accepted.

---

## 7. Preparation Safety Requirements: Anti-Tunneling Guards

To prevent human reviewers from blindly approving AI-generated outputs, the architecture mandates three safety layers.

### 7.1 Managed Cognitive Friction

Governed Preparation must protect against rubber-stamp approval.

A well-prepared AI decision package can create the illusion that the decision has already been made. This may reduce human review to a formal click.

For medium-to-high risk categories, the gateway should enforce Cognitive Friction.

Cognitive Friction should not depend on the same AI acting as an independent critic of its own output.

The same AI system that prepares a recommendation may surface uncertainty, missing evidence, and possible conflicts, but it must not be treated as an independent validator of its own output.

Preferred mechanisms:

- require the reviewer to open the evidence section before approval;
- require a short human reason for approval;
- require confirmation that specific source categories were reviewed;
- require the reviewer to acknowledge unresolved uncertainty;
- require independent policy-rule checks where available;
- require comparison against source records rather than only AI summary;
- show system-detected conflicting facts or anomaly signals;
- show missing source warnings;
- delay or disable one-click approval for elevated-risk cases;
- require escalation when evidence is incomplete or reversibility is uncertain.

AI may prepare alternative options or highlight possible weaknesses, but those outputs are preparation signals, not independent validation.

Core principle:

> AI may help expose uncertainty.  
> AI must not be treated as an independent reviewer of its own recommendation.

### 7.2 Context Truncation and Confidence Guards

AI text generation can mask missing data with high linguistic confidence.

RABA prevents this distorted reality risk through explicit data status flags.

If the context window is full, source systems fail, or only partial history is available, the transaction must expose this fact.

Possible flags:

```json
{
  "partial_context_analyzed": true,
  "context_window_truncated": true,
  "missing_sources": ["prior_ticket_history", "refund_history"],
  "evidence_confidence": "low",
  "source_coverage": "last_30_days_only"
}
```

The UI must display a visible warning when confidence is low or data is missing.

Example warning:

> Warning: AI analyzed only the last 30 days. Prior history is unverified.

Governed Preparation must not present incomplete context as complete.

### 7.3 UI and Environment Isolation

Governed Preparation must not occur inside a live execution UI where a draft can accidentally become an action.

Modern CRM, ticketing, or workflow systems may include:

- auto-save behavior;
- keyboard shortcuts;
- visible drafts;
- automatic workflow triggers;
- CRM status changes;
- hidden side effects.

Therefore, AI outputs must be written into a read-only Shadow Object or isolated workspace sandbox.

Only after explicit human approval may the gateway execute a secure merge operation, transferring approved content into active system fields.

Governed Preparation must never have direct access to UI elements or APIs that can:

- send a customer message;
- publish a draft externally;
- auto-save into a legally significant record;
- change a customer status;
- trigger a downstream workflow;
- reserve money;
- commit a refund;
- create external reliance.

---

## 8. Permission Boundary

Governance must be machine-enforceable, not just written in policy documents.

Governed Preparation may have read-only access to:

- CRM data;
- ticket histories;
- BI systems;
- policy repositories;
- customer history;
- evidence sources;
- draft sandbox;
- anomaly detection outputs.

Governed Preparation must have no access to:

- messaging SMTP/API;
- customer notification systems;
- payment processing networks;
- refund execution APIs;
- final database update triggers;
- master CRM write fields;
- configuration management tools;
- policy modification tools;
- live execution UI controls.

Permission boundaries must be enforced at the infrastructure level, not only through prompt instructions.

---

## 9. Route Transition Rule

A workflow that begins in Governed Preparation must not silently transition to Fast Path.

Any transition from Governed Preparation to Fast Path requires:

- explicit Governance Gateway re-evaluation;
- current policy version check;
- reversibility check;
- policy owner-defined eligibility;
- Responsibility Event Stream logging;
- Decision Log entry if the transition changes action-class routing policy or materially expands autonomy.

Silent transition from preparation to execution is a governance drift vector.

---

## 10. Responsibility Event Stream and Decision Log

Every preparation cycle must emit events for auditing human-AI collaboration.

Suggested events:

```text
bypass_preparation_started
context_completeness_verified
bypass_context_truncated
evidence_confidence_low
conflicting_facts_detected
cognitive_friction_applied
shadow_object_created
shadow_state_merge_requested
shadow_state_merged_by_human
preparation_to_review_path_routed
preparation_blocked_due_to_external_effect
```

If the preparation leads to an action, the final Decision Log must capture:

1. What the AI recommended.
2. What evidence was presented.
3. What preparation quality signals were visible.
4. What alternative options or uncertainty signals were shown.
5. Any changes the human made to the draft.
6. The identity of the authorizing human.
7. The timestamp of authorization.
8. What was executed after authorization.

---

## 11. Valid Shadow Object Merge Authorization

Shadow Object merge is the moment where prepared AI output may move from isolated preparation into an active system surface.

A simple Approve button is not sufficient authorization for medium or high-risk workflows.

Valid merge authorization requires all of the following:

1. **Named human identity**  
   Authorization must be linked to a named human identity, not only a role, shared account, session token, or anonymous approval event.

2. **Active Evidence Interlock completion**  
   The reviewer must interact with original source data or required evidence surfaces before merge is enabled. This may include opening the original ticket, source document, raw customer record, policy source, or conflict evidence.

3. **Explicit positive authorization action**  
   Merge must require a deliberate action such as `Authorize Merge` or `Approve and Merge`. It must not occur through timeout, auto-save, inactivity, default selection, or hidden workflow progression.

4. **Reason capture for medium and high-risk actions**  
   The reviewer must enter a reason, select an applicable policy basis, or confirm a structured decision reason before merge.

5. **Context completeness acknowledgment**  
   If `partial_context_analyzed == true`, `context_window_truncated == true`, or required sources are missing, the reviewer must explicitly acknowledge this before authorization is accepted.

6. **Conflict acknowledgment**  
   If `conflicting_facts_detected == true`, the reviewer must acknowledge the conflict and confirm why merge is still appropriate.

7. **Timestamped authorization record**  
   The merge authorization event must be timestamped and linked to the Shadow Object, source action, reviewer identity, and active policy version.

Minimum merge authorization metadata:

```json
{
  "shadow_object_id": "shadow_123",
  "source_action_id": "action_456",
  "merge_authorized_by": "named_human_id",
  "merge_authorized_at": "timestamp",
  "source_data_viewed": true,
  "active_interlock_completed": true,
  "interlock_evidence_refs": ["original_ticket", "policy_source"],
  "human_reason_captured": true,
  "context_warning_acknowledged": true,
  "conflict_acknowledged": true,
  "policy_version": "policy_v1.4",
  "decision_log_entry_required": true
}
```

The following must not count as valid merge authorization:

- timeout;
- auto-save;
- inactivity;
- generic session approval;
- role-only approval without named identity;
- approval without completed active interlock;
- approval while context warnings remain unacknowledged;
- approval while conflict warnings remain unacknowledged;
- delegation without explicit transfer of authority.

Core rule:

> Shadow Object merge requires evidence of human engagement with source material, not only evidence of a button click.

---

## 12. Rubber-Stamp Drift Detection

RABA proposes automated rubber-stamp drift detection through a policy-owned threshold matrix.

A single threshold such as `N approvals below T seconds` is insufficient for production governance.

The same short approval time means different things depending on workflow type, risk class, reviewer role, evidence complexity, and time window. A flat threshold can over-trigger on routine work and under-trigger on critical cases.

Rubber-stamp drift thresholds are governance policy parameters, not technical constants.

They must be owned by a named policy owner, versioned, auditable, and changed only through a documented policy-change process.

Telemetry detects anomalies. Humans evaluate accountability.

Rubber-stamp telemetry is an escalation signal, not an automated judgment of reviewer competence.

AI may collect telemetry and recommend threshold review. AI must not approve, activate, or silently apply threshold changes.

### 12.1 Risk and Complexity Are Separate Dimensions

`risk_class` and `case_complexity_score` measure different things.

`risk_class` describes the consequence of a wrong decision.

`case_complexity_score` describes the effort required to review the evidence.

A high-risk case may be simple to review if the evidence is short and clear. A low-risk case may be complex to review if it includes many sources, conflicting facts, or long history.

RABA should therefore treat them as separate dimensions:

```text
risk_class → determines friction requirements
case_complexity_score → determines minimum feasible review time
```

For medium and high-risk workflows, `case_complexity_score` should be required because review time cannot be meaningfully evaluated from risk alone.

`case_complexity_score` must be computed through deterministic or independently controlled signals, not subjective LLM self-assessment.

Allowed inputs include word count, source count, attachment count, number of systems involved, conflicting facts, missing sources, policy exception count, and affected records.

The preparation AI may suggest that complexity should be reviewed, but it must not assign the authoritative complexity score for its own output.

Core rule:

> AI must not decide how much human review time its own recommendation deserves.

### 12.2 Threshold Matrix Model

RABA should evaluate rubber-stamp drift using a condition matrix:

```text
approval_time_seconds
× risk_class
× reviewer_role
× workflow_type
× rolling_time_window
× case_complexity_score
→ pattern trigger
→ response action
```

Suggested matrix configuration:

```json
{
  "rubber_stamp_drift_detection": {
    "enabled": true,
    "evaluation_model": "threshold_matrix",
    "policy_version": "rubber_stamp_detection_v1.0",
    "owner_id": "policy_owner_id",
    "technical_owner_id": "system_administrator_id",
    "reviewer_id": "independent_reviewer_id",
    "requires_independent_review_for_threshold_change": true,
    "effective_date": "2026-05-24",
    "review_date": "2026-06-24",
    "rollback_procedure": "restore_previous_threshold_version_and_generate_post_audit_report",
    "conditions": [
      {
        "workflow_type": "customer_support_compensation_review",
        "risk_class": "medium",
        "reviewer_role": "support_manager",
        "case_complexity_score": "medium",
        "rolling_time_window_minutes": 30,
        "minimum_review_time": {
          "calculation_method": "complexity_based_with_risk_adjustment",
          "base_time_from_complexity_seconds": 180,
          "risk_adjustment_seconds": 75,
          "evidence_word_count": 850,
          "source_count": 4,
          "contains_policy_exception": false,
          "contains_conflicting_facts": true,
          "minimum_review_time_seconds": 255
        },
        "pattern_trigger": {
          "approvals_below_minimum_time": 10,
          "within_time_window_minutes": 30
        },
        "active_interlock_required": true,
        "response_action": "increase_friction_and_notify_policy_owner"
      },
      {
        "workflow_type": "policy_exception_review",
        "risk_class": "high",
        "reviewer_role": "supervisor",
        "case_complexity_score": "high",
        "rolling_time_window_minutes": 60,
        "minimum_review_time": {
          "calculation_method": "complexity_based_with_risk_adjustment",
          "base_time_from_complexity_seconds": 300,
          "risk_adjustment_seconds": 60,
          "evidence_word_count": 1200,
          "source_count": 6,
          "contains_policy_exception": true,
          "contains_conflicting_facts": true,
          "minimum_review_time_seconds": 360
        },
        "pattern_trigger": {
          "approvals_below_minimum_time": 3,
          "within_time_window_minutes": 60
        },
        "active_interlock_required": true,
        "response_action": "temporary_review_hold_and_escalate"
      }
    ]
  }
}
```

### 12.3 Dynamic Minimum Review Time

The review time threshold must not be a fixed universal constant.

It should be computed from case complexity and adjusted by risk.

Complexity inputs may include:

- evidence word count;
- source count;
- attachment count;
- conflicting facts;
- missing sources;
- context completeness status;
- policy exception count;
- number of affected records;
- number of systems involved.

Risk inputs may include:

- financial exposure;
- legal consequence;
- external reliance;
- customer impact;
- reversibility classification;
- regulatory sensitivity.

This value is not a productivity target. It is a drift signal.

### 12.4 Active Interlock and Anti-Gamification

Time-based telemetry must be combined with Active Interlock signals.

Waiting longer than the threshold is not sufficient evidence of meaningful review.

Active Interlock may require:

- opening the evidence package;
- opening at least one source document;
- acknowledging context warnings;
- reviewing conflicting facts;
- selecting or confirming the applied policy;
- entering a reason for approval;
- modifying or explicitly confirming critical fields.

This prevents a reviewer from simply waiting `T + 1` seconds and approving without meaningful review.

### 12.5 Response Actions

Rubber-stamp drift detection should produce actionable governance responses.

Possible response actions:

- increase friction level for the reviewer role and workflow type;
- disable one-click approval for the affected action class;
- require text justification for the next approvals;
- notify the policy owner;
- notify the reviewer’s supervisor;
- trigger a policy review;
- create a human audit queue;
- temporarily hold review authority for the affected workflow if the pattern repeats.

The system may raise friction and trigger human review, but final evaluation of reviewer conduct belongs to human governance roles.

### 12.6 Threshold Ownership, Versioning, and Lifecycle Control

Threshold values are policy decisions, not technical defaults.

RABA should distinguish:

- policy owner — defines or approves thresholds; recommended organizational mapping: Business / Operations Lead;
- system administrator — implements configuration; recommended organizational mapping: IT Operations;
- independent reviewer — approves material threshold changes where required; recommended organizational mapping: Risk / Compliance Officer;
- auditor — reviews threshold changes and drift patterns.

Policy Owner and Independent Reviewer should not be the same person for material threshold changes.

The Policy Owner is responsible for initiating scheduled threshold review on the `review_date`, even if no change request has been submitted.

Threshold configuration must be versioned.

A threshold change should emit Responsibility Event Stream events such as:

```text
threshold_modified
threshold_change_requested
threshold_change_approved
threshold_version_updated
threshold_review_due
threshold_relaxation_requested
threshold_relaxation_approved
threshold_relaxation_rejected
threshold_relaxation_detected
policy_integrity_review_triggered
threshold_rollback_executed
threshold_remediation_report_generated
```

Every threshold modification, including minor technical edits, typo fixes, or non-material adjustments, must be recorded as a policy change event.

Material threshold changes should be recorded in the Decision Log with:

- named policy owner;
- reason;
- prior value;
- new value;
- effective date;
- scheduled review date;
- independent reviewer if required;
- rollback procedure;
- remediation requirement if the change is later rolled back.

A threshold value without documented justification is not auditable.

Threshold relaxation must not activate automatically.

Any relaxation must trigger `policy_integrity_review_triggered` and remain pending until Independent Reviewer approval is recorded in the system log.

Threshold relaxation includes any change that makes drift detection less likely, slower, narrower, easier to satisfy, easier to bypass, or less forceful in response.

Examples include:

- lowering `minimum_review_time_seconds`;
- increasing the number of fast approvals required before trigger;
- narrowing the risk classes or workflow types covered;
- removing or weakening Active Interlock;
- downgrading response action from block or escalation to log-only;
- changing the detection window in a way that makes the pattern harder to detect.

Threshold tightening may be applied as a protective control, but it must still be logged and reviewed if it materially affects workflow operations.

This creates a general RABA principle:

> Relaxation of governance controls requires justification before activation.  
> Protective tightening may be faster, but must remain traceable.

Without versioned threshold governance, the drift detector can itself drift.

### 12.7 Rollback and Remediation

Rollback restores the threshold configuration. It does not automatically repair decisions already approved while the weakened threshold was active.

When a threshold rollback is executed, the system must generate a report of decisions approved during the weakened-threshold period.

That report should include:

- affected workflow type;
- threshold version active at the time;
- approval timestamps;
- reviewer role;
- risk class;
- case complexity score;
- whether Active Interlock was completed;
- whether approval time was below the restored threshold;
- resulting business action.

Rollback always triggers remediation review, but not necessarily 100% manual review.

Default remediation mode: Sampled Post-Audit.

Suggested default: at least 15% of decisions approved during the weakened-threshold period, with higher sampling for high-risk or high-complexity cases.

Remediation reports may be generated automatically, but remediation scope and action are human governance decisions only.

AI must not classify decisions from the weakened period as requiring or not requiring review as a final decision.

Rollback therefore has two parts:

```text
configuration rollback
+ remediation review of decisions made during weakened control period
```

This prevents rollback from becoming a purely technical restoration that leaves governance consequences unresolved.

---

## 13. Policy Drift Risks

The implementation must actively monitor for:

### Erosion Drift

Pre-filled fields slowly creep from suggestions into default choices.

### Rubber-Stamp Drift

Review times drop below the practical threshold required for a human to read the evidence.

### Language Drift

AI uses presumptive language in drafts, such as:

> We have issued your refund.

instead of:

> A refund option has been prepared for review.

### Context Tunnel Drift

AI summaries become the human reviewer’s primary reality, while omitted or contradictory facts disappear from the decision interface.

### Permission Creep

Preparation tools gradually receive access to execution APIs for convenience.

### Drift Detector Drift

Thresholds for detecting rubber-stamp behavior are relaxed without policy owner approval, versioning, independent review, or Decision Log record.

### Meta-Rubber-Stamping

AI proposes threshold relaxation and the organization accepts it without human policy-owner review, allowing AI-generated operational convenience signals to weaken human oversight.

### Rollback Without Remediation

A weakened threshold is rolled back technically, but decisions approved during the weakened-threshold period are never identified or reviewed.

### Invalid Merge Authorization

A Shadow Object is merged into an active system through a button click, timeout, auto-save, or unacknowledged context warning rather than evidence of meaningful human authorization.

These are Policy Integrity risks and must trigger review.

---

## 14. Example: Customer Support Workflow

A customer complains repeatedly about delivery problems.

The AI system detects the pattern and prepares support recommendations.

Allowed in Governed Preparation:

- summarize previous tickets;
- identify repeated delivery issues;
- collect BI signals;
- prepare a draft reply in an isolated workspace;
- suggest possible compensation options;
- show customer history;
- check policy match;
- flag sensitive, VIP, vulnerable, legal-risk, or high-value cases;
- surface missing evidence or conflicting customer history.

Not allowed in Governed Preparation:

- send the reply to the customer;
- promise compensation;
- issue a refund;
- update CRM status as resolved;
- create a legally significant complaint record;
- trigger a compensation workflow;
- tell the customer compensation is likely;
- hide missing context from the reviewer.

Correct pattern:

```text
AI prepares context in Shadow Object
→ AI surfaces evidence, risks, missing context, and conflicts
→ Governance Gateway checks boundary
→ Active Evidence Interlock is completed
→ Cognitive Friction is applied if risk requires it
→ Human manager approves / modifies / rejects
→ Gateway executes secure merge only after valid authorization
→ Decision Log records approval, reason, and execution
```

---

## 15. Open Questions for G and K — Drift Detection Thresholds

The following questions are not only technical configuration questions. They test whether drift detection itself is protected from governance drift.

### 1. Parameter sufficiency

Is `risk_class` sufficient as a condition, or should `case_complexity_score` be required as a mandatory additional parameter for all medium and high-risk workflows?

Recommendation: `case_complexity_score` should be required for medium and high-risk workflows, and it should be computed by deterministic or independently controlled signals rather than subjective LLM self-assessment.

### 2. Threshold ownership

Proposed split:

- Policy owner defines threshold values.
- System administrator implements them technically.
- Independent reviewer approves any change before activation.

Is this three-role model appropriate for your organization, or should ownership be consolidated or extended?

Recommendation: the three-role model should be preserved for material threshold changes. Policy Owner and Independent Reviewer should not be the same person.

### 3. Threshold changes as policy events

Should every threshold modification be recorded as a policy change event in the Responsibility Event Stream and Decision Log?

Recommendation: yes. A threshold change is a governance decision, not a technical update. It must be traceable.

### 4. Threshold relaxation as integrity trigger

Should any relaxation of a threshold — increasing tolerance, narrowing detection, removing interlock, weakening response action, or otherwise making drift detection less likely — automatically initiate a Policy Integrity review before the change takes effect?

Recommendation: yes. Relaxation is the highest-risk configuration change in a drift detection system. It must not be silent or deployable without Independent Reviewer approval.

### 5. Change lifecycle requirements

Should all threshold matrix changes require:

- effective date, when the change activates;
- scheduled review date, when it must be re-evaluated;
- rollback rule, conditions under which the previous threshold is automatically restored?

Recommendation: yes. Without these three controls, threshold history becomes unauditable and rollback becomes manual and contested.

### 6. Remediation after rollback

When a threshold rollback occurs, should RABA require a post-audit report for decisions approved during the weakened-threshold period?

Recommendation: yes. Rollback restores configuration, but it does not automatically repair decisions already made under weakened controls. Default remediation should be Sampled Post-Audit, with higher sampling for high-risk or high-complexity cases.

### 7. AI role in threshold governance

Should AI be allowed to recommend threshold review while being prohibited from approving, activating, or silently applying threshold changes?

Recommendation: yes. AI may provide BI signals, but threshold changes must remain human policy decisions.

### 8. Valid Shadow Object merge authorization

What should count as valid human authorization to merge Shadow Object content into the active system?

Recommendation: valid merge authorization requires named human identity, completed Active Evidence Interlock, explicit positive authorization action, reason capture for medium/high-risk actions, context completeness acknowledgment when required, conflict acknowledgment when required, and timestamped authorization record.

---

## 16. Draft Recommendation

Governed Preparation should be implemented in RABA as a controlled Governance Gateway route with mandatory execution-lock metadata and Shadow Object isolation.

It should not be treated as a shortcut around responsibility.

Recommended position:

> Governed Preparation is allowed only before the action boundary.  
> It may prepare evidence, drafts, classifications, risk flags, and recommendations.  
> It must not execute, promise, commit, notify, modify, or create obligations.  
> It must not create a cognitive tunnel that makes human review purely formal.  
> Any attempt to cross the action boundary must be routed to Review Path, Escalation Path, Fast Path if explicitly eligible, or Block.  
> Shadow Object merge requires valid human authorization with Active Evidence Interlock.

This gives RABA a strong answer to the business demand for speed:

> We can accelerate preparation without weakening accountability.

---

## 17. Short Version

Governed Preparation is not “AI acts without approval”.

It is:

> AI prepares everything needed for a responsible human decision, but cannot create external consequences before authorization.

The implementation requires:

- Gateway route control;
- execution lock;
- Shadow Object isolation;
- Active Evidence Interlock before merge;
- valid human merge authorization;
- cognitive friction;
- context completeness warnings;
- independent or structured validation checks;
- deterministic or independently controlled case complexity scoring;
- policy-owned rubber-stamp drift threshold matrix;
- separation of risk class and case complexity score;
- threshold ownership, versioning, and lifecycle control;
- relaxation review before activation;
- rollback plus Sampled Post-Audit remediation review;
- Decision Log traceability.

This pattern may become one of RABA’s strongest practical mechanisms because it protects both speed and responsibility.
