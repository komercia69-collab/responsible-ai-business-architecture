# Methodology Overview

Responsible AI Business Architecture is a practical framework for moving from AI interest to accountable AI action.

It is designed for organizations that want to use AI in real business processes without losing human responsibility, transparency, auditability, or operational control.

## Core Principle

> AI may be probabilistic. Responsibility must not be.

AI systems can summarize, classify, extract, search, draft, recommend, and prepare actions.

But the organization must still define:

- who owns the process;
- who reviews AI output;
- who approves final action;
- what AI may access;
- what AI may not execute;
- how decisions are documented;
- when AI must stop.

A second practical principle is:

> AI may be probabilistic in analysis. Execution, responsibility, and control must remain deterministic.

This means that AI may generate options, summaries, classifications, or recommendations, but business execution must remain bounded by defined permissions, review points, confirmation gates, logs, and accountable human ownership.

## The Framework Path

```text
AI idea
→ Quick Check
→ Intake / Discovery
→ Responsible AI Pilot Canvas
→ Risk, Data, and Permission Boundary Review
→ AI Pilot Decision Report
→ Pilot / Preparation / Rejection / More Information
```

## 1. AI Readiness Quick Check

The [AI Readiness Quick Check](../QUICK-CHECK.md) is a short 7-question self-check.

It asks whether the process is clear, limited, valuable, reviewable, accountable, and suitable for a first pilot.

Output:

- Quick Check score: 0–14;
- initial signal: Green / Yellow / Red / Grey;
- recommended next step.

## 2. Use Case Intake and Discovery

The organization describes one concrete business process.

Useful tools:

- [Pilot Partner Intake Form](../templates/pilot-partner-intake-form.md)
- [Pilot Partner Call](../offers/pilot-partner-call.md)
- [Responsible AI Pilot Discovery Session](../offers/responsible-ai-pilot-discovery-session.md)

The goal is to clarify:

- current workflow;
- business pain;
- expected AI role;
- data involved;
- risk and consequences;
- human responsibility;
- success criteria.

## 3. Responsible AI Pilot Canvas

The [Responsible AI Pilot Canvas](../templates/responsible-ai-pilot-canvas.md) turns the AI idea into a structured pilot concept.

It helps define:

- business objective;
- AI role;
- data boundary;
- risk level;
- human control;
- permission boundary;
- confirmation gate;
- success metric;
- pilot scope.

## 4. Risk, Data, and Responsibility Review

A responsible pilot should not be judged only by technical feasibility.

It should also clarify:

- whether data is sensitive;
- whether errors are reversible;
- whether humans can detect mistakes;
- whether the process affects money, legal rights, employment, health, safety, or customers;
- whether AI output will be reviewed before action.

Relevant tools:

- [AI Pilot Readiness Scorecard](../templates/ai-pilot-readiness-scorecard.md)
- [AI Integration Responsibility Matrix](../compliance/ai-integration-responsibility-matrix.md)
- [What Not to Automate First](../guides/what-not-to-automate-first.md)

## 5. Architecture and Guardrails

The framework uses architecture patterns to prevent uncontrolled automation.

Important patterns:

- [Confirmation Gate Pattern](../architecture-patterns/confirmation-gate.md)
- [Agent Permission Boundary Pattern](../architecture-patterns/agent-permission-boundary.md)
- [AI as Control Loop Pattern](../architecture-patterns/ai-as-control-loop.md)

These patterns help define:

- where AI must stop;
- where a human must approve;
- what AI may access;
- what AI may prepare;
- what AI may recommend;
- what AI may never execute autonomously;
- what AI may influence inside the wider business or technical system.

### AI as subsystem vs AI as control element

Not every AI use case has the same architectural role.

Some AI systems only support a human task, such as searching, summarizing, drafting, or classifying.

Other AI systems influence the behavior of the wider process by routing work, assigning priorities, triggering workflows, changing escalation paths, or affecting other systems through APIs.

The framework therefore assesses AI systems not only by what they output, but also by what they can influence.

A use case should be treated as higher risk when AI can influence:

- process routing;
- task prioritization;
- system configuration;
- access permissions;
- escalation rules;
- workflow execution;
- communication with customers, employees, or partners;
- financial, legal, HR, safety, or operational actions.

Low-frequency AI support is usually easier to review manually.

High-frequency AI influence or automated process adaptation requires stronger monitoring, permission limits, rollback paths, and governance.

## 6. AI Pilot Decision Report

The [AI Pilot Decision Report](../templates/ai-pilot-decision-report.md) turns analysis into a shareable decision.

Possible outcomes:

- **Green** — good candidate for a controlled AI pilot;
- **Yellow** — promising, but preparation is required;
- **Red** — not suitable as a first AI pilot;
- **Grey** — not enough information yet.

The report should be understandable by business, IT, compliance, risk, and leadership stakeholders.

## 7. Learning Loop

After a pilot or review, the organization should capture lessons learned.

Questions:

- Did the pilot create measurable value?
- Were risks correctly identified?
- Were human review points practical?
- Were permission boundaries sufficient?
- What should be changed before scaling?
- Should this process continue, stop, or be redesigned?

The purpose is not only to implement AI.

The purpose is to help the organization learn how to adopt AI responsibly.

## Important Boundary

This methodology is not legal advice, compliance certification, security certification, vendor selection, or implementation approval.

It is a practical framework for structured decision-making before implementation.
