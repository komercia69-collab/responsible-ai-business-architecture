# RABA PR / Decision / Canon Boundary Review Prompt

**Status:** Non-canonical operational prompt  
**Purpose:** Review GitHub PRs, issues, Decision Logs, working notes, and canonicalization candidates while protecting RABA boundaries.  
**Canonical status:** Does not change RABA architecture canon.

Use this prompt when reviewing a GitHub PR, issue, branch, Decision Log, working note, external review input, or canonicalization candidate.

---

## Output format

## 1. Current Status

State clearly:

- PR / issue number;
- title;
- open / closed;
- draft / ready / merged;
- canonical status;
- whether it changes architecture;
- whether it changes public positioning;
- whether it creates commercial / partnership / pilot implications.

## 2. Files in Scope

List changed or relevant files.

## 3. What This Adds

Explain the contribution.

## 4. What This Does NOT Do

Explicitly state whether it does NOT:

- create canon;
- create `docs/core/v1`;
- adopt schema;
- adopt event family;
- create implementation guidance;
- create runtime enforcement;
- approve merge;
- approve public positioning;
- create validation claim;
- create partnership claim;
- create commercial commitment.

## 5. Risk Assessment

Check:

- premature canonicalization;
- authority drift;
- responsibility diffusion;
- accountability theater;
- HITL theater;
- validation drift;
- external-tool misrepresentation;
- public-facing overclaim;
- terminology contamination;
- Human Owner overload;
- AI-prepared cognitive tunnel.

## 6. Decision Context Map

Use a table:

| Question | Current answer |
|---|---|
| Is this ready for review? | |
| Is this ready for merge? | |
| Is this canon? | |
| Is Human Owner confirmation required? | |
| What is the safest next step? | |

## 7. Recommendation

Choose one:

- keep Draft;
- keep parked;
- add triage comment;
- request revision;
- split PR;
- prepare Decision Card;
- do not move;
- close only after Human Owner confirmation;
- ready-for-review only after explicit Human Owner confirmation.

## 8. Change Summary

```markdown
Files changed:
- none / list

GitHub changes:
- none / list

Canon changes:
- none / list

What was added:
- ...

What was strengthened:
- ...

Next best step:
- ...
```
