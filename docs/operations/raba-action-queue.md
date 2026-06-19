# RABA Action Queue

Status: Operational Control Material  
Canonical Status: Non-canonical  
Decision Status: Not a Decision Log  
Authority Status: Does not approve, canonicalize, merge, or authorize action  
Owner: Human Owner  
Maintainer: Ben / ChatGPT, under Human Owner confirmation

---

## Purpose

The RABA Action Queue preserves important but non-urgent work items so they are not lost behind immediate priorities.

It is not a canon document.

It is not a Decision Log.

It is not approval to act.

It is not a merge plan.

It is not a roadmap claim.

It is an operational control resource for tracking, triaging, and sequencing RABA work.

---

## Core Rule

Captured work is not approved work.

Queued work is not canon.

Priority is not authorization.

GitHub presence is not Human Owner approval.

AI recommendation is not Human Owner approval.

A task may be visible in this queue and still remain blocked until explicit Human Owner confirmation is given.

---

## Priority Levels

| Priority | Meaning | Use when |
|---|---|---|
| P0 | Critical / Blocker | Work cannot safely continue without resolving this |
| P1 | High / Next | Should be considered in the next active work session |
| P2 | Medium / Planned | Important, but not urgent |
| P3 | Low / Later | Useful, but not currently shaping the next step |
| P4 | Parking Lot | Preserve the idea, but do not plan active work yet |

---

## Status Values

| Status | Meaning |
|---|---|
| Captured | Item recorded, not yet triaged |
| Needs triage | Requires priority, owner, or next-step clarification |
| Planned | Accepted for future work, but not active |
| Blocked | Cannot proceed until dependency or Human Owner decision |
| In progress | Active work is underway |
| Done | Completed and verified |
| Deferred | Intentionally postponed |
| Rejected | Not suitable for current RABA direction |

---

## Action Types

| Type | Description |
|---|---|
| Access / GitHub | Repository permissions, connector access, write-path issues |
| Claude workflow | Claude Code setup, execution envelope, session discipline |
| Documentation | Drafting, cleanup, restructuring, internal linking |
| Governance hygiene | Reducing overclaiming, ambiguity, authority drift, or hidden risk |
| Operational control | Boards, queues, status snapshots, working maps |
| Review | Read-only verification, patch review, PR review, external review |
| Decision needed | Requires explicit Human Owner decision |
| Canonicalization candidate | May later be proposed for canon, but is not canon now |
| External signal | Input from outside RABA, not validation or approval |
| Cleanup | Formatting, naming, minor wording, broken links, file hygiene |

---

## Queue

