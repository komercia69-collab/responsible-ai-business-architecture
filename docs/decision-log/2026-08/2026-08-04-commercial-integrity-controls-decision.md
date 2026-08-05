# [2026-08-04] Commercial Integrity Controls Decision

- **Decision ID:** DR-2026-08-04-COMMERCIAL-INTEGRITY-CONTROLS
- **Decision title:** RABA Commercial Activity Requires Explicit Integrity and Capacity Controls
- **Human Owner:** Oleksandr / Александр
- **Decision date:** 2026-08-04
- **Decision status:** Human Owner substantive decision and package acceptance confirmed; repository implementation progressed through separately authorized staging, commit, push, and Draft PR creation; non-canonical.

---

## Exact Decision

> RABA commercial activity must remain governed by explicit integrity and capacity controls. Revenue, client demand, client satisfaction, market attention, or commercial success do not establish correctness, validation, architectural authority, or Canon. Before accepting commercial work, RABA must apply a documented Client Acceptance and Capacity Gate. The Commercial Non-Negotiables may not be waived silently for revenue, deadlines, client preference, partnership opportunity, or market pressure. Client feedback and repeated commercial demand are external signals and may create research questions or canonicalization candidates, but they do not modify RABA architecture or Canon without a separate explicit Human Owner decision recorded in a traceable status/decision record.

---

## Purpose

This decision establishes a protective operational layer before RABA begins consulting sales or paid pilots.

The purpose is to prevent:

- commercial pressure from acquiring governance authority;
- revenue from being treated as evidence of correctness;
- client satisfaction from being treated as validation;
- client-specific exceptions from silently changing RABA architecture;
- market demand from becoming Canon;
- commercial workload from consuming all research and governance capacity;
- unsupported compliance, certification, assurance, validation, adoption, readiness, or partnership claims.

---

## Approved Operational Controls

The Human Owner approved preparation of:

1. [`../../governance/commercial-integrity/raba-commercial-non-negotiables-v0.1.md`](../../governance/commercial-integrity/raba-commercial-non-negotiables-v0.1.md)
2. [`../../governance/commercial-integrity/raba-client-acceptance-and-capacity-gate-v0.1.md`](../../governance/commercial-integrity/raba-client-acceptance-and-capacity-gate-v0.1.md)

Their status is:

```text
accepted operational control material /
non-canonical /
internal use
```

They are not public claims, certification material, audit evidence, legal advice, or RABA Canon.

---

## Core Distinctions

```text
revenue ≠ correctness
client satisfaction ≠ validation
market demand ≠ architectural authority
commercial success ≠ Canon
client feedback ≠ Human Owner approval
repeated requests ≠ canonicalization
paid engagement ≠ endorsement
completed consulting work ≠ compliance
```

---

## Required Commercial Process

Before commercial work begins:

```text
lead or request
→ Client Acceptance and Capacity Gate
→ Commercial Non-Negotiables check
→ Human Owner decision
→ bounded engagement
→ ongoing capacity and integrity review
→ client feedback recorded as external signal
→ separate research assessment
→ possible canonicalization candidate
→ separate Human Owner canonicalization decision
```

---

## Capacity Direction

During the initial commercial trial:

- no more than two active pilots should run simultaneously;
- no more than two consulting delivery days per week should be used by default;
- at least one protected RABA research block should remain each week;
- at least one weekly commercial-integrity and governance review should occur;
- commercial work must remain compatible with family sustainability, health, and employment obligations.

Exceptions require a separate Human Owner capacity decision.

---

## Non-Effects

This decision does not:

- authorize outreach;
- authorize LinkedIn messaging;
- accept any client;
- establish pricing;
- create a public consulting offer;
- authorize provider-facing use;
- authorize partnership or referral commitments;
- establish legal, compliance, certification, assurance, or audit services;
- validate RABA;
- establish market readiness;
- authorize use of client data;
- authorize publication of client cases;
- change existing RABA Canon;
- canonicalize the two operational controls;
- by itself authorize staging, commit, push, PR creation, ready-for-review, merge, repository publication, or canonicalization; each such repository action requires a separate explicit Human Owner authorization.

---

## Repository Implementation Chronology

The substantive commercial-integrity decision did not by itself authorize repository implementation.

Each repository action below was separately and explicitly authorized by the Human Owner:

1. **Local preparation**
   - creation of the local branch `governance/commercial-integrity-controls`;
   - creation of exactly three local unstaged files;
   - local read-only review;
   - outcome: `local three-file review clean`.

2. **Substantive package acceptance**
   - the Human Owner accepted the three-file package as operational control material;
   - status remained non-canonical.

3. **Staging**
   - staging of exactly the three approved files was separately authorized;
   - outcome: `staging clean`.

4. **Commit**
   - one commit containing exactly the three approved files was separately authorized;
   - commit: `51e91765ca8341926210c5b8ee8f35338f83f377`;
   - commit message: `docs: add RABA commercial integrity controls`;
   - no existing file was modified.

5. **Push**
   - push of commit `51e91765ca8341926210c5b8ee8f35338f83f377` to `origin/governance/commercial-integrity-controls` was separately authorized;
   - outcome: `push clean`.

6. **Draft PR creation**
   - creation of a Draft PR from `governance/commercial-integrity-controls` into `main` was separately authorized;
   - Draft PR: `#173`;
   - PR status: `draft PR / accepted operational control material / non-canonical`.

7. **Corrective chronology alignment**
   - independent AI review finding `AIR-173-01` identified stale repository-action chronology;
   - correction of the Decision Log was separately authorized by the Human Owner;
   - staging of exactly the corrected Decision Log was separately authorized and completed;
   - corrective commit `1b0369335734fb4601887c2479bfc57ad8289253` was separately authorized and created;
   - corrective push to `origin/governance/commercial-integrity-controls` was separately authorized and completed;
   - outcome: `AIR-173-01 corrected and pushed`.

