# Decision Candidate — PR #75 Return to Draft and Body Correction

```yaml
title: PR #75 Return to Draft and Body Correction
date: 2026-07-04
status: decision_record_candidate
canonical_status: non_canonical
type: operational_control_decision
scope:
  - PR #75
  - Tranche 1.1 canonicalization candidate
  - ready-for-review state correction
  - PR body governance-claim correction
repository_action_status: draft_pr_candidate
related_pr:
  - "#75"
actions_completed:
  - returned_pr_75_to_draft
  - corrected_pr_75_body_ready_for_review_claim
human_owner_confirmation_required_for:
  - merging this record
  - marking PR #75 ready-for-review again
  - syncing or rebasing PR #75
  - merging PR #75
  - treating PR #75 content as canon
  - canonicalizing any PR #75 content
```

## 1. Summary

On 2026-07-04, PR #75 was returned from non-draft / ready-for-review state to draft state.

A subsequent scoped correction updated the PR #75 body to remove a misleading ready-for-review confirmation claim.

The reason was not rejection of PR #75 content. The reason was governance consistency at the time of action.

A read-only clarification review found that PR #75 was marked ready-for-review, but no merged Decision Log record could be found at that time to independently verify that authorization. Based on that finding, the safer RABA action was taken: return PR #75 to draft.

A later consistency check found that commit `85a40db` on `main` does provide a merged Decision Log record (`docs/decision-log/2026-07/2026-07-04-pr-75-ready-for-review-confirmation.md`), confirming a prior Human Owner authorization for PR #75 ready-for-review for human review only. See section 3a for the full chronology correction.

The current safe operational state remains draft. The return-to-draft action occurred before commit `85a40db` was discovered. The Human Owner must make a renewed explicit decision before PR #75 may be returned to ready-for-review.

## 2. Decision

PR #75 shall currently be treated as:

```text
draft
canonicalization candidate
non-canonical
not rejected
not approved
not ready-for-review
not merge-authorized
not canon
awaiting renewed explicit Human Owner decision
```

Commit `85a40db` on main records prior Human Owner authorization for PR #75 ready-for-review for human review only. However, a later Human Owner-scoped action returned PR #75 to draft. The current operational state is draft, and renewed explicit Human Owner confirmation is required before any ready-for-review transition.

Future movement of PR #75 requires a new explicit, scoped Human Owner confirmation.

This includes any future action to:

```text
mark PR #75 ready-for-review
sync or rebase the PR branch
merge PR #75
treat any PR #75 content as canon
canonicalize any PR #75 content
```

## 3. Reason

RABA requires that Human Owner approval be explicit, scoped, and independently traceable.

The read-only clarification review found at the time of action:

```text
PR #75 body claim:
"Human Owner confirmed moving this PR to ready-for-review only."

Initial verification result (at time of read-only review):
No merged Decision Log record was found on main at that time.

Later consistency check finding:
Commit 85a40db on main exists and added:
docs/decision-log/2026-07/2026-07-04-pr-75-ready-for-review-confirmation.md
That record confirms Human Owner authorization for ready-for-review for human review only.
```

At the time of the initial review, the only decision-log file that appeared to reference PR #75 preparation existed on the PR branch itself, not on `main`. Commit `85a40db` was subsequently found on main, providing the independent record. See section 3a.

Under RABA governance rules:

```text
PR body claim ≠ Human Owner approval
Unmerged branch file ≠ repository truth on main
Commit existence ≠ canon
Ready-for-review ≠ merge authorization
Canonicalization candidate ≠ canon
```

Because no merged record was found during the initial review, keeping PR #75 in ready-for-review state appeared to create a governance inconsistency. With commit `85a40db` now known, the inconsistency is understood as a chronological ordering issue: the authorization existed but was not found before the return-to-draft action was taken.

## 3a. Chronology Correction — Commit 85a40db

A later read-only consistency check found that `main` contains commit `85a40db`:

```text
85a40db — Record PR #75 ready-for-review confirmation
```

That commit added:

```text
docs/decision-log/2026-07/2026-07-04-pr-75-ready-for-review-confirmation.md
```

This means a merged Decision Log record on `main` does exist for the earlier PR #75 ready-for-review authorization. The record confirms ready-for-review for human review only. It does not authorize merge, canon, canonicalization, or adoption of PR #75 content.

The later return-to-draft action remains the current operational state unless and until the Human Owner explicitly confirms a renewed ready-for-review action.

This Decision Candidate therefore records the later return-to-draft and body-correction sequence in chronological context. It does not invalidate the earlier authorization record, reject PR #75 content, authorize ready-for-review, authorize merge, or authorize canon.

## 4. Action 1 — Return PR #75 to Draft

A scoped Human Owner authorization was given to perform one action only:

```text
Return PR #75 to draft.
```

Claude Code executed the action and reported:

```text
PR #75 before action:
open / non-draft / not merged

PR #75 after action:
open / draft / not merged
```

No other action was authorized or taken during that step.

## 5. Action 2 — Correct PR #75 Body

After PR #75 was returned to draft, a remaining inconsistency was identified.

The PR body still contained the old claim:

```text
Human Owner confirmed moving this PR to ready-for-review only.
```

This claim was misleading after the PR had been returned to draft. A prior merged Decision Log record existed on main (commit `85a40db`), but had not yet been found at the time of the body correction.

A second scoped Human Owner authorization was given to perform one action only:

```text
Correct PR #75 body to remove the misleading ready-for-review claim.
```

