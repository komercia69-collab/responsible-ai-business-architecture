# Project Status

Responsible AI Business Architecture has moved from concept-level framing into an early specification and implementation-artifact phase.

This status page is a consolidation checkpoint. It shows what is currently stable, what is being made testable, and which ideas are intentionally deferred.

---

## Current Stable Core

RABA is currently consolidated around six core concepts:

1. Action Boundary
2. Approval States
3. Governance Gateway
4. Decision Log
5. Responsibility Observability
6. Responsibility Event Stream

These concepts form the current operational core of the project.

---

## Current State Model

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

`AUTHORIZED` means an action has been permitted by the required authority or policy path.

`EXECUTED` means the action has actually produced an external effect.

This distinction is important because approval and execution are not the same accountability event.

---

## Current Implementation Chain

The current RABA implementation chain is:

```text
Action Boundary
  ↓
Approval State Specification
  ↓
Governance Gateway
  ↓
Decision Log
  ↓
Responsibility Event Stream
  ↓
Responsibility Management Interface / Audit View
```

The purpose of the chain is to make AI-assisted action governable before autonomy increases.

---

## Completed Core Artifacts

- [`docs/approval-state-specification.md`](approval-state-specification.md)
- [`docs/decision-log-schema.md`](decision-log-schema.md)
- [`docs/governance-gateway-implementation.md`](governance-gateway-implementation.md)
- [`implementation/responsibility-event-stream.md`](../implementation/responsibility-event-stream.md)
- [`docs/standards-alignment.md`](standards-alignment.md)
- [`pilots/customer-communication-pilot.md`](../pilots/customer-communication-pilot.md)
- [`docs/rubber-stamp-risk.md`](rubber-stamp-risk.md)
- [`architecture/raba-mcp-governance-layer.md`](../architecture/raba-mcp-governance-layer.md)
- [`architecture/responsibility-layer-for-agentic-ai-architecture.md`](../architecture/responsibility-layer-for-agentic-ai-architecture.md)
- [`concepts/responsibility-management-interface.md`](../concepts/responsibility-management-interface.md)

---

## Machine-Readable Artifacts

- [`schemas/decision-log-entry.schema.json`](../schemas/decision-log-entry.schema.json)
- [`schemas/responsibility-event.schema.json`](../schemas/responsibility-event.schema.json)

Example folders:

- [`examples/responsibility-event-examples/`](../examples/responsibility-event-examples/)
- [`examples/decision-log-examples/`](../examples/decision-log-examples/)
- [`examples/gateway-policy-examples/`](../examples/gateway-policy-examples/)

---

## Current Focus

The current focus is consolidation, not expansion.

The next milestone is to make the implementation chain visible and testable through:

- repository navigation;
- gateway policy examples;
- a minimal governance gateway simulation;
- demo-ready responsibility events and decision logs;
- clear separation between business accountability records and technical traces.

---

## Minimal Proof Artifacts

Current proof artifacts include:

- [`examples/governance-gateway-demo/README.md`](../examples/governance-gateway-demo/README.md)
- [`demo/customer-email-governance-simulation/README.md`](../demo/customer-email-governance-simulation/README.md)

The customer-email simulation demonstrates one path through:

```text
AI drafts customer email
→ Governance Gateway evaluates the action
→ state becomes RECOMMEND
→ human approval grants AUTHORIZED
→ sending produces EXECUTED
→ decision log and responsibility events are emitted
```

---

## Deferred Concepts

The following ideas are valuable but intentionally deferred until the current core is stable:

- Input Integrity Governance
- extended trust scoring models
- advanced runtime policy orchestration
- multi-agent responsibility negotiation
- broader governance nervous system expansion beyond the current operational chain

Deferred does not mean rejected. It means the project is protecting the current consolidation phase.

---

## Near-Term Roadmap

1. Keep README and repository map aligned with schemas, examples and demos.
2. Add more policy examples for concrete workflow types.
3. Keep the state model consistent across documentation and demos.
4. Prepare a concise external update explaining the move from concept to specification, schemas and examples.
5. Avoid adding new large concepts until the current chain is easier to test and explain.

---

## Core Principle

> AI may be probabilistic. Responsibility must not be.

RABA's current work is to turn that principle into specification, policy, events, logs and reviewable interfaces.
