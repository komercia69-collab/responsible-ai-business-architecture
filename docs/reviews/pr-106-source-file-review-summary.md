# PR #106 Source-File Review Summary

**Status:** Source-file review summary draft  
**Canonical status:** Non-canonical  
**Related PR:** #106 — Draft: Add Responsibility Boundary Test Pack v0.1  
**Related Decision Card:** `docs/reviews/decision-cards/pr-106-responsibility-boundary-test-pack.md`  
**Purpose:** Preserve consolidated review findings from source-file review of PR #106 without changing, approving, merging, syncing, splitting, or canonicalizing PR #106.

This document does not create RABA canon.

It does not approve PR #106.

It does not modify PR #106.

It does not approve Human Review State, Responsibility Field, JSON fixtures, event fixtures, Decision Log format, Responsibility Event Stream format, demo behavior, UI guidance, runtime states, implementation guidance, conformance tests, public positioning, validation, adoption, pilot activity, partnership, vendor activity, or commercial commitments.

Final architectural approval remains with the Human Owner.

---

## 1. Executive summary

PR #106 is a valuable experimental test pack, but it is not ready for Ready-for-review or merge in its current form.

The test pack is conceptually strong because it tests a core responsibility-boundary problem:

```text
A human approved an action in one reference frame.
The AI workflow attempts execution in a changed reference frame.
```

The pack successfully explores:

- approval bound to subject, scope, validity window, and reference frame;
- separation of technical evidence from governance interpretation;
- materiality assessment before admissibility decision;
- AI not acting as final materiality, routing, or admissibility judge;
- meaningful human reauthorization beyond checkbox approval;
- post-execution observation after technical success;
- missing-dependency behavior that must not silently produce `ALLOW`.

However, PR #106 carries high drift risk because it includes polished demos, schema-like JSON fixtures, event-like traces, PASS/FAIL scorecards, and a strong but non-canonical `Responsibility Field` vocabulary.

Recommended current state:

```text
Keep PR #106 Draft and unchanged.
Do not sync/rebase yet.
Do not mark Ready.
Do not merge.
Do not canonize.
Prepare a split/refinement plan before any future movement.
```

---

## 2. Review scope

The source-file review covered 19 files from PR #106:

### Demo files

1. `demo/responsibility-boundary-v0-1.html`
2. `demo/responsibility-boundary-v0-2.html`

### Test pack documentation

3. `docs/tests/responsibility-boundary-v0-1/README.md`
4. `docs/tests/responsibility-boundary-v0-1/manual-test-walkthrough.md`
5. `docs/tests/responsibility-boundary-v0-1/manual-test-answer-sheet.md`
6. `docs/tests/responsibility-boundary-v0-1/completed-test-example.md`
7. `docs/tests/responsibility-boundary-v0-1/demo-v0-2-test-findings.md`

### Review and synthesis material

8. `docs/tests/responsibility-boundary-v0-1/adversarial-review-synthesis.md`
9. `docs/tests/responsibility-boundary-v0-1/external-model-review-prompt.md`

### Scenario, assumptions, and expected outcome

10. `docs/tests/responsibility-boundary-v0-1/test-assumptions-and-dependencies.md`
11. `docs/tests/responsibility-boundary-v0-1/candidate-test-scenarios.md`
12. `docs/tests/responsibility-boundary-v0-1/supplier-payment-scenario.md`
13. `docs/tests/responsibility-boundary-v0-1/expected-responsibility-outcome.md`

### Governance checks and observations

14. `docs/tests/responsibility-boundary-v0-1/human-reauthorization-check.md`
15. `docs/tests/responsibility-boundary-v0-1/post-execution-observation.md`
16. `docs/tests/responsibility-boundary-v0-1/responsibility-field-model.md`

### Fixtures

17. `docs/tests/responsibility-boundary-v0-1/supplier-payment-input.json`
18. `docs/tests/responsibility-boundary-v0-1/supplier-payment-events.json`
19. `docs/tests/responsibility-boundary-v0-1/supplier-payment-routing-policy-fixture.md`

---

## 3. Strongest findings

### 3.1 Strong test scenario

The supplier payment scenario is a strong responsibility-boundary test because it creates a concrete S0-to-S1 shift:

```text
S0 approved
→ supplier/payment reference frame changes
→ AI treats change as normal refresh
→ execution attempt occurs under S1
```

This tests whether original approval remains admissible after the approved reference frame changes.

### 3.2 Good evidence/governance separation

