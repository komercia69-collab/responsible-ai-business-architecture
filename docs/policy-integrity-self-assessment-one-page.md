# Policy Integrity Self-Assessment — One-Page Version

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — external conversation tool  
**Purpose:** A short practical check for whether one AI-assisted workflow or action class can responsibly support more autonomy.

---

## Core Question

Before an organization expands Fast Path, increases AI autonomy, or relaxes review requirements, it should ask:

> Is the governance that defines this speed still protected?

RABA's core principle for this assessment:

> Governed speed is only valuable if the governance that defines it is protected.  
> Accountable speed requires policy integrity.

---

## How to Use This One-Page Check

Use this in a first pilot conversation, discovery call, workshop, or internal review.

Scope it narrowly:

> one workflow, one action class, one routing policy.

For each question, answer:

| Answer | Meaning |
|---|---|
| Yes | Defined and used |
| Partial | Informal, incomplete, or inconsistent |
| No | Not defined or unknown |

If several answers are **No** or **Partial**, do not expand autonomy yet. Use the full assessment: [`policy-integrity-self-assessment.md`](policy-integrity-self-assessment.md).

---

## 12 Key Questions

### 1. Policy Owner

Is there a named human owner for the routing policy of this action class?

### 2. Human-Defined Routing

Is the routing path defined by human-approved business rules, not by model confidence alone?

### 3. Real-World Reversibility

Is real-world reversibility explicitly assessed before Fast Path is allowed?

### 4. Fast Path Discipline

Is Fast Path percentage treated as a diagnostic metric, not a performance target?

### 5. Evidence for Expansion

If Fast Path share is increasing, is there documented evidence that risk, reversibility, data quality, or remediation capacity has improved?

### 6. Review Path Integrity

Are Review Path approvals checked for rubber-stamping or batch-stamping patterns?

### 7. Bypass Lane Boundary

Is the Governed Bypass Lane clearly prohibited from sending external communications, changing customer data, committing resources, or creating obligations before the accountable decision?

### 8. Policy Change Control

Do routing path changes, policy limit changes, latency budget changes, or reversibility changes require documented human approval?

### 9. Decision Log

Are material policy changes recorded in a Decision Log with approver, reason, date, and effective version?

### 10. Shadow Mode Graduation

If the AI system is in shadow mode, is there a defined graduation timeline and explicit human approval before production autonomy?

### 11. Drift Indicators

Does the organization monitor governance drift indicators such as unexplained Fast Path growth, faster Review Path approvals, lower escalation rates, or policy limit increases without evidence?

### 12. Halt and Remediation Capacity

Can the organization halt, downgrade, audit, and remediate wrong actions at the same scale at which automation can create them?

---

## Quick Interpretation

| Result | Interpretation | Recommended action |
|---|---|---|
| Mostly Yes | Basic policy integrity appears present | Continue with workflow-level review and evidence check |
| Several Partial | Governance exists but may drift under pressure | Strengthen ownership, logging and review before expanding autonomy |
| Any critical No on questions 1, 2, 3, 7, 8 or 12 | Autonomy expansion is not yet justified | Keep or strengthen Review Path / Escalation Path |
| Many No answers | Policy integrity is weak or unknown | Do not expand Fast Path; run full assessment |

---

## Red Flags

Treat these as immediate review triggers:

- Fast Path percentage is used as a success KPI.
- The model decides whether its own output needs human review.
- Review approvals are almost always one-click approvals.
- Bypass processing creates facts that constrain the final human decision.
- Policy limits are changed to meet speed or cost targets without independent review.
- Shadow mode has no graduation plan.
- The organization can automate faster than it can halt or remediate.

---

## Minimum Pilot Decision

After this one-page check, classify the workflow as:

| Decision | Meaning |
|---|---|
| Ready for controlled pilot | Basic ownership, routing, logging and remediation controls exist |
| Pilot with conditions | Pilot can proceed only after listed gaps are closed |
| Review Path only | Autonomy should not increase yet |
| Escalate / Block | Governance drift, irreversibility or remediation weakness is too high |

Every decision that changes routing, policy limits, latency budget, reversibility classification, or autonomy level should be recorded in the Decision Log.

---

## Related Documents

- [`../concepts/policy-integrity.md`](../concepts/policy-integrity.md)
- [`policy-integrity-self-assessment.md`](policy-integrity-self-assessment.md)
- [`../concepts/speed-protection-principle.md`](../concepts/speed-protection-principle.md)
- [`../concepts/responsibility-throughput-model.md`](../concepts/responsibility-throughput-model.md)
- [`pilot-partner-talk-track.md`](pilot-partner-talk-track.md)
- [`../offers/minimal-human-ai-governance-pilot.md`](../offers/minimal-human-ai-governance-pilot.md)

---

## Short External Summary

RABA does not ask whether AI should be fast or slow.

RABA asks whether the organization can defend the speed of an AI-supported action with clear ownership, protected policy boundaries, meaningful review, logged decisions, and real remediation capacity.

If the policy that defines speed can drift silently, the speed is not governed.
