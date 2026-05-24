# Governed Preparation Route Implementation Pattern

Project: Responsible AI Business Architecture (RABA)  
Status: Discussion Draft v2  
Internal shorthand: Governed Bypass Lane  
External-facing term: Governed Preparation Route  
Purpose: Define how AI may prepare decision context at speed without crossing the accountable action boundary.

---

## 1. Core Idea

The Governed Preparation Route is a controlled acceleration mechanism inside RABA.

It allows AI to prepare the decision environment before human authorization, but it must not allow AI to create external consequences, legal obligations, irreversible records, financial commitments, or business facts before an accountable human decision is made.

Core rule:

> AI may prepare the decision environment.  
> AI must not create facts that constrain the accountable decision.

The concept was originally discussed internally as the Governed Bypass Lane. For external-facing materials, RABA should prefer the term Governed Preparation Route, because "bypass" can imply circumvention of controls.

This route is not an escape from governance. It is a way to preserve speed before the action boundary is crossed.

---

## 2. Architecture Decision

RABA treats the Governed Preparation Route as a Governance Gateway route with execution-lock metadata, not as a separate top-level Approval State.

The action remains in DRAFT or RECOMMEND until human authorization.

Required metadata:

```text
approval_state = DRAFT / RECOMMEND
route = governed_preparation
boundary_status = not_crossed
execution_locked = true
prepared_by = AI
requires_human_authorization = true
```

This preserves the simplicity of the Approval State model while making AI preparation visible, auditable, and machine-enforceable.

The route answers the question:

> How may AI prepare context before the action boundary is crossed?

The Approval State answers a different question:

> What is the accountability status of the action?

These should not be collapsed into one concept.

---

## 3. Why This Matters

Organizations often face tension between speed and responsibility.

Business teams want:

- faster response times;
- less manual preparation;
- shorter review cycles;
- more AI assistance;
- reduced operational friction.

Governance teams require:

- human accountability;
- traceability;
- approval before external action;
- auditability;
- escalation for risky cases;
- prevention of irreversible AI actions.

The Governed Preparation Route resolves part of this tension.

It allows AI to do preparatory work at machine speed while preserving human control over the actual decision and execution boundary.

In simple terms:

> AI can accelerate everything before the decision.  
> AI must not make or execute the accountable decision unless explicitly authorized.

---

## 4. What Governed Preparation Is

Governed Preparation is a controlled route where AI may perform preparatory, reversible, non-binding actions before the accountable decision is made.

Allowed examples:

- summarize customer history;
- collect relevant records;
- classify issue type;
- draft a response;
- prepare evidence;
- identify risk flags;
- check policy match;
- calculate options;
- prepare a decision package;
- pre-fill non-committed draft fields in an isolated workspace;
- suggest possible next actions;
- prepare internal notes;
- identify escalation triggers;
- surface contradictory facts or anomalies.

The output should help the responsible human make a faster, better, and more accountable decision.

---

## 5. What Governed Preparation Is Not

Governed Preparation is not permission for AI to execute customer-facing, financial, legal, or irreversible actions.

It must not:

- send external messages;
- promise compensation;
- apply refunds;
- modify customer records;
- create legally significant records;
- reserve, block, or commit financial resources;
- trigger downstream workflows that cannot be reversed before approval;
- communicate a likely decision outcome to an external party;
- create obligations on behalf of the organization;
- change policy rules;
- silently expand Fast Path scope;
- prepare a cognitive tunnel that makes the human decision only formal.

Governed Preparation must not become hidden execution.

---

## 6. Boundary Rule

The central implementation question is:

> Does this AI action only prepare a decision, or does it create a fact that changes the business situation?

If the action only prepares context, it may be eligible for Governed Preparation.

If the action changes records, creates obligations, affects customers, commits resources, triggers downstream systems, or creates external reliance, it must leave Governed Preparation and be routed to Review Path, Escalation Path, Fast Path if explicitly eligible, or Block.

---

