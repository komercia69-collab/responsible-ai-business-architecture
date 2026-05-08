# Red Case: Autonomous Customer Refund Agent

## Example Type

High-risk / red-signal AI pilot example.

## Purpose

This example demonstrates when a proposed AI pilot should **not** start as an autonomous implementation.

The use case is an AI-based customer refund agent that would:

- read customer complaints;
- analyze refund eligibility;
- decide whether a refund should be granted;
- trigger refund workflows;
- send customer communication.

The purpose of this example is to show that Responsible AI Business Architecture is not only a method for enabling AI pilots.

It is also a method for identifying when a pilot should be stopped, redesigned, or downgraded before implementation.

---

## Preliminary Signal

### Red Signal — Do Not Start Yet

This use case should not start as an autonomous AI pilot because it combines:

- probabilistic analysis;
- financial execution;
- customer impact;
- possible legal commitments;
- fraud exposure;
- unclear accountability;
- weak reversibility.

---

## Core Risk

The system combines probabilistic analysis with irreversible or difficult-to-reverse financial execution.

That makes it unsuitable as a first autonomous AI pilot.

---

## Recommended Redesign

Do not implement the AI system as an autonomous refund agent.

Instead, downgrade the use case to:

> AI-assisted refund recommendation with mandatory human confirmation.

AI may support the human team by:

- summarizing the complaint;
- identifying missing information;
- checking policy references;
- preparing a refund recommendation;
- drafting a response for review.

A human must remain responsible for:

- refund approval;
- financial execution;
- exception handling;
- customer commitments;
- escalation decisions.

---

## Related Framework Elements

- [AI Readiness Quick Check](../../QUICK-CHECK.md)
- [AI Readiness Dimensions](../../docs/ai-readiness-dimensions.md)
- [Confirmation Gate Pattern](../../architecture-patterns/confirmation-gate.md)
- [Agent Permission Boundary Pattern](../../architecture-patterns/agent-permission-boundary.md)
- [AI as Control Loop Pattern](../../architecture-patterns/ai-as-control-loop.md)
- [AI Pilot Decision Report](../../templates/ai-pilot-decision-report.md)

---

## Core Principle

Responsible AI without the ability to say “do not start yet” is not governance.
