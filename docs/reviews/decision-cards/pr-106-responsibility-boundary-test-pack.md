# Decision Card — PR #106 Responsibility Boundary Test Pack v0.1

**Status:** Decision Card Draft  
**Canonical status:** Non-canonical  
**Related PR:** #106 — Draft: Add Responsibility Boundary Test Pack v0.1  
**Purpose:** Prepare Human Owner review of PR #106 without moving PR #106 toward ready-for-review, merge, implementation adoption, or canon.  

This Decision Card does not create RABA canon.

It does not modify PR #106.

It does not approve Human Review State, Responsibility Field, test scenarios, demo behavior, event fixtures, routing policy fixtures, implementation guidance, runtime enforcement, public positioning, validation, adoption, partnership, pilot activity, vendor activity, or commercial commitments.

Final architectural approval remains with the Human Owner.

---

## 1. Decision question

What should happen next with PR #106, the Responsibility Boundary Test Pack v0.1?

The decision is not whether PR #106 is canon.

The decision is how to review, stage, revise, park, or split PR #106 safely without accidentally treating an experimental test/demo artifact as accepted RABA architecture.

---

## 2. Current PR #106 status

As last reviewed:

- PR #106 is open.
- PR #106 is Draft.
- PR #106 is not merged.
- PR #106 is not ready-for-review.
- PR #106 is not canonical.
- PR #106 has 35 commits.
- PR #106 changes 19 files.
- PR #106 adds approximately 2945 lines.
- PR #106 is currently not mergeable and is based on an older `main`.

PR #106 must not be marked ready, merged, rebased, split, or treated as accepted without separate Human Owner confirmation.

---

## 3. Candidate scope under review

PR #106 appears to include:

### Demo files

- `demo/responsibility-boundary-v0-1.html`
- `demo/responsibility-boundary-v0-2.html`

### Test pack documentation

- `docs/tests/responsibility-boundary-v0-1/README.md`
- `docs/tests/responsibility-boundary-v0-1/manual-test-walkthrough.md`
- `docs/tests/responsibility-boundary-v0-1/manual-test-answer-sheet.md`
- `docs/tests/responsibility-boundary-v0-1/completed-test-example.md`
- `docs/tests/responsibility-boundary-v0-1/demo-v0-2-test-findings.md`

### Review and synthesis material

- `docs/tests/responsibility-boundary-v0-1/adversarial-review-synthesis.md`
- `docs/tests/responsibility-boundary-v0-1/external-model-review-prompt.md`

### Scenario, assumptions, and expected outcome

- `docs/tests/responsibility-boundary-v0-1/test-assumptions-and-dependencies.md`
- `docs/tests/responsibility-boundary-v0-1/candidate-test-scenarios.md`
- `docs/tests/responsibility-boundary-v0-1/supplier-payment-scenario.md`
- `docs/tests/responsibility-boundary-v0-1/expected-responsibility-outcome.md`

### Governance checks and observations

- `docs/tests/responsibility-boundary-v0-1/human-reauthorization-check.md`
- `docs/tests/responsibility-boundary-v0-1/post-execution-observation.md`
- `docs/tests/responsibility-boundary-v0-1/responsibility-field-model.md`

### Fixtures

- `docs/tests/responsibility-boundary-v0-1/supplier-payment-input.json`
- `docs/tests/responsibility-boundary-v0-1/supplier-payment-events.json`
- `docs/tests/responsibility-boundary-v0-1/supplier-payment-routing-policy-fixture.md`

---

## 4. What is already confirmed

Only the following is confirmed:

- Human Owner allowed PR #106 to exist as Draft.
- PR #106 may be reviewed as an experimental non-canonical test pack.
- The test pack may help explore responsibility boundary behavior.
- The demo and fixtures are review material only.
- The material is not accepted RABA architecture.
- The material is not implementation guidance.
- The material is not runtime enforcement guidance.
- The material is not public positioning.

---

## 5. What is not confirmed

The following are not confirmed:

