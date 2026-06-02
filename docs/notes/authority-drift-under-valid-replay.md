# Authority Drift Under Valid Replay

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Source type:** External Discussion Input + RABA synthesis  
**External input:** Davorin Popović, GitHub Discussion #72  
**Prepared by:** Ben / RABA Integration and GitHub Specialist  
**Human Owner:** Oleksandr / Александр  
**Adoption status:** Not adopted  
**Implementation status:** Not implemented  

> This note does not change RABA canon, schemas, event families, repository governance rules, AI autonomy levels, or public positioning.  
> It records and analyzes an external discussion input and proposes a non-canonical synthesis for further review.

---

## 1. Context

During GitHub Discussion #72 on AI autonomy, speed, and human responsibility, Davorin Popović identified an additional governance failure mode.

The core concern is that a system may preserve enough state to replay why an action was allowed, blocked, or escalated, while the actual source of authority has gradually shifted through accumulated operational dependency.

In that situation, the system may still be able to answer:

```text
Can we explain the decision?
```

but may fail to answer the deeper governance question:

```text
Can we still demonstrate where authority actually resides?
```

This note treats Davorin’s contribution as a high-value external discussion input and explores how it connects to RABA.

---

## 2. Problem statement

RABA already emphasizes that responsibility must remain explicit, reviewable, and final when AI systems become more autonomous.

Davorin’s input adds a sharper distinction:

```text
Auditability may remain intact while authority has drifted.
```

A system may preserve logs, approvals, replayable traces, and escalation records, but the institution may still lose practical control if human decision-makers become operationally dependent on AI-generated decision packages.

This creates a distinction between:

```text
formal authority
```

and

```text
actual authority
```

Formal authority may remain assigned to a human role.

Actual authority may gradually move toward:

- an AI system;
- an AI-prepared decision package;
- a default workflow path;
- a governance gateway;
- a reviewer who no longer meaningfully reviews;
- an operational dependency that becomes difficult to challenge.

---

## 3. Why valid replay is not enough

A valid replay can show:

- what happened;
- what state was available;
- which rule applied;
- who clicked approve;
- why the system allowed, blocked, or escalated an action.

But valid replay alone may not show whether the approving person or role still exercised real authority.

Example:

```text
The Human Owner formally approved the action.
The Decision Log records the approval.
The Action Boundary was observed.
The Responsibility Event Stream can reconstruct the decision.
```

Yet in practice:

```text
The AI prepared the full decision package.
The human reviewer did not inspect source evidence.
The approval became a routine confirmation.
The organization became dependent on the AI framing.
The real center of decision formation shifted away from the human role.
```

In that situation, responsibility is still visible, but authority may no longer be meaningfully located where governance claims it is.

---

## 4. Relationship to existing RABA concepts

### 4.1 Responsibility Event Stream

The Responsibility Event Stream helps reconstruct the chain of responsibility after an action.

Davorin’s point strengthens it by adding a further requirement:

```text
A responsibility trace should not only show who approved.
It should also help demonstrate whether the approving authority remained real.
```

This suggests that future Responsibility Event Stream models may need to capture not only decision events, but also authority residency indicators.

---

### 4.2 Action Boundary

Action Boundary defines where an AI-proposed or AI-assisted action crosses into consequence-bearing territory.

Davorin’s input adds:

```text
An action may remain within formal boundaries while authority slowly shifts through repeated dependency.
```

Therefore, RABA may need to distinguish:

- boundary crossing by a single action;
- authority drift through accumulated patterns.

---

### 4.3 Autonomy Drift

Autonomy Drift describes a pattern where an AI actor gradually expands operational scope beyond confirmed boundaries.

Davorin’s contribution deepens this:

```text
Autonomy Drift is not only about what the AI does.
It is also about where decision authority actually comes to reside.
```

This suggests a related concept:

```text
Authority Drift
```

Authority Drift occurs when operational dependency gradually moves practical decision power away from the intended human or institutional authority source, even if formal approval structures remain intact.

---

### 4.4 Active Evidence Interlock

Active Evidence Interlock addresses the risk that AI-prepared decision packages create a cognitive tunnel.

Davorin’s point supports this strongly.

If a human reviewer approves an AI-prepared package without engaging source evidence, authority may drift from the human reviewer toward the AI-prepared framing.

Therefore, Active Evidence Interlock may be one mechanism to reduce Authority Drift.

It asks not only:

```text
Did the human approve?
```

