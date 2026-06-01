# Consequential Action Definition — Tranche 1.1 Candidate

**Status:** Canonicalization candidate  
**Canonical status:** Non-canonical  
**Tranche:** 1.1 — Data and Boundary Canon Readiness

> This file is a candidate for review.  
> It is not final canon.  
> It does not create implementation guidance or public positioning.

---

## 1. Candidate definition

A consequential action is an AI-supported action, recommendation, decision, workflow change, external communication, approval, refusal, transaction, commitment, or escalation that may materially affect a person, customer, employee, obligation, entitlement, operational state, compliance status, or business outcome.

---

## 2. Boundary test

The Tranche 1.1 boundary test is:

```text
AI prepares information for human review = not automatically consequential.
AI output directly changes workflow state = consequential.
```

Case A:

```text
AI summarizes a contract for human decision.
```

This is not automatically consequential by itself.

Case B:

```text
AI summarizes a contract and pre-fills a signature field or changes workflow state.
```

This is consequential because AI-supported output has crossed into workflow state change or commitment preparation.

---

## 3. Working rule

RABA does not need to technically define whether an AI system is a true agent.

RABA needs to define where responsibility must become explicit.

The operational threshold is:

```text
Agentic risk begins when AI output becomes workflow state change.
```

Russian formulation:

```text
Агентный риск начинается там, где вывод ИИ становится изменением состояния рабочего процесса.
```

---

## 4. Scope boundary

This candidate definition does not define:

- Human Response Window;
- Governed Bypass;
- timeout behavior;
- UI behavior;
- service-level agreement behavior;
- implementation architecture;
- runtime enforcement.

Those remain deferred to later tranches.

---

## 5. Governance boundary

This file may be reviewed as part of the Tranche 1.1 canonicalization proposal.

It becomes canonical only after Human Owner approval, PR review, merge, and the required decision trail.
