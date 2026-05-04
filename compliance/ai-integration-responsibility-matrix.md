# AI Integration Responsibility Matrix

The AI Integration Responsibility Matrix is a compliance-oriented tool for defining how AI may participate in business processes while preserving accountability, human oversight, and operational control.

It helps organizations decide:

- what AI is allowed to do;
- what AI must not do;
- where human approval is required;
- who remains responsible;
- what must be logged;
- which processes are suitable for a first AI pilot.

## Core Principle

> Probabilistic AI behavior must be surrounded by deterministic responsibility.

Even if an AI system produces uncertain or probabilistic outputs, the organization must clearly define who checks, who approves, who can override, and who is accountable for the final business action.

## Responsibility Matrix Template

| Business Process | AI Role | Data Sensitivity | Decision Risk | Human Control | Audit Requirement | Allowed Autonomy | Responsible Owner |
|---|---|---|---|---|---|---|---|
| Invoice processing | Extract and classify invoice data | Medium | Medium | Human review before booking | Store source document, AI output, reviewer, corrections | Assisted / semi-automated | Accounting lead |
| Customer email replies | Summarize and draft response | Medium | Low / Medium | Human approval before sending | Store original email, AI draft, final response, approver | Assisted | Customer service lead |
| Payment approval | Detect anomalies and recommend review | High | High | Mandatory human decision | Full audit trail, reason for approval, responsible approver | Recommend only | Finance manager |
| Financial reporting | Prepare draft management summary | Medium / High | Medium | Accountant or manager review | Store data sources, AI summary, human corrections | Assisted | Finance lead |
| HR candidate screening | Support document review only | High | High | Human decision required | Strong documentation, bias review, decision record | Restricted | HR manager / legal |
| Internal knowledge search | Search and summarize internal documents | Medium | Low / Medium | Human validation for critical answers | Query logs, source references, answer feedback | Assisted | Knowledge owner |
| Supplier selection | Compare supplier information | Medium / High | High | Human evaluation required | Store criteria, AI comparison, final decision rationale | Recommend only | Procurement lead |

## AI Role Categories

### 1. Support Only

AI may assist with reading, summarizing, searching, or structuring information.

AI does not recommend a business decision.

Suitable for:

- internal knowledge search
- document summarization
- meeting notes
- information extraction

### 2. Recommend

AI may suggest a decision or next step, but the human remains fully responsible for the decision.

Suitable for:

- prioritization
- anomaly detection
- risk flagging
- draft recommendations

### 3. Prepare for Approval

AI may prepare an action, but the action is not executed until a human confirms it.

Suitable for:

- email drafts
- invoice pre-filling
- workflow task creation
- report generation

### 4. Execute with Confirmation Gate

AI may trigger an action only after explicit human approval.

Suitable for:

- sending approved messages
- updating reviewed records
- creating approved tasks
- routing approved workflow items

### 5. Autonomous Execution

AI may execute actions without human confirmation.

This should be limited to low-risk, reversible, well-monitored processes.

Suitable only when:

- impact is low;
- mistakes are reversible;
- data is not highly sensitive;
- clear monitoring exists;
- escalation paths are defined.

## Data Sensitivity Levels

### Low

Data is non-sensitive and does not create significant legal, financial, or privacy risk.

Examples:

- public information
- generic process metadata
- non-confidential internal labels

### Medium

Data may include business-confidential information or limited personal data.

Examples:

- customer communication
- invoices
- internal reports
- supplier information

### High

Data includes sensitive personal, financial, legal, employment, health, or security-relevant information.

Examples:

- payment data
- HR data
- legal documents
- health data
- confidential contracts
- strategic financial information

## Decision Risk Levels

### Low Risk

A wrong AI output is easy to detect, easy to reverse, and unlikely to cause significant harm.

### Medium Risk

A wrong AI output may create business cost, customer confusion, internal disruption, or reputational friction.

### High Risk

A wrong AI output may create legal consequences, financial loss, regulatory issues, safety problems, discrimination, or significant reputational damage.

### Critical Risk

A wrong AI output may affect fundamental rights, safety-critical operations, major financial decisions, employment decisions, legal obligations, or regulatory compliance.

Critical processes require formal governance, strict human control, and may be unsuitable for autonomous AI action.

## Human Control Levels

| Level | Description | Suitable For |
|---|---|---|
| Optional Review | Human may review AI output but review is not mandatory | Low-risk summaries or tagging |
| Mandatory Review | Human must review before business use | Medium-risk outputs |
| Explicit Approval | Human must approve before action is executed | Financial, customer, or operational actions |
| Dual Approval | Two responsible humans or roles must approve | High-risk financial or legal actions |
| Formal Governance | Documented procedure, audit trail, and responsible authority required | Critical or regulated processes |

## Audit Requirements

The higher the risk, the stronger the audit trail should be.

Useful audit elements:

- input data used by AI;
- AI output;
- confidence or uncertainty signals if available;
- human reviewer;
- human changes;
- approval or rejection decision;
- timestamp;
- final executed action;
- reason for override;
- feedback for improvement.

## Allowed Autonomy Levels

| Autonomy Level | Meaning |
|---|---|
| No AI Action | AI may not participate in the process |
| Support Only | AI may summarize, search, or structure information |
| Recommend Only | AI may suggest but not prepare or execute actions |
| Assisted | AI may prepare drafts or classifications for review |
| Semi-Automated | AI may prepare actions that require confirmation |
| Autonomous Low-Risk | AI may act only in low-risk, reversible workflows |
| Restricted / Prohibited | Autonomous AI action is not allowed |

## Diagnostic Questions

Before assigning autonomy, ask:

1. What happens if the AI is wrong?
2. Can the mistake be reversed?
3. Who would be responsible for the consequence?
4. Is personal or sensitive data involved?
5. Does the process affect rights, money, employment, safety, or legal obligations?
6. Can a human realistically understand and review the AI output?
7. Is there enough time for meaningful review?
8. What evidence must be stored for audit and accountability?
9. Could employees over-trust the AI recommendation?
10. Is the process stable enough for automation?

## Red Flags

Be careful if:

- nobody owns the process;
- data quality is poor;
- people cannot explain the current decision logic;
- responsibility is already unclear;
- the AI would need broad access to sensitive data;
- employees are expected to approve AI decisions without time or context;
- the process affects legal rights, employment, safety, or major financial outcomes;
- there is no audit logging;
- there is no escalation path when AI is wrong.

## Recommended Use

Use this matrix during:

- AI readiness assessments;
- business process diagnosis;
- compliance-by-design workshops;
- early AI pilot selection;
- CTO / DPO discussions;
- vendor evaluation;
- internal governance planning.

## Practical Output

After completing this matrix, the organization should know:

1. Which processes are suitable for AI support.
2. Which processes require human approval.
3. Which processes should not be automated.
4. Who owns responsibility for each AI-supported process.
5. What must be logged.
6. Which pilot is safe enough to start first.

## Key Statement

> AI may be probabilistic.  
> Responsibility must not be.
