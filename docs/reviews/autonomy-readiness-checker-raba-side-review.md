# RABA-Side External Review — Autonomy Readiness Checker

**Status:** External Conceptual Review Input  
**Canonical status:** Non-canonical. This document does not define accepted RABA architecture and does not define the Autonomy Readiness Checker project.  
**Binding status:** Non-binding. This review creates no obligation for either project.  
**Prepared from:** RABA perspective  
**External project:** `autonomy-readiness-checker` by Davorin  
**Purpose:** Provide a RABA-side conceptual review of the Autonomy Readiness Checker boundary, especially around responsibility acceptance, authority, reversibility, and replayability.  
**Commercial boundary:** No adoption, integration, partnership, referral, endorsement, pilot, or commercial cooperation is implied.  
**Related RABA areas:** Human-AI Autonomy and Control Tension, Governance Gateway, Action Classes, Reversibility Profile, Human Authority Constitution, Responsibility Event Topology, Decision Log, Policy Integrity, Bind-Time Admissibility, Active Confirmation Interlock

---

## 1. Purpose

This note offers external conceptual input from the RABA perspective on Davorin's `autonomy-readiness-checker` project.

It is not a pull request, requirement, endorsement, product review, integration proposal, or adoption statement.

The purpose is to pressure-test a shared governance boundary:

```text
LLM extracts.
Rules decide.
Human retains authority.
```

From the RABA perspective, this boundary is valuable because it prevents probabilistic extraction from silently becoming decision authority.

---

## 2. Boundary Note

This review is intentionally limited.

It is:

- external conceptual input;
- non-canonical;
- non-binding;
- non-commercial;
- non-integrative;
- non-adoptive.

It does not assume:

- RABA adoption of Autonomy Readiness Checker;
- Autonomy Readiness Checker adoption of RABA;
- shared roadmap;
- partnership;
- implementation commitment;
- commercial cooperation;
- product alignment;
- architectural approval by either side.

External conceptual overlap is not adoption.

Review is not authority.

---

## 3. What Works Strongly

The Autonomy Readiness Checker appears valuable because it keeps three roles separate:

| Layer | Role |
|---|---|
| Extraction layer | May use LLM or structured input to identify relevant signals. |
| Rule-based decision layer | Applies deterministic readiness rules. |
| Human authority layer | Retains final responsibility and authority. |

This separation matters because an LLM may help identify, summarize, classify, or extract information, but it should not silently become the actor that grants governance authority.

RABA-aligned strength:

```text
Probabilistic extraction is not governance authority.
```

This is close to the RABA principle:

```text
AI may be probabilistic.
Responsibility must not be.
```

---

## 4. Central RABA Refinement: Responsibility Acceptance

A key RABA-side refinement is that responsibility should not only remain visible, explicit, or replayable.

It must also be accepted.

Visibility of responsibility is not the same as realization of responsibility.

A trace, dashboard, log, assigned role, or named owner may show who is connected to an action.

But responsibility becomes operationally real only when an accountable person or accountable role has explicitly accepted responsibility within a defined scope, authority boundary, and correction obligation.

RABA distinction:

```text
Visible responsibility is not realized responsibility.

Realized responsibility requires acceptance by an accountable person or role.
```

In Russian terminology:

```text
Видимая ответственность — это ещё не реализованная ответственность.

Реализованная ответственность требует принятия ответственным лицом или ролью.
```

This distinction may be useful for readiness checking because a system may appear governed while responsibility remains only displayed, assigned, or implied.

---

## 5. Three Responsibility States

RABA would distinguish at least three responsibility states:

| State | Meaning | Risk if mistaken for the next state |
|---|---|---|
| Responsibility visibility | The system shows who or what is associated with an action. | A visible name or role may be mistaken for accountability. |
| Responsibility assignment | A person or role is assigned to an action, decision, workflow, or consequence. | Assignment may be mistaken for accepted responsibility. |
| Responsibility acceptance | The accountable person or role explicitly accepts responsibility within defined scope and correction duty. | Without acceptance, responsibility may remain symbolic. |

Readiness should not rely only on visibility or assignment.

For high-impact autonomy, readiness may require acceptance.

