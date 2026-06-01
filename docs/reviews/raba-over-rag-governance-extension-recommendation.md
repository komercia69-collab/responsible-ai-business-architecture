# RABA-over-RAG Governance Extension Recommendation

**Status:** External AI Recommendation Input  
**Review type:** Implementation Stress Test  
**RABA status:** Non-canonical  
**Human Owner status:** Human Owner review required before architectural adoption  
**Source context:** amber white paper review and multi-AI analysis  
**Date:** 2026-05-31  
**Related non-canonical note:** [`Recursive Evidence Boundary`](../notes/recursive-evidence-boundary.md) — clarifies that evidence transfer is not authority transfer and that transferred proof becomes an incoming claim requiring local admissibility before consequential use.

> This note is not approved architecture.  
> Multi-AI agreement is not approval.  
> Human Owner confirmation is required before canonical adoption, public positioning, partner-facing claims, or implementation commitments.

---

## 1. Topic

This note stress-tests and operationalizes the proposed RABA insertion points for enterprise generative AI / RAG implementations.

The core question is:

```text
How can RABA act as a governance layer above RAG-based enterprise AI systems without competing with implementation tools?
```

The working positioning is:

```text
RAG reduces hallucination risk.
RABA reduces responsibility drift.
```

And more explicitly:

```text
Enterprise AI search grounds answers in company knowledge.
RABA grounds AI-supported action in authority, admissibility, and accepted responsibility.
```

---

## 2. What works

The reviewed recommendation identifies a useful structural separation:

```text
Implementation guidance covers RAG, access rights, onboarding, integrations, and adoption.
RABA covers authority, action boundaries, responsibility handoffs, decision records, and drift prevention.
```

Three ideas are especially valuable:

1. **Source Log != Decision Log**  
   A source log explains where the AI found information.  
   A decision log explains who allowed a consequential use of that information.

2. **Access rights != action authority**  
   A user may have permission to read a document without having delegated authority to act on its contents.

3. **Adoption success can create governance drift**  
   When AI becomes normal in daily work, human review can become formal, habitual, or rubber-stamped.

---

## 3. What is unclear / implementation risks

### 3.1 Rubber-stamp drift and weak UI confirmation

A button click does not prove human understanding.

Passive confirmation can become governance theatre if users learn that clicking is the fastest path through the process.

RABA should avoid over-claiming that a confirmation button proves comprehension.

Stronger evidence may include:

- reason capture;
- short human decision summary;
- explicit source-review confirmation;
- risk acknowledgment;
- conflict acknowledgment;
- typed confirmation for critical actions;
- active evidence interlock for high-stakes cases.

A timer alone is a weak signal. It proves delay, not understanding.

---

### 3.2 Missing bridge between Source Log and Decision Log

RAG systems may preserve retrieval traces or source references.

RABA Decision Logs preserve responsibility-relevant decisions.

Without an explicit bridge, auditability is incomplete.

The missing link is:

```text
Source Log / Retrieval Trace
        ↓
Evidence State
        ↓
Decision Log
        ↓
Responsibility Event Stream
```

The Decision Log should preserve references to the source evidence used by the AI and, where required, reviewed by the human.

---

### 3.3 Authorization gap: read access vs execute authority

SSO, Active Directory, and access-control systems primarily determine what a user or AI system can see.

RABA must determine what an AI-supported workflow may do.

Working rule:

```text
SSO / Active Directory governs data visibility.
RABA Action Boundary governs action authority.
```

This implies different owners:

- IT / identity systems own read access and identity synchronization;
- business process owners own action authority and escalation rules;
- risk / compliance roles may own review thresholds and policy integrity;
- the Human Owner remains accountable for canonical RABA adoption.

---

### 3.4 Governance Mapping must produce a machine-readable artifact

Adding governance questions to a Key User Workshop is useful but not sufficient.

The output should not be only meeting notes.

A RABA governance mapping workshop should produce a structured artifact, for example:

```text
AI_Role_Profile.yaml
```

This profile should define the AI role, allowed outputs, forbidden outputs, action boundaries, escalation owner, correction owner, human response window, and logging requirements.

---

### 3.5 Autonomy / adoption drift detection must not be self-assessed by the AI

