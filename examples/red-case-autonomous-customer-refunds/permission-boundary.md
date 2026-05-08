# Permission Boundary

## Purpose

This document defines the maximum permitted authority of the AI system within the customer refund handling workflow.

The purpose of the boundary is to prevent uncontrolled financial execution, unclear accountability, and autonomous operational influence.

---

# AI MAY

The AI system may:

- classify complaint category;
- summarize customer communication;
- identify missing information;
- retrieve relevant policy references;
- prepare refund recommendations;
- estimate possible refund ranges;
- suggest escalation priority;
- draft customer response text for review.

---

# AI MUST NOT

The AI system must not:

- autonomously approve refunds;
- execute financial transactions;
- modify financial records;
- send binding customer commitments;
- override refund policy;
- modify escalation rules;
- bypass human review;
- update legal or contractual records;
- change customer account permissions;
- trigger irreversible workflow execution.

---

## Mandatory Human Control

A responsible human operator must:

- review AI recommendations;
- approve or reject refund decisions;
- review customer communication before sending;
- handle exceptions and escalations;
- investigate fraud indicators;
- override incorrect AI recommendations;
- document high-risk decisions.

---

## Confirmation Gate Requirement

Any refund approval, financial execution, or customer-facing commitment must pass through a mandatory human confirmation gate.

---

## Governance Principle

AI permissions should be granted from responsibility, not from technical capability.
