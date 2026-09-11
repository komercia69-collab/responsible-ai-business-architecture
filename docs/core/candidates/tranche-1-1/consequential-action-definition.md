# Consequential Action Definition — Tranche 1.1 Candidate

**Status:** Canonicalization candidate  
**Canonical status:** Non-canonical  
**Tranche:** 1.1 — Data and Boundary Canon Readiness

> This file is a candidate for review.  
> It is not final canon.  
> It does not create implementation guidance, runtime enforcement, schema adoption, event-family adoption, public positioning, or validation, adoption, compliance, certification, audit-readiness, public-standard, provider, partnership, pilot, or commercial claims.

---

## 1. Candidate definition

A consequential action is an AI-supported action, recommendation, decision, workflow change, external communication, approval, refusal, transaction, commitment, escalation, de-escalation, routing, ranking, prioritization, recording of rationale, or decision-field shaping that may materially affect a person, customer, employee, obligation, entitlement, operational state, compliance-related status, or business outcome.

AI output, recommendation, evidence, or planning is not consequential merely because it exists.

It may become consequential when, in a consequential context, it is used, relied on, routed, ranked, recorded, escalated, de-escalated, used to prepare a commitment, or used to materially shape a decision field.

---

## 2. Consequential context

Consequential context means the surrounding decision or workflow may affect human, legal, financial, operational, compliance-related, or business outcomes.

Internal preparation remains a review aid unless it is used in a way that can materially affect such outcomes.

A recommendation is not consequential merely because it was produced.

It becomes responsibility-relevant when, in a consequential context, it is relied on as a basis for review, routing, prioritization, escalation, de-escalation, approval, refusal, commitment preparation, decision rationale, or other consequential use.

---

## 3. Boundary test

The Tranche 1.1 boundary test is:

```text
AI prepares information for human review = not automatically consequential.
AI-supported output is used or relied on in a consequential context = potentially consequential.
AI output directly changes workflow state = consequential.
```

Case A:

```text
AI summarizes a contract for human review.
```

This is not automatically consequential by itself.

Case B:

```text
AI summarizes a contract and pre-fills a signature field or changes workflow state.
```

This is consequential because AI-supported output has crossed into workflow state change or commitment preparation.

Case C:

```text
AI ranks contract risks, the ranking becomes the practical basis for human review, and the context may affect obligations or commitments.
```

This may be consequential because AI-supported output is relied on in a consequential context and may materially shape the decision field.

---

## 4. Decision-field shaping

AI-supported output may materially shape a decision field when it changes what a reviewer sees, ranks, considers urgent, treats as risky, routes, de-escalates, or records as practical rationale.

This can be responsibility-triggering even without a technical workflow-state change.

Decision-field shaping is not a standalone action class in this tranche. It is a boundary condition that may appear across candidate action classes.

---

## 5. Working rule

RABA does not need to technically define whether an AI system is a true agent.

RABA needs to define where responsibility must become explicit.

The operational threshold is:

```text
Responsibility must become explicit when AI-supported output is used in a consequential context, changes workflow state, prepares commitment, or materially shapes a consequential decision field.
```

---

## 6. Responsibility and human authority

AI proposal does not equal authorized action.

AI review, AI confidence, or AI consensus does not close a governance gate and does not remove required Human Owner or human governance review.

Human Owner / human governance remains the final authority for admissibility, authorization, and canonical approval where required.

---

## 7. Scope boundary

This candidate definition does not define:

- Human Response Window;
- Governed Bypass;
- timeout behavior;
- UI behavior;
- service-level agreement behavior;
- implementation architecture;
- runtime enforcement;
- schema adoption;
- event-family adoption;
- public positioning;
- validation, adoption, compliance, certification, audit-readiness, public-standard, provider, partnership, pilot, or commercial claims.

Those remain deferred to later tranches or require separate Human Owner approval.

---

## 8. Governance boundary

This file may be reviewed as part of the Tranche 1.1 canonicalization proposal.

It may become canonical only after separate Human Owner approval, PR review, merge, and the required decision trail.

This candidate does not authorize implementation, runtime enforcement, validation, adoption, compliance, certification, audit-readiness, public-standard positioning, partnership, pilot, or commercial claims.
