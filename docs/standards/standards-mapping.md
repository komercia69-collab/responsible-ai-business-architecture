# Standards Mapping

## NIST AI RMF, EU AI Act and Enterprise AI Governance

## Positioning

External standards define governance expectations.

Responsible AI Business Architecture helps translate them into operational coordination architecture.

This project does not claim to replace legal, compliance, security, privacy or audit review.

It is an operational architecture companion to recognized governance frameworks and regulatory expectations.

The central question is:

> How do high-level governance expectations become workflow boundaries, governance gateways, approval points, runtime controls, escalation paths, logs and owner-level visibility?

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

## NIST AI RMF Alignment

The NIST AI Risk Management Framework is commonly summarized around four core functions:

```text
Govern → Map → Measure → Manage
```

Responsible AI Business Architecture can support these functions as an operational architecture companion.

### Govern

Governance expectation:

```text
Establish accountability, roles, governance culture and oversight structure.
```

| Project element | Operational contribution | File |
|---|---|---|
| Human–AI Operational Coordination Stack | Defines the accountability and coordination layers between humans, AI agents and execution environments | `docs/architecture/human-ai-operational-coordination-stack.md` |
| Governance Principles | Provides core principles for responsible AI-enabled operations | `docs/governance-principles.md` |
| AI Action Boundary Mapping | Clarifies where AI may observe, analyze, recommend, draft, trigger or execute | `docs/concepts/ai-action-boundary-mapping.md` |
| Model–Agent Fit Governance | Treats model choice as a governance decision connected to agent role, risk, tools and accountability | `docs/concepts/model-agent-fit-governance.md` |

---

### Map

Governance expectation:

```text
Identify AI use context, affected workflows, stakeholders, risks and operational dependencies.
```

| Project element | Operational contribution | File |
|---|---|---|
| AI Action Boundary Mapping | Maps where AI affects workflow actions and where human responsibility must remain explicit | `docs/concepts/ai-action-boundary-mapping.md` |
| Failure Patterns | Identifies recurring ways AI-native environments can lose governability, coordination or judgment | `docs/failure-patterns/README.md` |
| Erosion of Human Judgment | Maps risk of weakened human review during fast AI-assisted execution | `docs/failure-patterns/erosion-of-human-judgment.md` |
| Agent Design Without Governance Architecture | Maps risk of agents built without mission clarity, boundaries, oversight and recovery paths | `docs/failure-patterns/agent-design-without-governance-architecture.md` |

---

### Measure

Governance expectation:

```text
Analyze, assess and monitor AI risks, governance readiness and operational control quality.
```

| Project element | Operational contribution | File |
|---|---|---|
| AI Governance Readiness Assessment | Helps assess whether a workflow or organization is ready for AI-enabled operations | `frameworks/ai-governance-readiness-assessment.md` |
| Governance Observability | Defines governance signals beyond technical performance monitoring | `docs/governance-observability.md` |
| Governance Nervous System | Monitors signals, drift, escalations, approvals and governance pressure in AI-native operations | `docs/concepts/governance-nervous-system.md` |
| Governance Maturity Model | Defines progression from AI chaos to governed workflows and AI-native governance | `whitepaper/governable-autonomy-whitepaper-v2.md` |

---

### Manage

Governance expectation:

```text
Prioritize, respond to, mitigate and recover from AI-related risks.
```

| Project element | Operational contribution | File |
|---|---|---|
| AI Governance Gateway | Provides a control point before AI output becomes operational action | `docs/concepts/ai-governance-gateway.md` |
| Executable Governance Gateway Demo | Demonstrates policy-to-decision-log flow in runnable code | `examples/governance-gateway-demo/` |
| Corrective Governance Layer | Defines intervention, containment, escalation and rollback mechanisms | `architecture/corrective-governance-layer.md` |
| Incident Response Playbook | Supports structured response to governance incidents | `docs/incident-response-playbook.md` |
| Minimal Human–AI Governance Pilot | Tests governance on one workflow before autonomy scales | `offers/minimal-human-ai-governance-pilot.md` |