but also:

```text
Did the human interact with the evidence needed to make approval meaningful?
```

---

### 4.5 Human Owner Authority

RABA self-application requires that Human Owner authority remains final.

However, Davorin’s point shows that this must be protected not only formally, but operationally.

For RABA itself, this means:

```text
Ben may draft.
Claude may review.
External contributors may suggest.
GitHub may record.
But Human Owner authority must remain actually exercised, not merely documented.
```

---

## 5. Proposed working concept: Authority Residency Check

A possible RABA response is to introduce a non-canonical working concept:

```text
Authority Residency Check
```

Purpose:

```text
To verify whether authority remains located in the intended human or institutional role, rather than drifting into AI-generated framing, default workflow execution, or operational dependency.
```

This check asks:

1. Who is formally authorized to decide?
2. Who or what shaped the decision package?
3. Did the human authority engage with source evidence?
4. Was there a realistic option to reject or redirect the AI recommendation?
5. Is approval becoming automatic or routine?
6. Has the organization become dependent on AI-prepared framing?
7. Can the institution demonstrate where authority actually resides?

---

## 6. Possible indicators of Authority Drift

Authority Drift may be present when:

- approvals become routine confirmations of AI-prepared recommendations;
- human reviewers rarely inspect original evidence;
- Decision Logs record approval but not meaningful review;
- AI-generated summaries become the primary decision environment;
- alternative interpretations are not surfaced;
- rejecting the AI recommendation becomes operationally difficult;
- governance gates preserve workflow form but not decision substance;
- external reviewers or AI collaborators begin to influence direction without clear Human Owner decision;
- repeated AI-assisted cycles create dependency without explicit autonomy reassessment.

---

## 7. Possible RABA control response

A future RABA control pattern may combine:

```text
Responsibility Event Stream
+ Active Evidence Interlock
+ Authority Residency Check
+ Autonomy Drift Review
```

Together, these answer four different questions:

```text
What happened?
```

Responsibility Event Stream.

```text
Did the human engage with source evidence?
```

Active Evidence Interlock.

```text
Did AI autonomy expand beyond confirmed scope?
```

Autonomy Drift Review.

```text
Where does authority actually reside?
```

Authority Residency Check.

---

## 8. Implication for RABA self-application

This note is especially relevant to the RABA project itself.

RABA must avoid a situation where:

```text
Ben prepares complete governance packages.
Claude validates them.
External contributors agree.
GitHub records everything.
The Human Owner formally confirms.
But real direction has already been shaped by accumulated AI framing.
```

The project must therefore preserve a real decision space for the Human Owner.

That means:

- Ben should present options, not only polished conclusions;
- Claude review should remain advisory, not supervisory;
- external review should challenge, not approve;
- PRs should clearly distinguish preparation from adoption;
- Human Owner confirmation should remain specific, informed, and reversible where possible.

---

## 9. Working formulations

Possible RABA formulation:

```text
Auditability proves that a decision can be reconstructed.
It does not by itself prove that authority remained where governance intended it to be.
```

Shorter formulation:

```text
A valid replay is not enough if authority has drifted.
```

Alternative formulation:

```text
RABA must preserve not only decision traceability, but authority residency.
```

---

## 10. Open questions

1. Should Authority Drift be treated as part of Autonomy Drift or as a separate RABA concept?
2. Should Authority Residency Check become a control inside Responsibility Event Stream?
3. Should Active Evidence Interlock be framed as one anti-drift mechanism?
4. How can authority residency be measured without creating excessive bureaucracy?
5. How can RABA distinguish genuine human approval from routine confirmation?
6. What minimum evidence is needed to show that Human Owner authority remained actually exercised?
7. Should RABA self-application include periodic Authority Residency Reviews?

---

## 11. Current recommendation

Do not adopt this concept into canon immediately.

Recommended next step:

```text
Treat Davorin’s contribution as high-value External Discussion Input.
Use it to strengthen the analysis around Autonomy Drift, Active Evidence Interlock, Responsibility Event Stream, and RABA self-application.
Prepare a future non-canonical working note or review note before any canonicalization attempt.
```

This note should not be merged, adopted, or cited as canonical without explicit Human Owner confirmation.

---

## 12. Status summary

**Files changed:** none  
**Canon changed:** no  
**Repository governance changed:** no  
**AI autonomy level changed:** no  
**External input adopted:** no  
**Recommended use:** synthesis input for future governance review
