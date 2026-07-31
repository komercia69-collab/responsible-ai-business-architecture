# Responsibility Review Panel — Conflict Surface Extension Plan

**File:** `docs/prototypes/responsibility-review-panel-conflict-surface-extension-plan.md`
**Related PR:** #131 (Draft: Add conflict surfaces responsibility overlay working note)
**Related file:** `docs/notes/conflict-surfaces-responsibility-overlay.md`
**Repository:** komercia69-collab/responsible-ai-business-architecture

---

## Status

| Field | Value |
|---|---|
| Type | Prototype Extension Plan |
| Canonical status | Non-canonical |
| Implementation status | Implementation-adjacent only — no code produced |
| Schema status | Not schema — all fields are example-only |
| Authorization status | Human Owner confirmation required before any next step |
| Demo status | Existing demo not modified by this plan |
| Public status | Not public-facing — internal planning document |

This plan does not create canon, schema, event family, runtime enforcement,
implementation guidance, or production authorization.
It describes what a future non-canonical prototype extension could show.

---

## 1. Purpose

The existing Responsibility Review Panel prototype demonstrates how a structured
review state is presented before a human makes an approval, escalation, or block
decision in an AI-assisted workflow.

This extension plan describes how a future version of that prototype could add
two additional visualization surfaces:

**Conflict Surface Block** — showing where responsibility may diffuse, conflict,
or become ambiguous at the boundary between systems, agents, or authority domains
before an action is approved, escalated, blocked, or executed.

**Responsibility Overlay Block** — showing, as a diagnostic indicator only,
the relative weight of human decision authority, system control, and agent
operational autonomy in the current action context.

The purpose of showing these surfaces is not to resolve responsibility conflicts
automatically. It is to make them visible to the human reviewer before a decision
is made — so that responsibility diffusion is surfaced as a governance input,
not discovered as a post-execution consequence.

This is a visualization and review aid for human decision-making.
It is not a responsibility allocation mechanism.
It is not a legal or operational determination of who bears liability.

---

## 2. Proposed UI Sections

A future non-canonical prototype (`demo/responsibility-review-panel-v3.html`)
could include the following six blocks, each representing a distinct
review surface:

| Block | Purpose |
|---|---|
| Conflict Surface Block | Show where responsibility may diffuse or conflict |
| Responsibility Overlay Block | Show diagnostic authority weights — not legal allocation |
| Agent Operational Autonomy Block | Show bounded AI role in this action context |
| Boundary / Escalation Block | Show who owns the decision and what stops execution |
| Decision Log Preview Block | Preview what the log entry would record — not finalize it |
| Evidence / Trace Support Block | Connect review state to existing RABA event structures |

---

## 3. Conflict Surface Block

### What it would show

A conflict surface is a point in a workflow where responsibility boundaries
are unclear, overlapping, or contested between two or more systems, agents,
or authority domains.

The block would surface the following fields for human review:

| Field | Description | Status |
|---|---|---|
| `conflict_surface_id` | Unique identifier for this surface in the review session | Example-only — not schema |
| `surface_type` | Category of conflict (authority overlap, evidence gap, scope ambiguity, system boundary) | Example-only — not schema |
| `affected_systems_domains` | Which systems or domains are involved in the conflict | Example-only — not schema |
| `source_of_conflict` | What created the conflict (missing authorization, ambiguous instruction, scope drift) | Example-only — not schema |
| `consequence_class` | Potential consequence if conflict is unresolved (reversible, significant, critical) | Example-only — not schema |
| `ambiguity_level` | Degree of ambiguity in current authority or evidence (low, medium, high, unresolvable without human) | Example-only — not schema |
| `owner_visibility` | Whether a responsible human owner has been identified for this surface | Example-only — not schema |

### Important constraints

All field names above are example-only placeholders for prototype visualization.
They are not schema definitions.
They do not create an event family.
They do not establish a data model for production systems.
They do not imply that any AI system currently produces or consumes these fields.

The block is a structured display for human review only.
It does not resolve, classify, or assign responsibility automatically.

---

## 4. Responsibility Overlay Block

### Terminology choice

This block uses the following diagnostic indicator names:

- `human_decision_authority_weight`
- `system_control_weight`
- `agent_operational_autonomy_weight`

These terms were chosen to be more precise than generic "responsibility percentage"
language, which could be misread as legal responsibility allocation.

### What these indicators mean

These are **diagnostic indicators**, not legal responsibility allocation.