Claude Code replaced the old claim in the `## Decision boundary` section. A subsequent body correction was later made to reflect the full chronology after commit `85a40db` was discovered.

Post-action verification confirmed:

```text
PR #75 remained open.
PR #75 remained draft.
PR #75 remained unmerged.
The old misleading claim was absent.
A corrected governance note was present.
```

No other PR body content was intentionally changed beyond the authorized replacements.

## 6. Actions Not Taken

The following were not performed during the return-to-draft action or the body-correction action:

```text
no repository files changed
no files created
no commits
no pushes
no branch update
no rebase
no merge
no conflict resolution
no PR comment
no label change
no reviewers requested
no issue created
no operational overview update
no canon action
```

PR #75 was not closed.

PR #75 content was not rejected.

PR #75 content was not treated as canon.

No architectural decision was made about the substance of PR #75.

## 7. What This Decision Does Not Mean

This decision does not mean:

```text
PR #75 is rejected
PR #75 content is invalid
PR #75 should be closed
PR #75 should never become ready-for-review
PR #75 should never be merged
Tranche 1.1 is rejected
the prior ready-for-review authorization was invalid
```

The decision records that:

```text
The return-to-draft was a cautious, correct governance action at the time it was taken.
A prior merged Decision Log record (commit 85a40db) confirms the earlier ready-for-review authorization.
The current state is draft pending renewed Human Owner decision.
```

## 8. Current Status of PR #75

Current working status:

```text
PR #75:
open
draft
canonicalization candidate
non-canonical
not rejected
not approved
not ready-for-review
not merge-authorized
not canon
blocked pending renewed explicit Human Owner decision
```

Merge remains blocked.

Canonicalization remains blocked.

Ready-for-review remains blocked until a renewed explicit Human Owner confirmation is given.

Prior authorization record: exists on main via commit `85a40db`.

Current operational state: draft, as set by later Human Owner-scoped action.

## 9. Remaining Issues

The following issues remain unresolved:

```text
1. PR #75 branch is not current with main.
2. PR #75 has not been rebased or synced.
3. PR #75 content has not been re-reviewed after return to draft.
4. PR #75 candidate package has not been accepted or rejected.
5. The creation of docs/core/candidates/ on main has not been authorized.
6. No part of PR #75 has been canonicalized.
7. This decision candidate has not been merged and is not canon.
8. Commit 85a40db proves prior ready-for-review authorization existed, but the Human Owner
   must make a renewed decision about the current PR #75 state.
```

## 10. Future Required Decisions

Before further movement, the Human Owner must decide:

```text
1. Should PR #75 remain draft or be returned to ready-for-review?
2. Should PR #75 be rebased or synced with current main?
3. Should PR #75 be split, revised, or kept as one candidate package?
4. Should PR #75 later be marked ready-for-review?
5. Should PR #75 ever be merged as non-canonical candidate material?
6. Should any part of PR #75 become a canonicalization candidate?
7. Should any part of PR #75 become canon?
8. Should this Decision Candidate (PR #168) be merged or revised further?
```

Each of the following requires separate explicit Human Owner confirmation:

```text
marking PR #75 ready-for-review
syncing or rebasing PR #75
merging PR #75
canonicalizing any PR #75 content
creating docs/core/ or docs/core/candidates/ on main
merging PR #168
```

## 11. Required Human Owner Phrases

Ready-for-review gate:

```text
Подтверждаю перевод PR #75 в ready-for-review.
```

Merge gate:

```text
Подтверждаю merge PR #75.
```

Branch sync gate:

```text
Подтверждаю sync/rebase PR #75 branch with current main.
```

Canonicalization gate:

```text
Подтверждаю канонизацию [конкретный документ/концепт из PR #75] как RABA canon.
```

Creation of `docs/core/` or `docs/core/candidates/` on main:

```text
Подтверждаю создание docs/core/ или docs/core/candidates/ на main в рамках PR #75.
```

No such confirmation is granted by this decision candidate.

## 12. RABA Rule Reinforced

This event reinforces core RABA governance rules:

```text
If an approval cannot be found during a review, the system must move toward the safer governance state.
```

And:

```text
When new evidence changes the factual basis of a governance action,
the record must be corrected to reflect the full chronology.
```

For PR #75, the safer governance state at the time of the initial review was:

```text
draft
not ready-for-review
not merge-authorized
not canon
```

With commit `85a40db` now known, the record is corrected: a prior authorization existed. The current state remains draft pending renewed Human Owner decision.

A related operational rule is also reinforced:

```text
If a PR body contains a misleading approval claim, the claim must be corrected or clearly bounded
so it cannot be mistaken for Human Owner authorization.
```

## 13. Recommended Next Best Step

Recommended next step:

```text
Human Owner decides whether to:
1. Return PR #75 to ready-for-review (using gate phrase above), or
2. Keep PR #75 as draft for further review, or
3. Merge or revise this Decision Candidate (PR #168).
```

A separate operational overview refresh may also be prepared to reflect:

```text
PR #75 returned to draft then chronology corrected.
PR #75 body corrected twice.
Issue #167 created for GEG review queue.
PR #164, #165, and #166 remain strong drafts.
PR #163 remains draft pending separate review.
Phase 3 remains blocked.
Real UI-TARS remains blocked.
```

## 14. Final Boundary

This decision candidate is review aid and operational control material.

It is not:

```text
approval
canon
validation
compliance
certification
production readiness
ready-for-review instruction
merge instruction
canonicalization instruction
rejection of PR #75
Human Owner architectural decision
```
