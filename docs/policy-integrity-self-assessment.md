# Policy Integrity Self-Assessment

**Project:** Responsible AI Business Architecture (RABA)  
**Status:** Draft — practical assessment tool  
**Purpose:** Help organizations detect whether governed AI speed is protected from governance drift.

---

## Purpose

This self-assessment helps a team evaluate whether its AI workflow governance policies remain accurate, owned, reviewed and resistant to gradual erosion.

RABA defines governed speed as valuable only when the governance that defines that speed is itself protected.

> Governed speed is only valuable if the governance that defines it is protected.  
> Accountable speed requires policy integrity.

This document is not a certification, legal audit or compliance guarantee. It is a practical review tool for one AI-assisted workflow or action class.

---

## When to Use This Assessment

Use this assessment when:

- an AI workflow moves from recommendation to execution;
- Fast Path routing is introduced or expanded;
- Review Path approvals become very frequent or very fast;
- policy limits are changed;
- a workflow has been running without review for a long period;
- shadow mode is being used;
- autonomy is being increased;
- a pilot partner wants to understand governance maturity before scaling.

The best scope is narrow:

> one workflow, one action class, one routing policy.

---

## Assessment Scale

For each question, answer:

| Score | Meaning |
|---:|---|
| 0 | Not defined / unknown |
| 1 | Informal or partially defined |
| 2 | Defined but not consistently used |
| 3 | Defined, used and reviewed |

A low score does not mean the organization is unsafe by default. It means the governance structure may not yet be strong enough to justify more autonomy.

---

## Section 1 — Policy Ownership

1. Is there a named human policy owner for this action class?
2. Is the policy owner responsible for routing path classification?
3. Does the policy owner approve changes to Fast Path, Review Path, Escalation Path or Block classification?
4. Is the policy owner different from the AI system or model provider?
5. Is the policy owner visible in the workflow, Decision Log or governance documentation?

**Warning sign:** Nobody can clearly say who owns the routing policy.

---

## Section 2 — Routing Policy Integrity

6. Is the routing path based on human-defined business rules rather than model confidence alone?
7. Are deterministic limits defined for Fast Path eligibility?
8. Is real-world reversibility explicitly assessed before Fast Path is allowed?
9. Are data quality requirements defined for routing decisions?
10. Are policy limits versioned and traceable?

**Warning sign:** The model effectively decides whether its own output needs human review.

---

## Section 3 — Fast Path Drift

11. Is Fast Path percentage monitored as a diagnostic metric?
12. Is it explicitly forbidden to treat Fast Path percentage as a performance target?
13. If Fast Path percentage increases, is the reason documented?
14. Is increased Fast Path share linked to evidence of improved real-world reversibility?
15. Is remediation capacity checked before expanding Fast Path?

**Warning sign:** Fast Path share is celebrated as success without checking whether risk classification is still accurate.

---

## Section 4 — Review Path Integrity

16. Are Review Path approvals checked for rubber-stamping patterns?
17. Is average approval time monitored?
18. Are reviewers required to enter meaningful decision reasons for higher-risk actions?
19. Are reviewers allowed to reject, pause or escalate without penalty?
20. Are batch approvals protected with anti-fatigue controls?

**Warning sign:** Human review exists formally, but approval has become a mechanical click.

---

## Section 5 — Governed Bypass Lane Boundaries

21. Is the Governed Bypass Lane limited to internal, reversible, evidence-generating or decision-supporting work?
22. Is it prohibited from sending external communications while the accountable decision is pending?
23. Is it prohibited from changing customer data, rights, access, money, legal status or customer standing?
24. Is it prohibited from creating downstream commitments that constrain the human decision?
25. Are bypass actions logged and linked to the final decision record?

**Warning sign:** Bypass processing starts to create facts that make the accountable decision meaningless.

---

## Section 6 — Policy Change Control

26. Are routing policy changes documented before they take effect?
27. Is there independent review by a second role before policy relaxation?
28. Is every material policy change recorded in the Decision Log?
29. Are effective date, review date and policy version recorded?
30. Are rollback or expiration conditions defined for temporary policy changes?

