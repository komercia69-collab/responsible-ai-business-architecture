# [2026-05-23] Declarative Readiness Interface

- Source: Claude and Gemini review, ChatGPT synthesis, Human owner confirmation
- Decision: accept with safeguards
- Canon Impact: Clarifies that Human Readiness Context must be declarative, role-based and action-specific, not inferred through behavioral monitoring.
- Repo Impact:
  - `docs/human-readiness-context.md`
  - `docs/responsibility-review-panel-requirements.md`
  - `docs/decision-log/2026-05/2026-05-23-declarative-readiness-interface.md`
- Governance Gateway Check: OK — preserves accountability through explicit role, authority, boundary, uncertainty and decision records.
- Action Boundary Check: OK — keeps the interface focused on action requirements and responsibility boundaries, not assessment of the person.
- Reasoning: Accepted because a responsibility interface must support human accountability without becoming a surveillance interface. Readiness should be declared through accountable role-based action, not inferred from attention, emotion, fatigue, reaction speed or other personal signals.
- Status: Active

---

## Core Rule

```text
The interface scaffolds the decision.
It does not assess the person.
```

```text
Readiness is declared through accountable role-based action,
not inferred through behavioral monitoring.
```

---

## Accepted Interface Elements

The Responsibility Review Panel should include:

1. Action Statement
2. Boundary Signal
3. Uncertainty State
4. Risk Acceptance Statement
5. Response Options

Response options should include legitimate paths beyond approval:

```text
Authorize
Escalate
Request more context
Defer decision
Reject
Request second review
```

---

## Safeguard

RABA should support responsible decision conditions.

It should not profile, score or monitor the person as a condition of responsibility.