They are intended to help a human reviewer understand the current distribution
of decision authority and operational control in the action context being reviewed —
so that the reviewer can assess whether the human oversight level is appropriate
for the risk class of the action.

They do not determine who is legally responsible for an outcome.
They do not allocate liability.
They do not substitute for organizational accountability structures.
They do not override the Human Owner's authority at any weight value.

### Display approach for prototype

The prototype could display these as a simple proportional visualization —
for example, a horizontal bar or three adjacent labeled values — with a
mandatory caption:

> These are diagnostic indicators for human review only.
> They are not legal responsibility allocation.
> Human Owner authority is not reduced by any weight value shown here.

---

## 5. Agent Operational Autonomy Block

### Permitted operational modes for prototype display

The prototype may display the following agent operational modes as
example illustrations of bounded AI role in the current context:

- **Observe** — AI monitors and records without taking action
- **Classify** — AI categorizes an event or state according to defined criteria
- **Recommend** — AI proposes an action for human review and decision
- **Simulate** — AI models a potential outcome without executing it
- **Prepare evidence** — AI assembles supporting material for human review
- **Execute bounded reversible pre-authorized low-risk action** —
  AI carries out a specific, defined, reversible action that has been
  explicitly pre-authorized by the Human Owner for the current context

### Explicitly prohibited in any prototype, demo, or extension

The prototype must not depict, suggest, imply, or demonstrate:

- Autonomous safety-critical field control by an AI agent
- Unbounded remediation by an AI agent without human authority
- Irreversible action by an AI agent without responsible human authority
- Legal, financial, or customer-impacting execution by an AI agent
  without governed approval from the Human Owner
- AI authority to escalate beyond defined escalation paths
- AI authority to override Human Owner decisions

These prohibitions apply to the prototype visualization, not only to
any production system. The demo must not create a visual impression
that these modes are available, normal, or approved.

---

## 6. Boundary / Escalation Block

### What it would show

This block surfaces the governance boundaries that apply to the current action
before the human makes a decision. It would include:

| Field | Description |
|---|---|
| Responsible human owner | Who holds decision authority for this action |
| Escalation owner | Who receives the action if the current owner escalates |
| Approval state | Current approval status (not approved / pending / approved / stale) |
| Blocked state | Whether the action is currently blocked and why |
| Rollback / reversibility note | Whether the action is reversible after execution and under what conditions |
| Unresolved uncertainty | What remains unknown or unconfirmed that the human reviewer should be aware of |

### Purpose

This block makes visible what the governance state actually is at the moment
of review — not what the system assumes it to be.

The distinction between "approval granted" and "approval current and scope-matched"
is architecturally significant in RABA. This block surfaces that distinction.

---

## 7. Decision Log Preview Block

### What it would show

The Decision Log Preview Block would display a structured preview of what
a Decision Log entry would record if the human chose to approve, block,
or escalate the current action.

It is a preview — not a finalization.

The entry is not created until the human makes a confirmed decision.
The prototype would display the preview as a draft, clearly labeled.

Proposed preview fields:

| Field | Description |
|---|---|
| Approving authority | Who approved (or would approve) this action |
| Authorization basis | Under what authority the approval was or would be granted |
| Evidence considered | What evidence was reviewed before the decision |
| Remaining uncertainty | What was not resolved at the time of decision |
| Decision rationale | Why allow / block / escalate was chosen |
| Timestamp | When the decision was recorded |
| Reversibility at time of decision | Whether rollback was available when the decision was made |

### Important constraint

The preview block must not create the impression that the Decision Log
entry has been finalized before the human makes a decision.
The prototype must display a clear label:

> This is a Decision Log preview only.
> No entry is created until the Human Owner confirms a decision.

---

## 8. Evidence / Trace Support Block

### Connections to existing RABA structures

The Evidence / Trace Support Block would connect the prototype review state
to the following existing RABA concepts and materials:

| RABA concept / structure | Connection |
|---|---|
| Decision Log | Evidence block previews the log entry — does not create it |
| Responsibility Event Stream | Trace of responsibility events leading to this review state |
| Action Boundary | Evidence block shows whether the proposed action is within boundary |
| Approval State | Evidence block reflects current approval validity and freshness |
| Responsibility Management Interface | Evidence block is one surface within the broader review interface |
| AI Execution Gap | Evidence block makes visible what evidence exists and what is missing |

### Connection to Issue #89

Issue #89 (audit external-tool and public-facing misrepresentation risks)
applies directly to this block.