## 7. Reversibility Definition

Reversibility means the degree to which an action can be undone without material harm, legal consequence, financial loss, external reliance, or irreversible downstream effect.

For implementation, reversibility should be evaluated through the existing or planned `reversibility_profile`.

A preparation action may be considered eligible for Governed Preparation only when it is:

- non-external;
- non-binding;
- non-financially committed;
- non-legally significant;
- technically reversible;
- not creating downstream obligations;
- not constraining the accountable human decision.

If reversibility is uncertain, the action should not proceed as normal preparation. It should be routed to Review Path or Escalation Path.

---

## 8. Responsibility for Preparation Quality

The human approver remains accountable for the final decision.

However, the organization remains responsible for the quality, traceability, and auditability of the AI preparation system.

This distinction matters because AI can shape the human decision by selecting evidence, summarizing context, omitting details, or presenting a recommendation as stronger than the source material supports.

RABA should therefore require that AI-prepared decision packages make preparation quality visible.

Preparation quality signals may include:

- evidence completeness status;
- source coverage;
- missing sources;
- confidence limits;
- context truncation warnings;
- conflicting facts;
- counter-evidence;
- policy uncertainty;
- data freshness;
- known assumptions.

A human decision based on AI-prepared context is only accountable if the human can see the limits of that preparation.

---

## 9. Preparation Safety Requirements

### 9.1 Cognitive Friction

Governed Preparation must protect against rubber-stamp approval.

A well-prepared AI decision package can create the illusion that the decision has already been made. This may reduce human review to a formal click.

For elevated-risk actions, the interface should apply cognitive friction before approval is possible.

Possible mechanisms:

- require the reviewer to open the evidence section before approval;
- require a short reason for approval;
- require confirmation that key sources were reviewed;
- show at least one alternative option;
- show what could make the recommendation wrong;
- surface contradictory facts or anomaly signals;
- require explicit acknowledgement of unresolved uncertainty;
- delay or disable one-click approval for high-risk cases;
- require escalation when evidence is incomplete.

Core principle:

> AI may prepare the decision environment, but it must not prepare a cognitive tunnel that makes the human decision only formal.

### 9.2 Context Completeness and Truncation Warnings

AI summaries can distort reality if critical context is missing, truncated, unavailable, stale, or contradicted by other evidence.

Governed Preparation must not present incomplete context as complete.

Required warning conditions include:

- context window truncation;
- missing customer history;
- inaccessible source system;
- stale data;
- conflicting records;
- low evidence confidence;
- policy mismatch;
- uncertain reversibility;
- insufficient source coverage.

Possible Responsibility Event Stream events:

```text
bypass_context_truncated
evidence_source_missing
evidence_confidence_low
conflicting_facts_detected
counter_evidence_available
policy_match_uncertain
reversibility_uncertain
```

If context completeness is low or uncertain, the Governance Gateway should route the case to Review Path or Escalation Path.

### 9.3 UI Isolation and No Live Execution Surface

Governed Preparation should not occur inside a live execution UI where a draft can accidentally become an action.

Modern tools may include auto-save behavior, keyboard shortcuts, visible drafts, automatic workflow triggers, CRM status changes, or hidden side effects.

Therefore, preparation should occur in a non-executing workspace or sandbox unless write actions are technically disabled.

Governed Preparation must not have access to UI elements or APIs that can:

- send a customer message;
- publish a draft externally;
- auto-save into a legally significant record;
- change a customer status;
- trigger a downstream workflow;
- reserve money;
- commit a refund;
- create external reliance.

This is a permission boundary, not a style preference.

---

## 10. Technical Implementation Direction

Governed Preparation can be implemented as a route inside the Governance Gateway.

Possible route model:

```json
{
  "approval_state": "DRAFT",
  "route": "governed_preparation",
  "boundary_status": "not_crossed",
  "execution_locked": true,
  "prepared_by": "AI",
  "requires_human_authorization": true,
  "allowed_actions": [
    "summarize",
    "classify",
    "draft_response",
    "prepare_evidence",
    "check_policy_match",
    "identify_risk_flags",
    "prepare_decision_package"
  ],
  "prohibited_actions": [
    "send_external_message",
    "modify_customer_record",
    "commit_financial_resource",
    "create_legal_record",
    "trigger_irreversible_workflow",
    "communicate_likely_decision",
    "create_obligation"
  ]
}
```

The Governance Gateway should evaluate whether the requested AI action is:

1. preparatory;
2. reversible;
3. non-external;
4. non-binding;
5. not legally significant;
6. not financially committed;
7. not creating downstream consequences;
8. not creating external reliance;
9. not hiding context uncertainty.

If all are true, the action may proceed inside Governed Preparation.

If any are false, the action must be routed to Review Path, Escalation Path, Fast Path if explicitly eligible, or Block.

---

## 11. Permission Boundary

Governed Preparation should not rely only on written policy. It should be enforced through permissions.

### Governed Preparation may have access to:

- read-only CRM data;
- ticket history;
- policy documents;
- BI signals;
- isolated draft editor;
- internal note draft;
- evidence collector;
- risk classifier;
- recommendation builder;
- anomaly detector;
- counter-evidence surfacing tool.

### Governed Preparation must not have access to:

- send email API;
- refund execution API;
- payment systems;
- final CRM status update;
- contract generation tools;
- external notification triggers;
- legally binding document creation;
- policy modification tools;
- live customer-facing draft surfaces;
- auto-send or auto-publish UI controls.

Governance should be machine-enforceable, not only described in documents.

---

## 12. Relationship to Fast Path

Governed Preparation is not the same as Fast Path.

Fast Path means an action may proceed automatically under predefined, low-risk, human-defined policy.

Governed Preparation means the AI may prepare the decision environment before authorization.

Fast Path crosses the action boundary under strict conditions.

Governed Preparation stays before the action boundary.

Simple distinction:

```text
Governed Preparation = prepare before decision
Fast Path = execute automatically within allowed policy
Review Path = human approval before execution
Escalation Path = higher authority required
Block = action not allowed
```

Governed Preparation must not be used to disguise Fast Path expansion.

---

## 13. Route Transition Rule

A workflow that begins in Governed Preparation must not silently transition to Fast Path.

Any transition from Governed Preparation to Fast Path requires:

- explicit Governance Gateway re-evaluation;
- current policy version check;
- reversibility check;
- policy owner-defined eligibility;
- logging in the Responsibility Event Stream;
- Decision Log entry if the transition changes action-class routing policy or materially expands autonomy.

Route transitions must be explicit, visible, and auditable.

Silent transition from preparation to execution is a governance drift vector.

---

## 14. Relationship to Responsibility Event Stream

Governed Preparation should emit responsibility events so that auditors can see what happened before the decision.

Possible events:

```text
governed_preparation_started
evidence_collected
draft_response_created
policy_match_checked
risk_flags_identified
conflicting_facts_detected
counter_evidence_available
context_completeness_checked
bypass_context_truncated
evidence_confidence_low
decision_package_prepared
preparation_boundary_warning_triggered
preparation_to_review_path_routed
preparation_blocked_due_to_external_effect
```

These events should help answer:

- What did the AI prepare?
- Which data did it use?
- Which policy did it check?
- Which risk flags were detected?
- Was any context missing or truncated?
- Were contradictory facts surfaced?
- Did the AI attempt to cross the boundary?
- Was the action routed correctly?
- Who approved the final decision?

---

## 15. Relationship to Decision Log

Not every Governed Preparation step needs a full Decision Log entry.

But a Decision Log entry should be required when preparation output leads to:

- customer-facing communication;
- refund or compensation;
- CRM status change;
- escalation;
- policy change request;
- exception approval;
- external obligation;
- incident or remediation;
- route transition from preparation to Fast Path;
- material policy relaxation.

The Decision Log should record:

- what the AI recommended;
- what evidence was presented;
- preparation quality signals;
- known missing context;
- which policy applied;
- what the human approved or changed;
- who approved it;
- when it was approved;
- what was executed afterward.

---

## 16. Governance Drift Risks

The Governed Preparation Route can itself drift.

Possible drift patterns:

### Boundary Erosion

AI starts by preparing drafts, but gradually begins pre-filling fields that make the decision feel already made.

### External Expectation Drift

AI-generated drafts use language that implies a likely outcome before approval.

### Hidden Execution Drift

AI triggers internal downstream workflows that are technically reversible but practically constrain the human decision.

### Rubber-Stamp Acceleration

Governed Preparation produces such polished decision packages that humans approve without meaningful review.

### Permission Creep

Preparation tools gradually receive access to execution APIs “for convenience”.

### Context Tunnel Drift

AI summaries become the human reviewer’s primary reality, while omitted or contradictory facts disappear from the decision interface.

These are Policy Integrity risks and should trigger review.

---

## 17. Example: Customer Support Workflow

### Situation

A customer complains repeatedly about delivery problems.

The AI system detects the pattern and prepares support recommendations.

### Allowed in Governed Preparation

The AI may:

- summarize previous tickets;
- identify the repeated delivery issue;
- collect BI signals;
- prepare a draft reply in an isolated workspace;
- suggest possible compensation options;
- show customer history;
- check whether the case matches policy;
- flag whether the customer is sensitive, VIP, vulnerable, legal-risk, or high-value;
- prepare an internal recommendation for the human support manager;
- surface conflicting customer history or missing evidence.

### Not allowed in Governed Preparation

The AI must not:

- send the reply to the customer;
- promise compensation;
- issue a refund;
- update CRM status as resolved;
- create a legally significant complaint record;
- trigger a compensation workflow;
- tell the customer that compensation is likely;
- silently change the refund threshold or policy rule;
- hide missing context from the reviewer.

### Correct pattern

```text
AI prepares context
→ AI drafts recommendation in isolated workspace
→ AI surfaces evidence, risks, missing context, and counter-evidence
→ Governance Gateway checks boundary
→ Human manager approves / modifies / rejects
→ Only then CRM action or customer communication may execute
→ Decision Log records the approval and reason
```

---

## 18. Implementation Checklist

Before implementing Governed Preparation for any workflow, RABA should ask:

1. What exactly may AI prepare?
2. What must AI never execute?
3. Which systems are read-only?
4. Which systems are execution-capable?
5. What is the action boundary?
6. Who owns the routing policy?
7. What happens if the AI prepares a wrong recommendation?
8. Can the human reviewer easily see evidence and risk flags?
9. Can the reviewer see missing evidence and context limits?
10. Can the reviewer see counter-evidence?
11. Can the reviewer reject or modify the recommendation?
12. Is cognitive friction required?
13. Are preparation events logged?
14. Does preparation output create pressure to approve?
15. Can Governed Preparation be downgraded, paused, or blocked?
16. Is the preparation workspace isolated from live execution?

---

## 19. Draft Recommendation

Governed Preparation should be implemented in RABA as a controlled preparation route inside the Governance Gateway, with mandatory execution-lock metadata.

It should not be treated as a shortcut around responsibility.

Recommended position:

> Governed Preparation is allowed only before the action boundary.  
> It may prepare evidence, drafts, classifications, risk flags, and recommendations.  
> It must not execute, promise, commit, notify, modify, or create obligations.  
> Any attempt to cross the action boundary must be routed to Review Path, Escalation Path, Fast Path if explicitly eligible, or Block.

This gives RABA a strong answer to the business demand for speed:

> We can accelerate preparation without weakening accountability.

---

## 20. Short Version

Governed Preparation is not “AI acts without approval”.

It is:

> AI prepares everything needed for a responsible human decision, but cannot create external consequences before authorization.

This may become one of RABA’s strongest practical mechanisms because it protects both speed and responsibility.
