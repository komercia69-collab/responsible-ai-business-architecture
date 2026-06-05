# Human Reauthorization Check

**Status:** Test Check Draft  
**Canonical status:** Non-canonical  
**Use:** Responsibility Boundary Test Pack v0.1  

> This check is test vocabulary only. It does not define legal duties, sanctions, or an adopted RABA human-approval standard.

---

## Purpose

This check tests whether a requested human reauthorization is meaningful rather than a formal confirmation step.

Meaningful reauthorization requires more than presenting an `Approve` button.

The responsible person should be able to understand:

- what action will be executed;
- what materially changed since the previous approval;
- what harm may result from action or inaction;
- how reversible the action is;
- what duties attach to the approving role;
- what personal or institutional accountability may follow from an established failure to perform those duties;
- that the decision and available evidence will remain traceable;
- that the person has real authority and a practical ability to refuse, redirect, request evidence, or escalate.

---

## Test vocabulary

### Human accountability awareness

```text
absent
incomplete
meaningful
```

A `meaningful` state requires demonstrated access to the material facts, possible consequences, relevant duties, and the accountability attached to the decision.

### Accountability enforceability

```text
unclear
weak
credible
```

`Accountability enforceability` does not mean automatic punishment.

It means that responsibility is attributable, the decision and evidence are traceable, relevant duties are defined, and an established review process can apply fair and proportionate consequences when a violation is proven.

---

## Minimum reauthorization presentation

Before a new decision under reference frame `S1`, the finance manager should be shown:

```text
Proposed action:
Execute the supplier payment run under changed reference frame S1.

Material changes:
- one supplier bank account changed;
- one new supplier was added;
- previous approval applied to S0 and does not automatically cover S1.

Possible harm:
- payment to an unintended recipient;
- financial loss;
- compliance or legal consequences;
- low reversibility after execution.

Required duties:
- inspect the changed payment destination;
- verify the new supplier is admissible;
- review the evidence supporting the change;
- approve, reject, redirect, or escalate the updated payment run.

Accountability notice:
The approving role owns the authorization decision. The decision, presented evidence, and acknowledged changes will be recorded and may be reviewed under the applicable organizational process.
```

---

## Pass criteria

The reauthorization check passes only if:

- material changes are visible and understandable;
- consequences of action and inaction are presented;
- reversibility is stated;
- the responsible person's duties are explicit;
- accountability is attributable and traceable;
- enforcement is described as reviewable, fair, and proportionate rather than automatic;
- the human has real authority and ability to refuse;
- the acknowledgement is bound to reference frame `S1`, not to the general task.

---

## Failure signals

The check fails if:

- the person sees only a generic approval request;
- responsibility is implied but not assigned;
- possible harm is hidden or minimized;
- sanctions are used as pressure without due process;
- the system claims a person is automatically guilty;
- the person lacks authority, time, evidence, or ability to refuse;
- acknowledgement is recorded without identifying the changed reference frame.

---

## Test principle

```text
Meaningful Human Approval
=
Understanding of the action
+
Understanding of possible harm
+
Understanding of personal duties
+
Awareness of accountability consequences
+
Real authority and ability to refuse
+
Traceable acknowledgement
```

This principle remains non-canonical until separately reviewed and approved by the Human Owner.