---

## NIST AI RMF: Practical Translation

| NIST-style expectation | Operational translation in this project |
|---|---|
| AI risks should be governed | Define who owns the workflow, who approves AI action and who can stop or correct the system |
| AI context should be mapped | Use AI Action Boundary Mapping to identify where AI analyzes, recommends, drafts, triggers or executes |
| AI risks should be measured | Use readiness assessments, governance observability and failure pattern scans |
| AI risks should be managed | Use Governance Gateway checks, human approval, escalation and correction loops |
| AI systems should be trustworthy | Preserve traceability, accountability, intervention capacity and decision logs |

This project is not a NIST AI RMF implementation.

It is a practical architecture layer that helps teams discuss how NIST-like governance expectations appear inside actual workflows.

---

## EU AI Act Relevance

The EU AI Act establishes a risk-based approach to AI systems deployed or used in the European Union.

Responsible AI Business Architecture does not classify systems legally and does not determine compliance status.

However, it can help organizations prepare operational evidence, workflow controls and governance structure around questions that become important in regulated AI contexts.

| EU AI Act expectation or concern | Project element | File or proof layer |
|---|---|---|
| Human oversight for high-impact or high-risk AI contexts | AI Action Boundary Mapping + AI Governance Gateway | `docs/concepts/ai-action-boundary-mapping.md`, `docs/concepts/ai-governance-gateway.md` |
| Logging and auditability | Decision logging in the executable Governance Gateway demo | `examples/governance-gateway-demo/decision-log-example.json` |
| Risk management system | Governance Nervous System + failure pattern scanning | `docs/concepts/governance-nervous-system.md`, `docs/failure-patterns/README.md` |
| Transparency and explainability to operators or users | Human–AI Coordination Room and owner-level visibility | `demo/human-ai-coordination-room.html` |
| Incident detection and response | Corrective Governance Layer + Incident Response Playbook | `architecture/corrective-governance-layer.md`, `docs/incident-response-playbook.md` |
| Accountability assignment | Human–AI Operational Coordination Stack | `docs/architecture/human-ai-operational-coordination-stack.md` |
| Data and model documentation support | Model–Agent Fit Governance and workflow mapping artifacts | `docs/concepts/model-agent-fit-governance.md` |
| Human review before sensitive action | Governance Gateway decisions: `REQUIRE_APPROVAL` and `ESCALATE` | `examples/governance-gateway-demo/` |

---

## EU AI Act: Practical Questions

| Regulatory-style question | Operational question in this project |
|---|---|
| Is the AI system high-risk? | Which workflow does it affect, what harm could occur and who is impacted? |
| Is there meaningful human oversight? | Where exactly can a human approve, block, correct or escalate AI output? |
| Is the system transparent enough? | What is logged, what is visible to users, managers, owners and auditors? |
| Is AI output used for decisions? | Does AI only support analysis, or does it influence operational action? |
| Can the organization monitor the system after deployment? | Which signals show drift, escalation pressure, policy violation or coordination failure? |
| Can errors be corrected? | Which actions are reversible and what recovery path exists? |

This project should be seen as a governance design companion, not as a legal compliance checklist.

---

## Enterprise AI Governance Alignment

Enterprise AI governance often involves policies, approvals, risk assessments, model inventories, data governance, security review and audit processes.

Responsible AI Business Architecture contributes a workflow-level operational layer.

| Enterprise governance expectation | Project element | Operational value |
|---|---|---|
| AI use case intake | Minimal Human–AI Governance Pilot | Helps start from one bounded workflow |
| Role and responsibility clarity | Human–AI Operational Coordination Stack | Maps who remains accountable |
| Defined AI action boundaries | AI Action Boundary Mapping | Separates analysis, recommendation, drafting, triggering and execution |
| Runtime controls | AI Governance Gateway + executable demo | Turns policy into runtime decision logic |
| Escalation and override paths | Corrective Governance Layer | Supports containment, escalation and recovery |
| Executive visibility | Owner Control Center + Executive Governance Portal | Makes governance visible to business owners and leaders |
| Audit trail | Decision logging in the Governance Gateway demo | Shows how actions and decisions can be recorded |
| Failure pattern awareness | Failure Patterns library | Helps detect early signs of governance breakdown |
| Pilot-first approach | Minimal Human–AI Governance Pilot | Tests governance before scaling autonomy |

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