| ID | Priority | Status | Type | Item | Why it matters | Next step | Owner | Confirmation needed |
|---|---|---|---|---|---|---|---|---|
| AQ-001 | P1 | Done | Access / GitHub | Define Claude Code GitHub access boundary | Human Owner decided that Claude should remain a read-only and local patch/diff worker for the current RABA workflow. Claude may read, analyze, prepare patches, suggest changes, and support review. Claude may not push directly, create PRs, change labels, request reviewers, mark ready-for-review, merge, canonicalize, or make public/provider-facing/validation/compliance/adoption claims. Ben remains RABA architect, integration specialist, and GitHub operator after explicit Human Owner confirmation. | Use Claude as bounded repo worker; revisit Claude write access only through a separate Human Owner decision | Human Owner + Ben | No Claude GitHub write access unless separately approved |
| AQ-002 | P1 | Done | Review | Review and merge PR #154 | PR #154 was reviewed, moved to ready-for-review, and merged after explicit Human Owner confirmation. It remains a merged non-canonical wording cleanup, not a separate canonicalization decision. | No further action unless follow-up wording issues are discovered | Human Owner + Ben | Yes before any follow-up GitHub update or canonicalization |
| AQ-003 | P2 | Captured | Claude workflow | Create multi-AI execution roles note | Clarifies the roles of Human Owner, Ben / ChatGPT, Claude Code, and GitHub to prevent authority drift | Draft `raba-multi-ai-execution-roles.md` as working note | Ben | Yes before GitHub create |
| AQ-004 | P2 | Captured | Operational control | Maintain this RABA Action Queue | Prevents important but non-urgent work from being lost | Update queue after major work sessions | Ben | Yes before GitHub update |
| AQ-005 | P2 | Captured | Access / GitHub | Create permissions diagnostic checklist | Makes future 403 / push failure incidents easier to diagnose | Draft checklist for read/write access, tokens, GitHub Apps, branch rights | Ben | Yes before GitHub create |
| AQ-006 | P2 | Captured | Governance hygiene | Add recovery lesson from PR #154 | The failed Claude push and ChatGPT connector recovery clarified local artifact vs GitHub truth | Decide whether to capture as working note or operational lesson | Ben + Human Owner | Yes before GitHub create |
| AQ-007 | P3 | Captured | Operational control | Update RABA operational plan | Several PRs and external-signal items are active; the control board may need refresh | Produce updated operational plan when queue grows | Ben | Yes before GitHub update |
| AQ-008 | P3 | Captured | Governance hygiene | Review overclaiming language beyond PR #154 | Similar validation / readiness wording may exist elsewhere | Run read-only scan later | Ben / Claude Code | Yes before any edits |
| AQ-009 | P4 | Captured | Canonicalization candidate | Evaluate whether Action Queue should become a standard RABA governance artifact | This queue may itself become part of RABA operating architecture later | Revisit after several sessions of use | Human Owner + Ben | Yes before canonicalization |
| AQ-010 | P2 | Captured | Cleanup | Verify final newline before PR #155 ready-for-review or merge | Patch output did not show a newline error, but final newline hygiene should be checked before any status transition | Re-check file ending before ready-for-review / merge gate | Ben | Yes before GitHub update or PR status change |
| AQ-011 | P2 | Captured | Claude workflow / Governance hygiene | Add RABA governance guardrails to Claude project instructions | Claude Code should consistently preserve RABA authority boundaries across sessions: Human Owner decides; AI recommendation is not approval; verification is read-only; no merge without explicit confirmation; no canonicalization without Human Owner approval. | Decide whether these rules belong in Claude account instructions, CLAUDE.md, or both | Human Owner + Ben | Yes before GitHub create/update or CLAUDE.md creation |
| AQ-012 | P1 | Captured | Review / Wording hygiene | Review PR #156 for risky wording before any next PR transition | PR #156 adds a non-canonical working note for multi-AI execution roles. Before ready-for-review or merge discussion, it should be checked for wording that could imply canon, approval, validation, adoption, compliance, certification, partnership, implementation readiness, or product-roadmap claims. | Perform read-only risky wording scan on PR #156 | Ben / Human Owner | Yes before PR status changes |
| AQ-013 | P2 | Captured | Architecture working notes / Companion notes | Create companion working notes package for PR #156 mechanisms | PR #156 intentionally keeps the main roles note compact. Related mechanisms such as Dynamic Control Points, Allowed Zone Declaration, Bounded Parallel Continuation, and Consequence-Aware Decision Card should be preserved as companion working note candidates, not lost or treated as secondary. | Decide whether to create one companion PR or separate working-note PRs | Ben / Human Owner | Yes before GitHub create/update |
| AQ-014 | P1 | Captured | PR control / Decision gate | Decide next transition for PR #156 | PR #156 is currently Draft and non-canonical. Any move to ready-for-review, reviewer request, labels, merge, or canonicalization requires separate Human Owner confirmation. | After risky wording scan, decide whether PR #156 remains Draft, is revised, or is proposed for ready-for-review | Human Owner + Ben | Yes before ready-for-review, labels, reviewers, merge, or canonicalization |
| AQ-015 | P1 | Captured | Agent governance / Stop behavior | Add cancelled-action status-only rule for AI agents | During multi-AI and GitHub-assisted workflows, a cancelled, blocked, failed, or refused tool action may create ambiguity about what the AI agent is still allowed to do. To prevent authority drift, the agent should enter status-only mode after a cancelled or blocked action unless the Human Owner gives a new bounded instruction. This protects against indirect continuation, workaround behavior, accidental GitHub changes, or treating cancellation as permission to continue differently. | Preserve the rule as a future governance hardening item; consider adding it to the multi-AI execution roles note, a companion agent-control note, or the Action Queue after separate Human Owner confirmation | Human Owner + Ben | Yes before GitHub update, PR #155 update, PR #156 update, companion note creation, Claude Code instruction changes, or any change affecting agent authority |
| AQ-016 | P2 | Captured | Governance hygiene / Documentation | Clarify Decision Log record types | Recent review of `docs/decision-log-schema.md`, `docs/decision-log/README.md`, and `docs/decision-log/2026-06-02-repository-governance-hardening.md` suggests RABA uses multiple Decision Log-related formats: project-level Markdown decision records, structured AI-action decision log entries, Human Owner authorization records, Decision Cards, and possible canonicalization decision records. This appears to be intentional format flexibility, not a blocker, but the relationship between record types should be clarified later to prevent schema-compliance confusion. | Draft a future cleanup note or small documentation clarification distinguishing record types without changing canon | Ben / Human Owner | Yes before GitHub create/update or canonicalization |
| AQ-017 | P1 | Captured | Operational control / Interface concept preservation | Capture RABA Responsibility Terminal manual/static mockup exploration | The Responsibility Terminal / Responsibility Management Interface concept emerged during multi-AI workflow work as a way to make Human Owner decisions, AI recommendations, GitHub evidence, Action Queue state, blocked actions, responsibility boundaries, and next necessary governance steps visible without turning visibility into authority. This item preserves the concept as a controlled exploration line while preventing prototype creep, product-roadmap pressure, public/provider-facing claims, or premature implementation. | Continue using Manual Terminal mode in chat; after one or more manual passes, decide whether to prepare a static read-only mockup task, create a separate non-canonical working note, or defer until PR #156 is merged, closed, or explicitly held | Human Owner + Ben | Yes before GitHub update, mockup creation, PR/issue creation, public/provider-facing use, implementation, roadmap, validation, adoption, compliance, certification, partnership, commercial claims, or canonicalization |

