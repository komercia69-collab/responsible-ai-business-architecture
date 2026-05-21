# High-Risk Action Policy Example

This file describes a minimal escalation-first policy for high-impact AI-supported actions.

The purpose is to make escalation visible as an operational state, not an informal afterthought.

---

## Policy Intent

Some AI-supported actions should not proceed directly from recommendation to authorization.

If an action is high-impact, irreversible, unclear, or outside the normal action boundary, the Governance Gateway should route it to `ESCALATE`.

---

## Example Rules

| Rule | Condition | Gateway state | Reason |
|---|---|---|---|
| Low-impact draft | action is low-impact and produces no external effect | `DRAFT` | safe to prepare as draft |
| Medium-impact recommendation | action needs review but is not high-impact | `RECOMMEND` | human review required before authorization |
| High-impact action | action may materially affect a customer, user, employee, partner or organization | `ESCALATE` | higher-level review required |
| Irreversible action | action cannot be easily undone | `ESCALATE` | execution risk is too high for routine approval |
| Boundary unclear | action boundary is ambiguous | `ESCALATE` | authority must be clarified before proceeding |

---

## Escalation Record Should Include

- action id;
- workflow id;
- reason for escalation;
- triggering rule;
- current approval state;
- escalation owner or responsible role;
- required next decision;
- timestamp;
- link to technical trace where available.

---

## Notes

This example is intentionally conservative.

Its purpose is to demonstrate how RABA treats escalation as a governed state transition rather than a vague human fallback.
