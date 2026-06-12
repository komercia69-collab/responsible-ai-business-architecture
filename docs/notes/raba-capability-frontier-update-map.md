# RABA Capability Frontier Update Map

**Status:** Working Note  
**Nature:** Non-canonical  
**Purpose:** Track changing AI capability developments and map them to RABA responsibility boundaries without turning external signals into RABA authority  
**Not:** canon, architecture approval, provider endorsement, provider validation, partnership claim, adoption claim, outreach approval, public-use approval, implementation guidance, compliance guidance, certification, or product roadmap

---

## 1. Purpose

RABA must remain current with rapidly changing AI capabilities.

RABA must not become vendor-governed, trend-driven, or externally approved.

This working note defines a capability-frontier update map: a non-canonical radar for tracking AI-agent, tool-use, model-provider, enterprise deployment, evaluation, oversight, and governance signals that may affect RABA responsibility architecture.

Core working goal:

> Keep RABA aligned with the AI capability frontier while preserving Human Owner authority, vendor independence, and non-canonical signal handling.

Working formula:

> RABA should not govern yesterday's AI.  
> RABA must stay current with capability development without becoming vendor-dependent.

Russian working formulation:

> RABA должна актуализироваться под меняющиеся разработки ИИ, но не становиться зависимой от провайдеров, трендов или внешнего одобрения.

---

## 2. Scope

This map tracks capability areas that may affect RABA boundaries, including:

- AI agents;
- tool use;
- computer use;
- memory;
- multimodal systems;
- autonomous workflows;
- AI-generated evidence;
- model evaluations;
- benchmark and eval thresholds;
- enterprise AI deployment;
- human oversight patterns;
- runtime monitoring;
- AI safety controls;
- model-provider roadmaps and public documentation;
- policy, standards, and regulation signals;
- practitioner deployment patterns;
- incident reports and failure modes.

This map does not approve any RABA change by itself.

It only identifies areas that require monitoring, translation, boundary mapping, and possible Human Owner review.

---

## 3. Operating principle

Capability signals do not become RABA canon.

Provider roadmaps do not become RABA authority.

External attention does not become validation.

AI capability growth may create new responsibility pressure, but it must pass through RABA governance handling before it affects RABA documents or architecture.

Required handling chain:

```text
Capability signal
→ External Signal Log
→ Provider Signal Translation Rule
→ RABA boundary mapping
→ Decision Log Queue if status-affecting
→ Human Owner decision
```

This means that RABA may learn from the frontier, but the frontier does not govern RABA.

---

## 4. Relationship to current draft PR pack

This working note depends on the current non-canonical draft pack:

- **PR #143 — Organizational Evals for AI-Agent Deployment**  
  Provides concrete organizational failure modes and questions for AI-agent deployment.

- **PR #144 — Provider / External Signals Log Template**  
  Provides the intake structure for external signals.

- **PR #145 — Provider Alignment Artifact Pack Overview**  
  Explains how draft artifacts can be grouped without creating outreach approval, public-use approval, or canon.

- **PR #146 — Operational Control Board for Provider Artifact Pack**  
  Tracks draft status, blocked actions, risk boundaries, and Human Owner decision needs.

- **PR #147 — Provider Signal Translation Rule**  
  Defines how provider / external signals may be translated into vendor-independent responsibility patterns without becoming provider authority, correctness proof, endorsement, validation, partnership, adoption, public-use approval, outreach approval, or canon.

This note does not change the status of #143, #144, #145, #146, or #147.

---

## 5. Tracked capability areas

