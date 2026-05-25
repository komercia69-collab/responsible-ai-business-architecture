# Active Confirmation Interlock

**Status:** Discussion Draft  
**Version:** 0.2  
**Type:** Experimental governance UX control  
**Owner:** Oleksandr Shuliak — Human Owner  
**Canonical status:** Not canonical. This document proposes a pattern for review, testing, and critique.  
**Governance note:** Multi-AI agreement is not approval. Final architectural approval belongs to the Human Owner.  
**Related concepts:** Active Evidence Interlock, Human Owner confirmation, Rubber-Stamp Drift Detection, Cognitive Tunnel, AI consensus tunnel, Responsibility Event Stream, Decision Log discipline, Governance Gateway

## Summary

Active Confirmation Interlock is a proposed RABA governance UX pattern for sensitive AI-assisted actions.

The pattern prevents a confirmation phrase from becoming immediately executable.

Instead, before the Human Owner can submit the confirmation phrase, the interface requires an active confirmation sequence:

1. The confirmation phrase is displayed clearly, including action scope, target files or recipients, and risk class.
2. The phrase is shown in reverse word order.
3. Words are highlighted one by one in reverse order.
4. The phrase is then shown in normal forward order.
5. Words are highlighted one by one in forward order.
6. The system presents a simple active engagement check derived from the action scope.
7. Only after the reading sequence is completed and the active check is passed does the phrase become active, sendable, or executable.

The goal is to make confirmation a visible act of attention rather than a symbolic button click.

## Core Principle

> Confirmation is not valid if it cannot be shown to reflect active human engagement with the action scope.

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
- workflow momentum makes the decision feel already made by the system;
- repeated confirmations create habituation.

This creates a governance risk:

> Human approval remains formally present but practically weak.

Active Confirmation Interlock introduces deliberate, risk-based friction at the confirmation moment.

## Relationship to RABA

### Active Evidence Interlock

Active Evidence Interlock asks whether the Human Owner engaged with source material.

Active Confirmation Interlock asks whether the Human Owner actively processed the action scope before confirming execution.

These are related but not identical:

- Active Evidence Interlock protects evidence review.
- Active Confirmation Interlock protects execution confirmation.

A strong implementation may use both: evidence review before authorization and active confirmation before execution.

### Human Owner Confirmation

RABA requires Human Owner confirmation before sensitive governance actions.

This pattern operationalizes what confirmation means at runtime by making it less likely that the Human Owner confirms accidentally, automatically, or without noticing the action scope.

### Rubber-Stamp Drift Detection

Rubber-stamp drift occurs when human review exists formally but becomes operationally meaningless.

This interlock is a preventive control targeting the confirmation moment.

It does not replace sampling, audit, reason capture, source-material review, escalation, or threshold governance.

### Cognitive Tunnel

A cognitive tunnel occurs when AI-prepared material is so complete, polished, or selectively framed that human review remains formally present but practically absent.

Bidirectional reading plus an active engagement check creates a small interruption that may help break tunnel momentum before execution.

### AI Consensus Tunnel

Multi-AI agreement is not approval.

If several AI systems recommend the same action, the Human Owner must still confirm responsibility.

A `multi_ai_agreement` or `multi_ai_consensus` field should be treated as a risk/context signal, not as a validation signal.

## Suggested Scope

This pattern should be considered for actions classified as `risk_class: high`, including:

- GitHub commits to canonical directories such as `concepts/`, `governance/`, `architecture/`, or accepted Decision Log areas;
- canonical architecture decisions;
- Decision Log entries marked as approved;
- external publications, whitepaper claims, or public-facing documents;
- pilot offers and partner-facing communications;
- governance threshold changes;
- actions that cross a meaningful approval boundary;
- actions drafted by AI where the Human Owner is confirming content they did not originally initiate.

For `risk_class: medium`, the pattern may be optional, configurable, or replaced by a lighter confirmation mechanism.

It should be disabled for low-risk, routine, reversible actions.

## Where It Should Not Apply

This pattern should not be used for every small interaction.

It may be too much friction for:

- ordinary chat replies;
- draft iterations during active working sessions;
- low-risk spelling fixes;
- reversible formatting changes;
- internal notes;
- scratch files;
- exploratory drafts;
- actions that do not cross a meaningful boundary;
- actions the human clearly initiated and immediately executed.

Overuse would create confirmation fatigue and reduce governance value.

## Mechanism

When a high-risk action is ready for Human Owner confirmation, the system initiates the following sequence.

### 1. Phrase Display

The AI-generated confirmation phrase is displayed clearly.

The phrase should include:

- action scope;
- target action;
- target files, recipients, or affected objects;
- risk class;
- whether the action changes canonical, draft, external, or operational material.

### 2. Reverse Reading Sequence

The words of the phrase are highlighted one by one in reverse order, at a pace consistent with reading time.

### 3. Forward Reading Sequence

The words are then highlighted one by one in normal forward order.

### 4. Active Engagement Check

The system presents a simple question derived from the phrase or action scope.

Examples:

- How many files will be modified?
- What is the target action?
- Is this a draft, external, or canonical change?
- Which file will be updated?
- Is this action reversible?

The Human Owner must answer correctly before proceeding.

Without this active check, the reading sequence mostly proves exposure, not attention.

### 5. Send Activation

The send, confirm, commit, or execute button activates only after:

- reverse reading is completed;
- forward reading is completed;
- active engagement check is passed;
- action scope has not changed after the sequence.

### 6. Confirmation Event Record

The system generates a structured event record of the interlock execution, including:

- sequence completion;
- active check result;
- timestamp;
- action scope;
- risk class;
- target files or target objects;
- Human Owner identity if available.

## Minimal UX Flow

1. AI proposes an action and generates a confirmation phrase.
2. The UI shows the action summary and confirmation phrase.
3. The user starts the confirmation sequence.
4. The phrase is split into words.
5. The UI displays words in reverse order, highlighting one word at a time.
6. The UI displays words in forward order, highlighting one word at a time.
7. The system asks an active engagement question derived from the action scope.
8. The send or execute button remains disabled until the active check is passed.
9. If the phrase or action scope changes, the sequence resets.
10. The confirmation event is recorded.

## Pseudo-Code

```javascript
function startConfirmationInterlock(confirmationPhrase, actionScope, activeCheck) {
  const words = confirmationPhrase.trim().split(/\s+/);
  const reverseWords = [...words].reverse();

  const event = {
    event_type: 'human_confirmation_interlock',
    schema_version: '0.2',
    confirmation_phrase: confirmationPhrase,
    action_scope: actionScope,
    reverse_reading_completed: false,
    forward_reading_completed: false,
    active_check_presented: false,
    active_check_passed: false,
    active_check_attempts: 0,
    send_enabled_after_sequence: false,
    human_confirmation_sent: false,
    started_at: new Date().toISOString()
  };

  disableSendButton();

  highlightSequence(reverseWords, () => {
    event.reverse_reading_completed = true;

    highlightSequence(words, () => {
      event.forward_reading_completed = true;
      event.active_check_presented = true;
      presentActiveCheck(activeCheck, (isCorrect) => {
        event.active_check_attempts += 1;

        if (isCorrect && actionScopeUnchanged(actionScope)) {
          event.active_check_passed = true;
          event.send_enabled_after_sequence = true;
          enableSendButton();
        }
      });
    });
  });

  return event;
}

function submitConfirmation(event) {
  if (!event.send_enabled_after_sequence || !event.active_check_passed) {
    throw new Error('Confirmation interlock not completed.');
  }

  event.human_confirmation_sent = true;
  event.submitted_at = new Date().toISOString();
  recordConfirmationEvent(event);
}
```

## Event Schema v0.2

```json
{
  "event_type": "human_confirmation_interlock",
  "schema_version": "0.2",
  "event_id": "<id>",
  "timestamp_start_utc": "<ISO 8601>",
  "timestamp_completed_utc": "<ISO 8601>",
  "timestamp_submitted_utc": "<ISO 8601>",
  "human_owner_identity": "<identity_if_available>",
  "risk_class": "high | medium | low",
  "action_scope": "<scope>",
  "target_action": "<action>",
  "target_files": ["<file>"],
  "target_objects": ["<object_or_recipient_if_applicable>"],
  "confirmation_phrase": "<phrase>",
  "confirmation_phrase_hash": "sha256:<hash>",
  "interlock_sequence": {
    "reverse_reading_completed": true,
    "forward_reading_completed": true,
    "active_check_presented": true,
    "active_check_type": "action_scope_question",
    "active_check_passed": true,
    "active_check_attempts": 1,
    "sequence_duration_ms": 0,
    "tab_remained_active": true,
    "send_enabled_after_sequence": true
  },
  "human_confirmation_sent": true,
  "phrase_changed_after_reading": false,
  "action_scope_changed_after_reading": false,
  "multi_ai_agreement_present": false,
  "multi_ai_consensus_risk_flag": false,
  "canonical_change_claimed": false,
  "interlock_version": "0.2",
  "governance_note": "This record is evidence of interlock execution, not proof of decision quality. Final authority: Human Owner."
}
```

