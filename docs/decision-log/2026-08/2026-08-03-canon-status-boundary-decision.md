# [2026-08-03] Canon and Status/Boundary Alignment

- Decision ID: DR-2026-08-03-CANON-STATUS-BOUNDARY
- Decision title: RABA Canonicality Requires an Explicit Human Owner Decision Recorded in a Traceable Status/Decision Record
- Human Owner: Oleksandr / Александр
- Decision date: 2026-08-03
- Decision status: Human Owner decision confirmed in chat on 2026-08-03; this file is a local draft record only, not yet committed, pushed, or merged; GitHub presence, a future commit, or a future merge of this file will not by themselves create Canon; final correctness and acceptance of this record require a separate explicit Human Owner review decision; commit or merge does not substitute for that decision.

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

- Local, uncommitted working-tree edits only, in a read-only-verified local clone of `responsible-ai-business-architecture`.
- Repository implementation is subject to separately scoped Human Owner confirmation. Branch creation, commit, push, PR creation, or merge do not by themselves establish acceptance or Canon.
- This record remains a local draft representation of the confirmed decision. It becomes an accepted Decision Log record only after the Human Owner explicitly approves the accuracy of this record. Commit, push, PR creation, or merge do not by themselves constitute that approval or establish Canon.

---

## Traceability

- Originating conversation: local read-only repository analysis identifying a Canon/status wording conflict between README.md, docs/project-status.md, AGENTS.md, and docs/decision-log/README.md.
- Related files: [`../../../README.md`](../../../README.md), [`../../project-status.md`](../../project-status.md), [`../../../AGENTS.md`](../../../AGENTS.md), [`../README.md`](../README.md).
- Related governance documents (unchanged by this decision): [`../../governance/repository-change-control.md`](../../governance/repository-change-control.md), [`../../governance/project-roles-and-access-control.md`](../../governance/project-roles-and-access-control.md).
