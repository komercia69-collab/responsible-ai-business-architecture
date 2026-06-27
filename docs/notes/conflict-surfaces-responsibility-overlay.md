# Conflict Surfaces and Responsibility Overlay

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Purpose:** Explore how RABA can identify technical and organizational conflict surfaces and overlay responsibility boundaries across human authority, system control, and AI-agent operational autonomy.  
**Scope:** Conceptual / implementation-adjacent analysis only.  

> This note does not change RABA canon.  
> It does not define a schema.  
> It does not create runtime implementation guidance.  
> It does not authorize AI control over safety-critical systems.  
> It is not a deployment architecture, runtime enforcement design, safety architecture, event-family proposal, or Industry 4.0 readiness claim.  
> It does not define production controls for field systems, SCADA, PLCs, OT environments, service meshes, agent meshes, or AI-agent runtimes.  
> Any production use involving safety-critical systems, operational technology, customer-impacting workflows, legal/financial consequences, or irreversible actions requires separate domain-specific safety, security, compliance, legal, and operational review.  

---

## Implementation-adjacent boundary

This note uses industrial, service, integration, and agent-system examples only as a conceptual mapping lens.

It does not define how such systems should be deployed, integrated, automated, monitored, certified, or controlled in production.

The presence of terms such as Field / IIoT, SCADA, PLC, MES, MOM, microservices, service mesh, agent mesh, MCP, or AI agents does not mean that RABA adopts those layers as canonical architecture or implementation guidance.

Any future work that moves from conceptual comparison toward runtime behavior, safety claims, field-system interaction, remediation logic, tool permissions, event schemas, or deployment patterns requires separate review and explicit Human Owner confirmation.

---

## 1. Core idea

A **conflict surface** is a boundary between systems, domains, agents, tools, organizations, or operational layers where models of the world, policies, timing, authority, or responsibility may differ while the actors still share a resource, process, or decision path.

In RABA terms, a conflict surface is important because it is a place where responsibility may diffuse before anyone notices.

```text
Conflict surfaces show where responsibility can diffuse before anyone notices.
RABA uses responsibility overlay to make authority, permitted automation, escalation, and human accountability visible at those surfaces.
```

---

## 2. Why this matters for RABA

RABA already asks where AI-supported activity crosses an Action Boundary and who remains accountable for the consequence of that action.

Conflict surfaces add a complementary question:

```text
Where do technical, organizational, data, process, security, or authority boundaries meet in ways that can create conflicting actions or unclear responsibility?
```

This is useful for AI-assisted workflows because AI agents may operate across multiple systems faster than organizations define who owns the resulting cross-boundary consequences.

---

## 3. Architecture layers where conflict surfaces may appear

Conflict surfaces can appear across many layers, for example:

```text
Field / IIoT
→ Control / SCADA / PLC / OSS
→ MES / MOM
→ Domain microservices
→ Integration / API / event bus
→ Service mesh / observability
→ Agent mesh / AI agents
→ Human decision and approval interfaces
```

This note does not adopt these layers as RABA canon. They are used only as a practical mapping lens.

---

## 4. Examples of conflict surfaces

### F1 — Equipment to IIoT / SCADA boundary

Potential conflicts:

- protocol mismatch;
- signal semantics mismatch;
- telemetry rate mismatch;
- safety limits;
- command races.

RABA boundary:

```text
AI agents may observe normalized operational events.
They must not directly control safety-critical field equipment unless a separately governed safety architecture explicitly authorizes it.
```

For avoidance of doubt, this note does not authorize AI control over field devices, SCADA systems, PLCs, safety systems, or operational technology.

Observation, classification, recommendation, simulation, and evidence preparation must remain distinct from command authority.

Command authority requires separately governed safety architecture, explicit human / organizational accountability, and domain-specific operational approval outside this note.

### M1 — MES / MOM to ERP / WMS boundary

Potential conflicts:

- plan vs fact;
- route or recipe version mismatch;
- supply-chain priority conflict;
- unit-of-measure mismatch;
- scheduling conflict.

RABA boundary:

AI may suggest rescheduling, reconciliation, or exception handling, but final approval remains with the responsible business owner when operational, financial, customer, or safety consequences are material.

### S1 — Microservice to microservice boundary

Potential conflicts:

- API contract drift;
- schema breaking changes;
- inconsistent events;
- cyclic sagas;
- timeout and retry storms.

RABA boundary:

AI test agents may detect and propose corrections, generate tests, and help identify contract mismatch. Automated remediation should remain limited to low-risk, reversible, pre-authorized actions.

### N1 — Service mesh / observability boundary

Potential conflicts:

- retry storms;
- circuit-breaker misconfiguration;
- latency hotspots;
- security policy conflicts;
- unclear ownership of cross-service incidents.

RABA boundary:

AI ops agents may recommend or execute bounded remediation only where rollback, blast radius, and ownership are defined.

“Bounded remediation” is used here as a conceptual category only.

This note does not define remediation playbooks, automation thresholds, rollback logic, blast-radius limits, production permissions, runtime enforcement mechanisms, or operational approval paths.

Any future remediation model would require separate non-canonical review and explicit Human Owner confirmation before implementation-oriented documentation is created.

### A1 — Agent mesh / tool boundary

Potential conflicts:

- two agents acting on the same resource;
- contradictory tool actions;
- privilege escalation;
- bypassing business rules;
- hidden commitment creation.

RABA boundary:

AI platform owners define tool permissions and identity boundaries. Domain owners define permitted actions and playbooks. RABA-supervisor patterns may detect, simulate, block, or roll back actions only inside pre-authorized boundaries.

