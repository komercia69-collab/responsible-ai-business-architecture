# Security Policy

## Responsible AI Business Architecture

This repository explores governance architecture for AI-native enterprises, including:

- AI agents
- MCP/connectors
- autonomous workflows
- prompt governance
- governance observability
- corrective governance
- operational controllability

Because these concepts may influence real-world deployments, responsible security handling is important.

---

# Supported Versions

| Version / Branch | Supported |
|---|---|
| main | ✅ Yes |
| archived branches | ❌ No |
| experimental forks | ❌ No |

Security fixes and governance corrections are applied primarily to the `main` branch.

---

# Scope

This repository primarily contains:

- architecture documentation
- governance frameworks
- diagrams
- HTML demos
- assessment tools
- workflow concepts

This project is:

- not a production security product;
- not a compliance certification framework;
- not a guarantee of secure AI deployment.

Examples and diagrams are illustrative unless explicitly stated otherwise.

---

# Reporting a Vulnerability

Please report suspected vulnerabilities or unsafe patterns responsibly.

Examples include:

- exposed credentials or secrets;
- insecure GitHub Actions workflows;
- unsafe MCP examples;
- prompt injection risks;
- governance bypass scenarios;
- unsafe write-action flows;
- operational escalation risks;
- misleading security claims.

## Preferred Reporting Method

Use GitHub Private Vulnerability Reporting if enabled.

Alternatively, open a private security advisory or contact the maintainers directly.

Please avoid publishing exploit details in public issues before review.

For operational response guidance, see:

- `docs/incident-response-playbook.md`

---

# What to Include in a Report

Helpful reports typically include:

- affected file or component;
- description of the issue;
- potential impact;
- reproduction steps (if applicable);
- suggested mitigation (optional);
- whether the issue affects:
  - governance integrity;
  - operational controllability;
  - MCP/connectors;
  - prompt governance;
  - workflow safety.

---

# Response SLA

Target response timelines:

| Severity | Initial Response Target |
|---|---|
| Critical | within 48 hours |
| High | within 5 business days |
| Medium | within 10 business days |
| Low | best effort |

These are goals, not guarantees.

---

# Severity Handling

## Critical
Issues that may enable:

- unauthorized operational actions;
- credential exposure;
- dangerous workflow execution;
- severe governance bypass;
- uncontrolled write actions.

## High
Issues that significantly weaken:

- governance observability;
- trust boundaries;
- escalation controls;
- workflow containment.

## Medium
Issues involving:

- misleading examples;
- governance inconsistencies;
- unsafe configuration guidance;
- incomplete safeguards.

## Low
Minor documentation, formatting or non-exploitable issues.

---

# Disclosure Policy

We support coordinated and responsible disclosure.

Please:

- allow reasonable time for review and mitigation;
- avoid public disclosure of actively exploitable issues before coordination;
- avoid sharing sensitive data publicly.

After mitigation, maintainers may acknowledge contributors who responsibly reported issues.

---

# Safe Harbor

We support good-faith security research intended to improve the project.

If you:

- act responsibly;
- avoid privacy violations;
- avoid service disruption;
- avoid destructive behavior;
- avoid unauthorized data access attempts;

we will not consider your research to be malicious.

This safe harbor applies only to research conducted responsibly and ethically.

---

# Governance Integrity

This project treats governance credibility as part of security.

Security includes not only code safety, but also:

- operational controllability;
- runtime observability;
- governance transparency;
- responsible architecture guidance.

---

# Security Principle

> Governance must scale faster than autonomy.
