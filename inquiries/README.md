# RABA Inquiries

**Status:** DISCUSSION_DRAFT  
**Canonical status:** Non-canonical  
**Purpose:** Open problems, sources, external inputs and resolution attempts  
**Approval status:** Human Owner review required before adoption into canonical architecture  

> Multi-AI agreement is not approval.  
> External expert input is not approval.  
> Legal and scientific sources inform RABA; they do not automatically become RABA architecture.  
> Final architectural approval belongs to the Human Owner.

## Purpose

The `inquiries/` area is the RABA workspace for open problem questions.

It exists because responsible AI architecture cannot honestly pretend that all important questions are already solved.

RABA uses this area to:

- formulate open problems;
- collect relevant legal and standards sources;
- collect scientific and research recommendations;
- preserve external expert input from LinkedIn, GitHub discussions or direct communication;
- document resolution attempts;
- distinguish unresolved inquiry from accepted architecture;
- define how community discussion input may enter the project without becoming approval.

For community discussion intake rules, see [`community-discussion-intake.md`](community-discussion-intake.md).

## Principle

Open problems are not weaknesses of RABA.

They are part of responsible architecture development.

A mature responsibility framework must show not only what it currently believes, but also what remains uncertain, contested, under review or dependent on external law, standards and research.

## Source Categories

RABA distinguishes four categories of input:

| Category | Meaning | Canonical effect |
|---|---|---|
| Legal / standards source | Law, regulation, standard or official guidance | Informative; not automatically RABA architecture |
| Research source | Scientific paper, analytical report or expert research | Informative; subject to interpretation |
| External expert input | LinkedIn comment, GitHub discussion, email, review card or professional opinion | Input only; not approval |
| RABA interpretation | How RABA maps the source or opinion into its architecture | Non-canonical until Human Owner approval |

## Workflow

Typical inquiry flow:

```text
Open problem
  ↓
Relevant legal / standards sources
  ↓
Research notes
  ↓
External expert inputs
  ↓
Resolution attempts
  ↓
Concept draft or governance draft
  ↓
Decision Log only if accepted by Human Owner
```

Community discussion input follows the same boundary discipline:

```text
GitHub Discussion
  ↓
Human Owner / Integrator triage
  ↓
inquiry, review note, issue, draft, or backlog item
  ↓
Human Owner decision if adoption is proposed
```

## Directory Structure

```text
inquiries/
├── README.md
├── community-discussion-intake.md
├── open-problems-index.md
├── legal-and-standards/
├── research-notes/
├── external-inputs/
├── resolution-attempts/
└── templates/
```

## Boundary

The inquiry layer is not a canonical architecture layer by itself.

It is a research and governance memory layer.

It helps RABA avoid two errors:

1. false certainty — pretending unresolved questions are solved;
2. opinion chaos — collecting external opinions without status, source or interpretation discipline.

## Adoption Rule

An inquiry can influence canonical RABA architecture only after:

1. the problem is clearly formulated;
2. relevant legal, standards or research sources are considered where applicable;
3. external inputs are separated from RABA interpretation;
4. a resolution attempt is documented;
5. the Human Owner explicitly approves adoption.

Community discussion can inform any of these steps, but it does not replace Human Owner approval.
