# Why Governance Matters

## Real-World Examples of AI Action Without Accountability

> This document illustrates why the RABA governance layer exists —  
> not through abstract principles, but through real operational patterns.

---

## Example 01 — The Negotiation Workflow

### What happened

A documented AI workflow, publicly described in May 2026, shows the following sequence:

1. AI reads meeting notes from a note-taking app.
2. AI reads email threads and contract drafts from Gmail.
3. AI reads Slack conversations with partners and lawyers.
4. AI aggregates everything and builds a negotiation analysis.
5. AI generates two email drafts — one “soft”, one “aggressive” — with recipients pre-filled.
6. User clicks to send.

The author describes this as: *“Claude is the one prompting me.”*

He considers this the feature.

RABA identifies this as the governance gap.

---

### Where accountability disappears

| Step | What AI does | RABA question | Missing element |
|---|---|---|---|
| 1–3 | Reads legal documents and contracts | Who authorized access to legal materials? | Action Boundary |
| 4 | Builds negotiation position | What is the confidence level? What if interpretation is wrong? | Approval State: RECOMMEND, not AUTHORIZED |
| 5 | Prepares legal-adjacent email | Who reviewed the draft? What approval is required? | Governance Gateway |
| 6 | Places in outbox, waits for click | Who is accountable if the aggressive draft sends by mistake? | Decision Log + Responsible Party |
| — | No escalation path defined | What happens if AI misread the contract? | ESCALATE path |

---

### The core problem

The workflow is technically impressive and operationally useful.

The problem is not that AI acts.

The problem is that **no one explicitly authorized each step** — and no record exists of who was responsible for each transition.

When this workflow runs for one person managing their own negotiations:

- risk is concentrated;
- consequence is personal;
- recovery is possible.

When this pattern runs inside an organization — with shared contracts, multiple stakeholders, compliance requirements, and regulated communications — the same workflow becomes an **unaudited chain of AI-supported decisions with distributed consequences and no clear responsible party**.

---

### What RABA adds

```text
Without RABA:
User prompt → AI reads everything → AI prepares draft → User clicks send

With RABA:
User prompt
  → Action Boundary check: is AI authorized to read legal documents?
  → Approval State: RECOMMEND (draft is a recommendation, not an authorized action)
  → Governance Gateway: what risk level? who must review?
  → Human confirms: AUTHORIZED
  → AI executes: EXECUTED
  → Decision Log: records who authorized, what was reviewed, when
  → If AI interpretation uncertain: ESCALATE → defined path to human review
```

The output is similar.

The accountability is completely different.

---

### Key insight

> AI can read contracts, build a negotiation strategy, and place a draft in an outbox.  
> That is real capability.
>
> The missing question is not “can AI do this?”  
> The missing question is: **who authorized each step, and who owns the outcome if the aggressive draft goes out?**
>
> Governance is not about slowing AI down.  
> It is about knowing who is responsible when AI acts at speed.

---

### RABA principle demonstrated

**“AI may be probabilistic. Responsibility must not be.”**

In the negotiation workflow, AI acts on probabilistic interpretation of contracts and communication history.

The outcome — a legal-adjacent email sent to partners and lawyers — cannot be probabilistic.

The accountability gap between these two facts is exactly what RABA is designed to close.

---

## Notes

This example is based on a publicly documented workflow pattern from May 2026.

No proprietary information is used.

The pattern is described as a governance illustration, not a criticism of the tool or its author.

---

## Document status

- Status: Canon
- Owner: Oleksandr Shuliak
- Related concepts: Action Boundary, Approval States, Governance Gateway, Decision Log, ESCALATE path
