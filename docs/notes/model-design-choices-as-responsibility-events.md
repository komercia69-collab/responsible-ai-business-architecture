---
title: "Model Design Choices as Responsibility Events"
status: "working-note"
canonical_status: "non-canonical"
source_status: "drive-derived external signal synthesis"
authority: "none"
repository_truth: false
requires_human_confirmation_before_canon: true
---

# Model Design Choices as Responsibility Events

## Status

This document is a working note.

It is non-canonical. It is not approval, implementation authorization, validation, adoption, endorsement, partnership, compliance evidence, certification evidence, or public positioning.

Human Owner approval is required before this note may be used for canon, public use, provider-facing use, or implementation claims.

## Core idea

A technical model-design choice becomes a responsibility event when it changes who is flagged, missed, ranked, prioritized, explained to, excluded, escalated, or acted upon.

The choice does not need to be unusual or unexpected. Routine design decisions can have responsibility consequences that are not recorded, reviewed, or visible to the humans who act on the outputs.

## Problem

AI governance discussions often separate model performance from human responsibility.

Technical metrics — accuracy, precision, recall, F1 — describe how a model behaves on data. They do not automatically describe what happens to the people affected by decisions that use the model output.

The gap between model output and human consequence is where governance risk can accumulate silently.

A model-design choice that appears neutral on technical metrics may:

- change which cases are flagged and which are missed;
- shift who receives attention, action, or escalation;
- alter whose situation is explained or unexplained;
- influence which outcomes are reversible or irreversible;
- determine whose data informs the model's assumptions.

If none of these consequences are recorded as responsibility events, the governance record is incomplete.

## Why model choices can become responsibility events

RABA does not require that every model-design decision enter a Decision Log.

But certain choices cross a responsibility threshold when they:

- change the consequence class of the AI-supported action;
- change who bears the risk of being missed or incorrectly flagged;
- change the evidence standard required before action is taken;
- change whether affected parties can challenge or seek explanation;
- change the reversibility of downstream decisions;
- introduce a new trade-off between sensitivity and specificity in a consequential domain.

At that point, the choice is not only a technical parameter. It is a responsibility boundary decision.

## Candidate examples

### Precision vs recall

Optimizing for recall flags more cases, including more false positives.

Optimizing for precision misses more true cases to avoid false flags.

The trade-off determines who is incorrectly acted upon and who is incorrectly missed.

In a consequential context, this is a governance decision, not only a performance decision.

### Threshold choice

A probability threshold controls how many outputs cross into an action-triggering category.

Adjusting the threshold changes who receives escalation, intervention, or priority.

It may also change whether the affected population reflects the underlying data distribution or reflects a narrower subgroup.

### Interpretability vs black-box model

Choosing an interpretable model may reduce predictive power.

Choosing a black-box model may improve aggregate accuracy but reduce the ability of affected parties to understand, challenge, or seek explanation of decisions made about them.

The interpretability trade-off has governance implications that performance benchmarks do not capture.

### Ranking and prioritization

When a model ranks individuals, cases, or items, the choice of ranking criteria determines who receives first attention, highest priority, or greatest resource allocation.

Ranking is not neutral. The criteria embedded in the ranking model carry governance consequences.

### Explanation availability

A design choice that determines whether outputs come with explanations changes whether affected parties can engage with the decision process.

This affects human oversight, contestability, and the evidence available for a Decision Log.

## Candidate Decision Log fields

When a model-design choice crosses a responsibility threshold, the Decision Log entry might include:

```text
Choice made:
What design decision was made (threshold, objective function, model type, ranking criteria).

Responsibility consequence:
What consequence for affected parties follows from this choice.

Trade-off acknowledged:
What was accepted and what was not optimized for.

Consequence class:
What class of consequence this choice affects.

Human Owner confirmation:
Who approved this choice and on what basis.

Evidence standard:
What evidence was used to evaluate the trade-off.

Reversibility:
Whether the choice and its downstream consequences can be revisited.
```

These fields are candidates only. They do not define a final RABA Decision Log schema.

## Related RABA areas

- Decision Log
- Responsibility Event Stream
- Responsibility Management Interface
- AI Execution Gap
- Human-in-the-loop theater
- Runtime Governance
- Evidence Boundary
- Human Accountability

## What this does not mean

This note does not mean:

- every model hyperparameter must be logged;
- technical model evaluation should be replaced by governance review;
- AI output is automatically a consequential decision;
- this concept is approved for implementation;
- RABA is validated or endorsed for compliance use.

It means that certain model-design choices change the distribution of consequence, and when they do, they may require governance treatment beyond performance benchmarking.

## Open questions

1. Which model-design choices consistently cross the responsibility threshold?
2. How should RABA distinguish choices that require Decision Log entries from those that do not?
3. Should consequence class be assessed before or after model selection?
4. How does this relate to existing RABA concepts for evidence boundary and approval state?
5. Should reversibility of model choices become a required governance field?

## Current recommendation

Keep this as a working note.

Do not canonicalize until the Human Owner explicitly approves the framing that model-design choices can constitute responsibility events and decides how this should relate to existing RABA Decision Log and Responsibility Event Stream concepts.
