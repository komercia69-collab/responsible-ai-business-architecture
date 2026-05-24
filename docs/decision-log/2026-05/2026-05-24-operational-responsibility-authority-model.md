# 2026-05-24 Operational Responsibility Authority Model

- Source: External AI review / ChatGPT synthesis
- Decision: accept
- Canon Impact: Expands the RABA definition of operational responsibility to distinguish synchronous authority from asynchronous delegated authority, adds cognitive friction for high-risk approvals, separates Decision Owner from Remediation Executor, and introduces safeguards against closed-loop AI supervision.
- Repo Impact: Updated `concepts/responsibility-definition.md`.
- Governance Gateway Check: OK
- Action Boundary Check: OK
- Reasoning: The original responsibility definition established responsibility as an operational structure, but it could be read as requiring synchronous human approval before every meaningful AI-supported action. That interpretation would be too restrictive for high-frequency or low-risk workflows where autonomy creates legitimate business value. The accepted update clarifies that RABA does not prohibit autonomous execution. Instead, it requires an explicit authority model: either synchronous human approval or asynchronous delegated autonomy inside policy-defined limits.

  The review also identified the risk of automation bias and rubber-stamping. RABA now treats understanding as more than information display. High-risk approvals should include proportionate cognitive friction, such as reason entry, uncertainty visibility, alternative review, and detection of repeated one-click approvals.

  The update also addresses the organizational gap between business ownership and technical remediation. RABA now distinguishes the Decision Owner, who accepts the business or governance risk, from the Remediation Executor, who has the technical or operational capability to reverse, contain, or repair the consequence. Corrective Duty should connect both through escalation paths and remediation SLAs.

  Finally, the update rejects closed-loop AI supervision. A probabilistic model must not be the sole judge of whether its own output requires human oversight. Model signals may inform risk evaluation, but business rules, policies, and Governance Gateway checks must define and enforce the boundary between autonomy and responsibility.
- Status: Implemented