**Warning sign:** Policy limits are changed casually to meet throughput pressure.

---

## Section 7 — Shadow Mode and Graduation

31. Is shadow mode treated as a governance object rather than an informal test state?
32. Is there a defined graduation timeline?
33. Are graduation criteria documented?
34. Does graduation require explicit human approval?
35. Is production autonomy blocked until evidence and approval exist?

**Warning sign:** Shadow mode becomes permanent, or production autonomy begins without a formal graduation decision.

---

## Section 8 — Governance Drift Indicators

36. Are drift indicators reviewed on a defined cadence?
37. Does the organization track unexplained Fast Path expansion?
38. Does it track decreasing Review Path approval time?
39. Does it track decreasing escalation rates without documented quality improvement?
40. Does it track policy limit increases without supporting evidence?

**Warning sign:** Governance appears stable on paper, but operational behavior quietly changes.

---

## Section 9 — Audit and Remediation

41. Is there a trigger for external or independent audit if drift persists?
42. Is remediation capacity tested against the volume of automated actions?
43. Is there a mass remediation playbook for high-volume Fast Path failures?
44. Are incidents, near-misses and valid human overrides reviewed before policy relaxation?
45. Is policy review required after major incidents or circuit breaker activation?

**Warning sign:** The organization can automate faster than it can detect, halt or repair wrong actions.

---

## Interpreting the Score

Maximum score: 135

| Score range | Interpretation |
|---:|---|
| 0–45 | Policy integrity is weak or mostly undefined. Do not increase autonomy yet. |
| 46–90 | Some controls exist, but governance drift risk is material. Strengthen ownership, review and logging before scaling. |
| 91–120 | Policy integrity is reasonably defined. Review weak areas before expanding Fast Path or production autonomy. |
| 121–135 | Strong policy integrity posture for the assessed action class, assuming evidence is accurate and current. |

The score is not the final decision. It is a diagnostic input.

A high score should still be checked against real incidents, audit findings, regulatory requirements and domain risk.

---

## Minimum Viable Policy Integrity Gate

Before expanding Fast Path or increasing autonomy, the organization should be able to answer yes to these minimum questions:

1. Who owns the routing policy?
2. What evidence proves this action class is real-world reversible enough for its path?
3. What prevents model-only routing?
4. What stops Fast Path expansion from becoming a hidden performance target?
5. What prevents Review Path from becoming rubber-stamping?
6. What is explicitly prohibited in Bypass Lane?
7. Who approves policy limit changes?
8. Where are policy changes recorded?
9. What drift indicators trigger review?
10. How fast can the organization halt and remediate wrong actions at scale?

If these questions cannot be answered, policy integrity is not yet strong enough to support increased autonomy.

---

## Recommended Decision

After completing the assessment, classify the action class as one of:

| Classification | Meaning |
|---|---|
| Keep / strengthen Review Path | Governance is not mature enough for more autonomy. |
| Maintain current path | Current controls are acceptable, but no expansion is justified yet. |
| Conditional Fast Path expansion | Expansion may proceed only after specified gaps are closed. |
| Fast Path expansion approved | Evidence supports increased autonomy and policy integrity is sufficient. |
| Escalate / Block | Governance drift, irreversibility or remediation weakness is too high. |

Every decision should be recorded in the Decision Log when it changes routing, policy limits, latency budget, reversibility classification or autonomy level.

---

## Related RABA Documents

- [`../concepts/policy-integrity.md`](../concepts/policy-integrity.md)
- [`../concepts/speed-protection-principle.md`](../concepts/speed-protection-principle.md)
- [`../concepts/responsibility-throughput-model.md`](../concepts/responsibility-throughput-model.md)
- [`decision-log-schema.md`](decision-log-schema.md)
- [`governance-gateway-implementation.md`](governance-gateway-implementation.md)
- [`repository-map.md`](repository-map.md)

---

## Core Principle

> RABA does not protect slowness.  
> RABA protects accountable speed.  
> Accountable speed requires policy integrity.
