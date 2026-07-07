# Autonomy Management Coverage Map — Verified Table v0.2

Status: Working Note  
Canonical status: Non-canonical  
Source type: Verified coverage index / review aid  
Related area: AI autonomy boundary management  
Approval status: Not approved as RABA canon  
Validation status: Not validation  
Adoption status: Not adoption  
SAI alignment status: No claim  
Commercial / compliance / certification status: No claim  

Verified against: `main` @ `85a40db3938622d6b496a9af8988a4aa705129aa`  
PR-specific verification: PR #171 `pull/171/head`  
Verification method: read-only source inspection of referenced files and PR draft content  

## 0. Boundary

This table records where autonomy-management levers are documented, proposed, patterned, or still incomplete inside RABA.

It does not prove that any control is:

- canonical;
- implemented;
- operationally active;
- externally valid;
- provider-facing;
- compliance-ready;
- certification-ready;
- commercially adopted.

GitHub presence does not equal approval.

Commit existence does not equal canon.

Merged non-canonical text remains non-canonical unless separately canonicalized.

AI review does not equal Human Owner approval.

Multi-AI agreement does not equal canon.

Final architectural approval belongs to the Human Owner.

## 1. Verification Scope

### Verified by Ben / ChatGPT

Rows checked: 1–24  
Method: read-only source inspection during chat session  
Scope: source existence, relevant sections, and whether the stated lever is documented in the referenced material.

### Additional sampled review input

A separate review input reported sampled verification of rows 3, 5, 12, 18, 21, and 23 against `main @ 85a40db`.

This review input is useful, but it is not Human Owner approval and does not create canon.

### Not verified

This table does not verify:

- canonicalization Decision Log record for each source;
- operational implementation;
- runtime enforcement;
- production readiness;
- provider-facing readiness;
- public-positioning readiness;
- compliance claims;
- certification claims;
- adoption claims;
- validation claims;
- commercial claims.

## 2. Classification Rule

Source status and coverage status are separate.

### Source status

`Source status` describes the authority or maturity of the referenced source.

Default rule:

> If no explicit Decision Log canonicalization record is verified, the source must not be classified as canon.

Therefore:

> Merged repository presence alone means `merged, non-canonical`, unless a canonicalization record is verified.

Draft PRs, working notes, patterns, examples, and policy candidates must remain clearly labeled.

### Coverage status

`Coverage status` describes whether the lever is documented.

It does not describe whether the source is canon.

A lever may be `covered` even when the source is draft, working-note, pattern, or merged non-canonical.

This prevents mixing two different questions:

1. Is the lever documented?
2. Has the source been accepted as canon?

## 3. Legend

### Dimensions

1. Action Class  
2. Authorization Gate  
3. Reversibility at Scale  
4. Tempo / Volume  
5. Visibility / Trace  
6. Influence Neutrality  
7. Authority Basis / Revocation  
8. Fail-safe Default  

### Coverage status

- `covered` — the lever is clearly documented as a definition, rule, pattern, procedure, or schema element.
- `partial` — the lever is present but incomplete, not yet generalized, missing a direct formulation, or not yet connected to the required root layer.
- `gap` — no confirmed source was found.
- `not-applicable` — the row is an index or meta-row, not a control.

### Operational status

- `unknown` — documented, but operational application was not verified.
- `draft` — currently only present in draft / PR / working note form.
- `not-applicable` — not an operational control.

## 4. Verified Coverage Table v0.2