Several files correctly separate:

```text
technical evidence
→ materiality assessment
→ governance responsibility state
→ admissibility decision
→ post-execution observation
```

This is consistent with the external signal captured in `docs/external-signals/veritas-evidence-package-governance-boundary.md`:

```text
Proof can support governance, but proof should not become governance.
```

### 3.3 Strong anti-checkbox human review logic

The test pack strongly rejects checkbox-style human approval.

The strongest concept is:

```text
Procedurally Supported Human Reauthorization
```

This means that a human decision is meaningful only when the responsible person receives material diff, evidence, consequences, duties, options, authority, time, and a real ability to refuse or escalate.

This is a strong canonicalization candidate, but it is not canon.

### 3.4 Strong missing-dependency logic

The test pack correctly states that missing evidence, policy, identity, owner, or route dependencies must be visible and recorded.

A missing dependency must not silently produce `ALLOW` for a consequential action.

### 3.5 Strong post-execution observation logic

The test pack correctly states that responsibility does not end when an executor returns technical `success`.

It requires comparison of:

```text
approved snapshot
vs
execution snapshot
vs
actual observed outcome
```

This is a strong RABA direction, but not accepted implementation guidance.

---

## 4. Main risks

| Risk | Description | Severity | Current mitigation | Required refinement |
|---|---|---:|---|---|
| Demo-to-architecture drift | Polished demos may be treated as accepted UI or product prototype | High | Non-canonical labels exist | Add stronger non-product / non-runtime warnings |
| Responsibility Field terminology drift | `Responsibility Field` may become a parallel architecture vocabulary | High | Some test-only labels exist | Reframe as test metaphor only; avoid “RABA maintains...” |
| Schema adoption drift | JSON fixtures and field lists look like schemas | High | Some non-canonical markers exist | Add explicit anti-schema warnings |
| Event-family drift | `supplier-payment-events.json` looks like RES event-family adoption | High | External docs say non-canonical | Add strongest anti-RES/event-family warning |
| Runtime-state drift | `ALLOW`, `BLOCK_ENTIRE_BATCH`, `REQUEST_EVIDENCE`, etc. look like enums | High | Some documents say test vocabulary | Add explicit “not canonical runtime states” language |
| PASS/FAIL conformance drift | Scorecards and worksheets can look like certification/conformance tests | Medium-high | Some scenario-specific wording exists | Add “not conformance/certification” warning |
| Multi-AI validation drift | Synthesis uses external model review recommendations | High | Boundary says multi-AI agreement is not approval | Replace “Accepted” with “Incorporated” / “Preserved” |
| Proof-language drift | Several files use “proves” language | Medium | Some files distinguish evidence and interpretation | Replace with “provides technical evidence” where appropriate |
| Implementation capability drift | Assumptions may be read as existing capabilities | Medium | Test assumptions doc limits scope | Keep explicit “assumed, not implemented” framing |
| Policy adoption drift | Routing fixture may look like real policy architecture | Medium | Fixture boundary exists | Clarify policy ID is fixture-only |

---

## 5. File-level findings

### 5.1 `README.md`

Strong entry point.

Finding:

- test scenario is valuable;
- Human Review State is correctly marked as test vocabulary;
- Responsibility Field needs the same explicit limitation.

Required refinement before future merge:

```text
Responsibility Field is experimental test vocabulary only and is not accepted RABA architecture.
```

---

### 5.2 `demo/responsibility-boundary-v0-2.html`

Strong working visualization.

Finding:

- useful interactive test prototype;
- strong line: human review is not checkbox;
- risk: demo looks like accepted UI/product/runtime model.

Required refinement:

```text
This demo is an experimental test visualization only.
It is not accepted RABA architecture, UI guidance, runtime state model,
implementation reference, product prototype, or public positioning.
Stage labels, status labels, and Responsibility Field language are exploratory test vocabulary only.
```

---

### 5.3 `manual-test-walkthrough.md`

Strong manual review guide.

Finding:

- good sequence from approval to evidence to materiality to admissibility to logging;
- strong separation of hash/evidence from materiality;
- `BLOCK_ENTIRE_BATCH` needs fixture-specific wording.

Required refinement:

```text
Expected current-scenario decision for this fixture only: BLOCK_ENTIRE_BATCH.
Different facts, policies, scopes, reversibility, or authority conditions may produce a different admissibility outcome.
```

Also add:

```text
Decision Log / Responsibility Event Stream references are conceptual review targets here, not adopted schemas or event-family requirements.
```

