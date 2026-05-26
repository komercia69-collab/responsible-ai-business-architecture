# EU AI Act ↔ RABA Mapping

**Status:** DISCUSSION_DRAFT  
**Canonical status:** Non-canonical  
**Legal status:** Not legal advice  
**Approval status:** Human Owner review required  

> Multi-AI agreement is not approval.  
> Regulatory mapping is not compliance certification.  
> Final architectural approval belongs to the Human Owner.

## Purpose

This document maps selected EU AI Act governance themes to RABA primitives.

RABA is not a substitute for legal review, conformity assessment, GDPR compliance, cybersecurity controls, or sector-specific regulation.

RABA supports compliance readiness by making responsibility, authority, human confirmation, traceability, escalation and execution boundaries visible inside AI-assisted workflows.

## Scope

This draft focuses on operational governance areas where RABA has direct architectural relevance:

- human oversight;
- logging and traceability;
- risk management;
- transparency;
- incident handling;
- action boundaries;
- responsibility allocation.

It does not attempt to reproduce the EU AI Act or provide article-by-article legal interpretation.

## Summary Mapping

| EU AI Act area | RABA primitive | Coverage | Notes |
|---|---|---|---|
| Human oversight | Human Owner, Approval States, Active Confirmation Interlock | Strong | RABA is designed to prevent symbolic or accidental approval and keep human authority visible. |
| Logging / traceability | Decision Log, Responsibility Event Stream | Strong | RABA links technical trace to business accountability records. |
| Risk management | Risk classification, Governance Gateway, escalation paths | Partial | RABA provides operational risk routing but does not replace formal EU AI Act risk classification. |
| Transparency | AI disclosure practices, Human Owner attribution | Partial | Needs separate disclosure policy for external communications and user-facing AI interactions. |
| Incident handling | Incident response procedure, rollback, escalation | Partial | RABA can detect and record governance incidents, but legal reporting duties require separate compliance review. |
| Cybersecurity / robustness | Integration with InfoSec controls | Out of scope | RABA does not replace cybersecurity architecture, model robustness testing or supply-chain security. |
| Data governance / GDPR | Integration with Data Governance and privacy controls | Out of scope | RABA logs may contain personal data; privacy policy and lawful basis must be handled separately. |
| Product liability | Evidence and responsibility trace | Partial | RABA can support evidence trails but does not determine legal liability. |

## Human Oversight

RABA treats human oversight as an operational property, not a policy statement.

Relevant RABA primitives:

- **Human Owner** — named human role with authority and corrective duty;
- **Approval States** — DRAFT / RECOMMEND / AUTHORIZED / EXECUTED / ESCALATE / REVOKED;
- **Active Confirmation Interlock** — mechanism to reduce rubber-stamp approval;
- **Fresh confirmation** — prior confirmation cannot be reused when scope, risk, target or consequence changes;
- **Multi-AI governance rule** — agreement between AI systems does not substitute for human approval.

## Logging and Traceability

RABA separates technical trace from business responsibility.

Relevant RABA primitives:

- **Decision Log** — accountability record for governed actions;
- **Responsibility Event Stream** — machine-readable events for state transitions;
- **Responsibility Management Interface** — runtime visibility of owner, state, escalation and audit link;
- **External trace mapping** — external traces may support review but do not transfer responsibility.

## Risk Management

RABA supports operational risk routing.

Examples:

- high-risk actions require stronger confirmation;
- ambiguous risk defaults upward;
- scope drift triggers re-confirmation or block;
- hidden commitment triggers escalation or denial;
- irreversible actions require additional friction.

Limitation:

RABA risk classification does not replace EU AI Act system-level classification, Annex-based analysis, provider/deployer obligations or conformity assessment.

## Transparency

RABA supports transparency by requiring visible responsibility and clear distinction between AI assistance and human authority.

Needed future work:

- AI disclosure templates;
- external communication disclosure policy;
- user-facing transparency patterns;
- disclosure of AI-generated or AI-assisted outputs.

## Incident Handling

RABA can detect and record governance incidents such as:

- execution without required confirmation;
- stale confirmation;
- hidden authority transfer;
- scope drift;
- missing or corrupted Decision Log records;
- AI action outside defined boundaries.

Limitation:

RABA incident records do not automatically satisfy legal incident reporting obligations. Legal/compliance review is required for any regulated incident reporting duty.

## Boundary of This Mapping

This mapping is a discussion draft.

It supports architecture review and compliance readiness discussions.

It does not:

- certify EU AI Act compliance;
- replace legal advice;
- replace conformity assessment;
- replace cybersecurity controls;
- replace GDPR or data governance processes;
- assign legal liability.

## Open Questions

1. Which EU AI Act articles should be mapped in the next detailed version?
2. Should RABA maintain a separate deployer/provider role mapping?
3. Should the mapping distinguish between internal RABA development and organizational deployment of RABA?
4. How should RABA represent GPAI model provider obligations when the deployer uses third-party foundation models?

## Current Status

This document is a DISCUSSION_DRAFT. It may be used for review and refinement, but it does not change canonical RABA architecture until explicitly approved by the Human Owner.
