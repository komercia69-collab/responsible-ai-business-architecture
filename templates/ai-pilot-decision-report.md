# AI Pilot Decision Report

A concise decision report for evaluating whether a business process is ready for a responsible AI pilot.

This report is designed to be completed after using one or more of the following tools:

- [AI Readiness Quick Check](../lead-magnet/ai-readiness-quick-check.md)
- [AI Pilot Readiness Scorecard](ai-pilot-readiness-scorecard.md)
- [Responsible AI Pilot Canvas](responsible-ai-pilot-canvas.md)
- [AI Readiness Mini-Workshop](../workshops/ai-readiness-mini-workshop.md)
- [AI Opportunity Map](../business-diagnosis/ai-opportunity-map.md)

## Purpose

The goal of this report is to turn discussion into a clear decision.

At the end of an AI readiness conversation, workshop, or assessment, the organization should know:

- whether the process is a good AI pilot candidate;
- what AI should and should not do;
- what human control is required;
- what risks must be addressed;
- what permission boundaries are needed;
- what the next step should be.

## Decision Summary

```text
Business process:
Organization / team:
Assessment date:
Prepared by:
Decision status:
```

Choose one decision status:

- [ ] Green — Good candidate for a controlled AI pilot
- [ ] Yellow — Promising, but preparation is required before piloting
- [ ] Red — Not suitable as a first AI pilot
- [ ] Grey — Not enough information yet

## 1. Business Process

```text
Process name:
Process owner:
Team / department:
Current workflow summary:
```

## 2. Current Pain

```text
Main business pain:
Who is affected:
Frequency / volume:
Why this matters now:
```

## 3. Expected Business Value

```text
Expected value from AI support:
Primary business benefit:
Secondary benefits:
How value could be measured:
```

Examples of value:

- faster response time;
- fewer manual steps;
- fewer missed cases;
- better prioritization;
- better reporting visibility;
- reduced employee workload;
- improved consistency.

## 4. Proposed AI Role

Choose one or more:

- [ ] Summarize
- [ ] Classify
- [ ] Extract data
- [ ] Search information
- [ ] Draft text
- [ ] Recommend next step
- [ ] Detect anomaly
- [ ] Prepare for approval
- [ ] Execute only after approval
- [ ] Autonomous low-risk action
- [ ] Other: __________

```text
Recommended AI role:
AI may do:
AI must not do:
```

## 5. Data and Risk Assessment

### Data Sensitivity

- [ ] Low — public or non-sensitive information
- [ ] Medium — business-confidential or limited personal data
- [ ] High — financial, legal, HR, health, security, or sensitive personal data
- [ ] Critical — safety, fundamental rights, major financial or regulated decisions
- [ ] Not sure

### Decision Risk

- [ ] Low — mistakes are easy to detect and reverse
- [ ] Medium — mistakes may create cost, confusion, delay, or customer dissatisfaction
- [ ] High — mistakes may create legal, financial, compliance, employment, or reputational consequences
- [ ] Critical — mistakes may affect safety, fundamental rights, regulated decisions, or major financial actions
- [ ] Not sure

```text
Main data involved:
Main risk:
Worst realistic consequence:
Can mistakes be detected? Yes / No / Not sure
Can mistakes be corrected? Yes / No / Not sure
```

## 6. Human Control Requirement

```text
Human review required: Yes / No / Not sure
Human approval required: Yes / No / Not sure
Approval point:
Reviewer / approver role:
Responsible owner:
Escalation path:
```

Use:

- [Confirmation Gate Pattern](../architecture-patterns/confirmation-gate.md)
- [AI Integration Responsibility Matrix](../compliance/ai-integration-responsibility-matrix.md)

## 7. Permission Boundary

Recommended first permission level:

- [ ] No access
- [ ] Read only
- [ ] Draft only
- [ ] Recommend only
- [ ] Prepare for approval
- [ ] Execute after approval
- [ ] Autonomous low-risk
- [ ] Restricted / prohibited

```text
AI may access:
AI may not access:
AI may prepare:
AI may not execute:
```

Use:

[Agent Permission Boundary Pattern](../architecture-patterns/agent-permission-boundary.md)

