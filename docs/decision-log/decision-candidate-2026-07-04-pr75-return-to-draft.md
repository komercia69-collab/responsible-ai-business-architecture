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

The reason was not rejection of PR #75 content. The reason was governance consistency.

A read-only clarification review found that PR #75 was marked ready-for-review, but the PR body claim that the Human Owner had confirmed moving PR #75 to ready-for-review could not be independently verified through a merged Decision Log entry on `main`.

The Human Owner stated that there was no confidence that the prior ready-for-review authorization had been explicit enough.

Therefore, the safer RABA action was to return PR #75 to draft pending explicit Human Owner review and to correct the PR body so it no longer carried an unsupported ready-for-review confirmation claim.

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
awaiting explicit Human Owner review
```

The prior ready-for-review state of PR #75 is not currently accepted as an independently verified Human Owner decision.

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

The read-only clarification review found:

```text
PR #75 body claim:
"Human Owner confirmed moving this PR to ready-for-review only."

Verification result:
No merged Decision Log entry on main independently supports that specific ready-for-review authorization.
```

The only decision-log file that appeared to reference PR #75 preparation existed on the PR branch itself, not on `main`.

Under RABA governance rules:

```text
PR body claim ≠ Human Owner approval
Unmerged branch file ≠ repository truth on main
Commit existence ≠ canon
Ready-for-review ≠ merge authorization
Canonicalization candidate ≠ canon
```

Because the prior authorization could not be independently verified, keeping PR #75 in ready-for-review state would create a governance inconsistency.

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

This claim was misleading after the PR had been returned to draft and after the prior authorization could not be independently verified on `main`.

A second scoped Human Owner authorization was given to perform one action only:

```text
Correct PR #75 body to remove the misleading ready-for-review claim.
```

Claude Code replaced the old claim in the `## Decision boundary` section with the following governance note:

```text
PR #75 was returned to draft on 2026-07-04 because the prior ready-for-review authorization could not be independently verified through a merged Decision Log entry on main. PR #75 remains a non-canonical canonicalization candidate draft pending explicit Human Owner review. This does not reject PR #75 content, authorize merge, authorize canon, or authorize ready-for-review.
```

Post-action verification confirmed:

```text
PR #75 remained open.
PR #75 remained draft.
PR #75 remained unmerged.
The old misleading claim was absent.
The corrected governance note was present.
```

No other PR body content was intentionally changed beyond the authorized sentence replacement.

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
no Decision Log update
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
```

The decision only means:

```text
PR #75 must not remain ready-for-review unless the Human Owner confirmation is explicit, scoped, and independently recorded.
```

And:

```text
PR #75 body must not contain a misleading unsupported ready-for-review confirmation claim.
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
blocked pending explicit Human Owner review
```

Merge remains blocked.

Canonicalization remains blocked.

Ready-for-review remains blocked until a new explicit Human Owner confirmation is given.

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
```

## 10. Future Required Decisions

Before further movement, the Human Owner must decide:

```text
1. Should PR #75 remain draft?
2. Should PR #75 be rebased or synced with current main?
3. Should PR #75 be split, revised, or kept as one candidate package?
4. Should PR #75 later be marked ready-for-review?
5. Should PR #75 ever be merged as non-canonical candidate material?
6. Should any part of PR #75 become a canonicalization candidate?
7. Should any part of PR #75 become canon?
```

Each of the following requires separate explicit Human Owner confirmation:

```text
marking PR #75 ready-for-review
syncing or rebasing PR #75
merging PR #75
canonicalizing any PR #75 content
creating docs/core/ or docs/core/candidates/ on main
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

This event reinforces a core RABA governance rule:

```text
If an approval cannot be independently verified, the system must move toward the safer governance state.
```

For PR #75, the safer governance state is:

```text
draft
not ready-for-review
not merge-authorized
not canon
```

A related operational rule is also reinforced:

```text
If a PR body contains an unsupported approval claim, the claim must be corrected or clearly bounded so it cannot be mistaken for Human Owner authorization.
```

## 13. Recommended Next Best Step

Recommended next step:

```text
Review this Decision Log candidate before merge.
```

After that, a separate operational overview refresh may be prepared to reflect:

```text
PR #75 returned to draft.
PR #75 body corrected.
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
