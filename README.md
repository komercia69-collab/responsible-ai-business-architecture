# Responsible AI Business Architecture

> **AI may be probabilistic. Responsibility must not be.**

Responsible AI Business Architecture (RABA) is an open-source research and architecture initiative for organizations designing AI-assisted or AI-agentic business workflows where human responsibility, operational control, auditability and governance must remain visible.

RABA focuses on a specific gap:

> AI agents are becoming able to act inside real business systems faster than organizations are defining who is accountable for those actions.

RABA is not an AI ethics manifesto, a compliance checklist or a security certification.

It is a practical operational architecture for making AI-supported actions accountable, reviewable and auditable.

For the project-level definition of responsibility, start with [`concepts/responsibility-definition.md`](concepts/responsibility-definition.md).

---

## Start Here

If you are new to the project, start with:

- [`docs/this-project-in-3-minutes.md`](docs/this-project-in-3-minutes.md)
- [`docs/start-here-by-role.md`](docs/start-here-by-role.md)

If you want to understand why this matters in a real operational pattern, read:

- [`docs/why-governance-matters.md`](docs/why-governance-matters.md)

If your organization is exploring AI in a real workflow, start with:

- [`docs/pilot-readiness-pack.md`](docs/pilot-readiness-pack.md)
- [`docs/pilot-partner-talk-track.md`](docs/pilot-partner-talk-track.md)
- [`docs/partner-engagement.md`](docs/partner-engagement.md)
- [`offers/minimal-human-ai-governance-pilot.md`](offers/minimal-human-ai-governance-pilot.md)

If you want to see a concrete example, use:

- [`use-cases/customer-support-agentic-bi-governance.md`](use-cases/customer-support-agentic-bi-governance.md)

If you want to see a minimal executable proof layer, use:

- [`examples/governance-gateway-demo/README.md`](examples/governance-gateway-demo/README.md)
- [`starter-kit/example-output.md`](starter-kit/example-output.md)

---

## Core RABA Concepts

RABA is currently organized around seven core concepts.

| Core concept | Start here | What it defines |
|---|---|---|
| **Operational Responsibility** | [`concepts/responsibility-definition.md`](concepts/responsibility-definition.md) | What responsibility means in AI workflows: authority, understanding, answerability, corrective duty and legal traceability |
| **Action Boundary** | [`architecture/responsibility-layer-for-agentic-ai-architecture.md`](architecture/responsibility-layer-for-agentic-ai-architecture.md) | Where AI assistance becomes operational action |
| **Approval States** | [`docs/approval-state-specification.md`](docs/approval-state-specification.md) | How AI-supported actions move from draft to recommendation, authorization, execution or escalation |
| **Governance Gateway** | [`docs/governance-gateway-implementation.md`](docs/governance-gateway-implementation.md) | The control point that evaluates state transitions before external execution |
| **Decision Log** | [`docs/decision-log-schema.md`](docs/decision-log-schema.md) | The business accountability record linked to technical traces |
| **Responsibility Observability** | [`architecture/responsibility-layer-for-agentic-ai-architecture.md`](architecture/responsibility-layer-for-agentic-ai-architecture.md) | How organizations see who was responsible, not only what happened technically |
| **Responsibility Event Stream** | [`implementation/responsibility-event-stream.md`](implementation/responsibility-event-stream.md) | The event-driven implementation pattern for responsibility transitions |

In short:

```text
governance concept → operational interface → implementation pattern
```

---

## Practical Entry Points by Audience

