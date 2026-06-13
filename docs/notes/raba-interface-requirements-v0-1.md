# RABA Interface Requirements v0.1

**Status:** Working Note Draft  
**Canonical status:** Non-canonical  
**Material type:** Interface requirement candidate / review aid / operational control material  
**Maturity:** Exploratory / pre-implementation  

**Approval status:**  
Not approved as RABA canon, UI specification, implementation plan, product roadmap, public positioning, outreach material, provider-facing material, commercial claim, validation claim, adoption claim, partnership claim, certification claim, compliance guidance, or legal guidance.

**Purpose:**  
This draft captures repeated interface-related requirements discovered during Human Owner / AI collaborator work.

It does not define a final RABA Interface.

It does not approve implementation.

It does not authorize product development.

It does not authorize public use.

It is intended only to help the Human Owner and future reviewers distinguish:

- current AI collaborator operating discipline;
- future interface requirement candidates;
- blocked status-changing actions;
- unresolved architecture questions.

**Important boundary:**  
This document may describe what a future RABA Interface *should show*, *should make visible*, or *should require*.  
That language is requirement-candidate language only.  
It must not be read as approved specification, approved roadmap, or canonical architecture.

---

## 1. Purpose

The purpose of this working note draft is to capture the first structured requirements for a possible RABA Interface.

The RABA Interface is not only a visual dashboard.

It is a responsibility-control surface that may help make visible, before consequential action:

- what the AI proposes;
- what class of action is involved;
- whether the action is allowed;
- whether Human Owner confirmation is required;
- what actions are blocked;
- what risk exists;
- what responsibility trace should remain;
- whether the Human Owner understands the action, risk, and consequence in an accessible language.

Core working formulation:

```text
The AI may assist.
The Human Owner decides.
The RABA Interface makes the responsibility boundary visible.
```

Russian formulation:

```text
ИИ может помогать.
Human Owner принимает решение.
RABA-интерфейс делает границу ответственности видимой.
```

This is a working formulation only.

It does not approve architecture.

It does not approve implementation.

It does not create canon.

---

## 2. Scope

This note focuses on interface requirement candidates discovered through practical RABA project work.

It covers:

- action-class visibility;
- permission-state visibility;
- Human Owner confirmation boundaries;
- read-only verification;
- repository state baseline and drift control;
- visible risk;
- material status visibility;
- responsibility trace requirements;
- separation between current AI collaborator operating rules and future RABA Interface requirements.

This note does not approve implementation.

This note does not define a final UI.

This note does not create RABA canon.

---

## 3. Interpretation Boundary

This draft uses requirement-candidate language such as:

```text
should show
should classify
should require
should preserve
should detect
should make visible
```

These phrases do not mean that the requirement is approved.

They mean only:

```text
This behavior has appeared repeatedly enough in RABA workflow
to be worth reviewing as a possible interface requirement.
```

The following interpretations are explicitly blocked:

```text
"should" ≠ approved architecture
"requirement" ≠ implementation approval
"interface" ≠ product roadmap
"visible risk" ≠ trust guarantee
"verification boundary" ≠ adopted canon
"Human Owner confirmation" ≠ public-use approval
"working draft" ≠ approved specification
```

Any movement from this draft into canon, implementation, UI specification, public positioning, outreach, provider-facing use, or product-roadmap language requires a separate explicit Human Owner decision.

---

## 4. Relationship to AI Collaborator Operating Instruction

This note is related to:

```text
docs/project-management/raba-ai-collaborator-operating-instruction.md
```

But the two materials should not be treated as identical.

They represent two different layers:

```text
AI Collaborator Operating Instruction
= how Ben / AI collaborator should work now.

RABA Interface Requirements
= what a future RABA Interface may need to show, enforce, or record.
```

The operating instruction is current operational discipline for AI collaborators.

The interface requirements are possible future interface requirements.

Repeated operational rules may later inform interface design, but repetition does not automatically make them canon.

---

## 5. Minimal RABA Interface Panel

Before meaningful action, a future RABA Interface may need to show a minimal responsibility panel.

Suggested panel:

```text
RABA-состояние

Рабочий процесс:
Что сейчас делаем.

Предлагаемое действие AI:
Что AI собирается сделать.

Класс действия:
Read / analyze / recommend / draft / verification / GitHub write / status change / canon / public use.

Текущее разрешение:
Разрешено / заблокировано / нужно подтверждение.

Нужно ли подтверждение Human Owner:
Да / нет.

Заблокированные действия:
Что нельзя делать без отдельного подтверждения.

Риск:
Что может пойти не так.

След ответственности:
Что должно остаться в истории действий.
```

The purpose of this panel would not be decoration.

The purpose would be to prevent hidden movement:

```text
recommendation → action
draft → approval
repository presence → authority
external signal → validation
working note → canon
merged non-canonical → canon
```

This remains a requirement candidate only.

---

## 6. Action Class Visibility

A future RABA Interface may need to classify every meaningful action before execution.

| Action class | Russian explanation | Default permission | Human Owner confirmation |
|---|---|---|---|
| Read | Читать файлы, PR, issues, comments | Allowed | No |
| Analyze | Анализировать и сравнивать материалы | Allowed | No |
| Recommend | Давать рекомендации без изменения статуса | Allowed | No |
| Draft | Подготовить текст без записи в GitHub | Allowed | Usually no |
| Verification | Проверить состояние проекта | Read-only only | No if read-only |
| Repository write | Создать или изменить файл в GitHub | Blocked by default | Yes |
| Delete / cleanup | Удалить файл или исправить accidental artifact | Blocked by default | Yes |
| Metadata update | Изменить PR body, issue body, labels, reviewers, milestones, etc. | Blocked by default | Yes |
| Ready-for-review | Перевести PR из Draft в review state | Blocked | Explicit Human Owner approval |
| Merge | Merge PR | Blocked | Explicit Human Owner approval |
| Canonicalization | Принять концепт в canon | Blocked | Explicit Human Owner decision |
| Public use | Использовать публично | Blocked | Explicit Human Owner approval |
| Outreach | Начать внешнюю коммуникацию | Blocked | Explicit Human Owner approval |
| Provider-facing use | Использовать в отношении провайдеров / партнёров | Blocked | Explicit Human Owner approval |
| Commercial / adoption / validation claim | Делать commercial, adoption, validation, partnership, compliance, certification, or product-roadmap claims | Blocked | Explicit Human Owner approval |

This table is not an approved interface specification.

It is a candidate classification model for review.

---

## 7. Permission State Visibility

A future RABA Interface may need to separate direction, recommendation, confirmation, execution, and approval.

Suggested permission states:

| Permission state | Meaning |
|---|---|
| Allowed | Action is read-only, analysis-only, recommendation-only, or draft-only |
| Needs clarification | Human Owner intention is unclear or may have consequence |
| Blocked until confirmation | Explicit Human Owner confirmation is required |
| Confirmed for this action only | Human Owner confirmed one specific action, not higher-level actions |
| Executed within boundary | Action was completed within the approved boundary |
| Escalation required | Action affects status, canon, public use, outreach, provider-facing use, or consequence class |
| Blocked | Action must not proceed |

Core rule candidate:

```text
Confirmation for one action does not authorize a higher-level action.
```

Examples:

```text
Confirmation to draft text
≠ approval to write to GitHub
≠ approval to mark ready-for-review
≠ approval to merge
≠ approval to canonize
≠ approval to use publicly
```

```text
Confirmation to create a working note
≠ approval to treat the note as canon
≠ approval to use it in public positioning
≠ approval to use it provider-facing
```

---

## 8. Human-understandable Confirmation

A future RABA Interface may need to prevent formal confirmation from being treated as responsible confirmation if the Human Owner does not understand the action, risk, and consequence.

Core rule candidate:

```text
A decision cannot count as responsible confirmation if the Human Owner does not understand the action, risk, and consequence in an accessible language.
```

Russian formulation:

```text
Нельзя считать подтверждение настоящим,
если человек не понял, что именно он разрешает,
какой риск принимает и какие последствия возможны.
```

For this project:

- Russian may be the primary control language;
- English terms may remain where they are stable RABA / GitHub / AI-governance terms;
- English terms should be explained in Russian when they affect decisions;
- approval prompts should be understandable without requiring English fluency;
- blocked actions should be expressed in plain language.

This is not a translation preference only.

It is a responsibility requirement candidate.

---

## 9. Read-only Verification Boundary

Verification must be treated as a separate action class.

A verification action is intended to check repository state, file existence, PR status, issue status, branch state, commit state, or project consistency.

Because verification is not intended to change the project, it must use read-only operations only.

Core rule candidate:

```text
Verification must be read-only.
```

Russian formulation:

```text
Проверка должна выполняться только read-only действием.
Нельзя использовать create, update, delete, merge, ready-for-review,
label changes, or other state-changing operations as a way to verify repository state.
```

Correct verification actions include:

```text
fetch
search
list
compare
read metadata
get status
inspect diff
```

Incorrect verification patterns include:

```text
Using delete to check whether a file exists.
Using create to test whether writing works.
Using update to check whether a file is current.
Using status-changing actions to inspect workflow state.
Using label changes to check whether metadata updates are possible.
```

Control principle candidate:

```text
Tool consequence class must control the permission boundary.
A read-only intention does not make a write-capable tool safe.
```

If an AI collaborator uses a write, delete, or status-changing tool for verification, RABA should classify this as a tool-use boundary violation.

Required response candidate:

```text
Stop workflow.
Do not continue with further write actions.
Classify the incident.
Report to Human Owner.
If repository state changed, request explicit cleanup confirmation.
Update interface requirements if the incident reveals a missing control.
```

This remains an interface requirement candidate.

It does not create canon.

---

## 10. Repository State Baseline and Drift Control

A future RABA Interface may need to require repository state checks before consequential GitHub actions.

The AI collaborator must not rely only on memory, chat summaries, or previous transfer summaries.

Core rule candidate:

```text
AI memory ≠ repository truth.
Chat summary ≠ repository truth.
Previous approved state ≠ current repository state.
Detected repository change ≠ approved repository change.
Repository presence ≠ approval.
Commit existence ≠ canon.
```

Russian formulation:

```text
Память ИИ не равна состоянию GitHub.
Резюме чата не равно состоянию GitHub.
Вчерашнее подтверждённое состояние не равно сегодняшнему состоянию проекта.
Обнаруженное изменение не равно одобренное изменение.
Наличие в репозитории не означает одобрение.
Наличие коммита не означает canon.
```

A repository baseline check may include:

```text
Last known approved state:
commit SHA / date / transfer summary / control board

Current state:
commit SHA / branch / PR landscape / issue landscape / recent commits

State comparison:
unchanged / changed / unknown

Change source:
Human Owner / trusted collaborator / external contributor / bot / unknown

Action permission:
read-only / inspect-only / write allowed / blocked pending review
```

If repository drift is detected:

```text
Stop write actions.
Inspect only.
Compare state.
Classify source and risk.
Report to Human Owner.
Wait for decision.
```

This is especially important after public exposure, such as sharing a repository, project link, demo, or RABA concept publicly.

External attention may produce useful signals, but it may also introduce:

- accidental edits;
- unauthorized claims;
- spam or promotional comments;
- public-positioning contamination;
- implied validation or partnership language;
- changes that appear approved merely because they exist in GitHub.

---

## 11. Visible Risk and Justified Trust

A future RABA Interface may support trust by making risk visible, not by hiding uncertainty.

Core rule candidate:

```text
RABA does not create trust by hiding uncertainty.
RABA creates trust by exposing risk, boundaries, permissions,
and responsibility transitions in a human-understandable way.
```

Russian formulation:

```text
RABA не создаёт доверие тем, что скрывает неопределённость.
RABA создаёт доверие тем, что показывает риски, границы,
разрешения и переходы ответственности понятным для человека языком.
```

The interface may need to make visible:

```text
AI recommendation ≠ Human Owner decision
External signal ≠ validation
Repository presence ≠ approval
Commit existence ≠ canon
Provider language ≠ RABA terminology
Capability expansion ≠ governance readiness
Read-only intention ≠ safe tool action
Detected change ≠ approved change
Control board ≠ approval
Transfer summary ≠ architecture authority
Review checklist ≠ readiness
Merged non-canonical ≠ canon
```

