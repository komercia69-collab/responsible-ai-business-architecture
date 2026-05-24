# Revised Discussion Draft V2.1: Governed Preparation & Bypass Pattern

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Discussion Draft V2.1 — updated with anti-tunneling guards and review corrections  
**Prepared for:** G and K review  
**Prepared by:** Oleksandr Shuliak / ChatGPT  
**External-facing term:** Governed Preparation Route  
**Internal shorthand:** Governed Bypass Lane  
**Purpose:** Define how AI can accelerate decision preparation without creating a cognitive tunnel or weakening human responsibility.

---

## 1. Core Idea and Hybrid Model

The Governed Preparation Route is a controlled acceleration mechanism inside RABA.

It allows AI to prepare the decision environment before human approval, but it is strictly forbidden from creating external consequences, legal obligations, irreversible records, financial commitments, or business facts before an accountable human decision is made.

Architecturally, this is not a separate top-level Approval State. A separate state would overcomplicate the state machine and blur the distinction between accountability status and preparation route.

Instead, Governed Preparation is executed as a specific Governance Gateway Route bound by mandatory execution-lock metadata.

Core rule:

> Governed Preparation may prepare the decision environment.  
> Governed Preparation must not create facts that constrain the accountable decision.  
> Governed Preparation must not create a cognitive tunnel that makes human review purely formal.

A cognitive tunnel occurs when AI preparation is so complete, polished, or selectively framed that human review remains formally present but becomes practically absent.

---

## 2. Why This Matters

Organizations face a tension between machine speed and human responsibility.

Business teams demand:

- faster response times;
- shorter review cycles;
- reduced operational friction;
- more AI assistance;
- lower manual preparation effort.

Governance requires:

- human accountability;
- auditability;
- traceability;
- approval before external action;
- prevention of irreversible AI actions;
- protection against rubber-stamp review.

The Governed Preparation Route resolves part of this tension by allowing AI to do heavy context lifting at machine speed while maintaining a hard technical boundary before any action is committed.

In simple terms:

> AI can accelerate preparation before the decision.  
> AI must not make or execute the accountable decision unless explicitly authorized.

---

## 3. Allowed Actions: What Preparation Is

AI may perform preparatory, reversible, non-binding actions inside this route.

Allowed examples:

- summarize customer history and ticket logs;
- classify issue types;
- detect sentiment signals;
- gather internal evidence packages;
- link relevant policies;
- identify risk flags;
- identify policy mismatches;
- identify anomalies;
- calculate possible options;
- draft proposed response text in an isolated workspace;
- pre-fill non-committed draft fields in a shadow environment;
- surface missing evidence or conflicting facts.

The output of Governed Preparation should help the responsible human make a faster, better, and more accountable decision.

---

## 4. Prohibited Actions: What Preparation Is Not

Governed Preparation must never cross the action boundary.

AI must not:

- send external communications;
- notify clients or external parties;
- promise refunds, compensation, or resource allocation;
- modify master customer records;
- update final CRM statuses;
- trigger downstream workflows that are practically or technically irreversible;
- commit financial assets;
- create organizational obligations;
- change routing policy;
- silently expand Fast Path eligibility;
- communicate a likely decision outcome to an external party.

Governed Preparation is preparation before decision. It is not hidden execution.

---

## 5. Technical Implementation and Gateway Metadata

When a workflow enters the preparation route, the Governance Gateway enforces the following metadata footprint on the transaction object:

```json
{
  "approval_state": "DRAFT",
  "route": "governed_preparation",
  "boundary_status": "not_crossed",
  "execution_locked": true,
  "prepared_by": "AI",
  "requires_human_authorization": true,
  "shadow_state_isolated": true
}
```

Any execution API or write-action invoked while `execution_locked == true` and `route == governed_preparation` must be hard-blocked by the gateway at the infrastructure level.

This keeps the Approval State model clean while making the preparation route visible, enforceable, and auditable.

---

## 6. Shadow Object

The Shadow Object is the isolated preparation container where AI-generated drafts, evidence packages, risk flags, and recommendation material are stored before human authorization.

The Shadow Object must not be a live execution object.

It must not auto-save into a customer-facing system, trigger downstream workflows, or modify master records.

Minimum Shadow Object manifest:

```json
{
  "shadow_object_id": "shadow_123",
  "source_action_id": "action_456",
  "created_by": "AI",
  "route": "governed_preparation",
  "execution_locked": true,
  "merge_requires_human_authorization": true,
  "allowed_merge_targets": [
    "customer_reply_draft",
    "internal_case_note"
  ],
  "prohibited_merge_targets": [
    "sent_customer_message",
    "final_crm_status",
    "refund_execution",
    "payment_commitment"
  ],
  "prepared_content": {
    "summary": "...",
    "draft_response": "...",
    "recommendation": "..."
  },
  "evidence_refs": [],
  "risk_flags": [],
  "context_completeness_status": "complete | partial | unknown",
  "human_merge_authorization": null,
  "created_at": "..."
}
```

