# Agent Development Kit Governance Mapping

## Purpose

This document maps technical agent development kit patterns to governance architecture.

Modern AI agent development kits often organize agent systems through layers such as:

- instruction files;
- skills;
- hooks;
- subagents;
- plugins;
- external tools;
- team execution environments.

These layers increase capability, reuse and speed.

Responsible AI Business Architecture asks a complementary question:

> How should these capabilities be bounded, monitored, delegated, corrected and made accountable inside real organizations?

This document does not define a specific vendor implementation.

It provides a governance interpretation of common agent development kit layers.

---

## Core Thesis

> Agent development kits increase capability.
>
> Governance architecture must define how that capability is bounded, monitored, delegated and corrected.

A technical agent framework can make AI systems more useful.

But without governance mapping, the same framework can also increase:

- autonomy without accountability;
- delegation without clear ownership;
- tool access without operational boundaries;
- skill reuse without policy control;
- subagent execution without visibility;
- hooks without responsibility design;
- plugins without risk classification.

The question is not only:

> Can this agent system do the task?

The deeper governance question is:

> Under whose authority, within which boundary, with which controls, logs, escalation paths and recovery options may this agent system act?

---

## Technical Layer to Governance Meaning

| Technical agent layer | Technical purpose | Governance meaning |
|---|---|---|
| Instruction / memory file | Defines persistent rules, project context and operating conventions | Mission clarity, policy inheritance and accountability framing |
| Skills | Provide reusable capabilities, scripts, templates and task-specific context | Capability registry, approved competence scope and skill-level permission control |
| Hooks | Trigger checks before, during or after tool use or agent execution | Runtime governance, validation, escalation, approval and correction points |
| Subagents | Delegate specialized tasks to narrower agents | Role-based autonomy, task decomposition, model-agent fit and delegated responsibility boundaries |
| Plugins | Distribute reusable capabilities across teams or environments | Shared capability governance, version control, risk classification and organizational reuse policy |
| External tools / MCP servers | Connect agents to APIs, files, databases and operational systems | Tool permission boundaries, data access control, execution authority and auditability |
| Agent teams | Coordinate multiple agents working in parallel | Multi-agent coordination governance, escalation saturation control and cross-agent visibility |

---

## Governance Mapping Table

| Agent development element | Risk if ungoverned | Required governance control | Related RABA concept |
|---|---|---|---|
| Persistent instruction file | Hidden policy drift, outdated assumptions, unclear authority | Versioned governance rules, review cadence, explicit mission statement | Project Intent, AI Action Boundary Mapping |
| Skill library | Unapproved capabilities reused in sensitive contexts | Skill approval, risk labels, usage boundaries, documentation | Model-Agent Fit Governance |
| Pre-tool hooks | Checks exist technically but do not map to accountability | Human approval rules, policy checks, financial / safety thresholds | AI Governance Gateway |
| Post-tool hooks | Failures are logged but not operationally corrected | Outcome monitoring, rollback triggers, incident review | Governance Nervous System |
| Stop hooks | Agent stops but no human recovery path exists | Escalation ownership, recovery workflow, human decision point | Corrective Governance |
| Subagent delegation | Main agent loses context or delegates beyond authority | Delegation map, subagent mission limits, shared logs | Agent Design Failure Patterns |
| Parallel agent execution | Fast local actions create global coordination failure | Coordination visibility, rate limits, conflict detection | Coordination Asymmetry |
| Plugin distribution | Unsafe patterns scale across teams | Governance review before distribution, version control, deprecation policy | Governance Toolkit |
| Tool connectors | Agent can access or modify real systems without clear boundary | Access control, least privilege, execution approval, audit logs | AI Governance Gateway |
| Agent team orchestration | Humans cannot understand combined system behavior | Owner-level process dynamics view and governance load monitoring | Human-AI Coordination Room |

---

## Five-Layer Gap Diagnostic

Many production failures in agentic systems can be traced to a missing or weak layer.

A five-layer agent stack can be read as a diagnostic map:

```text
Instruction / memory file
        ↓
Skills
        ↓
Hooks
        ↓
Subagents
        ↓
Plugins
```

In one line:

```text
Instructions set rules → Skills provide expertise → Hooks enforce quality → Subagents delegate work → Plugins distribute capability
```

The governance diagnostic question is:

> Which layer is missing, weak, overloaded or ungoverned in this agent system?

