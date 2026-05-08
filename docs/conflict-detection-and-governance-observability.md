# Conflict Detection & Governance Observability

Responsible AI pilots require more than model evaluation.

Before AI is allowed to influence operational decisions, organizations need to understand where conflicts can appear, how they are detected, who is responsible for resolving them, and which signals must be observable during the pilot.

## Core Idea

AI systems may support analysis, recommendation, summarization, classification, and preparation of actions.

However, when AI is connected to real business processes, conflicts can emerge between:

- business goals;
- process rules;
- data quality;
- customer impact;
- legal or compliance expectations;
- operational speed;
- human responsibility;
- AI agent permissions.

A responsible AI pilot should therefore include a dedicated conflict detection and governance observability layer.

## Why Conflict Detection Matters

Many AI failures do not happen because the model is obviously wrong.

They happen because the AI output conflicts with a rule, responsibility boundary, data condition, or business context that was not explicitly checked.

Examples:

- AI recommends a refund, but the refund exceeds the allowed financial threshold.
- AI suggests sending a customer response, but the case requires legal review.
- AI classifies a request as low risk, but the customer history indicates escalation.
- AI proposes an operational action, but the process owner has not approved autonomous execution.
- AI uses incomplete or outdated data to support a decision.

Conflict detection helps prevent AI from silently moving from support into uncontrolled decision-making.

## Typical AI Governance Conflicts

### 1. Permission Conflict

The AI system recommends or prepares an action that exceeds its allowed permission boundary.

Example:

- AI may draft a response, but it may not send it.
- AI may recommend a refund, but it may not execute payment.
- AI may classify a ticket, but it may not close the case autonomously.

Related pattern:

- `architecture-patterns/agent-permission-boundary.md`

### 2. Responsibility Conflict

The AI output influences a decision, but no human role is clearly accountable for the final outcome.

Key question:

> If this AI-supported decision causes harm, who is responsible?

If the answer is unclear, the pilot is not ready for operational use.

### 3. Data Quality Conflict

The AI output depends on incomplete, outdated, inconsistent, or unverified data.

Examples:

- missing customer history;
- outdated policy documents;
- conflicting records across systems;
- unclear source of truth;
- unverified extracted document data.

### 4. Business Value vs Risk Conflict

The AI use case promises efficiency, but the operational, legal, financial, or customer impact is too high for the current governance maturity.

Example:

- A refund automation use case may save time, but autonomous financial execution creates unacceptable risk without strong controls.

Related example:

- `examples/red-case-autonomous-customer-refunds/`

### 5. Speed vs Human Confirmation Conflict

The business wants faster processing, but the decision still requires human confirmation because of impact, uncertainty, or responsibility.

This does not mean the AI pilot should be rejected.

It may mean the pilot should be downgraded from autonomous execution to AI-assisted recommendation.

Related pattern:

- `architecture-patterns/confirmation-gate.md`

## Governance Observability

Responsible AI cannot be governed if its influence is invisible.

Governance observability means that the organization can see, review, and audit how AI affects a business process.

A responsible AI pilot should make the following signals observable.

## Key Observability Signals

### AI Influence Frequency

How often does AI influence a business decision, recommendation, classification, or action?

This helps distinguish occasional support from systematic operational dependence.

### Human Confirmation Rate

How often does a human approve AI-prepared actions?

This helps evaluate whether the AI is genuinely useful or merely shifting work to reviewers.

### Human Override Rate

How often does a human reject or change the AI recommendation?

A high override rate may indicate poor model quality, unclear process rules, weak data quality, or inappropriate use case selection.

### Escalation Rate

How often does the AI-supported process require escalation to a manager, legal role, compliance role, or process owner?

Escalation patterns reveal hidden complexity in the process.

### Review Latency

How long does it take for a human to review and confirm or reject AI-prepared outputs?

This helps assess whether the pilot improves throughput or creates a review bottleneck.

### Blocked Action Count

How often does the system block AI from taking or preparing actions because of permission boundaries, missing data, or policy conflicts?

Blocked actions are not necessarily failures.

They are evidence that governance controls are working.

### Rollback Time

If an AI-supported action leads to an error, how quickly can the organization detect, stop, reverse, or correct the outcome?

Rollback capability is essential for operational resilience.

### Unresolved Responsibility Cases

How often does the team encounter situations where it is unclear who owns the final decision?

This is a serious governance warning signal.

## AI Role in Conflict Handling

AI may support conflict handling by:

- detecting potential inconsistencies;
- flagging missing data;
- comparing recommendations against known rules;
- explaining why a case may require escalation;
- suggesting possible resolution paths;
- preparing a structured summary for human review.

However, AI should not automatically resolve high-impact conflicts unless responsibility, permissions, auditability, and rollback mechanisms are clearly defined.

## Practical Design Principle

A responsible AI pilot should separate four functions:

1. AI recommendation
2. Conflict detection
3. Human confirmation or escalation
4. Action execution

The more impact an action has, the more clearly these functions should be separated.

## Example: Autonomous Customer Refunds

The red-case refund example illustrates why conflict detection matters.

An autonomous refund agent may appear useful because it can reduce processing time.

But it combines several high-risk elements:

- probabilistic analysis;
- financial execution;
- customer impact;
- policy interpretation;
- possible fraud exposure;
- weak governance maturity.

In this case, the responsible recommendation is not to start with autonomous execution.

A safer pilot design is:

- AI analyzes the case;
- AI prepares a refund recommendation;
- conflict checks are applied;
- a human confirms or rejects the recommendation;
- only approved actions are executed.

## Relation to Existing Framework Components

This document supports and connects to:

- `QUICK-CHECK.md`
- `docs/ai-readiness-dimensions.md`
- `architecture-patterns/confirmation-gate.md`
- `architecture-patterns/agent-permission-boundary.md`
- `architecture-patterns/ai-as-control-loop.md`
- `examples/red-case-autonomous-customer-refunds/`
- `templates/ai-pilot-decision-report.md`

## Decision Rule

If a proposed AI pilot cannot show how conflicts will be detected, observed, escalated, and assigned to responsible human roles, it should not proceed as an autonomous pilot.

It may still proceed as an AI-assisted pilot with mandatory human confirmation.

## Summary

Conflict detection and governance observability are not optional add-ons.

They are core requirements for responsible AI integration into real business processes.

AI may help detect conflicts.

AI may help explain conflicts.

AI may help prepare resolution options.

But responsibility for high-impact decisions must remain explicit, assignable, observable, and auditable.

> AI may be probabilistic. Responsibility must not be.
