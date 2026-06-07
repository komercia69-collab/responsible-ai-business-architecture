# PR #106 Refinement and Split Plan

**Status:** Refinement / split planning draft  
**Canonical status:** Non-canonical  
**Related PR:** #106 — Draft: Add Responsibility Boundary Test Pack v0.1  
**Related review summary:** `docs/reviews/pr-106-source-file-review-summary.md`  
**Related decision card:** `docs/reviews/decision-cards/pr-106-responsibility-boundary-test-pack.md`  
**Purpose:** Convert the completed source-file review of PR #106 into a safe, file-level refinement and split plan without changing, approving, syncing, merging, or canonicalizing PR #106.

This plan does not create RABA canon.

It does not approve PR #106.

It does not modify PR #106.

It does not authorize Ready-for-review, merge, split execution, public positioning, implementation, validation, adoption, pilot activity, partnership, vendor activity, or commercial commitments.

Final architectural approval remains with the Human Owner.

---

## 1. Executive summary

PR #106 contains a valuable experimental Responsibility Boundary Test Pack, but it is too large and too drift-prone to merge as a single PR.

The correct next move is not to merge #106.

The correct next move is to convert #106 into a controlled refinement track with smaller reviewable units.

Recommended current state:

```text
Keep PR #106 Draft and unchanged.
Do not sync/rebase PR #106 yet.
Do not mark PR #106 Ready.
Do not merge PR #106.
Do not canonicalize PR #106.
Use this plan to prepare smaller follow-up PRs after Human Owner confirmation.
```

---

## 2. Why #106 should not move as-is

PR #106 is high-value but high-risk because it combines several artifact types in one branch:

- HTML demos;
- test documentation;
- manual worksheets;
- completed example;
- JSON fixtures;
- event-like traces;
- routing policy fixture;
- external model prompt;
- adversarial synthesis;
- candidate backlog;
- experimental Responsibility Field model.

This creates multiple drift risks:

| Risk | Why it matters |
|---|---|
| Demo-to-architecture drift | Polished HTML may look like accepted UI/product/runtime design |
| Responsibility Field terminology drift | A test metaphor may become parallel RABA architecture vocabulary |
| Schema adoption drift | JSON fixtures and field lists may look like schemas/API contracts |
| Event-family drift | Event fixtures may look like Responsibility Event Stream adoption |
| PASS/FAIL conformance drift | Worksheets and scorecards may look like certification tests |
| Multi-AI validation drift | External model synthesis may look like validation or approval |
| Proof-language drift | “Proves” wording may blur proof/evidence/governance boundary |
| Policy adoption drift | Routing fixture may look like organizational policy architecture |

---

## 3. Required global wording hygiene

Before any #106-derived material is merged, apply these global guards wherever relevant.

### 3.1 Test vocabulary guard

Use:

```text
This document uses draft test vocabulary only.
The terms, fields, state labels, and outcomes are not accepted RABA architecture,
runtime states, schema values, API fields, Decision Log fields,
Responsibility Event Stream fields, or implementation requirements.
```

### 3.2 Fixture guard

Use:

```text
This fixture exists only to make the current draft test reproducible.
It is not an adopted schema, logging format, event family, API payload,
policy configuration, implementation reference, or conformance trace.
```

### 3.3 Demo guard

Use:

```text
This demo is an experimental test visualization only.
It is not accepted RABA architecture, UI guidance, runtime state model,
implementation reference, product prototype, or public positioning.
Stage labels, status labels, and Responsibility Field language are exploratory test vocabulary only.
```

### 3.4 Multi-AI review guard

Use:

```text
External model review is review input only.
Repeated model agreement is not validation, adoption, canonization,
implementation approval, or Human Owner approval.
```

### 3.5 Proof/evidence/governance guard

Prefer:

```text
provides technical evidence
```

instead of:

```text
proves
```

where proof wording could blur the line between evidence and governance interpretation.

Reference principle:

```text
Proof can support governance, but proof should not become governance.
```

---

## 4. Proposed split sequence

### Split 1 — Core test-pack documentation

**Goal:** Preserve the core test scenario and expected test logic with stronger non-canonical framing.

Candidate files:

- `docs/tests/responsibility-boundary-v0-1/README.md`
- `docs/tests/responsibility-boundary-v0-1/supplier-payment-scenario.md`
- `docs/tests/responsibility-boundary-v0-1/test-assumptions-and-dependencies.md`
- `docs/tests/responsibility-boundary-v0-1/expected-responsibility-outcome.md`

Required refinements:

1. Add Responsibility Field test-vocabulary guard in `README.md`.
2. Make supplier scenario explicitly fictional and simplified.
3. Replace proof-language in assumptions and expected outcome.
4. Clarify that Decision Log / Responsibility Event Stream references are conceptual review targets, not adopted schemas or event-family requirements.
5. Add scorecard warning: not conformance, certification, or validation.

