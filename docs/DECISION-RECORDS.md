# Decision Records
## RABA Project

> Every significant decision is logged here.  
> Format: one file per decision, or sequential entries in this file.  
> No decision enters canon without Oleksandr's confirmation.

### How to use
1. When a decision is made — log it here immediately
2. Include both the decision AND the alternatives considered
3. Mark which models contributed which analysis
4. Oleksandr signs off with date

---

## DR-001 — Team Workflow Structure Confirmed

**Date:** 2025 (prototype phase)  
**Status:** Confirmed

**Decision:**  
Adopt a multi-model governance team with defined roles: Claude (Concept Architect), Gemini (Stress Tester), ChatGPT (Integrator), Comet (Orchestrator), with Oleksandr Shuliak as Accountable Owner.

**Reason:**  
Division of cognitive labor reduces bias from single-model confirmation. Each model has structural incentive to perform its role. Human accountability is preserved at every decision point.

**Alternatives considered:**
- Single model for all tasks: rejected — confirmation bias, no adversarial check
- Human-only workflow: rejected — does not demonstrate RABA pattern in practice

**Models contributing analysis:** Claude, Gemini, ChatGPT  
**Confirmed by:** Oleksandr Shuliak

---

## DR-002 — Canon-First Rule for LinkedIn

**Date:** 2025 (prototype phase)  
**Status:** Confirmed

**Decision:**  
LinkedIn content may only reference documents confirmed in GitHub `/canon`. No public communication precedes GitHub confirmation.

**Reason:**  
Prevents public commitments that outpace architecture development. Maintains integrity of the "GitHub as source of truth" principle.

**Alternatives considered:**
- LinkedIn as drafting space: rejected — public drafts create accountability before decisions are confirmed
- Parallel publishing: rejected — creates version conflicts

**Models contributing analysis:** Claude, Gemini, ChatGPT  
**Confirmed by:** Oleksandr Shuliak

---

## DR-003 — Archive Structure

**Date:** 2025 (prototype phase)  
**Status:** Confirmed

**Decision:**  
Three-tier archive structure: `/canon` (confirmed), `/in-review` (working materials), `/archive` (superseded). Decision Records are permanent — superseded decisions stay logged, not deleted.

**Reason:**  
Consistent with Minimum Governance principle. Provides audit trail without over-engineering.

**Alternatives considered:**
- Full Notion-style taxonomy: over-engineered for current phase
- No structure (flat folder): already causing context loss in prototype

**Models contributing analysis:** Claude  
**Confirmed by:** Oleksandr Shuliak

---

## Template for new records

```
## DR-[N] — [Short title]

**Date:**  
**Status:** Proposed / Confirmed / Superseded

**Decision:**  

**Reason:**  

**Alternatives considered:**  

**Models contributing analysis:**  
**Confirmed by:** Oleksandr Shuliak
```
