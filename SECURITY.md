# Security Policy

## Project Scope

Responsible AI Business Architecture is an early-stage governance architecture and research framework.

It includes documents, diagrams, demo interfaces, playbooks and conceptual tools for AI governance, prompt governance, MCP/connectors and operational controllability.

This repository is not a production security product and does not provide a security guarantee.

---

## Reporting Security Issues

If you discover a potential security issue in this repository, please report it responsibly.

Examples include:

- unsafe demo behavior;
- misleading governance claims;
- insecure sample logic;
- prompt injection examples that could be abused;
- exposed secrets or credentials;
- unsafe connector or MCP patterns;
- documentation that may encourage risky deployment.

Please do not open public issues containing exploitable details.

Instead, provide a high-level report first and avoid publishing operational exploit steps.

---

## Security Design Principles

This project follows these principles:

1. **Human accountability must remain explicit.**
2. **Autonomous AI actions must remain observable.**
3. **High-risk AI actions require approval gates.**
4. **MCP/connectors must be treated as operational risk surfaces.**
5. **Prompt-layer threats must be included in governance design.**
6. **Stop-switch and rollback capability should be designed before autonomy expansion.**

---

## Out of Scope

This project does not provide:

- penetration testing;
- legal compliance certification;
- complete prompt injection protection;
- secure-by-default production software;
- security assurance for third-party AI systems;
- guarantees against misuse, hallucination or operational failure.

---

## Responsible Disclosure Preference

When reporting a concern, include:

- affected file or concept;
- risk description;
- potential business impact;
- suggested mitigation if available;
- whether the issue is documentation-level, demo-level or architecture-level.

---

## Security Principle

> AI capability must not be deployed faster than governance, security and accountability controls can understand and contain it.
