# Responsibility Field Model — Test Draft

**Status:** Working Test Model  
**Canonical status:** Non-canonical  
**Use:** Test-only model for Responsibility Boundary Test Pack v0.1  

> This model is not RABA canon and does not define an adopted schema.

---

## Core idea

RABA does not assemble responsibility from optional modules.

It maintains a persistent responsibility field whose operational state changes with context, authority, evidence, consequence, and responsibility events.

```text
Responsibility Field State
=
Persistent Responsibility Field
+
Contextual Responsibility Conditions
+
Current Responsibility Events
```

---

## Persistent responsibility field

The following constraints remain active across the test:

- responsibility must be attributable to a named human or institutional role;
- AI is not the final accountable authority;
- consequential action requires an admissible basis;
- a material reference-frame change may invalidate prior approval;
- missing ownership or unresolved approval state must not silently permit execution;
- responsibility-relevant events must remain traceable;
- AI may identify a possible boundary change, but must not be the final judge of its own admissibility;
- human approval is not meaningful if the human cannot understand consequences, duties, and the accountability attached to the decision;
- accountability enforcement must be reviewable, fair, and proportionate rather than automatic.

---

## Contextual responsibility fields

| Field | Test question | Example states |
| --- | --- | --- |
| Authority | Who may authorize the action? | assigned / missing / unavailable |
| Approval | Does prior approval remain valid? | valid / stale / revoked / pending |
| Reference frame | Did the approved context materially change? | unchanged / changed |
| Consequence | What is the consequence class? | low / medium / high |
| Reversibility | Can the action be safely reversed? | reversible / partial / low-reversibility |
| Evidence | Is the evidence current and admissible? | current / stale / missing |
| Escalation | Who owns the next decision? | assigned / unavailable / missing |
| Human control | Can the human meaningfully intervene? | meaningful / constrained / theatrical |
| Human accountability awareness | Does the human understand possible harm, duties, and accountability consequences? | absent / incomplete / meaningful |
| Accountability enforceability | Is responsibility attributable, traceable, and subject to a fair review process? | unclear / weak / credible |

---

## Responsibility field transition

A Responsibility Field Transition occurs when a responsibility-relevant event changes one or more contextual fields.

For this test:

```text
supplier data change
→ reference frame changes
→ prior approval becomes stale
→ execution becomes inadmissible
→ reauthorization and escalation become required
→ meaningful human accountability awareness must be established
→ a new accountable decision may be recorded
```

---

## Expected output states

This test uses the following working states:

```text
APPROVAL_VALID
APPROVAL_STALE
REAUTHORIZATION_REQUIRED
EXECUTION_ALLOWED
EXECUTION_BLOCKED
ESCALATION_OWNER_ASSIGNED
DECISION_LOG_REQUIRED
HUMAN_ACCOUNTABILITY_AWARENESS_REQUIRED
ACCOUNTABILITY_ENFORCEABILITY_CREDIBLE
```

These states are test vocabulary only and are not adopted RABA schema values.
