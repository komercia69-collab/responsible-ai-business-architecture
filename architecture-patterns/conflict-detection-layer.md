# Conflict Detection Layer

## Purpose

The Conflict Detection Layer is an architectural governance pattern that separates:

1. AI recommendation
2. conflict evaluation
3. human confirmation or escalation
4. action execution

The purpose of this pattern is to prevent AI systems from silently moving from operational support into uncontrolled decision-making.

> AI may be probabilistic. Responsibility must not be.

## Core Idea

AI systems may generate outputs that appear reasonable while still conflicting with:

- business rules;
- permission boundaries;
- customer impact expectations;
- financial limits;
- compliance requirements;
- operational constraints;
- data quality conditions;
- human responsibility assignments.

The Conflict Detection Layer introduces explicit governance checks before operational execution is allowed.

## High-Level Flow

```text
Input → AI Recommendation → Conflict Detection → Human Confirmation/Escalation → Execution
```

This pattern ensures that recommendation and execution are not treated as the same architectural responsibility.

## Pattern Components

### 1. AI Recommendation Component

The AI system may:

- summarize;
- classify;
- prioritize;
- recommend actions;
- prepare drafts;
- suggest operational paths.

The AI system does not automatically receive execution authority.

### 2. Conflict Detection Component

This layer evaluates whether the AI-generated output conflicts with governance expectations.

Typical checks include:

- permission boundaries;
- policy violations;
- missing approvals;
- financial thresholds;
- contradictory data;
- escalation triggers;
- incomplete context;
- blocked autonomous actions.

The purpose is not only error detection.

The purpose is governance-aware decision control.

### 3. Human Confirmation or Escalation

If conflicts, uncertainty, or high-impact conditions exist, the case is routed to a responsible human role.

Possible outcomes:

- approve;
- reject;
- request clarification;
- escalate;
- downgrade the automation level.

Related pattern:

- `confirmation-gate.md`

### 4. Action Execution

Only after governance conditions are satisfied should operational execution occur.

Examples:

- sending a message;
- approving a refund;
- changing a workflow state;
- triggering a system action;
- updating customer records.

## Typical Conflict Categories

### Permission Conflict

The AI attempts to prepare or influence actions outside its approved authority.

### Responsibility Conflict

No clear human owner exists for the final outcome.

### Data Quality Conflict

The recommendation depends on incomplete, outdated, or contradictory information.

### Business Risk Conflict

The expected efficiency gain does not justify the operational or legal exposure.

### Escalation Conflict

The process requires human or managerial involvement because the impact exceeds the pilot boundary.

## Design Principles

### Separation of Recommendation and Execution

AI recommendation must not automatically imply operational execution.

### Explicit Responsibility Assignment

Every high-impact decision must have an identifiable responsible role.

### Observable Governance Signals

The system should expose:

- override rate;
- escalation rate;
- blocked actions;
- review latency;
- rollback capability;
- unresolved responsibility situations.

### Controlled Pilot Scope

The more uncertainty exists, the narrower the autonomous scope should be.

## Recommended Use Cases

This pattern is especially relevant for:

- customer communication;
- refund workflows;
- document processing;
- internal knowledge systems;
- ticket triage;
- operational support systems;
- service coordination;
- AI-assisted ERP workflows.

## Red Flag Situations

A pilot should not proceed as autonomous if:

- responsibility is unclear;
- rollback is impossible;
- AI actions directly affect finances;
- customer harm may occur;
- legal interpretation is required;
- observability is weak;
- governance maturity is low.

In such cases, AI-assisted workflows with mandatory human confirmation are safer.

## Relation to Other Framework Components

This pattern supports:

- `ai-as-control-loop.md`
- `agent-permission-boundary.md`
- `confirmation-gate.md`
- `docs/conflict-detection-and-governance-observability.md`
- `examples/red-case-autonomous-customer-refunds/`

## Summary

The Conflict Detection Layer helps organizations introduce AI support into business processes without removing responsibility boundaries.

The pattern does not assume that AI systems are fully reliable.

Instead, it assumes that governance, observability, escalation, and explicit human accountability are necessary architectural components of responsible AI integration.
