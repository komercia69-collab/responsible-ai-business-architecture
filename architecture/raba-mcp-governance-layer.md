# RABA and MCP — Governance Layer for Tool Execution

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — open for review and contribution  
**Core principle:** AI may be probabilistic. Responsibility must not be.

---

## Why This Document Exists

Model Context Protocol (MCP) is becoming a standard integration layer between AI applications and real business systems. It allows AI-enabled hosts to connect to external services through MCP servers that expose tools, resources, prompts and related capabilities.

This is a significant operational shift.

Before this kind of integration layer, an AI model was mostly a conversational partner: the user provided context, and the model responded. With MCP-style integrations, an AI system can become an operational participant inside business systems: reading data, invoking tools, updating records, creating tasks, sending messages, or triggering workflows through a standardized interface.

The technical architecture of MCP is well-documented. What is less systematically addressed is the governance question:

> When an AI agent invokes a tool through MCP, who authorized that action — and is that authorization traceable?

This document defines how RABA approaches that question.

---

## What MCP Provides — and What It Does Not

MCP defines server primitives that allow a host application to interact with external systems.

| Primitive | Primary controller | Examples | Main RABA concern |
|---|---|---|---|
| **Tools** | Model-selected, host-mediated | `create_invoice`, `update_crm`, `send_email`, `delete_record` | Action governance |
| **Resources** | Application / host-mediated | `@notion-doc`, `file:///plan.md`, `linear://issues/{id}` | Context governance |
| **Prompts** | User-triggered workflows | `/summarize`, `/format`, `/code-review` | Workflow initiation governance |

The highest-risk category for action governance is **Tools**.

Tools may be selected by the model based on conversation context, but execution is mediated by the host. Depending on host design, policy, and user settings, execution may be automatic, require confirmation, or be blocked.

Resources and prompts also require governance, but their responsibility questions are different:

- **Resources** raise questions about what context enters the AI system, who authorized access, and whether sensitive data is being exposed.
- **Prompts** raise questions about who initiated a workflow, whether the workflow has been reviewed, and what authority it carries.
- **Tools** raise the strongest action-boundary question: when does AI output become an external effect?

MCP tool annotations such as `readOnly`, `destructive`, and `idempotent` are useful technical labels. They help describe what a tool does. But they are not complete governance controls. They do not by themselves define who is authorized to execute the action, whether approval is required, or who is accountable for the outcome.

> MCP can describe what a tool does. RABA defines who is responsible for whether it runs.

---

## MCP Primitive Responsibility Map

RABA treats MCP primitives as governance-relevant interfaces, not only integration mechanisms.

| MCP / host capability | Technical role | RABA responsibility question |
|---|---|---|
| Tools | Enable model-selected actions against external systems | Is this action inside the agent's permitted boundary? |
| Resources | Provide external data or documents to the host/model context | Who authorized this context to be used? |
| Prompts | Provide prebuilt user-triggered workflows | Who owns the workflow and its expected outcome? |
| Sampling | Allows a server to request model assistance through the host | Who controls reverse model calls and their boundaries? |
| Elicitation | Requests structured user input during a workflow | Is the user being asked to approve, provide data, or assume responsibility? |
| Notifications | Signal changes across sessions or systems | Which notifications require human attention or escalation? |
| Roots | Define filesystem or workspace boundaries | Who approved the boundary of accessible context? |

This document focuses primarily on tool execution because it is where AI-supported output most directly becomes operational action. A complete RABA-MCP governance model should also address context flow, user-triggered workflows, reverse model calls, and notification-driven escalation.

---

## Where Governance Belongs in the MCP Request Flow

A standard MCP-enabled request can be understood as a chain from user input to model decision, tool execution, external service response, and final user-facing answer.

The key governance checkpoint appears between the model's decision to use a tool and the actual execution request.