## Evidence Record: What It Proves and Does Not Prove

| Evidence field | What it proves | What it does not prove |
|---|---|---|
| `reverse_reading_completed` | Reverse sequence ran to completion | Human genuinely read every word in reverse |
| `forward_reading_completed` | Forward sequence ran to completion | Human genuinely read every word forward |
| `active_check_presented` | A content-based check was shown | The check was sufficient for the full decision |
| `active_check_passed` | Human answered the check correctly | Human will not regret or misunderstand the decision |
| `active_check_attempts` | Number of attempts was recorded | Attempts alone do not measure attention quality |
| `sequence_duration_ms` | Sequence ran for a measurable time | Human was attentive for the full duration |
| `tab_remained_active` | Browser tab stayed active if measurable | Human was looking at the content |
| `human_confirmation_sent` | Send or confirm action was executed | The action was evaluated against all relevant context |
| `multi_ai_agreement_present` | Multiple AI systems agreed or converged | The decision is more approved or safer |
| `multi_ai_consensus_risk_flag` | AI consensus tunnel risk was recognized | The risk was fully mitigated |

This table must be preserved in audit or governance review.

The event record is evidence of interlock execution, not a guarantee of the quality of the human decision.

## What This Proves

This pattern may provide evidence that:

- the confirmation phrase was displayed;
- the phrase was processed through a required reading sequence;
- an active check was presented;
- the active check was answered correctly;
- the send or execute action was not available before sequence completion and check completion;
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
- the user did not simply wait through the sequence;
- the confirmation event is sufficient for canonical adoption.

For this reason, it should not replace source-material review, reason capture, escalation, audit, independent review, or Decision Log discipline.

## UX and Accessibility Risks

Potential risks include:

- user frustration;
- confirmation fatigue;
- accessibility barriers;
- screen reader incompatibility;
- language and word-order issues;
- difficulty on small mobile screens;
- cognitive overload;
- false sense of security;
- users waiting through the sequence without reading;
- users learning the ritual without performing the evaluation.

Any implementation should include:

- keyboard support;
- screen reader support;
- reduced-motion mode;
- adjustable speed;
- accessible alternative to reverse word highlighting;
- clear action summary;
- plain-language confirmation phrase;
- risk-based activation rules;
- variable active check questions to reduce habituation.

## Controls Against Governance Theatre

To avoid becoming symbolic theatre, this pattern should be combined with:

- clear action scope;
- visible target files, recipients, or target actions;
- source-material engagement where relevant;
- active engagement check;
- reason capture for medium or high risk;
- audit sampling;
- rollback or remediation paths;
- Decision Log discipline;
- Human Owner confirmation;
- explicit warning when multi-AI agreement is present.

The interlock should be treated as one signal, not as sufficient proof of responsible approval.

## Recommended RABA Position

This pattern should be treated as:

> Experimental optional interlock for medium/high-impact confirmation actions, with mandatory active engagement check for high-risk actions.

It should not be treated as a universal requirement.

It should be tested in demo environments before any canonical adoption.

## Open Questions

1. Is the bidirectional reading sequence the right mechanism, or is a well-structured action summary with active check sufficient without the reading sequence?
2. What question types for the active check are practical, varied, and resistant to habituation?
3. How should the interlock handle phrase length variation — short phrases vs. multi-file action descriptions?
4. What is the accessibility-compliant alternative to visual word highlighting for screen reader users?
5. Should failed active check attempts be surfaced to the Human Owner as a governance signal separate from the event log?
6. Would typed confirmation be stronger or simpler?
7. Should the phrase include file names, action type, and risk class?
8. How should this interact with Active Evidence Interlock?
9. Should this be a standalone pattern or a sub-pattern of Active Evidence Interlock?
10. Should multi-AI agreement automatically raise an AI consensus tunnel warning?

## Status and Next Steps

- [ ] Human Owner review and decision on direction
- [ ] Gemini enterprise architecture / UX risk / machine-readability stress test
- [ ] K implementation feasibility review
- [ ] Prototype minimal frontend component with active check
- [ ] Accessibility review
- [ ] Integration with Decision Log schema
- [ ] Decide whether this remains standalone or becomes a sub-pattern of Active Evidence Interlock
- [ ] Canonical adoption requires explicit Human Owner approval

## Key Statement

AI may prepare a confirmation phrase.

AI may recommend an action.

AI may explain the reason.

But execution confirmation should require active human attention, explicit responsibility, and an auditable record.

**This document is a discussion draft. It has not been approved for canonical adoption.**  
**Multi-AI agreement is not approval. Human Owner confirmation is required.**
