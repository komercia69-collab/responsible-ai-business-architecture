# [2026-05-21] Read-only Governance Mode

- Source: Claude, Gemini, Perplexity
- Decision: accept
- Canon Impact: Adds a strict observation and evidence-preservation mode for audit-integrity review scenarios.
- Repo Impact:
  - `docs/audit-integrity-breach-response.md`
  - `docs/recovery-protocol.md`
  - `docs/recovery-decision-record.md`
  - `schemas/recovery-decision-record.schema.json`
  - `rfcs/rfc-audit-integrity-and-recovery-protocol.md`
- Governance Gateway Check: OK — improves traceability, reviewability, and containment behavior.
- Action Boundary Check: OK — limits the affected scope to observation, evidence capture, quarantine logging, and recovery preparation.
- Reasoning: Accepted because RABA needs a clear operating mode for situations where audit records require review before normal operation resumes.
- Status: Active

---

## Reference Flow

```text
Expert input
→ Triage
→ Governance Fit Check
→ Canon update
→ Decision Log
```

This entry is the reference example for recording multi-AI architectural decisions in RABA.
