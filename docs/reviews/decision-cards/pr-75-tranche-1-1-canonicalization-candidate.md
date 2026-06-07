# Decision Card — PR #75 Tranche 1.1 Canonicalization Candidate Review

**Status:** Decision Card Draft  
**Canonical status:** Non-canonical  
**Related PR:** #75 — Draft: Tranche 1.1 canonicalization candidate package  
**Purpose:** Prepare Human Owner review of the Tranche 1.1 candidate package without moving PR #75 toward ready-for-review, merge, or canon.  

This Decision Card does not create RABA canon.

It does not modify PR #75.

It does not approve canonicalization, schemas, event families, implementation guidance, runtime enforcement, public positioning, pilot activity, vendor activity, partnership activity, or commercial commitments.

Final architectural approval remains with the Human Owner.

---

## 1. Decision question

What should happen next with PR #75, which contains the Tranche 1.1 canonicalization candidate package?

The decision is not whether PR #75 is canon.

The decision is how to review, split, park, revise, or stage PR #75 safely without accidentally converting candidate material into accepted RABA architecture.

---

## 2. Current PR #75 status

As last reviewed:

- PR #75 is open.
- PR #75 is Draft.
- PR #75 is not merged.
- PR #75 is not ready-for-review.
- PR #75 is not canonical.
- PR #75 has a technical/process blocker: the source branch was previously observed as diverged from `main`.
- PR #75 must not be marked ready, merged, or treated as accepted without separate Human Owner confirmation.

PR #75 explicitly states that it does not:

- create `docs/core/v1/`;
- adopt canon;
- adopt schemas;
- adopt event families;
- create implementation guidance;
- approve merge;
- approve runtime enforcement;
- change public positioning;
- authorize pilot, vendor, or commercial commitments.

---

## 3. Candidate scope under review

PR #75 prepares candidate material under:

```text
docs/core/candidates/tranche-1-1/
```

Candidate scope:

1. Consequential Action Definition
2. Action Classes
3. Action Boundary
4. Decision Log minimum governance elements
5. Responsibility Event Stream minimal stub

Required review sequence from PR #75:

```text
Consequential Action Definition
→ Action Classes
→ Action Boundary
→ Decision Log
→ Responsibility Event Stream stub
```

Deferred to Tranche 1.2 or later:

- Human Response Window
- Governed Bypass
- AI Speed and Responsibility Acceptance
- Boundary Patterns
- Implementation / Market-Facing Extensions

Deferred does not mean optional.

---

## 4. What is already confirmed

Only the following is confirmed:

- Human Owner allowed PR #75 to be opened as Draft only.
- The package may be reviewed as a candidate package.
- The material is not accepted canon.
- The material is not implementation guidance.
- The material is not runtime enforcement guidance.
- The material is not public positioning.
- The material is not a pilot, vendor, partner, or commercial commitment.

---

## 5. What is not confirmed

The following are not confirmed:

- Canonical adoption of any file in PR #75.
- Acceptance of any schema.
- Acceptance of any event family.
- Acceptance of any Responsibility Event Stream structure.
- Acceptance of any Decision Log minimum as final.
- Acceptance of any Action Class taxonomy as final.
- Acceptance of the Consequential Action Definition as final.
- Acceptance of the Action Boundary model as final.
- Creation of `docs/core/v1/`.
- Permission to mark PR #75 ready-for-review.
- Permission to merge PR #75.
- Permission to use PR #75 as public-facing proof of RABA maturity.

---

## 6. Review dimensions

### 6.1 Consequential Action Definition

Review questions:

- Does the definition correctly identify actions with real-world consequence?
- Does it distinguish advisory preparation from consequential action?
- Does it prevent AI from deciding its own consequence boundary?
- Does it preserve Human Owner / organizational responsibility?
- Does it avoid overbroad wording that would make every AI output consequential?
- Does it avoid underbroad wording that would miss indirect or delayed consequences?

Risk:

- If too broad, governance becomes unusable.
- If too narrow, responsibility gaps remain hidden.

Possible outcome:

- Accept as candidate language only.
- Revise before further review.
- Split into a separate focused PR.

---

### 6.2 Action Classes

Review questions:

- Are the proposed classes clear enough to support governance decisions?
- Are they stable enough to become a candidate taxonomy?
- Do they distinguish preparation, recommendation, execution, escalation, and refusal?
- Do they avoid creating hidden permission grants?
- Do they avoid being treated as runtime enforcement rules before architecture approval?

Risk:

- Taxonomy may be mistaken for accepted schema or implementation policy.

Possible outcome:

- Keep as candidate taxonomy.
- Convert to non-canonical review note.
- Split into smaller class-by-class review.

---

### 6.3 Action Boundary

Review questions:

- Does Action Boundary define where AI must stop, escalate, or wait?
- Does it distinguish model confidence from governance admissibility?
- Does it prevent AI from being the final judge of admissibility?
- Does it connect clearly to approval state and consequence class?
- Does it avoid prematurely hard-coding runtime enforcement behavior?

Risk:

- Strong Action Boundary language may be read as accepted RABA core architecture.

Possible outcome:

- Keep as candidate.
- Require Decision Card sub-review.
- Split into separate architecture review.

---

### 6.4 Decision Log minimum governance elements

Review questions:

- Are the proposed minimum elements sufficient for replayable responsibility?
- Do they record who had authority, who accepted responsibility, what policy applied, and what consequence boundary was crossed?
- Do they distinguish technical trace from governance decision?
- Do they avoid confusing evidence with approval validity?
- Are they compatible with external signal insights from DecisionAssure / VERITAS without adopting those systems?

