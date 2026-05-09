# Recommendation-Execution Collapse

## Description

Recommendation-Execution Collapse occurs when AI recommendations become operationally indistinguishable from autonomous execution.

Formally, a human may still remain "in the loop".

Operationally, the AI system becomes the effective decision-maker.

This often happens gradually through workflow acceleration, automation convenience, trust accumulation, or review fatigue.

---

## Why This Matters

Organizations may incorrectly assume that human accountability remains intact simply because a human technically approves the final action.

In practice, approval may become performative rather than substantive.

Without observable governance boundaries, organizations risk creating systems where:

- responsibility becomes ambiguous;
- escalation weakens;
- oversight quality degrades;
- AI influence becomes operationally dominant.

---

## Typical Symptoms

- approvals happen almost automatically;
- human reviewers rarely challenge recommendations;
- rollback actions become rare;
- escalation rates continuously decrease;
- operators cannot clearly explain why decisions were approved.

---

## Root Causes

- excessive trust in AI outputs;
- review fatigue;
- workflow optimization pressure;
- lack of observable oversight quality;
- weak escalation incentives;
- missing conflict detection layers.

---

## Governance Risks

- performative oversight;
- responsibility ambiguity;
- hidden automation expansion;
- governance drift;
- accountability erosion.

---

## Example Scenario

An AI-assisted refund system recommends customer compensation actions.

At deployment, human agents carefully review recommendations.

Over time, approval becomes nearly automatic because rejecting recommendations slows operational throughput.

Although humans technically remain in the process, the AI system becomes the practical decision authority.

---

## Recommended Controls

- observable approval quality metrics;
- mandatory escalation triggers;
- conflict detection layers;
- rollback mechanisms;
- periodic governance audits;
- override tracking;
- random decision review sampling.

---

## Related Architecture Layers

- recommendation layer
- conflict detection layer
- escalation layer
- governance observability layer
- execution boundary layer

---

## Related Governance Metrics

- override rate
- escalation rate
- rollback frequency
- review latency
- unresolved responsibility cases
- governance drift indicators
