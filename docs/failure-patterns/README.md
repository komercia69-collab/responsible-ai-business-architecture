# Failure Patterns

Failure patterns describe recurring ways in which AI-native operational environments can lose governability, coordination, accountability or human judgment.

They are not only technical defects.

They are socio-technical breakdown patterns that emerge when humans, organizations and semi-autonomous AI systems operate together under speed, uncertainty and fragmented context.

---

## Purpose

This section helps contributors and organizations identify early signs of operational governance failure before they become systemic problems.

Failure patterns can be used for:

- architecture reviews;
- AI pilot readiness checks;
- incident retrospectives;
- governance design;
- runtime monitoring;
- human-AI workflow evaluation;
- community discussion and field research.

---

## Pattern Categories

### Human Judgment Failures

These patterns describe situations where AI acceleration weakens human decision quality, review discipline or architectural reasoning.

- [Erosion of Human Judgment During Fast AI-Assisted Execution](./erosion-of-human-judgment.md)

### Agent Design Failures

These patterns describe situations where AI agents are designed as prompt-driven workers without sufficient mission clarity, action boundaries, oversight and recovery architecture.

- [Agent Design Without Governance Architecture](./agent-design-without-governance-architecture.md)

### Governance Integrity Failures

These patterns describe situations where governance exists as documentation, presentation or formal process, but does not control real operational behavior.

- [Governance Theater](./governance-theater.md)

### Confirmation and Scope Failures

These patterns describe cases where human confirmation exists, but the executed action no longer matches the current confirmed intent.

- [Confirmed Intent Drift](./confirmed-intent-drift.md)

### Agentic Pipeline Failures

These patterns describe agentic or multi-agent workflows that appear technically coherent but lack explicit responsibility boundaries around action-capable tools.

- [Unbounded Autonomous Pipeline](./unbounded-autonomous-pipeline.md)

### Coordination Failures

These patterns describe breakdowns in coordination between humans, AI agents, teams, workflows and governance mechanisms.

Potential patterns:

- Coordination Gaps Between Humans and AI Agents
- Escalation Saturation
- Coordination Collapse
- Oversight Latency

### Architecture Failures

These patterns describe cases where local AI-assisted outputs weaken long-term system coherence.

Potential patterns:

- Architectural Opacity
- Technically Correct but Architecturally Misaligned Outputs
- Runtime Governance Drift

### Context Failures

These patterns describe situations where AI systems, teams or governance processes operate on incomplete, fragmented or outdated context.

Potential patterns:

- Incomplete Project Context
- Explainability Fragmentation
- Context Drift Across AI-Assisted Workflows

---

## How to Contribute a Failure Pattern

A useful failure pattern should normally include:

1. A short summary.
2. The core problem.
3. Key symptoms.
4. Why the pattern matters.
5. A practical scenario.
6. Governance questions.
7. Possible controls.
8. Open questions for refinement.

The goal is not to create fear around AI.

The goal is to make emerging coordination risks visible, discussable and governable.

---

## Relation to Responsible AI Business Architecture

Failure patterns support the broader shift from static AI governance toward Human-AI Operational Coordination.

They help answer the question:

> Where can an AI-native environment lose responsibility, judgment or coordination even when individual AI outputs appear correct?
