# Completed Policy Integrity Self-Assessment — Customer Support Agentic BI

**Date:** 2026-05-24  
**Use case reference:** [`use-cases/customer-support-agentic-bi-governance.md`](../../use-cases/customer-support-agentic-bi-governance.md)  
**Schema version reference:** [`docs/policy-integrity-self-assessment-one-page.md`](../../docs/policy-integrity-self-assessment-one-page.md) — current repository version / one-page assessment v1.0  
**Assessment scope:** Repeated delivery complaint → AI support recommendation → human approval → CRM action

---

## Assessment

### 1. Policy Owner

Yes. The use case identifies the human support manager as accountable for operational decisions and the business owner as accountable for policy boundaries. Customer policy, risk tolerance, escalation rules and final accountability are defined at the human layer.

### 2. Human-Defined Routing

Yes. Routing is based on defined gateway checks such as financial thresholds, customer sensitivity, policy match, evidence requirement, reversibility and logging. The AI may recommend actions, but policy-sensitive and customer-impacting actions require human approval.

### 3. Real-World Reversibility

Partial. The use case distinguishes between reversible actions such as drafts, internal classifications and CRM notes, and harder-to-reverse actions such as refunds, compensation promises and customer-impacting CRM changes. Refunds require a separate reversal process, so Fast Path expansion would require confirmed remediation controls.

### 4. Fast Path Discipline

Partial. The use case allows only low-risk internal classification to execute directly and keeps refunds, compensation promises, CRM status changes and sensitive cases under human approval. However, it does not explicitly state that Fast Path percentage is a diagnostic metric rather than a performance target.

### 5. Evidence for Expansion

Partial. The use case requires BI signals, ticket IDs, customer history, evidence references, outcome monitoring and governance learning before boundaries or thresholds are updated. It does not yet define what documented evidence would be sufficient to expand Fast Path share.

### 6. Review Path Integrity

Partial. The workflow requires human manager approval, modification or blocking before CRM execution, and it monitors governance load and escalation pressure. It does not yet define specific anti-rubber-stamping controls for repeated approvals or batch review patterns.

### 7. Bypass Lane Boundary

Partial. The use case permits safe preparatory actions such as summarizing tickets, drafting replies, detecting complaint patterns and preparing recommendations, while customer-facing execution requires approval in sensitive cases. It does not explicitly define a Governed Bypass Lane prohibition list for external communication, data changes, financial commitments or obligations before the accountable decision.

### 8. Policy Change Control

Partial. The use case states that AI may suggest policy changes but must not modify policy rules, and that a human owner decides. It does not yet define the complete policy change process for routing path changes, policy limit changes, latency budget changes or reversibility classification changes.

### 9. Decision Log

Partial. The use case requires logging of BI signals, AI recommendations, evidence, approvals, rejected or blocked actions, executed CRM actions, outcomes and policy versions. It does not explicitly require material policy changes to be recorded in a Decision Log with approver, reason, date and effective version.

### 10. Shadow Mode Graduation

No. The use case defines a minimal pilot lasting 1–2 weeks and identifies pilot participants and artifacts. It does not define shadow mode, graduation criteria or explicit human approval before production autonomy.

### 11. Drift Indicators

Partial. The use case includes drift detection, such as sudden increases in AI-generated compensation recommendations triggering review, and it monitors governance load, blocked actions, escalations and unresolved AI recommendations. It does not yet define a full governance drift indicator set for unexplained Fast Path growth, faster Review Path approvals, lower escalation rates or policy limit increases without evidence.

### 12. Halt and Remediation Capacity

Partial. The use case includes blocked actions, escalation, outcome monitoring, recovery concerns and separate reversal processes for refunds. It does not yet prove that the organization can halt, downgrade, audit and remediate wrong actions at the same scale at which automation can create them.

---

### Blocking findings

None identified.

### Conditions for pilot

Before a controlled pilot proceeds, the organization should confirm the policy owner for the selected action class, document the routing policy and define which actions remain Review Path or Escalation Path. The pilot must also define anti-rubber-stamping checks, explicit Governed Bypass Lane prohibitions, policy change logging, shadow mode graduation criteria if shadow mode is used, and halt/remediation capacity for wrong refunds, wrong compensation promises and wrong CRM changes.

### Recommendation

Pilot with conditions

### Rationale

The use case already contains strong governance foundations: human approval for customer-impacting actions, defined gateway checks, evidence requirements, logging and feedback learning. The dominant finding is that execution boundaries are mostly clear, but Policy Integrity controls are not yet fully operationalized for drift detection, policy change control, shadow mode graduation and remediation at scale. A controlled pilot is justified only if these conditions are made explicit before autonomy expands.
