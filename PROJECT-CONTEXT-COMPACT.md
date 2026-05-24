# Project Context Compact

> A short context package for AI-assisted work on this repository.

Use this file when working with ChatGPT, Claude or another AI assistant so the model does not need the full repository or previous conversation history.

---

## Project

**Responsible AI Business Architecture**

Core principle:

> AI may be probabilistic. Responsibility must not be.

The project explores Human–AI Operational Coordination: how organizations can use AI assistants, copilots and agents in real business workflows without losing human responsibility, visibility, approval, correction and operational control.

---

## Current Positioning

This repository is not a finished doctrine, compliance certification or legal/security guarantee.

It is an open-source research and architecture initiative that provides:

- orientation material;
- governance concepts;
- workflow-level pilot formats;
- concrete use cases;
- diagrams;
- prototypes;
- a minimal Governance Gateway proof layer;
- a practical Policy Integrity Self-Assessment for detecting governance drift risk in one workflow or action class.

The practical goal is to help people map where AI autonomy meets human responsibility and verify whether governed speed is protected from policy drift.

---

## Current Repository Shape

The repository now uses this structure:

- `README.md` — short public front door and main navigation hub
- `docs/repository-map.md` — detailed file-by-file navigation map
- `docs/this-project-in-3-minutes.md` — fastest short overview
- `docs/start-here-by-role.md` — role-based entry paths
- `docs/ai-collaboration-protocol.md` — how the project works with AI without transferring human responsibility
- `concepts/responsibility-definition.md` — operational responsibility definition and temporal responsibility model
- `concepts/responsibility-throughput-model.md` — governed speed, Fast Path, Review Path, Escalation Path and Governed Bypass Lane
- `concepts/speed-protection-principle.md` — accountable speed as product value, including policy integrity and governance drift prevention
- `concepts/policy-integrity.md` — standalone concept for policy integrity and governance drift prevention
- `docs/policy-integrity-self-assessment.md` — practical 45-question assessment for policy integrity and governance drift risk
- `offers/pilot-partner-call.md` — external invitation for potential pilot partners
- `offers/minimal-human-ai-governance-pilot.md` — detailed pilot format for one workflow
- `use-cases/customer-support-agentic-bi-governance.md` — concrete workflow example
- `examples/governance-gateway-demo/README.md` — minimal executable proof layer

---

## Current Working Direction

Recent work focused on strengthening RABA's core governance architecture and making Policy Integrity practically usable:

1. README was restructured into three explicit levels: Principles, Architecture, Implementation.
2. Policy Integrity was added as a standalone concept.
3. Governance drift was recognized as a first-class risk.
4. Speed Protection was strengthened with governance drift prevention.
5. The Responsibility Throughput Model was strengthened with Governed Bypass Lane prohibitions.
6. Fast Path percentage was clarified as a diagnostic metric, not a performance target.
7. Responsibility Definition was strengthened with a Temporal Responsibility Model.
8. A Decision Log entry recorded the adoption of Policy Integrity and Governance Drift Prevention.
9. `docs/policy-integrity-self-assessment.md` was created as a practical tool for pilot partners and internal reviews.
10. README and `docs/repository-map.md` were updated so the self-assessment is visible in pilot, core specification, governance, security and AI-review paths.

The next likely work should strengthen practical adoption materials, pilot partner communication, use cases, governance gateway examples, and schema/gateway examples for policy integrity.

---

## Recommended Pilot Conversation Path

For a pilot partner or external reviewer, use this minimum path:

1. `docs/this-project-in-3-minutes.md` — quick orientation.
2. `docs/pilot-partner-talk-track.md` — conversation structure.
3. `offers/minimal-human-ai-governance-pilot.md` — pilot format.
4. `use-cases/customer-support-agentic-bi-governance.md` — concrete workflow example.
5. `concepts/policy-integrity.md` — why governed speed needs protected policies.
6. `docs/policy-integrity-self-assessment.md` — assess one workflow or action class for governance drift risk.

For AI-assisted review, include `PROJECT-CONTEXT-COMPACT.md`, `docs/discovery-keywords.md`, `concepts/policy-integrity.md`, and `docs/policy-integrity-self-assessment.md`.

---

## Core Concepts to Preserve

When editing or extending the project, preserve these ideas:

- human responsibility remains non-transferable;
- AI output may become operational action only through clear boundaries;
- AI action boundaries should be mapped before autonomy increases;
- governance should operate during execution, not only after failure;
- human approval must remain meaningful, not symbolic;
- decision logs, escalation paths and rollback/recovery matter;
- model choice is a governance decision, not only a technical preference;
- one real workflow is better than a vague organization-wide transformation;
- governed speed is only valuable if the governance that defines it is protected;
- Fast Path percentage is a diagnostic metric, not a performance target;
- Bypass may prepare the decision environment, but must not create facts that constrain the accountable decision;
- policy changes must be owned, reviewed, logged and protected from governance drift;
- Policy Integrity should be testable through a practical workflow-level assessment, not only described as a concept.

---

## Preferred Working Style

Use context-budget mode.

Do not re-analyze the entire project unless explicitly asked.

Prefer small, safe, reviewable changes:

1. identify the next useful improvement;
2. create or update one focused file;
3. keep the scope narrow;
4. explain the risk;
5. open a PR;
6. review before merge.

Avoid large rewrites unless the task explicitly requires them.

Human confirmation is required before any commit.

---

## AI Assistant Instructions

When using this file as context, follow this pattern:

```text
Use context-budget mode.
Do not repeat the whole project summary.
Do not ask for the entire repository unless necessary.
Use only the relevant files and the current task.

Return:
1. Decision
2. Reason
3. Minimal next action
4. Risk if we do it
5. Risk if we do not do it
```

For review tasks, use this pattern:

```text
Review only the provided file or diff.
Focus on clarity, onboarding, practical usefulness and governance consistency.
Do not rewrite the whole document.
Suggest the smallest useful improvement.
```

For GitHub work, use this pattern:

```text
Work by small iterations:
issue → branch → PR → review → merge.
Prefer documentation-only PRs unless code changes are explicitly requested.
Human confirmation is required before any commit.
```

---

## Good Next Tasks

Potential next tasks:

- improve `offers/minimal-human-ai-governance-pilot.md` for external readability;
- create a short pilot outreach message for LinkedIn/email;
- create a one-page pilot partner summary;
- add a second concrete use case;
- improve the Governance Gateway demo documentation;
- add a simple contributor guide for submitting workflows or failure patterns;
- create a short `docs/how-to-review-one-workflow.md` guide;
- add policy integrity fields to schema examples and gateway policy examples;
- create a compact one-page version of `docs/policy-integrity-self-assessment.md` for external conversations.

---

## Do Not Lose This Distinction

This project is not only about AI ethics.

It is about operational architecture:

> How does an organization remain responsible, visible and correctable when AI systems participate in real workflows?

That distinction should remain visible in README, offers, pilots, use cases and examples.

Also preserve the newer distinction:

> Governed speed is only valuable if the governance that defines it is protected.

RABA should not optimize for maximum automation speed. It should optimize for accountable speed inside policy boundaries that remain owned, reviewed, logged and resistant to drift.

The practical expression of this distinction is now:

> Use `docs/policy-integrity-self-assessment.md` to test whether a specific workflow or action class can responsibly support more autonomy.
