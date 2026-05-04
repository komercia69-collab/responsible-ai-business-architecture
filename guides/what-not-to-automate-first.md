# What Not to Automate First

A practical guide for choosing safer first AI pilots.

Responsible AI adoption is not only about finding what AI can do.

It is also about knowing where not to start.

## Core Principle

> Do not start AI adoption with the process where a mistake can create the greatest harm.

A good first AI pilot should be useful, limited, measurable, reversible, and designed with human oversight.

A bad first AI pilot may create legal, financial, operational, safety, reputational, or human consequences before the organization has learned how to control AI properly.

## Why This Guide Matters

Many organizations are tempted to start with high-impact processes because they promise the biggest savings.

But high impact often means high risk.

A safer approach is:

1. start with controlled assistance;
2. keep human responsibility clear;
3. learn from a limited pilot;
4. improve data, workflow, and auditability;
5. scale only after evidence and governance exist.

## Do Not Start With Autonomous Payments

Avoid first pilots where AI can approve, release, or modify payments autonomously.

### Why This Is Risky

Payment processes involve:

- financial loss;
- fraud risk;
- supplier trust;
- accounting accuracy;
- audit requirements;
- legal and contractual obligations.

### Safer First AI Role

AI may:

- extract invoice data;
- detect duplicates;
- flag anomalies;
- suggest review priority;
- prepare payment information for human review.

AI should not:

- approve payments;
- change supplier bank details;
- release funds;
- bypass finance approval.

Recommended first approach:

> AI-assisted invoice review with mandatory human approval.

## Do Not Start With Employment or HR Decisions

Avoid first pilots where AI influences hiring, firing, promotion, performance evaluation, disciplinary action, or employee rights.

### Why This Is Risky

HR decisions may involve:

- discrimination risk;
- legal consequences;
- employee rights;
- bias and fairness concerns;
- sensitive personal data;
- reputational damage.

### Safer First AI Role

AI may:

- summarize documents;
- organize applications;
- identify missing information;
- prepare interview logistics;
- support internal HR knowledge search.

AI should not:

- rank candidates as final authority;
- reject candidates autonomously;
- make employment recommendations without human review;
- decide promotions, dismissals, or disciplinary actions.

Recommended first approach:

> AI support for administrative HR document handling, not employment decision-making.

## Do Not Start With Legal Conclusions

Avoid first pilots where AI gives final legal advice, approves contracts, interprets legal obligations, or decides legal strategy.

### Why This Is Risky

Legal work may involve:

- professional liability;
- jurisdiction-specific interpretation;
- confidentiality;
- contractual consequences;
- regulatory obligations;
- high cost of errors.

### Safer First AI Role

AI may:

- summarize documents;
- extract clauses;
- compare versions;
- identify missing sections;
- prepare questions for legal review.

AI should not:

- provide final legal conclusions;
- approve contracts;
- replace qualified legal review;
- make binding compliance decisions.

Recommended first approach:

> AI-assisted document preparation for qualified human legal review.

## Do Not Start With Safety-Critical Processes

Avoid first pilots where AI mistakes may affect physical safety, health, emergency response, critical infrastructure, or operational safety.

### Why This Is Risky

Safety-critical processes may involve:

- injury or death;
- regulatory requirements;
- emergency timing;
- complex edge cases;
- high cost of false positives or false negatives;
- public trust.

### Safer First AI Role

AI may:

- summarize maintenance logs;
- support documentation search;
- prepare training material;
- classify non-critical reports;
- identify patterns for human investigation.

AI should not:

- make autonomous safety decisions;
- override trained professionals;
- control physical systems without formal validation;
- replace regulated safety procedures.

Recommended first approach:

> AI support for documentation and non-critical analysis, not direct safety control.

## Do Not Start With Broad AI Agent Access

Avoid giving an AI agent broad access to email, documents, CRM, ERP, calendar, files, internal chat, and external APIs at the beginning.

### Why This Is Risky

Broad access can create:

- data leakage;
- permission creep;
- unclear accountability;
- unexpected tool combinations;
- unauthorized actions;
- difficulty auditing what happened;
- security and privacy issues.

### Safer First AI Role

Start with narrow access:

- one mailbox;
- one folder;
- one document type;
- one workflow step;
- read-only mode;
- draft-only mode;
- no autonomous execution.

Recommended first approach:

> Give AI the minimum permissions required for one controlled pilot.

Use:

[Agent Permission Boundary Pattern](../architecture-patterns/agent-permission-boundary.md)

## Do Not Start With Processes Nobody Understands

Avoid automating a process that employees cannot clearly explain.

### Why This Is Risky

If the current process is unclear, AI may accelerate confusion.

Problems may include:

- undocumented exceptions;
- hidden manual workarounds;
- unclear process ownership;
- inconsistent decision logic;
- poor data quality;
- informal approvals;
- responsibility gaps.

### Safer First AI Role

Before AI, map the process:

- who does what;
- where the process starts and ends;
- what data is used;
- where decisions happen;
- where errors occur;
- who approves;
- who is accountable.

Recommended first approach:

> Diagnose the process before automating it.

Use:

[Process Diagnosis Checklist](../business-diagnosis/process-diagnosis-checklist.md)

## Do Not Start With High-Sensitivity Data

Avoid first pilots where AI needs broad access to health data, HR data, legal files, financial records, credentials, security data, or highly confidential business information.

### Why This Is Risky

High-sensitivity data may involve:

- privacy obligations;
- confidentiality;
- regulatory requirements;
- security risk;
- reputational damage;
- strict access control;
- need for formal review.

### Safer First AI Role

Start with:

- lower-sensitivity data;
- anonymized or synthetic examples where possible;
- narrow access;
- clear permission boundaries;
- human review;
- audit logging.

Recommended first approach:

> Prove the workflow on lower-risk data before expanding access.

## Do Not Start With Customer-Facing Autonomous Communication

Avoid first pilots where AI sends messages directly to customers, partners, suppliers, or public audiences without human approval.

### Why This Is Risky

Autonomous external communication may create:

- wrong promises;
- reputational damage;
- legal or contractual misunderstandings;
- privacy leaks;
- inconsistent tone;
- customer dissatisfaction.

### Safer First AI Role

AI may:

- summarize messages;
- classify urgency;
- suggest routing;
- draft replies;
- highlight sensitive cases.

AI should not:

- send replies without approval;
- offer refunds autonomously;
- make legal or contractual promises;
- handle complaints without escalation rules.

Recommended first approach:

> AI drafts, humans approve before sending.

Use:

[Customer Email Triage AI Pilot](../examples/customer-email-triage-ai-pilot.md)

## Do Not Start With Full Automation as the First Goal

Avoid framing the first AI project as complete replacement of a process or team.

### Why This Is Risky

Full automation expectations may create:

- unrealistic timelines;
- employee resistance;
- hidden risk acceptance;
- weak human oversight;
- poor learning from the pilot;
- pressure to ignore errors;
- loss of trust.

### Safer First AI Role

Start with controlled assistance:

- summarize;
- classify;
- extract;
- draft;
- recommend;
- prepare for approval.

Recommended first approach:

> The first goal is not full automation. The first goal is controlled assistance with measurable value.

## Better First AI Pilot Candidates

Good first pilots are usually:

- limited in scope;
- low or medium risk;
- useful for real employees;
- repetitive enough;
- measurable;
- reversible;
- easy to explain;
- connected to a visible business pain;
- designed with human review;
- supported by audit logging.

Examples:

- customer email triage with human approval;
- invoice data extraction with accountant review;
- internal knowledge search with source references;
- support ticket classification;
- weekly management report drafts;
- document summarization for internal review.

## Quick Decision Rule

Before choosing a first AI pilot, ask:

1. Can a mistake be detected?
2. Can a mistake be corrected?
3. Is the data access limited?
4. Is human approval possible?
5. Is the process owner known?
6. Is the business value measurable?
7. Can the pilot be stopped safely?

If the answer to several of these is no, choose a safer process.

## Safer Starting Pattern

```text
Read / summarize / classify
→ Human review
→ Draft / recommend
→ Human approval
→ Controlled execution
→ Audit log
→ Feedback
→ Limited scaling
```

## Key Statement

> The safest first AI pilot is not the one with the biggest promise.  
> It is the one where value can be tested without losing responsibility.
