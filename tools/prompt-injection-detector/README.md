# Prompt Injection Detector

## Responsible AI Business Architecture

> Untrusted content must never be allowed to silently become operational instruction.

---

# Purpose

This tool is a lightweight prototype for detecting potentially malicious embedded instructions in content processed by AI systems.

It is designed to support:

- MCP-connected AI agents;
- customer support workflows;
- email processing;
- document analysis;
- RAG pipelines;
- enterprise AI governance review.

The goal is not perfect detection.

The goal is to create a governance gate that:

1. detects suspicious instruction patterns;
2. blocks automatic execution;
3. classifies the risk;
4. produces a human-readable review report;
5. clearly marks suspicious content as untrusted.

---

# Core Principle

External content may contain text that looks like instructions.

AI systems must distinguish between:

- user intent;
- trusted developer instructions;
- external context;
- malicious embedded instructions.

---

# What This Tool Detects

The prototype checks for patterns such as:

- attempts to override instructions;
- requests to ignore previous rules;
- attempts to exfiltrate sensitive data;
- requests to reveal secrets or credentials;
- attempts to disable safety controls;
- hidden instructions targeting the AI agent;
- requests to bypass approvals;
- requests to perform destructive actions.

---

# Example Risk Categories

| Category | Description |
|---|---|
| Instruction Override | Attempts to replace or ignore existing instructions |
| Data Exfiltration | Attempts to extract or send sensitive information |
| Credential Theft | Attempts to access passwords, tokens, codes, or secrets |
| Safety Bypass | Attempts to disable policies or safeguards |
| Unauthorized Action | Attempts to trigger actions without approval |
| Tool Abuse | Attempts to misuse MCP tools or connectors |
| Destructive Action | Attempts to delete, modify, or damage data |

---

# Governance Behavior

If suspicious content is detected:

- mark the content as untrusted;
- block automatic execution;
- do not pass it as instruction;
- create a review report;
- require human decision.

---

# Human Review Output

The tool returns:

- risk level;
- detected categories;
- matched phrases;
- recommended action;
- safe handling advice;
- original content excerpt.

---

# Important Limitation

This detector is a governance prototype, not a complete security product.

It cannot guarantee detection of all prompt injection attacks.

It should be used as one layer inside a broader governance architecture including:

- permission boundaries;
- human approval gates;
- MCP threat modeling;
- audit logging;
- containment protocols.

---

# Strategic Principle

The safest default for external instructions is not execution.

It is classification, isolation, and human review.
