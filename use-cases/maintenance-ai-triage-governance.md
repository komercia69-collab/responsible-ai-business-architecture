# Use Case: AI-Assisted Maintenance Triage Governance

## Purpose

This use case shows how Responsible AI Business Architecture can apply outside customer support.

It focuses on an operational maintenance workflow where AI helps classify technical issues, recommend next steps and prepare work orders — without losing human responsibility, safety awareness or escalation control.

The example is intentionally generic and can apply to:

- industrial equipment maintenance;
- facility management;
- assistive device repair workflows;
- field service operations;
- production line support;
- internal technical service desks.

---

## Business Context

A maintenance organization receives incoming issue reports from technicians, operators, customers or internal staff.

Reports may include:

- equipment type;
- error description;
- photos;
- sensor readings;
- service history;
- urgency;
- location;
- availability impact;
- safety concerns.

The organization wants to use AI to help triage cases faster and improve consistency.

---

## Current Problems

Common operational pain points:

- incoming reports are incomplete or inconsistent;
- urgent cases may not be recognized early enough;
- technicians spend time sorting routine requests;
- similar issues are classified differently by different people;
- service history is not always checked;
- safety-relevant cases may be mixed with routine maintenance;
- managers lack visibility into escalation load and recurring failures.

---

## AI Opportunity

AI may help by:

- summarizing incoming reports;
- classifying issue type;
- detecting missing information;
- suggesting probable cause categories;
- checking service history;
- recommending urgency level;
- drafting a work order;
- suggesting escalation when safety or operational continuity may be affected.

The AI should support triage and preparation.

It should not autonomously close cases, override technicians, approve risky work, or decide that equipment is safe for use.

---

## AI Role

Recommended AI role:

```text
Assistive triage and preparation layer
```

The AI may:

- read incoming issue reports;
- summarize the case;
- classify issue category;
- identify missing details;
- suggest priority;
- draft a work order;
- recommend escalation;
- prepare questions for the technician or customer.

The AI must not:

- declare equipment safe;
- approve return-to-service;
- close safety-relevant cases;
- override technician judgment;
- order expensive parts without human approval;
- modify official maintenance records without review;
- assign blame or liability;
- make legal, medical or safety certification claims.

---

## Action Boundary Mapping

| AI action | Allowed? | Required control |
|---|---:|---|
| Summarize incoming report | Yes | Log summary source |
| Classify issue category | Yes | Human can correct category |
| Detect missing information | Yes | Ask human to confirm missing fields |
| Suggest urgency level | Yes | Technician or dispatcher review |
| Draft work order | Yes | Human approval before dispatch |
| Recommend escalation | Yes | Escalation queue visible to humans |
| Update maintenance record | Conditional | Human approval required |
| Order spare parts | Conditional | Approval threshold required |
| Close maintenance case | No for AI-only | Human closure required |
| Mark equipment safe | No | Qualified human decision required |
| Override technician judgment | No | Not allowed |
| Make legal or safety certification claim | No | Not allowed |

---

## Risk Levels

| Risk level | Example | Governance response |
|---|---|---|
| Low | Routine maintenance request with complete information | AI may classify and draft work order |
| Medium | Equipment unavailable, missing information, repeated fault | Human dispatcher review required |
| High | Possible safety issue, critical equipment, unclear failure mode | Escalate to qualified technician or manager |
| Prohibited | AI declares equipment safe or closes safety case alone | Block action |

---

## Governance Gateway Controls

Before AI output becomes operational action, the Governance Gateway should check:

```text
1. What action is AI trying to perform?
2. Is the action analysis, recommendation, drafting, triggering or execution?
3. Does the case include safety-relevant terms?
4. Is the equipment critical for operations or human safety?
5. Is the action reversible?
6. Does it change official records?
7. Does it create cost or dispatch obligations?
8. Does it require qualified technician approval?
9. Does it require manager escalation?
10. Is the decision logged with reasons?
```

---

## Example Gateway Decisions

| AI proposed action | Gateway decision | Reason |
|---|---|---|
| Summarize report and classify as routine inspection | `ALLOW` | Low-risk assistive action |
| Draft work order for technician review | `REQUIRE_APPROVAL` | Work order affects operational scheduling |
| Suggest urgent escalation due to brake failure report | `ESCALATE` | Potential safety issue |
| Update official maintenance history automatically | `REQUIRE_APPROVAL` | Official record modification |
| Mark device safe for customer use | `BLOCK` | AI must not certify safety |
| Order 900 EUR replacement part | `ESCALATE` | Cost threshold exceeded |
| Close unresolved repeated fault case | `BLOCK` | Closure requires human verification |