---

### 5.4 `manual-test-answer-sheet.md`

Useful worksheet.

Finding:

- strong manual review worksheet;
- risk: looks like official schema or conformance form.

Required refinement:

```text
This worksheet is a draft manual-test aid.
It is not an adopted RABA schema, Decision Log format,
Responsibility Event Stream format, conformance test,
certification form, or implementation requirement.
```

---

### 5.5 `completed-test-example.md`

Useful completed example.

Finding:

- scenario-specific PASS is useful;
- `PASS` and `proves` wording may suggest validation.

Required refinement:

```text
PASS within this draft fixture only — the current expected outcome is reproducible from the supplied test files.
This is not RABA validation, certification, conformance evidence, or implementation evidence.
```

Replace “proves” with “demonstrates” or “supports as a draft test finding” where applicable.

---

### 5.6 `demo-v0-2-test-findings.md`

Useful DOM/manual findings.

Finding:

- good governance boundary checklist;
- risk: “no canon-implying language” too strong;
- risk: readiness wording ambiguous.

Required refinement:

```text
This review did not identify obvious canon-implying language.
```

and:

```text
This note does not authorize merge or readiness-for-review.
```

---

### 5.7 `responsibility-field-model.md`

Valuable but highest terminology/schema risk.

Finding:

- strong test model;
- central `Responsibility Field` language risks architecture adoption;
- field names and outcomes look schema-like.

Required refinement:

Replace:

```text
RABA maintains a persistent responsibility field...
```

with:

```text
This test models responsibility as a persistent field...
```

Add:

```text
Field names in this document are fixture/test vocabulary only.
They are not Decision Log fields, Responsibility Event Stream fields,
schema values, API fields, or implementation requirements.
```

Add:

```text
Working outcomes are exploratory test labels, not canonical RABA runtime states.
```

---

### 5.8 `supplier-payment-scenario.md`

Strong fictional scenario.

Finding:

- good S0/S1 boundary;
- minor risk: reads like implementation use-case.

Required refinement:

```text
In this fictional test scenario, an AI agent is assumed to be used inside a company...
```

Add:

```text
The scenario is intentionally simplified and should not be read as recommended supplier-payment process design.
```

---

### 5.9 `supplier-payment-input.json`

Useful S0 input fixture.

Finding:

- includes `test_status: non-canonical`;
- still looks like schema/API payload.

Required refinement:

- add explicit fixture-only warning in README or fixture index;
- do not treat labels such as `APPROVAL_VALID`, `ALLOW_WITHIN_UNCHANGED_SCOPE`, `credible`, or `verified` as accepted values.

Possible safer fixture wording:

```json
"identity_and_role_binding": "represented_as_verified_for_test"
```

---

### 5.10 `supplier-payment-events.json`

Useful but highest event-family drift risk.

Finding:

- good sequence from evidence to materiality to admissibility;
- no visible top-level fixture boundary because file is an array;
- event names look like adopted RES event types.

Required refinement:

```text
Event names in supplier-payment-events.json are draft fixture labels only.
They are not Responsibility Event Stream event types,
not an adopted event family,
not a logging schema,
not an implementation payload,
and not a conformance trace.
```

Possible structural refinement:

```json
{
  "test_status": "non-canonical",
  "fixture_type": "draft_event_fixture_not_schema",
  "events": []
}
```

Only do this after Human Owner confirmation, because it changes the fixture shape.

---

### 5.11 `expected-responsibility-outcome.md`

Strong expected outcome document.

Finding:

- good scenario-specific `BLOCK_ENTIRE_BATCH` boundary;
- strong human reauthorization boundary;
- risk: proof-language, PASS/FAIL scorecard, Decision Log / RES wording.

Required refinement:

Replace:

```text
A hash mismatch proves that the state changed.
```

with:

```text
A hash mismatch provides technical evidence that the captured state changed.
```

Add:

```text
This scorecard is a draft fixture-specific evaluation aid, not a RABA conformance test or certification checklist.
```

---

### 5.12 `human-reauthorization-check.md`

Very strong anti-checkbox check.

Finding:

- strongest candidate concept in #106;
- `Procedurally Supported Human Reauthorization` may become a canonicalization candidate;
- `credible` enforceability needs guard.

Required refinement:

```text
`credible` is a draft test label only and does not assert legal enforceability in any real organization.
```

Canonicalization note:

```text
Procedurally Supported Human Reauthorization is a canonicalization candidate, not accepted canon.
```

