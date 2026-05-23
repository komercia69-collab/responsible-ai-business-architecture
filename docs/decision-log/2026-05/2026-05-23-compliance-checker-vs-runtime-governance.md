# [2026-05-23] Compliance Checker vs Runtime Governance

- Source: Gemini / stress-test review, ChatGPT synthesis, Human owner confirmation
- Decision: accept
- Canon Impact: Positions RABA as a runtime governance layer that complements pre-deployment compliance-checker frameworks rather than competing with them.
- Repo Impact:
  - `docs/compliance-checker-vs-runtime-governance.md`
  - `docs/decision-log/2026-05/2026-05-23-compliance-checker-vs-runtime-governance.md`
- Governance Gateway Check: OK — strengthens the distinction between baseline policy constraints and runtime action-level decisions.
- Action Boundary Check: OK — clarifies that baseline compliance may allow a category of action, while RABA determines whether this concrete action may cross a boundary now.
- Reasoning: Accepted because classical compliance frameworks are strong at regulatory mapping and pre-deployment assessment, but they do not fully govern responsibility once AI agents act in operational workflows. RABA should integrate baseline compliance as an input layer while preserving runtime governance, governed uncertainty, Decision Log, Responsibility Event Stream and post-action accountability as its differentiating layer.
- Status: Active

---

## Core Formulas

```text
Compliance checkers determine whether an AI agent may be deployed.
RABA governs responsibility when the AI agent acts.
```

```text
Static compliance sets the floor.
Runtime governance controls the crossing.
```

---

## Prototype Implication

The future Responsibility Review Panel should visually separate:

1. Baseline Compliance — allowed / restricted / prohibited / allowed with conditions.
2. Runtime Governance — action boundary, approval state, uncertainty, responsible role and allowed next states.

This prevents the interface from becoming another static compliance questionnaire while still grounding runtime decisions in regulatory and internal policy context.