- Acceptance of Human Review State as RABA architecture.
- Acceptance of Responsibility Field as RABA architecture.
- Acceptance of any demo flow as canonical.
- Acceptance of any event fixture as event-family adoption.
- Acceptance of any JSON fixture as schema adoption.
- Acceptance of any routing policy fixture as policy architecture.
- Acceptance of any test scenario as canonical test coverage.
- Permission to mark PR #106 ready-for-review.
- Permission to merge PR #106.
- Permission to rebase/sync PR #106.
- Permission to use PR #106 for public positioning.
- Permission to deploy or implement PR #106 behavior.

---

## 6. Review dimensions

### 6.1 Demo behavior

Review questions:

- Does the demo clearly distinguish illustration from implementation?
- Does it avoid implying that RABA has an accepted UI or runtime workflow?
- Does it show responsibility-boundary behavior without becoming product positioning?
- Does Human Review State make human authority more real, or does it risk becoming HITL theater?
- Are stop conditions, escalation states, and decision options visible enough for review?

Risk:

- A polished demo can be mistaken for accepted architecture or product readiness.

Possible outcome:

- Keep as experimental demo.
- Add stronger non-canonical warnings.
- Split demo from review documents.
- Park until core concepts are clearer.

---

### 6.2 Human Review State

Review questions:

- Is Human Review State a useful concept or only a demo-stage label?
- Does it improve the distinction between AI stopping and human governing?
- Does it define what the human reviewer must receive before a valid decision?
- Does it connect to Decision Log and Responsibility Event Stream without adopting either as final schema?
- Does it require Human Owner canonicalization review before reuse elsewhere?

Risk:

- Human Review State may be mistaken for accepted RABA canon.

Possible outcome:

- Keep as experimental concept.
- Convert to working note later.
- Review after PR #75 conceptual boundary track.

---

### 6.3 Responsibility Field model

Review questions:

- Is Responsibility Field an explanatory model, a test model, or an architecture candidate?
- Does it overlap with Action Boundary, Governance Gateway, Approval State, Decision Log, or Responsibility Event Stream?
- Does it risk creating a parallel vocabulary before RABA canon is stable?
- Should it remain confined to the test pack?

Risk:

- Terminology drift and premature model adoption.

Possible outcome:

- Keep inside test pack only.
- Add explicit “experimental model” language.
- Prepare a separate review note only after Human Owner approval.

---

### 6.4 Test scenarios and expected outcomes

Review questions:

- Do the scenarios test responsibility boundaries rather than merely workflow correctness?
- Do they test missing evidence, authority mismatch, escalation, reversibility, and unresolved uncertainty?
- Are expected outcomes traceable to governance reasons?
- Are the scenarios too narrow around supplier payment?
- Are they reusable without implying final RABA test coverage?

Risk:

- Candidate scenarios may be mistaken for official conformance tests.

Possible outcome:

- Keep as candidate tests.
- Expand later.
- Split scenario fixtures from architectural notes.

---

### 6.5 JSON events and fixtures

Review questions:

- Are JSON files clearly marked as fixtures, not schemas?
- Do they imply event-family adoption?
- Do they overlap with PR #75 Responsibility Event Stream stub?
- Should they wait until proof/governance boundary and RES review mature?

Risk:

- Accidental schema adoption or event-family adoption.

Possible outcome:

- Keep as fixtures only.
- Add stronger warnings.
- Move schema-adjacent material into a separate review track later.

---

### 6.6 External-model review prompts and adversarial synthesis

Review questions:

- Are external-model reviews clearly treated as review input only?
- Does the synthesis avoid treating multi-AI agreement as approval?
- Are recommendations preserved without becoming RABA decisions?
- Are public claims avoided?

Risk:

- Multi-AI review can be mistaken for validation or approval.

Possible outcome:

- Keep as review input.
- Add stronger boundary language if needed.

---

## 7. Main risks

| Risk | Description | Severity | Mitigation |
|---|---|---|---|
| Demo-to-architecture drift | Demo flow treated as accepted RABA architecture | High | Keep Draft; add explicit non-canonical warnings |
| Human Review State adoption by accident | Demo stage becomes accepted architecture | High | Treat as experimental concept only |
| Responsibility Field terminology drift | New vocabulary competes with core concepts | Medium-high | Confine to test pack unless separately reviewed |
| JSON fixture schema adoption | Fixtures mistaken for schemas or event families | High | Label as fixtures only; avoid `schema` language |
| Event-family adoption drift | Supplier payment events treated as RES events | High | Separate from PR #75 RES review |
| Public/product readiness drift | HTML demos suggest product maturity | Medium-high | Avoid public positioning without Human Owner approval |
| Multi-AI validation drift | External model review treated as approval | High | Keep as review input only |
| Branch divergence | PR #106 is old and not mergeable | Medium | Sync only after review strategy is decided |
| Review overload | 19 files and 2945 additions in one PR | Medium-high | Consider split/staging before movement |

