# PR #106 Split 4 Fixture Guard Plan

**Status:** Fixture guard planning draft  
**Canonical status:** Non-canonical  
**Related PR:** #106 — Draft: Add Responsibility Boundary Test Pack v0.1  
**Related review summary:** `docs/reviews/pr-106-source-file-review-summary.md`  
**Related split plan:** `docs/reviews/pr-106-refinement-split-plan.md`  
**Purpose:** Define safe guardrails before moving PR #106 fixture files into a Split 4 PR.

This document does not create RABA canon.

It does not move fixture files.

It does not approve JSON fixtures as schemas.

It does not approve event fixtures as Responsibility Event Stream material.

It does not approve routing fixtures as organizational policy architecture.

Final architectural approval remains with the Human Owner.

---

## 1. Executive summary

Split 4 is the highest-risk #106 split so far because fixture files can easily be misread as implementation artifacts.

The three candidate fixture files are:

```text
docs/tests/responsibility-boundary-v0-1/supplier-payment-input.json
docs/tests/responsibility-boundary-v0-1/supplier-payment-events.json
docs/tests/responsibility-boundary-v0-1/supplier-payment-routing-policy-fixture.md
```

The main risks are:

- JSON fixture → mistaken for schema or API payload;
- event fixture → mistaken for Responsibility Event Stream event family;
- routing policy fixture → mistaken for adopted policy architecture;
- field names → mistaken for Decision Log / RES / implementation fields;
- state labels → mistaken for canonical runtime states;
- routing IDs → mistaken for production configuration keys.

Recommended approach:

```text
Create Split 4 only after adding explicit fixture-only guards.
Keep fixture files non-canonical.
Do not include Responsibility Field model.
Do not claim schema, RES, API, policy, conformance, or implementation adoption.
```

---

## 2. Candidate files and risk profile

| Candidate file | Purpose | Main value | Main risk | Recommended handling |
|---|---|---|---|---|
| `supplier-payment-input.json` | Captures the approved S0 input state and changed S1 facts for the draft fixture | Makes the test reproducible | May be read as schema/API payload | Include only with strong fixture metadata and README warning |
| `supplier-payment-events.json` | Captures a draft event-like trace for the fixture | Shows evidence → materiality → admissibility sequence | May be read as Responsibility Event Stream event family | Highest guard requirement; consider metadata wrapper |
| `supplier-payment-routing-policy-fixture.md` | Captures scenario-specific routing assumptions | Prevents AI from inventing authority route | May be read as adopted routing policy | Include only with fixture-ID and policy-non-adoption warnings |

---

## 3. Global fixture guard

Every Split 4 PR should include the following guard in its PR body and supporting documentation:

```text
These fixtures exist only to make the current draft responsibility-boundary test reproducible.
They are not adopted schemas, logging formats, event families, API payloads,
Decision Log formats, Responsibility Event Stream formats, policy configurations,
implementation references, conformance traces, certification evidence, or production examples.
```

---

## 4. JSON fixture guard

For `supplier-payment-input.json`, the guard should state:

```text
This JSON file is a draft fixture payload only.
Its keys, values, labels, and structure are not adopted RABA schema fields,
API fields, configuration keys, runtime states, or implementation requirements.
```

Risky values should be avoided or softened where they imply production verification.

For example, instead of implying real verification:

```json
"identity_and_role_binding": "verified"
```

prefer fixture-only wording such as:

```json
"identity_and_role_binding": "represented_as_verified_for_test"
```

This avoids implying that the fixture proves real identity infrastructure.

---

## 5. Event fixture guard

For `supplier-payment-events.json`, the guard should be stronger:

```text
Event names in this file are draft fixture labels only.
They are not Responsibility Event Stream event types,
not an adopted event family,
not a logging schema,
not an implementation payload,
not a conformance trace,
and not evidence that RABA has adopted a runtime event model.
```

Recommended structural option:

```json
{
  "test_status": "non-canonical",
  "fixture_type": "draft_event_fixture_not_schema",
  "schema_status": "not_schema",
  "res_status": "not_res_event_family",
  "implementation_status": "not_implementation_payload",
  "events": []
}
```

