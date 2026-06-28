# AI Autonomy Increase Control Loop

**Status:** Experimental Working Track  
**Canonical status:** Non-canonical  
**Purpose:** Govern step-by-step increases in AI operational autonomy while preserving Human Owner responsibility, auditability, correction, and external review  
**Human Owner:** Oleksandr / Александр  

> This document is a non-canonical working track.  
> It does not grant AI final approval authority.  
> It does not authorize merge, canon adoption, schema adoption, event-family adoption, implementation guidance, public positioning, or commercial commitments.  
> Final project authority and final architectural approval remain with the Human Owner.

---

## 1. Why this exists

RABA should be tested on its own development process.

The project is increasingly developed with AI assistance. That creates a live governance challenge:

```text
How can AI operational autonomy increase without dissolving Human Owner responsibility?
```

This working track treats the RABA project itself as a governed example of AI-supported work.

---

## 2. Core principle

```text
AI autonomy may increase operationally.
Human responsibility must remain explicit, reviewable, and final.
```

Russian formulation:

```text
Операционная автономность ИИ может расти.
Но человеческая ответственность должна оставаться явной, проверяемой и окончательной.
```

---

## 3. What this loop controls

This loop controls how AI may:

- propose next actions;
- prepare file-level plans;
- create branches after confirmation;
- draft documents;
- make scoped GitHub changes after confirmation;
- open draft PRs after confirmation;
- perform cleanup inside approved PR scope;
- prepare reports;
- flag risks, failures, near misses, and successes.

It does not authorize AI to:

- merge PRs as final authority;
- adopt canon;
- change repository permissions;
- remove contributors;
- approve public positioning;
- create pilot, vendor, referral, or commercial commitments;
- replace Human Owner approval.

---

## 4. Autonomy levels

### Level 0 — Draft only

AI drafts text, summaries, comments, or plans. No repository changes.

### Level 1 — File-level planning

AI proposes exact file-level changes and asks for Human Owner confirmation before implementation.

### Level 2 — Branch/package preparation after confirmation

AI may create a branch and prepare files after Human Owner confirmation.

### Level 3 — Draft PR opening after confirmation

AI may open a draft PR after Human Owner confirmation.

### Level 4 — Scoped cleanup inside approved PR scope

AI may perform cleanup or consistency fixes inside an already approved PR scope, while preserving non-adoption boundaries.

### Level 5 — Pipeline assistance

AI may recommend next PRs, issue drafts, review instructions, report templates, and status maps, but may not implement without Human Owner confirmation where repository changes are involved.

### Level 6 — Drift monitoring and intervention recommendation

AI may monitor for scope drift, autonomy drift, responsibility drift, public-positioning overclaim, and governance gaps, then recommend pause, correction, or external review.

---

## 5. Human Owner checkpoints

Human Owner confirmation is required before:

- branch creation;
- repository file creation or update;
- PR opening;
- PR ready-for-review transition;
- merge;
- canon adoption;
- schema adoption;
- event-family adoption;
- implementation guidance adoption;
- public-facing positioning changes;
- external reviewer authority changes;
- repository permission changes;
- pilot, vendor, referral, or commercial commitments.

---

## 6. Decision Log triggers

A Decision Log entry should be created or updated when:

- AI autonomy level increases;
- AI autonomy is reduced or paused;
- a major governance package is authorized;
- a PR is authorized for canonicalization;
- a public-facing material is authorized for promotion;
- external reviewers flag `CONCERN` or `STOP AND REVIEW`;
- a near miss reveals weakness in the autonomy control loop;
- a recurring success becomes a reusable governance pattern.

---

## 7. Audit / responsibility trace

Each significant autonomy step should be traceable through:

```text
Human Owner confirmation
→ branch / file / PR action
→ status boundary
→ Decision Log where needed
→ report / review record
→ correction or next-step decision
```

The trace should make it possible to reconstruct:

- what AI proposed;
- what AI did;
- what AI was not allowed to do;
- who authorized the action;
- what scope was authorized;
- whether the result stayed inside scope;
- what correction was applied if needed.

---

## 8. Failure and near-miss log

Failures and near misses should be recorded when AI:

- acts outside confirmed scope;
- uses too-strong adoption language;
- confuses draft, candidate, canon, or implementation;
- creates stale references;
- opens or modifies the wrong PR;
- implies Human Owner approval where none exists;
- misses a Decision Log need;
- fails to flag public-positioning risk.

These records are not blame records.

They are learning records for improving the control loop.

---

## 9. Success log

Successes should also be recorded.

Examples:

- AI correctly paused before merge;
- AI detected scope drift;
- AI created a clean Decision Log boundary;
- AI identified a public-facing overclaim;
- external reviewer feedback improved process integrity;
- Human Owner received a short decision block instead of routine burden.

Successes are reusable governance patterns.

---

## 10. External accountability review

Autonomy increases should be periodically reviewed by External Accountability Reviewers.

External reviewers may recommend:

```text
INCREASE
HOLD
REDUCE
PAUSE
```

Their review supports accountability but does not replace Human Owner authority.

---

## 11. Public-facing materials boundary

AI may help draft and review public-facing materials.

Before active promotion, public-facing materials should be checked for:

- maturity overclaims;
- compliance guarantees;
- risk-elimination claims;
- product-readiness overclaims;
- pilot or commercial commitments;
- confusion between vision, candidate, canon, and implementation.

Human Owner approval is required before active promotion.

---

## 12. Criteria for increasing autonomy

Autonomy may be increased only if:

- AI stayed inside approved scope;
- Human Owner checkpoints were respected;
- Decision Logs were created when needed;
- external concerns were addressed or consciously accepted;
- failures and near misses were corrected;
- public-facing claims remained proportional;
- the next level reduces Human Owner routine without reducing Human Owner authority.

---

## 13. Criteria for reducing or pausing autonomy

Autonomy should be reduced or paused if:

- AI acted outside approved scope;
- AI implied approval where none existed;
- AI merged, adopted, or publicly positioned material without confirmation;
- repeated stale references or wrong-file changes occur;
- external reviewers flag `CONCERN` or `STOP AND REVIEW`;
- Human Owner burden increases instead of decreasing;
- responsibility becomes unclear.

---

## 14. Current proposed status

Current proposed autonomy level for RABA project work:

```text
Level 3 — Draft PR opening after confirmation
```

Operationally, AI may prepare branches, files, and draft PRs only after Human Owner confirmation.

AI must not merge, adopt canon, change permissions, or create commitments.

---

## 15. Non-adoption boundary

This working track is non-canonical.

It does not adopt RABA architecture canon.

It does not change repository governance rules by itself.

It does not grant AI final approval authority.

Final project authority remains with the Human Owner.
