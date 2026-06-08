# Human Reauthorization Check

**Status:** Test Check Draft  
**Canonical status:** Non-canonical  
**Use:** Responsibility Boundary Test Pack v0.1  

> This check is test vocabulary only. It does not define legal duties, sanctions, or an adopted RABA human-approval standard.

---

## Purpose

This check tests whether the procedural conditions for an informed and voluntary human reauthorization are materially supported.

It does **not** claim to measure or prove a person's internal understanding.

A generic `Approve` click is insufficient.

---

## Test vocabulary

### Accountability awareness conditions

```text
insufficient
procedurally_supported
materially_supported
```

A `materially_supported` state means the system can show evidence that the responsible person received the material diff, relevant evidence, consequence information, role duties, decision options, and sufficient procedural opportunity to refuse or escalate.

It does not prove actual internal comprehension.

### Human acknowledgement recorded

```text
true
false
```

The acknowledgement must be bound to:

- the current `reference_frame_hash`;
- the `state_diff_manifest`;
- the evidence package presented;
- the selected decision;
- the responsible role and identity binding;
- the time of acknowledgement.

### Accountability enforceability

```text
unclear
weak
credible
```

`Accountability enforceability` does not mean automatic punishment.

It means responsibility is attributable, evidence and decisions are traceable, duties are defined, and an established process can review the decision and apply fair and proportionate consequences when a violation is proven.

---

## Minimum reauthorization presentation

Before a new decision under reference frame `S1`, the responsible person should be shown:

```text
Proposed action:
Execute the supplier payment run under changed reference frame S1.

State diff:
- one supplier bank account changed from approved_account_A1 to changed_account_A2;
- supplier_B was added;
- previous approval was bound to reference frame hash test_hash_S0;
- current reference frame hash is test_hash_S1.

Materiality assessment:
The approved supplier scope and payment destination changed.
The change was classified as material under supplier_payment_materiality_v1.

Possible harm:
- payment to an unintended recipient;
- financial loss;
- compliance or legal consequences;
- low reversibility after execution.

Required duties and options:
- inspect the changed payment destination;
- verify the new supplier is admissible;
- review the evidence supporting the change;
- approve, reject, redirect, request evidence, or escalate;
- request independent review when required.

Accountability notice:
The decision, evidence presented, acknowledged diff, role identity, and selected action will be recorded and may be reviewed under the applicable organizational process.
```

---

## Pass criteria

The reauthorization check passes only if evidence shows that:

- the concrete `state_diff_manifest` was presented;
- materiality assessment and its basis were visible;
- relevant evidence was accessible;
- consequences of action, inaction, and delay were not hidden where applicable;
- reversibility was stated;
- duties and available decision options were explicit;
- the person had real authority and practical ability to refuse, redirect, request evidence, or escalate;
- sufficient decision time was available under the applicable policy;
- acknowledgement was bound to `S1` and its exact hash, not to the general task;
- enforcement was described as reviewable, fair, and proportionate rather than automatic.

---

## Failure signals

The check fails if:

- only a generic approval request is shown;
- the diff is hidden, incomplete, or presented only as a hash mismatch;
- responsibility is implied but not assigned;
- possible harm is hidden or minimized;
- sanctions or SLA pressure are used as coercion;
- the system claims a person is automatically guilty;
- the person lacks authority, time, evidence, or ability to refuse;
- acknowledgement is not bound to the exact changed reference frame;
- a Boolean challenge result is treated as proof of internal understanding.

---

## Test principle

```text
Procedurally Supported Human Reauthorization
=
Material diff presented
+
Relevant evidence accessible
+
Consequences and duties presented
+
Real authority and decision options
+
Sufficient opportunity to refuse or escalate
+
Traceable acknowledgement bound to the current state
```

This principle remains non-canonical until separately reviewed and approved by the Human Owner.
