# RABA — Start Here

Responsible AI Business Architecture (RABA) is an experimental responsibility architecture for AI-assisted business workflows.

It focuses on a practical question:

> Where may AI act, where must a human decide, and what must remain reviewable after the action?

If you are new to RABA, use one of these three entry points.

## 1. Understand

Start with one concrete example:

[`docs/raba-in-one-example.md`](docs/raba-in-one-example.md)

It shows how RABA handles a simple AI-supported refund workflow from proposal to escalation and human responsibility.

## 2. Try

Apply RABA to one real or planned AI-supported workflow:

[`docs/raba-lite-15-minute-check.md`](docs/raba-lite-15-minute-check.md)

The check helps identify:

- what the AI is actually doing;
- where a real-world consequence begins;
- who has authority to approve the action;
- what evidence is available;
- whether approval is still valid;
- whether the action can be reversed;
- whether the workflow should proceed, require approval, escalate or stop.

## 3. Run

See the minimal executable proof layer:

[`examples/governance-gateway-demo/README.md`](examples/governance-gateway-demo/README.md)

The demo shows how a policy can route AI-supported actions to:

- `ALLOW`
- `BLOCK`
- `REQUIRE_APPROVAL`
- `ESCALATE`

It includes a small executable gateway, sample actions, a policy file, tests and an example decision log.

---

## What this does not claim

These materials are practical and experimental entry points.

They are not:

- certification;
- proof of production readiness;
- proof of legal or regulatory compliance;
- proof that a workflow is safe;
- proof that RABA is validated in real organizations.

RABA is currently being tested through practical cases, external review and bounded experiments.

The useful question is not whether the framework sounds convincing.

The useful question is:

> Does it help a real person understand or improve a real AI-supported process?