| If you are... | Start with | Why |
|---|---|---|
| Working in AI governance, compliance, legal, risk or audit | [`concepts/responsibility-definition.md`](concepts/responsibility-definition.md), [`docs/approval-state-specification.md`](docs/approval-state-specification.md), [`docs/decision-log-schema.md`](docs/decision-log-schema.md) | Understand responsibility as an operational and legally traceable structure, then see the state model and accountability record |
| Designing products, workflows, approvals or business operations | [`concepts/responsibility-management-interface.md`](concepts/responsibility-management-interface.md) | See how responsibility can become visible and manageable inside workflow interfaces |
| Building AI runtime, observability, policy, audit or event-driven infrastructure | [`docs/governance-gateway-implementation.md`](docs/governance-gateway-implementation.md), [`implementation/responsibility-event-stream.md`](implementation/responsibility-event-stream.md) | Explore how responsibility states become policy checks, decisions, events and audit trails |
| Working with MCP, tools or agentic execution | [`architecture/raba-mcp-governance-layer.md`](architecture/raba-mcp-governance-layer.md), [`security/mcp-responsibility-threat-map.md`](security/mcp-responsibility-threat-map.md) | Map tool execution and MCP security risks to responsibility architecture |
| Exploring a pilot | [`docs/pilot-readiness-pack.md`](docs/pilot-readiness-pack.md), [`docs/pilot-partner-talk-track.md`](docs/pilot-partner-talk-track.md), [`offers/minimal-human-ai-governance-pilot.md`](offers/minimal-human-ai-governance-pilot.md) | Apply RABA to one real workflow and scope a minimal pilot |

---

## Ready to Use Today

- [`concepts/responsibility-definition.md`](concepts/responsibility-definition.md) — project-level definition of operational responsibility in AI workflows.
- [`docs/approval-state-specification.md`](docs/approval-state-specification.md) — formal state model for AI-supported actions.
- [`docs/decision-log-schema.md`](docs/decision-log-schema.md) — minimum business accountability record.
- [`docs/governance-gateway-implementation.md`](docs/governance-gateway-implementation.md) — implementation pattern for the control point between AI intent and governed action.
- [`architecture/responsibility-layer-for-agentic-ai-architecture.md`](architecture/responsibility-layer-for-agentic-ai-architecture.md) — responsibility layer above technical agentic AI architecture.
- [`architecture/raba-mcp-governance-layer.md`](architecture/raba-mcp-governance-layer.md) — governance checkpoint for MCP tool execution.
- [`security/mcp-responsibility-threat-map.md`](security/mcp-responsibility-threat-map.md) — MCP security risks mapped to responsibility failures.
- [`concepts/responsibility-management-interface.md`](concepts/responsibility-management-interface.md) — interface concept for visible and manageable responsibility.
- [`implementation/responsibility-event-stream.md`](implementation/responsibility-event-stream.md) — event-driven implementation direction.
- [`docs/pilot-readiness-pack.md`](docs/pilot-readiness-pack.md) — compact pilot scoping overview for external conversations.
- [`docs/pilot-partner-talk-track.md`](docs/pilot-partner-talk-track.md) — 30–45 minute conversation guide for pilot discussions.
- [`offers/minimal-human-ai-governance-pilot.md`](offers/minimal-human-ai-governance-pilot.md) — practical pilot format for one real AI-assisted workflow.
- [`offers/pilot-partner-call.md`](offers/pilot-partner-call.md) — external-facing invitation for pilot partners.
- [`examples/governance-gateway-demo/README.md`](examples/governance-gateway-demo/README.md) — minimal executable Governance Gateway proof layer.
- [`starter-kit/example-output.md`](starter-kit/example-output.md) — example starter-kit output without running the code.

---

## Core Implementation Chain

RABA now has a minimal chain from governance concept to implementation pattern:

```text
Operational Responsibility
  ↓
Action Boundary
  ↓
Approval State Specification
  ↓
Governance Gateway
  ↓
Decision Log
  ↓
Responsibility Event Stream
  ↓
Responsibility Management Interface / Audit View
```

The key implementation documents are:

- [`concepts/responsibility-definition.md`](concepts/responsibility-definition.md)
- [`docs/approval-state-specification.md`](docs/approval-state-specification.md)
- [`docs/governance-gateway-implementation.md`](docs/governance-gateway-implementation.md)
- [`docs/decision-log-schema.md`](docs/decision-log-schema.md)
- [`implementation/responsibility-event-stream.md`](implementation/responsibility-event-stream.md)

