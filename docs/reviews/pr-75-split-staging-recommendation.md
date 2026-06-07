# PR #75 Split / Staging Recommendation

**Status:** Review Recommendation  
**Canonical status:** Non-canonical  
**Related PR:** #75 — Draft: Tranche 1.1 canonicalization candidate package  
**Related review findings:** `docs/reviews/pr-75-source-file-review-findings.md`  
**Related Decision Card:** `docs/reviews/decision-cards/pr-75-tranche-1-1-canonicalization-candidate.md`  
**Purpose:** Recommend a safe staging path for PR #75 without modifying PR #75 or moving it toward ready-for-review, merge, or canon.  

This document does not create RABA canon.

It does not modify PR #75.

It does not approve canonicalization, schemas, event families, implementation guidance, runtime enforcement, public positioning, pilot activity, vendor activity, partnership activity, or commercial commitments.

Final architectural approval remains with the Human Owner.

---

## 1. Executive recommendation

PR #75 should not be merged as one large canonicalization candidate package.

Recommended posture:

```text
Keep PR #75 Draft and unchanged as the original candidate package.
Use the source-file review findings to create smaller staged review tracks.
Do not sync/rebase PR #75 until the Human Owner decides whether to preserve, split, or supersede it.
```

Reason:

PR #75 contains strong candidate material, but the package is too close to core architecture and too schema-adjacent to process as a single ordinary PR.

The safest path is staged review, not immediate merge.

---

## 2. Why split / staging is needed

The source-file review found that the material is promising, but different files have different risk profiles:

| Area | Maturity | Risk |
|---|---|---|
| Consequential Action Definition | Strong candidate | Needs broader boundary test |
| Action Classes | Strong candidate taxonomy | YAML may be mistaken for schema |
| Action Boundary | Very strong candidate | Needs decision-shaping / authority-scope coverage |
| Decision Log minimum elements | Very strong candidate | May be treated as final too early |
| Responsibility Event Stream stub | Useful but highest-risk | Event-family / schema adoption risk |

A single merge would make it harder to preserve these distinctions.

---

## 3. Recommended staging model

### Stage 0 — Preserve PR #75 as Draft archive

Action:

```text
Keep PR #75 open as Draft.
Do not mark ready.
Do not merge.
Do not sync/rebase yet.
```

Purpose:

- Preserve the original Tranche 1.1 candidate package.
- Keep review history visible.
- Avoid losing context while staged tracks are prepared.

Human Owner decision required before any change.

---

### Stage 1 — Conceptual boundary track

Candidate files / concepts:

- Consequential Action Definition
- Action Boundary

Purpose:

Create a focused review track for the conceptual boundary of consequentiality and admissibility.

Key questions:

- When does AI-supported activity become consequential?
- When does responsibility need to become explicit?
- What may AI detect?
- What must AI not decide?
- How should human decision shaping be handled?
- How should authority scope change be handled?

Recommended output:

```text
Non-canonical review note first.
Canonicalization review only after Human Owner approval.
```

Risk:

- If merged too strongly, it may be read as accepted core boundary canon.

---

### Stage 2 — Action classification track

Candidate files / concepts:

- Action Classes taxonomy

Purpose:

Review action classes separately from the rest of the package.

Key questions:

- Which classes actually change Decision Log requirement, escalation path, or confirmation requirement?
- Should `HUMAN_DECISION_SHAPING` be added?
- Should `AUTHORITY_SCOPE_CHANGE` be added?
- Should any classes be merged?
- Should YAML remain in candidate form, or be converted to Markdown review format until schema review is ready?

Recommended output:

```text
Candidate taxonomy review note.
Avoid schema-looking adoption until later.
```

Risk:

- YAML format may be mistaken for machine-readable schema adoption.

Mitigation:

- Keep `candidate` naming.
- Add stronger warning if copied to a new PR.
- Consider Markdown table representation before final schema review.

---

### Stage 3 — Decision Log governance track

Candidate files / concepts:

- Decision Log minimum governance elements

Purpose:

Review Decision Log as a governance record, not a generic audit log.

Key questions:

- What is the minimum required for responsibility acceptance?
- Is `named human` sufficient, or should it be `named accountable human or explicitly authorized role/function`?
- Should `decision outcome` be required?
- Should `authority / policy reference` be required?
- How should Decision Log link to evidence without becoming an audit log?
- How should Decision Log link to Responsibility Event Stream without becoming a technical trace?

Recommended output:

```text
Non-canonical Decision Log minimum review note.
Potential later candidate for canon, but only after Human Owner review.
```

Risk:

- Strong language may be treated as final governance requirement too early.

---

### Stage 4 — Responsibility Event Stream track

Candidate files / concepts:

- Responsibility Event Stream minimal stub

Purpose:

Separate the highest-risk schema/event-family material from the conceptual boundary and Decision Log review.

Key questions:

- Should `boundary_transition_event` remain the candidate root event type?
- Is the current stub too minimal for replayable responsibility?
- Which fields are required before any canonical candidate schema?
- How should RES avoid becoming the governance decision-maker?
- How should RES relate to the VERITAS / Takeshi proof-governance boundary?

Recommended output:

```text
Keep as schema-candidate research only.
Do not move toward canon until proof/governance boundary is reviewed.
```

Risk:

- Highest risk of accidental schema adoption or event-family adoption.

Mitigation:

- Keep this track separate.
- Do not place under `docs/core/v1/`.
- Avoid implementation examples until architecture review is complete.

---

## 4. Recommended future PR structure

If the Human Owner decides to split PR #75 later, use this structure:

| Future track | Suggested PR type | Candidate content | Risk | Recommended status |
|---|---|---|---|---|
| PR-75A | Conceptual boundary review | Consequential Action Definition + Action Boundary | Medium-high | Draft review note |
| PR-75B | Action classification review | Action Classes taxonomy | High if YAML | Draft / candidate only |
| PR-75C | Decision Log minimum review | Decision Log governance elements | Medium-high | Draft review note |
| PR-75D | RES stub review | Responsibility Event Stream stub | Highest | Research / candidate only |

Do not create these PRs automatically.

Human Owner confirmation is required before splitting.

---

## 5. Recommended sequencing

Recommended sequence:

```text
1. Complete PR #108 / PR #110 external-signal boundary handling.
2. Prepare PR #106 Decision Card.
3. Keep PR #75 Draft and unchanged.
4. Decide whether to split PR #75 into staged review tracks.
5. If approved, create Stage 1 conceptual boundary review first.
6. Delay YAML/schema-adjacent tracks until conceptual boundary and Decision Log review are clearer.
```

Reason:

- PR #108 and PR #110 may affect language around external signals, proof/governance boundaries, and evidence packages.
- PR #106 may affect how boundary concepts are tested.
- PR #75 should not outrun those review layers.

---

## 6. Human Owner decision points

Human Owner decision is required before:

- syncing/rebasing PR #75;
- marking PR #75 ready-for-review;
- merging PR #75;
- closing PR #75;
- splitting PR #75;
- creating any staged PR from PR #75;
- accepting any component as canon;
- adopting any schema;
- adopting any event family;
- creating `docs/core/v1/`;
- treating any candidate file as implementation guidance.

---

## 7. Recommended current disposition

Current recommended disposition:

```text
PR #75: keep Draft, unchanged, not synced, not merged.
This staging recommendation: mergeable as non-canonical review planning after Human Owner approval.
Next operational focus: external-signal PRs #108 and #110, then PR #106 Decision Card.
```

---

## 8. Change Summary

Files changed:
- this split / staging recommendation only.

What was added:
- staged review path for PR #75;
- recommended future PR tracks;
- sequencing recommendation;
- Human Owner decision points.

What was strengthened:
- protection against premature canon;
- separation between conceptual boundary, taxonomy, Decision Log, and Responsibility Event Stream tracks;
- protection against accidental schema and event-family adoption.

Next best step:
- review this staging recommendation, then decide whether to merge it as non-canonical review planning.
