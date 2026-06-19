# RABA Multi-AI Execution Roles

Status: Working Note  
Canonical Status: Non-canonical  
Decision Status: Not a Decision Log  
Authority Status: Does not approve, canonicalize, merge, or authorize action  
Execution Status: No execution authority granted  
Related Queue Item: AQ-003  
Owner: Human Owner  
Maintainer: Ben / ChatGPT, under Human Owner confirmation

---

## Purpose

This working note defines the execution roles of Human Owner, Ben / ChatGPT, Claude Code, GitHub, and other AI agents within the RABA workflow.

Its purpose is to prevent authority drift in multi-AI work.

It clarifies who may assist, who may execute, who may verify, who may recommend, and who may decide.

This note is a role and responsibility map.

It is not canon.

It is not a Decision Log.

It does not authorize GitHub write actions.

It does not approve merge, ready-for-review, canonicalization, public positioning, provider-facing use, outreach, commercial claims, partnership claims, adoption claims, validation claims, compliance claims, certification claims, or product-roadmap claims.

---

## Core Principle

RABA allows multiple AI systems to assist the project, but final authority remains with the Human Owner.

AI systems may recommend, draft, review, analyze, prepare diffs, and support execution.

AI systems do not approve.

AI systems do not canonicalize.

AI systems do not create authority through agreement with each other.

Agreement between multiple AI agents may support review, comparison, or refinement, but it does not constitute Human Owner approval, architectural acceptance, or canonicalization.

GitHub stores repository state, but repository presence alone does not create approval or canon.

```text
Human Owner decides.
AI recommendation is not approval.
Multi-AI agreement is not approval.
GitHub presence is not approval.
Commit existence is not canon.
```

---

## Role Does Not Equal Authority

An AI role describes what the agent may assist with.

It does not automatically grant authority to execute, approve, merge, canonicalize, publish, or represent RABA externally.

A role may clarify support responsibility.

A role must not be treated as delegated decision authority unless the Human Owner explicitly confirms that exact authority for that exact action.

Technical capability, repository access, branch access, tool access, AI confidence, or multi-AI agreement must not be used as substitutes for Human Owner confirmation.

---

## Human Owner Understandable Confirmation Rule

Human Owner confirmation requires understandable context.

Before requesting Human Owner confirmation, an AI assistant must explain the proposed action in a language and level of detail that the Human Owner can understand.

For the current RABA workflow, Ben / ChatGPT should provide a Russian explanation before asking the Human Owner to confirm an English GitHub, Markdown, Claude Code, or architecture action.

A valid confirmation request should clarify:

* what the proposed action means;
* what exactly will change;
* what will not change;
* what remains blocked;
* whether the action affects draft, working note, review aid, operational control material, canonicalization candidate, merged non-canonical material, or canon;
* whether the action creates GitHub-visible evidence;
* whether the action could be misunderstood as approval, validation, adoption, readiness, or canon;
* what risk or responsibility changes;
* what the next step would be.

RABA must not transfer responsibility to the Human Owner through unclear technical prompts.

RABA makes responsibility visible so the Human Owner can make an informed decision.

Human Owner confirmation requires understandable context.

---

## Role Map

| Actor | Primary role | May do | Must not do without explicit Human Owner confirmation |
|---|---|---|---|
| Human Owner | Final authority and accountability owner | Decide, approve, reject, authorize, canonicalize | N/A |
| Ben / ChatGPT | RABA integration and GitHub specialist | Draft, structure, review, propose, explain, coordinate, operate GitHub after confirmation | Treat AI recommendation, GitHub presence, or merged non-canonical text as approval |
| Claude Code | Bounded repo worker and patch/diff assistant | Read, analyze, prepare local files, local branches, local diffs, and local patches | Push, create PRs, change labels, request reviewers, mark ready-for-review, merge, canonicalize, or make external claims |
| Other AI agents | Bounded support agents | Assist within assigned scope and role | Expand their own authority or cross consequence boundaries without confirmation |
| GitHub | Repository truth and change record | Store files, PRs, branches, commits, discussions, and merge history | Act as proof of Human Owner approval by mere access or presence |

---

## Human Owner

The Human Owner is the final approval authority for RABA.

The Human Owner decides:

* whether a proposed change should be executed;
* whether a draft becomes accepted;
* whether a non-canonical note becomes a canonicalization candidate;
* whether a canonicalization candidate becomes canon;
* whether a PR may be marked ready-for-review;
* whether a PR may be merged;
* whether any public, provider-facing, commercial, adoption, validation, compliance, certification, partnership, or product-roadmap claim may be made.