---

## For Pilot Partners

If your organization is exploring AI in a real workflow, the recommended first step is narrow:

1. Choose one AI-assisted workflow.
2. Map where AI output becomes operational action.
3. Identify approval and escalation points.
4. Define what should be logged before autonomy increases.
5. Test the workflow with RABA approval states and decision logs.

Start with [`docs/pilot-readiness-pack.md`](docs/pilot-readiness-pack.md), [`docs/pilot-partner-talk-track.md`](docs/pilot-partner-talk-track.md), [`docs/partner-engagement.md`](docs/partner-engagement.md), or [`offers/minimal-human-ai-governance-pilot.md`](offers/minimal-human-ai-governance-pilot.md).

---

## Project Hub Overview

For a detailed file-by-file navigation map, see [`docs/repository-map.md`](docs/repository-map.md).

| Hub Area | Start Here | What It Helps You Do |
|---|---|---|
| **Orientation** | [`docs/this-project-in-3-minutes.md`](docs/this-project-in-3-minutes.md), [`docs/start-here-by-role.md`](docs/start-here-by-role.md), [`docs/60-minute-project-path.md`](docs/60-minute-project-path.md), [`docs/core-concepts-bundle.md`](docs/core-concepts-bundle.md) | Understand the project quickly and choose a practical route |
| **Core Specification** | [`concepts/responsibility-definition.md`](concepts/responsibility-definition.md), [`docs/approval-state-specification.md`](docs/approval-state-specification.md), [`docs/decision-log-schema.md`](docs/decision-log-schema.md), [`docs/governance-gateway-implementation.md`](docs/governance-gateway-implementation.md) | Understand operational responsibility, the state model, accountability record and gateway control point |
| **Governance Architecture** | [`architecture/responsibility-layer-for-agentic-ai-architecture.md`](architecture/responsibility-layer-for-agentic-ai-architecture.md), [`architecture/raba-mcp-governance-layer.md`](architecture/raba-mcp-governance-layer.md) | Map responsibility, action boundaries, gateways, delegated authority and MCP tool execution |
| **Responsibility Interface & Implementation** | [`concepts/responsibility-management-interface.md`](concepts/responsibility-management-interface.md), [`implementation/responsibility-event-stream.md`](implementation/responsibility-event-stream.md) | Make responsibility visible in interfaces and translate accountability into events |
| **Security & Threat Mapping** | [`security/mcp-responsibility-threat-map.md`](security/mcp-responsibility-threat-map.md), [`docs/failure-patterns/README.md`](docs/failure-patterns/README.md) | Connect security risks to responsibility failures and governance controls |
| **Proof Layer** | [`examples/governance-gateway-demo/README.md`](examples/governance-gateway-demo/README.md), [`starter-kit/example-output.md`](starter-kit/example-output.md), [`docs/diagrams/governance-gateway-flow.md`](docs/diagrams/governance-gateway-flow.md) | Run and understand a minimal Governance Gateway example |
| **Pilots & Use Cases** | [`docs/pilot-readiness-pack.md`](docs/pilot-readiness-pack.md), [`docs/pilot-partner-talk-track.md`](docs/pilot-partner-talk-track.md), [`offers/minimal-human-ai-governance-pilot.md`](offers/minimal-human-ai-governance-pilot.md), [`pilots/customer-communication-pilot.md`](pilots/customer-communication-pilot.md), [`use-cases/customer-support-agentic-bi-governance.md`](use-cases/customer-support-agentic-bi-governance.md) | Apply the framework to one real AI-assisted workflow |
| **Standards & Positioning** | [`docs/standards-alignment.md`](docs/standards-alignment.md), [`docs/external-summary.md`](docs/external-summary.md), [`PROJECT-VALUE.md`](PROJECT-VALUE.md) | Position RABA relative to existing governance and risk frameworks |
| **Project Direction** | [`docs/project-intent.md`](docs/project-intent.md), [`docs/project-development-tracks.md`](docs/project-development-tracks.md), [`whitepaper/governable-autonomy-whitepaper-v2.md`](whitepaper/governable-autonomy-whitepaper-v2.md) | Understand why the project exists and how it may evolve |

