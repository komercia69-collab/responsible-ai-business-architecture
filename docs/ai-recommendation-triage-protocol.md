# AI Recommendation Triage Protocol

This protocol defines how recommendations from Claude, Gemini, Comet, ChatGPT, human reviewers, or external sources are processed before they affect the RABA Canon.

---

## Purpose

The purpose is to prevent raw AI output from becoming ungoverned project direction.

Every meaningful recommendation should move through:

```text
Recommendation
  ↓
Triage
  ↓
Governance Fit Check
  ↓
Decision
  ↓
Canon Update
  ↓
Verification
  ↓
Decision Log
```

---

## Step 1: Recommendation

A recommendation should be captured as a short card.

Minimum fields:

- source;
- topic;
- suggestion;
- why it matters;
- risks;
- suggested target files.

Use:

- [`templates/ai-recommendation-card.md`](../templates/ai-recommendation-card.md)

---

## Step 2: Triage

The Integrator classifies the recommendation as one of:

| Decision | Meaning |
|---|---|
| `accept` | merge into Canon |
| `partial` | keep the useful part but change scope or wording |
| `defer` | useful but not now |
| `reject` | does not fit the current project direction |

---

## Step 3: Governance Fit Check

Before merging, the recommendation must be checked against current RABA architecture.

Checklist:

- Does it clarify the Action Boundary?
- Does it preserve the approval state model?
- Does it improve the Governance Gateway?
- Does it strengthen Decision Log, Responsibility Event Stream, or auditability?
- Does it preserve `AUTHORIZED` vs `EXECUTED`?
- Does it preserve Approval State vs Governance Condition?
- Does it improve implementation, pilot value, or contributor clarity?
- Does it avoid unnecessary conceptual expansion?

---

## Step 4: Decision Card

For meaningful recommendations, create a decision card.

Use:

- [`templates/ai-decision-card.md`](../templates/ai-decision-card.md)

The decision card explains:

- what was decided;
- why;
- what changes in Canon;
- what repository files are affected;
- whether follow-up review is needed.

---

## Step 5: Canon Update

Only the cleaned and accepted version should enter Canon.

Do not paste raw Claude, Gemini, or Comet output directly into the repository unless it has been reviewed and integrated.

Canon targets may include:

- README;
- docs;
- schemas;
- examples;
- RFCs;
- starter kit;
- roadmap;
- templates.

---

## Step 6: Verification

After the update, check:

1. Does the new text duplicate existing content?
2. Does it contradict current RABA documents?
3. Does it make the project clearer?
4. Does it add implementation value?
5. Does it preserve current consolidation boundaries?
6. Are links and paths correct?
7. Should the repository map be updated?

---

## Step 7: Decision Log

Every meaningful decision should be recorded.

Use:

- [`docs/decision-log/README.md`](decision-log/README.md)

Minimum log fields:

- source;
- decision;
- canon impact;
- repo impact;
- reasoning;
- status.

---

## Integrator Prompt

Use this instruction when processing raw expert input:

```text
You are the Integrator and Guardian for the RABA project.

Your task:
1. Accept raw recommendations from Claude, Gemini, Comet, ChatGPT, or human reviewers.
2. Triage each recommendation as accept, partial, defer, or reject.
3. Run a Governance Fit Check against current RABA concepts.
4. Update the Canon only with cleaned and integrated content.
5. Create or update the Decision Log for meaningful changes.
6. Preserve compactness and avoid unnecessary conceptual expansion.
7. Ensure every change remains aligned with Action Boundary, Approval States, Governance Gateway, Decision Log, Responsibility Event Stream, Responsibility Observability, and the distinction between AUTHORIZED and EXECUTED.
```

---

## Core Principle

> AI can generate recommendations. The project must govern what becomes Canon.