| # | Lever | Dim | Source path / section | Source status | Coverage type | Coverage status | Operational status | Review trigger | Verification note |
|---|---|---:|---|---|---|---|---|---|---|
| 1 | Permission levels L0–L5 | 1 | `docs/ai-permission-matrix.md` § Permission Levels | merged, non-canonical unless canonicalization record verified | rule | covered | unknown | on matrix change | Verified: L0–L5 are explicitly defined. |
| 2 | Agent permission boundary pattern | 1 | `architecture-patterns/agent-permission-boundary.md` | pattern / merged, non-canonical unless canonicalization record verified | definition | covered | unknown | on pattern change | Verified: defines access, tool, action, execution, approval, and audit boundaries. |
| 3 | AI must not change own permissions | 1, 7 | `docs/ai-permission-matrix.md` Governance row / L5 | merged, non-canonical unless canonicalization record verified | rule | covered | unknown | on matrix change | Verified: “AI must not grant itself power.” |
| 4 | Governance Gateway / pre-action gate | 2 | `docs/concepts/ai-governance-gateway.md`; `docs/governance-gateway-runtime-model.md` | merged, non-canonical unless canonicalization record verified | procedure | covered | unknown | on gateway change | Verified: gateway checks action boundary, approval state, logs, escalation, and responsibility before external effect. |
| 5 | Routing paths: Fast / Review / Escalation / Block / Governed Bypass Lane | 2, 4 | `concepts/responsibility-throughput-model.md` §§ 3–5, 11–13; `concepts/governed-speed-safety-controls.md` § 2 | merged, non-canonical unless canonicalization record verified | definition + rule | covered | unknown | on canonicalization decision | Verified: primary throughput model defines routing paths and rejects AI self-routing / rule relaxation. |
| 6 | One approval = one action in stated scope | 2, 7 | `docs/approval-state-specification.md`; candidate support from `concepts/active-confirmation-phrase-interlock.md` | draft / discussion-draft | partial rule | partial | unknown | on authority-note decision | Critical partial: direct formula not verified; scoped authorization, expiration, reapproval, action parameters, and unchanged scope are verified. |
| 7 | Reversibility as controllability dimension | 3 | `docs/operational-controllability-model.md` § Reversibility | merged, non-canonical unless canonicalization record verified | definition | covered | unknown | on model change | Verified: reversibility = ability to stop, contain, or reverse operational outcomes. |
| 8 | Remediation Scale Gap | 3 | `concepts/governed-speed-safety-controls.md` §§ 2, 5, 6, 9 | merged, non-canonical unless canonicalization record verified | definition + rule | covered | unknown | on reversibility-classification decision | Verified: one-case reversibility does not imply mass operational reversibility. |
| 9 | Halt / Throttle / Queue & Delay / Recovery | 4 | PR #171 `docs/notes/operational-grounding-addendum.md` §§ 9–13 | draft-PR / working-note / non-canonical | procedure | covered | draft | on PR #171 decision | Verified: Halt, Throttle, Queue & Delay, and Recovery are documented; source remains draft and non-canonical. |
| 10 | Human-set capacity limits | 4 | PR #171 addendum § 6 | draft-PR / working-note / non-canonical | rule | covered | draft | on PR #171 decision | Verified: limits must be Human Owner-set or canonical; no unconfirmed default triggers. |
| 11 | No hidden backlog / bounded visible queue | 4, 5 | PR #171 addendum § 12 | draft-PR / working-note / non-canonical | rule | covered | draft | on PR #171 decision | Verified: queue must be bounded and visible; hidden backlog forbidden. |
| 12 | Decision Log accountability trace | 5 | `docs/decision-log-schema.md` | draft — core schema | procedure | covered | unknown | on schema change | Verified: records who authorized, under which state, reason, outcome, scope, and expiration if applicable. |
| 13 | Governed Bypass trace fields | 5 | `docs/notes/decision-log-governed-bypass-extension.md` | working-note / non-canonical | definition | covered | unknown | on canonicalization decision | Verified: preserves why preparation was allowed while consequence remained forbidden; source remains non-canonical. |
| 14 | Metrics are triggers, not proof of meaningful review | 5 | PR #171 addendum §§ 8, 15, 16 | draft-PR / working-note / non-canonical | rule | covered | draft | on PR #171 decision | Verified: metrics are triggers only; false values are not proof of meaningful review. |
| 15 | Evidence Neutrality / Bypass Bias protection | 6 | `concepts/governed-speed-safety-controls.md` § 3 | merged, non-canonical unless canonicalization record verified | rule + brief structure | covered | unknown | on influence-neutrality decision | Verified: bypass brief must separate facts, AI interpretation, uncertainty, pro/con evidence, alternatives, consequences, and remediation; no manipulative tone/framing. |
| 16 | Invisible AI influence pattern | 6 | `patterns/invisible-ai-influence.md` | pattern / merged, non-canonical unless canonicalization record verified | definition | covered | unknown | on pattern change | Verified: AI influence can shape decisions without autonomous execution. |
| 17 | Emergency authority revocation / Stop Switch S1–S5 | 7 | `governance/ai-stop-switch-protocol.md` | merged, non-canonical unless canonicalization record verified | procedure | covered | unknown | on protocol change | Verified: S1–S5 stop levels, permission revocation, workflow suspension, human-only fallback, recovery with human approval. |
| 18 | Roles and access control | 7 | `docs/governance/project-roles-and-access-control.md` | repository governance policy candidate / non-canonical architecture impact | rule | covered | unknown | on role/access change | Verified: only Human Owner may give final project and architectural approval; AI Collaborator may draft/recommend only. |
| 19 | Explicit non-authorization practice | 7 | `docs/decision-log/2026-06-02-repository-governance-hardening.md` | example / authorization record / non-canon architecture impact | example | covered | not-applicable / unknown | on hardening update | Verified: authorization scope explicitly lists what is authorized and what is not authorized. |
| 20 | Fail-safe HOLD / BLOCK / ESCALATE | 8 | `docs/fail-safe-governance-behavior.md` | merged, non-canonical unless canonicalization record verified | rule | covered | unknown | on document change | Verified: no silent execution when responsibility cannot be established; fail closed for external business impact. |
| 21 | Normal-mode permission expiry / re-authorization | 7 | `docs/approval-state-specification.md` §§ Planned extended states, Re-approval path, Gateway checks, Minimal implementation guidance | draft — core specification | partial rule / state model | partial | unknown | on authority-note decision | Verified: `EXPIRED`, `REAPPROVAL_REQUIRED`, expiration mechanism, and re-approval detection exist; TTL / standing authorization policy remains open. |
| 22 | Influence neutrality as general autonomy dimension | 6 | `concepts/governed-speed-safety-controls.md`; `patterns/invisible-ai-influence.md` | concept / pattern / merged, non-canonical unless canonicalization record verified | rule + pattern | partial | unknown | on influence-neutrality decision | Verified for bypass briefs and invisible influence; not yet verified as general autonomy-management layer. |
| 23 | Machine-readable reversibility class per action class | 1, 3 | `concepts/responsibility-throughput-model.md` §§ 4, 7, 15 | suggested schema / rule candidate / merged, non-canonical unless canonicalization record verified | suggested schema | partial | unknown | on reversibility-classification decision | Verified: real-world reversibility class per action class is proposed; accepted machine-readable schema not verified. |
| 24 | This coverage map itself | — | this chat draft only | chat-only working draft | index | partial | not-applicable | on map elevation decision | No repository file found at time of drafting; map remains non-canonical unless separately elevated by Human Owner decision. |