---

## Queue Maintenance Rules

1. Every item must have a priority.
2. Every item must have a status.
3. Every item must have a next step.
4. If an item has no clear next step, it belongs in P4 Parking Lot.
5. Priority does not authorize execution.
6. AI may recommend priority changes, but Human Owner decides.
7. Items involving GitHub write actions require explicit Human Owner confirmation.
8. Items involving ready-for-review, merge, canonicalization, public positioning, outreach, provider-facing use, commercial claims, adoption claims, validation claims, compliance claims, or product-roadmap claims require explicit Human Owner confirmation.
9. Completed items should remain visible long enough to preserve accountability, then may be moved to a completed section or operational log.
10. This queue should reduce hidden work, not create bureaucracy.

---

## Approved Task Workflow

Human Owner approved the following standing workflow for working with queued RABA tasks.

This is an operational procedure for this queue.

It does not override Human Owner confirmation requirements.

It does not authorize GitHub write actions, ready-for-review, merge, canonicalization, public positioning, outreach, provider-facing use, commercial claims, adoption claims, validation claims, compliance claims, certification claims, or product-roadmap claims.

### Standard Cycle

```text
Capture → Triage → Select → Execute → Verify → Update Queue
```

### Step Definitions

1. Capture — preserve the task, risk, idea, or future action so it is not lost.
2. Triage — assign priority, status, type, owner, and next step.
3. Select — choose the next work item according to priority and current constraints.
4. Execute — perform only the action that has been explicitly authorized.
5. Verify — check the result through read-only verification.
6. Update Queue — update the item status, next step, or completion state.

### Session Selection Rule

At the start of a RABA work session, review the queue in this order:

```text
P0 first → then P1 → then selected P2
```

Default session limit:

```text
one P1 item + one selected P2 item
```

This limit may be changed by the Human Owner, but the default is intended to prevent scope expansion.

### Session Opening Checklist

1. Are there any P0 blockers?
2. Which P1 item is the best next step?
3. Which items are blocked?
4. Which single action should be executed now?
5. Which non-urgent items should be captured for later?

### Standing Capture Rule

When a non-urgent but important task appears during discussion, Ben should propose a queue entry with:

```text
ID / Priority / Status / Type / Item / Why it matters / Next step / Owner / Confirmation needed
```

The entry is not added to GitHub automatically.

Human Owner confirmation is required before updating this queue file.

---

## Current Control Snapshot

Current active focus:

1. PR #154 has been merged as non-canonical wording cleanup.
2. Claude Code GitHub write access remains unresolved.
3. Action Queue resource is being introduced as operational control material.
4. Multi-AI execution roles note remains a planned working note.
5. No item in this queue is canon unless separately approved and canonicalized by the Human Owner.

---

## Reminder

RABA supports trust by making hidden risks visible.

This queue exists to make hidden work visible without turning every idea into an immediate action.
