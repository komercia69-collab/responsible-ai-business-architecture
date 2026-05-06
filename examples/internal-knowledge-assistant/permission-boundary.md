# AI Permission Boundary: Internal Knowledge Assistant

This document defines what the AI assistant may and may not do during the pilot.

## 1. Allowed AI actions

The AI assistant may:

- search approved internal knowledge sources;
- summarize internal documents;
- provide draft answers based on approved materials;
- structure information into lists, tables, or short explanations;
- suggest where users may find relevant source documents;
- identify possible inconsistencies between documents;
- prepare draft internal notes for human review.

## 2. Restricted AI actions

The AI assistant must not:

- make final business decisions;
- approve or reject requests;
- provide legal, medical, financial, or HR decisions as final answers;
- access documents outside the approved pilot scope;
- override existing access permissions;
- send messages to customers, employees, or partners without human review;
- update official policies or process documents automatically;
- create binding instructions without approval from a responsible human.

## 3. Control authority boundary

During this pilot, the AI assistant must not control or change the behavior of other systems or business processes.

The AI assistant may not autonomously:

- change process routing;
- assign or reprioritize tasks;
- change access permissions;
- update system configuration;
- modify escalation rules;
- trigger workflow execution;
- create or update official records;
- send external communication;
- change internal policies, procedures, or instructions.

Any move from information support to process influence must be reviewed as a higher-risk architecture change.

See also: [AI as Control Loop Pattern](../../architecture-patterns/ai-as-control-loop.md).

## 4. Prohibited pilot scope

The pilot should not initially include:

- sensitive HR cases;
- disciplinary decisions;
- customer complaints with legal consequences;
- personal employee data;
- medical information;
- financial approval processes;
- regulated decision-making workflows;
- external customer-facing automated responses.

## 5. Required source transparency

Where possible, AI outputs should refer to the source material used.

The user should be able to identify:

- which document was used;
- whether the document is current;
- whether the output is a summary, interpretation, or direct extraction;
- whether human review is required before action.

## 6. Human responsibility rule

The AI assistant may generate possibilities, summaries, and draft explanations.

A human user remains responsible for:

- checking the output;
- deciding whether the answer is usable;
- escalating unclear cases;
- communicating final decisions;
- documenting important AI-supported conclusions.

## 7. Escalation triggers

The user must escalate the case to a responsible human when:

- the AI output is uncertain;
- the answer affects a person's rights, obligations, employment, payment, access, or status;
- documents provide conflicting information;
- the source is missing or unclear;
- the output may create legal, financial, HR, safety, or reputational consequences.
