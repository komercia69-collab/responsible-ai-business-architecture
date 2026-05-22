# RABA Team Workflow
## Operational Demonstration of Human-AI Coordination

> This document describes how the RABA project team operates.  
> The team itself is the first working example of the principles it develops.

### Why this document exists
RABA (Responsible AI Business Architecture) is a framework for Human-AI Operational Coordination. The fastest way to demonstrate it is to show it working — not describe it abstractly. This document is a live record of how a multi-model AI team operates under human accountability.

### Team Structure

| Role | Member | Core Function |
| :--- | :--- | :--- |
| **Accountable Owner** | Oleksandr Shuliak (human) | Final decisions, accountability, GitHub confirmation |
| **Orchestrator** | Comet + Assistant | Session coordination, context routing, synthesis |
| **Concept Architect** | Claude | Critical review, depth, conceptual consistency |
| **Stress Tester** | Gemini | Challenge assumptions, adversarial review |
| **Integrator** | ChatGPT | Triage, GitHub preparation, formatting |
| **Canon** | GitHub | Single source of truth |
| **Public Interface** | LinkedIn | Communication of verified ideas only |

**Core governance principle:** AI models generate analysis and options. Oleksandr confirms, decides, and owns responsibility. No model commits to GitHub directly. No content goes to LinkedIn before GitHub confirmation.

### Session Flow
1. **SESSION BRIEF:** Oleksandr defines the goal and scope. Comet distributes context to relevant models.
2. **ANALYSIS PHASE:** Claude -> Critical Review (depth, gaps, consistency); Gemini -> Stress Test (assumptions, risks, adversarial view); Comet -> Synthesis of inputs.
3. **DECISION POINT:** Oleksandr reviews synthesis. If models conflict, Comet surfaces the contradiction explicitly. Oleksandr decides -> logged as Decision Record.
4. **INTEGRATION:** ChatGPT prepares GitHub-ready artifact. Oleksandr confirms -> commit to GitHub.
5. **COMMUNICATION (optional):** Only after GitHub confirmation -> LinkedIn draft prepared. Oleksandr reviews and publishes.

### Governance Rules
- **Rule 1 - Canon First:** GitHub is the source of truth. LinkedIn reflects GitHub, never leads it.
- **Rule 2 - Human Confirmation at Every Commit:** No document enters /canon without explicit confirmation from Oleksandr.
- **Rule 3 - Conflict Resolution:** When models produce contradictory recommendations, Comet states the contradiction explicitly. Oleksandr makes the decision. The decision is logged as a Decision Record with both positions recorded.
- **Rule 4 - Role Discipline:** Each model operates within its defined function. Claude does not stress-test. Gemini does not do conceptual architecture. Cross-role input is possible but must be labeled as such.
- **Rule 5 - Minimum Governance:** Do not add process where clarity already exists. The goal is operational effectiveness, not bureaucratic completeness.

### What this demonstrates
This team structure is itself a RABA pattern:
- Delegated AI roles with explicit boundaries
- Human accountability preserved at every decision point
- Auditability through Decision Records and GitHub canon
- Escalation path when AI outputs conflict
- Operational stability through defined session flow

### Current Status
> **Phase:** Prototype / Operational Testing  
> **Owner:** Oleksandr Shuliak  
> **Last confirmed:** see Decision Records  
> **Next review:** after first full session cycle

---
*This document is part of the RABA project. For questions, contact Oleksandr Shuliak via GitHub or LinkedIn.*