```text
Step 1   User sends query
Step 2   Host identifies tool need
Step 3   MCP client calls list_tools()
Step 4   MCP server returns available tools
Step 5   Host sends query + available tools to model
Step 6   Model decides: tool X is needed
         ↓
         [RABA GOVERNANCE GATEWAY]
         → What is the action boundary for this tool?
         → What approval state applies?
         → Is human authorization required before execution?
         → Should the action be blocked, recommended, authorized, executed or escalated?
         → Is this action logged to the decision record?
         ↓
Step 7   Tool execution request is released or blocked
Step 8   MCP server calls external API or service
Step 9   External service returns result
Step 10  Result returns to host
Step 11  Model formulates response
Step 12  User sees answer
```

Without a governance gateway at this point, tool execution may become delegated primarily to model selection and host defaults. In low-stakes workflows — reading a document, listing open tickets, summarizing a record — this may be acceptable. In high-impact workflows — sending a customer email, updating financial records, deleting data, submitting transactions — delegation without explicit governance is an organizational risk.

---

## Approval States for MCP Tool Execution

RABA uses the approval-state model defined in [`docs/approval-state-specification.md`](../docs/approval-state-specification.md).

The key distinction is:

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

Earlier RABA drafts used `EXECUTE` broadly. This document now distinguishes:

- `AUTHORIZED` — execution is permitted but may not yet have happened;
- `EXECUTED` — execution has completed and produced an external effect.

This matters for MCP because a tool call can be approved, released, fail, be revoked, expire, or complete. These are different governance events and should not be collapsed into one state.

---

## Sampling as a Second Responsibility Flow

Tool execution is not the only responsibility-sensitive flow in MCP.

Sampling introduces a reverse direction: an MCP server can ask the host/client to perform an LLM call on its behalf.

This creates a second responsibility question:

> If a server initiates a model call through the host, who is responsible for the content, purpose, approval, and downstream use of that call?

Technical user confirmation is not the same as organizational accountability.

A RABA-aligned host should treat sampling as a governable flow with its own checkpoints:

- which server requested the sampling call;
- what context was included;
- whether user review was required before and after the call;
- whether the sampling request attempted to access sensitive data;
- whether the result could influence later tool execution;
- who owns the decision to allow the reverse model call;
- how the sampling request and response are logged.

Sampling should therefore produce responsibility events such as:

```text
SamplingRequested
SamplingContextReviewed
SamplingApproved
SamplingRejected
SamplingResultReturned
SamplingResultUsedForToolDecision
DecisionLogged
```

This prevents sampling from becoming a hidden channel where server-driven model calls influence workflow execution without a clear responsibility record.

---

## Living Approval State, Not One-Time Consent

MCP-connected systems often begin with a consent or authorization moment: a user connects a server, grants OAuth access, or confirms a tool capability.

RABA treats that as the beginning of governance, not the end.

A one-time consent can become stale when:

- a server changes its tool schema;
- a tool adds new required parameters;
- a tool's behavior changes after installation;
- a server moves from read-only to write-capable behavior;
- a workflow starts using a tool in a new business context;
- a capability becomes higher-risk because of volume, customer impact, financial impact, or regulatory context.

Therefore, approval state should be living, not static.

Material changes should trigger review, reclassification, re-approval, blocking, or escalation.

A RABA-aligned host/runtime should be able to emit events such as:

```text
ToolSchemaChanged
ToolBehaviorDriftDetected
ApprovalStateExpired
ReapprovalRequired
ServerCapabilityChanged
GovernanceDriftDetected
```

This is especially important for rug-pull style risks, where a server appears safe at approval time but later changes behavior or schema in a way that expands risk.

---

## Security vs Governance

Security and governance overlap, but they are not the same layer.

| Security asks | RABA governance asks |
|---|---|
| Can this server, token, tool, resource, or transport be abused? | Who owns the risk boundary? |
| Can the model be manipulated through tool descriptions or resource content? | Who approved this capability and its authority? |
| Can data leak across tools, servers, or systems? | Was the context boundary explicitly governed? |
| Can a malicious package compromise users? | Who approved the server source and trust level? |
| Can token scope or audience validation fail? | Who owns authorization and escalation if it fails? |
| Can tool behavior change after consent? | Does approval state expire or require re-approval? |

