# Active Confirmation Interlock

**Status:** Discussion Draft  
**Version:** 0.3  
**Type:** Experimental governance UX control  
**Owner:** Oleksandr Shuliak — Human Owner  
**Canonical status:** Not canonical. This document proposes a pattern for review, testing, and critique.  
**Governance note:** Multi-AI agreement is not approval. Final architectural approval belongs to the Human Owner.  
**Related concepts:** Active Evidence Interlock, Human Owner confirmation, Rubber-Stamp Drift Detection, Cognitive Tunnel, AI consensus tunnel, Responsibility Event Stream, Decision Log discipline, Governance Gateway

## Summary

Active Confirmation Interlock is a proposed RABA governance UX pattern for sensitive AI-assisted actions.

The pattern prevents a confirmation phrase from becoming immediately executable.

The core control is not animation.

The core control is active confirmation with evidence.

Bidirectional Confirmation Reading — showing the phrase in reverse order and then forward order — is treated in this draft as a niche sub-pattern for ultra-high-risk actions, not as the default mechanism.

Before the Human Owner can submit a confirmation phrase, the interface may require an active confirmation sequence:

1. The confirmation phrase is displayed clearly, including action scope, target files or recipients, and risk class.
2. The system presents an active engagement check derived from the action scope.
3. For high-risk actions, the Human Owner may be required to type a short confirmation phrase, answer a contextual check question, or both.
4. For ultra-high-risk actions, the system may additionally use Bidirectional Confirmation Reading.
5. Only after the required active confirmation controls are completed does the phrase become active, sendable, or executable.

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

## Gemini / Enterprise Stress-Test Findings

A Gemini / enterprise architecture stress-test challenged the original bidirectional reading idea.

The key findings were:

- Bidirectional reading may disrupt cognitive tunnel and habitual rubber-stamping.
- It provides a structured event log of time, sequence, and UI state.
- It does not prove comprehension.
- Users may simply wait through the animation and click once the button activates.
- Reverse word-by-word animation creates serious accessibility risks for screen readers and users with cognitive or language-related constraints.
- It may create UX frustration or user rebellion if applied to routine or medium-risk work.
- Typed confirmation, contextual quiz/check questions, or source-material acknowledgment may provide stronger evidence of active engagement.

RABA therefore treats Bidirectional Confirmation Reading as a limited sub-pattern, not the primary architecture.

The stronger pattern is:

> action summary + active check + typed or explicit confirmation + event record.

Bidirectional reading may be considered only for ultra-high-risk actions and only with a non-visual accessibility fallback.

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

A well-designed action summary and active check may help break tunnel momentum before execution.

Bidirectional reading may add additional disruption, but it must not be mistaken for comprehension proof.

### AI Consensus Tunnel

Multi-AI agreement is not approval.

If several AI systems recommend the same action, the Human Owner must still confirm responsibility.

A `multi_ai_agreement` or `multi_ai_consensus` field should be treated as a risk/context signal, not as a validation signal.

## Risk-Based Application

### Low Risk

Do not use Active Confirmation Interlock.

Use ordinary interaction patterns.

Examples:

- ordinary chat replies;
- spelling fixes;
- reversible formatting changes;
- exploratory drafts;
- low-impact internal notes.

### Medium Risk

Do not use Bidirectional Confirmation Reading.

Prefer lighter controls such as:

- checkbox plus reason capture;
- short action summary;
- explicit confirmation button;
- optional typed confirmation for specific cases.

### High Risk

Use Active Confirmation Interlock when the action crosses a meaningful boundary.

Recommended controls:

- clear action summary;
- target files, recipients, or affected objects;
- risk class display;
- contextual active check;
- typed confirmation phrase or explicit confirmation;
- structured event record.

### Ultra-High Risk

Bidirectional Confirmation Reading may be considered only here, and only as an additional control.

Examples may include:

- canonical architecture paradigm changes;
- critical governance threshold changes;
- partner-facing commitments with major consequences;
- irreversible operational actions;
- high-impact external claims;
- actions where AI consensus tunnel risk is present.

Requirements:

- active check required;
- non-visual accessibility fallback required;
- typed confirmation alternative required;
- tab/activity state may be recorded where appropriate;
- event log must state that the interlock proves sequence completion, not comprehension.

## Suggested Scope

This pattern should be considered for actions classified as `risk_class: high` or `risk_class: critical`, including:

- GitHub commits to canonical directories such as `concepts/`, `governance/`, `architecture/`, or accepted Decision Log areas;
- canonical architecture decisions;
- Decision Log entries marked as approved;
- external publications, whitepaper claims, or public-facing documents;
- pilot offers and partner-facing communications;
- governance threshold changes;
- actions that cross a meaningful approval boundary;
- actions drafted by AI where the Human Owner is confirming content they did not originally initiate.

For `risk_class: medium`, the pattern should normally be replaced by a lighter confirmation mechanism.

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
- standard GitHub commits;
- routine pull request approvals;
- actions that do not cross a meaningful boundary;
- actions the human clearly initiated and immediately executed.

Overuse would create confirmation fatigue and reduce governance value.

## Mechanism

When a high-risk action is ready for Human Owner confirmation, the system initiates a risk-calibrated sequence.

### 1. Action Summary

The action summary is displayed clearly.

It should include:

- action scope;
- target action;
- target files, recipients, or affected objects;
- risk class;
- reversibility profile if available;
- whether the action changes canonical, draft, external, or operational material.

### 2. Confirmation Phrase

The AI-generated confirmation phrase is displayed clearly.

The phrase should be short, specific, and include the action boundary.

### 3. Active Engagement Check

The system presents a simple question derived from the phrase or action scope.

Examples:

- How many files will be modified?
- What is the target action?
- Is this a draft, external, or canonical change?
- Which file will be updated?
- Is this action reversible?

The Human Owner must answer correctly before proceeding.

Without this active check, the reading sequence mostly proves exposure, not attention.

### 4. Typed Confirmation or Explicit Confirmation

For many high-risk workflows, typed confirmation may be stronger and more accessible than passive animation.

Examples:

- type the target action;
- type the number of affected files;
- type a short phrase such as `CONFIRM CANONICAL CHANGE`;
- select the correct action boundary from a short list.

### 5. Optional Bidirectional Confirmation Reading

For ultra-high-risk actions only, the system may additionally display the confirmation phrase in reverse and forward word order:

1. Words are highlighted one by one in reverse order.
2. Words are highlighted one by one in forward order.
3. The action button remains disabled during the sequence.
4. If the tab loses focus, the sequence pauses or resets.
5. A fallback must be available for accessibility.

This mechanism proves exposure and delay, not comprehension.

### 6. Send Activation

The send, confirm, commit, or execute button activates only after the required controls for that risk class are completed.

For high-risk actions:

- action summary displayed;
- active check passed;
- typed or explicit confirmation completed;
- action scope unchanged.

For ultra-high-risk actions with bidirectional reading:

- reverse reading completed;
- forward reading completed;
- active check passed;
- accessibility fallback available;
- action scope unchanged.

### 7. Confirmation Event Record

The system generates a structured event record of the interlock execution, including:

- control type;
- active check result;
- typed confirmation result if used;
- bidirectional sequence result if used;
- timestamp;
- action scope;
- risk class;
- target files or target objects;
- Human Owner identity if available.

## Minimal UX Flow

1. AI proposes an action and generates a confirmation phrase.
2. The UI shows the action summary and confirmation phrase.
3. The system selects an interlock mode based on risk class.
4. The user completes the required active engagement check.
5. The user completes typed or explicit confirmation if required.
6. For ultra-high-risk actions, optional bidirectional reading may run before activation.
7. The send or execute button remains disabled until all required controls are completed.
8. If the phrase or action scope changes, the sequence resets.
9. The confirmation event is recorded.

## Pseudo-Code

