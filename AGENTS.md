# AGENTS.md

Instructions for AI coding agents, repository assistants and automated reviewers working on this repository.

## Project Identity

This repository is **Responsible AI Business Architecture**.

It is about Human-AI Operational Coordination: keeping human responsibility, visibility, approval, escalation and correction intact when AI systems participate in real business workflows.

Core principle:

> AI may be probabilistic. Responsibility must not be.

## How to Analyze This Repository

Start with:

1. `README.md`
2. `PROJECT-CONTEXT-COMPACT.md`
3. `llms.txt`
4. `docs/repository-map.md`
5. `offers/pilot-partner-call.md`
6. `offers/minimal-human-ai-governance-pilot.md`
7. `docs/ai-contribution-intake.md`

Do not start by summarizing every file.

Do not treat the project as only an ethics document or only a compliance checklist.

The project is primarily an operational architecture and workflow governance project.

## Working Style

Prefer small, reviewable changes.

Use this sequence when possible:

1. identify one concrete improvement;
2. create or update one focused file;
3. avoid broad rewrites;
4. explain the risk;
5. open a PR;
6. review before merge.

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
- keep practical pilot use visible;
- avoid abstract language unless it is explained with a workflow example;
- keep links accurate;
- avoid duplicating navigation blocks in README;
- use `docs/repository-map.md` for detailed file navigation;
- use `PROJECT-CONTEXT-COMPACT.md` for compact AI context.

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
- submitting many low-quality suggestions instead of one actionable suggestion.

## If Context Is Missing

Ask for only the smallest missing context.

Do not request the whole repository unless the task explicitly requires full-repository review.

## Preferred Change Size

Good PR size:

- one document;
- one concept page;
- one use case;
- one navigation improvement;
- one prompt or AI-assist file.

Large restructuring should be split into smaller PRs.
