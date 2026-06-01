# Action Classes — Tranche 1.1 Candidate

**Status:** Canonical candidate  
**Canonical status:** Pending Human Owner approval, PR review, and merge  
**Tranche:** 1.1 — Data and Boundary Canon Readiness  

> This document is a canonical candidate only.  
> It is not a machine-readable schema adoption.  
> It is not an event-family adoption.  
> It is not implementation guidance.

---

## 1. Purpose

Action Classes provide a flat candidate taxonomy for classifying AI-supported activity according to governance response, not technical implementation detail.

They help determine whether an AI-supported activity may approach an Action Boundary and require explicit authority, admissibility, responsibility, or record handling.

---

## 2. Review rule

If two action classes trigger the same Decision Log requirement, the same escalation path, and the same confirmation requirement, they should be merged.

This prevents the taxonomy from becoming decorative or overly granular.

---

## 3. Candidate action classes

### 3.1 READ_ONLY

AI-supported access, retrieval, summarization, or display that does not by itself change workflow state or create an external consequence.

Default boundary note:

```text
Not automatically consequential, but may become relevant if relied upon for action.
```

---

### 3.2 INTERNAL_RECOMMENDATION

AI-supported recommendation, ranking, draft, or analysis intended for internal human review before action.

Default boundary note:

```text
Not automatically consequential unless it becomes a decision, workflow change, external communication, or commitment.
```

---

### 3.3 WORKFLOW_STATE_CHANGE

AI-supported creation, update, routing, status change, or progression of a workflow item.

Default boundary note:

```text
Potentially consequential because AI output changes operational state.
```

---

### 3.4 DATA_MUTATION

AI-supported creation, modification, deletion, enrichment, or correction of data records.

Default boundary note:

```text
Potentially consequential depending on data domain, authority, and downstream use.
```

---

### 3.5 EXTERNAL_COMMUNICATION

AI-supported message, notice, claim, explanation, instruction, or content sent outside the responsible organization or workflow owner.

Default boundary note:

```text
Potentially consequential because it may affect recipients, commitments, or legal/commercial expectations.
```

---

### 3.6 EXTERNAL_TRANSACTION

AI-supported payment, order, transfer, booking, filing, submission, or other transaction with external effect.

Default boundary note:

```text
Usually consequential because it may create obligation, entitlement, cost, or external state change.
```

---

### 3.7 APPROVAL_OR_DENIAL

AI-supported approval, rejection, eligibility decision, access decision, claim decision, or authorization decision.

Default boundary note:

```text
Consequential when it affects rights, access, benefits, obligations, or business outcome.
```

---

### 3.8 COMPLIANCE_SIGN_OFF

AI-supported certification, compliance conclusion, risk acceptance, regulatory assertion, or formal sign-off.

Default boundary note:

```text
Consequential because it may affect accountability, compliance status, or organizational liability.
```

---

### 3.9 ESCALATION_OR_HANDOFF

AI-supported transfer of responsibility, escalation to a role, or handoff to another system, team, or domain.

Default boundary note:

```text
Potentially consequential because responsibility ownership or decision authority may shift.
```

---

### 3.10 UNCLASSIFIED_CONSEQUENTIAL_ACTION

Fallback candidate class for actions that appear consequential but do not fit the current taxonomy.

Default boundary note:

```text
Must trigger review; not a license to avoid later classification.
```

---

## 4. Governance boundary

These action classes are canonical candidate review material only.

They are:

- not final canon;
- not a machine-readable schema adoption;
- not authorization for automated enforcement;
- not an event-family adoption;
- not implementation guidance.

Canonical adoption requires Human Owner approval, PR review, merge, and a separate decision trail.
