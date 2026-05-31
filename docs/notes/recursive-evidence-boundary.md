# Recursive Evidence Boundary

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Input type:** External conceptual input / LinkedIn discussion observation  
**Related directions:** RABA-over-RAG, Source Log / Decision Log bridge, local admissibility, Responsibility Event Stream  

> This note is not approved architecture.  
> It preserves a conceptual pattern for review: evidence may travel across domains, but authority and responsibility do not automatically travel with it.  
> Human Owner confirmation is required before canonical adoption.

---

## 1. Core observation

In many AI-supported and cross-system workflows, a proof object, source reference, trace, receipt, or evidence record may move from one domain to another.

However, once that evidence enters a new domain, it becomes a new incoming claim for that domain.

```text
Every transferred proof becomes a new incoming claim.
```

Each receiving domain must decide locally whether it may rely on that incoming claim before using it for a consequential action.

```text
Every incoming claim requires local admissibility before consequential use.
```

---

## 2. Key distinction

```text
Proof travels as evidence.
Authority does not automatically travel with it.
Responsibility does not automatically transfer with it.
```

A source, proof object, or AI-generated evidence summary may explain what was used or what happened elsewhere.

It does not automatically prove that the receiving domain may:

- act on it;
- approve it;
- reuse it externally;
- create a commitment from it;
- treat it as locally admissible;
- transfer responsibility to the previous domain.

---

## 3. RABA formulation

The RABA formulation is:

```text
Evidence transfer is not authority transfer.
```

and:

```text
Source traceability is not decision admissibility.
```

A transferred proof must be re-evaluated at the receiving boundary according to local conditions:

- action class;
- receiving domain;
- consequence class;
- policy version;
- authority scope;
- evidence freshness;
- evidence completeness;
- local admissibility;
- responsibility acceptance;
- correction obligation;
- replay requirements.

---

## 4. Relation to Source Log and Decision Log

This note strengthens the distinction:

```text
Source Log != Decision Log
```

A Source Log may record:

- which document was retrieved;
- which proof object was used;
- which source system produced the evidence;
- which retrieval trace or evidence hash is attached.

A Decision Log must record:

- why the receiving domain was allowed to rely on it;
- who accepted responsibility for relying on it;
- which consequence boundary was crossed;
- whether the evidence was locally admissible;
- what escalation or correction path exists if the evidence is later challenged.

In short:

```text
Source Log explains what travelled.
Decision Log explains why local reliance was allowed.
```

---

## 5. Relation to RABA-over-RAG

RAG systems may retrieve source evidence and present grounded answers.

But when that answer enters a workflow, the receiving context must still decide whether the source can be relied on for the next action.

Example:

```text
retrieved internal document
→ AI answer
→ user recommendation
→ draft external message
→ customer-facing claim
```

The source may be valid for internal analysis but not admissible for an external commitment.

RABA should therefore preserve a recursive boundary:

```text
each new domain + action class + consequence class requires fresh local admissibility.
```

---

## 6. Receiving-boundary questions

When a proof object, source reference, or AI-generated evidence summary enters a new domain, the receiving boundary should ask:

1. What is the incoming claim?
2. Where did the evidence originate?
3. What was the source log / retrieval trace / proof reference?
4. Is the source fresh enough for this use?
5. Is the source complete enough for this use?
6. Does the receiving actor have read access only, or action authority?
7. What action class is being proposed?
8. What consequence class may be created?
9. Is local admissibility satisfied?
10. Who accepts responsibility for relying on this evidence here?
11. What happens if the evidence is later contested?
12. Can the reliance decision be replayed later?

---

## 7. Responsibility Event implications

Possible responsibility events:

```text
incoming_claim_received
source_log_reference_linked
evidence_origin_recorded
receiving_boundary_detected
local_admissibility_requested
local_admissibility_satisfied
local_admissibility_failed
authority_scope_checked
responsibility_acceptance_requested
responsibility_acceptance_recorded
reliance_decision_recorded
incoming_claim_escalated
incoming_claim_blocked
```

These are candidate events only. They are not canonical without separate review.

---

## 8. Relationship to governed bypass

If the receiving domain cannot yet establish local admissibility, the process should not automatically stop unless risk requires it.

It may enter a governed preparation route:

- collect missing evidence;
- request clarification;
- mark uncertainty;
- prepare a decision summary;
- open a Human Response Window;
- escalate to the appropriate owner.

But it must not create consequence until admissibility, authority, and responsibility acceptance are satisfied.

```text
Process may continue as preparation.
It must not continue as consequence.
```

---

## 9. Healthcare example pattern

A clinical proof may originate in a doctor / clinic domain and then move to pharmacy, payer, hospital, audit, or regulator domains.

Each receiver may ask:

```text
Can we rely on this here?
```

The answer is local. It depends on the receiver's own rules, liability, state, context, and consequences.

The same pattern applies outside healthcare:

- RAG answers reused in customer communication;
- compliance evidence reused in audit reports;
- internal analysis reused in external claims;
- operational traces reused for financial approval;
- AI-generated summaries reused as legal or policy support.

---

## 10. Open questions

1. Should RABA define a generic `incoming_claim` event family?
2. Should Source Log references always require local Decision Log entries before consequential use?
3. How should local admissibility differ across domains, action classes, and consequence classes?
4. Can an AI system identify a receiving boundary without judging admissibility itself?
5. What is the minimum metadata needed for a proof object to be safely reused across domains?
6. When should recursive evidence review enter governed bypass instead of block?

---

## 11. Governance boundary

This note is:

- a working note;
- non-canonical;
- external conceptual input;
- not an endorsement of any external author or system;
- not an implementation commitment;
- not accepted RABA architecture.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
