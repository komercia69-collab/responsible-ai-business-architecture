# Three-AI Project Coordination Room

> A prototype operating model for developing a project through coordinated human and multi-AI collaboration.

## Core Idea

This project is not only about Human-AI Operational Coordination.

It can also be developed through Human-AI Operational Coordination.

The Three-AI Project Coordination Room is a prototype workspace where one human owner and three AI systems collaborate on project development through clearly separated roles, shared context, review loops and human decision gates.

The goal is not to let multiple AI systems generate more text.

The goal is to create a governable collaboration environment where AI systems help structure, review and implement project work while human responsibility remains explicit.

---

## Why This Prototype Exists

Many people will not read an entire repository manually.

They will ask AI systems to analyze, summarize, criticize or improve it.

At the same time, project development itself can benefit from multiple AI systems if their roles are separated.

Without structure, multi-AI collaboration can become noisy:

- too much text;
- duplicated analysis;
- conflicting suggestions;
- unclear authority;
- no decision owner;
- no implementation path;
- no memory discipline.

This prototype addresses that by turning multi-AI work into an operational coordination pattern.

---

## Participants

## Human Owner

The human owner is responsible for:

- defining the project mission;
- approving scope;
- deciding which suggestions matter;
- accepting or rejecting changes;
- approving issues, pull requests and merges;
- preserving the project identity;
- holding final responsibility.

The human owner is not only a user of AI.

The human owner is the accountable coordinator of the whole room.

---

## AI Role 1: Architect AI

Purpose:

> Create structure, direction and system-level coherence.

Architect AI asks:

- What are we building?
- What is the system structure?
- Which concepts belong together?
- What is the next meaningful layer?
- What should become a document, prototype, issue or workflow?

Typical outputs:

- proposed structure;
- concept map;
- architecture outline;
- next-step options;
- system-level synthesis.

Architect AI should not directly rewrite the whole project.

It should propose structure for human approval.

---

## AI Role 2: Reviewer AI

Purpose:

> Protect clarity, coherence, external readability and governance discipline.

Reviewer AI asks:

- What is unclear?
- What would an external reader misunderstand?
- What is too abstract?
- What is duplicated?
- What overclaims legal, compliance or security certainty?
- What weakens human accountability?
- What should be simplified before implementation?

Typical outputs:

- clarity review;
- risk review;
- inconsistency detection;
- missing assumptions;
- minimal correction proposal.

Reviewer AI should not become the primary author.

It should improve the quality of proposed work before implementation.

---

## AI Role 3: Operator AI

Purpose:

> Convert approved direction into concrete project actions.

Operator AI asks:

- Which file should be created or edited?
- What is the smallest safe patch?
- What issue or PR is needed?
- What is the commit message?
- What needs to be checked before merge?

Typical outputs:

- issue draft;
- file draft;
- pull request description;
- merge checklist;
- repository navigation update;
- implementation notes.

Operator AI should not decide project direction alone.

It implements human-approved direction through small, reviewable changes.

---

## Shared Context Layer

All AI roles should work from the same compact context.

Recommended context files:

- [`../../PROJECT-CONTEXT-COMPACT.md`](../../PROJECT-CONTEXT-COMPACT.md)
- [`../../llms.txt`](../../llms.txt)
- [`../../AGENTS.md`](../../AGENTS.md)
- [`../repository-map.md`](../repository-map.md)
- [`../ai-review-prompts.md`](../ai-review-prompts.md)

The shared context should include:

```text
Project:
Responsible AI Business Architecture

Core principle:
AI may be probabilistic. Responsibility must not be.

Current mission:
Develop practical architecture, pilots and examples for Human-AI Operational Coordination.

Current working rule:
Small safe steps: issue → branch → PR → review → merge.

Do not:
- rewrite the whole repository at once;
- turn the project into generic AI ethics;
- remove human accountability;
- overclaim compliance, certification or production readiness.
```

---

## Room Layout

A practical interface could contain five zones.

## 1. Mission Zone

```text
Project mission:

Current focus:

Expected output:

Human owner:
```

The mission zone prevents all AI systems from drifting into unrelated analysis.

---

## 2. Shared Context Zone

```text
Core principle:

Current repository state:

Relevant files:

Known constraints:

Do-not-change rules:
```

The shared context zone reduces token waste and prevents repeated project summaries.

---

## 3. Active Task Board

```text
Current task:

Task status:

Required output:

Current decision needed:
```