---

## Required Human Approval Points

Human approval is required before:

- dispatching a technician;
- changing official maintenance records;
- ordering parts above threshold;
- closing cases;
- marking equipment as repaired;
- returning safety-relevant equipment to service;
- downgrading urgency for repeated or critical failures.

---

## Escalation Triggers

The workflow should escalate when:

- safety-related keywords appear;
- repeated faults occur;
- equipment is critical to operations;
- customer mobility, health, production or safety may be affected;
- AI confidence is low;
- required information is missing;
- repair cost exceeds threshold;
- the issue has legal, liability or certification implications;
- human review queue becomes overloaded.

---

## Logging Requirements

Each AI-assisted triage event should log:

- case ID;
- input source;
- AI summary;
- suggested category;
- suggested urgency;
- detected missing information;
- proposed action;
- gateway decision;
- reason for decision;
- human approval or override;
- escalation status;
- final accountable human owner.

---

## Failure Patterns to Watch

Relevant failure patterns include:

| Failure pattern | Why it matters here |
|---|---|
| Erosion of Human Judgment | Technicians may over-trust AI triage suggestions |
| Agent Design Without Governance Architecture | AI may be allowed to perform actions without clear mission or boundaries |
| Oversight Latency | Escalations may wait too long in the queue |
| Escalation Saturation | Too many medium-risk cases may overload human reviewers |
| Runtime Governance Drift | AI action permissions may expand over time without review |
| Context Drift | Service history or equipment status may be incomplete or outdated |
| Architectural Opacity | Managers may not see how AI triage affects operational priorities |

---

## Owner-Level Visibility

A business owner or operations manager should be able to see:

- number of AI-triaged cases;
- percentage of cases requiring approval;
- escalation count;
- repeated fault categories;
- blocked AI actions;
- human override rate;
- average approval delay;
- unresolved safety-relevant cases;
- technician feedback on AI suggestions;
- cases where AI confidence was low.

---

## Pilot Scope

A safe first pilot should be limited to:

```text
AI-assisted triage and work order drafting for non-critical maintenance cases.
```

Recommended constraints:

- no autonomous case closure;
- no autonomous safety decisions;
- no autonomous part ordering above threshold;
- all official record changes require review;
- safety-related cases are escalated automatically;
- human owner remains accountable.

---

## Success Metrics

Useful pilot metrics:

- reduced triage time;
- fewer incomplete work orders;
- improved classification consistency;
- faster identification of high-risk cases;
- lower repeated manual sorting effort;
- clear audit trail for AI-assisted recommendations;
- technician acceptance of AI-prepared summaries;
- no increase in unsafe downgrading or missed escalations.

---

## Red Flags

Stop or redesign the pilot if:

- AI suggestions are accepted without review;
- safety-relevant cases are downgraded incorrectly;
- technicians stop checking source information;
- managers cannot see escalation load;
- AI changes official records without approval;
- repeated faults are treated as isolated events;
- blocked actions are repeatedly attempted;
- approval queues become overloaded;
- no one owns final accountability.

---

## Minimal Governance Architecture

```text
Incoming maintenance report
        ↓
AI triage assistant
        ↓
Action Boundary Mapping
        ↓
Governance Gateway
        ↓
ALLOW / BLOCK / REQUIRE_APPROVAL / ESCALATE
        ↓
Human dispatcher / technician / manager
        ↓
Work order or escalation decision
        ↓
Decision log and feedback loop
```

---

## Accountability Model

AI may assist with triage.

AI may recommend next steps.

AI may draft work orders.

But the accountable decision owner remains human:

```text
Dispatcher / technician / operations manager / qualified responsible person
```

The final responsibility for safety, repair quality, record correctness and return-to-service decisions must remain assigned to qualified human roles.

---

## Key Takeaway

Maintenance AI should not be designed as an autonomous technician.

It should be designed as a bounded triage and preparation layer operating under human responsibility, governance gateway controls, escalation rules and decision logging.

> AI may help prioritize maintenance.
>
> AI must not silently become responsible for safety.