## 5. Verified Strengths

The read-only verification confirms that RABA already has substantial documented coverage for autonomy management.

Strongly documented areas:

- action permission levels;
- agent permission boundaries;
- Governance Gateway;
- routing paths;
- real-world reversibility;
- remediation at scale;
- Decision Log accountability trace;
- Evidence Neutrality;
- Invisible AI Influence;
- Stop Switch;
- Human Owner authority;
- explicit non-authorization;
- fail-safe HOLD / BLOCK / ESCALATE.

This means Autonomy Management does not need to be invented from scratch.

It can be represented as an index layer connecting existing RABA materials.

## 6. Narrowed Gaps

Verification narrowed the gaps; none of the original gaps is fully closed.

### 6.1 Standing Authorization / TTL Policy Gap

RABA has:

- `EXPIRED`;
- `REAPPROVAL_REQUIRED`;
- authorization expiration mechanism;
- re-approval detection.

But the normal-mode policy remains open:

- When exactly does permission expire?
- Is approval action-bound, file-bound, PR-bound, session-bound, branch-bound, or action-class-bound?
- Can standing authorization exist?
- What is the TTL for different consequence classes?
- What changes invalidate approval?
- How is withdrawal recorded?

This gap is now localized, not closed.

### 6.2 Scoped Approval Gap

