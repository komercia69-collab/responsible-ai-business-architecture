# 2026-05-24 Path Classification and Shadow Mode Governance

- Source: External Concept Architect review / ChatGPT synthesis
- Decision: accept
- Canon Impact: Strengthens the Responsibility Throughput Model by adding explicit Path Classification Rules, Speed-Path Governance, and Shadow Mode Graduation Criteria.
- Repo Impact: Updated `concepts/responsibility-throughput-model.md`.
- Governance Gateway Check: OK
- Action Boundary Check: OK
- Reasoning: The review correctly identified that Governed Speed only remains compatible with RABA if routing paths are not determined by the AI system’s self-assessment of risk. The accepted update therefore states that the routing path for any action class must be determined by human-defined business rules. AI may apply rules or provide signals to them, but may not set or relax the rules that determine its own level of oversight.

  The update also treats speed paths as governance objects, not runtime conveniences. Each action class should have a default path, deterministic filters, real-world reversibility classification, policy owner, review cadence, downgrade triggers, escalation triggers, remediation requirements, and audit sampling rules.

  Finally, shadow mode is now treated as a governed state. Graduation from shadow mode to production autonomy requires an explicit approval state, observation period, minimum case count, error and severity thresholds, drift checks, remediation evidence, owner approval, and rollback plan. A model or agent may generate evidence in shadow mode, but may not graduate itself into production autonomy.
- Status: Implemented