Responsible AI Business Architecture is not the entire governance stack.

It is the operational coordination layer that helps make governance usable inside real AI-assisted workflows.

---

## Proof Layer: Governance Gateway Demo

The project includes a minimal executable Governance Gateway demo:

```text
examples/governance-gateway-demo/
```

This moves the project from:

```text
framework-as-document
```

toward:

```text
framework-as-proof
```

The demo flow is:

```text
AI agent action
        ↓
Governance policy check
        ↓
Decision: ALLOW / BLOCK / REQUIRE_APPROVAL / ESCALATE
        ↓
Decision log
```

Run:

```bash
node examples/governance-gateway-demo/governance-gateway.js
```

The demo includes:

| File | Purpose |
|---|---|
| `governance-policy.json` | Defines allowed agents, action types, thresholds, forbidden categories and approval rules |
| `sample-agent-actions.json` | Provides example AI agent action requests |
| `governance-gateway.js` | Evaluates action requests against governance policy |
| `decision-log-example.json` | Shows logged decisions, reasons, policy ID, timestamp and original action |

This demonstrates a core governance mechanism that NIST AI RMF, EU AI Act concerns and enterprise governance programs all need in practice:

```text
A controlled point between AI capability and operational action,
with policy checks, decision outcomes, human approval paths,
escalation paths and logging.
```

---

## Failure Patterns as Risk Support

Failure patterns in this project support risk identification across NIST AI RMF, EU AI Act and enterprise governance discussions.

They help identify where AI-native operations can lose responsibility, judgment, accountability or coordination even when individual AI outputs appear correct.

| Failure pattern or category | Related risk category |
|---|---|
| Erosion of Human Judgment | Human oversight failure |
| Agent Design Without Governance Architecture | System design and delegation risk |
| Coordination Gaps Between Humans and AI Agents | Operational coordination risk |
| Escalation Saturation | Human review capacity risk |
| Coordination Collapse | Systemic operational breakdown risk |
| Oversight Latency | Delayed human intervention risk |
| Runtime Governance Drift | Monitoring and control failure |
| Architectural Opacity | Loss of system-level explainability |
| Context Drift Across AI-Assisted Workflows | Data and context integrity risk |
| Explainability Fragmentation | Fragmented accountability and explanation risk |

---

## From Standard Principle to Workflow Control

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

## From Risk Assessment to Action Boundary

A traditional risk assessment may say:

> This AI use case has customer impact and therefore requires human oversight and monitoring.

Responsible AI Business Architecture asks:

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

## Recommended Reading Path

For external standards alignment:

1. `docs/external-summary.md`
2. `PROJECT-VALUE.md`
3. `docs/standards/standards-mapping.md`
4. `docs/architecture/human-ai-operational-coordination-stack.md`
5. `docs/concepts/ai-action-boundary-mapping.md`
6. `docs/concepts/ai-governance-gateway.md`
7. `examples/governance-gateway-demo/README.md`
8. `offers/minimal-human-ai-governance-pilot.md`

---

## Key Takeaways

- External standards define important governance expectations.
- Organizations still need to translate those expectations into real workflow controls.
- Responsible AI Business Architecture focuses on that operational translation layer.
- It does not replace legal, compliance, privacy, security or regulatory review.
- It helps teams ask better questions before AI systems act inside business processes.
- Its strongest contribution is Human-AI Operational Coordination: boundaries, gateways, approvals, observability, escalation and correction.
- The executable Governance Gateway demo shows how a policy-to-decision-log control point can work at minimal scale.

> Standards define the expectation.
>
> Architecture makes it operational.
>
> Coordination keeps it governable.