---

## Research Directions

The following concepts are important but currently experimental or exploratory. They should not be treated as finished products, certified methods or production-ready systems.

- **Governance Nervous System** — real-time coordination and stabilization layer for AI-native operational environments.
- **Living Human-AI Operational Interface** — adaptive coordination layer between humans and AI systems.
- **Personal AI Operational Twin** — model for AI-assisted personal or role-based workflow continuity.
- **Trusted Decision Intelligence** — AI + data integrity + human accountability for decision systems.
- **Model-Agent Fit Governance** — selecting models according to agent role, risk and authority.
- **Human-AI Operational Coordination Lattice** — exploratory model for multi-agent and multi-human coordination.

These ideas may become future architecture tracks, but the current core of RABA is the six-concept operational model above.

---

## AI-Assisted Review

If you are using ChatGPT, Claude, Gemini, GitHub Copilot or another AI assistant to review this repository, start with:

- [`PROJECT-CONTEXT-COMPACT.md`](PROJECT-CONTEXT-COMPACT.md)
- [`llms.txt`](llms.txt)
- [`AGENTS.md`](AGENTS.md)
- [`docs/ai-review-prompts.md`](docs/ai-review-prompts.md)
- [`docs/discovery-keywords.md`](docs/discovery-keywords.md)

These files help AI systems understand the project quickly without reading the entire repository or misclassifying it as only an AI ethics or compliance project.

---

## AI Collaboration Protocol

This project also documents how it works with AI systems.

[`docs/ai-collaboration-protocol.md`](docs/ai-collaboration-protocol.md) defines how AI can be used as a thinking and drafting partner without transferring responsibility away from the human author.

This is not only project documentation. It is an example of the project applying its own governance principles to its own working process.

---

## How RABA governs its own evolution

RABA is not only a framework for governing human-AI systems.

It applies the same discipline to its own development.

Major architectural changes are not merged directly from raw model output. Instead, RABA uses a structured multi-model governance process that turns recommendations into reviewed, traceable decisions.

In this project, the **Integrator** is the working integration role that compares recommendations and prepares repository changes. The **human owner remains the final accountable decision maker** for what becomes Canon.

The controlled workspace is practical, not abstract: it may include ChatGPT, Claude, Gemini, Comet/browser tabs, GitHub, templates, and Decision Log files. The accepted Canon is the project state stored in GitHub.

### Multi-model governance process

1. **Exploration**
   External reasoning models may propose changes using a structured Recommendation Card.

2. **Critical review**
   Alternative models stress-test proposals by looking for risks, failure modes, unclear assumptions, and implementation gaps.

3. **Synthesis**
   Recommendations are compared in a controlled workspace. Overlaps, conflicts, and trade-offs are made explicit before any change is accepted.

4. **Triage**
   The Integrator classifies each meaningful recommendation as accepted, partially accepted, deferred, or rejected.

5. **Governance Fit Check**
   The recommendation is evaluated against RABA-specific safeguards:

   - **Governance Gateway check** — does this change preserve or improve accountability, traceability, reviewability, and auditability?
   - **Action Boundary check** — does this change avoid uncontrolled expansion of system behavior or external effects?

6. **Decision Card**
   Significant decisions are summarized in a Decision Card before or during repository updates.

7. **Codification**
   Only accepted changes are merged into the project Canon and recorded in the Decision Log.

### Canon and Decision Log

RABA maintains two governance artifacts for its own evolution:

- **Canon** — the accepted project state stored in GitHub.
- **Decision Log** — a traceable record explaining why significant recommendations were accepted, partially accepted, deferred, or rejected.

Any major architectural change should be explainable through the Decision Log.

This separation prevents architectural drift, preserves the reasoning behind decisions, and makes the evolution of the framework auditable over time.

### Dogfooding governance

RABA deliberately applies its own governance discipline to its own development.