| Layer | If missing or weak | Governance question |
|---|---|---|
| Instruction / memory file | The agent lacks stable mission, rules, context and operating constraints | What is the agent's constitution and who owns it? |
| Skills | The agent repeats work, improvises capability or relies on bloated context | Which capabilities are approved, reusable and bounded? |
| Hooks | Quality, safety and permission checks depend on prompt obedience | Where are runtime checks enforced outside the prompt? |
| Subagents | The main agent does everything, loses focus or delegates informally | Which tasks require bounded specialist agents? |
| Plugins | Capability cannot be safely reused, versioned or distributed across teams | Which capabilities are approved for organizational reuse? |

This diagnostic helps convert a technical architecture question into a governance architecture question.

The practical review is simple:

- if rules are unclear, strengthen the instruction / memory layer;
- if expertise is improvised, define governed skills;
- if quality depends on trust, add hooks;
- if work is overloaded, define bounded subagents;
- if reuse is chaotic, govern plugins;
- if all layers exist but still fail, inspect cross-layer coordination and accountability.

Key principle:

> Most agentic failures are not only model failures. They are often missing-layer, weak-boundary or poor-coordination failures.

---

## Instruction Files as Governance Memory

Persistent instruction files can act like operational memory for an agent.

They may include:

- architectural rules;
- naming conventions;
- coding standards;
- project goals;
- escalation rules;
- tool-use expectations;
- context boundaries.

From a governance perspective, these files are not only prompt material.

They are part of the agent's operational constitution.

Governance questions:

- Who owns the instruction file?
- Who may change it?
- How are changes reviewed?
- Which rules are technical preferences and which are policy constraints?
- How does the organization detect instruction drift?
- How are conflicting instructions resolved?

Key principle:

> Persistent agent instructions should be treated as governance-relevant operational memory, not only as prompt engineering.

---

## Skills as Governed Capabilities

Skills make agents more capable by packaging reusable knowledge, scripts, templates or procedures.

This is powerful because it reduces repeated work.

It is risky because capability can spread faster than governance.

Governance questions:

- Is this skill approved for internal use, customer-facing use or operational execution?
- Does the skill read data, transform data or trigger action?
- Which model capability is required to use it safely?
- Does the skill require human review before output is used?
- Does the skill create logs?
- Can the skill be disabled if it behaves incorrectly?

Example skill classification:

| Skill type | Governance level |
|---|---|
| Text summarization | Low to medium, depending on data sensitivity |
| Report drafting | Medium, requires review before publication |
| Customer reply drafting | Medium to high, depending on customer impact |
| Code modification | High, requires testing and review |
| Financial recommendation | High, requires evidence and approval |
| System action / API trigger | Very high, requires gateway control |

Key principle:

> Skills are not only productivity modules. They are governed capabilities.

---

## Hooks as Runtime Governance Points

Hooks are one of the strongest technical bridges into governance architecture.

They can create control points around agent behavior:

- before tool use;
- after tool use;
- before execution;
- after execution;
- on error;
- on stop;
- on escalation;
- on subagent delegation.

This maps directly to runtime governance.

Possible governance hook types:

| Hook type | Governance function |
|---|---|
| Pre-tool-use hook | Check permission, policy, risk and context before action |
| Post-tool-use hook | Log result, detect anomaly, trigger review |
| Pre-execution hook | Require approval before customer-impacting or system-changing action |
| Error hook | Escalate failed or uncertain operation |
| Stop hook | Preserve recovery path and human handoff |
| Subagent-start hook | Validate delegation scope |
| Subagent-stop hook | Validate returned result and accountability chain |

Key principle:

> Hooks should not only automate checks. They should operationalize responsibility.

---

## Subagents as Delegated Operational Roles

Subagents allow a main agent to delegate specialized work.

Examples:

- code reviewer;
- test runner;
- research explorer;
- customer support classifier;
- compliance checker;
- data analyst;
- escalation detector.

From a governance perspective, a subagent is not just a technical worker.

It is a delegated operational role.

Governance questions:

- What is the subagent's mission?
- What context can it access?
- What tools can it use?
- Can it act directly or only report back?
- What model is appropriate for this role?
- What happens if the subagent fails?
- Who is accountable for the delegated result?

Key principle:

> Delegation without boundary design becomes hidden autonomy.

---

## Plugins as Shared Governance-Relevant Capabilities

Plugins distribute capabilities across teams.

They can create organizational leverage.

They can also spread risk quickly.

Governance questions:

- Is the plugin experimental, approved or deprecated?
- Which teams may use it?
- Which systems may it access?
- What risk level does it carry?
- What logs does it generate?
- What is the rollback plan?
- Who maintains it?

