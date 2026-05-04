# AI Pilot Readiness Scorecard

A practical detailed assessment for organizations preparing a responsible AI pilot.

This scorecard is more detailed than the public-facing AI Readiness Quick Check. It can be used after a team has identified a promising business process and wants to evaluate business value, process clarity, data risk, human control, and pilot readiness more carefully.

## When to Use This Scorecard

Use this scorecard when:

- a business process looks like a possible AI pilot candidate;
- the team wants a more structured evaluation;
- a consultant or internal transformation lead is preparing a workshop;
- the organization needs to compare several possible AI pilot ideas;
- risk, responsibility, and human oversight need to be discussed before selecting tools.

## How to Use It

Choose one business process that your organization may want to improve with AI.

Examples:

- customer emails;
- invoice processing;
- internal knowledge search;
- reporting;
- document review;
- support ticket triage;
- procurement;
- HR document handling.

Score each question:

- 0 = no / unclear
- 1 = partly
- 2 = yes / clear

Use the score to decide whether the process is ready for an AI pilot, needs preparation, or should not be automated yet.

## Section 1 — Business Value

| Question | Score |
|---|---:|
| Is the process repetitive or time-consuming? |  |
| Does the process create visible business pain today? |  |
| Would faster processing create measurable value? |  |
| Are employees overloaded by this process? |  |
| Can success be measured with simple metrics? |  |

**Subtotal: ____ / 10**

## Section 2 — Process Clarity

| Question | Score |
|---|---:|
| Is the process owner clearly known? |  |
| Is the real workflow understood by the team? |  |
| Are the main inputs and outputs clear? |  |
| Are common errors or delays known? |  |
| Is there a clear escalation path for exceptions? |  |

**Subtotal: ____ / 10**

## Section 3 — Data and Risk

| Question | Score |
|---|---:|
| Is the required data clearly identified? |  |
| Can AI access be limited to only necessary data? |  |
| Are sensitive data risks understood? |  |
| Are wrong AI outputs reversible or containable? |  |
| Is the process not safety-critical or legally critical as a first pilot? |  |

**Subtotal: ____ / 10**

## Section 4 — Human Control

| Question | Score |
|---|---:|
| Is it clear where human review is required? |  |
| Is it clear who may approve AI-supported actions? |  |
| Can the human reviewer see enough context? |  |
| Can the reviewer edit, reject, or escalate AI output? |  |
| Would approval decisions be logged? |  |

**Subtotal: ____ / 10**

## Section 5 — Pilot Readiness

| Question | Score |
|---|---:|
| Can the pilot be limited to one team, mailbox, department, or process area? |  |
| Can the AI role be limited to summarize, classify, recommend, or draft? |  |
| Can autonomous execution be avoided in the first version? |  |
| Can audit logs be created from the beginning? |  |
| Is there a responsible person who can review pilot results? |  |

**Subtotal: ____ / 10**

## Total Score

Add all section subtotals.

**Total: ____ / 50**

## Interpretation

### 40–50 points — Good Pilot Candidate

The process may be suitable for a first controlled AI pilot.

Recommended next step:

- define the AI role;
- add a Confirmation Gate where needed;
- define audit requirements;
- run a limited pilot with clear metrics.

### 25–39 points — Prepare Before Piloting

The process may have potential, but the organization should prepare first.

Recommended next step:

- clarify process ownership;
- define data boundaries;
- identify risk points;
- design human review;
- avoid autonomous action.

### 0–24 points — Not Ready Yet

The process is probably not ready for AI integration.

Recommended next step:

- understand the process better;
- reduce chaos;
- define responsibility;
- improve data quality;
- start with a lower-risk process.

## Red Flags

Be careful if any of these are true:

- nobody owns the process;
- the process affects payments, employment, legal rights, safety, or sensitive personal data;
- people cannot explain how decisions are made today;
- AI would need broad access to confidential systems;
- employees would be expected to approve AI output without context;
- there is no audit logging plan;
- management expects full automation immediately.

If several red flags are present, do not start with autonomous AI.

## Recommended First AI Roles

For a first pilot, prefer:

- summarize;
- classify;
- extract;
- search;
- draft;
- recommend;
- prepare for approval.

Avoid as a first step:

- autonomous sending;
- autonomous payment approval;
- autonomous legal decisions;
- autonomous HR decisions;
- unrestricted agent access;
- automatic changes to official records.

## What This Scorecard Gives You

After using this tool, you should know:

1. Whether the process is a reasonable AI pilot candidate.
2. Where the business value may be.
3. Where risk and responsibility need attention.
4. Whether human confirmation is required.
5. What should be clarified before selecting AI tools.

## Next Step

If the process looks promising, continue with:

- [AI Opportunity Map](../business-diagnosis/ai-opportunity-map.md)
- [Process Diagnosis Checklist](../business-diagnosis/process-diagnosis-checklist.md)
- [Confirmation Gate Pattern](../architecture-patterns/confirmation-gate.md)
- [Agent Permission Boundary Pattern](../architecture-patterns/agent-permission-boundary.md)
- [AI Integration Responsibility Matrix](../compliance/ai-integration-responsibility-matrix.md)

## Key Statement

> Do not ask only what AI can do.  
> Ask what AI should be allowed to do, under whose responsibility, with which controls, and for which business value.
