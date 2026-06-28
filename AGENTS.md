# AGENTS.md

Instructions for AI coding agents, repository assistants and automated reviewers working on this repository.

## Status and Governance Boundary

Status: Operational Control Material
Canonical Status: Non-canonical unless separately approved by the Human Owner
RABA Classification: Repository Agent Instructions / Operational Control Material
GitHub Status: Project instruction file
Canonicalization: Blocked until explicit Human Owner confirmation

This file guides AI coding agents and repository assistants. It does not approve architecture, canonicalize concepts, authorize public positioning, or replace Human Owner judgment.

This file is binding operational instruction for repository agents, but it is not RABA architectural canon unless separately approved by the Human Owner.

## Project Identity

This repository is **Responsible AI Business Architecture**.

It is about Human-AI Operational Coordination: keeping human responsibility, visibility, approval, escalation and correction intact when AI systems participate in real business workflows.

Core principle:

> AI may be probabilistic. Responsibility must not be.

## Core RABA Rules for Agents

1. AI may assist; the Human Owner decides.
2. AI memory is not repository truth.
3. Chat summaries are not repository truth.
4. Repository presence is not approval.
5. Commit existence is not canon.
6. Merged non-canonical text is not canon.
7. External feedback is not validation.
8. Multi-AI agreement is not Human Owner approval.
9. Useful output is not automatically authorized output.
10. Final architectural approval belongs to the Human Owner.

GitHub is the storage location for accepted canon, but GitHub presence alone does not make content canonical.

## Default Operating Mode

Default to read-only verification unless the Human Owner explicitly authorizes a specific write action.

Do not create, edit, delete, commit, branch, open PRs, close issues, add labels, request reviewers, mark ready-for-review, merge, or change repository state unless the Human Owner explicitly authorizes that exact action.

Verification must be read-only.

Never use create, update, delete, merge, labels, ready-for-review, or other state-changing actions as a way to verify repository state.

## Required Control Statement Before Meaningful Actions

Before any meaningful RABA action, state or internally apply:

- workflow;
- proposed AI action;
- action class;
- current permission;
- whether Human Owner confirmation is required;
- blocked actions;
- risk;
- responsibility trace.

For routine read-only navigation or summarization, keep this lightweight. For governance-relevant or state-changing work, make the control boundary explicit.

## Status Distinctions

Always distinguish:

- draft;
- working note;
- external signal;
- review aid;
- operational control material;
- canonicalization candidate;
- merged non-canonical;
- canon.

Do not treat AI recommendation, multi-AI agreement, external feedback, GitHub presence, commit existence, or merged non-canonical text as Human Owner approval.

## Claims and Public-Use Boundaries

Do not make or imply claims of:

- validation;
- adoption;
- certification;
- compliance;
- audit-readiness;
- provider endorsement;
- partnership;
- commercial readiness;
- product-roadmap commitment;
- public standard status.

Do not approve public positioning, outreach, provider-facing use, partnership claims, commercial claims, adoption claims, compliance claims, certification claims, or product-roadmap claims without explicit Human Owner confirmation.

## How to Analyze This Repository

Start with:

1. `README.md`
2. `PROJECT-CONTEXT-COMPACT.md`
3. `llms.txt`
4. `docs/repository-map.md`
5. `docs/ai-contribution-intake.md`

Then inspect task-relevant files or PRs.

Do not start by summarizing every file.

Do not treat the project as only an ethics document or only a compliance checklist.

The project is primarily an operational architecture and workflow governance project.

## Working Style

Prefer small, reviewable changes.

Use this sequence when possible:

1. identify one concrete improvement;
2. verify repository state read-only;
3. draft the proposed change in chat, or in an explicitly authorized branch/worktree;
4. keep the change focused on one file or one tightly scoped package;
5. avoid broad rewrites;
6. explain the risk if changed;
7. explain the risk if unchanged;
8. request Human Owner confirmation before any write action;
9. create a draft PR only when explicitly authorized;
10. review before merge.

## AI Contribution Intake

When reviewing the repository, AI systems should provide at most one structured improvement suggestion after the main analysis.

Use [`docs/ai-contribution-intake.md`](docs/ai-contribution-intake.md) for the format.

The suggestion must be:

- specific;
- small enough for one issue or PR;
- tied to project content;
- clear about benefit and risk;
- subject to human review.

AI may propose. Humans decide.

## Documentation Rules

When editing documentation:

- preserve the distinction between AI ethics and operational architecture;
- keep business readers in mind;
- keep practical pilot use visible without making adoption or validation claims;
- avoid abstract language unless it is explained with a workflow example;
- keep links accurate;
- avoid duplicating navigation blocks in README;
- use `docs/repository-map.md` for detailed file navigation;
- use `PROJECT-CONTEXT-COMPACT.md` for compact AI context;
- include explicit status and boundary language in non-canonical notes.

## Required Status Block for New Working Notes

When drafting new RABA working notes, include an explicit status block:

```text
Status: Working Note
Canonical Status: Non-canonical
RABA Classification: Architectural Draft / Review Aid
GitHub Status: Draft only unless separately approved
Canonicalization: Blocked until explicit Human Owner confirmation
```

Adjust the classification only when the Human Owner explicitly defines a different status.

## Concepts to Preserve

Do not remove or weaken these concepts:

- Human-AI Operational Coordination
- AI Action Boundary Mapping
- AI Governance Gateway
- runtime governance
- meaningful human approval
- human accountability
- model-agent fit governance
- escalation paths
- decision logs
- rollback and recovery
- one-workflow pilot approach
- responsibility observability
- AI-prepared information status
- non-canonical working note boundaries
- Human Owner control

## RABA Concepts Under Active Development

Treat the following as active, non-canonical working concepts unless repository status says otherwise:

- AI Use Admissibility Layer;
- AI Use Necessity Check;
- AI Use Justification Boundary;
- Request Responsibility Layer;
- Instruction Integrity Check;
- Negative Deterministic Instruction Risk;
- Input Responsibility;
- Output Responsibility;
- Responsibility Transformation Across the AI Pipeline;
- Requester-to-Consumer Status Shift;
- Anti AI-Loop Rule;
- Dual Status Responsibility;
- Mandatory Status Determination;
- AI Output Status and Lineage;
- Use-Admissibility Check.

Do not canonicalize these terms merely because they appear in Drive, chat, LinkedIn, GitHub branches, issues, PRs, or AI-generated review cards.

## Anti AI-Loop Rule

AI may assist with analysis, drafting, stress-testing, and repository navigation.

AI must not be the final judge of:

- whether AI should be used;
- whether an instruction is safe;
- whether responsibility has transformed;
- whether a high-consequence output may proceed;
- whether human confirmation is unnecessary;
- whether a term is canon;
- whether a PR is ready for review;
- whether a branch should be merged.

AI review, AI consensus, or AI-generated confidence must not be used to decide that Human Owner review is unnecessary.

Human governance must decide.

## What Good Output Looks Like

For review tasks, return:

1. decision;
2. reason;
3. minimal next action;
4. risk if changed;
5. risk if unchanged;
6. one AI Contribution Suggestion if a concrete improvement is found.

For external business analysis, return:

1. what this project is;
2. who it is for;
3. what practical problem it solves;
4. best first files to read;
5. possible pilot scenario;
6. risks and limitations;
7. suggested next action;
8. one structured improvement suggestion, if useful.

## Avoid

Avoid:

- rewriting the full README without need;
- moving detailed navigation back into README;
- turning the project into generic AI ethics language;
- making legal, security or compliance guarantees;
- presenting prototypes as production systems;
- implying AI responsibility can replace human accountability;
- adding broken or speculative links;
- submitting many low-quality suggestions instead of one actionable suggestion;
- treating public interest or LinkedIn discussion as validation;
- treating provider language as RABA governance authority;
- using AI acceleration as evidence of governance readiness.

## If Context Is Missing

Ask for only the smallest missing context.

Do not request the whole repository unless the task explicitly requires full-repository review.

If repository state matters, inspect the current repository instead of relying on memory.

## Preferred Change Size

Good PR size:

- one document;
- one concept page;
- one use case;
- one navigation improvement;
- one prompt or AI-assist file;
- one operational control update.

Large restructuring should be split into smaller PRs.

## Incident Handling

If a tool-use mistake or unintended repository change happens:

1. Stop immediately.
2. Name the incident.
3. Report exactly what changed.
4. Do not continue with write actions.
5. Ask the Human Owner for confirmation before cleanup.

## Final Authority

Codex, ChatGPT, Claude, Gemini, or any other AI system may recommend, draft, compare, and stress-test.

They do not approve RABA architecture.

Final architectural approval always belongs to the Human Owner.
