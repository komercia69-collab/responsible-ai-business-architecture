# 2026-05-24 Throughput Model Hardening

- Source: External AI review / ChatGPT synthesis
- Decision: accept
- Canon Impact: Strengthens the Responsibility Throughput Model by clarifying that Fast Path routing must depend on real-world reversibility, deterministic policy conditions, controlled policy-limit changes, and anti-fatigue review controls.
- Repo Impact: Updated `concepts/responsibility-throughput-model.md`.
- Governance Gateway Check: OK
- Action Boundary Check: OK
- Reasoning: The previous throughput model correctly positioned responsibility as a way to define the safe speed of automation rather than as a universal brake. However, the review identified three important risks.

  First, technical rollback can create an illusion of safety. A database or workflow state may be technically reversible while the real-world consequence remains difficult or impossible to repair. The accepted update therefore distinguishes System Reversibility from Real-World Reversibility and makes real-world reversibility the primary criterion for Fast Path routing.

  Second, policy limits are high-impact governance objects. If an AI system or operational convenience can silently relax policy limits, the Governance Gateway can be weakened without explicit accountability. The update requires policy-limit changes to go through escalation or equivalent human governance, with a named owner, reason, versioning, impact analysis, and audit log.

  Third, batch approval and exception review can degrade into batch-stamping or alert fatigue. The update adds anti-fatigue controls such as random deep validation, outlier review, batch-size limits, approval-speed monitoring, and periodic calibration.

  The update also reinforces closed-loop routing protection: model signals may inform routing, but deterministic or independently reviewed policy filters must decide Fast Path eligibility.
- Status: Implemented
