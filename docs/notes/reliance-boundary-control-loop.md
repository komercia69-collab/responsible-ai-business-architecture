# Reliance Boundary Control Loop

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Input basis:** External conceptual input from Peter Cranstone plus RABA internal synthesis  
**Related external input:** [`../reviews/peter-cranstone-receiving-boundary-reliance-layer.md`](../reviews/peter-cranstone-receiving-boundary-reliance-layer.md)  
**Related directions:** Recursive Evidence Boundary, Source Log / Decision Log bridge, local admissibility, consequence boundary, Responsibility Event Stream, replayable governance

> This note is not approved architecture.  
> It proposes a possible control loop for receiving-boundary transitions.  
> Human Owner confirmation is required before canonical adoption, schema changes, event-family adoption, or implementation commitments.

---

## 1. Core problem

RABA already distinguishes between evidence movement and responsibility movement:

```text
Evidence transfer is not authority transfer.
Source traceability is not decision admissibility.
```

The receiving-boundary problem adds a more operational question:

```text
How does a receiving domain convert external evidence into locally admissible reliance before consequential use?
```

A proof object may enter a new domain.

But the receiving domain must not silently treat that proof as authority, admissibility, or permission to act.

---

## 2. Working formulation

The working formulation is:

```text
External proof does not become local reliance until the receiving boundary records an admissible reliance decision.
```

A shorter version:

```text
The boundary is not where evidence arrives.
The boundary is where reliance is allowed.
```

This note treats that transition as a candidate control-loop problem.

---

## 3. Proposed control loop

The proposed Reliance Boundary Control Loop captures the transition from external evidence to local reliance:

```text
evidence arrives
→ incoming claim is formed
→ local admissibility is checked
→ scope is bound
→ authority is verified
→ consequence is classified
→ reliance decision is recorded
→ responsibility is assigned
→ replay becomes possible
```

The loop does not merely record that evidence arrived.

It records whether, why, and under whose authority the receiving domain may rely on that evidence for a consequential action.

---

## 4. Minimum control questions

The control loop should be able to answer at least:

1. What proof object entered the receiving domain?
2. What local incoming claim did it become?
3. Where did it come from?
4. Which Source Log / proof reference / retrieval trace is linked?
5. Is it admissible under the receiver's current rules and state?
6. Is it bound to the correct action, person, transaction, workflow, time window, and consequence?
7. What is the receiver allowed to do with it?
8. Who has authority to allow reliance?
9. Who accepts responsibility for relying on it?
10. What unresolved limits, conditions, or uncertainties remain?
11. What consequence class may be created?
12. Can the reliance decision be replayed later?
13. Did the local reliance decision generate a new proof object for the next domain?

---

## 5. Candidate states

Possible non-canonical states include:

```text
incoming_claim_received
source_reference_linked
receiving_boundary_identified
admissibility_check_pending
admissibility_satisfied
admissibility_failed
scope_binding_pending
scope_bound
scope_mismatch_detected
authority_check_pending
authority_satisfied
authority_missing
consequence_use_requested
consequence_use_allowed
consequence_use_limited
consequence_use_refused
consequence_use_escalated
local_reliance_decision_recorded
responsibility_acceptance_recorded
derived_proof_object_generated
replay_record_available
```

These are candidate states only.

They do not define canonical RABA event schema.

---

## 6. Candidate event family

A possible future event family could be:

```yaml
event_family: reliance_boundary
```

Candidate events could include:

```yaml
- incoming_claim_received
- receiving_boundary_identified
- admissibility_check_requested
- scope_check_completed
- authority_check_completed
- consequence_use_requested
- local_reliance_allowed
- local_reliance_limited
- local_reliance_refused
- local_reliance_escalated
- local_decision_record_created
- derived_proof_object_generated
```

This is not adopted.

Creating or integrating this event family requires separate Human Owner confirmation.

---

## 7. Relation to Source Log and Decision Log

The Source Log may answer:

```text
What travelled?
```

The Decision Log must answer:

```text
Why was local reliance allowed, limited, refused, or escalated?
```

The Reliance Boundary Control Loop sits between them:

```text
Source Log
→ incoming claim
→ receiving-boundary checks
→ local reliance decision
→ Decision Log
→ Responsibility Event Stream
```

---

## 8. Relation to Recursive Evidence Boundary

A local reliance decision may create a new proof object.

That proof object may move to another domain.

At the next receiving boundary, it again becomes an incoming claim.

```text
local reliance decision
→ derived proof object
→ next receiving domain
→ incoming claim
→ new reliance decision
```

The control loop therefore helps operationalize the recursive evidence boundary.

---

## 9. Governed bypass implication

If the receiving boundary cannot yet allow local reliance, the process may continue as preparation rather than consequence.

Examples:

- collect missing evidence;
- request clarification;
- mark uncertainty;
- prepare a decision summary;
- open a Human Response Window;
- escalate to the appropriate owner.

But the process must not create consequence until admissibility, scope, authority, and responsibility acceptance are satisfied.

```text
Process may continue as preparation.
It must not continue as consequence.
```

---

## 10. Open questions

1. Should RABA define `reliance_boundary` as a formal event family?
2. Should `incoming_claim` belong to Recursive Evidence Boundary or to Reliance Boundary Control Loop?
3. What is the minimum metadata required for a local reliance decision?
4. Can AI detect a receiving boundary without judging admissibility itself?
5. Which checks must be deterministic and which may be human-reviewed?
6. When should failure of local reliance trigger governed bypass, escalation, or block?
7. How should derived proof objects be linked to prior local reliance decisions?

---

## 11. Governance boundary

This note is:

- a working note;
- non-canonical;
- based partly on external conceptual input;
- not accepted RABA architecture;
- not an implementation commitment;
- not a schema change;
- not a canonical event-family definition.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
