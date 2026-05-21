# MCP Responsibility Threat Map

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — security and responsibility mapping  
**Related:** RABA and MCP — Governance Layer for Tool Execution

---

## Purpose

Model Context Protocol (MCP) makes it possible for AI agents to connect to external systems through standardized tools, resources, prompts, transports, and authorization flows.

This creates a powerful execution layer for AI-assisted and agentic workflows.

It also creates a responsibility problem.

Security incidents in MCP-connected environments are not only technical failures. They can also become responsibility failures: unclear ownership, weak approval boundaries, untrusted tool metadata, cross-system leakage, missing escalation, and lack of business accountability records.

This document maps MCP threat classes to RABA responsibility concerns.

The goal is not to replace security engineering. The goal is to connect security failures with responsibility architecture.

---

## Core framing

MCP security asks:

- Can this tool, server, token, resource, or transport be abused?
- Can the model be manipulated through tool descriptions or resource content?
- Can data leak across tools, servers, sessions, or systems?
- Can a malicious package or registry compromise many users?

RABA adds:

- Who owned the risk boundary?
- Who approved access to the tool or resource?
- Which action boundary was crossed?
- Was escalation required?
- Was the authorization traceable?
- Can the organization reconstruct responsibility after the incident?

In short:

> MCP threat modeling identifies how the system can fail. RABA maps who was responsible for preventing, approving, detecting, or escalating that failure.

---

## Important principle: annotations are not a trust contract

MCP tool annotations such as `readOnlyHint`, `destructiveHint`, `idempotentHint`, and `openWorldHint` are useful signals for user experience and host behavior.

They should not be treated as a security contract or governance guarantee.

A malicious or compromised server can mislabel a tool. A community server can omit annotations. A previously safe server can change behavior after installation.

Therefore, RABA treats tool annotations as one input into governance classification, not as the source of truth.

Governance classification should also consider:

- server trust level;
- vendor / reference / community source;
- tool schema;
- actual external system permissions;
- business impact;
- data sensitivity;
- user role;
- workflow context;
- historical behavior;
- approval and escalation policy.

---

## Threat map: MCP attacks as responsibility failures

| MCP threat class | Technical failure | RABA responsibility failure | Governance control direction |
|---|---|---|---|
| Tool poisoning / line jumping | Tool description contains hidden instructions for the model | Tool authority is delegated based on untrusted metadata | Treat tool descriptions as untrusted input; require host-layer policy, tool review, and action-boundary checks |
| Rug-pull updates | Server changes schema or behavior after initial consent | Runtime governance drifts after approval | Version pinning, schema integrity checks, re-approval on material tool changes |
| Typosquatting | User installs fake or misleading MCP server/package | Supply-chain trust boundary is unclear | Vendor/reference priority, verified source policy, registry trust scoring |
| Confused deputy | Authorization flow allows a malicious client to abuse existing consent | Authorization owner and resource audience are unclear | Strict OAuth audience validation, explicit client identity, consent review |
| Prompt injection through resources | External content manipulates model behavior | Context boundary is not governed | Resource trust classification, context sanitization, prompt-injection scanning, read vs execute separation |
| Exfiltration through tool args / URIs | Secrets are passed into later tool calls or URLs | Tool-chain responsibility boundary is missing | Secret redaction, argument inspection, cross-tool data-flow controls |
| Cross-server data leakage | One server influences the agent to leak data through another server | Multi-server session boundary is not governed | Session isolation, per-server data boundaries, cross-server policy checks |
| Token passthrough | Token issued for one audience is accepted or forwarded elsewhere | Authorization boundary is broken | Resource indicators, audience validation, token scope enforcement |
| Unauthenticated public servers / SSRF-like exposure | Public MCP server exposes internal or cloud resources | Network and infrastructure boundary ownership is unclear | Network allowlists, authentication requirements, egress controls, server review |
| Supply-chain registry compromise | Registry accepts malicious packages or payloads | Trust in ecosystem distribution is unmanaged | Approved registries, package scanning, dependency review, provenance verification |

---

## Responsibility checkpoints for MCP deployments

A RABA-aligned MCP deployment should define checkpoints before agents operate in production.

### 1. Server trust checkpoint

Before an MCP server is connected:

- Is it vendor, reference, or community maintained?
- Who maintains it?
- When was it last updated?
- Does it publish security documentation?
- Does it request minimal scopes?
- Is it verified in a trusted registry?
- Who in the organization approved this server?

**Responsibility question:** Who approved this server as a trusted capability provider?

---

### 2. Tool classification checkpoint

Before a tool is exposed to a model:

- Is it read-only, write-capable, destructive, external-facing, or financially relevant?
- Does it operate inside or outside the organization?
- Does it call the open internet?
- Does it touch customer, legal, financial, health, HR, or regulated data?
- What is the maximum business impact if it is misused?

**Responsibility question:** Which action boundary applies to this tool?

---

### 3. Context boundary checkpoint

Before resources are made available:

- Which resources may enter the model context?
- Are resources trusted or untrusted?
- Can external documents contain instructions that manipulate the model?
- Are sensitive fields redacted before context ingestion?
- Are resources separated by project, tenant, client, or risk class?

**Responsibility question:** Who authorized this context to influence the AI workflow?

---

### 4. Authorization checkpoint

Before remote MCP access is granted:

- Are OAuth scopes minimal?
- Is the token audience validated?
- Can access be revoked independently?
- Are local and remote servers treated differently?
- Is the user aware which system receives access?

**Responsibility question:** Who owns the authorization boundary?

---

### 5. Execution checkpoint

Before a tool call is released:

- Did the model select the tool?
- Is the selected tool inside the agent's permitted authority?
- Is approval required?
- Has approval been obtained?
- Is escalation required?
- Is the action logged before execution?

**Responsibility question:** Who authorized this tool execution?

---

### 6. Audit checkpoint

After execution or blocking:

- Was the technical trace captured?
- Was the business decision log created?
- Are approval, rejection, escalation, and execution events linked?
- Can an auditor reconstruct the responsibility chain?
- Are sensitive values redacted at source?

**Responsibility question:** Can the organization prove how the action was governed?

---

## Responsibility event examples for MCP threats

A governance gateway or responsibility event stream can emit events such as:

```text
MCPServerConnected
MCPServerApproved
MCPToolDiscovered
MCPToolClassified
MCPToolSchemaChanged
MCPToolRejected
MCPResourceLoaded
ContextBoundaryReached
ToolSelected
ActionBoundaryReached
ApprovalRequested
ApprovalGranted
ApprovalRejected
ExecutionBlocked
EscalationTriggered
EscalationAssigned
TokenScopeRejected
CrossServerLeakageDetected
DecisionLogged
AuditTraceSigned
```

These events make security-relevant decisions visible as responsibility-relevant records.

---

## Defensive design mapped to RABA

MCP server defensive design can support RABA governance when it exposes the right signals and limits.

| Defensive design pattern | Security purpose | RABA responsibility value |
|---|---|---|
| Accurate tool annotations | Improve host UX and risk display | Helps initial classification, but does not replace governance |
| Confirmation metadata for destructive tools | Prevent accidental destructive execution | Supports explicit approval states |
| Dry-run mode | Preview before execution | Enables `RECOMMEND` before `EXECUTE` |
| Idempotency keys | Prevent duplicate side effects | Supports safe retry and audit reconstruction |
| Output sanitization | Reduce secret leakage into model context | Protects context and cross-tool boundaries |
| Audit logging with redaction | Preserve traceability without leaking secrets | Supports responsibility observability |
| Correlation IDs | Connect server logs with host traces | Links technical trace to business decision log |

---

## Governance patterns for high-risk MCP use

For high-impact environments, RABA recommends:

- separate MCP sessions by business domain or risk level;
- do not mix untrusted community servers with sensitive enterprise connectors in the same agent session;
- require explicit approval before destructive or external-facing tool execution;
- require escalation for financial, legal, regulated, or irreversible actions;
- log tool schema changes and require re-approval after material changes;
- treat resource content as untrusted input unless verified;
- use minimal OAuth scopes and validate token audience;
- capture responsibility events for server connection, tool classification, approval, escalation, and execution;
- review approval behavior to detect rubber-stamp approval patterns;
- maintain a business decision log linked to technical traces.

---

## Relationship to existing RABA documents

This document extends:

- [RABA and MCP — Governance Layer for Tool Execution](../architecture/raba-mcp-governance-layer.md)
- [Responsibility Event Stream](../implementation/responsibility-event-stream.md)
- [Responsibility Management Interface](../concepts/responsibility-management-interface.md)
- [Responsibility Layer for Agentic AI Architecture](../architecture/responsibility-layer-for-agentic-ai-architecture.md)

The MCP governance layer defines where responsibility should sit in the tool execution flow.

The Responsibility Event Stream defines how responsibility events can be captured.

This threat map defines how MCP security risks become responsibility architecture requirements.

---

## Open questions

- What minimum MCP server review should be required before production use?
- How should organizations classify community MCP servers by trust level?
- Should material tool schema changes trigger mandatory re-approval?
- How should cross-server data leakage be detected in real time?
- Which responsibility events should be mandatory for high-risk tools?
- How should tool annotations be validated against observed behavior?
- How should approval and escalation work when multiple MCP servers participate in one workflow?
- What should an MCP responsibility audit report contain?

---

## Conclusion

MCP expands what AI agents can do inside real systems.

Security work shows how those capabilities can be abused.

RABA adds the missing responsibility question: who approved, owned, monitored, escalated, and remained accountable for each capability and each action?

In MCP-connected environments, responsibility cannot be attached only after an incident.

It must be designed into server selection, tool classification, context boundaries, authorization, execution, logging, and audit from the beginning.

> Secure MCP is not only about preventing attacks. It is about making trust, authority, and accountability operationally visible.