```javascript
function startConfirmationInterlock({ confirmationPhrase, actionScope, riskClass, activeCheck }) {
  const event = {
    event_type: 'human_confirmation_interlock',
    schema_version: '0.3',
    confirmation_phrase: confirmationPhrase,
    action_scope: actionScope,
    risk_class: riskClass,
    interlock_mode: selectInterlockMode(riskClass),
    active_check_presented: false,
    active_check_passed: false,
    typed_confirmation_required: false,
    typed_confirmation_passed: false,
    bidirectional_reading_required: false,
    reverse_reading_completed: false,
    forward_reading_completed: false,
    send_enabled_after_sequence: false,
    human_confirmation_sent: false,
    started_at: new Date().toISOString()
  };

  disableSendButton();
  showActionSummary(actionScope);

  event.active_check_presented = true;
  presentActiveCheck(activeCheck, (isCorrect) => {
    event.active_check_passed = isCorrect;
    evaluateConfirmationReadiness(event, actionScope);
  });

  if (event.interlock_mode === 'typed_confirmation' || event.interlock_mode === 'ultra_high_risk') {
    event.typed_confirmation_required = true;
    requireTypedConfirmation(confirmationPhrase, (passed) => {
      event.typed_confirmation_passed = passed;
      evaluateConfirmationReadiness(event, actionScope);
    });
  }

  if (event.interlock_mode === 'ultra_high_risk') {
    event.bidirectional_reading_required = true;
    runBidirectionalReading(confirmationPhrase, event, () => {
      evaluateConfirmationReadiness(event, actionScope);
    });
  }

  return event;
}

function evaluateConfirmationReadiness(event, actionScope) {
  const activeCheckOk = event.active_check_passed;
  const typedOk = !event.typed_confirmation_required || event.typed_confirmation_passed;
  const bidirectionalOk = !event.bidirectional_reading_required ||
    (event.reverse_reading_completed && event.forward_reading_completed);
  const unchanged = actionScopeUnchanged(actionScope);

  if (activeCheckOk && typedOk && bidirectionalOk && unchanged) {
    event.send_enabled_after_sequence = true;
    enableSendButton();
  }
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

## Event Schema v0.3

```json
{
  "event_type": "human_confirmation_interlock",
  "schema_version": "0.3",
  "event_id": "<id>",
  "timestamp_start_utc": "<ISO 8601>",
  "timestamp_completed_utc": "<ISO 8601>",
  "timestamp_submitted_utc": "<ISO 8601>",
  "human_owner_identity": "<identity_if_available>",
  "risk_class": "critical | high | medium | low",
  "interlock_mode": "none | checkbox_reason | active_check | typed_confirmation | bidirectional_reading",
  "action_scope": "<scope>",
  "target_action": "<action>",
  "target_files": ["<file>"],
  "target_objects": ["<object_or_recipient_if_applicable>"],
  "reversibility_profile": "reversible | partially_reversible | difficult_to_reverse | irreversible | unknown",
  "confirmation_phrase": "<phrase>",
  "confirmation_phrase_hash": "sha256:<hash>",
  "interlock_sequence": {
    "action_summary_displayed": true,
    "active_check_presented": true,
    "active_check_type": "action_scope_question",
    "active_check_passed": true,
    "active_check_attempts": 1,
    "typed_confirmation_required": true,
    "typed_confirmation_passed": true,
    "bidirectional_reading_required": false,
    "reverse_reading_completed": false,
    "forward_reading_completed": false,
    "sequence_duration_ms": 0,
    "tab_remained_active": true,
    "accessibility_fallback_available": true,
    "send_enabled_after_sequence": true
  },
  "human_confirmation_sent": true,
  "phrase_changed_after_reading": false,
  "action_scope_changed_after_reading": false,
  "multi_ai_agreement_present": false,
  "multi_ai_consensus_risk_flag": false,
  "canonical_change_claimed": false,
  "interlock_version": "0.3",
  "governance_note": "This record is evidence of interlock execution, not proof of comprehension or decision quality. Final authority: Human Owner."
}
```

## Evidence Record: What It Proves and Does Not Prove

| Evidence field | What it proves | What it does not prove |
|---|---|---|
| `action_summary_displayed` | The action summary was shown | Human read or understood the summary |
| `active_check_presented` | A content-based check was shown | The check was sufficient for the full decision |
| `active_check_passed` | Human answered the check correctly | Human will not regret or misunderstand the decision |
| `typed_confirmation_passed` | Human typed or selected required confirmation | Human fully understood all consequences |
| `reverse_reading_completed` | Reverse sequence ran to completion | Human genuinely read every word in reverse |
| `forward_reading_completed` | Forward sequence ran to completion | Human genuinely read every word forward |
| `sequence_duration_ms` | Sequence ran for a measurable time | Human was attentive for the full duration |
| `tab_remained_active` | Browser tab stayed active if measurable | Human was looking at the content |
| `human_confirmation_sent` | Send or confirm action was executed | The action was evaluated against all relevant context |
| `multi_ai_agreement_present` | Multiple AI systems agreed or converged | The decision is more approved or safer |
| `multi_ai_consensus_risk_flag` | AI consensus tunnel risk was recognized | The risk was fully mitigated |

This table must be preserved in audit or governance review.

The event record is evidence of interlock execution, not a guarantee of comprehension or the quality of the human decision.

## What This Proves

This pattern may provide evidence that:

- the action summary was displayed;
- the confirmation phrase was displayed;
- an active check was presented;
- the active check was answered correctly;
- typed confirmation was completed if required;
- bidirectional reading completed if required;
- the send or execute action was not available before required controls completed;
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
- the user did not simply wait through an animation;
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
- users learning the ritual without performing the evaluation;
- teams attempting to bypass the control if it is applied too broadly.

Any implementation should include:

- keyboard support;
- screen reader support;
- reduced-motion mode;
- adjustable speed;
- accessible alternative to reverse word highlighting;
- typed confirmation fallback;
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
- typed confirmation where appropriate;
- reason capture for medium or high risk;
- audit sampling;
- rollback or remediation paths;
- Decision Log discipline;
- Human Owner confirmation;
- explicit warning when multi-AI agreement is present.

The interlock should be treated as one signal, not as sufficient proof of responsible approval.

## Recommended RABA Position

This pattern should be treated as:

> Experimental UX control for high-impact confirmation actions. Bidirectional Confirmation Reading is a niche sub-pattern for ultra-high-risk actions only. Typed confirmation or active engagement checks may be preferable for many high-risk workflows.

It should not be treated as a universal requirement.

It should not be used for low-risk or routine work.

It should be tested in demo environments before any canonical adoption.

## Open Questions

1. Is Bidirectional Confirmation Reading useful enough to justify its accessibility and UX costs?
2. Is typed confirmation the stronger default for high-risk actions?
3. What active check question types are practical, varied, and resistant to habituation?
4. How should the interlock handle phrase length variation — short phrases vs. multi-file action descriptions?
5. What is the accessibility-compliant alternative to visual word highlighting for screen reader users?
6. Should failed active check attempts be surfaced to the Human Owner as a governance signal separate from the event log?
7. Should the phrase include file names, action type, and risk class?
8. How should this interact with Active Evidence Interlock?
9. Should this be a standalone pattern or a sub-pattern of Active Evidence Interlock?
10. Should multi-AI agreement automatically raise an AI consensus tunnel warning?
11. Should Bidirectional Confirmation Reading be restricted to `risk_class: critical` only?

## Status and Next Steps

- [ ] Human Owner review and decision on direction
- [x] Claude concept review incorporated
- [x] Gemini enterprise architecture / UX risk / machine-readability stress test incorporated
- [ ] K implementation feasibility review
- [ ] Prototype minimal frontend component with active check and typed confirmation
- [ ] Prototype optional bidirectional reading mode only for ultra-high-risk actions
- [ ] Accessibility review
- [ ] Integration with Decision Log schema
- [ ] Decide whether this remains standalone or becomes a sub-pattern of Active Evidence Interlock
- [ ] Canonical adoption requires explicit Human Owner approval

## Key Statement

AI may prepare a confirmation phrase.

AI may recommend an action.

AI may explain the reason.

But execution confirmation should require active human attention, explicit responsibility, and an auditable record.

Bidirectional reading may interrupt cognitive tunnel.

It does not prove comprehension.

**This document is a discussion draft. It has not been approved for canonical adoption.**  
**Multi-AI agreement is not approval. Human Owner confirmation is required.**
