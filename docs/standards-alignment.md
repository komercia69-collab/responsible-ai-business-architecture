# RABA Standards Alignment Map

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — positioning and alignment  
**Core principle:** AI may be probabilistic. Responsibility must not be.

---

## Purpose

RABA is not intended to replace existing AI governance, risk, security, audit, or compliance frameworks.

It is intended to complement them by translating high-level governance expectations into operational workflow controls for AI-assisted and AI-agentic systems.

This document maps RABA to selected standards and frameworks and clarifies where RABA adds value.

---

## RABA's specific contribution

Many existing frameworks ask organizations to manage AI risk, define accountability, document oversight, and maintain auditability.

RABA focuses on the operational layer where those expectations become workflow controls:

- action boundaries;
- approval states;
- governance gateways;
- decision logs;
- escalation ownership;
- responsibility observability;
- responsibility event streams.

In short:

```text
External frameworks define governance expectations.
RABA helps operationalize them inside AI workflows.
```

---

## Alignment summary

| Framework / standard | What it primarily addresses | Where RABA complements it |
|---|---|---|
| NIST AI RMF | AI risk management functions: govern, map, measure, manage | Operationalizes accountability, approval states, action boundaries and decision logs inside workflows |
| EU AI Act | Legal obligations for AI systems, especially high-risk systems | Provides workflow-level controls for human oversight, logging, escalation and accountability evidence |
| ISO/IEC 42001 | AI management system requirements | Helps translate AI management requirements into concrete operational controls and records |
| OWASP Top 10 for LLM Applications | Security risks in LLM applications | Adds responsibility ownership, approval and audit mapping around security-relevant actions |
| Future OWASP MCP Top 10 / MCP threat models | Security risks in MCP-connected tool execution | Maps MCP security threats to responsibility failures and governance controls |
| SOC 2 / audit controls | Trust service criteria, controls, evidence, auditability | Provides evidence structures: decision logs, responsibility events, authorization records |
| Enterprise risk management | Organizational risk ownership and control | Connects AI actions to named owners, escalation paths and business impact boundaries |

---

## NIST AI RMF

NIST AI RMF is organized around functions such as Govern, Map, Measure and Manage.

RABA aligns most directly with the operational side of these functions.

| NIST-style concern | RABA operationalization |
|---|---|
| Governance structures | Named human ownership, escalation roles, workflow owners |
| Risk mapping | Action boundaries, risk classification, approval thresholds |
| Measurement | Responsibility observability, approval behavior monitoring, event stream analysis |
| Management | Governance gateway, decision logs, approval state transitions |

RABA does not replace NIST AI RMF. It can act as an implementation pattern for teams asking: “How do we make these governance expectations visible inside real AI workflows?”

---

## EU AI Act

The EU AI Act creates legal obligations for certain AI systems, especially high-risk systems.

RABA does not provide legal compliance by itself.

However, RABA can support operational evidence for requirements related to:

- human oversight;
- logging;
- accountability;
- risk controls;
- post-market monitoring;
- governance of high-impact workflows.

RABA adds value by specifying what should be visible and recorded when an AI-supported action approaches or crosses an action boundary.

Examples:

- Who approved the action?
- Was escalation required?
- Was the action within delegated authority?
- Was the business decision log created?
- Is the technical trace linked to accountability evidence?

---

## ISO/IEC 42001

ISO/IEC 42001 focuses on AI management systems.

RABA can complement an AI management system by defining operational artifacts for AI workflow governance.

| AI management need | RABA artifact |
|---|---|
| Defined roles and responsibilities | Human owner, approver, escalation owner |
| Operational controls | Governance gateway and approval states |
| Evidence and records | Decision log and responsibility events |
| Continuous improvement | Review of approval behavior, escalation patterns, incidents |
| Risk-based operation | Action boundaries and risk-based state transitions |

RABA can be used as a workflow-level companion to broader AI management system practices.

---

## OWASP Top 10 for LLM Applications

OWASP LLM security risks focus on how LLM applications can be attacked or misused.

RABA does not replace security controls such as input validation, prompt-injection defenses, least privilege, sandboxing or monitoring.

RABA adds a governance layer around security-relevant actions:

- Who approved the tool or capability?
- Which action boundary was crossed?
- Was the tool execution authorized?
- Was escalation required?
- Is the incident reconstructable from responsibility records?

Security asks whether something can be abused.

RABA asks who owned the authority, approval and accountability around that abuse.

---

## MCP threat models and future OWASP MCP work

MCP-connected AI agents expose a specific governance surface: tool execution, resources, prompts, sampling, roots, notifications and authorization flows.

RABA's MCP work focuses on the responsibility layer around that surface.

Relevant RABA documents:

- [`architecture/raba-mcp-governance-layer.md`](../architecture/raba-mcp-governance-layer.md)
- [`security/mcp-responsibility-threat-map.md`](../security/mcp-responsibility-threat-map.md)

RABA does not claim to define MCP security standards.

It maps MCP security risks into responsibility architecture:

- tool poisoning → untrusted tool authority;
- rug-pull updates → stale approval state;
- cross-server leakage → ungoverned context boundary;
- token misuse → broken authorization responsibility;
- supply-chain compromise → unmanaged trust boundary.

---

## SOC 2 and audit controls

SOC 2 and similar audit frameworks require evidence that controls exist and operate effectively.

RABA can help generate evidence for AI workflow governance.

Potential audit evidence includes:

- approval state history;
- decision log entries;
- escalation records;
- technical trace links;
- role-based authorization records;
- policy references;
- audit trace signatures;
- review of approval behavior and rubber-stamp risk.

RABA's value is not that it guarantees compliance. Its value is that it defines records and state transitions that auditors and governance teams can inspect.

---

## What RABA does not claim

RABA does not claim to be:

- legal advice;
- a certification standard;
- a replacement for NIST AI RMF, EU AI Act, ISO/IEC 42001, SOC 2 or OWASP;
- a complete security framework;
- a guarantee that AI systems are safe or compliant.

RABA is a practical architecture for workflow-level responsibility and auditability.

---

## Open questions

- Which standards should RABA map to in more detail first?
- Which controls should become reusable templates?
- Which RABA artifacts should become audit evidence examples?
- How should RABA map to EU AI Act high-risk system obligations in specific domains?
- How should RABA align with internal enterprise control libraries?

---

## Conclusion

RABA is most useful when treated as an operational bridge.

It connects high-level governance expectations with runtime controls, workflow states, decision records and responsibility events.

Existing frameworks help organizations know what they should govern.

RABA helps define how that governance can appear inside the actual AI workflow.
