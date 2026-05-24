# Governed Speed Safety Controls

## 1. Core Thesis

Governed Speed is valuable only if the system can also prevent biased human review, stop speed at the macro level, and remediate at the scale at which automation can create harm.

RABA therefore treats speed protection as a two-sided responsibility:

1. protect useful automation speed where it is accountable;
2. stop or degrade that speed quickly when the action class, model, policy, or operating environment becomes unsafe.

> Governed speed must include governed stopping.

---

## 2. Why This Layer Is Needed

The Responsibility Throughput Model defines Fast Path, Review Path, Escalation Path, Block, and Governed Bypass Lane.

Those concepts solve the problem of ordinary routing. But they also create three systemic risks:

1. **Bypass Bias** — the system may prepare a decision brief that subtly steers the human toward the AI's original action intent.
2. **Fast Path Flood** — a broken model, data source, policy rule, or integration can create thousands of wrong actions before humans notice.
3. **Remediation Scale Gap** — an action may be reversible for one case but not operationally reversible for thousands or millions of cases.

This document adds safety controls for those risks.

---

## 3. Evidence Neutrality in Governed Bypass Lane

The Governed Bypass Lane keeps safe supporting work moving while the final action waits for review.

However, bypass processing must not manipulate the human decision through selective evidence, framing, tone, or summary structure.

RABA therefore requires **Evidence Neutrality**.

### 3.1 Definition

Evidence Neutrality means that a decision brief prepared during bypass processing must separate:

- facts;
- AI interpretation;
- uncertainty;
- missing data;
- arguments supporting the action intent;
- arguments against the action intent;
- alternatives;
- expected consequences;
- remediation options.

The brief must not hide, down-rank, or soften evidence that contradicts the AI's initial recommendation.

### 3.2 Required Decision Brief Structure

A governed bypass decision brief should use a structure such as:

```markdown
## Proposed Action
[What the AI/system proposes]

## Facts
[Observed events, data points, timestamps, sources]

## AI Interpretation
[How the AI interprets the facts]

## Evidence Supporting the Proposed Action
[Signals that support the action]

## Evidence Against the Proposed Action
[Signals that weaken or contradict the action]

## Missing or Uncertain Information
[Data gaps, conflicts, low-confidence elements]

## Alternatives
[Less harmful, more reversible, or more conservative options]

## Real-World Consequences
[Likely impact if approved]

## Remediation Options
[How the action could be reversed or repaired]

## Reviewer Decision
[Approve / modify / reject / escalate]
```

### 3.3 Red Team Requirement

For high-impact or disputed cases, the bypass lane should force a red-team step:

> Generate the strongest reasonable argument against the proposed action before the human reviewer decides.

This does not mean the AI must be adversarial in every routine case. It means that when the action has meaningful impact, the reviewer should see both the best case for the action and the best case against it.

### 3.4 Tone Control

Decision briefs must avoid manipulative tone.

Problematic patterns include:

- “Clearly fraudulent” when the evidence is incomplete;
- “Safe to approve” when real-world reversibility is partial;
- burying uncertainty below the main recommendation;
- emphasizing confidence without showing data quality;
- presenting the AI's conclusion as the default human decision.

Neutral structure is part of responsibility.

---

## 4. Governance Circuit Breaker

Fast Path can become dangerous when a systemic failure occurs.

A single wrong action may be reversible. A flood of wrong actions may become operationally irreversible.

RABA therefore introduces a **Governance Circuit Breaker**.

### 4.1 Definition

A Governance Circuit Breaker is a macro-level safety mechanism that automatically degrades, pauses, or blocks an action class when predefined anomaly, error, drift, incident, or remediation-capacity thresholds are exceeded.

It is not an ordinary approval step. It is a system-level protection against cascading harm.

### 4.2 What It Can Do

A circuit breaker may:

- move an action class from Fast Path to Review Path;
- move an action class from Review Path to Escalation Path;
- block final external actions while allowing governed bypass preparation;
- pause delegated autonomy;
- reduce policy limits temporarily;
- require human approval for all actions in the affected class;
- trigger incident response and mass remediation playbooks.

### 4.3 Trigger Examples

Circuit breaker triggers may include:

- sudden error-rate spike;
- audit sample failure above threshold;
- unusual action volume;
- customer complaint spike;
- model version change;
- prompt/template change;
- data-source failure;
- downstream integration anomaly;
- remediation SLA breach;
- repeated boundary violations;
- drift detected in production;
- external incident or regulatory alert.

### 4.4 Time-to-Halt

Every high-volume Fast Path action class should define a **Time-to-Halt** target:

> the maximum acceptable time between detecting a cascading failure signal and fully stopping or degrading the affected Fast Path.

Examples:

