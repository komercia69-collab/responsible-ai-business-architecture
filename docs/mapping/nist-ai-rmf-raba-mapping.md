# NIST AI RMF ↔ RABA Mapping

**Status:** DISCUSSION_DRAFT  
**Canonical status:** Non-canonical  
**Legal/compliance status:** Not certification  
**Approval status:** Human Owner review required  

> Multi-AI agreement is not approval.  
> Framework mapping is not compliance certification.  
> Final architectural approval belongs to the Human Owner.

## Purpose

This document maps RABA concepts and layers to the four functions of the NIST AI Risk Management Framework:

- GOVERN;
- MAP;
- MEASURE;
- MANAGE.

The purpose is to show where RABA supports AI risk management and where additional organizational controls are required.

## Summary Mapping

| NIST AI RMF function | RABA contribution | Coverage |
|---|---|---|
| GOVERN | Social Responsibility Layer, Human Owner, governance rule, Decision Log discipline, multi-AI rule | Partial / strong for responsibility architecture |
| MAP | Intent Responsibility, action boundaries, delegation analysis, risk classification, Human-AI asymmetry | Partial |
| MEASURE | Responsibility Event Stream, confirmation records, active check results, scope drift signals, hidden commitment detection | Partial |
| MANAGE | Governance Gateway, Active Confirmation Interlock, escalation, block / deny / reconfirm, incident response | Partial |

## GOVERN

RABA contributes to GOVERN by defining who carries responsibility and how authority remains visible.

Relevant RABA elements:

- Human Owner final authority;
- multi-AI agreement is not approval;
- Social Responsibility Layer;
- Responsibility definition;
- Decision Log;
- Boundary of Framework;
- non-canonical draft discipline;
- explicit Human Owner confirmation before major commits.

Gaps:

- no full organizational AI governance policy template yet;
- no board-level governance model;
- no formal enterprise risk committee integration;
- no complete mapping to ISO/IEC 42001 management system clauses.

## MAP

RABA contributes to MAP by helping organizations understand where AI output becomes operational action.

Relevant RABA elements:

- Intent Responsibility Layer;
- Human-AI Asymmetry of Influence;
- Action Boundary;
- Delegation Responsibility;
- risk classification;
- Responsibility Architecture Review;
- scope drift analysis.

Gaps:

- no complete enterprise AI inventory;
- no full system-level risk taxonomy;
- no sector-specific risk model;
- no dataset or privacy inventory.

## MEASURE

RABA contributes to MEASURE by making responsibility signals observable.

Relevant RABA elements:

- Responsibility Event Stream;
- Decision Log;
- Active Confirmation Interlock event record;
- confirmation freshness;
- hidden commitment detection;
- rollback and reversibility signals;
- external trace compatibility examples.

Possible future metrics:

- percentage of actions with valid confirmation;
- percentage of scope drift events blocked;
- confirmation freshness failure rate;
- repeated active check failure rate;
- actions escalated vs executed;
- governance bypass attempts;
- time between AI proposal and human confirmation.

Gaps:

- no production metrics dashboard;
- no aggregate measurement process;
- no independent validation protocol;
- no baseline thresholds for acceptable governance drift.

## MANAGE

RABA contributes to MANAGE by defining how the system should route, block, escalate or require reconfirmation.

Relevant RABA elements:

- Governance Gateway;
- Active Confirmation Interlock;
- approval states;
- escalation path;
- block / deny / reconfirm outcomes;
- incident response draft;
- Policy Integrity and Governance Drift Prevention.

Gaps:

- no complete incident response program;
- no legal incident reporting matrix;
- no remediation workflow integrated with enterprise systems;
- no post-market monitoring process for deployed organizational AI systems.

## Boundary

RABA does not replace the NIST AI RMF.

RABA provides an operational responsibility architecture that can support NIST-aligned governance work.

Organizations applying RABA should still maintain their own risk management, security, privacy, data governance, compliance and audit functions.

## Open Questions

1. Should RABA maintain a formal NIST profile for agentic AI workflows?
2. Which RABA metrics should become recommended measurement fields?
3. Should Responsibility Event Stream be extended to support NIST MEASURE outputs?
4. How should organizations connect RABA incident records to their enterprise risk register?

## Current Status

This document is a DISCUSSION_DRAFT. It may be used for review and refinement, but it does not change canonical RABA architecture until explicitly approved by the Human Owner.