The project treats its evolution as a governed workflow:

```text
Expert input
→ Recommendation Card
→ Critical review
→ Synthesis
→ Triage
→ Governance Fit Check
→ Decision Card
→ Canon update
→ Decision Log
```

This is intentional dogfooding.

The framework should first pass its own governance discipline before it can credibly be used to govern other human-AI or multi-agent systems.

Related documents:

- [`docs/multi-ai-operating-model.md`](docs/multi-ai-operating-model.md)
- [`docs/ai-recommendation-triage-protocol.md`](docs/ai-recommendation-triage-protocol.md)
- [`docs/decision-log/README.md`](docs/decision-log/README.md)
- [`templates/ai-recommendation-card.md`](templates/ai-recommendation-card.md)
- [`templates/ai-decision-card.md`](templates/ai-decision-card.md)

---

## Core Idea

Artificial intelligence is moving from assistance to execution.

AI systems are increasingly becoming operational participants inside business workflows, enterprise systems, real-time operational environments and distributed decision architectures.

The challenge is evolving from controlling AI systems toward designing governable operational environments where humans, organizations and autonomous AI systems can coordinate responsibly.

> **We do not try to fully control intelligence.**
>
> **We design governable operational environments where humans, organizations and autonomous AI systems can cooperate responsibly.**

---

## Key Research Questions

- Where are the boundaries between AI analysis, recommendation, decision support, execution and accountability?
- What governance gateway is needed before AI output becomes operational action?
- How should approval states be represented technically and operationally?
- How can technical traces be linked to business decision records and named human accountability?
- How can responsibility events be captured, monitored and audited across AI workflows?
- How can organizations detect when approval becomes a rubber stamp?
- How can MCP-connected AI agents execute tools without losing accountability?
- How can external AI governance standards be translated into operational workflow controls?

---

## Visual Architecture

- See: [The Missing Governance Layer](assets/diagrams/raba-6th-layer.html)

<p align="center">
  <img src="assets/diagrams/governance-nervous-system.svg" alt="Governance Nervous System diagram" width="100%" />
</p>

<p align="center">
  <img src="assets/diagrams/mcp-governance-threat-map.svg" alt="MCP Governance Threat Map diagram" width="100%" />
</p>

---

## Who This Is For

This project is intended for:

- business owners and operational leaders;
- CTOs and heads of AI;
- enterprise architects and consultants;
- AI systems engineers and agent builders;
- governance, legal, compliance, audit, risk and security specialists;
- process designers and frontline practitioners working with AI-enabled workflows;
- researchers exploring Human-AI Operational Coordination.

---

## Relationship to Responsible AI

This project complements Responsible AI principles, AI risk frameworks and AI ethics discussions.

Its specific contribution is practical and architectural:

> turning Responsible AI into operational coordination architecture for AI-native organizations.

---

## Important Disclaimer

This project is an experimental governance architecture and research initiative.

It is not legal advice, a security certification, a compliance guarantee or complete protection against prompt injection, AI misuse or operational failure.

See [`DISCLAIMER.md`](DISCLAIMER.md) for limitations.

---

## Next Step

If you are new to the project, start with [`docs/this-project-in-3-minutes.md`](docs/this-project-in-3-minutes.md).

If you want to apply the framework, use [`docs/pilot-readiness-pack.md`](docs/pilot-readiness-pack.md), [`docs/pilot-partner-talk-track.md`](docs/pilot-partner-talk-track.md), [`docs/partner-engagement.md`](docs/partner-engagement.md), or [`offers/minimal-human-ai-governance-pilot.md`](offers/minimal-human-ai-governance-pilot.md) to map one real AI-assisted workflow.

If you want to contribute, open an issue with a concrete workflow, failure pattern, governance question or pilot scenario.

> **Governance must scale faster than autonomy.**

> **The human-AI interface must evolve faster than the AI systems it coordinates.**

> **Architecture and prototype must co-evolve faster than agent autonomy.**

> **We are not trying to invent the wheel. We are trying to help build a bridge.**