RABA has approval scope, action parameters, expiration, and reapproval.

But the direct rule remains unverified inside repository files:

> One approval = one action in stated scope.

This is a critical partial area because it protects against accidental authority expansion.

### 6.3 Influence Autonomy Generalization Gap

Evidence Neutrality and Invisible AI Influence are documented.

But influence neutrality is not yet verified as a general autonomy-management layer.

Open question:

> Should Governance Gateway evaluate both execution autonomy and influence autonomy?

This gap is narrowed, not closed.

### 6.4 Reversibility Schema Gap

RABA proposes real-world reversibility class per action class.

But an accepted machine-readable schema is not verified.

Open question:

> Should `reversibility_class` become a required field tied to action class, permission level, consequence class, and routing path?

This gap is narrowed, not closed.

### 6.5 Coverage Map Artifact Gap

This map was originally chat-only.

If preserved in GitHub, it must remain:

- Working Note;
- Non-canonical;
- Index / review aid;
- Not implementation guidance;
- Not validation;
- Not adoption;
- Not compliance claim.

## 7. Maintenance Rule

This coverage map must be maintained as a verified index, not as a self-updating proof.

### 7.1 Status upgrades

A row may be upgraded only after read-only verification.

A row must not be upgraded based on:

- memory;
- AI agreement;
- multi-AI consensus;
- GitHub presence alone;
- commit existence alone;
- merged non-canonical text alone;
- external reviewer agreement alone.

### 7.2 Source changes

A change to a source file does not automatically update the coverage map.

It triggers the row's Review trigger.

The row must be rechecked before its coverage or source status changes.

### 7.3 Canon classification

A source may be marked `canon` only after verifying an explicit canonicalization record.

Without such a record, the safe default is:

> merged, non-canonical unless canonicalization record verified.

### 7.4 Verification header

Every future version should record:

- branch or PR ref;
- commit HEAD;
- verification date;
- who verified;
- rows verified;
- method used;
- what was not verified.

### 7.5 External review input

External review input may improve the map.

It does not approve the map.

It does not make the map canon.

It does not change source status.

Final architectural approval belongs to the Human Owner.

## 8. Non-Claims

This verified table does not:

- create RABA canon;
- approve any document for canonicalization;
- approve PR #171;
- merge anything;
- change repository state beyond creation of this non-canonical working note when explicitly confirmed by the Human Owner;
- prove implementation;
- prove operational readiness;
- prove governance readiness;
- authorize provider-facing use;
- authorize public positioning;
- authorize commercial claims;
- authorize compliance claims;
- authorize certification claims;
- authorize adoption or validation claims;
- grant AI any new permission.

## 9. Recommended Human Owner Decision Frame

The next Human Owner decisions are:

1. Should this map remain only a non-canonical working note?
2. Should Row 6 and Row 21 be handled together as a scoped authorization / TTL follow-up?
3. Should PR #171 remain draft, be split, or become a canonicalization candidate later?
4. Should Influence Neutrality become a first-class Governance Gateway check?
5. Should `reversibility_class` become a machine-readable field tied to Action Class and routing path?

No further GitHub action should happen without explicit Human Owner confirmation.