Recommended status after refinement:

```text
Candidate for non-canonical merge after Human Owner review.
```

---

### Split 2 — Manual review materials

**Goal:** Preserve manual testing materials without creating conformance/certification signals.

Candidate files:

- `docs/tests/responsibility-boundary-v0-1/manual-test-walkthrough.md`
- `docs/tests/responsibility-boundary-v0-1/manual-test-answer-sheet.md`
- `docs/tests/responsibility-boundary-v0-1/completed-test-example.md`

Required refinements:

1. Add worksheet/conformance warning.
2. Make `BLOCK_ENTIRE_BATCH` explicitly fixture-specific.
3. Clarify different facts may produce different admissibility outcomes.
4. Reframe `PASS` as draft fixture reproducibility, not validation or certification.
5. Soften `proves` language where relevant.

Recommended status after refinement:

```text
Candidate for non-canonical merge only after Core test-pack documentation is settled.
```

---

### Split 3 — Human reauthorization and post-execution checks

**Goal:** Preserve the strongest governance checks while preventing accidental canonization.

Candidate files:

- `docs/tests/responsibility-boundary-v0-1/human-reauthorization-check.md`
- `docs/tests/responsibility-boundary-v0-1/post-execution-observation.md`

Possible exclusion or separate handling:

- `docs/tests/responsibility-boundary-v0-1/responsibility-field-model.md`

Reason:

`Responsibility Field` is useful, but it creates the highest terminology/schema drift risk.

Required refinements:

1. Add canonicalization candidate note for `Procedurally Supported Human Reauthorization`.
2. Clarify that `credible` enforceability is only a draft test label.
3. Replace “responsibility field remains active” with “responsibility observation remains active.”
4. Add observation-field warning: not schema, RES, incident-management format, or implementation requirement.
5. If `responsibility-field-model.md` is included, reframe as test metaphor only.

Recommended status after refinement:

```text
Human reauthorization and post-execution checks: candidate for non-canonical merge.
Responsibility Field model: hold for separate Decision Card or working-note track.
```

---

### Split 4 — Fixtures

**Goal:** Preserve test fixtures while preventing schema, event-family, API, or RES adoption.

Candidate files:

- `docs/tests/responsibility-boundary-v0-1/supplier-payment-input.json`
- `docs/tests/responsibility-boundary-v0-1/supplier-payment-events.json`
- `docs/tests/responsibility-boundary-v0-1/supplier-payment-routing-policy-fixture.md`

Required refinements:

1. Add fixture warning in the surrounding documentation.
2. Consider wrapping `supplier-payment-events.json` in a top-level metadata object:

```json
{
  "test_status": "non-canonical",
  "fixture_type": "draft_event_fixture_not_schema",
  "events": []
}
```

3. Clarify event names are draft fixture labels only, not RES event types.
4. Clarify `routing_policy_id` is a fixture identifier only.
5. Replace any verification-like values that imply production proof, where appropriate.

Recommended status after refinement:

```text
Hold until anti-schema and anti-event-family language is strong enough.
Do not merge fixtures before documentation guards are merged.
```

---

### Split 5 — External review material and candidate backlog

**Goal:** Preserve external-model review structure without validation or roadmap drift.

Candidate files:

- `docs/tests/responsibility-boundary-v0-1/external-model-review-prompt.md`
- `docs/tests/responsibility-boundary-v0-1/adversarial-review-synthesis.md`
- `docs/tests/responsibility-boundary-v0-1/candidate-test-scenarios.md`

Required refinements:

1. Replace “RABA currently expects” with “For this non-canonical test scenario, the draft expected path is.”
2. Replace “understanding of...” with procedural-support wording.
3. Replace `Accepted for Test Pack v0.1 refinement` with `Incorporated into Draft Test Pack v0.1`.
4. Replace `Accepted for future test construction` with `Preserved as candidate inputs for future test construction`.
5. Clarify priority means review priority only, not implementation roadmap.
6. Add anti-schema warning next to field lists.

Recommended status after refinement:

```text
Candidate for non-canonical merge after wording hygiene.
```

---

### Split 6 — Demos

**Goal:** Keep demo material only if it is clearly framed as experimental visualization.

Candidate files:

- `demo/responsibility-boundary-v0-2.html`

Recommended treatment for v0.1:

- `demo/responsibility-boundary-v0-1.html` should be archived, parked, or excluded from the initial merge path unless Human Owner wants a historical prototype record.

Required refinements for v0.2:

1. Add strong demo guard.
2. Clarify `Responsibility Field` is exploratory test vocabulary only.
3. Clarify stage/status labels are not canonical runtime states.
4. Avoid product/readiness/public positioning language.
5. Keep `No real execution` visible.

Recommended status after refinement:

```text
High-risk merge candidate.
Merge only after documentation guards are in place and Human Owner confirms demo should be visible in main.
```

---

## 5. Recommended execution order

Recommended order after Human Owner confirmation:

```text
1. Create wording-hygiene branch for Core test-pack documentation.
2. Review Core documentation PR.
3. Merge Core documentation only if safe.
4. Create Manual review materials PR.
5. Create Human reauthorization / post-execution checks PR.
6. Hold Responsibility Field model for separate Decision Card.
7. Create External review / candidate backlog PR.
8. Create Fixture PR only after schema guards are settled.
9. Consider Demo v0.2 PR last.
10. Park or archive demo v0.1 unless explicitly needed.
```

Do not begin this execution sequence without Human Owner confirmation.

---

## 6. Files to refine first

Highest-priority wording refinements:

| File | First refinement |
|---|---|
| `README.md` | Add Responsibility Field test-vocabulary guard |
| `responsibility-field-model.md` | Reframe as test metaphor only or hold separately |
| `supplier-payment-events.json` | Add anti-RES/event-family boundary via surrounding docs or metadata wrapper |
| `manual-test-answer-sheet.md` | Add anti-conformance / anti-schema warning |
| `expected-responsibility-outcome.md` | Replace proof-language and add scorecard warning |
| `external-model-review-prompt.md` | Replace “RABA currently expects” language |
| `adversarial-review-synthesis.md` | Replace “Accepted” headings |
| `demo/responsibility-boundary-v0-2.html` | Add stronger non-product / non-runtime warning |

---

## 7. Parking candidates

The following should not be moved forward automatically:

### `responsibility-field-model.md`

Reason:

- valuable, but highest terminology/schema drift risk;
- may require separate Decision Card;
- could become a future working note or canonicalization candidate only after Human Owner review.

### `demo/responsibility-boundary-v0-1.html`

Reason:

- useful early prototype;
- weaker than v0.2;
- duplicates demo path;
- increases maintenance and interpretation risk.

### JSON/event fixtures

Reason:

- highest schema/event-family adoption risk;
- should wait until anti-schema guards are settled.

---

## 8. Canonicalization candidates to track separately

The following ideas should be tracked as candidates only:

### Procedurally Supported Human Reauthorization

Status:

```text
Canonicalization candidate.
Not canon.
Requires Human Owner decision.
```

### Post-execution responsibility observation

Status:

```text
Candidate concept.
Not implementation guidance.
```

### Missing dependency must not silently produce ALLOW

Status:

```text
Candidate governance principle.
Not accepted runtime rule.
```

### Scenario-specific admissibility outcomes

Status:

```text
Candidate test calibration principle.
Not accepted conformance rule.
```

### Responsibility Field

Status:

```text
High-risk test metaphor / candidate concept.
Not accepted RABA architecture.
Requires separate review before reuse.
```

---

## 9. Human Owner decisions required

Human Owner confirmation is required before:

- applying any refinements to PR #106;
- syncing/rebasing PR #106;
- closing PR #106;
- splitting PR #106;
- opening replacement PRs based on #106 content;
- merging any #106-derived material;
- parking or removing demo v0.1;
- holding or extracting `responsibility-field-model.md`;
- changing JSON fixture structure;
- exposing demo v0.2 in main;
- treating any candidate concept as canon.

---

## 10. Recommended next decision

Recommended Human Owner decision:

```text
Approve creation of a first wording-hygiene branch for Split 1 only:
Core test-pack documentation.
Keep PR #106 Draft and unchanged until the replacement path is proven safe.
```

The first replacement branch should touch only:

```text
docs/tests/responsibility-boundary-v0-1/README.md
docs/tests/responsibility-boundary-v0-1/supplier-payment-scenario.md
docs/tests/responsibility-boundary-v0-1/test-assumptions-and-dependencies.md
docs/tests/responsibility-boundary-v0-1/expected-responsibility-outcome.md
```

But this should not be executed until the Human Owner explicitly confirms.

---

## Change Summary

Files changed:

- this refinement / split planning document only.

What was added:

- safe split sequence for PR #106;
- global wording hygiene rules;
- file-group refinement plan;
- recommended execution order;
- parking candidates;
- canonicalization candidates;
- Human Owner decision queue.

What was strengthened:

- control over PR #106 movement;
- protection against accidental canonization;
- separation between review, refinement, split, and approval;
- file-level planning discipline.

Next best step:

- review this planning artifact;
- if safe, mark its PR Ready and merge as non-canonical planning material;
- only then request Human Owner confirmation for Split 1 execution.