These completed repository actions do not establish Canon and do not authorize commercial activity.

The following remain blocked without separate explicit Human Owner confirmation:

- modification of the two operational-control documents;
- additional repository files or scope;
- future modification of repository files;
- future staging;
- future commits;
- future pushes;
- PR metadata changes;
- PR comments or review responses;
- ready-for-review transition;
- merge;
- canonicalization;
- outreach;
- client acceptance;
- public or provider-facing positioning;
- compliance, certification, validation, assurance, adoption, partnership, or roadmap claims.

---

## Block 5 Verification Status

- **Block 5 Verification Level:** Level 3 — commercial and governance-control decision with future client-facing consequences.
- **Critical Claims Checked:**
  - commercial demand does not establish correctness, validation, architectural authority, or Canon;
  - client acceptance requires a separate documented gate and Human Owner decision;
  - commercial Non-Negotiables cannot be silently waived;
  - client feedback remains an external signal;
  - commercial activity does not itself modify RABA Canon;
  - outreach, client acceptance, public claims, merge, and canonicalization remain separately blocked;
  - staging, commit, push, and Draft PR creation occurred only after separate explicit Human Owner authorizations;
  - completed repository actions do not establish Canon or authorize commercial activity;
  - ready-for-review, merge, and canonicalization remain separately blocked;
  - corrective staging, corrective commit, and corrective push for `AIR-173-01` occurred only after separate explicit Human Owner authorizations;
  - corrective commit and push do not establish Canon, ready-for-review status, merge authorization, or commercial authorization.
- **Sources Checked by Human:**
  - the Human Owner's commercial-readiness discussion;
  - the Human Owner's concern about commercial-interest capture and income-driven drift;
  - the Human Owner's explicit approval to create the two operational controls;
  - the Human Owner's scoped repository authorization for three local unstaged files only;
  - the Human Owner's subsequent substantive acceptance of the three-file package;
  - the Human Owner's separate authorizations for staging, commit, command-scoped Git identity, push, and Draft PR #173 creation;
  - the verified commit, remote-branch, and Draft PR facts;
  - the Human Owner's separate authorizations for the `AIR-173-01` Decision Log correction, staging, corrective commit, and corrective push;
  - verified corrective commit `1b0369335734fb4601887c2479bfc57ad8289253` and matching remote branch state.
- **Sources Extracted for Human Review:**
  - `docs/governance/repository-change-control.md`;
  - existing RABA authority and Canon boundaries;
  - the proposed Commercial Non-Negotiables structure;
  - the proposed Client Acceptance and Capacity Gate structure;
  - identified risks of commercial pressure, concentration, scope drift, claim drift, capacity overload, and client-driven canonicalization.
- **Remaining Uncertainty:**
  - no commercial pilot has yet tested the controls;
  - pricing and client willingness to pay remain unverified;
  - the initial capacity limits may require revision after bounded trials;
  - client data-handling procedures still require a separate operational protocol;
  - legal and tax structure for consulting remains outside this decision;
  - no independent human reviewer has reviewed these controls.
- **Human Rationale:**
  - The Human Owner determined that RABA must establish commercial-integrity and capacity controls before sales activity creates practical pressure. The controls are intended to preserve family sustainability, research continuity, honest claims, independent judgment, explicit authority boundaries, and separation between commercial demand and RABA Canon.
- **What Remains Blocked:**
  - modification of the two operational-control documents;
  - additional repository files or scope;
  - future modification of the Decision Log or other repository files;
  - future staging;
  - future commits;
  - future pushes;
  - PR metadata changes;
  - PR comments or review responses;
  - ready-for-review transition;
  - merge;
  - canonicalization;
  - outreach;
  - acceptance of any client;
  - public or provider-facing consulting claims;
  - compliance, certification, assurance, validation, adoption, readiness, partnership, or roadmap claims;
  - use of client data without a separate handling protocol.

---

## Traceability

- Originating discussion: commercial readiness planning before the end of the Human Owner's employment contract in September 2026.
- Triggering concern: risk that sales, revenue, client demand, and workload could create income-driven drift or displace RABA research and governance integrity.
- Related governance document: `../../governance/repository-change-control.md`.
- Related operational controls:
  - `../../governance/commercial-integrity/raba-commercial-non-negotiables-v0.1.md`
  - `../../governance/commercial-integrity/raba-client-acceptance-and-capacity-gate-v0.1.md`
- Repository branch: `governance/commercial-integrity-controls`.
- Implementation commit: `51e91765ca8341926210c5b8ee8f35338f83f377`.
- Draft PR: `#173`.
- Repository chronology: local preparation, substantive acceptance, staging, commit, push, and Draft PR creation were each separately authorized by the Human Owner.
- Independent AI review finding: `AIR-173-01` — Decision Log chronology required alignment with the separately authorized repository actions.
- Corrective commit: `1b0369335734fb4601887c2479bfc57ad8289253`.
- Corrective push: completed to `origin/governance/commercial-integrity-controls`.
- `AIR-173-01` status: corrected and pushed.
- Follow-up review finding: `AIR-173-02` — Decision Log required alignment with its own separately authorized corrective lifecycle.
- PR metadata finding: `AIR-173-03` — stale PR scope metadata was corrected separately in the PR body.

---

## Final Authority

These controls may guide future commercial work.

They do not authorize commercial action by themselves.

Final authority for:

- outreach;
- client acceptance;
- exceptions;
- public positioning;
- partnerships;
- provider-facing use;
- claims;
- repository changes;
- merge;
- canonicalization;

remains with the Human Owner.
