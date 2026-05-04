# AI Readiness Mini-Workshop

A practical 30–45 minute workshop for teams that want to evaluate one business process for responsible AI adoption.

The goal is not to choose an AI tool immediately.

The goal is to help a team understand whether one concrete business process is a good candidate for a responsible AI pilot, what value AI may create, what risks must be controlled, and where human responsibility must remain clear.

## Workshop Outcome

By the end of the workshop, the team should have:

1. One clearly described business process.
2. A quick AI readiness score.
3. A first view of business value.
4. A first view of risk and data sensitivity.
5. A defined AI role.
6. A first human approval point.
7. A decision: pilot candidate, needs preparation, or not ready.
8. A next action.

## Who Should Attend

Recommended participants:

- process owner;
- one or two employees who know the real workflow;
- business manager or operations lead;
- IT or system architecture representative;
- DPO, compliance, or risk representative if sensitive data is involved;
- AI consultant or facilitator if available.

The workshop can also be run by a small team of 2–3 people for an early internal discussion.

## Recommended Group Size

Best size:

- 3–8 participants.

Larger groups should split into smaller working groups and compare results afterward.

## Materials Needed

- One selected business process.
- This workshop guide.
- [AI Readiness Quick Check](../lead-magnet/ai-readiness-quick-check.md)
- [AI Opportunity Map](../business-diagnosis/ai-opportunity-map.md)
- [Agent Permission Boundary Pattern](../architecture-patterns/agent-permission-boundary.md)
- [Confirmation Gate Pattern](../architecture-patterns/confirmation-gate.md)
- Notes document or whiteboard.

## Before the Workshop

Ask participants to choose one process, not an entire department.

Good examples:

- triage customer emails;
- extract invoice data;
- summarize support tickets;
- classify incoming documents;
- prepare weekly management report;
- search internal knowledge base.

Avoid vague scopes such as:

- automate customer service;
- automate finance;
- use AI in HR;
- implement AI everywhere;
- replace manual work.

## Workshop Agenda — 30 Minutes

### 0–5 min — Choose and Describe the Process

Answer:

- What is the process?
- Who uses it?
- What is the current pain?
- What is the expected improvement?

Output:

```text
Process:
Current pain:
Expected improvement:
Process owner:
```

### 5–10 min — Run the 7-Question Quick Check

Use:

[AI Readiness Quick Check](../lead-magnet/ai-readiness-quick-check.md)

Score the process from 0 to 14.

Output:

```text
Quick Check Score: __ / 14
Initial result: Good candidate / Needs preparation / Not ready yet
```

### 10–15 min — Define the AI Opportunity

Ask:

- What exactly should AI help with?
- Should AI summarize, classify, extract, search, draft, recommend, or prepare?
- What measurable value could this create?

Output:

```text
Possible AI role:
Expected business value:
Simple success metric:
```

### 15–20 min — Identify Data and Risk

Ask:

- What data would AI need?
- Is the data low, medium, high, or critical sensitivity?
- What could happen if AI is wrong?
- Can mistakes be corrected?

Output:

```text
Data involved:
Data sensitivity: Low / Medium / High / Critical
Decision risk: Low / Medium / High / Critical
Main risk:
```

### 20–25 min — Define Human Control

Ask:

- Where must AI stop?
- Where must a human review?
- Where must a human approve?
- Who is accountable for the final result?

Output:

```text
Human review point:
Human approval point:
Responsible owner:
What AI must not do:
```

### 25–30 min — Decide Next Step

Choose one:

- [ ] Good first pilot candidate
- [ ] Needs process preparation first
- [ ] Needs risk/compliance review first
- [ ] Not suitable as a first AI pilot
- [ ] Choose another process

Output:

```text
Decision:
Next action:
Owner:
Deadline:
```

## Extended Agenda — 45 Minutes

Use this version when the team has more time.

### 30–35 min — Permission Boundary

Use:

[Agent Permission Boundary Pattern](../architecture-patterns/agent-permission-boundary.md)

Choose the safest first permission level:

- [ ] No access
- [ ] Read only
- [ ] Draft only
- [ ] Recommend only
- [ ] Prepare for approval
- [ ] Execute after approval
- [ ] Autonomous low-risk
- [ ] Restricted / prohibited

Output:

```text
Recommended permission level:
Systems AI may access:
Systems AI may not access:
Actions AI may prepare:
Actions AI may not execute:
```

### 35–40 min — Confirmation Gate

Use:

[Confirmation Gate Pattern](../architecture-patterns/confirmation-gate.md)

Define what the human reviewer must see before approval:

- source data;
- AI output;
- proposed action;
- risk warning;
- edit option;
- reject option;
- escalation option.

Output:

```text
Confirmation Gate needed: Yes / No
Approver role:
Context shown to approver:
Approval logged: Yes / No
```

### 40–45 min — Pilot Scope and Metrics

Define a limited first pilot.

Ask:

- Can this be tested in one mailbox, department, document type, or workflow step?
- What is explicitly excluded?
- How will success be measured?

Output:

```text
Pilot scope:
Excluded from pilot:
Success metric 1:
Success metric 2:
Success metric 3:
Review date:
```

## Workshop Output Template

Copy and complete this after the workshop.

```markdown
# AI Readiness Mini-Workshop Output

## Business Process

Process:
Process owner:
Current pain:
Expected improvement:

## Quick Check

Score: __ / 14
Result: Good candidate / Needs preparation / Not ready

## AI Opportunity

AI role:
Expected value:
Success metric:

## Data and Risk

Data involved:
Data sensitivity:
Decision risk:
Main risk:

## Human Control

Human review point:
Human approval point:
Responsible owner:
What AI must not do:

## Permission Boundary

Recommended permission level:
AI may access:
AI may not access:
AI may prepare:
AI may not execute:

## Confirmation Gate

Gate needed:
Approver role:
Context shown to approver:
Approval logged:

## Pilot Decision

Decision:
Pilot scope:
Excluded from pilot:
Next action:
Owner:
Deadline:
```

## Example Workshop Result

```text
Process: Customer email triage
Current pain: Important customer messages are delayed or missed
AI role: Summarize, classify, prioritize, and draft replies
Data sensitivity: Medium
Decision risk: Medium
Human approval point: Before any customer reply is sent
Permission level: Prepare for approval
What AI must not do: Send messages, offer refunds, make legal promises
Pilot scope: One shared customer service mailbox for 4 weeks
Success metrics: First response time, correct classification rate, employee satisfaction
Decision: Good pilot candidate with mandatory human approval
```

## Red Flags During the Workshop

Pause or avoid piloting if:

- nobody owns the process;
- participants disagree on how the process works today;
- data sensitivity is high but no compliance person is involved;
- management expects immediate full automation;
- AI would need broad access to sensitive systems;
- human reviewers would not have enough time or context;
- there is no clear audit logging plan;
- mistakes may create legal, financial, employment, safety, or regulatory consequences.

## Recommended Follow-Up

After the workshop, continue with:

- [AI Pilot Readiness Scorecard](../templates/ai-pilot-readiness-scorecard.md)
- [AI Opportunity Map](../business-diagnosis/ai-opportunity-map.md)
- [Process Diagnosis Checklist](../business-diagnosis/process-diagnosis-checklist.md)
- [AI Integration Responsibility Matrix](../compliance/ai-integration-responsibility-matrix.md)

If the process is a strong candidate, open a structured issue:

[AI Use Case Review](../.github/ISSUE_TEMPLATE/ai-use-case-review.md)

## Key Statement

> A good AI pilot does not begin with a tool.  
> It begins with a process, a responsibility model, and a controlled first step.
