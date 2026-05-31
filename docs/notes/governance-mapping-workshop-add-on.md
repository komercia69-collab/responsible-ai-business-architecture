# Governance Mapping Workshop Add-on

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Related template:** [`../../templates/ai-role-profile.yaml`](../../templates/ai-role-profile.yaml)  
**Related review input:** [`../reviews/raba-over-rag-governance-extension-recommendation.md`](../reviews/raba-over-rag-governance-extension-recommendation.md)  

> This note is not approved architecture.  
> It describes a candidate RABA add-on for AI implementation, key user, or RAG adoption workshops.  
> Human Owner confirmation is required before canonical adoption or partner-facing use.

---

## 1. Purpose

Many AI implementation workshops focus on:

- jobs to be done;
- pains;
- gains;
- user groups;
- integrations;
- onboarding;
- expected adoption value.

These are necessary, but they do not fully answer the RABA responsibility questions:

```text
Where can AI output become operational action?
Who has authority at that boundary?
Who accepts responsibility?
Who must respond when escalation is required?
Who corrects the downstream effect if the AI-supported output is wrong?
```

The Governance Mapping Workshop Add-on introduces a structured responsibility layer into an existing AI implementation workshop.

It does not replace technical implementation, UX onboarding, legal review, GDPR assessment, security review, or vendor selection.

It adds a machine-readable responsibility artifact:

```text
AI Role Profile
```

---

## 2. Core idea

The add-on converts workshop discussion into a structured profile for one AI-assisted use case.

Instead of ending with informal notes, the workshop should produce:

```text
use case → AI role → allowed outputs → forbidden outputs → action boundary → owners → response window → logging requirements
```

This profile helps distinguish:

```text
AI may prepare
≠
AI may execute
```

And:

```text
user has read access
≠
AI-supported workflow has action authority
```

---

## 3. Recommended workshop timing

This add-on is especially useful during:

1. **Pre-implementation scoping**  
   Before a RAG / enterprise AI tool is deployed.

2. **Key User Workshop**  
   When jobs, pains, gains, and expected value are being mapped.

3. **Pilot design**  
   Before a workflow is tested with real users.

4. **Post-adoption governance review**  
   After AI has become routine and rubber-stamp drift may appear.

---

## 4. Minimum workshop outputs

For each AI-assisted use case, the workshop should identify:

### 4.1 AI role

- What is the AI expected to do?
- Is it assisting, recommending, preparing, or executing?
- Can it propose the next action?
- Can it execute without a human?
- Can it create external consequences?

### 4.2 Allowed and forbidden outputs

Allowed outputs may include:

- internal summary;
- draft document;
- evidence summary;
- risk marker;
- alternative options.

Forbidden outputs may include:

- external commitment;
- binding legal claim;
- financial approval;
- customer record change;
- policy change.

### 4.3 Action boundary

The workshop should define the transition where AI output becomes consequential.

Example:

```text
Draft email becomes external customer communication.
```

The boundary must identify:

- trigger;
- consequence class;
- required authority check;
- required evidence check;
- required responsibility acceptance;
- required Decision Log entry.

### 4.4 Access and authority split

The workshop should explicitly preserve this rule:

```text
SSO / Active Directory governs data visibility.
RABA Action Boundary governs action authority.
```

This prevents read access from being misclassified as permission to act.

### 4.5 Source Log to Decision Log bridge

If a RAG or enterprise search system provides source references, the profile should define how those source references connect to RABA decision records.

Minimum bridge fields:

- source system;
- source log reference ID;
- retrieval trace ID;
- source snapshot ID;
- evidence freshness;
- whether the human reviewed the source;
- linked Decision Log ID.

### 4.6 Owners

The profile should identify:

- escalation owner;
- responsibility owner;
- correction owner;
- policy owner;
- independent reviewer, if required.

For high-risk workflows, named people may be required, not only role names.

### 4.7 Human Response Window

The workshop should define:

- who must respond;
- default response time;
- maximum response time;
- allowed extension reasons;
- what happens if no response arrives.

Important boundary:

```text
Missing human response must not become implicit approval.
```

### 4.8 Governed Bypass

If the workflow reaches a consequence boundary before all conditions are satisfied, the profile should define whether governed bypass is allowed.

Governed bypass may allow safe preparation:

- revise draft;
- mark risky claims;
- collect sources;
- prepare decision summary;
- prepare alternative options.

It must not allow consequence creation:

- send external message;
- create binding commitment;
- change critical records;
- approve financial transaction;
- imitate human authorization.

### 4.9 Active human engagement evidence

For high-stakes outputs, the profile should define whether active human engagement evidence is required.

Possible evidence:

- source review confirmation;
- reason capture;
- short decision summary;
- risk acknowledgment;
- conflict acknowledgment;
- typed confirmation for critical actions.

A passive delay timer is not enough by itself.

### 4.10 Drift detection

The workshop should define basic warning signals for rubber-stamp drift or governance drift.

Examples:

- review time collapses;
- approval rate exceeds threshold;
- default reasons are reused;
- high-risk actions are approved without source review;
- bypass preparation repeatedly becomes execution;
- missing human response is treated as approval.

RABA boundary:

```text
AI must not self-certify that human oversight is substantive.
```

---

## 5. Suggested workflow

```text
1. Select one AI-assisted use case.
2. Describe the AI role.
3. List allowed and forbidden outputs.
4. Identify the action boundary.
5. Separate read access from action authority.
6. Link source evidence to decision records.
7. Assign owners.
8. Define Human Response Window.
9. Define governed bypass actions.
10. Define human engagement evidence.
11. Define drift indicators.
12. Save the result as AI Role Profile YAML.
```

---

## 6. Example workshop prompt set

### AI role

```text
What should the AI prepare, recommend, summarize, or execute?
```

```text
What must the AI never do without human authorization?
```

### Boundary

```text
At what point does the AI output stop being internal preparation and start creating consequence?
```

### Authority

```text
Who has authority to allow this action?
```

```text
Is that authority defined by business role, legal role, operational role, or system permission?
```

### Evidence

```text
Which source evidence must be available before the output can be used?
```

```text
Must the human see the source or only the AI-generated summary?
```

### Responsibility

```text
Who accepts responsibility for using the AI output?
```

```text
Who corrects the downstream effect if the output is wrong?
```

### Escalation

```text
Who receives the case if the AI or user cannot prove authority, evidence, or admissibility?
```

### Human response

```text
How long may the process wait for human response before escalation or block?
```

### Bypass

```text
What may the AI safely continue doing while waiting for human response?
```

```text
What must remain locked until authority and responsibility acceptance are explicit?
```

### Drift

```text
Which signals would show that human review is becoming automatic or superficial?
```

---

## 7. Output artifact

The expected output is:

```text
templates/ai-role-profile.yaml copied and filled for the selected use case
```

Candidate storage pattern:

```text
examples/ai-role-profiles/<use-case-id>.yaml
```

or, during early review:

```text
docs/notes/<use-case-id>-ai-role-profile-draft.yaml
```

The artifact should remain non-canonical until accepted by the Human Owner and, where needed, recorded in a Decision Log.

---

## 8. Pilot use

This add-on can support a small RABA-over-RAG pilot.

A pilot could produce:

- one filled AI Role Profile;
- one action boundary map;
- one Source Log to Decision Log bridge;
- one Human Response Window definition;
- one escalation and correction owner map;
- one drift indicator set.

This is useful for organizations that already have or are evaluating a RAG / enterprise AI tool but lack a responsibility architecture layer around it.

---

## 9. Governance boundary

This note is:

- a working note;
- non-canonical;
- not a consulting offer by itself;
- not a vendor evaluation;
- not an implementation commitment;
- not approved architecture.

Using the template does not grant authority to an AI system.

Canonical adoption requires Human Owner confirmation and a separate decision trail.