This wrapper is safer than a bare event array because it keeps the fixture boundary visible inside the file.

However, changing the fixture shape should require Human Owner confirmation because it changes how the original #106 fixture is represented.

---

## 6. Routing fixture guard

For `supplier-payment-routing-policy-fixture.md`, the guard should state:

```text
The routing_policy_id is a draft fixture identifier only.
It is not an adopted RABA policy identifier, organizational policy identifier,
configuration key, workflow rule, implementation route, or production control.
```

Also prefer:

```text
For this fixture, the route should preserve...
```

instead of:

```text
The route should preserve...
```

This keeps the requirement scenario-specific.

---

## 7. Required wording changes before Split 4

### 7.1 `supplier-payment-input.json`

Required:

- add visible metadata if structurally safe;
- ensure all verification-like labels are fixture-only;
- avoid production-sounding identity or policy assertions.

Possible metadata:

```json
"fixture_status": "non-canonical_test_fixture",
"schema_status": "not_schema",
"implementation_status": "not_implementation_payload"
```

### 7.2 `supplier-payment-events.json`

Required:

- avoid bare event array if possible;
- add top-level metadata wrapper;
- clearly identify event names as draft labels only;
- prevent RES/event-family interpretation.

Possible metadata:

```json
"res_status": "not_res_event_family",
"event_names_status": "draft_fixture_labels_only"
```

### 7.3 `supplier-payment-routing-policy-fixture.md`

Required:

- clarify `routing_policy_id` is fixture-only;
- clarify roles are scenario-specific;
- clarify no organizational policy or implementation configuration is adopted;
- keep fallback behavior scenario-specific.

---

## 8. What Split 4 should not include

Split 4 should not include:

- `responsibility-field-model.md`;
- demos;
- external model review prompt;
- adversarial synthesis;
- candidate test backlog;
- additional schemas;
- Decision Log templates;
- Responsibility Event Stream templates;
- implementation examples;
- product/UI material.

Reason:

Split 4 should remain narrowly scoped to fixture reproducibility.

---

## 9. PR body requirements for Split 4

The future Split 4 PR body should explicitly say:

```text
This PR adds fixture files only.
A fixture is not a schema.
A fixture is not an API contract.
A fixture is not a Responsibility Event Stream event family.
A fixture is not a Decision Log format.
A fixture is not a policy configuration.
A fixture is not implementation guidance.
A fixture is not conformance or certification evidence.
```

It should also say:

```text
This PR does not create RABA canon.
Final architectural approval remains with the Human Owner.
```

---

## 10. Recommended Split 4 sequence

Recommended sequence:

```text
1. Merge this fixture guard plan as non-canonical planning material.
2. Create Split 4 branch from current main.
3. Add fixture files only.
4. Apply fixture metadata / guards.
5. Open Draft PR.
6. Review scope and boundary.
7. Only after Human Owner confirmation, move Ready / merge.
```

Do not start Split 4 file movement before this guard plan is reviewed.

---

## 11. Human Owner decisions needed

Human Owner confirmation is required before:

- creating the actual Split 4 fixture PR;
- changing the shape of `supplier-payment-events.json` from bare array to metadata wrapper;
- changing fixture field labels that may affect downstream examples;
- treating any fixture as schema material;
- treating any event fixture as RES material;
- treating routing fixture as policy architecture;
- using fixture material in public positioning, demos, pilots, or external validation.

---

## 12. Current recommendation

Recommended decision:

```text
Merge this guard plan first.
Then create Split 4 with only the three fixture files and strong fixture-only metadata.
Keep Responsibility Field model parked.
```

---

## Change Summary

Files changed:

- this guard plan only.

What was added:

- fixture risk profile;
- JSON fixture guard;
- event fixture / RES guard;
- routing fixture / policy-adoption guard;
- required wording changes;
- Split 4 PR body requirements;
- Human Owner decision queue.

What was strengthened:

- protection against schema adoption drift;
- protection against Responsibility Event Stream event-family drift;
- protection against policy-adoption drift;
- separation between planning and fixture movement.

Next best step:

- review this guard plan;
- if safe, merge it as non-canonical planning material;
- then create the actual Split 4 fixture PR only after Human Owner confirmation.