---

### 5.13 `post-execution-observation.md`

Strong post-execution layer.

Finding:

- protects against “technical success = responsible completion”;
- observation fields look schema-like;
- Responsibility Field wording should be softened.

Required refinement:

Replace:

```text
The responsibility field therefore remains active after execution.
```

with:

```text
For this test, responsibility observation remains active after execution.
```

Add:

```text
The observation fields in this document are draft test labels only, not adopted schema fields, RES fields, incident-management fields, or implementation requirements.
```

---

### 5.14 `test-assumptions-and-dependencies.md`

Strong dependency-boundary document.

Finding:

- clearly distinguishes assumed dependencies from implemented capabilities;
- strong missing-dependency behavior;
- proof-language and outcome labels need guard.

Required refinement:

Replace:

```text
A hash mismatch proves that the captured states differ.
```

with:

```text
A hash mismatch provides technical evidence that the captured states differ.
```

Add:

```text
These working test outcomes are draft test labels only, not canonical RABA runtime states, schema values, or implementation requirements.
```

---

### 5.15 `supplier-payment-routing-policy-fixture.md`

Strong routing fixture.

Finding:

- clear AI boundary;
- good fallback logic;
- policy ID and “route should preserve” need scenario-specific guard.

Required refinement:

```text
The routing_policy_id is a draft fixture identifier only.
It is not an adopted RABA policy identifier, organizational policy identifier,
or implementation configuration key.
```

Replace:

```text
The route should preserve...
```

with:

```text
For this fixture, the route should preserve...
```

---

### 5.16 `candidate-test-scenarios.md`

Useful future test backlog.

Finding:

- good backlog of failure modes;
- risk: “Priority candidates” looks like approved roadmap;
- “Expected result” can look like accepted outcome.

Required refinement:

```text
Priority here means review priority only. It does not authorize implementation, merge, public positioning, or canonicalization.
```

Consider replacing:

```text
Expected result
```

with:

```text
Candidate expected result for review
```

---

### 5.17 `adversarial-review-synthesis.md`

Useful synthesis, but wording risk.

Finding:

- strong boundary: multi-AI agreement is not approval;
- “Accepted” headings can be mistaken for Human Owner acceptance;
- field lists look like schema adoption.

Required refinement:

Replace:

```text
Accepted for Test Pack v0.1 refinement
```

with:

```text
Incorporated into Draft Test Pack v0.1
```

Replace:

```text
Accepted for future test construction
```

with:

```text
Preserved as candidate inputs for future test construction
```

Replace:

```text
current implementation choices
```

with:

```text
current draft test-pack choices
```

---

### 5.18 `external-model-review-prompt.md`

Strong adversarial review prompt.

Finding:

- does not ask for validation;
- asks models to be critical;
- risk: “RABA currently expects” sounds canonical;
- “understanding” language conflicts with “cannot prove internal understanding.”

Required refinement:

Replace:

```text
RABA currently expects:
```

with:

```text
For this non-canonical test scenario, the draft expected path is:
```

Replace “understanding of...” phrasing with procedural-support language:

```text
The test asks whether the system can support, but not prove, informed human reauthorization by presenting...
```

Add:

```text
Responsibility Field is draft test vocabulary only and is not accepted RABA architecture.
```

---

### 5.19 `demo/responsibility-boundary-v0-1.html`

Useful early prototype, but weaker than v0.2.

Finding:

- contains useful non-material and missing-dependency scenarios;
- weaker boundary language than v0.2;
- may be unnecessary if v0.2 becomes the working demo;
- contains `Responsibility Field`, proof-language, and runtime-label risks.

Recommended future treatment:

```text
Archive / park as earlier demo version, or exclude from future split if v0.2 remains active.
```

If retained, add stronger warnings around:

- Responsibility Field as test metaphor only;
- runtime labels as exploratory only;
- proof/governance separation.

---

## 6. Canonicalization candidates identified

The source-file review identified several concepts that may be worth future review, but are not accepted canon:

### Candidate A — Procedurally Supported Human Reauthorization

Potential formula:

```text
Procedurally Supported Human Reauthorization
=
Material diff presented
+
Relevant evidence accessible
+
Consequences and duties presented
+
Real authority and decision options
+
Sufficient opportunity to refuse or escalate
+
Traceable acknowledgement bound to the current state
```

Status:

```text
Canonicalization candidate only.
Not accepted canon.
Requires separate Human Owner review.
```

### Candidate B — Post-execution responsibility observation

