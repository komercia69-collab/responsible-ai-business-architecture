# Responsibility Review Panel — Conflict Surface Extension Plan

**Status:** Prototype Extension Plan  
**Canonical status:** Non-canonical  
**Scope:** Demo-only planning material  
**Target demo:** `responsibility-review-panel-v2-1.html` or the current Responsibility Review Panel demo successor  

> This document does not change RABA canon.  
> It does not define a schema.  
> It does not create runtime enforcement.  
> It does not create production implementation guidance.  
> It does not authorize AI control over field systems or safety-critical equipment.  

---

## 1. Purpose

This plan describes how the Responsibility Review Panel demo could be extended with a conflict-surface and responsibility-overlay layer.

The goal is to make the demo **policy-aware**, not merely review-aware.

The extension should show how RABA can explain why an AI agent is limited to one of several operational modes:

```text
observe
recommend
semi_auto
auto
```

The extension is for demonstration only.

---

## 2. Design principle

The demo should not imply that AI becomes responsible.

Use this language:

```text
human_decision_authority_weight
system_control_weight
agent_operational_autonomy_weight
```

Avoid this language:

```text
AI-agent-responsibility
AI responsibility
agent responsibility
```

Reason:

```text
AI-agent operational autonomy is not human or organizational responsibility.
```

---

## 3. UI sections to add

### 1A — Conflict Surface

Place after the current Action under review section.

Show:

- surface_id;
- domain;
- layer;
- conflict_type;
- actors;
- risk_level;
- reversibility.

Helper text:

```text
This surface defines where the conflict lives: domain, layer, actors, and the type of mismatch or risk that triggered review.
```

### 2A — Responsibility Overlay

Place after the current Responsible subject / reviewer section.

Show:

- human_decision_authority_weight;
- system_control_weight;
- agent_operational_autonomy_weight;
- responsible_owner;
- reviewer_role;
- requires_human_approval;
- auto_resolution_allowed.

Helper text:

```text
Human, system, and agent indicators do not assign legal responsibility to AI. They define who may act, who must approve, and where autonomy is capped.
```

### 3A — Agent Mode and Thresholds

Place after the current Evidence and missing context section.

Show:

- risk_level;
- reversibility;
- matched_rule;
- allowed_modes;
- computed_agent_mode;
- brief rationale.

Helper text:

```text
The current mode is computed from authority, system control, agent autonomy, risk, reversibility, and surface-specific policy constraints.
```

---

## 4. Suggested scenario model

Example-only JavaScript object:

```js
{
  action_id: 'act-204',
  conflictSurface: {
    id: 'S1',
    domain: 'telecom',
    layer: 'microservice_to_microservice',
    conflictType: ['data_contract', 'performance'],
    actors: ['billing_team', 'crm_team', 'platform_team', 'raba_test_agent'],
    riskLevel: 'medium',
    reversibility: 'easy'
  },
  responsibilityOverlay: {
    humanDecisionAuthorityWeight: 0.3,
    systemControlWeight: 0.8,
    agentOperationalAutonomyWeight: 0.7,
    responsibleOwner: 'billing_team',
    reviewerRole: 'platform_reviewer',
    requiresHumanApproval: false,
    autoResolutionAllowed: true
  },
  thresholds: {
    matchedRule: 'R9',
    allowedModes: ['observe', 'recommend', 'semi_auto', 'auto']
  }
}
```

Boundary:

```text
This model is an illustrative demo object only.
It is not a RABA schema.
It is not a production policy contract.
```

---

## 5. Example-only threshold rules

The demo may use a simplified threshold table to explain agent mode selection.

The table should remain example-only and should not be presented as RABA canon.

Possible rule dimensions:

- agent_operational_autonomy_weight;
- human_decision_authority_weight;
- risk_level;
- reversibility;
- auto_resolution_allowed;
- requires_human_approval;
- surface-specific caps.

Important safety cap:

```text
If layer is field_iiot or scada_plc, cap mode at observe or recommend.
Do not show semi_auto or auto for safety-critical field-control scenarios.
```

---

## 6. Suggested computeAgentMode logic

Example-only pseudocode:

```js
function computeAgentMode(scenario) {
  const overlay = scenario.responsibilityOverlay;
  const surface = scenario.conflictSurface;

  if (surface.layer === 'field_iiot' || surface.layer === 'scada_plc') {
    return {
      matchedRule: 'SAFETY_CAP',
      mode: overlay.agentOperationalAutonomyWeight <= 0.2 ? 'observe' : 'recommend',
      reason: 'Safety-critical surface caps autonomy at observe/recommend.'
    };
  }

  // Example-only threshold matching.
  // Not a RABA schema or production policy engine.

  if (overlay.requiresHumanApproval) {
    return {
      matchedRule: 'HUMAN_APPROVAL_REQUIRED',
      mode: 'recommend',
      reason: 'Human approval is required before any bounded remediation.'
    };
  }

  if (!overlay.autoResolutionAllowed) {
    return {
      matchedRule: 'AUTO_DISABLED',
      mode: 'recommend',
      reason: 'Auto-resolution is disabled for this surface.'
    };
  }

  return {
    matchedRule: 'DEMO_RULE',
    mode: 'semi_auto',
    reason: 'Example-only rule selected bounded semi-automatic remediation.'
  };
}
```

---

## 7. Reviewer action logic

The reviewer response options should depend on computed agent mode.

| Mode | Suggested options |
|---|---|
| observe | Request more context / Escalate / Block |
| recommend | Approve recommendation / Request more context / Escalate / Block |
| semi_auto | Approve playbook / Request modification / Escalate / Block |
| auto | Allow automatic execution / Constrain with policy / Escalate / Block |

Boundary:

```text
The demo may show automatic execution as a simulated UI state only.
It must not imply production authorization or live execution.
```

---

## 8. Decision Log preview additions

Extend the Decision Log preview with fields such as:

```text
surface_id: S1
domain: telecom
layer: microservice_to_microservice
conflict_type: [data_contract, performance]
human_decision_authority_weight: 0.3
system_control_weight: 0.8
agent_operational_autonomy_weight: 0.7
risk_level: medium
reversibility: easy
matched_rule: R9
computed_agent_mode: semi_auto
allowed_modes: [observe, recommend, semi_auto, auto]
requires_human_approval: false
auto_resolution_allowed: true
reviewer_selected_response: approve_playbook
missing_context: []
```

This allows the demo to show the policy basis for the review decision.

---

## 9. Recommended demo scenarios

Use at least four demo scenarios to show how RABA constrains agentic action differently across conflict surfaces:

| Scenario | Surface | Risk / rollback | Expected mode |
|---|---|---|---|
| Field / IIoT | F1 | high risk / hard rollback | observe |
| MES / ERP | M1 | medium risk / moderate rollback | recommend |
| Microservice contract | S1 | low-medium risk / easy rollback | semi_auto |
| Service mesh | N1 | low risk / easy rollback | auto |

Important boundary:

```text
The auto scenario is a simulated demo scenario only.
It should require clear rollback, low blast radius, ownership, monitoring, and pre-authorized policy boundaries.
```

---

## 10. Safe implementation order

Recommended order:

1. Extend existing demo scenarios with conflictSurface and responsibilityOverlay fields.
2. Add example-only threshold logic.
3. Show computed agent mode above reviewer options.
4. Extend the Decision Log preview.
5. Add full visual blocks 1A / 2A / 3A.
6. Add explicit non-canonical demo-only boundary text in the UI.

---

## 11. What this plan does not do

This plan does not:

- change RABA canon;
- define an official RABA schema;
- define a production policy engine;
- authorize automated remediation;
- authorize AI control over field systems;
- make AI responsible;
- create safety claims;
- create Industry 4.0 certification claims;
- create implementation guidance;
- replace legal, security, SRE, compliance, or safety engineering.

---

## 12. Summary

This extension can make the Responsibility Review Panel demo more useful by showing how conflict surfaces, responsibility overlay, reversibility, risk, and policy thresholds constrain AI-agent action.

The useful RABA message is:

```text
Agent mode is not chosen by model confidence.
Agent mode is constrained by responsibility, authority, risk, reversibility, ownership, and policy boundaries.
```
