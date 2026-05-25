# Active Confirmation Phrase Interlock

**Status:** Discussion Draft  
**Type:** Experimental governance UX control  
**Canonical status:** Not canonical. This document proposes a pattern for review, testing, and critique.  
**Related concepts:** Active Evidence Interlock, Human Owner confirmation, Rubber-Stamp Drift Detection, Cognitive Tunnel, AI consensus tunnel, Responsibility Event Stream, Decision Log discipline

## Summary

Active Confirmation Phrase Interlock is a proposed RABA governance UX pattern for sensitive AI-assisted actions.

The pattern prevents a confirmation phrase from becoming immediately executable.

Instead, before the Human Owner can submit the confirmation phrase, the interface requires an active reading sequence:

1. The confirmation phrase is shown in reverse word order.
2. Words are highlighted one by one in reverse order.
3. The confirmation phrase is then shown in normal forward order.
4. Words are highlighted one by one in forward order.
5. Only after both reading passes are completed does the confirmation phrase become active, sendable, or executable.

The goal is to make confirmation a visible act of attention rather than a symbolic button click.

## Core Principle

> A confirmation phrase should not become executable until the Human Owner has actively processed it.

This does not prove perfect understanding.

It does create stronger evidence of active engagement than a passive approval button.

## Why This Exists

In AI-assisted workflows, sensitive actions are often protected by a confirmation step.

However, confirmation can degrade into a rubber stamp when:

- the user clicks approve out of habit;
- the AI output is polished and persuasive;
- the user trusts multi-AI agreement too strongly;
- the confirmation phrase is copied without being read;
- the interface makes approval faster than review;
- the decision feels already made by the system.

This creates a governance risk:

> Human approval remains formally present but practically weak.

Active Confirmation Phrase Interlock introduces a small amount of deliberate friction for cases where attention matters.

## Relationship to RABA

### Active Evidence Interlock

Active Evidence Interlock asks whether the Human Owner engaged with the source material.

Active Confirmation Phrase Interlock asks whether the Human Owner actively processed the confirmation phrase before sending it.

These are related but not identical:

- Active Evidence Interlock protects evidence review.
- Active Confirmation Phrase Interlock protects execution confirmation.

### Human Owner Confirmation

RABA requires Human Owner confirmation before sensitive governance actions.

This pattern strengthens confirmation by making it less likely that the Human Owner confirms accidentally, automatically, or without noticing the action scope.

### Rubber-Stamp Drift Detection

Rubber-stamp drift occurs when human review exists formally but becomes operationally meaningless.

This interlock is one possible control against that drift.

It does not replace sampling, audit, reason capture, or threshold governance.

### Cognitive Tunnel

A cognitive tunnel occurs when AI-prepared material is so complete, polished, or selectively framed that the human review remains formally present but practically absent.

Bidirectional reading of the confirmation phrase creates a small interruption that may help break the tunnel before execution.

### AI Consensus Tunnel

Multi-AI agreement is not approval.

If several AI systems recommend the same action, the Human Owner must still confirm responsibility.

This interlock can help ensure that a confirmation phrase is not treated as a mechanical continuation of AI consensus.

## Suggested Scope

This pattern should be considered for actions such as:

- GitHub commits that affect important project material;
- canonical architecture changes;
- Decision Log entries;
- external claims;
- pilot offers;
- partner-facing materials;
- governance threshold changes;
- actions that cross an approval boundary;
- actions with medium or high operational consequence.

It should be optional or disabled for low-risk, routine, reversible actions.

## Where It Should Not Apply

This pattern should not be used for every small interaction.

It may be too much friction for:

- ordinary chat replies;
- low-risk spelling fixes;
- reversible formatting changes;
- internal notes;
- exploratory drafts;
- actions that do not cross a meaningful boundary.

Overuse would create confirmation fatigue and reduce its governance value.

## Minimal UX Flow

1. AI proposes an action and generates a confirmation phrase.
2. The UI shows the action summary and confirmation phrase.
3. The user starts the confirmation sequence.
4. The phrase is split into words.
5. The UI displays words in reverse order, highlighting one word at a time.
6. The UI displays words in forward order, highlighting one word at a time.
7. The send or execute button remains disabled during the sequence.
8. The button becomes active only after both passes are completed.
9. If the phrase or action scope changes, the sequence resets.
10. The confirmation event is recorded.

