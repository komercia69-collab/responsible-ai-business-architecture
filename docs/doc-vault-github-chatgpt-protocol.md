# Doc Vault → GitHub → ChatGPT Protocol

This document defines how RABA uses Comet / Doc Vault, GitHub, ChatGPT and the human owner as a governed working system.

---

## Core Principle

```text
Canon lives in GitHub.
Doc Vault supports work.
ChatGPT integrates.
Human remains accountable.
```

This principle prevents the project from creating multiple competing sources of truth.

---

## Roles

| Component | Role |
|---|---|
| Doc Vault | working memory, note preparation, filtering, browsing and temporary storage |
| Comet | browser workspace coordinator and cross-tab comparison layer |
| ChatGPT | triage, integration, GitHub editing and Canon consistency review |
| GitHub | durable project memory, Canon and accepted Decision Log archive |
| Human owner | final accountable decision maker |

---

## Operating Flow

```text
Doc Vault / Comet workspace
  ↓
Recommendation Card or draft Decision Log entry
  ↓
ChatGPT triage
  ↓
Governance Fit Check
  ↓
Human confirmation when needed
  ↓
GitHub commit
  ↓
Accepted Decision Log archive
```

---

## What Doc Vault Is For

Doc Vault supports:

- raw notes;
- exported recommendations;
- temporary drafts;
- cross-model comparisons;
- filtering and browsing;
- working context during a Comet session.

Doc Vault is not the Canon.

---

## What GitHub Is For

GitHub stores:

- accepted architecture documents;
- README and repository navigation;
- schemas;
- examples;
- RFCs;
- starter-kit artifacts;
- accepted Decision Log entries.

GitHub is the durable project memory.

---

## Safeguard

Raw Doc Vault exports should not be committed automatically.

They must pass through:

1. ChatGPT triage;
2. Governance Fit Check;
3. human confirmation when needed;
4. normalized GitHub commit.

This preserves the distinction between working memory and Canon.

---

## Decision Log Rule

After each meaningful RABA cycle, accepted recommendations should be recorded in:

```text
docs/decision-log/YYYY-MM/YYYY-MM-DD-topic.md
```

Not every note requires a Decision Log entry.

Create an entry when the recommendation changes:

- README;
- core concepts;
- schemas;
- RFCs;
- implementation artifacts;
- starter kit;
- project positioning;
- governance process;
- significant operating rules.

---

## Session Sync Rule

At the end of a meaningful Comet working session, create a short summary:

```text
What was reviewed?
What was accepted?
What was deferred?
What files changed?
What remains open?
```

This summary may become a Decision Log entry if it affects the project Canon.

---

## Anti-Patterns

Avoid:

- treating Doc Vault as a second Canon;
- committing raw model output without triage;
- duplicating the same decision in multiple conflicting places;
- storing important architectural decisions only in chat history;
- allowing Comet, Claude, Gemini or ChatGPT to bypass human accountability.

---

## Related Documents

- [`docs/multi-ai-operating-model.md`](multi-ai-operating-model.md)
- [`docs/ai-recommendation-triage-protocol.md`](ai-recommendation-triage-protocol.md)
- [`docs/decision-log/README.md`](decision-log/README.md)
- [`templates/ai-recommendation-card.md`](../templates/ai-recommendation-card.md)
- [`templates/ai-decision-card.md`](../templates/ai-decision-card.md)

---

## Core Formula

> Doc Vault prepares. ChatGPT triages. Human confirms when needed. GitHub preserves.
