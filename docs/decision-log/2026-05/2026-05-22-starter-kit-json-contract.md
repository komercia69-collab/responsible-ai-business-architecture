# [2026-05-22] Starter Kit JSON Contract and Policy Separation

- Source: Gemini Pro via Comet
- Decision: partial / phased accept
- Canon Impact: Improves the starter kit by moving from line-based samples toward a JSON action contract and external JSON policy configuration.
- Repo Impact:
  - `starter-kit/mock_ai_agent.py`
  - `starter-kit/raba_gateway.py`
  - `starter-kit/sample_actions.json`
  - `starter-kit/sample_policy.json`
  - `starter-kit/README.md`
  - `docs/decision-log/2026-05/2026-05-22-starter-kit-json-contract.md`
- Governance Gateway Check: OK — strengthens separation between action request, policy evaluation, gateway decision, decision log and responsibility event.
- Action Boundary Check: OK — adds explicit external-effect, boundary, risk and authorizer-reference fields to the sample action contract.
- Reasoning: Accepted in phases. The developer, risk and pilot-partner review correctly identified that the starter kit needed a clearer data contract, visible policy versioning, a mock AI agent, escalation payload, and green/red corridor examples. Rollback, async runtime behavior and a full human approval UI are deferred to avoid making the starter kit too large.
- Status: Active

---

## Accepted Now

- JSON action contract.
- `mock_ai_agent.py`.
- External `sample_policy.json`.
- `policy_id` and `policy_version`.
- `authorizer_reference` and demonstration `auth_hash`.
- Escalation payload.
- Green Corridor and Red Corridor examples.

## Deferred

- Rollback procedure.
- Full human-in-the-loop UI.
- Async gateway performance model.
- Production identity, signing and persistence.