## Pseudo-Code

```javascript
function startConfirmationInterlock(confirmationPhrase, actionScope) {
  const words = confirmationPhrase.trim().split(/\s+/);
  const reverseWords = [...words].reverse();

  const event = {
    confirmation_phrase: confirmationPhrase,
    action_scope: actionScope,
    reverse_reading_completed: false,
    forward_reading_completed: false,
    activation_enabled_after_reading: false,
    human_confirmation_sent: false,
    started_at: new Date().toISOString()
  };

  disableSendButton();

  highlightSequence(reverseWords, () => {
    event.reverse_reading_completed = true;

    highlightSequence(words, () => {
      event.forward_reading_completed = true;
      event.activation_enabled_after_reading = true;
      enableSendButton();
    });
  });

  return event;
}

function submitConfirmation(event) {
  if (!event.activation_enabled_after_reading) {
    throw new Error('Confirmation interlock not completed.');
  }

  event.human_confirmation_sent = true;
  event.submitted_at = new Date().toISOString();
  recordConfirmationEvent(event);
}
```

## Draft Event Schema

```json
{
  "event_type": "active_confirmation_phrase_interlock",
  "status": "completed",
  "confirmation_phrase": "Ben, I confirm. Create quick-check.html and update links in index.html.",
  "confirmation_phrase_hash": "sha256:...",
  "action_scope": "github_pages_navigation_fix",
  "target_action": "create_file_and_update_links",
  "target_files": [
    "quick-check.html",
    "index.html"
  ],
  "risk_class": "medium",
  "human_owner_identity": "available_if_authenticated",
  "reverse_reading_completed": true,
  "forward_reading_completed": true,
  "activation_enabled_after_reading": true,
  "human_confirmation_sent": true,
  "phrase_changed_after_reading": false,
  "started_at": "2026-05-25T00:00:00Z",
  "completed_at": "2026-05-25T00:00:08Z",
  "submitted_at": "2026-05-25T00:00:12Z"
}
```

## What This Proves

This pattern may provide evidence that:

- the confirmation phrase was displayed;
- the phrase was processed through a required reading sequence;
- the send or execute action was not available before the sequence completed;
- the Human Owner had a structured opportunity to notice the action scope;
- the confirmation was not a single immediate click.

## What This Does Not Prove

This pattern does not prove that:

- the Human Owner fully understood the action;
- the Human Owner reviewed all relevant evidence;
- the action was correct;
- the decision was compliant;
- the risk was acceptable;
- the user was not distracted;
- the user did not simply wait through the animation.

For this reason, it should not replace source-material review, reason capture, escalation, audit, or independent review.

## UX and Accessibility Risks

Potential risks include:

- user frustration;
- confirmation fatigue;
- accessibility barriers;
- screen reader incompatibility;
- language and word-order issues;
- difficulty on small mobile screens;
- false sense of security;
- users waiting through the sequence without reading.

Any implementation should include:

- keyboard support;
- screen reader support;
- reduced-motion mode;
- adjustable speed;
- clear action summary;
- plain-language confirmation phrase;
- risk-based activation rules.

## Controls Against Governance Theatre

To avoid becoming symbolic theatre, this pattern should be combined with:

- clear action scope;
- visible target files or target actions;
- source-material engagement where relevant;
- reason capture for medium or high risk;
- audit sampling;
- rollback or remediation paths;
- Decision Log discipline;
- Human Owner confirmation.

The interlock should be treated as one signal, not as sufficient proof of responsible approval.

## Recommended RABA Position

This pattern should be treated as:

> Experimental optional interlock for medium/high-impact confirmation actions.

It should not be treated as a universal requirement.

It should be tested in demo environments before any canonical adoption.

## Open Questions

1. Does reverse-word reading improve attention, or does it create unnecessary cognitive load?
2. Would typed confirmation be stronger or simpler?
3. Should the phrase include file names, action type, and risk class?
4. Should the user answer a short check question instead of passively watching highlighted words?
5. What accessibility standard should be required before real use?
6. How should this interact with Active Evidence Interlock?
7. Should this be a standalone pattern or a sub-pattern of Active Evidence Interlock?

## Key Statement

AI may prepare a confirmation phrase.

AI may recommend an action.

AI may explain the reason.

But execution confirmation should require active human attention, explicit responsibility, and an auditable record.