Security can detect or prevent classes of failure.

Governance defines who was responsible for the authority, approval, escalation, and accountability around those failures.

RABA does not replace MCP security engineering. It provides the responsibility architecture that makes security-relevant decisions governable and auditable.

---

## Host-Layer Responsibility

The RABA governance gateway logically belongs at the host layer or immediately adjacent to it.

The host is where several critical responsibilities meet:

- user interface;
- model connection;
- MCP client sessions;
- tool visibility;
- confirmation UX;
- policy enforcement;
- audit capture;
- escalation routing.

The MCP server exposes capabilities. The model may select a tool. But the host or runtime environment is the place where execution can be mediated before external effects occur.

A responsible host-layer design should be able to:

- classify available tools by risk;
- hide or disable tools outside the user's or agent's authority;
- require approval before execution;
- block destructive or high-impact actions;
- route certain actions to escalation owners;
- capture decision reasons;
- link technical traces to business decision records;
- produce responsibility events for downstream audit and monitoring.

This does not require changing the MCP protocol itself. It requires treating the host/runtime layer as a governance surface, not only as an integration surface.

---

## MCP Tool Classification by Governance Risk

Not all tools carry equal risk. RABA introduces a governance classification that can be informed by MCP tool metadata, host policy, business context, and organizational risk rules.

| Risk level | Typical technical signal | Action type | RABA approval state |
|---|---|---|---|
| Low | `readOnly` | Read, list, retrieve, summarize | `DRAFT` — no external action |
| Medium | `idempotent` or low-impact write | Create, write, update within safe limits | `RECOMMEND` — human review before authorization |
| High | `destructive` or external communication | Delete, send, submit, publish | `AUTHORIZED` required before execution; then `EXECUTED` if completed |
| Critical | Destructive + business impact threshold | Financial, legal, customer-facing, irreversible, regulated | `ESCALATE` — elevated role authorization before execution |

This table is not a universal rule. It is a starting pattern. Organizations should adapt the mapping based on domain, risk appetite, regulation, data sensitivity, and operational impact.

---

## Practical Tool Examples with RABA States

### Example 1: AI reads open GitHub pull requests

```text
Tool:           get_pull_requests
Signal:         readOnly
RABA state:     DRAFT
Authorization:  No additional approval required
Logged:         Session activity / technical trace
```

The model reads data. No external effect occurs. No approval is normally needed, although access to the underlying repository still needs to be governed.

---

### Example 2: AI creates a task in a project management system

```text
Tool:           create_task
Signal:         low-impact write / idempotent-like operation
RABA state:     RECOMMEND → AUTHORIZED → EXECUTED
Authorization:  Human review before authorization
Logged:         Proposed action + reviewer decision + execution result + timestamp
```

The model proposes the task. A human confirms before it is created. After successful creation, the action becomes `EXECUTED`.

---

### Example 3: AI sends a customer-facing email

```text
Tool:           send_email
Signal:         external communication / potentially destructive business impact
RABA state:     RECOMMEND → AUTHORIZED → EXECUTED
Authorization:  Explicit approval required
Logged:         Approver identity + decision reason + email content + timestamp + execution result
Decision log:   Entry created with full accountability record
```

No customer-facing email is sent without named human authorization. The decision and execution outcome are recorded.

---

### Example 4: AI processes a financial transaction above threshold

```text
Tool:           submit_payment
Signal:         financial execution / irreversible or high-impact action
Business rule:  Amount exceeds defined threshold
RABA state:     ESCALATE → AUTHORIZED → EXECUTED
Authorization:  Elevated role required, such as Finance Manager
Logged:         Escalation trigger + routing target + resolution + authorization + execution outcome
```

The action is blocked until escalation is resolved. No execution occurs until authorized.

---

## The Responsibility Gap MCP Does Not Close

MCP's tool annotations are a useful starting point. They can help the host understand what kind of action a tool performs. But they leave several governance questions unanswered.

### Who owns this tool execution?