---

## 6. Suggested Addition 1 — Action Classes

The checker may become stronger if action class is treated as a first-level input.

Different action classes should not share the same readiness threshold.

Examples:

| Action class | Possible readiness implication |
|---|---|
| Internal analysis | Lower threshold; limited external consequence. |
| Draft communication | Requires content review depending on audience and risk. |
| External communication | Requires stronger authority and evidence checks. |
| External commitment | Should require explicit human authority and acceptance. |
| Record update | Depends on field sensitivity and downstream effect. |
| Payment preparation | Requires evidence and authority checks. |
| Payment approval | Requires strict authority, evidence, and responsibility acceptance. |
| Production or API action | Requires tool authority, reversibility assessment, and replayable record. |
| Irreversible high-risk action | Should normally fail closed or require exceptional authority. |

RABA-side principle:

```text
Technical action type is not enough.
Governance action class must be explicit.
```

---

## 7. Suggested Addition 2 — Reversibility Profile

A readiness checker may need to distinguish how reversible the proposed autonomy is.

Suggested reversibility profile:

```text
reversible
partially_reversible
difficult_to_reverse
irreversible
unknown
```

The more difficult an action is to reverse, the stronger the readiness threshold should become.

For example:

- reversible drafting may be allowed with lighter controls;
- customer-visible commitment needs stronger checks;
- financial approval needs strict authority;
- irreversible production action should fail closed unless all required conditions are satisfied.

RABA-side principle:

```text
Risk is not only probability.
Risk also depends on consequence and reversibility.
```

---

## 8. Suggested Addition 3 — Authority Scope and Version

The phrase "human retains authority" becomes operationally stronger when authority is scoped and versioned.

Possible fields:

```json
{
  "authority_scope": "<what this human or role may authorize>",
  "authority_version": "<version of the authority definition>",
  "authority_source": "<policy, constitution, role definition, approval record>",
  "valid_from": "<ISO 8601>",
  "valid_until": "<ISO 8601 or null>",
  "authority_limitations": ["<scope limits>"]
}
```

RABA concern:

Authority should not silently accumulate from:

- prior access;
- prior approval;
- repeated successful execution;
- dashboard visibility;
- lack of previous blocking;
- tool availability.

RABA-side principle:

```text
Tool access is not authority.
Prior approval is not unlimited authority.
Repeated use is not expanded authority.
```

---

## 9. Suggested Addition 4 — Responsibility Acceptance Record

A readiness check may benefit from an explicit responsibility acceptance state.

Possible structure:

```json
{
  "responsible_party_id": "<person_or_role>",
  "responsibility_scope": "<defined_scope>",
  "responsibility_acceptance_state": "not_required | requested | accepted | rejected | expired",
  "accepted_at": "<ISO 8601 or null>",
  "accepted_by": "<human_or_role_id>",
  "correction_obligation": "<defined_obligation>",
  "acceptance_evidence_id": "<record_or_null>"
}
```

This would help distinguish:

```text
someone was visible
someone was assigned
someone accepted responsibility
```

For high-risk or external-impact action classes, acceptance may be a readiness condition.

---

## 10. Suggested Addition 5 — Replayable Decision Record

A deterministic checker becomes more useful when the decision can be replayed later.

Possible pressure-test fields:

```json
{
  "decision_id": "<decision_id>",
  "checked_at": "<ISO 8601>",
  "schema_version": "<schema_version>",
  "ruleset_version": "<ruleset_version>",
  "input_snapshot_hash": "<hash>",
  "action_class": "<action_class>",
  "reversibility_profile": "<reversibility_profile>",
  "authority_scope": "<authority_scope>",
  "authority_version": "<authority_version>",
  "responsibility_acceptance_state": "<state>",
  "outcome": "ready | not_ready | needs_human_review | blocked",
  "outcome_reason": "<reason>",
  "limitations": ["<what_this_record_does_not_prove>"]
}
```

RABA-side principle:

```text
A readiness result should preserve why the system reached that result.
```

Replayability should support later review without pretending to prove more than it actually proves.

---

## 11. Suggested Addition 6 — What the Checker Does Not Claim

A clear boundary section may strengthen trust.

