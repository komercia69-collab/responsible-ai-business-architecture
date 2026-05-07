# Customer Email Triage

## Example Type

Low-to-medium risk AI pilot example.

## Purpose

This example demonstrates how Responsible AI Business Architecture can be applied to a common operational workflow:

incoming customer email triage.

The goal is not full autonomous customer support.

The goal is to help teams:
- classify incoming requests faster;
- identify urgency;
- reduce response delays;
- improve routing consistency;
- reduce repetitive manual sorting.

---

## Typical Workflow

Example inputs:

- support requests;
- billing questions;
- delivery complaints;
- technical issues;
- account access problems;
- appointment requests.

AI may help:

- classify message category;
- suggest priority;
- detect possible escalation;
- identify missing information;
- prepare draft summaries;
- suggest routing destination.

---

## Important Boundary

In this example, AI does NOT:

- autonomously send customer responses;
- change customer records;
- issue refunds;
- approve legal or financial actions;
- modify contracts;
- change escalation rules;
- override human review.

The pilot remains human-supervised.

---

## Example Risks

Potential risks include:

- incorrect prioritization;
- missed urgent requests;
- biased classification;
- exposure of sensitive customer data;
- overtrust in AI recommendations;
- loss of escalation visibility.

---

## Suggested Controls

Recommended safeguards:

- human review checkpoints;
- permission boundaries;
- audit logs;
- escalation rules;
- rollback path;
- confidence indicators;
- monitoring for false classifications.

---

## Preliminary Signal

### Yellow Signal

The use case may be suitable for a controlled pilot when:

- the process is already documented;
- review ownership is clear;
- customer impact remains reversible;
- escalation procedures exist;
- AI authority remains limited.

---

## Related Framework Elements

- [AI Readiness Quick Check](../../QUICK-CHECK.md)
- [AI Readiness Dimensions](../../docs/ai-readiness-dimensions.md)
- [AI as Control Loop Pattern](../../architecture-patterns/ai-as-control-loop.md)
- [Agent Permission Boundary Pattern](../../architecture-patterns/agent-permission-boundary.md)
- [Responsible AI Pilot Canvas](../../templates/responsible-ai-pilot-canvas.md)

---

## Core Principle

AI may support communication workflows.

Human responsibility for customer impact must remain clear.
