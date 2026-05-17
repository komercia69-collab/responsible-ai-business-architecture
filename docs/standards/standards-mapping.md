# External Standards Mapping

## NIST AI RMF, EU AI Act and Enterprise AI Governance

## Purpose

This document explains how Responsible AI Business Architecture relates to external AI governance standards, regulatory frameworks and enterprise governance approaches.

It does not claim that this project replaces any official standard, legal review, compliance program or security assessment.

Instead, it shows how the project can complement existing frameworks at the operational architecture level.

Responsible AI Business Architecture focuses on Human-AI Operational Coordination:

> how humans, organizations and AI systems remain accountable, observable, correctable and coordinated when AI begins to act inside real workflows.

---

## Positioning

Existing standards and frameworks help organizations define what responsible, trustworthy and compliant AI should mean.

Responsible AI Business Architecture asks a practical follow-up question:

> How do those principles become workflow boundaries, governance gateways, approval points, runtime controls, escalation paths and owner-level visibility?

In other words:

```text
External standards define governance expectations.
Responsible AI Business Architecture helps translate them into operational coordination architecture.
```

---

## What This Project Does Not Replace

This project does not replace:

- legal advice;
- compliance assessment;
- risk classification under applicable law;
- security review;
- privacy impact assessment;
- procurement review;
- model validation;
- formal audit;
- organizational policy approval;
- industry-specific regulatory requirements.

Any organization using AI in real operations should involve appropriate legal, compliance, security, privacy, risk and domain experts.

---

## What This Project Adds

Responsible AI Business Architecture adds an operational layer between high-level governance expectations and real AI-assisted workflows.

It helps define:

- what AI may analyze;
- what AI may recommend;
- what AI may draft;
- what AI may trigger;
- what AI may execute;
- what requires human approval;
- what must be logged;
- what must be reversible;
- what requires escalation;
- who remains accountable for operational impact.

This is especially relevant when AI systems move from passive assistance toward tool use, agentic workflows, business process automation and runtime decision support.

---

## Mapping to NIST AI Risk Management Framework

The NIST AI Risk Management Framework is commonly summarized around four core functions:

```text
Govern → Map → Measure → Manage
```

Responsible AI Business Architecture can support these functions as an operational architecture companion.

| NIST AI RMF function | RABA contribution |
|---|---|
| Govern | Defines accountability layers, governance gateways, human approval paths and role-based responsibility |
| Map | Maps AI action boundaries, workflow context, tool access, affected stakeholders and operational dependencies |
| Measure | Supports observability, governance signals, pilot readiness assessment, failure patterns and owner-level process dynamics |
| Manage | Supports escalation paths, corrective governance, runtime intervention, rollback logic and continuous feedback loops |

---

## NIST AI RMF: Practical Alignment Examples

| Governance expectation | Operational translation in this project |
|---|---|
| AI risks should be governed | Define who owns the workflow, who approves AI action and who can stop or correct the system |
| AI context should be mapped | Use AI Action Boundary Mapping to identify where AI analyzes, recommends, drafts, triggers or executes |
| AI risks should be measured | Use readiness assessments, governance observability and failure pattern scans |
| AI risks should be managed | Use Governance Gateway checks, human approval, escalation and correction loops |
| AI systems should be trustworthy | Preserve traceability, explainability of decisions, accountability and intervention capacity |

This project is not a NIST AI RMF implementation.

It is a practical architecture layer that can help teams discuss how NIST-like governance expectations appear inside actual workflows.

---

## Mapping to the EU AI Act

The EU AI Act introduces a risk-based approach to AI regulation.

Responsible AI Business Architecture does not classify systems legally and does not determine compliance status.

However, it can help organizations prepare operational evidence and governance structure around questions that become important in regulated AI contexts.

| EU AI Act concern area | RABA contribution |
|---|---|
| Risk-based AI governance | Helps map which workflow actions are low-risk, restricted, high-impact or require human control |
| Human oversight | Defines where human review, approval, escalation or intervention is required |
| Transparency | Supports logs, decision traces, user-facing explanations and owner-level visibility |
| Data governance | Encourages mapping of data categories, data access and decision context |
| Technical documentation | Provides structured workflow, boundary, gateway and pilot artifacts that may support documentation efforts |
| Monitoring after deployment | Uses Governance Nervous System, runtime governance and failure pattern monitoring concepts |
| Accountability | Keeps final operational responsibility assigned to human or organizational roles |

---

## EU AI Act: Practical Alignment Examples

| Regulatory-style question | Operational question in this project |
|---|---|
| Is the AI system high-risk? | Which workflow does it affect, what harm could occur and who is impacted? |
| Is there human oversight? | Where exactly can a human approve, block, correct or escalate AI output? |
| Is the system transparent enough? | What is logged, what is visible to users, managers and auditors? |
| Is the AI output used for decisions? | Does AI only support analysis, or does it influence operational action? |
| Can the organization monitor the system? | Which signals show drift, escalation pressure, policy violation or coordination failure? |
| Can errors be corrected? | Which actions are reversible and what recovery path exists? |

