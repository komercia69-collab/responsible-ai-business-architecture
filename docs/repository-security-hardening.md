# Repository Security Hardening

> Practical security checklist for maintaining this repository when working with external contributors, AI assistants and prototype tooling.

## Purpose

This project invites AI-assisted review, external suggestions and potential contributor prototypes.

That makes repository security and review discipline important.

The goal is not to block collaboration.

The goal is to keep collaboration safe, reviewable and human-governed.

---

## Core Security Principle

External AI systems and external contributors may propose changes.

They should not receive direct authority to modify protected project content without human review.

> AI may propose. Humans decide.

---

## Immediate Repository Owner Checklist

These actions should be performed by the repository owner in GitHub settings.

| Action | Status | Why It Matters |
|---|---|---|
| Enable 2FA on all maintainer accounts | Manual | Protects maintainer identity and repository access |
| Review active sessions and devices | Manual | Detects unexpected access |
| Review personal access tokens | Manual | Removes unused or over-permissioned tokens |
| Review GitHub Apps and OAuth apps | Manual | Limits third-party access |
| Protect the `main` branch | Manual | Prevents direct unreviewed changes |
| Require pull requests before merge | Manual | Preserves human review gates |
| Prefer squash merge for documentation changes | Manual | Keeps history readable |
| Review repository collaborators | Manual | Ensures only expected users have write access |
| Avoid unknown VS Code extensions | Manual | Reduces risk from malicious extensions |
| Do not store secrets in repository files | Ongoing | Prevents credential leakage |

---

## Recommended Branch Protection for `main`

Minimum useful settings:

- require pull request before merging;
- block direct pushes to `main`;
- require conversation resolution before merge;
- optionally require linear history;
- optionally require status checks once tests or link checks exist.

This project currently uses small PRs and squash merges as a practical human review pattern.

Branch protection should reinforce that pattern.

---

## AI Tooling Safety Rules

When using AI assistants, coding agents or automation tools:

- do not give unknown AI tools repository write access;
- prefer read-only access for analysis;
- use branch-based changes rather than direct commits to `main`;
- review every AI-generated file before merge;
- avoid connecting personal GitHub tokens to untrusted tools;
- avoid pasting secrets, tokens or private credentials into AI chats;
- keep AI suggestions in issue, PR or backlog form until reviewed.

---

## External Contributor Safety Rules

External contributors are welcome when changes are small, reviewable and aligned with the project direction.

Recommended contributor pattern:

```text
Issue or suggestion
        ↓
Small branch / fork
        ↓
Pull request
        ↓
Human review
        ↓
Merge / request changes / close
```

Avoid accepting:

- large unreviewed rewrites;
- unclear generated content;
- code that requires secrets without explanation;
- dependencies with unknown purpose;
- automation that can write directly to the repository;
- claims of certification, compliance or security guarantees.

---

## Prototype-Specific Rules

For early prototypes such as AI Suggestion Intake Form, Coordination Room UI or Partner Readiness Dashboard:

- first versions should be static or copy-output only;
- no direct write access to GitHub in the first prototype;
- no secret tokens in frontend code;
- backend/API access should be added only after clear review;
- submissions should create reviewable suggestions, not automatic changes;
- all external input should be treated as untrusted.

Safe first version:

```text
Form input
        ↓
Markdown preview
        ↓
Human copies into issue / PR / backlog
```

Later controlled version:

```text
Form input
        ↓
Backend validation
        ↓
Rate limit / spam control
        ↓
GitHub issue created with label
        ↓
Human review gate
```

---

## Manual Security Tasks Still Pending

These tasks should be tracked until completed:

- configure branch protection for `main`;
- review repository collaborators and permissions;
- review GitHub Apps and OAuth apps;
- review personal access tokens;
- create first GitHub Release from `docs/releases/v0.1-partner-preview.md`;
- add repository topics and description;
- add automated checks later if code prototypes become more complex.

---

## Relationship to Project Governance

This checklist is not separate from the project philosophy.

It is an example of the same governance pattern:

```text
External input
        ↓
Structured suggestion or PR
        ↓
Human review gate
        ↓
Decision and log
```

Repository security is part of Human-AI Operational Coordination because AI-assisted development increases the number of possible inputs, tools and action paths.

Governance must scale before automation scales.

---

## Closing Principle

Collaboration should be open.

Modification authority should be controlled.

AI and external contributors may increase project capability, but responsibility for repository changes must remain human, visible and reviewable.
