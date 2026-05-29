# Community Discussion Intake Protocol

**Status:** Working Note / Intake Protocol  
**Canonical status:** Non-canonical. This document describes a proposed intake process for community discussion input and does not define accepted RABA architecture.  
**Purpose:** Define how GitHub Discussions or other public community inputs may inform RABA without becoming architectural approval.  
**Related areas:** `inquiries/`, `docs/reviews/`, `decision-log/`, GitHub Discussions, Open Problems, External Review Inputs, Human Owner Confirmation

---

## 1. Purpose

RABA may benefit from open discussion with external readers, practitioners, researchers, engineers, governance specialists, and organizations.

GitHub Discussions can provide a useful public space for:

- open problems;
- architecture questions;
- external critique;
- implementation ideas;
- use cases;
- governance risks;
- terminology questions;
- requests for clarification.

However, open discussion must not be confused with architectural approval.

This intake protocol defines how community input can enter the RABA review process while preserving Human Owner authority.

---

## 2. Core Rule

GitHub Discussions are input channels, not decision channels.

In RABA terms:

```text
Community discussion is not adoption.
Community agreement is not approval.
External consensus is not canon.
```

Community input may influence RABA, but only after triage, review, and Human Owner confirmation where required.

---

## 3. Intake Flow

Suggested flow:

```text
GitHub Discussion
→ Human Owner / Integrator triage
→ inquiry, review note, issue, draft, or backlog item
→ analysis and possible implementation proposal
→ Human Owner confirmation
→ repository change or decision-log entry if accepted
```

A discussion may become:

- an inquiry file;
- an external review note;
- a GitHub issue;
- a working draft;
- a decision-log entry;
- a deferred backlog item;
- a rejected / not adopted input.

But it does not become any of these automatically.

---

## 4. Suggested GitHub Discussion Categories

If GitHub Discussions are enabled, the following categories may be useful:

| Category | Purpose |
|---|---|
| Open Problems | Discuss unresolved RABA questions and contradictions. |
| Architecture Questions | Ask about conceptual structure, boundaries, dependencies, or terms. |
| Use Cases | Suggest real workflows where RABA could be tested. |
| Governance Risks | Report possible failure modes, drift risks, or responsibility gaps. |
| External Reviews | Share structured critique or conceptual comparison. |
| Implementation Ideas | Discuss possible technical implementation patterns. |
| General Discussion | Broader questions and orientation. |

---

## 5. Suitable Discussion Topics

Examples of suitable open-problem discussions:

- How can AI autonomy create speed without dissolving human responsibility?
- When should uncertainty escalate, and when should policy violation block?
- How can governance observability avoid becoming hidden authority?
- How can human approval remain active rather than rubber-stamped?
- How should action classes be defined across different enterprise workflows?
- How can evidence freshness be represented in a replayable record?
- How should the system distinguish tool access from authority?
- How can community review strengthen RABA without becoming implied approval?

---

## 6. Triage Outcomes

After review, a discussion input may be classified as:

| Outcome | Meaning |
|---|---|
| Accepted for inquiry | The input becomes an open problem or inquiry item. |
| Accepted for review note | The input is preserved as external review material. |
| Accepted for issue | The input becomes a concrete GitHub issue or task. |
| Accepted for draft | The input informs a non-canonical working draft. |
| Deferred | The input may be useful later but is not acted on now. |
| Rejected / not adopted | The input is not aligned, not useful, or out of scope. |
| Requires Human Owner decision | The input affects architecture, boundaries, or canon. |

---

## 7. Contribution Boundaries

Community members may help by:

- asking clarifying questions;
- proposing use cases;
- identifying contradictions;
- pointing out missing dependencies;
- suggesting examples;
- stress-testing terminology;
- comparing RABA with other frameworks;
- reporting possible implementation risks.

Community members do not gain authority to:

- approve RABA architecture;
- define RABA canon;
- override Human Owner confirmation;
- create commercial commitments;
- imply partnership or adoption;
- convert discussion agreement into accepted architecture.

---

## 8. Contribution Format and Size Limits

Community contributions should be concise, structured, and easy for other participants to read and respond to.

Suggested limits:

| Contribution type | Suggested limit |
|---|---|
| Main discussion post | 800–1,200 words |
| Comment or reply | 300–500 words |
| Images or screenshots | Maximum 3 per comment |
| External links | Include only directly relevant links |
| Large documents | Link or summarize; do not paste full documents into the thread |

Suggested structure for a useful contribution:

1. Problem view — how you understand the issue.
2. Main risk — what could fail or drift.
3. Proposed direction — what might help.
4. Limitations — where your proposal may not work.
5. Example — optional, if it clarifies the point.

Discussion rule:

```text
One comment = one main idea, objection, example, or proposed solution.
```

Images should be used only when they clarify the point.

Each image should include a short explanation of what it shows and why it matters.

Avoid:

- image dumps without explanation;
- very long unstructured essays;
- multiple unrelated ideas in one comment;
- repeated comments that try to create pressure through volume;
- pasting full documents when a summary and link would be clearer.

RABA boundary:

```text
Volume does not equal authority.
Longer comments do not carry more architectural weight.
Repeated comments do not create consensus or approval.
```

Discussion input may be summarized, reformatted, or split before being preserved in `inquiries/`, `docs/reviews/`, issues, drafts, or decision logs.

---

## 9. Relationship to `inquiries/`

The `inquiries/` directory is the structured place for open problems and unresolved questions.

GitHub Discussions may feed into `inquiries/`, but only after triage.

A good inquiry should include:

- problem question;
- why it matters;
- current RABA direction;
- possible solution paths;
- related documents;
- open decisions;
- current status.

---

## 10. Relationship to `docs/reviews/`

If a community contribution is a meaningful structured critique, comparison, or expert review, it may be preserved under `docs/reviews/`.

Such material should remain clearly labeled as:

```text
External Review Input
Non-canonical
Not adoption
Not approval
```

---

## 11. Relationship to `decision-log/`

The `decision-log/` directory records decisions, not raw discussions.

A community discussion may influence a decision-log entry, but only if the Human Owner accepts the decision or direction.

Decision Log entries should preserve:

- what was decided;
- why it was decided;
- what was accepted;
- what was deferred or rejected;
- which external inputs informed the decision;
- what remains non-canonical.

---

## 12. Minimum Moderation Principle

RABA should welcome critique without allowing discussion noise to become architectural drift.

Suggested moderation principle:

```text
Open to input.
Strict about adoption.
Clear about authority.
```

This protects both contributors and the project.

---

## 13. What This Protocol Does Not Claim

This protocol does not claim that:

- GitHub Discussions are currently enabled;
- community input is automatically accepted;
- public agreement creates approval;
- external experts can approve RABA canon;
- discussion replaces Human Owner confirmation;
- a discussion thread is a decision-log entry;
- a popular suggestion becomes architecture;
- longer comments carry more authority;
- repeated comments create consensus;
- screenshots or images replace structured explanation.

---

## 14. Governance Boundary

Community discussion is not adoption.

Community agreement is not approval.

External review is not final architectural approval.

GitHub Discussions are input channels, not decision channels.

Contribution volume is not authority.

Multi-AI agreement is not approval.

Final architectural approval belongs to the Human Owner.

---

## Key Takeaway

RABA can benefit from open GitHub Discussions, but only if community input is handled through a governed intake process.

The project should remain open to critique while preserving a clear path:

```text
Discussion → triage → inquiry/review/issue/draft → Human Owner decision → repository change or decision log
```

This keeps RABA open without allowing external discussion to become hidden authority.
