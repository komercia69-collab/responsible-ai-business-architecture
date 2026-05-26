# Responsibility Architecture Review Checklist

**Status:** DISCUSSION_DRAFT  
**Canonical status:** Non-canonical  
**Approval status:** Human Owner review required  
**Use stage:** Pre-deployment / pre-execution architecture review  

> Multi-AI agreement is not approval.  
> A checklist is not certification.  
> Final architectural approval belongs to the Human Owner.

## Purpose

This checklist helps review whether an AI-assisted or AI-agentic workflow has a visible responsibility architecture before it is deployed or expanded.

It is inspired by the discipline of security architecture review, but it focuses on responsibility, authority, confirmation, escalation and human decision ownership.

Security architecture protects systems.

Responsibility architecture protects the human decision process.

## How to Use

Use this checklist before:

- deploying an AI-assisted workflow;
- increasing agent autonomy;
- allowing tool execution;
- publishing external AI-assisted output;
- changing approval or escalation rules;
- moving from demo/pilot to operational use.

Each item can be marked:

- `YES` — sufficiently addressed;
- `PARTIAL` — addressed but incomplete;
- `NO` — not addressed;
- `N/A` — not applicable;
- `ESCALATE` — requires Human Owner or governance review.

When in doubt, escalate.

## 1. Social and Intent Responsibility

| Check | Status | Notes |
|---|---|---|
| Is the purpose of the AI workflow clear in simple human language? |  |  |
| Is the human or organizational need explicit? |  |  |
| Is there a named owner for the intent behind the system? |  |  |
| Are possible social, organizational or human consequences considered? |  |  |
| Is the workflow justified beyond speed, cost reduction or novelty? |  |  |
| Would the purpose still be acceptable if explained publicly? |  |  |

## 2. Human-AI Asymmetry

| Check | Status | Notes |
|---|---|---|
| Could the AI output influence human judgment beyond the user's original intent? |  |  |
| Does the interface make assumptions, limits and uncertainty visible? |  |  |
| Can the human slow down, reject or re-scope the AI output? |  |  |
| Is there a risk that fluent AI output creates false authority? |  |  |
| Is additional friction required for consequential actions? |  |  |

## 3. Delegation Boundary

| Check | Status | Notes |
|---|---|---|
| What exactly is delegated to AI? |  |  |
| What must never be delegated to AI? |  |  |
| Is AI allowed to recommend only, or also execute? |  |  |
| Is the transition from recommendation to action clearly defined? |  |  |
| Does the workflow prevent hidden authority transfer? |  |  |

## 4. Agent Identity and Permissions

| Check | Status | Notes |
|---|---|---|
| Does each AI agent or automation component have a non-human identity? |  |  |
| Are permissions scoped to the minimum required action? |  |  |
| Are access tokens time-limited or session-limited where possible? |  |  |
| Can agent permissions be revoked quickly? |  |  |
| Is agent identity recorded in event records or logs? |  |  |
| Is it clear that technical permission is not legal authority? |  |  |

## 5. Human Owner and Role Map

| Check | Status | Notes |
|---|---|---|
| Is the Human Owner named? |  |  |
| Are reviewer, operator, deployer and technical owner roles distinguished? |  |  |
| Is final approval authority defined? |  |  |
| Is escalation ownership defined? |  |  |
| Is corrective duty defined if something goes wrong? |  |  |

## 6. Confirmation and Execution Boundary

| Check | Status | Notes |
|---|---|---|
| Which actions require fresh Human Owner confirmation? |  |  |
| Does confirmation refer to a specific action and scope? |  |  |
| Is stale confirmation detected? |  |  |
| Is scope drift detected before execution? |  |  |
| Can the system block execution if authority is invalid? |  |  |
| Is previous approval prevented from becoming hidden commitment? |  |  |

## 7. Traceability and Decision Log

| Check | Status | Notes |
|---|---|---|
| Is there a Decision Log or accountability record? |  |  |
| Are technical traces linked to business decisions? |  |  |
| Are event records append-only or otherwise protected from silent modification? |  |  |
| Are Human Owner approvals timestamped? |  |  |
| Are AI model / agent identity fields captured where relevant? |  |  |
| Can the workflow be reconstructed after an incident? |  |  |

## 8. Incident and Recovery Path

| Check | Status | Notes |
|---|---|---|
| Is there a defined incident response path? |  |  |
| Is technical rollback distinguished from legal/reportable incident handling? |  |  |
| Are severity levels defined? |  |  |
| Is Human Owner notification required? |  |  |
| Are corrective actions recorded without deleting original evidence? |  |  |

## 9. Data Governance and InfoSec Integration

| Check | Status | Notes |
|---|---|---|
| Does the workflow rely on personal data? |  |  |
| Is GDPR/privacy governance handled by a separate responsible function? |  |  |
| Is cybersecurity handled by a separate InfoSec process? |  |  |
| Are secrets, credentials and tokens excluded from prompts and logs? |  |  |
| Is RABA used to complement, not replace, security and data governance? |  |  |

## 10. G-Tonus Context Lens (Experimental)

**Status:** Optional qualitative lens, not a compliance metric.

G-Tonus may be used to review the context, tone, pressure and constraint syntax in human-AI workflows.

| Check | Status | Notes |
|---|---|---|
| Does the prompt or interface create pressure to agree quickly? |  |  |
| Does the AI tone imply authority beyond its role? |  |  |
| Are constraints written clearly enough to prevent scope expansion? |  |  |
| Does the human receive enough time and clarity to confirm responsibly? |  |  |
| Is the language of the workflow aligned with human agency rather than obedience? |  |  |

## Review Outcome

| Outcome | Meaning |
|---|---|
| PASS | Responsibility architecture is sufficient for the current scope. |
| PASS WITH CONDITIONS | Deployment may proceed only after listed conditions are met. |
| ESCALATE | Human Owner or governance review required. |
| DO NOT DEPLOY | Responsibility architecture is insufficient for safe use. |

## Minimum Review Record

```json
{
  "review_type": "responsibility_architecture_review",
  "workflow": "<workflow name>",
  "reviewed_at": "<ISO 8601>",
  "reviewed_by": "<human role>",
  "human_owner": "<name or role>",
  "outcome": "PASS | PASS_WITH_CONDITIONS | ESCALATE | DO_NOT_DEPLOY",
  "conditions": [],
  "open_questions": [],
  "decision_log_reference": "<link or id>"
}
```

## Boundary

This checklist is not legal advice, security certification, GDPR compliance, EU AI Act conformity assessment or product liability analysis.

It is a responsibility architecture review tool.

It should be used together with legal, compliance, cybersecurity and data governance review where applicable.
