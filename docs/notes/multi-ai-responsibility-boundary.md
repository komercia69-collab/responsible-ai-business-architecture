# Multi-AI Responsibility Boundary

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Source type:** RABA operational experience / multi-AI workflow reflection  
**Approval status:** Human Owner review required before any canonicalization, public positioning, implementation guidance, partnership claim, or commercial use  

This document captures a RABA operational principle discovered during project work with multiple AI systems, including Ben, Claude Routine, and other AI reviewers.

It is a working note only. It does not create RABA canon.

---

## Core principle

RABA is about systems of responsibility.

Therefore, RABA's own multi-AI workflow must also be governed as a system of responsibility.

```text
If RABA builds systems of interacting responsibilities,
then RABA must first apply responsibility boundaries to its own AI collaboration process.
```

In other words, RABA should not only describe accountability architectures. It should practice them in the way its own AI-assisted development process is organized.

---

## Working formulation

```text
In multi-AI workflows, each AI system must have an explicit responsibility role,
authority boundary, input scope, output status, and escalation path.
Without this, AI collaboration creates responsibility diffusion instead of governance.
```

A shorter formulation:

```text
Multi-AI collaboration without role boundaries becomes responsibility diffusion.
```

---

## Why this note exists

During RABA project work, supporting AI systems were used for different tasks:

- scheduled review;
- public-facing wording scans;
- Decision Log Queue preparation;
- external signal review;
- operational control mapping;
- GitHub and documentation support.

Some routine outputs did not perform actual repository review because the environment lacked repository access, GitHub CLI, authentication token, or the required project context.

Those outputs were useful, but not as reviews. They were **access-limitation signals**.

This revealed a responsibility boundary problem:

```text
An AI system may produce output,
but the governance meaning of that output depends on its assigned role,
its context access,
its authority boundary,
and its output status.
```

---

## Problem statement

When several AI systems participate in the same workflow, a project may accidentally treat their outputs as comparable, even when they are not.

For example:

- one AI may have GitHub access;
- another may only have a transfer packet;
- another may only have a screenshot or pasted summary;
- one AI may be assigned to review;
- another may be assigned to generate alternatives;
- another may be assigned to maintain operational control.

Without explicit role boundaries, the workflow may confuse:

- preparation with approval;
- review input with validation;
- tool limitation with substantive review;
- multi-AI agreement with Human Owner decision;
- suggestion with implementation instruction;
- scheduled routine output with repository state.

This creates responsibility diffusion.

---

## RABA relevance

This working note connects directly to existing RABA concerns:

- **Authority Drift:** AI systems may appear to gain decision authority through repeated recommendations.
- **Responsibility Diffusion:** multiple AI participants may blur who is responsible for what.
- **Accountability Theater:** a process may appear reviewed because multiple AIs commented, while no accountable decision was made.
- **Human Accountability:** final architectural, public, commercial, partnership, and canonical decisions remain with the Human Owner.
- **Decision Log:** AI outputs should be classified before they influence decisions.
- **Responsibility Event Stream:** review, recommendation, limitation, escalation, and decision should be distinguishable events.
- **External Signal Intake:** outputs from external models or routines should be treated as signals until classified.

---

## Required role fields for multi-AI workflows

Before assigning a task to another AI system, RABA should define a role card with at least these fields:

| Field | Question |
|---|---|
| Role | What is this AI system responsible for preparing? |
| Authority boundary | What is it explicitly not allowed to decide? |
| Input scope | What context, files, repository state, or transfer packet does it have? |
| Tool access | Does it have GitHub, filesystem, web, or only pasted context? |
| Output status | Is its output a review input, access-limitation signal, decision queue draft, external signal, contradiction signal, or implementation suggestion? |
| Escalation path | What must be returned to Ben or the Human Owner before action? |
| Forbidden claims | What must it not claim: approval, validation, adoption, canon, partnership, pilot, implementation, or commercial commitment? |

---

## Suggested output classifications

AI outputs in a RABA multi-AI workflow should be classified before use:

| Output classification | Meaning | Allowed use |
|---|---|---|
| Review input | The AI reviewed supplied material within its role and context | Can inform Ben / Human Owner review |
| Access-limitation signal | The AI lacked necessary access or context | Useful as process signal, not substantive review |
| External signal | The output introduces an external concept or feedback | Intake only until reviewed |
| Decision queue draft | The AI structured possible decisions | Not approval; Human Owner must decide |
| Contradiction signal | The AI found inconsistency or tension | Investigate before action |
| Implementation suggestion | The AI proposed how to build or change something | Requires Ben review and Human Owner confirmation before action |
| Operational summary | The AI summarized current state | Must be checked against repository state if action depends on it |

---

## Governance rule for RABA multi-AI work

```text
AI systems may prepare, compare, scan, summarize, critique, and recommend.
They must not silently inherit authority from participation in the workflow.
```

Participation is not authority.

Agreement is not approval.

Output is not responsibility.

A model's usefulness depends on whether its role, access, context, and output status are explicit.

---

## Practical rule for future RABA routines

Before starting a new external AI, routine, reviewer, or model-assisted track, create or provide a short role card:

```text
Role:
Input context:
Tool access:
Task:
Output format:
Forbidden assumptions:
What this output may influence:
What this output may not decide:
Escalation path:
Human Owner decisions required:
```

If this is not provided, the output must be treated as unclassified review material.

---

## Non-canonical boundary

This note does not:

- create RABA canon;
- approve a formal multi-AI governance schema;
- adopt a new canonical RABA concept;
- authorize changes to repository governance;
- authorize public positioning;
- authorize partner, pilot, vendor, referral, procurement, or commercial claims;
- approve any external AI system as a decision authority;
- replace Human Owner decision-making.

Final architectural approval remains with the Human Owner.

---

## Open questions

1. Should `Multi-AI Responsibility Boundary` become a formal RABA failure-prevention concept?
2. Should role cards be required before every external AI review track?
3. Should access-limitation signals be recorded in the Decision Log or only in operational notes?
4. Should RABA distinguish AI reviewer, AI critic, AI scout, AI operator, and AI integrator roles?
5. How should Ben classify outputs from Claude Routine, Gemini, or other models before they influence GitHub work?
6. Should this note later connect to Responsibility Event Stream as a multi-AI event classification layer?

---

## Recommended next step

Keep this document as a non-canonical working note.

Use it to improve future routine prompts and multi-AI project-control instructions.

Do not canonicalize without a separate Human Owner decision and Decision Card.
