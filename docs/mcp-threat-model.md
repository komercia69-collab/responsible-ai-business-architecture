# MCP Threat Model

## Responsible AI Business Architecture

> Trusting a connector developer does not mean trusting all data, actions, and content reachable through the connector ecosystem.

---

# Purpose

This document defines a threat model for AI systems connected to external tools through MCP or similar connector architectures.

The objective is to distinguish between:

- trust in the MCP developer;
- trust in the content accessible through the MCP;
- trust in the action parameters requested by the MCP;
- trust in the operational consequences of read and write actions.

---

# Core Principle

MCP safety is not only about whether the MCP developer is trustworthy.

It also depends on:

- what content the AI can read;
- what data the AI can access;
- what write actions the AI can perform;
- what other MCPs or sources may influence the AI;
- whether sensitive data can be moved between tools.

---

# Key Threat Categories

| Threat | Description | Trusting MCP Developer Helps? |
|---|---|---|
| Prompt injection in accessible data | Malicious instructions embedded in data reachable through MCP | No |
| Excessive action parameters | MCP asks for more data than necessary | Partially |
| Cross-MCP data exfiltration | Attack comes from one MCP and steals data from another | No |
| Write-action exfiltration | Sensitive data is sent out through a legitimate write action | No |
| Malicious read logging | Malicious MCP logs sensitive data through read action | Yes, if developer is trustworthy |
| Destructive write action | Prompt injection triggers harmful write action | No |

---

# 1. Prompt Injection in Accessible Data

## Scenario

An attacker embeds malicious instructions into content accessible by an MCP.

Example:

- a customer sends a support request containing prompt injection;
- an AI support agent reads it through a customer support MCP;
- the injected instruction attempts to manipulate the AI's behavior.

## Key Insight

Trusting the MCP developer does not make this safe.

For this to be safe, all content accessible through the MCP would also need to be trusted.

## Governance Controls

- avoid connecting MCPs to untrusted user-generated content without strong isolation;
- minimize access scope;
- classify user-generated input as hostile by default;
- require human approval for downstream actions triggered by untrusted content.

---

# 2. Excessive Parameters in Actions

## Scenario

A MCP exposes an apparently harmless action but requests excessive parameters.

Example:

A flight booking MCP offers a read action to get flight schedules but requests:

- conversation summary;
- annual income;
- home address;
- unrelated personal data.

## Key Insight

Trusting the developer does not necessarily make this acceptable.

A developer may consider some parameters reasonable while the organization considers them privacy overreach.

## Governance Controls

- review action schemas before deployment;
- reject unnecessary parameters;
- enforce data minimization;
- document approved parameter scopes;
- require privacy review for sensitive fields.

---

# 3. Cross-MCP Data Exfiltration

## Scenario

An attack enters through one MCP and attempts to steal data from another MCP.

Example:

- email MCP receives malicious content;
- prompt injection instructs the AI to retrieve sensitive data from an internal tool MCP;
- attacker attempts to exfiltrate that data externally.

## Key Insight

Trusting the internal MCP developer does not make this safe.

The source of the attack may be a different tool or data channel.

## Governance Controls

- separate sensitive MCPs from untrusted content sources;
- restrict cross-tool data movement;
- require approval before transferring data between systems;
- monitor tool chaining behavior;
- enforce least privilege across all connectors.

---

# 4. Write-Action Exfiltration

## Scenario

A prompt injection attack tricks the AI into using a legitimate write action to send sensitive data out.

Example:

- AI reads sensitive internal information;
- attacker instructs the AI to send it through a customer support message, email, ticket, or external form.

## Key Insight

Even trusted MCPs become risky when their write actions have consequences visible to an attacker.

## Governance Controls

- require human review for write actions;
- highlight outgoing data before execution;
- block sensitive data in external write actions;
- monitor external communication channels;
- log all write operations.

---

# 5. Malicious Read Logging

## Scenario

A malicious MCP marks an action as read-only but logs sensitive information received through parameters or requests.

## Key Insight

This risk is lower when the MCP developer is trustworthy and read/write classifications are correct.

However, trust in the developer is still not sufficient for overall system safety.

## Governance Controls

- use MCPs only from trusted developers;
- review read/write classifications;
- avoid passing sensitive data to read actions unnecessarily;
- monitor unexpected parameter requests.

---

# 6. Harmful or Destructive Write Actions

## Scenario

A prompt injection attack tricks the AI into performing a destructive action.

Examples:

- deleting records;
- modifying customer data;
- sending incorrect instructions;
- changing access permissions;
- canceling orders;
- approving refunds.

## Key Insight

Trusting the MCP developer does not make this safe.

The attack may come from a different malicious source while using a legitimate MCP action.

## Governance Controls

- require confirmation for destructive write actions;
- implement reversible workflows;
- restrict write access to low-risk operations;
- preserve audit logs;
- provide stop-switch capability.

---

# MCP Governance Design Rules

## Rule 1: Treat Untrusted Content as Hostile

Any external or user-generated content accessible by AI should be treated as potentially adversarial.

---

## Rule 2: Separate Read Access from Write Authority

Reading information should not automatically imply permission to act on it.

---

## Rule 3: Review Action Parameters

Every MCP action should be reviewed for parameter minimization and privacy boundaries.

---

## Rule 4: Control Cross-Tool Data Movement

Sensitive data from one MCP should not be freely transferred through another MCP.

---

## Rule 5: Require Human Approval for Consequential Writes

Actions that create external effects should require human confirmation.

---

## Rule 6: Log and Reconstruct Critical Actions

Every high-risk MCP action must be auditable.

---

## Rule 7: Provide Containment Capability

Organizations must be able to revoke tokens, disable connectors, freeze workflows, and preserve logs.

---

# Strategic Interpretation

MCP systems create tool access.

Governance must create operational boundaries.

---

# Strategic Principle

A trusted connector can still become dangerous when exposed to untrusted content, excessive permissions, or uncontrolled write actions.
