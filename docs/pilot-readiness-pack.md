# RABA Pilot Readiness Pack

This document gives a compact overview of how to discuss and scope a first RABA pilot.

It is designed for early conversations with CTOs, platform teams, AI product owners, operations leaders, and risk / compliance stakeholders.

---

## What Problem RABA Solves

AI systems are moving from assistance toward operational participation.

They can draft, recommend, route, call tools, read context, prepare decisions and trigger workflows.

The missing question is:

> Who is responsible when AI-supported output becomes business action?

RABA helps organizations make that transition visible, reviewable, authorized and auditable.

---

## Core Principle

> AI may be probabilistic. Responsibility must not be.

---

## What “Layer 6” Means

Most AI architectures already define layers for:

```text
model
runtime
memory
tools / extensions
routing
```

RABA adds a governance layer for:

```text
action boundaries
approval states
governance gateway decisions
decision logs
responsibility events
escalation paths
```

Layer 6 is a communication frame.

It does not replace the existing AI stack.

It makes responsibility explicit above AI execution.

---

## Minimal Pilot Shape

A first RABA pilot should be deliberately small.

Recommended scope:

```text
One workflow.
One product or team.
One AI integration.
Two or three RABA primitives.
Clear before / after comparison.
```

Do not start with a whole enterprise governance program.

Start with one workflow where AI output already influences real operational decisions.

---

## Recommended Pilot Inputs

Before a pilot workshop, identify:

```text
1. The workflow to test.
2. The AI-supported action in that workflow.
3. The point where output may become business action.
4. The current approval or review path, if any.
5. The risk of unclear responsibility.
6. The current logging or audit evidence.
```

---

## RABA Primitives for a First Pilot

Choose two or three from the following:

| Primitive | Pilot value |
|---|---|
| Action Boundary | defines what AI may read, draft, recommend, trigger or execute |
| Approval States | separates DRAFT, RECOMMEND, AUTHORIZED, EXECUTED and ESCALATE |
| Governance Gateway | evaluates whether an action may progress |
| Decision Log | records who authorized what, when, why and under which rule |
| Escalation Path | routes unclear or higher-risk cases to a responsible owner |
| Responsibility Event Stream | makes responsibility transitions observable |

---

## Expected Pilot Outputs

A successful minimal pilot should produce:

```text
- one mapped workflow;
- one defined Action Boundary;
- one minimal approval-state flow;
- one gateway policy example;
- one decision log example;
- one escalation rule;
- one before / after accountability view.
```

Optional technical output:

```text
- starter-kit adaptation;
- JSON action contract;
- policy file;
- responsibility event examples.
```

---

## What Is Out of Scope for Phase 1

Phase 1 should not try to solve everything.

Out of scope:

```text
- full enterprise rollout;
- production identity and access management;
- production signing and key management;
- full human approval UI;
- async runtime performance model;
- full rollback procedure;
- complete input integrity governance;
- legal or compliance certification.
```

These areas may become future work.

Phase 1 focuses on governing action progression after an AI-supported action request has been formed.

---

## Pilot Workshop Structure

Recommended first workshop:

```text
Participants:
- product owner;
- technical lead or platform engineer;
- risk / compliance or operations owner;
- RABA reviewer / facilitator.

Duration:
60–90 minutes.

Goal:
Map one workflow into Action Boundary, Approval States, Governance Gateway decision and Decision Log.
```

---

## Before / After View

Without RABA:

```text
AI output → human click or system action → technical log
```

With RABA:

```text
AI output
→ Action Boundary
→ Approval State
→ Governance Gateway
→ responsible party
→ Decision Log
→ Responsibility Event
→ business action or escalation
```

The output may look similar.

The accountability model is different.

---

## Recommended Reading Path

For a first-time partner:

1. [`docs/why-governance-matters.md`](why-governance-matters.md)
2. [`assets/diagrams/raba-6th-layer.html`](../assets/diagrams/raba-6th-layer.html)
3. [`docs/system-integration-map.md`](system-integration-map.md)
4. [`starter-kit/README.md`](../starter-kit/README.md)
5. [`docs/pilot-partner-talk-track.md`](pilot-partner-talk-track.md)

---

## Short Partner Message

> RABA helps you test one AI-assisted workflow and identify where AI output crosses into business action, who authorizes that transition, what should be logged, and where escalation is required.

---

## Current Status

This pilot pack is a conversation and scoping artifact.

It does not claim production readiness.

It is intended to help choose the first narrow pilot and translate RABA from architecture into a concrete workflow review.
