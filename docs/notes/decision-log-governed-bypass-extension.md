# Decision Log Governed Bypass Extension

**Status:** Working Note  
**Canonical status:** Non-canonical. This note does not replace the current Decision Log schema and does not define accepted RABA architecture.  
**Purpose:** Define what a Decision Log should preserve when a workflow enters Governed Bypass or opens a Human Response Window.  
**Related files:** [`docs/decision-log-schema.md`](../decision-log-schema.md), [`docs/architecture/responsibility-event-topology.md`](../architecture/responsibility-event-topology.md), [`docs/notes/ai-speed-responsibility-acceptance.md`](ai-speed-responsibility-acceptance.md)

---

## 1. Why this extension exists

The current Decision Log records business accountability for governed AI-supported actions.

The new Governed Bypass direction adds a new problem:

```text
The workflow may continue as preparation,
but must not continue as consequence.
```

Therefore, the Decision Log must preserve not only final allow / block / escalate outcomes, but also:

- why bypass was entered;
- what was allowed during bypass;
- what was forbidden during bypass;
- whether a Human Response Window was opened;
- whether human response was received, delayed, expired, or escalated;
- how the bypass exited.

---

## 2. Core principle

Governed bypass is not execution permission.

It is a governed continuation state that preserves useful process momentum while preventing unauthorized consequence creation.

Decision Log principle:

```text
A bypass record must explain why preparation was allowed while consequence remained forbidden.
```

---

## 3. Required bypass decision fields

When a workflow enters governed bypass, a Decision Log entry should preserve at least:

| Field | Purpose |
|---|---|
| `bypass_state` | Current bypass state: entered, active, extended, completed, escalated, blocked, exited. |
| `bypass_reason` | Why bypass was entered: consequence boundary, missing authority, missing evidence, missing responsibility acceptance, unclear policy, etc. |
| `allowed_bypass_actions` | What may safely continue as preparation. |
| `forbidden_bypass_actions` | What must not continue because it would create consequence. |
| `human_response_required` | Whether a human or role must respond before consequence creation. |
| `human_response_window` | Time window for response. |
| `human_response_state` | Pending, received, delayed, expired, or not required. |
| `human_response_owner` | Person or role expected to respond. |
| `delay_reason` | Reason if human response is delayed. |
| `bypass_exit_condition` | What condition allows exit from bypass. |
| `bypass_exit_decision` | Whether the flow exits to admissibility, execution, escalation, revision, or block. |

---

## 4. Example bypass entry

```json
{
  "approval_state": "BYPASS",
  "bypass_state": "entered",
  "bypass_reason": "external_commitment_risk",
  "allowed_bypass_actions": [
    "revise_draft",
    "mark_commitment_language",
    "collect_evidence",
    "prepare_decision_summary"
  ],
  "forbidden_bypass_actions": [
    "send_external_message",
    "create_external_commitment",
    "execute_irreversible_action"
  ],
  "human_response_required": true,
  "human_response_window": "30 minutes",
  "human_response_state": "pending",
  "human_response_owner": "support_team_lead",
  "bypass_exit_condition": "authority_and_responsibility_accepted",
  "decision_reason": "Draft contains possible external commitment language. AI may continue preparation but may not send the message until human authority and responsibility acceptance are recorded."
}
```

---

## 5. Human Response Window

A Human Response Window prevents human oversight from becoming an undefined waiting state.

The window should be:

- long enough for responsible review;
- short enough to preserve AI-supported process speed;
- tied to action class and risk level;
- extended only with a recorded reason.

If the window expires, the system should not treat silence as approval.

Possible outcomes:

```text
human_response_received → continue to admissibility / revise / block
human_response_delayed → record delay reason and extend if justified
human_response_expired → escalate or block
```

---

## 6. Productive waiting

Bypass should use waiting time as productive preparation time.

Allowed preparatory work may include:

- improving a draft;
- marking risky language;
- preparing safer alternatives;
- collecting evidence;
- checking evidence freshness;
- summarizing context for the human reviewer;
- identifying policy references;
- estimating reversibility;
- preparing allow / revise / escalate / block options;
- preparing a Decision Log summary.

Forbidden actions should include:

- sending an external message;
- creating an external commitment;
- changing critical records;
- approving payment;
- triggering irreversible or difficult-to-reverse API actions;
- pretending that human approval was granted;
- using lack of response as implicit authority.

---

## 7. Relationship to Responsibility Events

A bypass Decision Log entry should reference the relevant Responsibility Event chain.

Example event chain:

```text
recommendation_created
→ action_class_detected
→ gateway_decision_bypass
→ bypass_entered
→ bypass_allowed_actions_defined
→ bypass_forbidden_actions_defined
→ human_response_window_opened
→ bypass_preparation_completed
→ human_response_received
→ bypass_exited_to_admissibility
→ decision_log_entry_created
```

The event stream records state transitions.

The Decision Log explains why the bypass decision mattered for business accountability.

---

## 8. Invariants

The following should hold unless explicitly overridden by Human Owner-approved policy:

```text
bypass_entered ≠ authorization_granted
bypass_preparation_completed ≠ action_executed
human_response_missing ≠ authority_granted
productive_waiting ≠ consequential_execution
```

---

## 9. Governance boundary

This note is non-canonical.

It does not replace the current Decision Log schema.

It does not claim that Governed Bypass is fully modeled.

It does not define a production schema.

It does not create legal compliance.

It does not turn bypass into execution authority.

Final architectural approval belongs to the Human Owner.

---

## Key takeaway

Decision Logs should make governed bypass understandable to humans.

They should preserve why a process was allowed to continue as preparation, why consequence remained forbidden, how human response was governed, and how the bypass exited.
