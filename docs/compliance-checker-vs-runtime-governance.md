# Compliance Checker vs Runtime Governance

This document clarifies how RABA relates to classical AI compliance-checker frameworks.

It is not a critique of compliance work.

It positions RABA as a complementary runtime governance layer.

---

## Core Distinction

```text
Compliance checkers determine whether an AI agent may be deployed.
RABA governs responsibility when the AI agent acts.
```

Another formulation:

```text
Static compliance sets the floor.
Runtime governance controls the crossing.
```

---

## What Classical Compliance Checkers Do Well

AI compliance-checker frameworks are valuable because they help organizations assess whether an AI system or AI agent is allowed, restricted, high-risk or subject to specific controls before deployment.

They are especially useful for:

- regulatory mapping;
- EU AI Act risk classification;
- GDPR / data protection review;
- NIS2 / cybersecurity context;
- DORA / operational resilience context;
- documentation requirements;
- pre-deployment checklists;
- approval gates before introducing an AI agent into an organization.

This is an important layer.

RABA should not replace it.

---

## Where the Gap Appears

Pre-deployment compliance answers questions such as:

```text
May this AI agent be deployed?
What risk class does it belong to?
What documents and controls are required?
```

But once an AI agent is operating, organizations face a different question:

```text
Who is responsible for each AI-supported action?
```

Runtime operation introduces questions that a static pre-assessment cannot fully answer:

- What action is being proposed now?
- What boundary does this action cross?
- Is the action only a draft, a recommendation, an authorization, or an execution?
- What uncertainty remains in this specific situation?
- Who has authority to accept this risk?
- When should the action escalate?
- What decision record is created?
- What happens after execution?

This is the space where RABA operates.

---

## Complementary Stack

RABA can be understood as an operational layer above baseline compliance.

```text
Pre-deployment Compliance
  ↓
Baseline Controls and Policies
  ↓
Runtime Governance
  ↓
Responsibility Management Interface
  ↓
Decision Log / Responsibility Event Stream
  ↓
Post-action Auditability
```

A compliance checker may say:

```text
This AI agent may be deployed under defined conditions.
```

RABA then asks:

```text
Can this specific AI-supported action responsibly cross this boundary now?
```

---

## Comparison Table

| Area | Classical Compliance Checker | RABA |
|---|---|---|
| Main question | May the AI agent be deployed? | Who is responsible when the AI agent acts? |
| Timing | Pre-deployment / periodic review | Runtime / action-by-action governance |
| Primary audience | Legal, compliance, risk, security | Operations, product, risk, engineering, accountable owners |
| Risk handling | Classification and control requirements | Governed uncertainty and authorized risk |
| Human oversight | Often stated as a requirement | Modeled through interface, approval states and decision log |
| Auditability | Documentation and logs | Decision Log plus Responsibility Event Stream |
| Escalation | Usually a process requirement | Explicit state / path in the action lifecycle |
| Interface focus | Questionnaire / checklist | Responsibility Review Panel |
| After execution | Often limited | Post-action traceability and follow-up responsibility |

---

## Baseline Compliance vs Runtime Governance

RABA should separate two layers in the interface and data model.

### Baseline Compliance

Baseline Compliance summarizes static or semi-static constraints.

It answers:

```text
Is this class of action allowed, restricted, prohibited or allowed with conditions?
```

Example:

```json
{
  "status": "allowed_with_conditions",
  "sources": ["GDPR", "EU AI Act", "Internal Customer Communication Policy"],
  "required_controls": [
    "human_review",
    "decision_log",
    "escalation_path"
  ]
}
```

---

### Runtime Governance

Runtime Governance evaluates the concrete action in context.

It answers:

```text
May this specific action progress now?
```

Example:

```json
{
  "approval_state": "RECOMMEND",
  "action_boundary": "external_customer_communication",
  "risk_level": "medium",
  "uncertainty_state": "known_and_bounded",
  "allowed_next_states": [
    "AUTHORIZED",
    "ESCALATE",
    "REQUEST_MORE_CONTEXT"
  ]
}
```

---

## Interface Implication

The Responsibility Review Panel should not force the operator to complete a full legal checklist at every action.

Instead, it should show a compact baseline compliance summary and focus the operator on the runtime decision.

Example panel structure:

```text
Action Statement
Boundary Signal
Runtime Risk / Uncertainty
Responsible Subject
Baseline Compliance Summary
Decision Options
```

The Baseline Compliance panel may show:

```text
Status: allowed with conditions
Sources: GDPR / EU AI Act / internal policy
Required controls: human review, decision log, escalation path
```

The Runtime Governance panel should show:

```text
Approval State: RECOMMEND
Boundary: external customer communication
Uncertainty: known and bounded
Risk: medium
Allowed next states: AUTHORIZE / ESCALATE / REQUEST_CONTEXT
```

---

## What RABA Should Avoid

RABA should not become only another static compliance questionnaire.

Avoid:

- replacing runtime governance with pre-deployment checklists;
- treating legal classification as sufficient for action-level responsibility;
- assuming human oversight is real merely because it is required by policy;
- hiding concrete action uncertainty behind broad risk categories;
- treating technical logs as a substitute for business decision records;
- ending responsibility at deployment approval.

---

## Strategic Position

RABA is not positioned against compliance checkers.

It can sit above them as an operational governance layer.

```text
Compliance checker tells the organization what the rules and baseline constraints are.
RABA shows whether this AI-supported action can responsibly cross the boundary now.
```

This allows RABA to integrate regulatory context without being reduced to regulatory paperwork.

---

## One-Sentence Summary

> RABA does not replace baseline compliance assessment; it operationalizes responsibility at the moment AI-supported action moves toward business effect.
