# Decision Log

The Decision Log records why meaningful recommendations were accepted, changed, deferred, or rejected in the RABA project.

It is part of the multi-AI operating model.

The Decision Log protects the project from losing context when ideas come from multiple AI systems, human reviewers, or external sources.

---

## Purpose

The Decision Log answers:

> Why did this recommendation become part of the RABA Canon, or why was it deferred or rejected?

It helps preserve:

- accountability;
- project memory;
- conceptual consistency;
- reviewability;
- future audit of architectural decisions.

---

## Recommended Structure

```text
docs/decision-log/
├── README.md
├── YYYY-MM/
│   ├── YYYY-MM-DD-topic.md
│   └── YYYY-MM-DD-topic.md
```

Example:

```text
docs/decision-log/2026-05/2026-05-21-audit-integrity-recovery.md
```

---

## Minimum Entry Format

```markdown
# [YYYY-MM-DD] [Topic]

- Source: [Claude / Gemini / Comet / ChatGPT / Human / Other]
- Decision: [accept / partial / defer / reject]
- Canon Impact: [how this changes or preserves the core architecture]
- Repo Impact: [files changed or planned]
- Reasoning: [why the decision was made]
- Status: [Active / Implemented / Superseded / Deferred / Closed]
```

---

## When to Create a Decision Log Entry

Create an entry when a recommendation:

- adds or changes a core concept;
- affects Action Boundary, Approval States, Governance Gateway, Decision Log, Responsibility Event Stream, or Responsibility Observability;
- changes the state model;
- creates a new RFC;
- changes schemas;
- changes implementation artifacts;
- changes project positioning;
- rejects or defers a major recommendation.

Minor wording edits do not require a Decision Log entry.

---

## Relationship to Canon

The Decision Log is not Canon by itself.

It explains how Canon changed.

Canon lives in accepted project files such as README, docs, schemas, examples, RFCs, and implementation artifacts.

---

## Related Templates

- [`templates/ai-recommendation-card.md`](../../templates/ai-recommendation-card.md)
- [`templates/ai-decision-card.md`](../../templates/ai-decision-card.md)

---

## Core Principle

> If the project changes meaningfully, the reason should not live only in chat history.