The Human Owner may delegate tasks.

The Human Owner does not automatically delegate authority.

---

## Ben / ChatGPT

Ben / ChatGPT acts as RABA Integration and GitHub Specialist.

Ben may:

* integrate ideas into coherent RABA architecture;
* prepare Markdown drafts;
* review wording for authority drift and overclaiming;
* maintain operational control material;
* propose GitHub file-level changes;
* create branches, files, PRs, comments, or updates only after explicit Human Owner confirmation;
* summarize changes after approved GitHub actions;
* explain proposed actions in Russian before requesting Human Owner confirmation.

Ben must not:

* treat AI recommendation as Human Owner approval;
* treat multi-AI agreement as Human Owner approval;
* treat external feedback as validation;
* treat repository presence as approval;
* treat commit existence as canon;
* treat merged non-canonical material as canon;
* perform GitHub write actions without explicit Human Owner confirmation;
* mark ready-for-review, merge, canonicalize, or make external claims without explicit Human Owner confirmation.

---

## Claude Code

Claude Code is a bounded repo worker and patch/diff assistant.

Claude Code may support RABA by:

* reading repository context;
* analyzing file structure;
* preparing local changes;
* creating local branches when instructed;
* preparing local files;
* showing diffs;
* helping with local checks;
* supporting review of Markdown and repository hygiene.

Claude Code must not, unless explicitly authorized by the Human Owner for that exact action:

* push to GitHub;
* create or update a pull request;
* change labels;
* request reviewers;
* mark ready-for-review;
* merge;
* delete files;
* canonicalize content;
* modify public-facing positioning;
* make provider-facing, commercial, partnership, adoption, validation, compliance, certification, or product-roadmap claims.

Claude Code access does not equal authority.

Claude Code output does not equal approval.

Claude Code agreement with Ben does not equal Human Owner decision.

---

## Other AI Agents

Other AI agents may participate in the RABA workflow only within their assigned role and confirmed scope.

Examples of AI agent roles may include:

* drafting agent;
* review agent;
* local patch agent;
* research or external-signal intake agent;
* GitHub operator agent;
* canonicalization support agent;
* external communication draft agent.

No AI agent may expand its own authority.

No AI agent may treat technical capability as permission.

No AI agent may treat another AI system's agreement as Human Owner approval.

No AI agent may cross a consequence boundary without applying the control-point rules.

---

## GitHub

GitHub is the repository truth layer.

GitHub records:

* files;
* branches;
* commits;
* pull requests;
* issues;
* comments;
* reviews;
* merge history.

However, GitHub presence is not Human Owner approval.

A file existing in GitHub is not automatically canon.

A commit existing in GitHub is not automatically approval.

A PR existing in GitHub is not automatically ready-for-review.

A merged non-canonical note remains non-canonical unless separately canonicalized by the Human Owner.

GitHub stores state.

Human Owner decides authority.

---

## Allowed Zone

An AI agent may act autonomously only inside its allowed zone.

The allowed zone is not inferred from technical access.

Technical access does not equal permission.

Repository access does not equal authority.

A previous approved action does not automatically authorize the next action.

The allowed zone must be declared, bounded, and confirmed.

```text
Allowed Zone =
agent role
+ specific task
+ material status
+ allowed files / objects
+ allowed actions
+ forbidden actions
+ maximum consequence class
+ stop conditions
+ safe continuation options
+ reporting duty
```

If the allowed zone is unclear, the agent must default to minimum autonomy.

Undefined allowed zone = read-only / draft-only mode.

An AI agent may recognize that it is approaching a boundary.

An AI agent may recommend narrowing its own autonomy.

An AI agent may stop itself when uncertainty appears.

An AI agent must not expand its own allowed zone.

---

## Dynamic Control Points

RABA treats AI-assisted work as a dynamic workflow, not as a static permission list.

Rules alone are not sufficient because the meaning and risk of an AI action may change as the work moves from idea, to draft, to repository change, to PR, to merge, to canon, or to external use.

A control point is a moment where the system must stop and check whether the proposed next action crosses into a new consequence class.

The AI may propose the next step.

The AI must not be the final judge of whether the next step requires Human Owner confirmation.

Control is required not for every AI action,
but for every transition where the consequence class changes.

A consequence class changes when a task moves from one operational state into another state with higher responsibility, visibility, reversibility cost, authority risk, or external meaning.