MCP does not define organizational ownership. A tool may execute because the model selected it and the host released it. RABA requires a named human, role, team, or organizational owner for business-relevant execution.

### Was this action within the agent's permitted boundary?

MCP does not define business action boundaries. The model may be able to call any tool made available to it. Whether that access is appropriate in this context must be defined by governance policy and enforced by the host/runtime layer.

### Is approval required — and was it obtained?

MCP does not provide a universal approval-state model. The protocol itself does not distinguish between a tool that should execute immediately, one that requires review, one that requires explicit authorization, and one that must escalate.

### Is the execution auditable at the organizational level?

MCP-enabled systems can produce technical traces: what was called, with which parameters, and what was returned. These are engineering records. They are not automatically business accountability records. They do not necessarily capture who authorized the action, why, under which policy, and with what organizational authority.

### Who is accountable if the tool execution causes harm?

MCP does not define organizational accountability. If a `send_email` tool sends an incorrect message to a customer, the technical trace can show that the tool was called. It does not by itself answer who was responsible for allowing that call to proceed.

### Who is accountable for server-initiated model calls?

MCP sampling creates a second responsibility gap. A server can initiate a model call through the host. Even when the user is shown the request, the organizational responsibility question remains: who allowed this server to ask for model reasoning, with which context, for which purpose, and with what downstream effect?

RABA closes these gaps by adding an explicit governance layer to MCP tool execution and related MCP flows — without replacing or modifying the protocol itself.

---

## Responsibility Observability for MCP Workflows

Technical observability in MCP-style workflows answers:

- Which tool was called?
- What parameters were passed?
- What did the external service return?
- How long did it take?
- Did the technical call succeed or fail?

Responsibility observability answers:

- Who was accountable for this tool execution?
- Was the tool within the agent's permitted action boundary?
- Was approval required — and was authorization obtained before execution?
- Was escalation required — and did it occur?
- Is the decision recorded in a business accountability log?
- Can an auditor reconstruct the full authorization chain?
- Did the authorized action actually execute?
- Did a server-initiated sampling call influence the workflow or later tool execution?
- Did approval state remain valid after schema, context, risk, or business impact changed?

Both are necessary. They are not the same.

A system can be technically observable and still organizationally unaccountable.

---

## Integration Pattern: RABA Governance Gateway in MCP Architecture

The RABA governance gateway sits between the model's tool decision and the tool execution request.

It does not need to modify the MCP protocol. It operates at the host or runtime layer — the application or platform environment that manages the user interface, model API connection, MCP client sessions, policy decisions, approvals, authorizations, execution release and logs.

```text
MODEL DECISION LAYER
        ↓
[RABA Governance Gateway]
  ├── Classify tool by risk level
  ├── Determine required approval state
  ├── Check action boundary for current agent role
  ├── Route to: auto-execute / human review / authorization / escalation / block
  ├── Record state transition to decision log
  ├── Emit responsibility event
  └── Release or block tool execution request
        ↓
MCP CLIENT → MCP SERVER → EXTERNAL SERVICE
```

This pattern:

- requires no changes to MCP servers or the MCP specification;
- operates at the host or runtime layer;
- can be implemented as middleware between model output and tool execution;
- produces an organizational accountability record alongside the technical trace;
- can emit responsibility events for audit, monitoring, compliance, and management views.

---

## Relationship to Responsibility Event Stream

A RABA governance gateway should not only make a local allow/block decision.

It should also create responsibility events that can be consumed by audit systems, compliance dashboards, risk monitoring, incident review, and management reporting.

Examples:

```text
ToolSelected
ActionBoundaryReached
ApprovalRequested
ApprovalGranted
ApprovalRejected
AuthorizationCreated
ExecutionStarted
ExecutionCompleted
ExecutionBlocked
EscalationTriggered
EscalationAssigned
SamplingRequested
SamplingApproved
ToolSchemaChanged
ReapprovalRequired
GovernanceDriftDetected
DecisionLogged
AuditTraceSigned
```

