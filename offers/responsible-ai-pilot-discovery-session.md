# Responsible AI Pilot Discovery Session

A practical 45-minute discovery session for organizations, teams, consultants, or pilot partners who want to evaluate one business process for responsible AI adoption.

## Purpose

Many AI initiatives begin with a tool, a vendor, or a general idea.

This session starts differently.

It begins with one concrete business process and asks:

> Is this process a good candidate for a responsible AI pilot?

The goal is to help the organization identify value, risk, human control needs, permission boundaries, and a realistic next step before investing in implementation.

## Core Promise

In 45 minutes, the session helps turn a vague AI idea into a structured pilot decision:

- Green — good candidate for a controlled AI pilot;
- Yellow — promising, but preparation is required;
- Red — not suitable as a first AI pilot;
- Grey — not enough information yet.

## Who This Is For

This session is useful for:

- business owners;
- operations leaders;
- CTOs and system architects;
- DPOs and compliance professionals;
- AI consultants;
- implementation partners;
- teams considering AI agents or automation;
- organizations looking for a safe first AI pilot;
- investors or strategic partners evaluating responsible AI adoption opportunities.

## Best Fit Processes

Good candidate processes include:

- customer email triage;
- invoice data extraction;
- support ticket classification;
- internal knowledge search;
- weekly reporting drafts;
- document summarization;
- service request routing;
- supplier document review.

## Not Ideal as First Session Topics

Avoid starting with:

- autonomous payments;
- employment decisions;
- final legal conclusions;
- safety-critical processes;
- high-sensitivity data without review;
- broad AI agent access;
- processes nobody understands;
- full automation as the first goal.

See:

[What Not to Automate First](../guides/what-not-to-automate-first.md)

## Session Agenda — 45 Minutes

### 0–5 min — Process Selection

Define one concrete process.

Output:

```text
Business process:
Process owner:
Current pain:
Expected improvement:
```

### 5–10 min — Quick Readiness Check

Use:

[AI Readiness Quick Check](../lead-magnet/ai-readiness-quick-check.md)

Output:

```text
Quick Check Score: __ / 14
Initial signal: Green / Yellow / Red / Grey
```

### 10–18 min — Business Value

Clarify:

- what AI could improve;
- who benefits;
- how value could be measured;
- whether the problem is important enough for a pilot.

Output:

```text
Expected business value:
Primary beneficiary:
Possible success metric:
```

### 18–26 min — Data and Risk

Clarify:

- what data AI would need;
- how sensitive the data is;
- what happens if AI is wrong;
- whether errors are reversible;
- whether the process affects money, people, legal obligations, safety, reputation, or operations.

Output:

```text
Data involved:
Data sensitivity: Low / Medium / High / Critical
Decision risk: Low / Medium / High / Critical
Main risk:
```

### 26–34 min — AI Role and Permission Boundary

Define what AI may do.

Possible roles:

- summarize;
- classify;
- extract;
- search;
- draft;
- recommend;
- prepare for approval.

Define what AI may not do.

Output:

```text
Recommended AI role:
Recommended permission level:
AI may access:
AI may not access:
AI may prepare:
AI may not execute:
```

Use:

[Agent Permission Boundary Pattern](../architecture-patterns/agent-permission-boundary.md)

### 34–40 min — Human Control and Confirmation Gate

Define where human review or approval is required.

Output:

```text
Human review point:
Human approval point:
Responsible owner:
Confirmation Gate needed: Yes / No / Not sure
```

Use:

[Confirmation Gate Pattern](../architecture-patterns/confirmation-gate.md)

### 40–45 min — Pilot Decision and Next Step

Choose a decision:

- [ ] Green — good candidate for a controlled AI pilot
- [ ] Yellow — promising, but preparation is required
- [ ] Red — not suitable as a first AI pilot
- [ ] Grey — not enough information yet

Output:

```text
Decision:
Reason:
Next action:
Owner:
```

## Deliverable

After the session, the recommended deliverable is a short:

[AI Pilot Decision Report](../templates/ai-pilot-decision-report.md)

The report should summarize:

- process evaluated;
- business pain;
- expected AI value;
- proposed AI role;
- data and risk level;
- human control point;
- permission boundary;
- Confirmation Gate need;
- pilot decision;
- next action.

## What Participants Should Prepare

Before the session, participants should prepare:

- one process they want to evaluate;
- a short description of the current workflow;
- current pain points;
- rough volume or frequency if known;
- what AI is expected to help with;
- what data is involved;
- who owns the process today.

No confidential data is required for the first discovery session.

## What This Session Is Not

This session is not:

- legal advice;
- compliance certification;
- a technical implementation plan;
- vendor selection;
- a guarantee of business success;
- a promise that AI should be implemented.

It is a structured discovery step before implementation.

## What This Session Helps Avoid

The session helps avoid:

- starting with the wrong process;
- buying tools before understanding the workflow;
- giving AI excessive permissions;
- ignoring sensitive data risks;
- creating fake human oversight;
- scaling before learning;
- missing a valuable opportunity because no safe pilot path was defined.

## Value for the Organization

The organization gains:

- a clearer AI pilot candidate;
- a better understanding of risk;
- a first responsibility model;
- a safer pilot scope;
- a practical next step;
- shared language between business, IT, compliance, and implementation partners.

## Suggested Follow-Up Options

Depending on the result:

### Green

Proceed to pilot design using:

- [Responsible AI Pilot Canvas](../templates/responsible-ai-pilot-canvas.md)
- [AI Pilot Decision Report](../templates/ai-pilot-decision-report.md)

### Yellow

Prepare the process first using:

- [Process Diagnosis Checklist](../business-diagnosis/process-diagnosis-checklist.md)
- [AI Pilot Readiness Scorecard](../templates/ai-pilot-readiness-scorecard.md)

### Red

Choose a safer process and review:

- [What Not to Automate First](../guides/what-not-to-automate-first.md)

### Grey

Collect missing information and repeat the assessment.

## Key Statement

> A discovery session should not sell AI automation.  
> It should reveal whether a responsible first pilot is possible.
