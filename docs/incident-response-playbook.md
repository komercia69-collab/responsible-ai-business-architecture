# Incident Response Playbook

## Responsible AI Business Architecture

This playbook defines a recommended response process if repository credentials, tokens or sensitive configuration data are unintentionally exposed.

---

# Core Principle

> Fast containment matters more than perfect concealment.

The objective is to:

- contain exposure quickly;
- reduce operational risk;
- preserve governance integrity;
- restore trust and controllability.

---

# 1. Immediate Actions

## Initial Triage

Immediately determine:

- what type of credential or token was exposed;
- whether it is active;
- whether the repository was public during exposure;
- whether workflows, MCP tooling or automation were affected;
- whether the exposure could enable:
  - write actions;
  - infrastructure access;
  - API misuse;
  - operational escalation.

---

## Immediate Containment

If the credential is active:

- revoke or disable it immediately;
- stop affected workflows if necessary;
- pause automation if operational impact is unclear;
- remove exposed values from visible repository content.

---

## Preserve Context

Before major cleanup actions:

- record:
  - affected commit;
  - branch;
  - timestamp;
  - exposure scope;
  - related systems.

---

# 2. Revoke / Rotate Procedure

## API Keys / Tokens

Immediately:

- revoke exposed token;
- issue replacement credential;
- update:
  - GitHub Secrets;
  - deployment environments;
  - automation tooling;
  - MCP-related systems;
  - local development environments.

---

## Passwords / Credentials

If passwords or login credentials were exposed:

- rotate passwords;
- revoke active sessions where possible;
- review access logs;
- review related systems for misuse.

---

# 3. History Cleanup Decision

## Decide Whether Cleanup Is Necessary

Not every exposure requires Git history rewriting.

| Situation | Recommended Action |
|---|---|
| Credential revoked immediately | Usually no history rewrite needed |
| Credential never valid | No rewrite needed |
| Active infrastructure credential exposed publicly | Consider cleanup |
| High-risk operational token | Strongly consider cleanup |
| Widespread cloning/forking already occurred | Cleanup may have limited value |

---

## Important Consideration

History rewriting:

- changes commit SHAs;
- may disrupt contributors;
- does not guarantee removal from forks or clones.

Credential revocation is usually more important than history cleanup.

---

# 4. Notification Steps

## Internal Notification

Notify:

- repository maintainers;
- affected operators;
- deployment owners;
- governance reviewers.

Include:

- exposure scope;
- affected systems;
- containment status;
- rotation status.

---

## External Notification

Consider external notification if:

- third-party systems were affected;
- operational integrations were exposed;
- partner systems may be impacted.

Avoid unnecessary disclosure of sensitive operational details.

---

# 5. Post-Incident Review

Conduct a lightweight review:

- how the exposure occurred;
- whether push protection was bypassed;
- whether workflow design contributed;
- whether governance controls were insufficient;
- whether least-privilege could reduce impact.

---

# 6. Preventive Improvements

Possible follow-up actions:

- tighten workflow permissions;
- reduce credential scope;
- improve environment isolation;
- strengthen review processes;
- improve contributor guidance;
- strengthen MCP governance boundaries.

---

# 7. Closure Checklist

## Technical Closure

- [ ] Credential revoked
- [ ] Replacement credential issued
- [ ] Workflows updated
- [ ] GitHub Secrets updated
- [ ] Related systems reviewed
- [ ] Exposure scope assessed

---

## Governance Closure

- [ ] Incident documented
- [ ] Root cause reviewed
- [ ] Governance gaps identified
- [ ] Corrective actions defined
- [ ] Future prevention steps identified

---

## Repository Closure

- [ ] Public exposure risk evaluated
- [ ] History cleanup decision documented
- [ ] Security alerts resolved
- [ ] Maintainers informed

---

# Governance Principle

> Governance integrity includes operational response readiness.