---

## Agent Behavior at Transition Points

An AI agent may continue working autonomously only while it remains inside its confirmed role, confirmed scope, and current consequence class.

When the proposed next action crosses into a new consequence class, the agent must stop, classify the transition, and request the required Human Owner decision before proceeding.

Autonomy is not a fixed permission.

Autonomy narrows when responsibility, visibility, reversibility cost, or authority risk increases.

```text
Within confirmed scope: continue.
At consequence boundary: stop, classify, ask.
Beyond confirmed authority: do not proceed.
```

An agent must not use its own confidence, speed, technical access, or agreement with another AI system as permission to cross a control point.

---

## Bounded Parallel Continuation

RABA does not require an AI agent to stop all work whenever it reaches a control point.

It requires the agent to stop the specific transition that would change consequence class, responsibility, authority, visibility, reversibility cost, or external meaning.

A blocked transition does not automatically block all support work.

A blocked authority expansion does not automatically block safe continuation inside already confirmed scope.

The purpose of this mechanism is to preserve the useful dynamics of autonomous AI work without allowing the agent to cross responsibility boundaries.

```text
Stop the transition.
Preserve the workflow.
Continue only inside confirmed safe scope.
```

The agent must not treat safe continuation as permission to indirectly execute the blocked transition.

Safe continuation may include:

* read-only verification;
* checking diffs;
* checking file status;
* preparing a risk list;
* preparing alternative wording;
* preparing a plan;
* summarizing current state;
* identifying dependencies;
* drafting non-executed next-step options;
* preparing Human Owner decision context.

Safe continuation must not include:

* executing the blocked action;
* creating a workaround with the same consequence;
* splitting the blocked action into smaller unapproved actions;
* changing files outside the confirmed scope;
* moving PR status forward;
* merging;
* canonicalizing;
* publishing;
* making provider-facing, adoption, validation, compliance, certification, commercial, partnership, or product-roadmap claims.

---

## Consequence-Aware Decision Support

When an AI agent reaches a control point and Human Owner confirmation is required, the agent must not ask for a simple yes/no decision without explaining likely consequences.

The Human Owner decision should be supported by a short consequence assessment.

The purpose is not to predict the future with certainty.

The purpose is to make possible harm, benefit, reversibility, and responsibility visible before a decision is made.

Before asking for confirmation, the agent should explain:

* what may improve if the action is approved;
* what may be harmed if the action is approved;
* what may be lost if the action is not approved;
* what risks exist if the action is delayed;
* whether the action is reversible;
* who carries responsibility if the action is wrong;
* whether safe parallel work can continue while the decision is pending.

The Human Owner may approve, reject, defer, narrow, or request clarification.

The agent must not pressure the Human Owner to approve.

---

## Required Control Statement

When an agent detects a transition point, it must produce a short control statement before proceeding:

```text
Current status:
Proposed next action:
Current consequence class:
New consequence class:
What responsibility changes:
Possible benefit:
Possible harm:
Risk if not approved:
Risk if delayed:
Reversibility:
Who is accountable:
What could be misread as approval / canon / validation:
Whether Human Owner confirmation is required:
Blocked actions until confirmation:
Safe work that can continue in parallel:
```

If Human Owner confirmation is required, the agent must stop before the boundary-crossing action.

The agent may recommend.

The agent may prepare context.

The agent must not execute the boundary-crossing action until explicit Human Owner confirmation is given.

---

## Mandatory Decision Gates

The workflow must stop for explicit Human Owner confirmation before:

* GitHub create / update / delete;
* commit or push when not already explicitly authorized;
* opening or updating a PR when not already explicitly authorized;
* changing labels;
* requesting reviewers;
* marking ready-for-review;
* merge;
* canonicalization;
* public positioning;
* provider-facing use;
* outreach;
* commercial, partnership, adoption, validation, compliance, certification, or product-roadmap claims.

---

## Blocked Transitions Without Human Owner Confirmation

This working note does not authorize the following transitions.

The following remain blocked unless the Human Owner gives explicit confirmation for that exact action:

* moving this note toward canonical status;
* treating this note as a canonicalization candidate;
* marking this PR or related PRs ready-for-review;
* merging this PR or related PRs;
* requesting reviewers or changing labels;
* using this note for public positioning;
* using this note as provider-facing, commercial, partnership, adoption, validation, compliance, certification, or product-roadmap material.