Only one active task should be processed at a time.

---

## 4. Three AI Work Panels

```text
Architect AI:
- structure
- concept
- next options

Reviewer AI:
- clarity risks
- governance risks
- missing assumptions

Operator AI:
- file action
- PR plan
- implementation checklist
```

Each AI system should have a distinct function.

The room should avoid three AI systems producing the same kind of answer.

---

## 5. Human Decision Gate

```text
Human decision:

[ ] Accept direction
[ ] Narrow scope
[ ] Request another review
[ ] Create issue
[ ] Create PR
[ ] Merge
[ ] Stop
```

The decision gate preserves accountability.

AI systems may propose, review and prepare.

The human owner decides.

---

## Operating Cycle

```text
1. Human defines task
        ↓
2. Architect AI proposes structure
        ↓
3. Reviewer AI checks clarity, risk and governance consistency
        ↓
4. Architect AI adjusts if needed
        ↓
5. Operator AI creates minimal implementation plan
        ↓
6. Human approves or rejects
        ↓
7. Operator AI prepares issue, branch, PR or file
        ↓
8. Reviewer AI checks final result
        ↓
9. Human merges, revises or stops
```

This cycle turns multi-AI collaboration into a governable workflow.

---

## Context-Budget Rules

AI systems should not consume context by repeating the whole project.

Use this instruction at the start of a session:

```text
Use context-budget mode.
Do not reconstruct the whole project.
Use only the shared context and the current task.
Return only what is needed for the next decision.
```

Recommended output format:

```text
Decision:

Reason:

Minimal next action:

Risk if we do it:

Risk if we do not do it:
```

---

## Governance Rules for the Room

The coordination room should preserve these rules:

- human responsibility is never transferred to AI;
- AI roles must be separated;
- decisions must pass through a human gate;
- implementation should happen through small reviewable changes;
- AI-generated work should be checked before merge;
- assumptions should be made visible;
- legal, security and compliance claims must not be overstated;
- project identity must be preserved;
- the room should reduce noise, not increase it.

---

## Example: Applying the Room to a README Improvement

```text
Task:
Improve README onboarding for external readers.

Architect AI:
Move role-based Start Here higher and create a clearer first-screen explanation.

Reviewer AI:
Warns that AI Collaboration Protocol is under-visible and README has duplicate navigation.

Operator AI:
Creates issue, branch and PR with a minimal README patch.

Human Owner:
Reviews diff, approves, merges.

Result:
README becomes clearer without rewriting the whole project.
```

---

## Example: Applying the Room to a Pilot Partner Offer

```text
Task:
Make the project easier for a potential pilot partner to understand.

Architect AI:
Suggests a pilot partner call document focused on one workflow.

Reviewer AI:
Checks whether the document explains what the partner gives and receives.

Operator AI:
Updates offers/pilot-partner-call.md and opens a PR.

Human Owner:
Approves the practical framing and merges.

Result:
The repository gains a clearer external adoption path.
```

---

## Relationship to This Repository

This prototype connects to existing project files:

- `PROJECT-CONTEXT-COMPACT.md` gives the shared context layer;
- `llms.txt` provides an AI-readable reading path;
- `AGENTS.md` guides AI agents working in the repository;
- `docs/ai-review-prompts.md` provides prompts for structured AI review;
- `docs/discovery-keywords.md` supports discovery and classification;
- `docs/ai-collaboration-protocol.md` explains responsible AI collaboration principles.

Together, these files form an early AI-readable operating layer for the project.

---

## What This Prototype Is Not

This prototype is not:

- a finished software product;
- a replacement for human project ownership;
- a guarantee of correct AI output;
- a fully automated development process;
- a claim that AI systems can self-govern responsibly.

It is a coordination model for keeping multi-AI project work structured, reviewable and accountable.

---

## Possible Future Interface

A future interface could include:

- shared project memory;
- role-specific AI panels;
- active task board;
- file and PR state;
- review history;
- risk flags;
- human decision gate;
- export to issue / PR / document;
- audit log of decisions.

This could later evolve into a prototype of a real Human-AI Coordination Room.

---

## Closing Principle

> Multiple AI systems can increase capability.
>
> Without coordination, they can also increase noise.
>
> The task is not to multiply AI voices.
>
> The task is to preserve human responsibility while using AI roles for structure, review and action.

> AI may be probabilistic. Responsibility must not be.