Core idea:

```text
Technical success does not end responsibility observation.
```

Status:

```text
Candidate concept only.
Not accepted implementation guidance.
```

### Candidate C — Missing dependency must not silently produce ALLOW

Core idea:

```text
Missing evidence, policy, owner, identity, or route dependency must be visible and recorded.
It must not silently permit consequential execution.
```

Status:

```text
Candidate concept only.
Not accepted runtime rule.
```

### Candidate D — Scenario-specific admissibility outcomes

Core idea:

```text
BLOCK_ENTIRE_BATCH is scenario-specific.
Other scenarios may require partial block, allow-within-unchanged-scope, request evidence, owner resolution, or escalation.
```

Status:

```text
Candidate test calibration principle only.
```

---

## 7. Recommended split strategy

Do not merge #106 as one 19-file PR without refinement.

Recommended future split:

### Split 1 — Review summary and test-pack hygiene plan

Purpose:

- preserve findings;
- define exact wording hygiene changes;
- no test-pack adoption.

### Split 2 — Core documentation only

Candidate files after refinement:

- `README.md`
- `supplier-payment-scenario.md`
- `test-assumptions-and-dependencies.md`
- `expected-responsibility-outcome.md`

Risk:

- lower than demos/JSON fixtures;
- still requires anti-conformance and anti-schema warnings.

### Split 3 — Manual test materials

Candidate files after refinement:

- `manual-test-walkthrough.md`
- `manual-test-answer-sheet.md`
- `completed-test-example.md`

Risk:

- worksheet/conformance drift;
- needs warning that materials are not certification/conformance forms.

### Split 4 — Governance checks

Candidate files after refinement:

- `human-reauthorization-check.md`
- `post-execution-observation.md`
- `responsibility-field-model.md` only if Responsibility Field wording is softened.

Risk:

- highest canonicalization-candidate pressure;
- may need separate Decision Card.

### Split 5 — Fixtures

Candidate files after refinement:

- `supplier-payment-input.json`
- `supplier-payment-events.json`
- `supplier-payment-routing-policy-fixture.md`

Risk:

- high schema/event-family drift;
- should probably be held until anti-schema boundary is stronger.

### Split 6 — Demos

Candidate treatment:

- keep v0.2 as experimental test visualization only after stronger warning;
- archive or park v0.1 unless there is a clear reason to preserve it.

Risk:

- demo-to-product and demo-to-architecture drift.

### Split 7 — External review material

Candidate files after refinement:

- `external-model-review-prompt.md`
- `adversarial-review-synthesis.md`
- `candidate-test-scenarios.md`

Risk:

- multi-AI validation drift;
- roadmap drift.

---

## 8. Recommended immediate next step

Recommended next action:

```text
Create a refinement plan for PR #106.
Do not modify PR #106 yet.
Do not sync/rebase #106 yet.
Do not mark Ready.
Do not merge.
```

The refinement plan should convert this review into precise file-level changes and propose whether #106 should be split, parked, or replaced by smaller PRs.

---

## 9. Human Owner decisions needed

Human Owner confirmation is required before any of the following:

- applying wording changes to #106;
- syncing/rebasing #106;
- marking #106 Ready for review;
- merging #106;
- splitting #106;
- archiving or removing demo v0.1;
- treating Responsibility Field as more than test vocabulary;
- treating Human Review State as more than test vocabulary;
- treating Procedurally Supported Human Reauthorization as canon;
- treating JSON fixtures as schema material;
- treating event fixtures as RES/event-family material;
- using demos in public positioning;
- using external model reviews as validation.

---

## 10. Current decision status

```text
PR #106 status: Draft / unchanged / not ready / not mergeable as reviewed.
Review status: Source-file review complete.
Recommended status: Keep Draft; prepare refinement/split plan.
Canonical status: No canon created.
```

---

## Change Summary

Files changed:

- this review summary only.

What was added:

- consolidated findings from source-file review of all 19 files in PR #106;
- risk register;
- file-level refinement recommendations;
- canonicalization candidates;
- split strategy;
- Human Owner decision queue.

What was strengthened:

- protection against demo-to-architecture drift;
- protection against Responsibility Field terminology drift;
- protection against schema/event-family adoption;
- protection against PASS/FAIL conformance drift;
- protection against multi-AI validation drift;
- Human Owner decision boundary.

Next best step:

- create a PR for this review summary as a non-canonical review artifact;
- after Human Owner confirmation, prepare a PR #106 refinement/split plan.
