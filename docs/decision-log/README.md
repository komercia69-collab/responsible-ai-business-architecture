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
- Governance Gateway Check: [OK / partial / not applicable]
- Action Boundary Check: [OK / partial / not applicable]
- Block 5 Verification Level: [0 / 1 / 2 / 3 / 4 / not applicable]
- Critical Claims Checked: [explicit text / not applicable]
- Sources Checked by Human: [explicit text / not applicable]
- Sources Extracted for Human Review: [links / citations / file paths / quotes / not applicable]
- Remaining Uncertainty: [explicit text]
- Human Rationale: [explicit text when required]
- What Remains Blocked: [explicit text]
- Reasoning: [why the decision was made]
- Status: [Active / Implemented / Superseded / Deferred / Closed]
```

---

## Block 5 Verification Status

For decisions involving Level 2–4 material, canon promotion, GitHub state changes, public/provider-facing use, partner-facing use, commercial claims, validation claims, adoption claims, compliance claims, certification claims, or roadmap claims, Decision Log entries should include explicit Block 5 verification context.

Recommended fields:

```text
Block 5 Verification Level:
Critical Claims Checked:
Sources Checked by Human:
Sources Extracted for Human Review:
Remaining Uncertainty:
Human Rationale:
What Remains Blocked:
```

Level 0–1 material may use a short entry or mark fields as not applicable when no consequence boundary is crossed.

Level 2–4 material requires explicit text. AI-generated summaries, source maps, or evidence packs may assist review, but they do not replace Human Rationale.

---

## AI Instruction

When ChatGPT, Gemini, Claude, Comet, or another AI system prepares a Decision Log entry, it must include Block 5 Verification Status when the decision crosses a consequence boundary, even if `docs/decision-log-schema.md` has not yet been extended.

AI-generated verification summaries are review aids only. They do not replace Human Rationale.

AI systems may extract claims, citations, file paths, passages, source gaps, and unresolved questions for human review. They must not treat their own verification summary, multi-AI agreement, or repository presence as Human Owner approval.

---

## No Silent Promotion

No material may be promoted to canon, public-facing, provider-facing, partner-facing, commercial, validation, adoption, compliance, certification, or roadmap-claim status without explicit Human Rationale and source-verification status.

Promotion includes movement from:

```text
working note → GitHub candidate
GitHub candidate → merged non-canonical
merged non-canonical → canon
internal note → public/provider-facing use
AI-prepared review aid → decision-supporting material
```

The Decision Log does not create approval by itself. It records the Human Owner decision and the verification status behind that decision.

---

## Doc Vault to GitHub Workflow

Comet or another workspace may prepare Recommendation Cards or draft Decision Log entries in a Doc Vault.

GitHub remains the durable archive for accepted Decision Log entries.

Recommended handoff:

```text
Doc Vault / Comet workspace
  ↓
Markdown recommendation or decision draft
  ↓
ChatGPT triage
  ↓
Human confirmation when needed
  ↓
GitHub Decision Log commit
```

Doc Vault is a working interface for search, filtering, comparison, and preparation.

GitHub is the long-term project memory.

Raw workspace exports should not be treated as Canon until accepted through triage.

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