Plugin governance metadata should include:

```text
plugin name
purpose
owner
version
risk level
approved use cases
restricted use cases
data access
execution authority
required human approval
logging requirements
rollback / disable process
```

Key principle:

> Reusable agent capability requires reusable governance metadata.

---

## External Tools and MCP Servers

Agent development kits often connect agents to external systems:

- GitHub;
- databases;
- cloud services;
- APIs;
- CRM systems;
- files;
- calendars;
- internal platforms;
- MCP servers.

This is where AI assistance can become operational action.

Governance questions:

- Is the agent reading, writing, deleting or triggering action?
- Is the action reversible?
- Is the target system customer-facing, internal or safety-critical?
- Does the agent have least-privilege access?
- Is human approval required?
- Are tool calls logged?
- Can access be revoked quickly?

Key principle:

> Tool access is not only integration. It is delegated operational authority.

---

## Agent Teams and Coordination Asymmetry

Agent teams can execute multiple tasks in parallel.

This increases speed.

It can also create coordination asymmetry:

> AI systems act faster than humans and organizations can understand the combined effect.

Risks:

- duplicated actions;
- conflicting decisions;
- inconsistent customer communication;
- hidden dependencies;
- escalation overload;
- fragmented logs;
- local optimization against global goals.

Governance controls:

- shared operational dashboard;
- agent boundary map;
- cross-agent conflict detection;
- escalation queue management;
- owner-level process dynamics view;
- governance load monitoring;
- kill switch or pause mechanism;
- periodic coordination review.

Key principle:

> Multi-agent capability requires multi-agent coordination governance.

---

## Minimal Governance Checklist for Agent Development Kits

Before increasing agent autonomy, answer these questions:

- What is the agent's mission?
- What may it analyze?
- What may it recommend?
- What may it draft?
- What may it execute?
- What tools may it access?
- What data may it read?
- What systems may it modify?
- Which actions require human approval?
- Which actions are forbidden?
- Which actions are reversible?
- What is logged?
- Who reviews logs?
- What happens on error?
- What happens on uncertainty?
- What happens when a subagent fails?
- What happens when multiple agents conflict?
- Who is accountable for final operational impact?

---

## Mapping to the Human-AI Operational Coordination Stack

```text
Human Layer
  owns mission, accountability and intervention authority
        ↓
AI Action Boundary Mapping
  defines what each agent, skill, hook and plugin may do
        ↓
Personal / Team AI Operational Twin
  applies context, style and workflow memory with bounded delegation
        ↓
Living Human-AI Operational Interface
  shows agent activity, decisions, escalations and governance load
        ↓
AI Governance Gateway
  controls tool access, action thresholds, approval and logging
        ↓
Governance Nervous System
  monitors signals, anomalies, outcomes and correction needs
        ↓
Operational AI Agents / Subagents
  execute bounded tasks through skills, hooks, tools and plugins
        ↓
Execution Environment
  business systems, codebases, customer workflows and operational outcomes
```

---

## Failure Patterns Prevented

This mapping helps reduce the risk of:

- agent design without governance architecture;
- prompt-driven autonomy without accountability;
- hidden delegation through subagents;
- unchecked tool execution;
- skill reuse without policy boundaries;
- plugins distributing unsafe behavior;
- hooks used as technical checks without human responsibility design;
- fragmented logs;
- escalation saturation;
- coordination collapse in multi-agent environments.

---

## Practical Use

Use this mapping when:

- designing an agent development kit;
- evaluating an AI agent framework;
- reviewing subagent architecture;
- adding tool permissions;
- creating reusable skills;
- distributing plugins across teams;
- preparing an AI-assisted workflow pilot;
- explaining why technical agent capability needs governance architecture.

---

## Key Takeaways

- Agent development kits are capability architecture.
- Governance architecture defines responsible use of that capability.
- Instruction files become governance-relevant operational memory.
- Skills are governed capabilities, not only productivity modules.
- Hooks can operationalize runtime governance.
- Subagents require mission, boundary and accountability design.
- Plugins require governance metadata before organizational reuse.
- Tool access is delegated operational authority.
- Agent teams require coordination governance.
- Missing layers often become production failure sources.

> A prompt is not a governance architecture.
>
> A hook is not accountability by itself.
>
> A subagent is not harmless because it is internal.
>
> A plugin is not safe because it is reusable.
>
> Capability must be mapped before autonomy is scaled.
