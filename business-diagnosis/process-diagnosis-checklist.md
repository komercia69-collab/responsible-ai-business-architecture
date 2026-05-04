# Process Diagnosis Checklist

This checklist helps evaluate a business process before introducing AI.

The goal is to understand the real process, its risks, responsibility structure, data flows, and improvement potential before selecting tools, models, vendors, or automation platforms.

## Core Principle

> Do not automate what you do not understand.

Before AI is introduced, the organization should know how the process works, where it fails, who is responsible, and what consequences may follow from incorrect AI output.

## 1. Process Identification

Use this section to define the process clearly.

- [ ] What is the name of the process?
- [ ] What business goal does it support?
- [ ] Who owns the process?
- [ ] Which departments or roles are involved?
- [ ] Where does the process begin?
- [ ] Where does the process end?
- [ ] What is the expected output?
- [ ] How often does the process run?
- [ ] Is the process documented?
- [ ] Is the documented process the same as the real process?

## 2. Business Pain

Identify why this process is a candidate for AI support.

- [ ] Is the process slow?
- [ ] Is it repetitive?
- [ ] Does it require too much manual work?
- [ ] Are errors common?
- [ ] Are employees overloaded?
- [ ] Are customers affected by delays?
- [ ] Is management missing visibility?
- [ ] Are decisions inconsistent?
- [ ] Are documents or messages lost?
- [ ] Is the process expensive compared to its value?

## 3. Inputs and Outputs

Understand what information enters and leaves the process.

- [ ] What are the main inputs?
- [ ] What are the main outputs?
- [ ] Are inputs structured or unstructured?
- [ ] Are documents involved?
- [ ] Are emails involved?
- [ ] Are databases involved?
- [ ] Are external systems involved?
- [ ] Are outputs used in legally or financially relevant decisions?
- [ ] Are outputs checked by humans today?
- [ ] What happens when an output is wrong?

## 4. Data Sensitivity

Evaluate what kind of data AI would need to access.

- [ ] Does the process include personal data?
- [ ] Does it include financial data?
- [ ] Does it include health data?
- [ ] Does it include HR or employee data?
- [ ] Does it include customer confidential data?
- [ ] Does it include supplier or contract data?
- [ ] Does it include strategic business information?
- [ ] Does it include credentials, access tokens, or security data?
- [ ] Is data access currently role-based?
- [ ] Could AI be limited to only the minimum required data?

## 5. Decision Points

Identify where decisions happen.

- [ ] Which decisions are made in this process?
- [ ] Which decisions are routine?
- [ ] Which decisions require professional judgment?
- [ ] Which decisions create legal consequences?
- [ ] Which decisions create financial consequences?
- [ ] Which decisions affect customers or employees?
- [ ] Which decisions are reversible?
- [ ] Which decisions are difficult or impossible to reverse?
- [ ] Who makes each decision today?
- [ ] Who should remain responsible after AI support is introduced?

## 6. Current Responsibility Structure

AI should not be added to unclear responsibility structures.

- [ ] Is there a clear process owner?
- [ ] Is there a clear decision owner?
- [ ] Is there a clear escalation path?
- [ ] Is there a clear approval path?
- [ ] Are employees allowed to override system suggestions?
- [ ] Who handles exceptions?
- [ ] Who is accountable for mistakes today?
- [ ] Would accountability remain clear after AI is introduced?
- [ ] Could AI create confusion about responsibility?
- [ ] Is management willing to define responsibility formally?

## 7. AI Suitability

Evaluate whether AI is actually useful here.

- [ ] Can AI reduce repetitive work?
- [ ] Can AI summarize or classify information?
- [ ] Can AI extract fields from documents?
- [ ] Can AI detect anomalies or duplicates?
- [ ] Can AI prepare drafts for human review?
- [ ] Can AI improve reporting or visibility?
- [ ] Can AI support better prioritization?
- [ ] Can AI help employees without replacing their responsibility?
- [ ] Is the process stable enough for AI support?
- [ ] Is the process too chaotic and should be improved before AI?

