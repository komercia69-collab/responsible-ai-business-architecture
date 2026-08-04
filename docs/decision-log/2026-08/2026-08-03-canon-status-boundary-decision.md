# [2026-08-03] Canon and Status/Boundary Alignment

- Decision ID: DR-2026-08-03-CANON-STATUS-BOUNDARY
- Decision title: RABA Canonicality Requires an Explicit Human Owner Decision Recorded in a Traceable Status/Decision Record
- Human Owner: Oleksandr / Александр
- Decision date: 2026-08-03
- **Decision status:** Human Owner wording decision and the accuracy of this Decision Log record were explicitly confirmed in conversation. This is an accepted Decision Log record, locally committed but not pushed or merged. Repository presence, commit, push, PR creation, or merge do not by themselves establish Canon. Canon requires a separate explicit Human Owner decision recorded in a traceable status or decision record.

---

## Exact Decision

> "RABA canonicality is established only by an explicit Human Owner decision recorded in a traceable status/decision record. Repository presence, commit existence, merge, operational-core use, or stable/completed labels do not by themselves establish Canon."

---

## Scope

This decision:

- confirms and records, as a traceable decision, the Canon/status boundary already stated in principle in [`AGENTS.md`](../../../AGENTS.md) and [`docs/decision-log/README.md`](../README.md);
- provides the substantive basis for a minimal local wording clarification in [`README.md`](../../../README.md) ("How RABA governs its own evolution" / "Canon and Decision Log"), for Human Owner review, to remove language that could be read as GitHub presence or merge alone establishing Canon; repository implementation remains subject to separate scoped confirmation;
- provides the substantive basis for a minimal local wording clarification in [`docs/project-status.md`](../../project-status.md), for Human Owner review, so that *operationally stable*, *operational core*, *core artifact*, *completed artifact*, *stable*, and *completed* are explicitly read as describing working role or degree of completion, not Canon; repository implementation remains subject to separate scoped confirmation.

---

## Consequences

- README.md's Canon definition and its "Canon and Decision Log" section now explicitly state that repository presence, commit existence, and merge (including merged non-canonical text) do not establish Canon, and that Canon requires an explicit Human Owner decision recorded in a traceable status/decision record.
- docs/project-status.md now explicitly states that its stability/completion language describes working role or degree of completion, not Canon.

---

## Non-Effects

This decision does not:

- assign canonical status to any existing document, concept, schema, or specification;
- change the current Status line of any file (including files currently marked Draft);
- create, adopt, or expand any architectural content;
- add reciprocal links between repositories;
- create a general source-of-truth registry;
- change CODEOWNERS, protected paths, or merge-restriction rules;
- constitute a public, compliance, validation, or adoption claim;
- constitute merge, push, branch creation, or any other GitHub write action.

---

## Implementation Status

- **Initial local implementation commit `4f504640b9597d792c05e8c620ba2bee6015df0f`** exists on branch `docs/canon-status-boundary-alignment`; no push, PR, or merge performed.
- Branch creation and the local commit were separately authorized by the Human Owner. Push, PR creation, merge, canonicalization, and any further repository implementation remain subject to separate scoped Human Owner confirmation.
- This is an accepted Decision Log record of the confirmed decision. The Human Owner explicitly approved the accuracy of this Decision Log record. Repository presence, commit, push, PR creation, or merge do not by themselves establish Canon.

---

## Subsequent Status Update

- On 2026-08-04, following separate scoped Human Owner confirmations, branch `docs/canon-status-boundary-alignment` was pushed to `origin` at commit `f623ac4ab216be9bbd2a860264c43b58e69ab5a7`.
- Draft PR #172 was subsequently created from that branch into `main`.
- The PR remains Draft. Ready-for-review, merge, and canonicalization have not been authorized.
- These subsequent repository actions do not alter the decision recorded above and do not establish Canon.

---

## Traceability

- Originating conversation: local read-only repository analysis identifying a Canon/status wording conflict between README.md, docs/project-status.md, AGENTS.md, and docs/decision-log/README.md.
- Related files: [`../../../README.md`](../../../README.md), [`../../project-status.md`](../../project-status.md), [`../../../AGENTS.md`](../../../AGENTS.md), [`../README.md`](../README.md).
- Related governance documents (unchanged by this decision): [`../../governance/repository-change-control.md`](../../governance/repository-change-control.md), [`../../governance/project-roles-and-access-control.md`](../../governance/project-roles-and-access-control.md).