Any external trace data, external tool output, or external verification result
displayed in the Evidence / Trace Support Block must:

- Be clearly labeled with its source
- Not claim validation, endorsement, or integration with any external tool
- Not represent fabricated trace output as real system output
- Not imply that any external tool has been adopted, integrated, or certified

This constraint applies to the prototype visualization,
not only to any production system.

---

## 9. Risk Register for This Extension

### Implementation drift

If the prototype HTML is built before this plan is confirmed, scope may expand
beyond what was reviewed. The plan must be confirmed before any HTML is created.

### Schema adoption drift

Field names used in prototype visualization may be adopted as de facto schema
by reviewers or downstream contributors. All fields must be explicitly marked
example-only in both the plan and the prototype.

### Safety overreach

Any display of AI operational modes in safety-adjacent contexts may be read
as authorization of those modes. The Agent Operational Autonomy Block must
include explicit prohibition language, not only in this plan but in the
prototype UI itself.

### AI responsibility confusion

The Responsibility Overlay Block uses weighted indicators that could be
misread as a determination that AI systems bear a defined portion of
legal responsibility. The diagnostic-only framing must be prominent and
unambiguous in the prototype.

### Public-facing overclaim

If the prototype is linked from the public README before separate Human Owner
confirmation, it may be read as a public-facing claim about RABA capabilities.
Linking is restricted to `docs/prototypes/README.md` until explicitly confirmed.

### Demo mistaken for runtime governance

The prototype is a visualization aid for concept review.
It is not a runtime governance system.
It does not enforce boundaries, block actions, or create audit records
in any production environment.
The prototype must display this statement prominently.

### Human Owner cognitive overload

Six blocks in a single prototype review panel may create more visual complexity
than is useful for governance clarity. The prototype should allow blocks
to be shown or hidden individually, and should not require all six to be
visible simultaneously.

---

## 10. What This Plan Does NOT Do

This plan explicitly does not:

- Create RABA canon
- Define production schema or event family
- Modify any existing demo HTML file
- Authorize implementation of any system
- Authorize AI control over field systems, safety-critical systems,
  or any system affecting physical safety
- Create a public-facing claim about RABA capabilities
- Claim validation, certification, integration, partnership, or endorsement
  with any external tool or organization
- Approve merge of PR #131 or any related PR
- Make PR #131 ready for merge or reduce the need for separate review of PR #131
- Constitute Human Owner confirmation of any architectural decision
- Reduce Human Owner authority over any decision in this plan

---

## 11. Recommended Future Sequence

If the Human Owner confirms this plan, the following sequence is recommended:

**Step 1 — Human Owner reviews this plan**
Confirm whether the six proposed blocks and their constraints are acceptable
as the basis for a future prototype.

**Step 2 — Create prototype HTML**
If Step 1 is confirmed: create `demo/responsibility-review-panel-v3.html`
as a non-canonical prototype only.
Do not modify existing demo files.
Do not create production implementation.

**Step 3 — Mark prototype clearly**
The prototype HTML must include a prominent non-canonical disclaimer
in the UI header, not only in code comments:

> Non-canonical prototype. Not runtime governance. Not canon.
> Human Owner confirmation required before any implementation claim.

**Step 4 — Link from docs/prototypes/README.md only**
After Human Owner review of the prototype, link it from
`docs/prototypes/README.md`.
Do not link from the public-facing repository README at this step.

**Step 5 — Separate confirmation before public linking**
Linking from the public-facing README requires a separate explicit
Human Owner confirmation, distinct from confirming the prototype itself.

---

## 12. Human Owner Decision Required

> **Should this extension remain a plan only,
> or should a future PR create `demo/responsibility-review-panel-v3.html`
> as a non-canonical prototype?**

Options:

| Option | Meaning |
|---|---|
| A — Plan only | This document is merged as a planning note. No prototype HTML is created until a separate Human Owner decision. |
| B — Plan + prototype | This document is confirmed and a future PR creates the prototype HTML following the sequence in Section 11. |
| C — Revise plan | Human Owner requests changes to scope, blocks, or constraints before any further step. |

Human Owner decision required before any action beyond merging this plan document.

---

**End of plan.**

Prepared by: Claude (Concept Architect — non-canonical review support).
This document is a prototype extension plan.
It is not canon, schema, implementation guidance, or approval.
All decisions belong to the Human Owner (Oleksandr Shuliak).
Multi-AI agreement is not approval.
Human Owner confirmation is required before any merge, ready-for-review,
canonicalization, public positioning, or implementation claim.
