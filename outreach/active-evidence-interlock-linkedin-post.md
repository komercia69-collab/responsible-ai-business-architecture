# Active Evidence Interlock LinkedIn Post

**Status:** Draft — Outreach Material  
**Purpose:** Public LinkedIn post to invite external feedback on Active Evidence Interlock  
**Audience:** AI governance practitioners, workflow owners, product builders, AI consultants  
**Canonical status:** Non-canonical outreach draft. This document does not define accepted RABA architecture.

## Context

This post introduces the RABA idea of **Active Evidence Interlock** to an external audience.

The goal is to invite feedback on whether approval in AI-assisted workflows should require evidence that a human engaged with source material, not only evidence that an approval button was clicked.

Related GitHub issue:

- Issue #71 — Feedback wanted: Is Active Evidence Interlock useful for AI-assisted workflows?

## Short LinkedIn Post

```text
In many AI-assisted workflows, the weakest point is not generation.

It is approval.

AI can prepare a polished decision package.
AI can summarize evidence.
AI can recommend the next action.

But if the human approval step becomes only a button click, responsibility becomes fragile.

This is why I am exploring the idea of Active Evidence Interlock in RABA — Responsible AI Business Architecture.

The basic principle:

Approval should require evidence that a human engaged with the original source material, not only evidence that someone clicked Approve.

A valid approval event may need to record:

- named human identity;
- source material viewed;
- active interlock completed;
- explicit positive authorization;
- reason capture for higher-risk cases;
- conflict acknowledgment;
- timestamped authorization record.

The goal is not to slow everything down.

The goal is to prevent rubber-stamp approval when AI preparation becomes too polished, too complete, or too persuasive.

Governed speed is useful only when responsibility remains real.

Question:
Where should the line be between efficient AI-assisted preparation and meaningful human approval?
```

## Compact Version

```text
AI-assisted workflows often fail at the approval layer.

AI can prepare a polished decision package.
But if human approval becomes only a button click, responsibility becomes fragile.

That is why I am exploring Active Evidence Interlock in RABA.

The idea:
Approval should require evidence that a human engaged with the original source material — not only evidence that someone clicked Approve.

This could include:
- named human identity;
- source material viewed;
- explicit authorization;
- reason capture for higher-risk cases;
- timestamped authorization record.

Governed speed is useful only when responsibility remains real.

Where should the line be between efficient AI preparation and meaningful human approval?
```

## RABA Framing

Active Evidence Interlock is intended to reduce the risk of passive or rubber-stamp approval in AI-assisted workflows.

It is especially relevant when:

- AI prepares a decision package;
- the output is polished or persuasive;
- the workflow has meaningful consequences;
- the human reviewer may rely on the AI summary without checking source material;
- auditability requires more than a simple approval timestamp.

## Governance Boundary

Active Evidence Interlock does not mean that every workflow needs heavy review.

It means that workflows with meaningful action boundaries should be able to distinguish between:

- a human who merely clicked Approve;
- a human who viewed source material;
- a human who actively acknowledged conflicts, warnings, or unresolved uncertainty;
- a human who provided explicit authorization for execution or merge.

## Suggested Comment Under the Post

```text
I opened this as a feedback question in the RABA repository as well.

The core question is whether approval in AI-assisted workflows should require evidence of source-material engagement, not just an approval click.

Feedback from governance, product, audit, and workflow automation perspectives would be very useful.
```

## Key Message

AI may accelerate preparation.

It must not turn human approval into a symbolic ritual.

Responsibility requires evidence of meaningful human engagement.
