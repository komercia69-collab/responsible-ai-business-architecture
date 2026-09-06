# [2026-08-03] Canon and Status/Boundary Alignment

- Decision ID: DR-2026-08-03-CANON-STATUS-BOUNDARY
- Decision title: RABA Canonicality Requires an Explicit Human Owner Decision Recorded in a Traceable Status/Decision Record
- Human Owner: Oleksandr / Александр
- Decision date: 2026-08-03
- **Decision status:** Human Owner wording decision and the accuracy of this Decision Log record were explicitly confirmed in conversation. This is an accepted Decision Log record in PR #172, currently Ready for review / non-canonical / unmerged. Repository presence, commit, push, PR creation, merge, repeated use, or public visibility do not by themselves establish Canon. Canon requires a separate explicit Human Owner decision recorded in a traceable status or decision record.

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

## Status History

### Initial status — 2026-08-03

The Decision Log record was confirmed by the Human Owner and committed locally.

At that time:
- no push had occurred;
- no PR had been created;
- no merge had occurred;
- no canonicalization had occurred.

### Subsequent repository status — 2026-08-04

Following separate scoped Human Owner confirmations:
- branch `docs/canon-status-boundary-alignment` was pushed;
- PR #172 was created;
- the material remained non-canonical.

These repository actions did not establish Canon.

### Current status — 2026-09-06

PR #172 is Ready for review / non-canonical / unmerged.

The original Canon/status-boundary decision remains unchanged.

Merge remains blocked pending separate Human Owner confirmation.

Canonicalization remains blocked pending a separate explicit Human Owner decision.

---

## Block 5 Verification

- Block 5 Verification Level: 2

- Critical Claims Checked:
  - Canon requires an explicit Human Owner canonicalization decision.
  - Repository presence does not establish Canon.
  - Commit existence does not establish Canon.
  - Merge does not establish Canon.
  - PR #172 is currently Ready for review / non-canonical / unmerged.
  - Merge and canonicalization remain separately blocked pending Human Owner confirmation.

- Sources Checked by Human:
  - Human Owner source conversation confirming the Canon/status boundary.

- Sources Extracted for Human Review:
  - `README.md`
  - `docs/decision-log/README.md`
  - `AGENTS.md`
  - `docs/project-status.md`
  - PR #172 current state and review threads

- Remaining Uncertainty:
  - None identified regarding the confirmed Canon/status boundary.
  - Merge and canonicalization remain separate future decisions.

- Human Rationale:
  - Repository state and canonical status must remain separate so that commit, PR, merge, repeated use, or public visibility cannot silently create architectural authority.

- What Remains Blocked:
  - Merge of PR #172.
  - Canonicalization of this Decision Log record or any changed file.
  - Any broader repository alignment outside the bounded scope of this PR.
  - Public/provider/commercial/validation/compliance/certification claims.

---

## Traceability

- Originating conversation: local read-only repository analysis identifying a Canon/status wording conflict between README.md, docs/project-status.md, AGENTS.md, and docs/decision-log/README.md.
- Related files: [`../../../README.md`](../../../README.md), [`../../project-status.md`](../../project-status.md), [`../../../AGENTS.md`](../../../AGENTS.md), [`../README.md`](../README.md).
- Related governance documents (unchanged by this decision): [`../../governance/repository-change-control.md`](../../governance/repository-change-control.md), [`../../governance/project-roles-and-access-control.md`](../../governance/project-roles-and-access-control.md).