---

## 8. Decision options

### Option A — Keep PR #106 Draft and unchanged

Use when:

- Human Owner wants to avoid movement while higher-priority architecture review continues.
- The team needs time to compare #106 with #75 and #110.

Consequence:

- Safest short-term option.
- Test pack remains available but unmerged.

Recommendation:

- Safe default.

---

### Option B — Keep Draft, perform source-file review

Use when:

- Human Owner wants to understand #106 before deciding split or merge.

Consequence:

- Produces review findings without moving the PR.

Recommendation:

- Best next step after this Decision Card.

---

### Option C — Split PR #106 into smaller tracks

Possible split:

1. Demo files only.
2. Manual walkthrough and answer sheet.
3. Scenario and expected outcome docs.
4. Governance check docs.
5. Review prompts and adversarial synthesis.
6. JSON/policy fixtures.

Consequence:

- Better review control.
- More PR management overhead.

Recommendation:

- Likely useful, but only after source-file review.

---

### Option D — Sync/rebase branch and keep Draft

Use when:

- Human Owner wants technical freshness before review.

Consequence:

- Reveals conflicts.
- Does not approve content.

Risk:

- Syncing before review may obscure original state.

Recommendation:

- Do only after deciding whether to preserve original PR or split.

---

### Option E — Merge as non-canonical test pack

Use when:

- Human Owner decides the test pack should be preserved in the repository despite experimental status.

Consequence:

- Makes demos and fixtures visible in main.
- Increases risk of demo-to-architecture drift.

Recommendation:

- Not recommended before source-file review and possible warnings refinement.

---

### Option F — Close PR #106 and preserve selected lessons elsewhere

Use when:

- The test pack is too broad, too early, or too demo-heavy.

Consequence:

- Avoids merge risk.
- Requires preserving valuable lessons elsewhere.

Recommendation:

- Not recommended yet; review first.

---

## 9. Ben recommendation

Recommended next action:

```text
Keep PR #106 Draft and unchanged.
Do not sync/rebase yet.
Do not mark Ready.
Do not merge.
Perform source-file review first, starting with README and demo v0.2.
```

Reason:

- PR #106 is large and demo-heavy.
- It is not mergeable and is based on an older `main`.
- It contains schema-adjacent JSON fixtures and event examples.
- It introduces Human Review State and Responsibility Field, which may become useful but are not accepted canon.
- External-signal PRs #108 and #110 are now merged, so proof/governance and continuity-boundary insights can inform the review.

---

## 10. Human Owner decision required

Human Owner must decide before any of the following:

- marking PR #106 ready-for-review;
- merging PR #106;
- syncing/rebasing PR #106 if that changes the review surface;
- splitting PR #106;
- accepting Human Review State as architecture;
- accepting Responsibility Field as architecture;
- treating JSON fixtures as schemas;
- treating event fixtures as event families;
- using demos for public positioning;
- treating external-model review as validation;
- treating this test pack as implementation guidance.

---

## 11. Current decision status

Current recommended decision state:

```text
Deferred / review required.
Keep Draft.
Do not merge.
Do not canonicalize.
Start source-file review when Human Owner is ready.
```

---

## Change Summary

Files changed:
- this Decision Card only.

What was added:
- structured Human Owner review frame for PR #106;
- scope breakdown of 19 files;
- risks and mitigation table;
- decision options;
- recommended next action.

What was strengthened:
- separation between experimental test pack and canon;
- protection against demo-to-architecture drift;
- protection against accidental schema and event-family adoption;
- Human Owner decision boundary.

Next best step:
- review this Decision Card, then decide whether to begin source-file review of PR #106 while keeping PR #106 Draft and unchanged.
