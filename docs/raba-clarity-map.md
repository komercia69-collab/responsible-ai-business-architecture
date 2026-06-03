# RABA Clarity Map

**Status:** Project orientation document  
**Canonical status:** Non-canonical orientation layer  
**Purpose:** Help new readers understand what RABA is, why it matters, how its parts fit together, and where to start.

> This document does not create new RABA canon.  
> It explains the current project structure and intended use in plain language.

---

## 1. What RABA is

Responsible AI Business Architecture — RABA — is a practical architecture for organizations that want to use AI inside real business workflows without losing human responsibility, operational control, auditability, and decision accountability.

RABA focuses on the moment where AI stops being only an assistant and starts influencing or triggering actions with real consequences.

Core idea:

```text
AI may be probabilistic.
Responsibility must not be.
```

RABA helps answer:

```text
What is the AI proposing?
Where does the action boundary begin?
Who has authority to approve it?
What state is the action in?
What evidence is admissible?
What must be logged?
Who remains responsible?
When must the workflow escalate or stop?
```

---

## 2. The problem RABA addresses

AI agents are becoming able to act inside real business systems faster than organizations are defining who is accountable for those actions.

This creates a gap:

```text
AI capability increases.
Operational responsibility remains unclear.
```

Typical failure patterns include:

- AI executes an action without clear human authority;
- a prior confirmation is reused after the scope changed;
- technical logs exist, but business responsibility is unclear;
- approval becomes routine and loses meaning;
- responsibility shifts informally to the AI system or workflow default;
- governance exists on paper but does not affect runtime behavior;
- AI discovers risk faster than the organization can assign ownership and respond.

RABA treats these not only as technical issues, but as responsibility architecture problems.

---

## 3. The simple RABA example

Example:

```text
AI proposes:
Offer a €750 refund to a customer.
```

RABA does not ask only:

```text
Can the AI do this?
```

RABA asks:

```text
Is this only a recommendation, or an action?
Is €750 inside the autonomous threshold?
Who owns the refund decision?
Is human approval required?
What evidence supports the decision?
Can the action be reversed?
What must be recorded in the Decision Log?
What remains human responsibility?
```

Possible RABA result:

```text
Action state: Approval Required
Reason: Refund exceeds autonomous threshold
Responsible role: Customer Support Manager
Decision Log: Required
Execution: Blocked until approval
```

This is the heart of RABA:

```text
AI speed is preserved where safe.
Human responsibility is preserved where consequences begin.
```

---

## 4. RABA in one chain

RABA can be understood as a chain from idea to execution:

```text
AI proposal
→ Action Boundary
→ Approval State
→ Governance Gateway
→ Human Confirmation / Escalation / Block
→ Decision Log
→ Responsibility Event Stream
→ Audit / Review / Corrective Action
```

Each part answers a different question:

| RABA part | Main question |
|---|---|
| Action Boundary | Where does AI assistance become consequential action? |
| Approval State | Is the action drafted, recommended, approved, executed, escalated or revoked? |
| Governance Gateway | Can this action pass, or must it be approved, escalated or blocked? |
| Decision Log | What business decision was made, by whom, and on what basis? |
| Responsibility Event Stream | What responsibility-relevant events happened over time? |
| Responsibility Management Interface | Can humans see and manage responsibility during the workflow? |

---

## 5. What RABA is not

RABA is not:

- an AI ethics manifesto;
- a generic compliance checklist;
- a replacement for legal review;
- a replacement for privacy, cybersecurity or data governance;
- a certification;
- a guarantee of EU AI Act, GDPR, ISO or NIST compliance;
- a tool for giving AI final responsibility.

RABA is a responsibility architecture layer that can support compliance readiness, auditability, and operational governance.

---

## 6. What RABA is for

RABA is useful when an organization asks:

```text
Can AI act inside this workflow?
If yes, under which boundaries?
Who remains responsible?
What must be visible before execution?
What must be logged after execution?
```

RABA is especially relevant for:

- AI agents using tools;
- AI-assisted customer support;
- AI-generated refunds, approvals or operational changes;
- AI-supported HR, compliance, legal, finance or admin workflows;
- MCP / tool-execution environments;
- AI systems that recommend actions to humans;
- multi-agent workflows where different agents propose, verify, route or execute work.

---

## 7. The project layers

RABA has five practical layers.

### Layer 1 — Principles

The project-level principles:

```text
Operational Responsibility
Governed Speed
Speed Protection
Policy Integrity
Human Accountability
```

These explain why RABA exists.

### Layer 2 — Architecture

The architecture layer defines the control structure:

```text
Action Boundary
Approval States
Governance Gateway
Decision Log
Responsibility Observability
Responsibility Management Interface
```

These explain how responsibility is structured.

### Layer 3 — Implementation Pattern

The implementation layer translates responsibility into runtime signals:

```text
Responsibility Event Stream
Governance Gateway checks
Decision Log schema
Policy checks
Escalation events
Reapproval triggers
```

These explain how RABA could work in real systems.

### Layer 4 — Practical Tools

The practical layer helps people use RABA quickly:

```text
RABA Lite checklist
Pilot readiness pack
Policy integrity self-assessment
Example workflow reviews
Governance Gateway demo
```

These help people apply RABA without reading the whole repository.

### Layer 5 — Research and External Inputs

The research layer captures unresolved questions and external validation signals:

```text
Open inquiries
External review inputs
Discussion drafts
Non-canonical notes
Field mappings
Concept candidates
```

These help RABA grow without confusing draft ideas with canon.

---

## 8. Why RABA can create value

RABA creates value by making responsibility visible before AI-supported actions create consequences.

It helps organizations avoid:

- invisible delegation to AI;
- stale approval;
- hidden commitment;
- audit logs without human accountability;
- governance theater;
- uncontrolled AI-agent execution;
- responsibility gaps between technical systems and business decisions.

RABA helps organizations gain:

- clearer AI workflow control;
- faster but safer automation;
- better audit readiness;
- better human oversight;
- clearer escalation paths;
- stronger internal governance conversations;
- practical evidence of responsible AI operation.

---

## 9. The current project priority

The current priority is not to add more concepts.

The current priority is to make RABA:

```text
understandable,
usable,
showable,
reviewable,
and externally discussable.
```

The near-term build path is:

```text
1. RABA Clarity Map
2. RABA Lite 15-minute checklist
3. RABA in One Example
4. Governance Gateway demo scenario
5. README opening simplification
6. External validation messages
7. Canonicalization only after clarity
```

---

## 10. Working motto for the next phase

```text
RABA must protect governed useful speed.
```

Not uncontrolled speed.

Not bureaucratic slowdown.

Governed useful speed means:

```text
AI can help work move faster,
but responsibility, authority, evidence, escalation and human accountability remain visible and manageable.
```

This is both the subject of RABA and the way the project itself should be developed.