## 8. Confirmation Gate Decision

```text
Confirmation Gate required: Yes / No / Not sure
Action requiring confirmation:
Approver role:
Context shown to approver:
Can approver edit? Yes / No
Can approver reject? Yes / No
Can approver escalate? Yes / No
```

## 9. Audit Requirements

Minimum audit log:

- [ ] Original input data
- [ ] AI output
- [ ] AI confidence or uncertainty signals if available
- [ ] Human reviewer
- [ ] Human edits
- [ ] Approval or rejection decision
- [ ] Escalation decision
- [ ] Final executed action
- [ ] Timestamp
- [ ] Error or override reason
- [ ] Prompt, rule, or model version where relevant

```text
Audit owner:
Audit log location:
Retention requirement if known:
```

## 10. Pilot Scope

```text
Recommended pilot scope:
Pilot duration:
Included:
Excluded:
Participants:
Systems involved:
```

A good first pilot should be:

- limited;
- measurable;
- reversible;
- useful for real employees;
- designed with human oversight;
- supported by audit logging.

## 11. Success Metrics

```text
Metric 1:
Metric 2:
Metric 3:
Baseline if known:
Target if known:
Review date:
```

Possible metrics:

- response time;
- processing time;
- number of manual steps reduced;
- correct classification rate;
- number of detected duplicates;
- employee satisfaction;
- customer response quality;
- fewer missed cases;
- reporting visibility.

## 12. Red Flags

Check any that apply:

- [ ] Process owner is unclear
- [ ] Current workflow is not well understood
- [ ] Data quality is poor
- [ ] Data sensitivity is high or critical
- [ ] Decision risk is high or critical
- [ ] AI would need broad access to sensitive systems
- [ ] Human reviewers may not have enough time or context
- [ ] Management expects full automation immediately
- [ ] There is no audit logging plan
- [ ] The process affects payments, employment, legal rights, safety, or regulated decisions
- [ ] Not enough information is available

```text
Main red flag:
Risk reduction action:
```

## 13. Final Recommendation

Choose one:

### Green — Proceed With Controlled Pilot

Use this when the process is limited, measurable, and controllable.

Required next actions:

- define final pilot scope;
- confirm responsible owner;
- define AI role and permission boundary;
- implement human review or Confirmation Gate;
- define audit logging;
- run a time-limited pilot.

### Yellow — Prepare Before Pilot

Use this when the use case has potential but missing foundations.

Required next actions may include:

- clarify process ownership;
- document current workflow;
- reduce data access scope;
- define human review;
- involve compliance, legal, security, or IT;
- improve data quality;
- choose a narrower pilot.

### Red — Do Not Use as First Pilot

Use this when the process is too risky, unclear, sensitive, or difficult to control as a first AI project.

Recommended next actions:

- choose a safer process;
- use AI only for support or analysis;
- avoid autonomous action;
- conduct formal governance review before any implementation.

### Grey — More Information Needed

Use this when the team cannot make a responsible decision yet.

Required next actions:

- collect missing information;
- identify process owner;
- map data and systems;
- clarify decision risk;
- repeat the assessment.

```text
Final recommendation:
Reason:
Required conditions before implementation:
```

## 14. Next Step

```text
Next action:
Owner:
Deadline:
Support needed:
Follow-up meeting date:
```

## 15. Executive Summary

Use this section for a short summary that can be shared with leadership, a client, an implementation partner, or a potential pilot sponsor.

```text
The evaluated process is:

The main business pain is:

The proposed AI role is:

The main risk is:

Human control is required at:

The recommended decision is:

The next step is:
```

---

## Example Executive Summary

```text
The evaluated process is customer email triage.

The main business pain is delayed response to important customer messages.

The proposed AI role is to summarize, classify, prioritize, and draft replies.

The main risk is that AI could draft inaccurate or inappropriate customer communication.

Human control is required before any message is sent externally.

The recommended decision is Green — proceed with a controlled pilot.

The next step is to run a 4-week pilot on one shared customer service mailbox with mandatory human approval and audit logging.
```

## Key Statement

> A responsible AI assessment should end with a decision, not only a discussion.
