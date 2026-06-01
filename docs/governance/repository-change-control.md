# Repository Change Control

**Status:** Repository governance policy candidate  
**Canonical status:** Does not change RABA architecture canon  
**Purpose:** Define how repository changes should be proposed, reviewed, authorized, and merged  
**Human Owner:** Oleksandr / Александр  

> This document governs repository workflow.  
> It does not adopt or modify RABA architecture canon.  
> Final project authority and final architectural approval remain with the Human Owner.

---

## 1. Core rule

```text
No direct changes to main.
All meaningful changes should go through pull requests.
No canon, governance, access-control, public-positioning, pilot, vendor, or commercial commitment may be adopted without Human Owner approval.
```

---

## 2. Required change path

Repository changes should follow this path:

```text
proposal / issue / working note
→ branch
→ pull request
→ review
→ Human Owner decision where required
→ merge only after authorization
→ decision log where appropriate
```

---

## 3. Branch protection expectations

The `main` branch should be protected.

Recommended protection settings:

- require a pull request before merging;
- require approvals before merging;
- require review from Code Owners for protected areas;
- dismiss stale approvals when new commits are pushed;
- require conversation resolution before merging;
- restrict who can push to `main`;
- prevent bypass of protections except where explicitly authorized by the Human Owner.

---

## 4. Pull request classes

### 4.1 Editorial PR

Minor wording, spelling, formatting, or link cleanup.

May be reviewed quickly, but still should not bypass protected branch rules.

### 4.2 Review / working-note PR

Adds or updates non-canonical review, notes, synthesis, or external input.

Must clearly state non-canonical status.

### 4.3 Candidate architecture PR

Proposes candidate architecture material.

Must clearly state:

- candidate status;
- not adopted canon;
- no schema adoption unless explicitly approved;
- no event-family adoption unless explicitly approved;
- no implementation guidance unless explicitly approved;
- final architectural approval remains with the Human Owner.

### 4.4 Canonicalization PR

Proposes material for canonical adoption.

Requires explicit Human Owner confirmation before merge.

### 4.5 Governance / access-control PR

Changes repository authority, access-control, CODEOWNERS, branch protection expectations, or governance documents.

Requires explicit Human Owner confirmation before merge.

### 4.6 Public-positioning / commercial PR

Changes public claims, pilot language, vendor references, commercial commitments, or partnership positioning.

Requires explicit Human Owner confirmation before merge.

---

## 5. Merge restrictions

The following must not be merged without Human Owner confirmation:

- changes to `docs/core/`;
- changes to `docs/decision-log/`;
- changes to `docs/governance/`;
- changes to `.github/`;
- changes to `README.md`;
- changes that adopt canon;
- changes that adopt schemas or event families;
- changes that create implementation guidance;
- changes that create public, vendor, pilot, or commercial commitments.

---

## 6. Decision Log expectations

A Decision Log entry should be created or updated when a change:

- authorizes canonicalization work;
- adopts architecture;
- changes governance or access-control rules;
- changes public positioning;
- authorizes pilot, vendor, referral, or commercial activity;
- records a major Human Owner decision.

A Decision Log entry must distinguish authorization to prepare work from final adoption.

---

## 7. AI collaborator boundary

AI collaborators may draft, prepare, review, summarize, and recommend.

AI collaborators must not:

- treat their own output as approval;
- treat multi-AI agreement as approval;
- merge as final authority;
- adopt canon;
- create public or commercial commitments;
- change access-control policy without Human Owner confirmation.

---

## 8. Emergency boundary

Emergency technical fixes may be proposed quickly, but should still preserve:

- traceability;
- Human Owner awareness;
- post-action Decision Log if governance-relevant;
- no silent architecture adoption.

---

## 9. Non-removal boundary

This policy candidate does not remove contributors or change live permissions by itself.

Contributor access changes require a separate Human Owner decision.

---

## 10. Final authority

Final project authority remains with the Human Owner.

Repository operations may be delegated.

Architectural approval may not be silently delegated.
