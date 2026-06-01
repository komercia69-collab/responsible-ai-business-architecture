# Consequential Action Definition — Tranche 1.1 Candidate

**Status:** Canonical candidate  
**Canonical status:** Pending Human Owner approval, PR review, and merge  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  

> This document is a canonical candidate only.  
> It does not by itself adopt final canon, schemas, event families, implementation guidance, public positioning, pilot claims, or commercial commitments.

---

## 1. Candidate definition

A consequential action is an AI-supported action, recommendation, decision, workflow change, external communication, approval, refusal, transaction, commitment, or escalation that may materially affect a person, customer, employee, obligation, entitlement, operational state, compliance status, or business outcome.

---

## 2. Boundary test

The practical boundary test is:

```text
AI prepares information for human review = not automatically consequential.
AI output directly changes workflow state = consequential.
```

This distinction prevents RABA from treating every AI output as consequential while still capturing the point where AI-supported behavior becomes operationally meaningful.

---

## 3. Responsibility threshold

Tranche 1.1 treats consequentiality as a responsibility threshold, not as a claim about whether a system is a true agent.

The governance question is:

```text
At what point does AI-supported behavior become consequential, and who remains accountable?
```

---

## 4. Relationship to Action Classes

Action Classes classify AI-supported activity according to the governance response it may require.

Consequential Action Definition comes before Action Classes because classification depends on whether the activity may materially affect a person, obligation, operational state, compliance status, or business outcome.

---

## 5. Governance boundary

This document is:

- a canonical candidate only;
- not final canon;
- not a schema;
- not an event family;
- not implementation guidance;
- not public positioning.

Canonical adoption requires Human Owner approval, PR review, merge, and a separate decision trail.
