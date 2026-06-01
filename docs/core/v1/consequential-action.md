# Consequential Action — Tranche 1.1 Candidate

**Status:** Canonicalization candidate  
**Canonical status:** Not adopted  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  
**Human Owner status:** Final architectural approval remains with the Human Owner

> This file is a candidate proposal only.  
> It does not create canon, implementation guidance, schema adoption, public positioning, or merge approval.  
> Canonical adoption requires separate Human Owner approval and PR/merge decision trail.

---

## 1. Purpose

This candidate proposes a clear threshold for reviewing when AI-supported activity becomes responsibility-relevant.

Tranche 1.1 proposes this threshold at the level of consequential action.

This candidate does not require RABA to decide whether a system is a “true AI agent” before it can govern responsibility.

Instead, it proposes that RABA should identify when AI-supported output may materially affect a person, organization, workflow state, obligation, entitlement, compliance status, or business outcome.

---

## 2. Candidate definition

A consequential action is an AI-supported action, recommendation, decision, workflow change, external communication, approval, refusal, transaction, commitment, or escalation that may materially affect a person, customer, employee, obligation, entitlement, operational state, compliance status, or business outcome.

This definition is a candidate statement for review, not adopted canon.

---

## 3. Boundary test

```text
AI prepares information for human review = not automatically consequential.
AI output directly changes workflow state = consequential.
```

Example:

```text
Case A — AI summarizes a contract for human decision = not automatically consequential.
Case B — AI summarizes a contract and pre-fills a signature field / changes workflow state = consequential.
```

This boundary test is a candidate review aid, not implementation guidance.

---

## 4. Working principle

```text
Agentic risk begins when AI output becomes workflow state change.
```

Russian formulation:

```text
Агентный риск начинается там, где вывод ИИ становится изменением состояния рабочего процесса.
```

This principle is included as a candidate framing aid.

It does not replace the consequential-action definition.

---

## 5. Governance implication

A consequential action does not mean AI is prohibited.

As a candidate governance implication, it means the action should be handled through explicit authority, admissibility, responsibility, and record logic before it proceeds.

This connects directly to:

```text
Consequential Action Definition
→ Action Classes
→ Action Boundary
→ Decision Log
→ Responsibility Event Stream stub
```

---

## 6. Non-adoption boundary

This file is:

- a candidate proposal only;
- not adopted canon;
- not implementation guidance;
- not a schema;
- not public positioning;
- not a Decision Log entry;
- not merge approval.

Final architectural approval belongs to the Human Owner.
