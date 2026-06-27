# Responsibility Observability

**Status:** Working Note / Non-canonical / Canonicalization Candidate / Human Owner Review Required  
**RABA layer:** Responsibility Management Interface / Responsibility Event Stream / Audit / Agent Governance  
**Related issue:** #152  
**Related review aid:** PR #151 — `docs/reviews/ai-microservices-agent-observability-source-review.md`  
**Prepared by:** Ben / ChatGPT as RABA Integration and GitHub Specialist  
**Date:** 2026-06-15

---

## 1. Boundary

This document is a **working note**, not canon.

It proposes **Responsibility Observability** as a RABA canonicalization candidate. It does not approve the concept, merge it into RABA canon, or claim external validation, adoption, compliance, certification, provider endorsement, or public readiness.

Final architectural approval belongs to the Human Owner.

---

## 2. Problem

Modern AI workflows increasingly behave like distributed systems. A single business outcome may involve:

- one or more AI agents;
- one or more AI skills or tools;
- APIs and microservices;
- policy checks;
- human review;
- business approval;
- audit or compliance evidence;
- downstream operational consequences.

Traditional technical observability can show what happened technically:

- logs;
- metrics;
- traces;
- latency;
- service dependencies;
- errors;
- API calls.

But technical observability alone does not show whether the action was responsible, authorized, escalated, approved, or accountable.

RABA needs a responsibility-level view.

---

## 3. Candidate Definition

**Responsibility Observability** is the ability to observe, trace, and audit responsibility-relevant events across AI, human, policy, and business decision workflows.

It answers questions such as:

- Who or what proposed the action?
- Was the action read-only, advisory, write-capable, public-facing, commercial, provider-facing, or high-consequence?
- Which policy boundary applied?
- Was Human Owner confirmation required?
- Was Human Owner confirmation actually present?
- Was AI agreement incorrectly treated as approval?
- What risk or consequence class was visible?
- What evidence remains for audit and review?
- Who remains accountable for the business decision?

Short form:

> Technical observability explains what happened in the system. Responsibility Observability explains who proposed, who approved, what policy applied, what risk was visible, what boundary was crossed, and who remains accountable.

---

## 4. Why Technical Observability Is Not Enough

A technical trace may show:

```text
service-a → agent-b → tool-c → api-d → document update
```

But RABA also needs to know:

```text
AI proposed → policy required Human Owner confirmation → confirmation missing → write action blocked
```

or:

```text
AI proposed → Human Owner confirmed → action executed → responsibility event recorded → audit evidence linked
```

Without this responsibility layer, a system may be technically observable while still hiding governance failure.

---

## 5. RABA Position

RABA should treat responsibility-relevant AI actions as observable governance events, not only as technical operations.

A responsible AI workflow should make visible:

- action class;
- consequence class;
- approval state;
- policy state;
- evidence state;
- accountability owner;
- escalation requirement;
- blocked actions;
- post-action review need.

This strengthens the RABA principle:

> AI may assist; Human Owner decides.

It also supports the rule:

> Multi-AI agreement does not equal Human Owner approval.

---

## 6. Relationship to Responsibility Management Interface

Responsibility Observability is a candidate foundation for the **Responsibility Management Interface**.

The interface should not only show AI output. It should make responsibility state visible before, during, and after action.

Possible interface-visible states:

- `draft`
- `working_note`
- `external_signal`
- `review_aid`
- `operational_control_material`
- `canonicalization_candidate`
- `merged_non_canonical`
- `canon`

Possible action states:

- `read_only`
- `recommendation_only`
- `human_confirmation_required`
- `approved_by_human_owner`
- `blocked`
- `executed`
- `post_action_review_required`

The interface should make hidden risks visible rather than hiding uncertainty.

---

## 7. Candidate Responsibility Event Fields

A future RABA schema may include fields such as:

| Field | Purpose |
|---|---|
| `responsibility_event_id` | Unique responsibility event identifier |
| `workflow_id` | Workflow or process context |
| `actor_type` | Human, AI, agent, service, policy engine, external reviewer |
| `actor_id` | Specific actor identifier |
| `proposed_action` | Action proposed by AI/human/system |
| `action_class` | Read-only, draft, write, public, commercial, provider-facing, high-consequence |
| `consequence_class` | Expected consequence level or domain |
| `policy_state` | Allowed, blocked, escalation required, unknown |
| `approval_state` | Not required, required, confirmed, rejected, missing |
| `human_owner_required` | Whether Human Owner approval is required |
| `human_owner_confirmation_id` | Link or identifier for approval evidence |
| `risk_signal` | Visible risk or uncertainty signal |
| `evidence_link` | Supporting evidence or source link |
| `decision_log_link` | Link to decision log entry |
| `audit_state` | Audit-ready, incomplete, missing, review required |
| `post_action_review_required` | Whether post-action review is needed |

This table is a candidate list only. It is not yet a canonical schema.

---

## 8. Minimal Governance Questions

Before an AI-enabled action proceeds, RABA should make the following questions visible:

1. What is the proposed action?
2. What class of action is it?
3. What consequence class may it enter?
4. Is the action reversible?
5. Is Human Owner confirmation required?
6. Has Human Owner confirmation been explicitly provided?
7. Is the action based on an external signal, AI recommendation, multi-AI agreement, or repository state?
8. Is any source being incorrectly treated as approval?
9. What evidence will remain after the action?
10. Who is accountable for the final decision?

---

## 9. Example: Repository Workflow

A repository workflow may be technically observable:

```text
branch created → file added → commit created → PR opened
```

Responsibility Observability adds:

```text
Human Owner confirmed write action → AI created non-canonical working note → PR remained draft → no ready-for-review → no merge → blocked claims recorded
```

This distinction prevents repository presence from being mistaken for architectural approval.

RABA rule:

> Repository presence does not equal approval. Commit existence does not equal canon.

---

## 10. Example: Multi-Agent Workflow

A multi-agent workflow may produce agreement:

```text
Agent A recommends → Agent B agrees → Agent C summarizes → action proposed
```

Responsibility Observability asks:

```text
Was this agreement treated as approval? Was Human Owner confirmation required? Did the agents share stale state? Was there a conflict boundary? Was the final action allowed?
```

RABA rule:

> Multi-AI agreement is a signal, not a decision.

---

## 11. Blocked Claims

This working note does **not** claim that:

- Responsibility Observability is RABA canon;
- RABA is validated by external sources;
- RABA is ISO/NIST compliant;
- RABA is certification-ready;
- RABA has provider or industry adoption;
- technical observability equals governance;
- multi-agent agreement equals approval;
- repository presence equals approval;
- audit logs alone create accountability;
- AI recommendations create business authorization.

Allowed framing:

> Responsibility Observability is a non-canonical RABA canonicalization candidate that may help connect technical trace, policy state, Human Owner confirmation, audit evidence, and accountability.

---

## 12. Open Questions for Human Owner Review

1. Should Responsibility Observability become a formal RABA concept?
2. Should it be connected directly to the Responsibility Management Interface?
3. Should it define the first version of a Responsibility Event Stream?
4. Should it remain a working note until Agent Coordination Layer is reviewed?
5. Should it include reversibility, consequence class, and approval state as mandatory fields?
6. Should external signals and multi-AI agreement be explicitly represented as non-approval states?
7. Should this concept be used in demos and simulations before canonicalization?

---

## 13. Recommended Next Step

Keep this note non-canonical and use it as the focused architectural basis for Issue #152.

Recommended next work item:

> Draft a minimal Responsibility Event Stream v0.1 as a separate non-canonical candidate, linked to this note and to the Responsibility Management Interface.

No canonicalization should happen without explicit Human Owner confirmation.
