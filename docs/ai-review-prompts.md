# AI Review Prompts

Use these prompts when asking ChatGPT, Claude, Gemini, GitHub Copilot or another AI assistant to analyze this repository.

The goal is to help AI systems produce useful, practical analysis without wasting context on a full repository summary.

For structured improvement capture, see [`ai-contribution-intake.md`](ai-contribution-intake.md).

---

## Prompt 1: Fast Project Analysis

```text
Analyze this repository as a potential external reader.

Repository:
Responsible AI Business Architecture

Start with:
- README.md
- PROJECT-CONTEXT-COMPACT.md
- llms.txt
- docs/repository-map.md

Return:
1. What this project is
2. Who it is for
3. What practical problem it solves
4. What is already usable
5. What is still experimental
6. Best first file to read
7. Suggested next action

After the analysis, add one structured AI Contribution Suggestion:
- Title
- Observation
- Why it matters
- Suggested improvement
- Affected files
- Expected benefit
- Risk if implemented
- Risk if ignored
- Suggested next action
- Confidence

Do not summarize every file.
Keep the answer practical and decision-oriented.
```

---

## Prompt 2: Pilot Partner Analysis

```text
Analyze this repository as a potential pilot partner.

Focus on whether the project can help an organization review one real AI-assisted workflow before increasing automation.

Start with:
- offers/pilot-partner-call.md
- offers/minimal-human-ai-governance-pilot.md
- use-cases/customer-support-agentic-bi-governance.md
- examples/governance-gateway-demo/README.md

Return:
1. What kind of organization could use this
2. What workflow would be a good first pilot
3. What the partner would receive
4. What input the partner must provide
5. Main risks or limitations
6. Recommended next step

After the analysis, add one structured AI Contribution Suggestion that could improve the pilot partner path.

Do not treat this as a generic AI ethics project.
Focus on Human-AI Operational Coordination.
```

---

## Prompt 3: Business Value Review

```text
Review this repository from the perspective of a business owner or executive.

Question:
Does this project provide a clear practical path from AI interest to a controlled pilot?

Read first:
- README.md
- docs/this-project-in-3-minutes.md
- offers/pilot-partner-call.md
- offers/minimal-human-ai-governance-pilot.md

Return:
1. Value proposition
2. Business reader clarity
3. Strongest practical entry point
4. Weakest unclear point
5. Suggested improvement
6. One-sentence summary for a decision-maker

After the review, add one AI Contribution Suggestion that is small enough to become one issue or PR.

Keep the answer concise.
```

---

## Prompt 4: Governance Consistency Review

```text
Review the project for governance consistency.

Focus on whether the documents preserve these ideas:
- human responsibility remains non-transferable;
- AI action boundaries must be mapped;
- AI output should not become operational action without governance;
- human approval must be meaningful;
- escalation, logging and recovery matter;
- autonomy should not scale faster than governability.

Return:
1. Consistent concepts
2. Inconsistent or weak areas
3. Missing governance controls
4. Suggested minimal improvement
5. Risk if unchanged

After the review, add one structured AI Contribution Suggestion related to governance consistency.

Do not rewrite the whole project.
```

---

## Prompt 5: Repository Navigation Review

```text
Review whether this repository is easy for an AI assistant to understand.

Start with:
- README.md
- llms.txt
- AGENTS.md
- PROJECT-CONTEXT-COMPACT.md
- docs/repository-map.md

Return:
1. Can an AI identify the project purpose quickly?
2. Can an AI find the main practical entry points?
3. Are important files easy to discover?
4. Are there conflicting instructions?
5. What one file should be improved next?
6. Suggested minimal patch

After the review, add one structured AI Contribution Suggestion related to AI readability or discovery.

Use context-budget mode.
```

---

## Prompt 6: Use Case Fit Review

```text
Analyze whether this project fits the following workflow:

Workflow:
[describe one workflow]

Current or planned AI use:
[describe AI use]

Main concern:
[describe risk or uncertainty]

Use the repository to answer:
1. Is this a good pilot candidate?
2. What AI action boundary should be mapped first?
3. What requires human approval?
4. What should be logged?
5. What can go wrong?
6. What is the smallest useful next step?

After the review, add one AI Contribution Suggestion if the workflow reveals a missing use case, failure pattern or governance control.

Read first:
- offers/minimal-human-ai-governance-pilot.md
- docs/concepts/ai-action-boundary-mapping.md
- docs/concepts/ai-governance-gateway.md
- use-cases/customer-support-agentic-bi-governance.md
```

---

## Prompt 7: Minimal PR Suggestion

```text
You are reviewing this repository for the next useful improvement.

Use context-budget mode.
Do not propose a large rewrite.

Return only:
1. Best next documentation improvement
2. File to change
3. Why it matters
4. Minimal patch idea
5. Risk

Then format that recommendation as an AI Contribution Suggestion.

Prefer improvements that help external readers, pilot partners or AI assistants understand the project faster.
```