AI should not evaluate the quality of human oversight over its own outputs.

Drift detection should rely on externally defined, deterministic or independently controlled signals, for example:

- review time unexpectedly collapsing;
- approval rate rising above threshold;
- repeated use of default reasons;
- high-risk actions approved with no source review;
- human response missing but process still continuing;
- bypass preparation repeatedly converting into execution without fresh authorization.

Any threshold relaxation should require human-controlled policy review.

---

## 4. Implementation insertion points

### Insertion Point 1 — Traceability to Decision Audit Trail

Enterprise RAG traceability typically answers:

```text
Which source did the AI use?
```

RABA extends the question:

```text
Who used that answer, for what action, under which authority, and with what responsibility?
```

Implementation implication:

```text
Source Log explains what the AI used.
Decision Log explains what the human allowed.
The bridge must be explicit.
```

Suggested Decision Log fields:

```yaml
source_log_reference_ids:
  - source_log_id: "rag_src_..."
    source_system: "enterprise_search"
    retrieval_trace_id: "retrieval_..."
    source_snapshot_id: "snapshot_..."
    evidence_hash: "sha256:..."
    evidence_freshness: "current | stale | unknown | contested"
    human_source_reviewed: true
```

---

### Insertion Point 2 — Access Rights to Action Boundary

Enterprise AI tools often integrate with SSO / Active Directory to preserve access rights.

RABA adds a separate action boundary layer:

```text
Read permission does not equal execute authority.
```

Suggested fields:

```yaml
read_access_checked: true
action_authority_required: true
action_authority_status: "satisfied | missing | unresolved | not_required"
authority_owner_role: "Business Process Owner"
action_boundary_status: "not_crossed | approaching | crossed | blocked"
```

---

### Insertion Point 3 — Key User Workshop to Governance Mapping Moment

A standard Key User Workshop usually captures:

- jobs to be done;
- pains;
- gains;
- daily systems;
- expected adoption value.

RABA proposes an additional governance mapping step:

- where AI output may become operational action;
- which outputs are internal-only;
- which outputs can create external consequence;
- who owns escalation;
- who owns correction;
- what human response window is required;
- what must be logged before autonomy increases.

Suggested artifact:

```yaml
use_case_id: "sales_email_rag_001"
ai_role: "drafting_assistant"
allowed_outputs:
  - "internal_summary"
  - "draft_email"
forbidden_outputs:
  - "external_commitment"
  - "price_or_discount_approval"
action_boundary:
  trigger: "draft becomes external customer communication"
  consequence_class: "external_claim"
escalation_owner:
  role: "Sales Manager"
  named_person_required: true
responsibility_owner:
  role: "Business Process Owner"
correction_owner:
  role: "Customer Communication Owner"
human_response_window:
  required: true
  default_window_minutes: 30
source_log_required: true
decision_log_required: true
governed_bypass_allowed: true
allowed_bypass_actions:
  - "revise_draft"
  - "mark_risky_claims"
  - "collect_sources"
  - "prepare_decision_summary"
forbidden_bypass_actions:
  - "send_external_message"
  - "create_binding_commitment"
  - "change_customer_record"
```

---

### Insertion Point 4 — RAG hallucination prevention to active human engagement evidence

RAG helps reduce fabricated answers by grounding generation in retrieved sources.

RABA adds the question:

```text
What happens when the grounded answer is used for a consequential decision or action?
```

For high-stakes actions, RABA should require evidence of active human engagement, not only passive approval.

Possible engagement evidence:

```yaml
human_engagement_evidence:
  source_review_required: true
  reason_capture_required: true
  risk_acknowledgment_required: true
  conflict_acknowledgment_required: false
  typed_confirmation_required_for_critical: true
  passive_timer_only_allowed: false
```

This should be treated as a non-canonical working direction unless separately accepted.

---

### Insertion Point 5 — Establishment phase to adoption drift detection

Successful adoption can create uncritical trust.

Uncritical trust can create rubber-stamp drift.

RABA should treat the establishment phase as a governance monitoring phase, not only as an adoption success phase.

Possible deterministic drift indicators:

```yaml
adoption_drift_indicators:
  review_time_collapse: true
  approval_rate_threshold_exceeded: true
  default_reason_reuse_detected: true
  high_risk_no_source_review: true
  repeated_bypass_to_execution: true
  human_response_missing_treated_as_approval: true
```

Required boundary:

```text
AI must not self-certify that human oversight is substantive.
```

---

## 5. Candidate artifacts

The following artifacts are candidates for future RABA development.

They are not canonical as of this note.

### 5.1 Decision Log extension fields

```yaml
source_log_reference_ids: []
retrieval_trace_id: null
source_snapshot_id: null
evidence_hash: null
human_source_reviewed: false
human_engagement_evidence: {}
action_authority_status: null
```

### 5.2 AI Role Profile

Candidate path:

```text
templates/ai-role-profile.yaml
```

Purpose:

```text
Machine-readable output of Governance Mapping inside an AI implementation workshop.
```

### 5.3 Governance Mapping Workshop Add-on

Candidate path:

```text
docs/notes/governance-mapping-workshop-add-on.md
```

Purpose:

```text
A practical RABA add-on for organizations already running AI adoption, key user, or RAG implementation workshops.
```

### 5.4 Drift detection profile

Candidate path:

```text
docs/notes/adoption-drift-detection-working-note.md
```

Purpose:

```text
Define deterministic warning signals for rubber-stamp drift and governance drift after AI adoption becomes routine.
```

---

## 6. Risks

### Risk 1 — Positioning confusion

RABA should not present itself as correcting or attacking a specific vendor.

Safer framing:

```text
Implementation guides solve adoption.
RABA adds responsibility architecture after adoption begins to create consequential workflows.
```

---

### Risk 2 — Market timing

Organizations in early AI adoption may not yet feel governance pain.

RABA may resonate more strongly after the first months of routine AI use, when:

- trust becomes habitual;
- outputs enter customer or operational workflows;
- review becomes faster;
- escalation becomes unclear;
- responsibility gaps become visible.

---

### Risk 3 — Abstract without pilot

The RABA-over-RAG governance layer needs a concrete demonstration.

A strong pilot candidate is:

```text
Governance Mapping Add-on for one AI implementation workshop.
```

Pilot output could include:

- AI Role Profile;
- action boundary map;
- source-log to decision-log bridge;
- human response window;
- escalation and correction owner map;
- drift indicators.

---

### Risk 4 — Decision Log vs audit log confusion

Standard audit logs record system events.

RABA Decision Logs record human-AI responsibility handoffs.

This distinction must remain sharp:

```text
Audit Log: what happened technically.
Source Log: what evidence was retrieved.
Decision Log: why consequential use was allowed, revised, escalated, or blocked.
Responsibility Event Stream: how responsibility-relevant state changed.
```

---

## 7. Recommended triage

| Recommendation | Triage | Reason |
|---|---:|---|
| Source Log to Decision Log bridge | Accept as direction | Critical for replayability |
| Active Confirmation Interlock as fixed UX | Revise | Avoid governance theatre; prefer active human engagement evidence |
| Governance Mapping in Key User Workshop | Accept as direction | Strong practical pilot entry point |
| Read access vs execute authority split | Accept as direction | Core responsibility distinction |
| Draft Decision Log approval of all five extensions | Defer | Too early; extension candidates are not approved |
| AI self-assessment of oversight quality | Reject | Oversight quality must be measured externally or independently |

---

## 8. Suggested next actions

1. Create `templates/ai-role-profile.yaml` as a candidate artifact.
2. Create `docs/notes/governance-mapping-workshop-add-on.md` as a non-canonical working note.
3. Add a small Decision Log extension section or note for `source_log_reference_ids`.
4. Add glossary language:

```text
SSO / Active Directory governs data visibility.
RABA Action Boundary governs action authority.
```

5. Defer any canonical Decision Log entry until the Human Owner decides which extension candidates are accepted.

---

## 9. Governance boundary

This document is:

- external AI recommendation input;
- implementation stress-test material;
- non-canonical;
- not an endorsement of amber;
- not an adoption decision;
- not an implementation commitment;
- not a public positioning claim;
- not a partnership assumption;
- not approved architecture.

Any canonical use requires Human Owner confirmation and a separate decision trail.