Risk:

- Minimum elements may be mistaken for final schema.

Possible outcome:

- Keep as candidate minimum.
- Compare against external review inputs.
- Hold until Responsibility Event Stream review.

---

### 6.5 Responsibility Event Stream minimal stub

Review questions:

- Is the stub clearly marked as minimal and non-final?
- Does it avoid adopting event families prematurely?
- Does it avoid schema-finality language?
- Does it support future review without becoming implementation guidance?
- Does it preserve the distinction between event evidence and governance interpretation?

Risk:

- Highest schema-adoption risk inside PR #75.

Possible outcome:

- Keep as stub only.
- Move to review appendix.
- Split into separate schema-candidate PR later.
- Remove from Tranche 1.1 if too early.

---

## 7. Main risks

| Risk | Description | Severity | Mitigation |
|---|---|---|---|
| Premature canon | Candidate package is treated as accepted architecture | High | Keep Draft; require explicit Human Owner canonicalization decision |
| Schema adoption by accident | YAML candidate files are treated as final schemas | High | Label as candidate/stub; avoid `v1` path |
| Event-family adoption by accident | Responsibility Event Stream stub becomes accepted event model | High | Separate schema review later |
| Implementation guidance drift | Candidate concepts are read as deployable rules | High | Keep non-implementation boundary |
| Public/core confusion | External readers see `docs/core/candidates` as accepted core | Medium-high | Add/keep clear candidate labels |
| Branch divergence | PR branch is behind or conflicted with current `main` | Medium | Sync only after review decision; inspect conflicts carefully |
| Review overload | Too much candidate material in one PR | Medium-high | Consider splitting into smaller PRs |
| AI-prepared cognitive tunnel | AI summary frames the decision too strongly | Medium | Human Owner must review source files directly |

---

## 8. Decision options

### Option A — Keep PR #75 Draft and unchanged

Use when:

- Human Owner wants more time.
- External-signal PRs and test-pack PRs should be processed first.
- No architecture review capacity exists yet.

Consequence:

- Safest short-term option.
- Canonicalization remains blocked.

Recommendation:

- Safe default if no dedicated architecture review session is planned.

---

### Option B — Keep PR #75 Draft, but perform source-file review

Use when:

- Human Owner wants to understand the package without moving it.
- The team needs a structured review of each candidate file.

Consequence:

- Better understanding.
- No merge or canon movement.

Recommendation:

- Best near-term architecture-safe option.

---

### Option C — Split PR #75 into smaller review PRs

Use when:

- PR #75 is too large or too risky as a single candidate package.
- Some elements are more mature than others.

Possible split:

1. Consequential Action Definition
2. Action Classes
3. Action Boundary
4. Decision Log minimum elements
5. Responsibility Event Stream stub

Consequence:

- More control and cleaner Human Owner decisions.
- More PR management overhead.

Recommendation:

- Likely best before any future merge/canonicalization.

---

### Option D — Update/sync branch with current `main`, keep Draft

Use when:

- Human Owner wants technical freshness without readiness movement.

Consequence:

- Reveals conflicts or drift.
- Does not approve content.

Risk:

- Syncing may obscure original review state if not done carefully.

Recommendation:

- Do only after deciding whether to preserve #75 as-is or split it.

---

### Option E — Prepare staged canonicalization review

Use when:

- Human Owner wants to begin formal canonicalization review.

Consequence:

- Requires direct review of source candidate files.
- Requires explicit decisions per component.
- May later produce accepted canon, rejected material, or revised candidates.

Recommendation:

- Do not start until external-signal backlog and PR #106 disposition are under control.

---

### Option F — Close PR #75 without merge and preserve lessons elsewhere

Use when:

- The package is too early, too broad, or conflicts with current direction.

Consequence:

- Avoids premature canon.
- Requires deciding where to preserve valuable parts.

Recommendation:

- Not recommended yet; review first.

---

## 9. Ben recommendation

Recommended next action:

```text
Keep PR #75 Draft and unchanged.
Prepare source-file review of PR #75 in the required sequence.
Do not sync, mark ready, merge, split, or canonicalize yet.
```

Recommended review sequence:

```text
1. Consequential Action Definition
2. Action Classes
3. Action Boundary
4. Decision Log minimum governance elements
5. Responsibility Event Stream minimal stub
```

Reason:

- PR #75 is the highest-risk canonicalization candidate.
- It is too close to RABA core to process like an ordinary PR.
- Its YAML/stub files create schema-adoption risk.
- It should be reviewed component-by-component before any branch sync or split decision.

---

## 10. Human Owner decision required

Human Owner must decide before any of the following:

- marking PR #75 ready-for-review;
- merging PR #75;
- syncing/rebasing PR #75 if that changes the review surface;
- splitting PR #75;
- accepting any file from PR #75 as canon;
- creating `docs/core/v1/`;
- adopting any schema;
- adopting any event family;
- using PR #75 for public positioning;
- using PR #75 as implementation guidance.

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
- structured Human Owner review frame for PR #75;
- candidate scope breakdown;
- risks and mitigation table;
- decision options;
- recommended next action.

What was strengthened:
- separation between canonicalization candidate and canon;
- protection against schema-adoption drift;
- protection against event-family adoption drift;
- Human Owner decision boundary.

Next best step:
- review this Decision Card, then decide whether to begin source-file review of PR #75 while keeping PR #75 Draft and unchanged.
