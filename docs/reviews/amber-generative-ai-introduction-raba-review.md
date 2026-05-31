# Amber generative AI introduction — RABA-side review

**Status:** External Market Input  
**RABA status:** Non-canonical  
**Source type:** Vendor white paper / market-facing implementation guide  
**Source:** amber — *Introduction of generative AI in the company: What are the best practices?*  
**Purpose:** Identify responsibility-architecture gaps and RABA application points in enterprise generative AI / RAG adoption patterns.  

> This note is not an endorsement of amber, not an adoption decision, not a partnership assumption, and not a canonical RABA architecture decision.

---

## 1. Why this document matters for RABA

The amber guide represents a common and mature market framing for enterprise generative AI adoption:

- generative AI should solve a clear business problem;
- company context and internal knowledge matter;
- generic public tools are not sufficient for enterprise use;
- GDPR, access rights, hosting, integrations, traceability, onboarding, and internal adoption are central;
- Retrieval Augmented Generation (RAG) and enterprise search are presented as practical foundations for grounding AI answers in internal company knowledge.

This is useful for RABA because it shows that the market is already moving toward **knowledge grounding**:

```text
internal data
→ access rights
→ enterprise search
→ RAG context
→ source-referenced answer
```

RABA adds a different but complementary layer:

```text
AI-generated answer
→ recommendation
→ preparation
→ action
→ consequence
→ responsibility
```

The guide therefore helps clarify a key RABA distinction:

```text
RAG reduces hallucination risk.
RABA reduces responsibility drift.
```

---

## 2. Core RABA observation

Enterprise AI search systems primarily answer:

```text
What does the company know?
```

RABA asks:

```text
What may be done with that knowledge, by whom, under which authority, and with what accepted responsibility?
```

A RAG answer may be well-grounded in sources and still become risky when it is copied into an external email, used as a basis for a decision, presented as a commitment, or converted into an operational action.

The responsibility problem begins after answer generation:

```text
answer
→ recommendation
→ preparation
→ action
→ consequence
```

This transition is not fully covered by standard RAG, search, access-rights, or onboarding practices.

---

## 3. Points of intersection

### 3.1 Access rights ↔ authority scope

The amber guide correctly emphasizes access rights as a core requirement for enterprise AI.

RABA distinction:

```text
Access rights are not authority.
```

A user may have permission to view a document but may not have authority to:

- make an external promise based on it;
- approve a customer-facing claim;
- change a business record;
- commit the organization to a course of action;
- authorize a financial or legal consequence.

Potential RABA extension:

```yaml
access_rights_checked: true
authority_scope_required: true
authority_scope_status: missing | satisfied | unresolved | not_required
```

---

### 3.2 RAG ↔ evidence state

RAG helps connect AI answers to retrieved internal sources.

RABA extends this into **evidence state**:

- which source was used;
- which version or snapshot was used;
- whether the source was current;
- whether the user had access to the source;
- whether the source was sufficient for the action class;
- whether the answer context can be replayed later.

Possible RABA fields:

```yaml
evidence_state: current | stale | incomplete | contested | unavailable
source_snapshot_required: true
evidence_freshness_checked: true
replayable_answer_context: true
```

---

### 3.3 Multi-hop Q&A ↔ responsibility chain

The guide describes multi-hop question answering, where a complex request is decomposed into multiple sub-questions and then recomposed into a final answer.

RABA concern:

```text
Multi-hop generation can create multi-source responsibility ambiguity.
```

Example:

```text
buyer persona source
+ product USP source
+ contract context
+ sales template
= outbound customer email
```

The generated output may become an external claim or implied commitment.

RABA application:

- preserve which sub-answer contributed to which final claim;
- identify which sub-answer introduced consequence risk;
- distinguish internal preparation from external communication;
- require authority and responsibility acceptance before external consequence.

---

### 3.4 Traceability ↔ replayable decision record

The amber guide emphasizes source referencing and traceability so employees can verify where information came from.

RABA extends this from information traceability to decision traceability:

```text
Can the organization later replay why an AI-supported output was allowed, revised, escalated, or blocked?
```

A RABA-ready trace should preserve not only sources but also:

- action class;
- authority status;
- evidence state;
- admissibility state;
- responsibility acceptance status;
- consequence boundary status;
- governed bypass route, if used;
- final decision.

---

### 3.5 Onboarding and internal community ↔ governance learning loop

