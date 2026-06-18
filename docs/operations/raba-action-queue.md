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
| AQ-001 | P1 | Blocked | Access / GitHub | Diagnose Claude Code GitHub write access | Claude Code can read the repository but cannot push; this blocks normal Claude-based repo execution | Check Claude GitHub integration permissions and write scopes | Human Owner + Ben | No write action unless permissions are changed |
| AQ-002 | P1 | Planned | Review | Review PR #154 | PR #154 is created, verified, and remains a non-canonical wording cleanup candidate awaiting Human Owner review | Human Owner reviews PR content and decides next gate | Human Owner | Yes before ready-for-review or merge |
| AQ-003 | P2 | Captured | Claude workflow | Create multi-AI execution roles note | Clarifies the roles of Human Owner, Ben / ChatGPT, Claude Code, and GitHub to prevent authority drift | Draft `raba-multi-ai-execution-roles.md` as working note | Ben | Yes before GitHub create |
| AQ-004 | P2 | Captured | Operational control | Maintain this RABA Action Queue | Prevents important but non-urgent work from being lost | Update queue after major work sessions | Ben | Yes before GitHub update |
| AQ-005 | P2 | Captured | Access / GitHub | Create permissions diagnostic checklist | Makes future 403 / push failure incidents easier to diagnose | Draft checklist for read/write access, tokens, GitHub Apps, branch rights | Ben | Yes before GitHub create |
| AQ-006 | P2 | Captured | Governance hygiene | Add recovery lesson from PR #154 | The failed Claude push and ChatGPT connector recovery clarified local artifact vs GitHub truth | Decide whether to capture as working note or operational lesson | Ben + Human Owner | Yes before GitHub create |
| AQ-007 | P3 | Captured | Operational control | Update RABA operational plan | Several PRs and external-signal items are active; the control board may need refresh | Produce updated operational plan when queue grows | Ben | Yes before GitHub update |
| AQ-008 | P3 | Captured | Governance hygiene | Review overclaiming language beyond PR #154 | Similar validation / readiness wording may exist elsewhere | Run read-only scan later | Ben / Claude Code | Yes before any edits |
| AQ-009 | P4 | Captured | Canonicalization candidate | Evaluate whether Action Queue should become a standard RABA governance artifact | This queue may itself become part of RABA operating architecture later | Revisit after several sessions of use | Human Owner + Ben | Yes before canonicalization |

---

## Queue Maintenance Rules

1. Every item must have a priority.
2. Every item must have a status.
3. Every item must have a next step.
4. If an item has no clear next step, it belongs in P4 Parking Lot.
5. Priority does not authorize execution.
6. AI may recommend priority changes, but Human Owner decides.
7. Items involving GitHub write actions require explicit Human Owner confirmation.
8. Items involving ready-for-review, merge, canonicalization, public positioning, outreach, provider-facing use, commercial claims, adoption claims, validation claims, compliance claims, certification claims, or product-roadmap claims require explicit Human Owner confirmation.
9. Completed items should remain visible long enough to preserve accountability, then may be moved to a completed section or operational log.
10. This queue should reduce hidden work, not create bureaucracy.

---

## Current Control Snapshot

Current active focus:

1. PR #154 remains Draft and non-canonical.
2. Claude Code GitHub write access remains unresolved.
3. Action Queue resource is being introduced as operational control material.
4. Multi-AI execution roles note remains a planned working note.
5. No item in this queue is canon unless separately approved and canonicalized by the Human Owner.

---

## Reminder

RABA supports trust by making hidden risks visible.

This queue exists to make hidden work visible without turning every idea into an immediate action.
