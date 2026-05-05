# Frequently Asked Questions

## Is this a legal compliance tool?

No.

Responsible AI Business Architecture is not legal advice, compliance certification, security certification, or regulatory approval.

It helps organizations structure the questions they should ask before implementing AI in a business process.

Legal, compliance, security, technical, and business experts should be involved before implementation decisions are made.

## Is this only for regulated industries?

No.

The framework can be useful for any organization that wants to adopt AI without losing responsibility, auditability, or operational control.

Regulated or sensitive environments may benefit from the framework, but they also require additional legal, compliance, and security review.

## Do I need to be a technical expert to use it?

No.

The Quick Check, Pilot Partner Intake Form, Pilot Canvas, and Decision Report are designed for mixed teams:

- business owners;
- operations leaders;
- CTOs;
- architects;
- DPOs;
- compliance and risk professionals;
- consultants;
- implementation partners.

Technical expertise becomes more important when moving from pilot design to implementation.

## What is the first step?

Start with one concrete business process and complete the [AI Readiness Quick Check](../QUICK-CHECK.md).

Do not start with a tool, vendor, or broad automation plan.

Start with the process.

## What makes a good first AI pilot?

A good first AI pilot is usually:

- limited in scope;
- measurable;
- repetitive;
- useful for real employees;
- low or medium risk;
- reversible;
- clearly owned by a person or team;
- designed with human review.

## What should not be automated first?

Avoid starting with:

- autonomous payments;
- employment decisions;
- legal conclusions;
- safety-critical processes;
- high-sensitivity data without review;
- broad AI agent access;
- processes nobody understands;
- full automation as the first goal.

See [What Not to Automate First](../guides/what-not-to-automate-first.md).

## What is a Confirmation Gate?

A Confirmation Gate is a control point where AI may prepare or recommend an action, but a responsible human must approve before execution.

Example:

AI may draft an email response, but a human approves it before sending.

See [Confirmation Gate Pattern](../architecture-patterns/confirmation-gate.md).

## What is an Agent Permission Boundary?

An Agent Permission Boundary defines what AI may access, prepare, recommend, or execute.

The principle is:

> Permissions should be granted from responsibility, not from technical capability.

See [Agent Permission Boundary Pattern](../architecture-patterns/agent-permission-boundary.md).

## Can consultants use this framework commercially?

The project is intended to be practically useful for consultants and implementation partners.

Before offering commercial services based on the framework, review the repository license, usage policy, and disclaimer.

Possible collaboration directions are described in [Partners](../PARTNERS.md).

## Can we use the interactive demo offline?

Yes.

The demo is a static HTML file at [demo/index.html](../demo/index.html).

It can be opened in a browser without a server.

It is only a preliminary decision assistant and should not replace professional review.

## Is the framework aligned with the EU AI Act?

The framework is compatible with risk-based thinking and responsible AI governance discussions, but it does not claim EU AI Act compliance.

Any regulatory assessment should be performed by qualified legal and compliance professionals using current official sources.

## What is the main message of the project?

> AI may be probabilistic. Responsibility must not be.

AI can support business processes, but responsibility, approval, auditability, and permission boundaries must remain clear.