The guide recommends key users, multipliers, power users, AI ambassadors, and internal community channels.

RABA aligns with this but adds a governance function:

```text
Internal AI communities should not only share success stories.
They should also capture failure modes, edge cases, unclear boundaries, and responsibility questions.
```

This connects to RABA's GitHub Discussions / inquiry intake pattern:

- collect real-world problem cases;
- document attempted solutions;
- expose unresolved responsibility questions;
- turn repeated patterns into architecture improvements;
- avoid treating informal consensus as approval.

---

## 4. RABA supplier questions for enterprise AI / RAG vendors

The amber guide includes practical questions around use cases, users, integrations, hosting, and rollout.

RABA adds a responsibility-oriented supplier question set:

1. How does the system distinguish an answer, recommendation, preparation, action, and consequence?
2. Does the system classify action classes?
3. Does it record which source versions were used for an answer?
4. Does it distinguish access rights from authority scope?
5. Can it detect when a generated answer is being converted into an external claim or commitment?
6. Can it preserve a replayable decision record?
7. Does it support escalation or governed preparation before consequence creation?
8. Can it represent missing authority as something other than approval?
9. Does it support human response windows for consequential decisions?
10. Does it record responsibility acceptance separately from responsibility visibility or assignment?
11. Is there a correction obligation when an AI-supported answer causes a downstream error?
12. How does the system prevent tool access, prior success, or operational speed from becoming hidden authority?

---

## 5. Possible RABA application: responsibility-aware RAG

A practical extension of standard RAG is **responsibility-aware RAG**.

Standard RAG returns:

```json
{
  "answer": "...",
  "sources": ["..."]
}
```

Responsibility-aware RAG could return:

```json
{
  "answer": "...",
  "sources": ["..."],
  "access_rights_checked": true,
  "evidence_state": "current",
  "source_snapshot_required": true,
  "action_class": "external_claim_draft",
  "consequence_boundary": "not_crossed",
  "allowed_use": "internal_preparation_only",
  "authority_scope_required": true,
  "human_authorization_required": true,
  "responsibility_acceptance_required": true
}
```

This does not require the RAG system to own the entire responsibility architecture. It only needs to expose enough governance metadata for adjacent RABA layers to route the output properly.

---

## 6. Governed Bypass / Governed Preparation use case

Example:

```text
AI generates sales email based on internal knowledge
→ detects possible external commitment risk
→ enters governed preparation route
→ marks risky claims
→ checks source evidence
→ prepares safer variants
→ opens Human Response Window
→ requests authority / responsibility acceptance
→ allow / revise / escalate / block
```

Key distinction:

```text
process continues as preparation
≠
process continues as consequence
```

This preserves useful AI speed without allowing AI-generated content to create unauthorized external consequences.

---

## 7. Gap analysis

The amber guide strongly covers:

- enterprise search;
- RAG;
- access rights;
- GDPR and security;
- integration;
- hosting;
- onboarding;
- internal adoption and community.

RABA adds missing responsibility-architecture questions:

- Who accepts responsibility for using the answer?
- When does an answer become a recommendation?
- When does a recommendation become preparation?
- When does preparation become action?
- When does action create consequence?
- Who has authority at that transition?
- What evidence state was used?
- What can be replayed later?
- Who must correct downstream effects?

---

## 8. Draft RABA positioning formula

```text
Enterprise AI search grounds answers in company knowledge.
RABA grounds AI-supported action in authority, admissibility, and accepted responsibility.
```

Shorter version:

```text
RAG reduces hallucination risk.
RABA reduces responsibility drift.
```

---

## 9. Open questions

1. Should RABA define a lightweight metadata profile for responsibility-aware RAG outputs?
2. Should supplier evaluation include a mandatory responsibility-boundary questionnaire?
3. Should external customer-facing AI outputs always pass through a governed preparation route?
4. Which action classes require responsibility acceptance rather than simple traceability?
5. Can enterprise search systems expose authority-related metadata without becoming responsibility engines themselves?
6. How should Human Response Window expectations be defined for knowledge-work AI tools?

---

## 10. Status boundary

This note is:

- external market input;
- non-canonical;
- not an endorsement of amber;
- not a product evaluation;
- not a procurement recommendation;
- not a partnership assumption;
- not an accepted RABA architecture decision.

Any canonical adoption requires separate Human Owner confirmation and decision logging.