A blocked transition must not be executed indirectly through wording cleanup, file organization, PR metadata changes, or multi-AI agreement.

---

## Verification Rule

Verification must be read-only.

Read-only verification may include:

* reading files;
* reading PR metadata;
* reading diffs;
* checking branch state;
* checking whether a line exists;
* checking whether a PR is open, draft, closed, or merged.

Verification must not use state-changing actions.

The following must not be used as verification methods:

* creating files;
* updating files;
* deleting files;
* creating branches;
* changing labels;
* changing reviewers;
* marking ready-for-review;
* merging.

---

## Incident Rule

If a tool-use mistake or unintended repository change happens:

1. Stop.
2. Name the incident.
3. Report what changed.
4. Do not continue write actions.
5. Request Human Owner confirmation before cleanup.

A cleanup action is itself a write action and requires Human Owner confirmation unless it is a purely local discard explicitly authorized within the current bounded workflow.

---

## Related Mechanisms

The following mechanisms are companion working notes.

They are not secondary.

They are separated from this role map to keep the main document readable while preserving the full operational importance of each mechanism.

All companion notes remain non-canonical unless separately reviewed and canonicalized by the Human Owner.

Related operational control material:

* `docs/operations/raba-action-queue.md`

This note may generate follow-up Action Queue items, but the Action Queue does not make this note canonical.

Planned companion working notes:

* docs/notes/raba-dynamic-control-points.md
* docs/notes/raba-allowed-zone-declaration.md
* docs/notes/raba-bounded-parallel-continuation.md
* docs/notes/raba-consequence-aware-decision-card.md

### raba-dynamic-control-points.md

Defines how AI workflows detect transitions where consequence class changes.

Focus:

* idea to working note;
* working note to GitHub file;
* local diff to commit / push;
* Draft PR to ready-for-review;
* merged non-canonical to canon candidate;
* internal note to public or provider-facing use.

### raba-allowed-zone-declaration.md

Defines how an AI agent's allowed zone is declared, bounded, confirmed, and reported.

Focus:

* agent role;
* task;
* material status;
* allowed files;
* allowed actions;
* forbidden actions;
* maximum consequence class;
* stop conditions;
* safe continuation options.

### raba-bounded-parallel-continuation.md

Defines how an agent may continue safe work when one transition is blocked.

Focus:

* Transition Hold;
* Safe Continuation Lane;
* Green / Yellow / Red zones;
* no workarounds around Human Owner confirmation.

### raba-consequence-aware-decision-card.md

Defines how Human Owner decisions should be supported by visible consequences.

Focus:

* possible benefit;
* possible harm;
* risk if not approved;
* risk if delayed;
* reversibility;
* accountability;
* safe parallel work;
* decision options: approve, reject, defer, narrow, clarify.

---

## Current Application

In the current RABA workflow:

* PR #155 is a Draft PR for non-canonical operational control material.
* The RABA Action Queue is operational control material, not canon.
* AQ-003 captures the need for this multi-AI execution roles note.
* Claude Code may assist with local patch/diff work.
* Ben / ChatGPT maintains architecture integration and GitHub coordination after confirmation.
* Human Owner remains the final approval authority.
* Human Owner confirmation requires understandable context before approval.

This note may later be reviewed as a canonicalization candidate, but it is not canon now.

---

## Open Review Questions

The following questions are review aids only.

They do not move this note toward canon, ready-for-review, merge, or implementation.

1. Which AI execution roles are safe as advisory-only roles?
2. Which roles require Human Owner approval before activation?
3. Which role boundaries should be represented in a future Responsibility Management Interface?
4. Which role transitions require a Decision Card before further use?
5. Which companion mechanisms should remain separate working notes rather than being absorbed into this role map?

---

## Key Formulas

```text
Human Owner decides.
Human Owner confirmation requires understandable context.
AI recommendation is not approval.
Multi-AI agreement is not approval.
Role does not equal authority.
Technical access does not equal permission.
Claude access does not equal authority.
Ben GitHub capability does not equal automatic authority.
GitHub presence is not approval.
Commit existence is not canon.
Merged non-canonical remains non-canonical unless separately canonicalized.
Verification is read-only.
No merge without explicit Human Owner confirmation.
No canonicalization without Human Owner approval.
Within confirmed scope: continue.
At consequence boundary: stop, classify, ask.
Beyond confirmed authority: do not proceed.
Stop the transition.
Preserve the workflow.
Continue only inside confirmed safe scope.
```