This connects MCP tool execution and related MCP flows to the broader RABA concept of a Responsibility Event Stream.

---

## What Organizations Need to Define Before Deployment

Before deploying MCP-connected AI agents in production, organizations should answer the following governance questions. These are not only engineering questions. They are organizational decisions that must be made before the system operates — not after an incident.

### Action boundaries

- Which tools may the AI agent execute without human authorization?
- Which tools require review before execution?
- Which tools require explicit authorization from a named role?
- Which tools are prohibited regardless of model confidence?

### Approval and authorization ownership

- Who is the named approver or authorizer for each tool category?
- What is the mechanism — in-workflow confirmation, role-based authorization, or conditional rule?
- What happens if the approver is unavailable?
- When does authorization expire or require re-approval?

### Escalation paths

- What conditions trigger escalation rather than execution?
- Which human role receives each escalation type?
- What is the expected response time?
- What happens if escalation is not acknowledged?

### Accountability records

- What is recorded in the business decision log for each tool execution?
- How long are records retained?
- Who has access to the audit trail?
- Is the technical trace linked to the organizational accountability record?

### Agent authority limits

- What is the maximum scope of action for each agent role?
- Are authority limits defined per tool, per workflow, per risk class, or per session?
- How are authority limits enforced at runtime — not just in policy documents?

### Context and prompt governance

- Which resources may enter the model context?
- Who approved access to sensitive resources?
- Which prompts represent approved workflows?
- Which user-triggered workflows require additional confirmation before tool execution?

### Sampling governance

- Which servers are allowed to request sampling?
- Which sampling requests require user review, organizational approval, or blocking?
- Can sampling results influence later tool execution?
- Are sampling requests and responses logged in the decision record?

### Capability and token governance

- Who authorizes capability tokens or scoped access for agents?
- Are tokens scoped to specific tools, workflows, users, time windows, and risk levels?
- Who is accountable if a capability token is misused?
- What event invalidates or rotates the capability?

---

## Regulated Environments and Pilot Focus

RABA is especially relevant where tool execution creates legal, financial, operational, or reputational consequences.

High-value pilot domains include:

- government and public-sector workflows;
- compliance operations;
- legal contract lifecycle management;
- HR and payroll;
- tax and finance workflows;
- regulated customer communications;
- healthcare and insurance operations.

These environments need more than integration. They need explicit responsibility architecture: action boundaries, approval ownership, escalation paths, decision logs, and auditability.

---

## Conclusion

MCP addresses a major integration problem. AI agents can connect to many systems through a standardized protocol. This is a genuine engineering achievement.

The governance problem remains open.

When an AI agent updates a CRM record, sends a customer email, or submits a financial transaction through MCP, the protocol helps make the action technically executable. It does not by itself ensure the action was organizationally authorized, that accountability is traceable, or that the right human was informed and responsible.

RABA adds the governance layer that MCP does not provide:

- action boundaries defined per agent role;
- approval states embedded in the execution flow;
- named accountability at every tool execution;
- distinction between authorization and completed execution;
- escalation paths enforced at runtime;
- business decision records linked to technical traces;
- responsibility events emitted for audit and monitoring;
- sampling governance for reverse model-call flows;
- living approval state instead of one-time consent;
- responsibility observability as a first-class operational requirement.

The goal is not to slow down AI agents. It is to ensure that as agents act faster and across more systems, the humans who are responsible for outcomes remain clearly identified, properly informed, and genuinely accountable.

---

## Related RABA Documents

- [Approval State Specification](../docs/approval-state-specification.md)
- [Decision Log Schema](../docs/decision-log-schema.md)
- [Responsibility Layer for Agentic AI Architecture](./responsibility-layer-for-agentic-ai-architecture.md)
- [Responsibility Management Interface](../concepts/responsibility-management-interface.md)
- [Responsibility Event Stream](../implementation/responsibility-event-stream.md)
- [MCP Responsibility Threat Map](../security/mcp-responsibility-threat-map.md)

---

*This document is part of the RABA open project. Contributions, critique, and real-world use cases are welcome.*