| Capability area | What to monitor | Primary RABA boundary affected | Typical RABA question |
|---|---|---|---|
| AI agents | Delegated action, planning, tool selection, multi-step execution | Action Boundary / Approval State | What actions may the agent propose, prepare, or execute, and who approves consequence-bearing steps? |
| Tool use | API calls, file access, web actions, code execution, business-system integration | Tool-use Boundary / Resource Boundary | Does tool access create external consequence, and who owns the approval boundary? |
| Computer use | UI operation, browser action, form submission, environment control | Action Boundary / Reversibility Boundary | Which UI actions are reversible, consequence-bearing, or require explicit admissibility review? |
| Memory | Persistent user, organizational, or workflow context | Data Boundary / Evidence Boundary | What memory is allowed to influence decisions, and who can inspect or correct it? |
| Multimodal systems | Image, audio, video, document interpretation | Evidence Boundary | Can multimodal output be used as decision evidence, and what verification is required? |
| Autonomous workflows | Long-running or chained workflows | Responsibility Event Stream | Where does responsibility persist across steps, handoffs, and tool calls? |
| AI-generated evidence | Summaries, claims, risk scores, reports, extracted facts | Evidence Boundary / Decision Log | Can the original evidence be traced, or is the decision based only on AI summary? |
| Model evaluations | Benchmarks, safety evals, capability evals, pass/fail thresholds | Evaluation / Authority Boundary | Is evaluation being used as information, routing, approval, or hidden authority? |
| Enterprise deployment | Role access, admin controls, audit logs, workflow integration | Governance Gateway / Human Accountability | Does deployment preserve approval roles, escalation, and consequence ownership? |
| Human oversight | Human-in-the-loop / human-on-the-loop / review dashboards | Approval State / Meaningful Oversight | Is the human review meaningful, authorized, informed, and recorded? |
| Runtime monitoring | Logs, alerts, anomaly detection, policy checks | Runtime Boundary Signals | Do runtime signals route responsibility, or are they treated as governance authority? |
| Policy / regulation signals | EU AI Act, standards, guidance, sector rules | Compliance Boundary / Public-use Boundary | Does a legal or standards signal affect RABA wording, public use, or canonicalization? |
| Incident reports | Failures, misuse, harm cases, near misses | Consequence Boundary / Escalation Boundary | Which boundary failed, and what responsibility record was missing? |

---

## 6. Boundary mapping checklist

Each capability signal should be mapped to one or more RABA boundaries:

- Action Boundary;
- Approval State;
- Consequence Boundary;
- Reversibility Boundary;
- Tool-use Boundary;
- Resource Boundary;
- Evidence Boundary;
- Data Boundary;
- Escalation Boundary;
- Human Accountability;
- Governance Gateway;
- Responsibility Event;
- Responsibility Event Stream;
- Responsibility Binding Event;
- Responsibility Management Interface;
- Decision Log;
- External Signal Intake;
- Public-use Boundary.

If a signal cannot be mapped to an existing RABA boundary, it should be recorded as a terminology or boundary candidate, not canon.

---

## 7. Update cadence

This map should support a recurring review cycle.

Suggested non-binding cadence:

| Cadence | Activity | Output |
|---|---|---|
| Weekly / as-needed | Capture relevant public provider, practitioner, standards, or incident signals | External Signal Log entry |
| Monthly | Review accumulated signals for boundary pressure | Decision Log Queue items or issue candidates |
| Quarterly | Identify whether any signal cluster suggests a new working note or canonicalization candidate | Human Owner review queue |
| Before public use | Check status, source, shareability, and public-use boundary | Explicit Human Owner decision |

This cadence is a working suggestion, not an obligation and not canon.

---

## 8. Capability signal intake rules

A capability signal should be logged before it is used to update RABA documents.

Minimum intake fields:

- date captured;
- source / channel;
- public, private, unclear, or unknown source status;
- shareability boundary;
- citation / quotation boundary;
- capability area;
- RABA boundary affected;
- possible responsibility pattern;
- what the signal may inform;
- what the signal must not imply;
- whether Decision Log Queue review is needed;
- whether Human Owner decision is needed.

A signal must not be used to make public, commercial, partnership, endorsement, validation, adoption, compliance, or certification claims.

---

## 9. Translation requirements

Any status-affecting provider / external signal should pass through the Provider Signal Translation Rule before it affects:

- RABA wording;
- public positioning;
- outreach;
- provider-facing use;
- canonicalization;
- architecture;
- terminology;
- decision logs;
- implementation-facing notes;
- compliance-facing notes.

Required translation questions:

1. What does the signal actually say?
2. What source and shareability boundary applies?
3. Which provider terms require terminology quarantine?
4. Which RABA boundary is affected?
5. What vendor-independent responsibility pattern can be extracted?
6. What must the signal not imply?
7. Does this create a Decision Log Queue item?
8. Does this require Human Owner decision?

---

## 10. Drift controls

| Drift risk | Description | Control |
|---|---|---|
| Capability lag | RABA governs outdated AI assumptions | Capability frontier review cycle |
| Trend capture | RABA follows hype instead of responsibility pressure | Boundary mapping before document change |
| Vendor capture | Provider terms reshape RABA authority | Provider Signal Translation Rule and terminology quarantine |
| Endorsement drift | Provider attention is mistaken as validation | External Signal Log and no-endorsement boundary |
| Correctness inference | External signal is treated as proof RABA is right | Explicit no-correctness-inference rule |
| Public-use drift | Draft signals leak into public positioning | Human Owner public-use decision |
| Outreach drift | Artifact pack becomes implicit outreach program | Explicit outreach block |
| Canon drift | Useful signal becomes canon without review | Canonicalization pipeline and Human Owner decision |
| Compliance drift | Regulatory signal becomes compliance claim | Compliance boundary review |
| Implementation drift | Capability signal becomes implementation guidance | Non-implementation boundary |

---

## 11. Decision Log Queue triggers

A capability signal should be added to the Decision Log Queue if it may affect:

- core RABA terminology;
- Action Boundary;
- Approval State;
- Human Accountability;
- Responsibility Event Stream;
- Responsibility Binding Event;
- Responsibility Management Interface;
- public positioning;
- public-use permissions;
- provider-facing use;
- outreach plan;
- canonicalization candidate status;
- compliance-facing wording;
- implementation-facing wording;
- partnership / validation / endorsement risk.

---

## 12. Human Owner decision points

Human Owner decision is required before:

1. converting any capability signal into a canonicalization candidate;
2. introducing a new RABA term based on an external/provider term;
3. using provider / external signals in public-facing RABA text;
4. starting provider or practitioner outreach;
5. referencing a provider, practitioner, researcher, standard, or regulator as supporting RABA;
6. moving any related PR to ready-for-review;
7. merging any related PR;
8. presenting the capability map as accepted architecture;
9. making any endorsement, validation, partnership, adoption, commercial, compliance, or certification claim.

---

## 13. Safe wording

Safe wording:

- “This is a capability signal under review.”
- “This signal may indicate boundary pressure for RABA.”
- “This signal is logged as external informational input.”
- “This signal does not approve, validate, endorse, or canonize RABA.”
- “Provider language is translated into vendor-independent responsibility patterns.”
- “Human Owner review is required before public use or canonicalization.”

Avoid wording:

- “The provider confirmed RABA.”
- “This proves RABA is right.”
- “This capability makes RABA canonical.”
- “This signal authorizes outreach.”
- “This provider roadmap approves our direction.”
- “This standard certifies RABA.”
- “This external response creates adoption.”

---

## 14. Current working package status

Current related PRs:

```text
PR #143 — Draft / non-canonical / not merged
PR #144 — Draft / non-canonical / not merged
PR #145 — Draft / non-canonical / not merged
PR #146 — Draft / non-canonical / not merged
PR #147 — Draft / non-canonical / not merged
```

This note should be treated as a possible next draft addition to that package, but it does not approve movement of any existing PR.

---

## 15. Working status

This is a working note.

It is non-canonical.

It does not define final RABA architecture.

It does not approve outreach.

It does not approve public use.

It does not approve provider-facing positioning.

It does not approve any provider relationship.

It does not approve merge or ready-for-review.

It does not change any existing PR status.

Final architectural approval remains with the Human Owner.