| Action class | Example Time-to-Halt |
|---|---:|
| Customer-facing message sending | seconds to minutes |
| Low-value refunds | minutes |
| Access-right changes | seconds to minutes |
| Internal classification | minutes to hours |
| Safety-relevant operations | immediate or near-immediate |

Time-to-Halt is a product metric and a governance metric.

### 4.5 Circuit Breaker Ownership

A circuit breaker should have:

- owner role;
- trigger policy;
- affected action classes;
- allowed automatic degradation behavior;
- notification path;
- escalation owner;
- restart criteria;
- audit record;
- post-incident review requirement.

Restarting a paused Fast Path should require a governed decision, not only technical recovery.

---

## 5. Mass Remediation Playbook

Fast Path can create harm at machine scale. Corrective Duty must therefore be designed for scale.

RABA requires a **Mass Remediation Playbook** for action classes that may run at high volume.

### 5.1 Definition

A Mass Remediation Playbook is an approved plan for identifying, containing, reversing, communicating, and repairing many wrong actions created by the same failure pattern.

It answers:

- How many actions could be affected before the circuit breaker stops the path?
- How do we identify affected cases?
- Who owns the remediation decision?
- Who executes the remediation?
- What tooling is available for batch correction?
- What customer or stakeholder communication is required?
- What evidence must be preserved?
- How long can remediation take before escalation?
- What happens if remediation capacity is exceeded?

### 5.2 Remediation Capacity

Real-world reversibility must include capacity.

An action is not fully reversible in practice if the organization can reverse one case but cannot remediate the expected volume of wrong cases within an acceptable time.

Therefore, Fast Path eligibility should consider:

- maximum action volume per time window;
- expected remediation throughput;
- remediation staffing or automation capacity;
- batch remediation tooling;
- customer communication capacity;
- legal or compliance reporting capacity;
- worst-case exposure before circuit breaker activation.

### 5.3 Batch Remediation Requirement

For high-volume Fast Path actions, the organization should have tooling or procedures for batch remediation.

Examples:

- batch refund reversal or correction;
- mass status correction;
- bulk notification correction;
- access restoration;
- customer apology or clarification campaign;
- reprocessing queue;
- incident-specific decision log export.

If no credible mass remediation path exists, the action class should not be treated as fully real-world reversible.

---

## 6. Safety Conditions for Fast Path at Scale

Fast Path is acceptable only when both single-case and mass-case conditions are satisfied.

A high-volume Fast Path action class should have:

- deterministic path classification rules;
- real-world reversibility assessment;
- remediation capacity assessment;
- circuit breaker thresholds;
- Time-to-Halt target;
- mass remediation playbook;
- audit sampling plan;
- policy limit owner;
- monitoring after model, prompt, policy, or integration changes.

In short:

> If automation can scale harm, remediation and stopping power must scale too.

---

## 7. Suggested Schema Elements

```yaml
governed_speed_safety:
  action_class: "customer_refund"
  evidence_neutrality:
    required: true
    facts_separated_from_ai_interpretation: true
    supporting_evidence_required: true
    opposing_evidence_required: true
    missing_data_visible: true
    alternatives_required: true
    tone_neutrality_required: true
    red_team_argument_required_for_high_impact: true
  circuit_breaker:
    enabled: true
    owner_role: "Customer Operations Lead"
    time_to_halt_target: "5m"
    triggers:
      - "audit_error_rate_above_threshold"
      - "complaint_spike"
      - "unusual_action_volume"
      - "model_version_change_with_error_spike"
      - "remediation_sla_breach"
    automatic_degradation: "fast_path_to_review_path"
    affected_paths:
      - "fast_path"
    restart_requires_human_approval: true
    post_incident_review_required: true
  mass_remediation:
    playbook_required: true
    playbook_id: "MRP-CUSTOMER-REFUND-01"
    remediation_owner_role: "Process Owner"
    remediation_executor_role: "Finance Operations Lead"
    batch_remediation_available: true
    maximum_exposure_before_halt: 1000
    remediation_capacity_per_day: 5000
    customer_communication_required: true
    evidence_export_required: true
    escalation_if_capacity_exceeded: true
```

---

## 8. Relationship to Existing RABA Concepts

```text
Governed Speed
  ↓
Speed Protection
  ↓
Evidence Neutrality
  ↓
Governance Circuit Breaker
  ↓
Mass Remediation Playbook
```

- Governed Speed defines how actions move quickly where justified.
- Evidence Neutrality protects human review from biased bypass summaries.
- Governance Circuit Breaker protects the organization from Fast Path cascades.
- Mass Remediation Playbook ensures that reversibility is operationally scalable.

---

## 9. Principle Statement

**RABA Principle: Governed Speed Safety**

Fast automation is responsible only when the organization can stop it quickly, explain it neutrally, and remediate its failures at the scale at which the automation operates.

> No governed speed without governed stopping.  
> No bypass without evidence neutrality.  
> No Fast Path at scale without mass remediation capacity.
