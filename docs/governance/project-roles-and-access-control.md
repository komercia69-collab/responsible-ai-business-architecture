# Project Roles and Access Control

**Status:** Repository governance policy candidate  
**Canonical status:** Does not change RABA architecture canon  
**Purpose:** Protect project authority, clarify contributor roles, and prevent unauthorized governance or architecture changes  
**Human Owner:** Oleksandr / Александр  

> This document governs repository and project workflow.  
> It does not adopt or modify RABA architecture canon.  
> Final project authority and final architectural approval remain with the Human Owner.

---

## 1. Why this exists

RABA may involve multiple contributors, reviewers, AI collaborators, external experts, and implementation partners.

That participation is valuable, but project contribution must not be confused with project authority.

This document defines who may propose, review, maintain, or approve changes to the repository and to RABA architecture materials.

---

## 2. Core rule

```text
Contributors may propose.
Reviewers may comment.
AI collaborators may draft and recommend.
Maintainers may support repository operations.
Only the Human Owner may give final project and architectural approval.
```

Multi-AI agreement, reviewer agreement, contributor enthusiasm, or market interest does not equal Human Owner approval.

---

## 3. Roles

### 3.1 Human Owner

The Human Owner is the final authority for:

- architectural adoption;
- canonical status changes;
- merge approval for governance-critical changes;
- repository access-control decisions;
- public positioning decisions;
- pilot, vendor, referral, or commercial commitments.

### 3.2 Architecture Contributor

An Architecture Contributor may:

- propose ideas;
- open issues;
- submit PRs;
- comment on architecture candidates;
- suggest wording, structure, and implementation paths.

An Architecture Contributor may not:

- adopt canon;
- approve merge as final authority;
- change governance rules without Human Owner approval;
- represent RABA as commercially committed or institutionally adopted.

### 3.3 External Reviewer

An External Reviewer may provide:

- critique;
- validation input;
- objections;
- external perspective;
- domain expertise.

External review is input, not adoption.

### 3.4 AI Collaborator

An AI Collaborator may:

- draft documents;
- prepare PR-ready text;
- summarize feedback;
- propose issues;
- map dependencies;
- identify scope drift;
- recommend next steps.

An AI Collaborator may not:

- approve architecture;
- merge PRs as final authority;
- treat multi-AI agreement as approval;
- create commercial commitments;
- convert candidate material into canon without Human Owner confirmation.

### 3.5 GitHub Maintainer

A GitHub Maintainer may support repository hygiene, formatting, branch maintenance, issue organization, and technical operations only within authority delegated by the Human Owner.

Maintainer access is operational support, not architectural authority.

### 3.6 Observer

An Observer may read, follow, and discuss the project but does not modify repository content or project governance.

---

## 4. Recommended GitHub access levels

| Role | Recommended GitHub access | Notes |
| --- | --- | --- |
| Human Owner | Admin / Owner | Final project authority. |
| Trusted GitHub Maintainer | Maintain or limited Write | Only if explicitly delegated. |
| Architecture Contributor | Write or fork-based PR | Proposal rights only. |
| External Reviewer | Read / Triage | Review input only. |
| AI Collaborator | No independent authority | Acts through Human Owner-confirmed tasks. |
| Observer | Read | No modification rights. |

---

## 5. Access-control principles

- No one should have Admin or Maintain access unless explicitly trusted by the Human Owner.
- Write access should be limited to contributors who need to open branches or PRs directly.
- Read or Triage access is preferred for reviewers.
- Direct changes to `main` should be blocked by branch protection.
- CODEOWNERS review should be required for protected areas.
- Repository settings should not be changed without Human Owner approval.

---

## 6. CODEOWNERS boundary

CODEOWNERS review is a repository control mechanism.

It helps protect sensitive files and route changes through the correct review path.

CODEOWNERS review does not by itself mean:

- RABA architecture canon adoption;
- final architectural approval;
- Human Owner approval;
- schema adoption;
- event-family adoption;
- public positioning approval;
- pilot, vendor, referral, or commercial commitment.

Final project authority remains with the Human Owner.

---

## 7. Protected areas

The following areas are governance-critical:

```text
.github/
docs/core/
docs/decision-log/
docs/governance/
docs/reviews/
docs/notes/
inquiries/
README.md
SECURITY.md
```

Changes to these areas should require Human Owner-controlled review.

---

## 8. Non-removal boundary

This policy candidate does not remove contributors or change live permissions by itself.

Contributor access changes require a separate Human Owner decision.

---

## 9. Decision boundary

This document is a repository governance protection candidate.

It does not change RABA architecture canon.

Final project authority remains with the Human Owner.