Value formulation candidate:

```text
RABA does not remove risk.
RABA turns hidden risk into visible, classifiable, reviewable,
and controllable risk.
```

Russian formulation:

```text
RABA не устраняет риск полностью.
RABA превращает скрытый риск в видимый риск,
который можно назвать, оценить, заблокировать,
проверить, передать Human Owner и записать в trace.
```

Safer trust formulation:

```text
RABA supports justified, visible, and controlled trust in human-AI workflows.
```

This should not be used as a public claim without separate Human Owner approval.

It is not a claim that RABA guarantees trust.

It is not a claim that RABA eliminates AI error.

---

## 12. Material Status Visibility

A future RABA Interface may need to always show material type and status.

Required distinctions:

```text
draft
working note
external signal
review aid
operational control material
canonicalization candidate
merged non-canonical
canon
```

Status rules:

```text
A working note is not canon.
A transfer summary is not architecture.
A control board is not approval.
A review checklist is not readiness.
An external signal is not validation.
A merged non-canonical note is not canon.
A GitHub PR is not approval.
A commit is not canon.
```

This status visibility is necessary because non-canonical material may still be useful, polished, merged, discussed, reviewed, or referenced.

Usefulness does not equal approval.

Presence does not equal authority.

---

## 13. External Signal Handling

External input may inform RABA.

External input must not approve RABA.

External signals include:

- provider statements;
- practitioner posts;
- expert feedback;
- standards-body materials;
- regulator signals;
- market observations;
- multi-AI review outputs;
- public comments;
- capability-frontier developments.

Handling chain candidate:

```text
External / capability / provider signal
→ source check
→ freshness check
→ source-quality check
→ public-shareability check
→ RABA boundary mapping
→ Decision Log Queue if status-affecting
→ Human Owner decision
```

Blocked interpretations:

```text
External signal ≠ validation
Provider signal ≠ endorsement
External feedback ≠ adoption
Multi-AI agreement ≠ Human Owner approval
Capability expansion ≠ governance readiness
Provider language ≠ RABA terminology
External interest ≠ partnership
Public comment ≠ approval
```

Provider language must be translated into vendor-independent responsibility patterns.

No external signal automatically updates RABA wording, terminology, architecture, public positioning, outreach posture, provider-facing use, or canon.

---

## 14. Public Positioning and Brand Boundary

A future RABA Interface may need to detect when internal working language begins to move toward public positioning.

Examples of public-positioning-sensitive material:

- slogans;
- brand phrases;
- README wording;
- website text;
- LinkedIn posts;
- provider-facing descriptions;
- validation language;
- adoption language;
- partnership language;
- product-roadmap language.

Example candidate phrase:

```text
RABA — Trust through visible responsibility.
```

Status for such phrases should be explicit:

```text
candidate brand phrase
non-canonical
not official slogan
not public positioning
not provider-facing
not outreach-approved
not brand approval
parked for future Brand / Public Positioning review
```

The interface should help prevent marketing drift before architectural stabilization.

This section does not approve any slogan.

This section does not approve public positioning.

---

## 15. Tool-use Incident Response

If an AI collaborator makes a tool-use mistake, such as accidental file creation, unsafe verification, wrong write action, or unintended repository state change, the interface may need to require:

```text
Stop.
Name the incident.
State what changed.
State the risk.
Do not hide the error.
Do not continue with further write actions.
Request Human Owner confirmation before cleanup if cleanup requires a write.
After cleanup, summarize what happened and what rule was strengthened.
```

Cleanup is also a repository write action and requires Human Owner confirmation.

Incident handling should distinguish:

```text
user intention
```

from:

```text
tool consequence class
```

A low-intent action may still be high-consequence.

---

## 16. Responsibility Trace Requirements

For meaningful transitions, a future RABA Interface may need to preserve a responsibility trace.

Trace may include:

- proposed action;
- action class;
- permission state before action;
- Human Owner confirmation, if required;
- blocked actions preserved;
- file or artifact changed;
- commit or PR reference, if applicable;
- canon impact;
- public-use impact;
- outreach impact;
- provider-facing impact;
- repository baseline / current state comparison, if relevant;
- verification method and whether it was read-only, if relevant;
- visible-risk note, if relevant;
- risk note;
- execution result.

Example trace:

```text
Responsibility Event:
Create RABA Interface Requirements v0.1 working note draft

Action class:
Repository write

Approval:
Explicit Human Owner confirmation for this file only

Boundary:
No PR
No ready-for-review
No merge
No canon
No public use
No outreach
No provider-facing use

Canonical impact:
None

Execution result:
File added as Working Note Draft / Non-canonical
```

---

## 17. Operational Rule Layer vs Interface Requirement Layer

The following distinction should remain visible:

```text
Operational Rule Layer:
Rules for how Ben / AI collaborator must operate now.

Interface Requirement Layer:
Requirements that a future RABA Interface may need to show, enforce, or record.
```

Examples:

```text
Ben must not use update_file for verification.
```

This is an operational rule.

```text
The interface should classify tool consequence class separately from user intention.
```

This is an interface requirement candidate.

Both are related, but they are not the same.

---

## 18. What This Note Does Not Do

This note is not an approval artifact.

It does not move any RABA concept from working material into canon.

It does not move any PR from Draft to ready-for-review.

It does not authorize any repository write beyond the explicitly confirmed creation of this single working note draft.

It does not authorize any external communication.

It does not authorize any provider-facing or commercial use.

It does not claim that RABA is complete, validated, adopted, certified, compliance-ready, implementation-ready, or product-ready.

This note does not:

- create RABA canon;
- approve architecture;
- approve UI specification;
- approve implementation;
- approve product roadmap;
- create schema changes;
- create Responsibility Event Stream event families;
- create Decision Log schema changes;
- approve public positioning;
- approve slogans;
- approve outreach;
- approve provider-facing use;
- approve commercial use;
- claim validation;
- claim adoption;
- claim partnership;
- claim certification readiness;
- claim compliance readiness;
- authorize ready-for-review;
- authorize merge;
- authorize canonicalization;
- claim that RABA guarantees trust;
- claim that RABA eliminates AI error.

---

## 19. Open Human Owner Review Questions

Before this outline becomes a PR, public-facing artifact, implementation reference, or canonicalization candidate, the Human Owner should decide:

1. Should this remain under `docs/notes/`, move under `docs/project-management/`, or later move to a future `docs/interface/`?
2. Should it be connected to `Responsibility Event Stream` now or later?
3. Should `Read-only Verification Boundary` become a separate note or remain inside interface requirements?
4. Should `Trust Through Visible Risk` stay as a working idea or become part of RABA principles later?
5. Should this remain Russian-first internally, English-first in repository text, or bilingual?
6. Should this be reviewed before any new public-facing RABA wording?
7. Should this become a prerequisite checklist before future GitHub write actions?
8. Which parts are operational discipline?
9. Which parts may become architecture later?
10. What must remain explicitly blocked until canon review?
11. Should brand phrase candidates be tracked in a separate Brand / Public Positioning Queue?
12. Should the interface requirement layer eventually be mapped to Responsibility Event Stream fields?
13. Should the interface requirement layer eventually be mapped to Decision Log fields?

---

## 20. Recommended Next Step

Recommended next step:

```text
Keep this working note draft in internal review.
Do not open a PR unless the Human Owner explicitly confirms that specific action.
Do not use it as canon.
Do not use it as public positioning.
Do not use it as provider-facing material.
Use it only to identify repeated interface requirements that may deserve later structured review.
```

Current GitHub status:

```text
Working Note Draft
Non-canonical
Interface requirement candidate
Exploratory / pre-implementation
Not canon
Not UI specification approval
Not implementation approval
Not product roadmap
Not public positioning
Not outreach approval
Not provider-facing use
Not commercial claim
```

Any PR, ready-for-review, merge, canonicalization, public use, outreach, or provider-facing use requires separate explicit Human Owner confirmation.
