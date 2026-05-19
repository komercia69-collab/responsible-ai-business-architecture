# AI Contribution Intake

> A structured mechanism for turning AI-assisted repository analysis into useful improvement suggestions.

## Purpose

Many people will not analyze this repository manually.

They may ask ChatGPT, Claude, Gemini, GitHub Copilot or another AI system to review the project.

This creates an opportunity:

> Every AI-assisted review can become a source of structured project improvement.

The AI Contribution Intake mechanism gives AI systems and human users a safe format for submitting recommendations, weak points, new ideas, missing links, use cases and prototype suggestions.

The goal is not to let AI change the project directly.

The goal is to capture useful AI-generated insight in a format that a human owner can review, accept, reject or convert into an issue or pull request.

For external reviewers and potential partners, see also [`external-ai-suggestion-intake.md`](external-ai-suggestion-intake.md), which explains why someone might want to submit a recommendation and what value they can get from doing so.

---

## Core Rule

AI systems may propose.

Humans decide.

AI-generated recommendations must not be treated as accepted changes until a human reviews them.

---

## What AI Systems Should Submit

A useful AI contribution should be specific, scoped and reviewable.

Good submissions include:

- unclear documentation;
- broken or weak navigation;
- missing project explanation;
- unclear pilot path;
- duplicated concepts;
- missing use case;
- weak governance boundary;
- missing failure pattern;
- missing decision gate;
- possible prototype improvement;
- better AI-readable instruction;
- stronger external positioning;
- suggested workflow example.

Avoid submitting:

- generic praise;
- broad rewrites without scope;
- vague strategy statements;
- unsupported claims;
- legal or compliance guarantees;
- speculative technical promises;
- changes that remove human responsibility.

---

## Recommended AI Review Flow

```text
1. Human asks AI to analyze the repository.
        ↓
2. AI reads the AI-assisted review files.
        ↓
3. AI returns normal analysis.
        ↓
4. AI also returns one structured improvement suggestion.
        ↓
5. Human reviews the suggestion.
        ↓
6. Human decides:
   - ignore;
   - save for later;
   - open issue;
   - create PR;
   - request another AI review.
```

---

## Required Submission Format

Use this format for each AI-generated recommendation:

```text
AI Contribution Suggestion

Title:

Source:
- AI system:
- Human user / reviewer:
- Date:
- Context:

Observation:

Why it matters:

Suggested improvement:

Affected files:

Expected benefit:

Risk if implemented:

Risk if ignored:

Suggested next action:
- Ignore
- Save for later
- Open issue
- Create PR
- Ask for second review

Confidence:
- Low
- Medium
- High
```

---

## Minimal Suggestion Format

For short AI reviews, use this compact version:

```text
Improvement suggestion:

Why it matters:

Affected file:

Minimal next action:

Risk:
```

---

## Prompt for AI Reviewers

```text
Analyze this repository using context-budget mode.

Do not summarize every file.

After your analysis, add one structured improvement suggestion using this format:

Title:
Observation:
Why it matters:
Suggested improvement:
Affected files:
Expected benefit:
Risk if implemented:
Risk if ignored:
Suggested next action:
Confidence:

The suggestion must be small enough to become one issue or one PR.
```

---

## How Humans Should Process Suggestions

A human maintainer should review AI-generated suggestions through these gates:

| Gate | Question |
|---|---|
| Relevance Gate | Does this belong to the project direction? |
| Responsibility Gate | Does it preserve human accountability? |
| Scope Gate | Is it small enough to act on? |
| Evidence Gate | Is the observation supported by repository content? |
| Risk Gate | Could the change create confusion or overclaiming? |
| Action Gate | Should it become an issue, PR or backlog note? |

---

## Intake States

A suggestion can move through these states:

```text
Captured → Reviewed → Accepted / Rejected / Deferred → Issue / PR → Merged / Closed
```

Suggested labels:

- `ai-suggestion`
- `needs-human-review`
- `documentation`
- `concept`
- `pilot`
- `prototype`
- `navigation`
- `governance-risk`

---

## Example Suggestion

```text
AI Contribution Suggestion

Title:
Make pilot partner path visible from README

Source:
- AI system: Claude
- Human user / reviewer: external reader
- Date: 2026-05-19
- Context: Repository onboarding review

Observation:
The project has strong pilot materials, but a first-time business reader may not immediately see how to start a pilot conversation.

Why it matters:
The project’s practical value depends on helping external readers move from interest to one workflow pilot.

Suggested improvement:
Add a short link from README Start Here to offers/pilot-partner-call.md.

Affected files:
README.md

offers/pilot-partner-call.md

Expected benefit:
Business readers can find the pilot entry point faster.

Risk if implemented:
README may become slightly more crowded.

Risk if ignored:
Pilot materials remain under-discovered.

Suggested next action:
Open issue or create small PR.

Confidence:
High
```

---

## Relationship to the Coordination Lattice

This intake process is one route in the Human-AI Operational Coordination Lattice.

```text
External AI Review
        ↓
Structured Suggestion
        ↓
Human Review Gate
        ↓
Issue / PR / Backlog / Rejection
        ↓
Decision Log
```

The AI contribution is a signal.

The human review gate decides whether it becomes action.

---

## Closing Principle

> AI-generated insight is useful only when it becomes structured, reviewable and accountable.

> AI may suggest. Humans decide.