## 8. Risk Classification

Classify the risk before defining AI autonomy.

### Low Risk

- [ ] Errors are easy to detect.
- [ ] Errors are easy to reverse.
- [ ] No sensitive data is involved.
- [ ] No legal or financial consequences are created.
- [ ] AI output is used only internally.

### Medium Risk

- [ ] Errors may create business cost.
- [ ] Errors may confuse customers or employees.
- [ ] Some sensitive or confidential data is involved.
- [ ] Human review is needed before business use.

### High Risk

- [ ] Errors may create legal consequences.
- [ ] Errors may create financial loss.
- [ ] Errors may affect rights, employment, payments, contracts, or compliance.
- [ ] Sensitive data is involved.
- [ ] Strong human approval and audit logging are required.

### Critical Risk

- [ ] Errors may affect safety, fundamental rights, regulated decisions, major financial actions, or legal obligations.
- [ ] Autonomous AI action should be restricted or prohibited.
- [ ] Formal governance is required before any implementation.

## 9. Human Oversight Design

Human control must be real, not symbolic.

- [ ] Where must human review be mandatory?
- [ ] Where must explicit human approval be required?
- [ ] Who is allowed to approve?
- [ ] Does the reviewer have enough context?
- [ ] Does the reviewer have enough time?
- [ ] Can the reviewer reject AI output?
- [ ] Can the reviewer edit AI output?
- [ ] Can the reviewer escalate unclear cases?
- [ ] Is approval logged?
- [ ] Is accountability after approval clear?

## 10. Confirmation Gate Need

Use a Confirmation Gate when AI output may trigger a meaningful business action.

- [ ] Would AI output change official records?
- [ ] Would AI output send communication to customers or partners?
- [ ] Would AI output affect payments?
- [ ] Would AI output affect employees?
- [ ] Would AI output affect contracts?
- [ ] Would AI output affect compliance obligations?
- [ ] Would AI output affect operational continuity?
- [ ] Would AI output be difficult to reverse?

If several answers are yes, a Confirmation Gate is likely required.

## 11. Audit and Logging

Define what must be stored.

- [ ] Input data used by AI
- [ ] AI output
- [ ] AI uncertainty or confidence signals if available
- [ ] Human reviewer
- [ ] Human edits
- [ ] Approval or rejection decision
- [ ] Timestamp
- [ ] Final executed action
- [ ] Override reason
- [ ] Error feedback
- [ ] Version of prompt, rule, or model where relevant

## 12. Pilot Readiness

A process is a good first AI pilot when:

- [ ] The business pain is clear.
- [ ] The process owner is known.
- [ ] The data needed for AI is available.
- [ ] The data is not too sensitive for a first pilot.
- [ ] The process is repetitive enough.
- [ ] The expected value is measurable.
- [ ] Human review is feasible.
- [ ] Errors are reversible or containable.
- [ ] The pilot can be limited in scope.
- [ ] Success metrics can be defined.

## 13. Avoid as First Pilot

Avoid starting with a process if:

- [ ] Responsibility is unclear.
- [ ] Data quality is poor.
- [ ] The process is politically sensitive.
- [ ] The process is safety-critical.
- [ ] The process creates major legal consequences.
- [ ] The process involves high-risk personal data.
- [ ] People do not understand the current workflow.
- [ ] Management expects full automation immediately.
- [ ] There is no time for human review.
- [ ] There is no audit logging plan.

## 14. Diagnosis Output

After using this checklist, the organization should be able to define:

1. Whether the process is suitable for AI support.
2. Which AI role is appropriate.
3. Which data boundaries are required.
4. Which decisions need human control.
5. Which risks must be managed.
6. Which audit elements are necessary.
7. Whether this process is suitable as a first pilot.

## Key Statement

> A process that is unclear for humans will become dangerous when accelerated by AI.