---

## 5. Responsibility overlay

The source idea used a human / system / agent weighting model.

For RABA, the safer framing is not “AI responsibility” but:

```text
human_decision_authority_weight
system_control_weight
agent_operational_autonomy_weight
```

These are not legal responsibility allocations.

They are diagnostic indicators for how much decision authority, deterministic system control, and permitted AI-agent autonomy are appropriate at a given conflict surface.

### Human decision authority

Indicates where a human role must approve, review, stop, escalate, or remain answerable for a decision.

### System control

Indicates deterministic technical control such as PLC logic, database transactions, static policy, safety rules, hard-coded limits, or verified automation.

### Agent operational autonomy

Indicates the degree to which an AI agent may observe, classify, recommend, simulate, or execute bounded actions.

Agent autonomy is not human responsibility.

Agent operational autonomy describes permitted action scope.

It does not create AI responsibility, legal responsibility, moral responsibility, business ownership, or final admissibility authority.

Responsibility remains human / organizational.

A system may evaluate, route, block, recommend, or escalate, but it must not become the accountable owner of the consequence.

---

## 6. Suggested interpretation of autonomy levels

```text
Low agent autonomy:
The agent observes, classifies, explains, and alerts only.

Medium agent autonomy:
The agent recommends actions, prepares evidence, simulates consequences, and may execute low-risk playbooks after required approval.

High agent autonomy:
The agent may execute bounded, reversible, pre-authorized remediation where rollback, blast radius, monitoring, and ownership are defined.
```

High agent autonomy should not be allowed where safety-critical, legal, financial, customer-impacting, or irreversible consequences are not governed.

---

## 7. Relation to existing RABA concepts

This note relates to, but does not replace:

- Action Boundary;
- Approval State;
- Decision Log;
- Responsibility Event Stream;
- Responsibility Management Interface;
- Authority Drift;
- Human-in-the-loop theater;
- AI Execution Gap;
- Agent Identity and Authority;
- MCP governance layer.

Possible mapping:

| Conflict surface element | RABA relation |
|---|---|
| boundary between systems | Action Boundary |
| unclear authority | Authority Drift |
| automatic or agentic remediation | Approval State / Governance Gateway |
| human approval or escalation | Decision Log |
| event trace | Responsibility Event Stream |
| visible ownership and escalation | Responsibility Management Interface |
| agent identity and tool access | Agent Identity and Authority / MCP governance |

---

## Relationship to prototype planning

Related prototype-planning work does not advance this note toward canon, implementation guidance, ready-for-review status, or merge readiness.

A future Responsibility Review Panel extension may use this note as conceptual input only after separate review.

Prototype planning does not reduce the need for separate risk review of this working note.

This note must not be treated as a UI specification, runtime workflow, product design, or implementation plan.

---

## 8. What this note does not do

This note does not:

- define a RABA schema;
- create a new event family;
- create implementation guidance;
- authorize automated remediation;
- authorize AI control over field systems;
- create safety claims;
- create Industry 4.0 certification claims;
- replace OT, SRE, security, compliance, legal, or safety engineering;
- move any concept into canon;
- define a canonical RABA table, checklist, CSV, weighting model, routing state, trigger list, or event taxonomy;
- make any example table, future template, candidate event name, or routing state canonical;
- create a production configuration model;
- create a runtime permission model;
- claim Industry 4.0 readiness;
- claim industrial safety readiness;
- claim certification readiness;
- claim operational technology deployment readiness;
- claim regulatory or compliance readiness;
- claim vendor, platform, or infrastructure validation;
- create public positioning around industrial AI governance readiness.

Any future table, template, checklist, CSV, trigger list, event name, routing state, or weighting model derived from this note must be treated as example-only unless separately reviewed and explicitly accepted by the Human Owner.

Nothing in this note creates a canonical RABA schema, event family, runtime state model, permission model, or implementation template.

---

## 9. Risks

| Risk | Description | Mitigation |
|---|---|---|
| Implementation drift | A conceptual table may be mistaken for a deployment configuration. | Keep this as Working Note only. |
| False responsibility attribution | AI may be described as responsible instead of operationally bounded. | Use agent autonomy / permitted action scope, not AI responsibility. |
| Safety overreach | AI may be imagined as controlling safety-critical equipment. | State that AI observes normalized events unless separately governed. |
| Schema adoption drift | A future CSV template may be mistaken for a canonical schema. | Treat templates as examples only. |
| Terminology contamination | Industry 4.0, mesh, or agent-mesh terms may harden prematurely. | Keep terminology mapped, not adopted. |

---

## 10. Future work candidates

Possible future non-canonical artifacts:

- example-only conflict surface table;
- conflict surface to RABA primitives mapping;
- agent autonomy boundary examples;
- Industry 4.0 responsibility boundary examples;
- MCP / agent-mesh conflict surface comparison.

Any future template must clearly state:

```text
Example only.
Not a schema.
Not canon.
Not implementation guidance.
```

---

## 11. Summary

Conflict surfaces help RABA identify where responsibility, authority, automation, and AI-agent action may become unclear across system and organizational boundaries.

The useful RABA move is not to make AI responsible, but to make the human authority, system constraints, permitted agent autonomy, escalation route, and evidence trail visible at every consequential boundary.

This remains a working note only.

It may inform future RABA discussion, but it does not authorize canonical adoption, implementation work, runtime enforcement, schema creation, safety claims, certification claims, or public positioning.
