# AI Opportunity Map

The AI Opportunity Map is a practical tool for identifying where AI can create measurable business value and where it may introduce unacceptable risk.

It should be used before selecting AI tools, models, or technical vendors.

## Purpose

The goal is to diagnose business processes as part of a socio-technical system:

- people
- workflows
- data
- decisions
- responsibilities
- risks
- feedback loops
- legal and operational constraints

AI should not be introduced only because a process looks repetitive. It should be introduced where it can improve the system without damaging responsibility, control, safety, or trust.

## Core Question

> Where can AI safely improve business performance while preserving human responsibility and operational stability?

## Opportunity Map Template

| Business Process | Current Problem | Root Cause | Possible AI Role | Data Sensitivity | Decision Risk | Required Human Control | Expected Business Value | First Pilot Idea |
|---|---|---|---|---|---|---|---|---|
| Invoice processing | Manual work, delays, errors | Many documents, inconsistent formats | Extract and classify invoice data | Medium | Medium | Human review before booking | Faster processing, fewer errors | AI-assisted invoice classification |
| Customer emails | Important requests get lost | High volume, no prioritization | Summarize, classify, draft replies | Medium | Low / Medium | Human approval before sending | Faster response time | AI inbox triage assistant |
| Payment approval | Risk of wrong or unauthorized payment | Weak approval flow | Recommend only, detect anomalies | High | High | Mandatory human approval | Better risk detection | AI anomaly detection with no autonomous payment action |
| Financial reporting | Management receives late overview | Data spread across tools | Generate draft weekly summary | Medium / High | Medium | Accountant or manager review | Better visibility | AI-generated management summary |
| Internal knowledge search | Employees repeat the same questions | Knowledge not structured | Search and summarize internal documents | Medium | Low / Medium | Human validation for critical answers | Less time wasted | Internal AI knowledge assistant |

## AI Role Types

Use these categories to define what AI is allowed to do.

### 1. Observe

AI only reads, summarizes, classifies, or detects patterns.

Examples:

- summarize emails
- classify invoices
- detect duplicate documents
- identify process bottlenecks

### 2. Recommend

AI suggests an action, but does not execute it.

Examples:

- recommend payment priority
- suggest customer reply
- suggest risk category
- propose next workflow step

### 3. Prepare

AI prepares an action for human confirmation.

Examples:

- draft an email
- prepare a report
- pre-fill accounting fields
- prepare a task for approval

### 4. Execute with Confirmation Gate

AI may trigger an action only after explicit human approval.

Examples:

- send a prepared email after review
- update a non-critical record after approval
- create a task after manager confirmation

### 5. Autonomous Execution

AI acts without human approval.

This should be restricted to low-risk, reversible, well-monitored processes.

Examples:

- tagging low-risk documents
- routing non-sensitive internal tasks
- generating non-binding reminders

## Risk Levels

### Low Risk

Mistakes are reversible and have no major legal, financial, safety, or reputational impact.

### Medium Risk

Mistakes may create business cost, customer dissatisfaction, or internal disruption, but can be corrected with review.

### High Risk

Mistakes may create legal consequences, financial loss, data protection issues, safety problems, or significant reputational damage.

High-risk processes require strong human oversight, audit logging, access control, and clear accountability.

## Diagnostic Questions

Use these questions during interviews with employees, managers, process owners, and technical teams.

### Process Understanding

- What is the process trying to achieve?
- Who owns the process?
- Which people or teams are involved?
- What are the main inputs and outputs?
- Where does the process usually slow down?
- Where do errors happen most often?

### Data and Systems

- Which systems are used?
- Where is the relevant data stored?
- Is the data structured or unstructured?
- Is personal or sensitive data involved?
- Who has access to the data today?
- Would AI need access to confidential information?

### Decisions and Responsibility

- Which decisions are made inside this process?
- Which decisions are routine?
- Which decisions are legally, financially, or operationally important?
- Who is responsible for the final decision today?
- Could this responsibility remain clear after AI is introduced?

### AI Suitability

- Can AI reduce repetitive manual work?
- Can AI improve speed without reducing quality?
- Can AI improve visibility or reporting?
- Can AI help employees make better decisions?
- What should AI never be allowed to do in this process?

### Control and Feedback

- Where should human confirmation be mandatory?
- What should be logged?
- Who can override the AI output?
- How will errors be detected?
- How will the organization learn from feedback?

## Recommended First Pilot Criteria

A good first AI pilot should be:

- limited in scope
- easy to explain
- measurable
- low or medium risk
- reversible
- useful for real employees
- connected to a visible business pain
- designed with human oversight

Avoid starting with processes that are:

- legally sensitive
- safety-critical
- financially irreversible
- poorly understood
- politically sensitive inside the organization
- dependent on low-quality data

## Output of the AI Opportunity Map

After completing the map, the organization should have:

1. A list of possible AI use cases.
2. A first risk classification.
3. A basic human oversight model.
4. A shortlist of safe pilot candidates.
5. A clearer understanding of where AI should not be introduced yet.

## Practical Principle

> Start with the business process, not the AI tool.

A responsible AI project begins by understanding how the organization works, where it suffers, where responsibility lies, and where controlled automation can create real value.
