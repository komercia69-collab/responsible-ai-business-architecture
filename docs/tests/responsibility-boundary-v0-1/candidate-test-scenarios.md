# Candidate Test Scenarios — Responsibility Boundary Series

**Status:** Candidate test backlog  
**Canonical status:** Non-canonical  
**Use:** Preserve future test recommendations without expanding v0.1 into a full implementation suite  

> These scenarios are candidates only. They do not define adopted RABA behavior, policies, legal duties, or implementation requirements.

---

## Selection rule

A future test should be added only when it checks a distinct failure mode or calibration problem that the current supplier-payment scenario cannot reveal.

Each implemented test should define:

- initial approved state;
- approval subject, scope, and validity window;
- evidence available to the system;
- responsibility-relevant events;
- materiality assessment;
- governance responsibility state;
- admissibility decision;
- expected owner and escalation route;
- post-execution observation where applicable;
- explicit pass and failure conditions.

---

## Priority candidates

### 1. Non-material change

**Purpose:** Test whether RABA avoids unnecessary blocking.

Example: supplier display name or IBAN formatting changes without changing the actual recipient or approved scope.

Expected question:

```text
Can a detected reference-frame difference be proven non-material while remaining traceable?
```

---

### 2. Partial block

**Purpose:** Test proportional control.

Example: one payment in a batch changes while all other payments still match the approved snapshot.

Expected question:

```text
Should the affected item, affected subset, entire batch, or entire workflow be blocked?
```

---

### 3. Separation-of-duties conflict

**Purpose:** Prevent self-authorization by an interested or initiating actor.

Example: the finance manager initiates the bank-account change and then attempts to reauthorize it.

Expected result:

```text
independent review required
```

---

### 4. AI-origin change

**Purpose:** Test whether an AI actor can change data and then self-classify the change as non-material.

Expected result:

```text
The initiating AI must not be the final materiality or admissibility judge.
```

---

### 5. Change after reauthorization

**Purpose:** Verify that approval is bound to an exact state, not a general task.

Sequence:

```text
S0 approved → S1 change → S1 reauthorized → S2 change → execution attempt
```

Expected result:

```text
S1 approval becomes stale before S2 execution.
```

---

### 6. Cumulative / salami change

**Purpose:** Detect multiple individually small changes whose combined effect exceeds the approved boundary.

Expected question:

```text
Does change history since approval reveal a cumulative boundary crossing?
```

---

### 7. Silent change

**Purpose:** Test failure when the change is not detected before execution.

Expected post-execution comparison:

```text
approved snapshot vs execution snapshot vs actual outcome
```

---

### 8. Unavailable responsible owner

**Purpose:** Test predetermined delegation and fallback authority.

Example: the approval owner is unavailable while delay may cause significant harm.

Expected question:

```text
Is there an approved fallback route, or must the action remain blocked?
```

---

### 9. External reference-frame change

**Purpose:** Test material external changes without internal data mutation.

Example: a supplier's external legal or sanctions status changes between approval and execution.

Expected question:

```text
Can external state invalidate an otherwise unchanged internal payment package?
```

---

### 10. Post-execution harmful outcome

**Purpose:** Test responsibility after all pre-execution controls appear to pass.

Expected sequence:

```text
harm detected
→ contain or recover where possible
→ preserve evidence
→ assign incident owner
→ conduct independent review
→ update future controls
```

---

### 11. Cross-workflow reuse / quarantine

**Purpose:** Test whether a blocked or disputed entity can be reused by another agent or workflow.

Expected question:

```text
When must a boundary signal propagate beyond the original workflow?
```

---

### 12. Coerced or theatrical reauthorization

**Purpose:** Test whether a human has real time, authority, context, and ability to refuse.

Example: the interface pressures the approver with SLA consequences or presents only a default approval path.

Expected question:

```text
Were the procedural conditions for an informed and voluntary decision materially supported?
```

---

## Deferred domain-specific candidates

The following require separate domain and legal review before implementation:

- AML / KYC-specific controls;
- sanctions-screening rules;
- jurisdiction-specific payment duties;
- fairness and non-discrimination tests;
- automatic quarantine rules;
- automatic rollback mechanisms;
- legal attribution of guilt or sanctions.

---

## Boundary

This backlog preserves future directions from adversarial review. Inclusion here does not mean a scenario is accepted, required, validated, or canonical.