This project should be seen as a governance design companion, not as a legal compliance checklist.

---

## Mapping to Enterprise AI Governance

Enterprise AI governance often involves policies, approvals, risk assessments, model inventories, data governance, security review and audit processes.

Responsible AI Business Architecture contributes a workflow-level operational layer.

| Enterprise governance need | RABA contribution |
|---|---|
| AI use case intake | Minimal Human-AI Governance Pilot and readiness assessment |
| Role and responsibility clarity | Human-AI Operational Coordination Stack and accountability mapping |
| AI capability control | AI Action Boundary Mapping and Model-Agent Fit Governance |
| Tool and system access control | AI Governance Gateway and agent development kit governance mapping |
| Runtime monitoring | Governance Nervous System and governance observability concepts |
| Escalation and recovery | Corrective Governance and failure pattern scanning |
| Executive visibility | Human-AI Coordination Room and owner-level process dynamics view |
| Knowledge reuse | Project Hub, templates, use cases and governance vocabulary |

---

## Where RABA Fits in an Enterprise Governance Stack

```text
Board / Executive Governance
        ↓
Enterprise Risk, Legal, Compliance, Security and Privacy
        ↓
AI Governance Policy and Standards
        ↓
Responsible AI Business Architecture
        ↓
Workflow Governance: boundaries, gateways, approvals, logs, escalation
        ↓
AI Systems, Agents, Tools, Data and Business Processes
```

RABA is not the entire governance stack.

It is the operational coordination layer that helps make governance usable inside real AI-assisted workflows.

---

## Mapping Project Concepts to Governance Needs

| Project concept | Governance need addressed |
|---|---|
| Human-AI Operational Coordination Stack | End-to-end accountability and operational structure |
| AI Action Boundary Mapping | Clear separation between analysis, recommendation, drafting, triggering and execution |
| AI Governance Gateway | Control point before AI output becomes operational action |
| Governance Nervous System | Runtime monitoring, feedback and stabilization |
| Model-Agent Fit Governance | Choosing models according to task, risk, tools and responsibility |
| Agent Development Kit Governance Mapping | Governing skills, hooks, subagents, plugins and tool access |
| Failure Patterns | Detecting early signs of coordination, accountability or oversight breakdown |
| Minimal Human-AI Governance Pilot | Testing governance on one workflow before scaling autonomy |
| Trusted Decision Intelligence | Distinguishing data integrity from decision integrity |
| Human-AI Coordination Room | Owner-level visibility and operational interface design |

---

## Example: From Standard Principle to Workflow Control

High-level principle:

> AI systems should have appropriate human oversight.

Operational translation:

```text
AI drafts a customer support action
        ↓
Governance Gateway checks risk level, policy, tool access and reversibility
        ↓
Low-risk internal classification may proceed
        ↓
Customer-facing commitment requires human approval
        ↓
Refund above threshold requires manager approval
        ↓
Legal, medical, HR or vulnerable-person case escalates
        ↓
All recommendations, approvals, blocks and actions are logged
```

This is the type of translation Responsible AI Business Architecture is designed to support.

---

## Example: From Risk Assessment to Action Boundary

A traditional risk assessment may say:

> This AI use case has customer impact and therefore requires human oversight and monitoring.

RABA asks:

- What exact customer-impacting actions exist?
- Which of them may AI draft?
- Which of them may AI recommend?
- Which of them may AI execute?
- Which require human approval?
- Which are forbidden?
- Which are reversible?
- Which must be logged?
- Which trigger escalation?

This moves governance from general intention to operational design.

---

## How to Use This Mapping

Use this document when:

- explaining the project to governance, legal, risk or compliance audiences;
- preparing a responsible AI pilot;
- reviewing an AI agent workflow;
- connecting project concepts to recognized AI governance frameworks;
- discussing where operational coordination fits in enterprise AI governance;
- showing that the project complements, not replaces, external standards.

---

## Recommended Reading Path

For external standards alignment:

1. `docs/external-summary.md`
2. `PROJECT-VALUE.md`
3. `docs/standards/standards-mapping.md`
4. `docs/architecture/human-ai-operational-coordination-stack.md`
5. `docs/concepts/ai-action-boundary-mapping.md`
6. `docs/concepts/ai-governance-gateway.md`
7. `offers/minimal-human-ai-governance-pilot.md`

---

## Key Takeaways

- External standards define important governance expectations.
- Organizations still need to translate those expectations into real workflow controls.
- RABA focuses on that operational translation layer.
- It does not replace legal, compliance, privacy, security or regulatory review.
- It helps teams ask better questions before AI systems act inside business processes.
- Its strongest contribution is Human-AI Operational Coordination: boundaries, gateways, approvals, observability, escalation and correction.

> Standards define the expectation.
>
> Architecture makes it operational.
>
> Coordination keeps it governable.