Possible section:

```text
What this checker does not claim
```

Possible statements:

- It does not prove legal compliance.
- It does not prove full human understanding.
- It does not replace organizational accountability.
- It does not authorize execution by itself.
- It does not turn LLM output into authority.
- It does not prove absence of future harm.
- It does not replace human responsibility acceptance where required.

RABA-side principle:

```text
A strong governance mechanism should state what it does not prove.
```

This protects against governance theater and overclaiming.

---

## 12. Operational Momentum Risk

Davorin's framing of operational momentum is highly relevant to RABA.

A RABA-side formulation:

```text
Operational momentum becomes dangerous when a process moves faster than authority can remain explicit, responsibility can be accepted, and decisions can remain replayable.
```

The danger is not only speed.

The danger is a chain of actions that continues because previous steps created momentum, even though responsibility has not been accepted at the appropriate level.

RABA-side risk:

```text
The system may still appear controlled while responsibility becomes difficult to reconstruct or accept.
```

---

## 13. Possible Readiness Questions

The checker may ask or expose questions such as:

1. What action class is being evaluated?
2. Is the action reversible?
3. What authority scope applies?
4. Which authority version applies?
5. Is responsibility merely visible, assigned, or accepted?
6. Is explicit responsibility acceptance required for this action class?
7. Has an accountable person or role accepted responsibility?
8. What correction obligation exists if the outcome creates harm or error?
9. What evidence supports the readiness outcome?
10. Can the readiness decision be replayed later?
11. What does the readiness decision not prove?

---

## 14. Mapping to RABA Open Problem

This review connects to the RABA inquiry:

```text
How can AI autonomy create speed without dissolving human responsibility?
```

Autonomy creates speed.

Speed creates operational momentum.

Operational momentum can move faster than authority, responsibility acceptance, and replayability.

Therefore, readiness should not only ask:

```text
Is the system capable of acting autonomously?
```

It should also ask:

```text
Can authority remain explicit,
can responsibility be accepted,
and can the decision be replayed when autonomy creates operational momentum?
```

---

## 15. Questions for Davorin

1. Does the distinction between responsibility visibility, assignment, and acceptance fit the Autonomy Readiness Checker boundary?
2. Should responsibility acceptance be part of readiness, or should it remain an upstream organizational input?
3. Should action class be treated as a first-level readiness input?
4. Should reversibility profile change readiness thresholds?
5. Should authority scope and authority version be preserved in the readiness result?
6. What minimum replayable decision record would be useful without overcomplicating the checker?
7. Which suggested additions are inside the checker scope, adjacent to it, or outside its intended scope?
8. Would a "what this checker does not claim" section strengthen the project boundary?

---

## 16. What This Note Does Not Claim

This note does not claim that:

- Autonomy Readiness Checker should adopt RABA terminology;
- RABA defines Autonomy Readiness Checker;
- Davorin should implement these suggestions;
- RABA and Autonomy Readiness Checker are integrated;
- conceptual overlap creates partnership;
- a readiness checker can prove legal compliance;
- deterministic rules alone realize responsibility;
- visibility of responsibility is sufficient;
- assignment of responsibility is sufficient;
- human authority can be assumed from tool access or prior use.

---

## 17. Governance Boundary

External review is not adoption.

Conceptual overlap is not integration.

Non-binding input is not a requirement.

Visibility is not acceptance.

Assignment is not acceptance.

Tool access is not authority.

Prior approval is not unlimited authority.

Replayability is not legal validation.

Deterministic output is not automatically human accountability.

Multi-AI agreement is not approval.

Final architectural approval belongs to each project's human owner.

---

## Key Takeaway

The Autonomy Readiness Checker already expresses a strong governance boundary:

```text
LLM extracts.
Rules decide.
Human retains authority.
```

The main RABA-side refinement is:

```text
Visible responsibility is not realized responsibility.
Realized responsibility requires acceptance by an accountable person or role.
```

If the checker can distinguish action class, reversibility, authority scope, authority version, replayable decision state, and responsibility acceptance, it may become a stronger tool for detecting when autonomy is creating operational momentum faster than responsibility can be explicitly accepted and reconstructed.
