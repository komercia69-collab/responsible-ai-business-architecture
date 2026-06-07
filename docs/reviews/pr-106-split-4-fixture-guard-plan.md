# PR #106 Split 4 Fixture Guard Plan

**Status:** Fixture guard planning draft  
**Canonical status:** Non-canonical  
**Related PR:** #106 — Draft: Add Responsibility Boundary Test Pack v0.1  
**Related review summary:** `docs/reviews/pr-106-source-file-review-summary.md`  
**Related split plan:** `docs/reviews/pr-106-refinement-split-plan.md`  
**Purpose:** Define safety boundaries before moving PR #106 fixture files into a Split 4 PR.

This document is a planning artifact only.

It does not move fixture files.

It does not approve fixture files.

It does not create RABA canon, schema adoption, API adoption, Responsibility Event Stream adoption, Decision Log adoption, policy architecture adoption, implementation guidance, conformance evidence, certification evidence, validation evidence, pilot commitment, partnership claim, or commercial commitment.

Final architectural approval remains with the Human Owner.

---

## 1. Executive summary

Split 4 is higher risk than the already-merged documentation and review splits because fixture files can look like implementation artifacts.

Candidate files:

```text
docs/tests/responsibility-boundary-v0-1/supplier-payment-input.json
docs/tests/responsibility-boundary-v0-1/supplier-payment-events.json
docs/tests/responsibility-boundary-v0-1/supplier-payment-routing-policy-fixture.md
```

The main risk is that readers may treat these fixtures as adopted schemas, API payloads, event families, Decision Log formats, policy configuration files, conformance traces, implementation requirements, or validation evidence.

Recommended current action:

```text
Do not move Split 4 fixtures until explicit fixture guards are defined and Human Owner confirms the fixture split.
```

---

## 2. Candidate files and risks

| File | Intended use | Primary drift risk | Handling |
|---|---|---|---|
| `supplier-payment-input.json` | Draft test input | Schema / API payload adoption | Include only with explicit fixture-only guard |
| `supplier-payment-events.json` | Draft event-like trace | RES event-family / conformance trace adoption | Highest caution; may need wrapper metadata |
| `supplier-payment-routing-policy-fixture.md` | Draft routing fixture | Adopted policy / org-policy implication | Keep wording fixture-specific |

---

## 3. Required global fixture guard

Any Split 4 PR should state:

```text
These fixture files exist only to make the current draft test reproducible.
They are not adopted schemas, API payloads, logging formats, Decision Log formats,
Responsibility Event Stream event families, policy configuration files,
implementation requirements, conformance traces, certification evidence,
validation evidence, or production examples.
```

---

## 4. JSON fixture guard

For JSON fixture files, the surrounding PR body or Markdown context should state:

```text
This JSON is a draft test fixture only.
Field names, values, object structure, status labels, IDs, and event names
are not adopted RABA schema fields, API fields, Decision Log fields,
Responsibility Event Stream fields, runtime states, or implementation requirements.
```

If the JSON file cannot carry comments, the guard must remain in nearby Markdown and the PR body.

---

## 5. Event fixture guard

For `supplier-payment-events.json`, the guard must be especially strong:

```text
Event names in this fixture are draft test labels only.
They are not Responsibility Event Stream event types,
not an adopted event family,
not a logging schema,
not a Decision Log format,
not an implementation payload,
and not a conformance trace.
```

Any structural wrapping of the event JSON must require separate Human Owner confirmation because it changes the fixture shape.

---

## 6. Routing fixture guard

For `supplier-payment-routing-policy-fixture.md`, use fixture-specific language:

```text
The routing policy in this file is a draft fixture only.
It is not adopted RABA policy architecture, organizational policy,
configuration guidance, escalation policy, legal guidance,
or implementation requirement.
```

Avoid wording such as:

```text
RABA routes...
```

Prefer:

```text
For this fixture, the draft route is...
```

---

## 7. Labels requiring caution

Labels such as `APPROVAL_VALID`, `ALLOW`, `BLOCK`, `ESCALATE`, `REQUEST_EVIDENCE`, `material`, `stale`, `credible`, `verified`, `success`, and `executed` must be treated as draft fixture labels only.

They are not canonical RABA runtime states, schema values, API values, Decision Log values, Responsibility Event Stream values, policy outputs, or conformance labels.

---

## 8. Recommended Split 4 PR structure

The future Split 4 PR should include:

1. PR body with explicit fixture-only boundaries.
2. The three candidate fixture files only.
3. No demos.
4. No Responsibility Field model.
5. No external review material.
6. No candidate backlog.
7. No canon or architecture claims.

Recommended title:

```text
Draft: Add PR 106 split 4 fixture materials
```

Recommended status:

```text
Draft first. Review before Ready. Merge only after explicit Human Owner confirmation.
```

---

## 9. Human Owner decisions required

Human Owner confirmation is required before:

- creating the actual Split 4 fixture PR;
- changing JSON fixture structure;
- wrapping event JSON in metadata;
- renaming or softening fixture values;
- moving event-like traces into main;
- treating any fixture as schema material;
- treating any fixture as Responsibility Event Stream material;
- using fixture files in external demos, public claims, pilot discussions, or implementation discussions.

---

## 10. Recommended next best step

After this guard plan is reviewed and merged as non-canonical planning material, request Human Owner confirmation for the actual Split 4 fixture PR.

Initial Split 4 should remain narrow:

```text
supplier-payment-input.json
supplier-payment-events.json
supplier-payment-routing-policy-fixture.md
```

No additional files should be included unless separately confirmed.

---

## Change Summary

Files changed:

- this fixture guard planning document only.

What was added:

- candidate Split 4 fixture scope;
- anti-schema guard;
- anti-event-family guard;
- routing-policy fixture guard;
- label caution note;
- recommended Split 4 PR structure;
- Human Owner decision queue.

What was strengthened:

- protection against JSON schema adoption drift;
- protection against Responsibility Event Stream event-family drift;
- protection against routing policy adoption drift;
- protection against conformance / validation interpretation.

Next best step:

- open a Draft PR for this guard plan;
- review and merge it as non-canonical planning material if safe;
- only then request Human Owner confirmation for the actual Split 4 fixture PR.