A complete Shadow Object schema should be created as a follow-up artifact if the pattern is accepted.

---

## 7. Preparation Safety Requirements: Anti-Tunneling Guards

To prevent human reviewers from blindly approving AI-generated outputs, the architecture mandates three safety layers.

### 7.1 Managed Cognitive Friction

Governed Preparation must protect against rubber-stamp approval.

A well-prepared AI decision package can create the illusion that the decision has already been made. This may reduce human review to a formal click.

For medium-to-high risk categories, the gateway should enforce Cognitive Friction.

Cognitive Friction should not depend on the same AI acting as an independent critic of its own output.

The same AI system that prepares a recommendation may surface uncertainty, missing evidence, and possible conflicts, but it must not be treated as an independent validator of its own output.

Preferred mechanisms:

- require the reviewer to open the evidence section before approval;
- require a short human reason for approval;
- require confirmation that specific source categories were reviewed;
- require the reviewer to acknowledge unresolved uncertainty;
- require independent policy-rule checks where available;
- require comparison against source records rather than only AI summary;
- show system-detected conflicting facts or anomaly signals;
- show missing source warnings;
- delay or disable one-click approval for elevated-risk cases;
- require escalation when evidence is incomplete or reversibility is uncertain.

AI may prepare alternative options or highlight possible weaknesses, but those outputs are preparation signals, not independent validation.

Core principle:

> AI may help expose uncertainty.  
> AI must not be treated as an independent reviewer of its own recommendation.

### 7.2 Context Truncation and Confidence Guards

AI text generation can mask missing data with high linguistic confidence.

RABA prevents this distorted reality risk through explicit data status flags.

If the context window is full, source systems fail, or only partial history is available, the transaction must expose this fact.

Possible flags:

```json
{
  "partial_context_analyzed": true,
  "context_window_truncated": true,
  "missing_sources": ["prior_ticket_history", "refund_history"],
  "evidence_confidence": "low",
  "source_coverage": "last_30_days_only"
}
```

The UI must display a visible warning when confidence is low or data is missing.

Example warning:

> Warning: AI analyzed only the last 30 days. Prior history is unverified.

Governed Preparation must not present incomplete context as complete.

### 7.3 UI and Environment Isolation

Governed Preparation must not occur inside a live execution UI where a draft can accidentally become an action.

Modern CRM, ticketing, or workflow systems may include:

- auto-save behavior;
- keyboard shortcuts;
- visible drafts;
- automatic workflow triggers;
- CRM status changes;
- hidden side effects.

Therefore, AI outputs must be written into a read-only Shadow Object or isolated workspace sandbox.

Only after explicit human approval may the gateway execute a secure merge operation, transferring approved content into active system fields.

Governed Preparation must never have direct access to UI elements or APIs that can:

- send a customer message;
- publish a draft externally;
- auto-save into a legally significant record;
- change a customer status;
- trigger a downstream workflow;
- reserve money;
- commit a refund;
- create external reliance.

---

## 8. Permission Boundary

Governance must be machine-enforceable, not just written in policy documents.

Governed Preparation may have read-only access to:

- CRM data;
- ticket histories;
- BI systems;
- policy repositories;
- customer history;
- evidence sources;
- draft sandbox;
- anomaly detection outputs.

Governed Preparation must have no access to:

- messaging SMTP/API;
- customer notification systems;
- payment processing networks;
- refund execution APIs;
- final database update triggers;
- master CRM write fields;
- configuration management tools;
- policy modification tools;
- live execution UI controls.

Permission boundaries must be enforced at the infrastructure level, not only through prompt instructions.

---

## 9. Route Transition Rule

A workflow that begins in Governed Preparation must not silently transition to Fast Path.

Any transition from Governed Preparation to Fast Path requires:

- explicit Governance Gateway re-evaluation;
- current policy version check;
- reversibility check;
- policy owner-defined eligibility;
- Responsibility Event Stream logging;
- Decision Log entry if the transition changes action-class routing policy or materially expands autonomy.

Silent transition from preparation to execution is a governance drift vector.

---

## 10. Responsibility Event Stream and Decision Log

Every preparation cycle must emit events for auditing human-AI collaboration.

Suggested events:

```text
bypass_preparation_started
context_completeness_verified
bypass_context_truncated
evidence_confidence_low
conflicting_facts_detected
cognitive_friction_applied
shadow_object_created
shadow_state_merge_requested
shadow_state_merged_by_human
preparation_to_review_path_routed
preparation_blocked_due_to_external_effect
```

If the preparation leads to an action, the final Decision Log must capture:

1. What the AI recommended.
2. What evidence was presented.
3. What preparation quality signals were visible.
4. What alternative options or uncertainty signals were shown.
5. Any changes the human made to the draft.
6. The identity of the authorizing human.
7. The timestamp of authorization.
8. What was executed after authorization.

---

## 11. Rubber-Stamp Drift Detection

RABA proposes automated rubber-stamp drift detection with configurable thresholds.

This is not an optional philosophical question. It is a proposed control whose parameters should be confirmed or adjusted during implementation.

Suggested configurable parameters:

```json
{
  "rubber_stamp_detection": {
    "enabled": true,
    "risk_classes": ["medium", "high"],
    "approval_time_threshold_seconds": 3,
    "consecutive_approval_count": 10,
    "action": "trigger_review_or_block",
    "review_owner": "policy_owner"
  }
}
```

The default proposal is:

> If a reviewer approves N medium/high-risk AI-prepared packages below T seconds within a defined time window, the system triggers review or temporary block.

G and K should confirm or adjust:

- approval time threshold T;
- approval count N;
- affected risk classes;
- time window;
- block versus review behavior;
- escalation owner.

---

## 12. Policy Drift Risks

The implementation must actively monitor for:

### Erosion Drift

Pre-filled fields slowly creep from suggestions into default choices.

### Rubber-Stamp Drift

Review times drop below the practical threshold required for a human to read the evidence.

### Language Drift

AI uses presumptive language in drafts, such as:

> We have issued your refund.

instead of:

> A refund option has been prepared for review.

### Context Tunnel Drift

AI summaries become the human reviewer’s primary reality, while omitted or contradictory facts disappear from the decision interface.

### Permission Creep

Preparation tools gradually receive access to execution APIs for convenience.

These are Policy Integrity risks and must trigger review.

---

## 13. Example: Customer Support Workflow

A customer complains repeatedly about delivery problems.

The AI system detects the pattern and prepares support recommendations.

Allowed in Governed Preparation:

- summarize previous tickets;
- identify repeated delivery issues;
- collect BI signals;
- prepare a draft reply in an isolated workspace;
- suggest possible compensation options;
- show customer history;
- check policy match;
- flag sensitive, VIP, vulnerable, legal-risk, or high-value cases;
- surface missing evidence or conflicting customer history.

Not allowed in Governed Preparation:

- send the reply to the customer;
- promise compensation;
- issue a refund;
- update CRM status as resolved;
- create a legally significant complaint record;
- trigger a compensation workflow;
- tell the customer compensation is likely;
- hide missing context from the reviewer.

Correct pattern:

```text
AI prepares context in Shadow Object
→ AI surfaces evidence, risks, missing context, and conflicts
→ Governance Gateway checks boundary
→ Cognitive Friction is applied if risk requires it
→ Human manager approves / modifies / rejects
→ Gateway executes secure merge only after authorization
→ Decision Log records approval, reason, and execution
```

---

## 14. Open Questions for G and K

1. Friction trigger metrics  
   What financial, operational, or risk thresholds should dynamically escalate `friction_level` from low to high?

2. Shadow Object implementation  
   Do existing CRM/ERP integration layers support a read-only Shadow Object, or does RABA need a custom proxy UI layer?

3. Rubber-stamp detection parameters  
   RABA proposes automated drift detection with configurable thresholds. What should be the default threshold for N approvals below T seconds, and should the default action be review, temporary block, or escalation?

4. Independent validation boundary  
   Which checks must be independent of the same AI system that prepared the recommendation?

5. Merge authorization  
   What minimum human action should count as authorization to merge Shadow Object content into the active system?

---

## 15. Draft Recommendation

Governed Preparation should be implemented in RABA as a controlled Governance Gateway route with mandatory execution-lock metadata and Shadow Object isolation.

It should not be treated as a shortcut around responsibility.

Recommended position:

> Governed Preparation is allowed only before the action boundary.  
> It may prepare evidence, drafts, classifications, risk flags, and recommendations.  
> It must not execute, promise, commit, notify, modify, or create obligations.  
> It must not create a cognitive tunnel that makes human review purely formal.  
> Any attempt to cross the action boundary must be routed to Review Path, Escalation Path, Fast Path if explicitly eligible, or Block.

This gives RABA a strong answer to the business demand for speed:

> We can accelerate preparation without weakening accountability.

---

## 16. Short Version

Governed Preparation is not “AI acts without approval”.

It is:

> AI prepares everything needed for a responsible human decision, but cannot create external consequences before authorization.

The implementation requires:

- Gateway route control;
- execution lock;
- Shadow Object isolation;
- cognitive friction;
- context completeness warnings;
- independent or structured validation checks;
- rubber-stamp drift detection;
- Decision Log traceability.

This pattern may become one of RABA’s strongest practical mechanisms because it protects both speed and responsibility.
