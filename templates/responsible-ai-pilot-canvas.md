# Responsible AI Pilot Canvas

A one-page working canvas for designing a responsible first AI pilot.

The canvas helps a person, team, consultant, or organization move from a vague AI idea to a structured pilot concept with business value, risk awareness, human control, permission boundaries, auditability, and next steps.

## Purpose

Many AI ideas start too broadly:

> We want to use AI in customer service.  
> We want to automate finance.  
> We want an AI agent for operations.

This canvas helps narrow the idea into one controlled pilot:

> One process.  
> One AI role.  
> One responsibility model.  
> One limited first step.

## When to Use This Canvas

Use this canvas after:

- completing the [AI Readiness Quick Check](../lead-magnet/ai-readiness-quick-check.md);
- running the [AI Readiness Mini-Workshop](../workshops/ai-readiness-mini-workshop.md);
- identifying a possible AI pilot candidate;
- receiving a proposed use case through an issue, meeting, or client conversation.

## Canvas Overview

```text
1. Business Process
2. Current Pain
3. Expected Business Value
4. AI Role
5. Data Involved
6. Risk Level
7. Human Control
8. Agent Permission Boundary
9. Confirmation Gate
10. Audit Log
11. Pilot Scope
12. Success Metrics
13. Red Flags
14. Pilot Decision
15. Next Step
```

---

# Responsible AI Pilot Canvas

## 1. Business Process

**Which concrete business process is being evaluated?**

Examples:

- customer email triage;
- invoice data extraction;
- internal knowledge search;
- support ticket classification;
- weekly reporting;
- document review.

```text
Business process:
Process owner:
Team / department:
Where the process starts:
Where the process ends:
```

## 2. Current Pain

**What problem exists today?**

Examples:

- slow response time;
- repeated manual work;
- errors;
- missed messages;
- unclear priorities;
- poor visibility;
- overloaded employees;
- inconsistent decisions.

```text
Current pain:
Who is affected:
How often it happens:
Why it matters:
```

## 3. Expected Business Value

**What value could AI create if used responsibly?**

Examples:

- faster processing;
- fewer manual steps;
- better prioritization;
- improved reporting;
- fewer missed cases;
- better employee support;
- improved customer response time.

```text
Expected value:
Business benefit:
Who benefits:
How value could be measured:
```

## 4. AI Role

**What should AI be allowed to do in the first pilot?**

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
Proposed AI role:
What AI prepares or recommends:
What AI must not do:
```

## 5. Data Involved

**What data would AI need to access?**

Examples:

- emails;
- invoices;
- support tickets;
- internal documents;
- CRM records;
- financial data;
- HR data;
- legal documents;
- health data.

```text
Data needed:
Data source:
Data owner:
Data that should be excluded:
```

## 6. Risk Level

**What is the risk if AI is wrong?**

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
Main risk:
Could mistakes be detected?
Could mistakes be corrected?
Worst realistic consequence:
```

## 7. Human Control

**Where must human review or approval happen?**

Examples:

- before sending a customer reply;
- before booking an invoice;
- before approving a payment;
- before changing a record;
- before escalating a legal, HR, or compliance case;
- before using AI output externally.

```text
Human review point:
Human approval point:
Reviewer role:
Responsible owner:
Can the human edit AI output? Yes / No
Can the human reject AI output? Yes / No
Can the human escalate the case? Yes / No
```

## 8. Agent Permission Boundary

**What permissions should the AI system or AI agent have?**

Choose the safest first permission level:

- [ ] No access
- [ ] Read only
- [ ] Draft only
- [ ] Recommend only
- [ ] Prepare for approval
- [ ] Execute after approval
- [ ] Autonomous low-risk
- [ ] Restricted / prohibited

```text
Recommended permission level:
Systems AI may access:
Systems AI may not access:
Actions AI may prepare:
Actions AI may not execute:
```

Use:

[Agent Permission Boundary Pattern](../architecture-patterns/agent-permission-boundary.md)

## 9. Confirmation Gate

**Is a Confirmation Gate required before action?**

A Confirmation Gate is required when AI output may affect a meaningful business outcome.

Examples:

- sending a message;
- changing official records;
- booking invoice data;
- creating or updating customer records;
- approving or escalating a case;
- triggering a workflow.

- [ ] Confirmation Gate required
- [ ] Confirmation Gate not required
- [ ] Not sure

```text
Action requiring approval:
Approver role:
What the approver must see:
Approval logged: Yes / No
```

Use:

[Confirmation Gate Pattern](../architecture-patterns/confirmation-gate.md)

## 10. Audit Log

**What should be logged?**

Choose relevant audit elements:

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
Minimum audit log:
Who can access audit logs:
How long logs should be retained:
```

## 11. Pilot Scope

**How can the first pilot be limited safely?**

Examples:

- one mailbox;
- one department;
- one supplier group;
- one document type;
- one workflow step;
- one internal knowledge area;
- read-only or draft-only mode first.

```text
Pilot scope:
Pilot duration:
Included:
Excluded:
Who participates:
```

## 12. Success Metrics

**How will the team know whether the pilot is useful?**

Examples:

- response time;
- processing time;
- number of manual steps reduced;
- classification accuracy;
- number of detected duplicates;
- employee satisfaction;
- customer response quality;
- fewer missed cases;
- better reporting visibility.

```text
Success metric 1:
Success metric 2:
Success metric 3:
Baseline if known:
Target if known:
```

## 13. Red Flags

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
- [ ] Not sure

```text
Main red flag:
How it could be reduced:
```

## 14. Pilot Decision

Choose one:

- [ ] Good first pilot candidate
- [ ] Promising but needs preparation
- [ ] Needs compliance / legal / security review first
- [ ] Not suitable as a first AI pilot
- [ ] Choose another process

```text
Decision:
Reason:
```

## 15. Next Step

Define one concrete next action.

```text
Next action:
Owner:
Deadline:
Support needed:
```

---

## Example Filled Canvas — Customer Email Triage

```text
Business process: Customer email triage
Current pain: Important messages are delayed or missed
Expected value: Faster prioritization and better draft replies
AI role: Summarize, classify, prioritize, draft reply
Data involved: Customer emails and limited order context
Data sensitivity: Medium
Decision risk: Medium
Human control: Human approval before sending any reply
Permission boundary: Prepare for approval
Confirmation Gate: Required before external communication
Audit log: Original email, AI summary, draft, human edits, final reply, approver, timestamp
Pilot scope: One shared customer service mailbox for 4 weeks
Success metrics: First response time, classification accuracy, employee satisfaction
Red flags: AI must not offer refunds or make legal promises
Pilot decision: Good first pilot candidate with mandatory human approval
Next step: Run 45-minute AI readiness workshop with customer service lead and IT
```

## Key Statement

> A responsible AI pilot is not defined by what AI can technically do.  
> It is defined by what the organization can responsibly control.
