# Peter Cranstone Receiving-Boundary Reliance Layer

**Status:** External Conceptual Input  
**Canonical status:** Non-canonical  
**Approval status:** Human Owner review required before architectural adoption  
**Input type:** External professional discussion / conceptual framing  
**Related directions:** Recursive Evidence Boundary, Source Log / Decision Log separation, local admissibility, reliance decisioning, Responsibility Event Stream, replayable governance

> This document preserves external conceptual input for review.  
> It is not RABA architectural approval.  
> It is not partnership, endorsement, adoption, or implementation commitment.  
> Canonical use requires Human Owner confirmation and a separate decision trail.

---

## 1. Context

This review input captures Peter Cranstone's receiving-boundary framing for cross-domain proof reuse.

The core distinction is:

```text
Source-side proof creation answers: what happened there?
Receiver-side reliance decisioning answers: what can we rely on here?
```

This strengthens the existing RABA distinction:

```text
Source Log explains what travelled.
Decision Log explains why local reliance was allowed.
```

The contribution is treated as external conceptual input only.

---

## 2. Core receiving-boundary problem

When a proof object enters a new domain, the receiving domain should not automatically treat it as reliance.

It should first treat it as an incoming claim.

```text
External proof enters as incoming claim, not as local reliance.
```

Before the receiving domain may use that claim for consequential action, it needs a local decision layer.

---

## 3. Minimum local decision layer

Peter's minimum receiving-domain decision layer includes four checks:

1. **Admissibility check** — is this proof acceptable here, under this receiver's rules and current state?
2. **Scope check** — is the proof bound to the specific action, person, transaction, workflow, time window, and consequence now being considered?
3. **Consequence decision** — what is the receiver actually allowed to do with it: act, refuse, limit, escalate, monitor, pay, dispense, approve, or audit?
4. **Local decision record** — why did this receiver rely on it, under whose authority, with what unresolved limits or conditions?

This is not only verification.

This is not only logging.

It is a receiving-domain decision layer that converts external evidence into a local reliance decision.

---

## 4. RABA formulation candidate

A possible RABA-compatible formulation is:

```text
External proof does not become local reliance until the receiving boundary records an admissible reliance decision.
```

A shorter formulation:

```text
The boundary is not where evidence arrives.
The boundary is where reliance is allowed.
```

These formulations are candidates only and are not canonical.

---

## 5. Recursive implication

A local reliance decision may generate its own proof object.

That new proof object can then enter another domain.

At the next receiving boundary, it again becomes an incoming claim.

```text
local reliance decision
→ derived proof object
→ next domain incoming claim
→ new local reliance decision
```

This is where the recursive evidence boundary begins to operate as a repeatable governance pattern.

---

## 6. RABA relevance

This input may inform future RABA work around:

- Recursive Evidence Boundary;
- Source Log / Decision Log separation;
- local admissibility;
- receiving-domain reliance decisioning;
- Responsibility Event Stream;
- Decision Log reconstruction;
- replayable governance;
- possible reliance-boundary control loop.

---

## 7. Non-canonical boundary

This document is:

- external conceptual input;
- non-canonical;
- not architectural approval;
- not accepted RABA architecture;
- not a public positioning claim;
- not an implementation commitment;
- not partnership or endorsement.

Any canonical use requires Human Owner confirmation and a separate decision trail.
