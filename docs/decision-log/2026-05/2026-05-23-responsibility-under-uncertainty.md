# [2026-05-23] Responsibility Boundary Under Uncertainty

- Source: Human owner, ChatGPT synthesis
- Decision: accept
- Canon Impact: Establishes a key RABA principle: responsibility does not require certainty, but requires governed uncertainty and authorized risk.
- Repo Impact:
  - `docs/responsibility-boundary-under-uncertainty.md`
  - `docs/human-readiness-context.md`
  - `docs/decision-log/2026-05/2026-05-23-responsibility-under-uncertainty.md`
- Governance Gateway Check: OK — clarifies how the gateway should treat uncertainty as bounded, acceptable, unclear, above threshold, or outside policy.
- Action Boundary Check: OK — connects responsibility to the boundary of authorized risk rather than to impossible full prediction.
- Reasoning: Accepted because AI-supported outcomes often include uncertainty. RABA should not remove accountability because outcomes are probabilistic. Instead, it should require that risk, authority, context, decision process and post-action responsibility are visible and governed.
- Status: Active

---

## Core Formulas

```text
Responsibility does not require certainty.
Responsibility requires governed uncertainty.
```

```text
The boundary of responsibility is not the boundary of certainty.
It is the boundary of authorized risk.
```

---

## Interface Implication

Before `AUTHORIZED`, the interface should help the responsible subject understand:

- the intended action;
- the action boundary;
- the expected external effect;
- the accepted risk level;
- whether the risk is inside their authority;
- what must be monitored after execution;
- whether escalation is required.

This strengthens the Responsibility Management Interface without adding a new core concept.
