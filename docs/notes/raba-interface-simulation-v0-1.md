# RABA Interface Simulation v0.1

**Status:** Working Note  
**Canonical status:** Non-canonical  
**Purpose:** Capture lessons from simulating a RABA responsibility interface inside the Human Owner / AI collaborator workflow  
**Language mode:** Human-understandable first; Russian primary with English terms only where needed  
**Not:** canon, UI specification approval, implementation requirement, product roadmap, compliance guidance, certification, public positioning approval, outreach approval, provider-facing positioning, or commercial claim

---

## 1. Purpose

This working note records the first practical simulation of a RABA-style responsibility interface inside the actual RABA project workflow.

The goal is not to define a final product interface.

The goal is to discover what the interface must make visible when an AI collaborator assists a Human Owner with consequential project actions such as GitHub writes, status changes, canonicalization, public positioning, outreach, or provider-facing use.

The simulation showed that RABA cannot be only a document layer.

RABA must also become a visible operational interface that helps the Human Owner understand:

- what action is being proposed;
- what class of action it belongs to;
- whether it is allowed;
- whether confirmation is required;
- what is blocked;
- what risk exists;
- what trace should remain;
- whether the Human Owner understands the decision in an accessible language.

---

## 2. Context

The simulation emerged after work on the linked Draft / non-canonical provider, external-signal, and capability-frontier package:

- PR #143 — Organizational Evals for AI-Agent Deployment;
- PR #144 — Provider / External Signals Log Template;
- PR #145 — Provider Alignment Artifact Pack Overview;
- PR #146 — Operational Control Board for Provider Artifact Pack;
- PR #147 — Provider Signal Translation Rule;
- PR #148 — RABA Capability Frontier Update Map.

The Human Owner asked how the collaboration would look if RABA existed between the Human Owner and the AI collaborator.

The answer was tested as a live interface simulation rather than only as an abstract concept.

---

## 3. Core insight

RABA should not merely produce governance documents.

RABA should make responsibility visible during the workflow.

Working formulation:

```text
The Human Owner gives direction.
The AI proposes structure and actions.
The RABA interface shows boundaries, status, risk, and consequences.
The Human Owner decides.
The AI acts only within the approved boundary.
Every meaningful action leaves a trace.
```

Russian formulation:

```text
Человек задаёт направление.
ИИ предлагает структуру и действия.
RABA-интерфейс показывает границы, статус, риск и последствия.
Human Owner принимает решение.
ИИ действует только в разрешённых границах.
Каждое значимое действие оставляет след ответственности.
```

---

## 4. Human-understandable control rule

A critical issue emerged during the simulation: the Human Owner may not fully understand English governance terms.

If the interface is only in English, the Human Owner may appear to approve an action while not fully understanding the meaning, risk, or consequence.

This creates a responsibility problem.

Proposed rule:

```text
A decision cannot count as responsible confirmation if the Human Owner does not understand the action, risk, and consequence in an accessible language.
```

Russian formulation:

```text
Нельзя считать подтверждение настоящим,
если человек не понял, что именно он разрешает,
какой риск принимает и какие последствия возможны.
```

This rule is not cosmetic.

It is a governance requirement.

---

## 5. Language mode

The interface should support a Human-understandable first mode.

For this project, that means:

- Russian is the primary control language;
- English terms may remain where they are stable RABA / GitHub / AI-governance terms;
- English terms should be explained in Russian when they affect decisions;
- approval prompts should be understandable without requiring English fluency;
- blocked actions should be expressed in plain language.

Example:

```text
Состояние разрешения (Approval State):
Заблокировано до явного подтверждения Human Owner.

Риск:
Это может выглядеть как принятие в канон, хотя документ ещё не canon.

Внешнее использование:
Запрещено без отдельного решения Human Owner.
```

---

## 6. Minimal RABA interface panel

The simulation used the following minimal panel:

```text
RABA-состояние

Рабочий процесс:
Что сейчас делаем.

Предлагаемое действие ИИ:
Что ИИ собирается сделать.

Класс действия:
Чтение / анализ / рекомендация / запись в GitHub / публичное использование / канонизация.

Текущее разрешение:
Разрешено или заблокировано.

Нужно ли подтверждение Human Owner:
Да / нет.

Заблокированные действия:
Что нельзя делать без отдельного подтверждения.

Риск:
Что может пойти не так.

Контроль:
Как предотвращается неправильный переход статуса.

След ответственности:
Что должно остаться в истории действий.
```

This panel is intentionally simple.

It is meant to expose responsibility boundaries before action, not after the fact.

---

## 7. Action classes discovered in the simulation

The simulation identified several practical action classes:

| Action class | Russian explanation | Default permission | Human confirmation needed |
|---|---|---|---|
| Read | Читать файлы, PR, issues, comments | Allowed | No |
| Analyze | Анализировать и сравнивать материалы | Allowed | No |
| Recommend | Давать рекомендации без изменения статуса | Allowed | No |
| Draft | Подготовить текст без записи в GitHub | Allowed | Usually no |
| Repository write | Создать или изменить файл в GitHub | Blocked by default | Yes |
| Metadata update | Изменить PR body, issue body, labels, etc. | Blocked by default | Yes |
| Ready-for-review | Перевести PR из Draft в review state | Blocked | Explicit Human Owner approval |
| Merge | Merge PR | Blocked | Explicit Human Owner approval |
| Canonicalization | Принять концепт в canon | Blocked | Explicit Human Owner decision |
| Public use | Использовать публично | Blocked | Explicit Human Owner approval |
| Outreach | Начать внешнюю коммуникацию | Blocked | Explicit Human Owner approval |
| Provider-facing use | Использовать в отношении провайдеров / партнёров | Blocked | Explicit Human Owner approval |
| Commercial claim | Коммерческое / partnership / adoption / validation claim | Blocked | Explicit Human Owner approval |

---

## 8. Approval states

The simulation suggests these approval states:

| Approval state | Meaning |
|---|---|
| Allowed | Действие можно выполнить без отдельного подтверждения, потому что оно read-only или recommendation-only |
| Needs clarification | Намерение Human Owner неясно или может иметь последствия |
| Blocked until confirmation | Нужна явная фраза Human Owner перед действием |
| Confirmed for this action only | Human Owner подтвердил конкретное действие, но не другие действия |
| Executed within boundary | Действие выполнено в разрешённых границах |
| Escalation required | Нужен отдельный уровень решения, потому что меняется статус, canon, public use, merge, or consequence class |

Important rule:

```text
Confirmation for one action does not authorize a higher-level action.
```

Example:

```text
Confirmation to update a non-canonical transfer summary
≠ approval to mark PR ready-for-review
≠ approval to merge
≠ approval to canonize
≠ approval to use publicly
```

---

## 9. Non-canonical material types discovered

The simulation showed that `non-canonical` is too broad by itself.

A real RABA interface should show the type of non-canonical material:

| Type | Russian explanation | Risk if unclear |
|---|---|---|
| Candidate Core | Возможный будущий core concept | May be mistaken for canon |
| Boundary Pattern | Рабочий паттерн границы ответственности | May be mistaken for accepted architecture |
| Operational Control Material | Материал управления проектом / статусами | May be mistaken for approval |
| External Signal Material | Внешний сигнал / provider / market / capability input | May be mistaken for validation or endorsement |
| Review Aid | Материал проверки / checklist / synthesis | May be mistaken for decision |
| Implementation Extension | Идея реализации или UI/workflow support | May be mistaken for product roadmap |
| Market-Facing Extension | Материал для объяснения или позиционирования | May create public-positioning drift |
| Transfer Summary | Context handoff | May be mistaken for architecture authority |

This distinction should be visible in the interface.

---

## 10. Repository State Baseline and Drift Control

The simulation identified that repository risk is not limited to changes made during AI work.

External changes may occur:

- before the AI starts a session;
- during AI work;
- after AI finishes a session;
- between two transfer summaries;
- after a public link is shared;
- through issues, comments, PRs, commits, branch changes, or public-facing edits.

Therefore the AI must not rely only on memory, chat summaries, or previous transfer summaries.

Core rule:

```text
AI memory ≠ repository truth.
Chat summary ≠ repository truth.
Previous approved state ≠ current repository state.
Detected repository change ≠ approved repository change.
```

Russian formulation:

```text
Память ИИ не равна состоянию GitHub.
Резюме чата не равно состоянию GitHub.
Вчерашнее подтверждённое состояние не равно сегодняшнему состоянию проекта.
Обнаруженное изменение не равно одобренное изменение.
```

Before consequential GitHub actions, the interface should perform a Repository State Baseline check:

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

If drift is detected, the workflow should move into inspect-only mode:

```text
If repository state changed outside the approved action boundary:
- stop write actions;
- inspect only;
- compare state;
- classify source and risk;
- report to Human Owner;
- wait for decision.
```

This is especially important after public exposure, such as sharing a repository or project link on LinkedIn.

External attention may produce useful signals, but it may also introduce:

- accidental edits;
- unauthorized claims;
- spam or promotional comments;
- public-positioning contamination;
- implied validation or partnership language;
- changes that appear to be project-approved merely because they exist in GitHub.

Repository presence is not approval.

Commit existence is not canon.

External contribution is not endorsement.

Merged text is not architectural approval unless a Human Owner decision exists.

---

## 11. Read-only Verification Boundary

The simulation revealed a separate safety boundary around verification actions.

Verification must be treated as its own action class.

A verification action is intended to check repository state, file existence, PR status, branch state, or project consistency.

Because verification is not intended to change the project, it must use read-only operations only.

Core rule:

```text
Verification must be read-only.
```

Russian formulation:

```text
Проверка должна выполняться только read-only действием.
Нельзя использовать create, update, delete, merge, ready-for-review,
label changes, or other state-changing operations as a way to verify repository state.
```

Incorrect patterns:

```text
Using delete to check whether a file exists.
Using create to test whether writing works.
Using update to check whether a file is current.
Using status-changing actions to inspect workflow state.
```

Correct patterns:

```text
fetch
search
list
compare
read metadata
get status
inspect diff
```

If an AI collaborator uses a write, delete, or status-changing tool for verification, RABA should classify this as a tool-use boundary violation.

Required response:

```text
Stop workflow.
Do not continue with further write actions.
Classify the incident.
Report to Human Owner.
If repository state changed, request explicit cleanup confirmation.
Update interface requirements if the incident reveals a missing control.
```

This boundary is especially important because an action may be low-intent but high-consequence.

The intent may be "only checking," but the tool may still change repository state.

Therefore RABA must classify both:

```text
user intention
```

and:

```text
tool consequence class
```

The tool consequence class must control the permission boundary.

A read-only intention does not make a write-capable tool safe.

---

## 12. Trust Through Visible Risk

The simulation revealed that RABA can create a more tangible and responsible form of human trust in AI.

This is not blind trust.

RABA should not imply that AI is always correct, safe, or reliable.

Instead, RABA supports justified trust by making hidden risks visible before consequential action.

Core rule:

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

Problem:

```text
Humans may consciously accept that AI can be wrong,
but without an interface they often do not see which hidden risks
should be checked before action.
```

Russian formulation:

```text
Человек может понимать, что ИИ ошибается,
но без RABA он часто не видит,
какие именно скрытые риски нужно проверить.
```

RABA makes visible:

```text
AI recommendation ≠ Human Owner decision
External signal ≠ validation
Repository presence ≠ approval
Commit existence ≠ canon
Provider language ≠ RABA terminology
Capability expansion ≠ governance readiness
Read-only intention ≠ safe tool action
Detected change ≠ approved change
```

Value:

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

This creates a more mature form of trust:

```text
I do not trust AI because it cannot be wrong.
I trust the RABA-governed process because it shows
where AI may be wrong, what is blocked,
what must be checked, and where the Human Owner decides.
```

Russian formulation:

```text
Я доверяю не потому, что ИИ не может ошибиться.
Я доверяю процессу, потому что он показывает,
где ИИ может ошибиться,
что заблокировано,
что нужно проверить,
и где решение остаётся за человеком.
```

This should be treated as a working idea only.

It is not a claim that RABA guarantees trust.

Safer formulation:

```text
RABA supports justified, visible, and controlled trust in human-AI workflows.
```

Russian formulation:

```text
RABA поддерживает обоснованное, видимое и управляемое доверие
в работе человека и ИИ.
```

---

## 13. Problems discovered

### Problem 1 — Language comprehension

If the Human Owner does not fully understand English terms, approval may be formal but not responsible.

Interface requirement:

```text
Show decision, risk, and consequence in a Human-understandable language.
```

### Problem 2 — Ambiguous user commands

Phrases such as:

```text
сделаем
да
ок
продолжаем
```

may express direction but not necessarily authorize a GitHub write, ready-for-review, merge, canon, public use, or outreach.

Interface requirement:

```text
Detect ambiguous consequential commands and require explicit confirmation.
```

### Problem 3 — Operational control may look like approval

A control board may track PRs and blocked actions.

But tracking does not mean approval.

Interface requirement:

```text
Separate control-state visibility from approval-state movement.
```

### Problem 4 — Review checklist may look like readiness

A canonicalization checklist may exist, but it does not mean the concept is ready for canon.

Interface requirement:

```text
Show the difference between checklist exists, review started, candidate architecture, and canon.
```

### Problem 5 — Capability frontier creates update pressure

A new AI capability may create pressure to update RABA.

But capability expansion is not governance readiness.

Interface requirement:

```text
Show capability signal without allowing automatic architecture update.
```

### Problem 6 — AI recommendation may sound like Human Owner decision

AI may classify a note as a strong candidate.

But this remains an AI recommendation.

Interface requirement:

```text
Label AI recommendation separately from Human Owner decision.
```

### Problem 7 — Accidental repository state change

A mistaken file or unintended repository artifact may appear.

Interface requirement:

```text
Unexpected repository artifact should become a responsibility incident requiring Human Owner cleanup approval.
```

### Problem 8 — Repository state drift outside AI working time

The project may change before or after AI work, not only during it.

Interface requirement:

```text
Before consequential actions, compare current repository state with the last known approved baseline.
```

### Problem 9 — Unsafe verification action

A tool action may be intended as verification but still have write, delete, or status-changing consequences.

Interface requirement:

```text
Verification must be read-only, and tool consequence class must override user intention.
```

### Problem 10 — Hidden risk and trust illusion

Humans may know that AI can be wrong, but they may not see the hidden risk categories created by AI-assisted workflows.

Interface requirement:

```text
Trust should be supported by visible risk, visible boundaries, visible permissions, and visible responsibility transitions.
```

---

## 14. Responsibility trace requirements

A meaningful RABA interface should create a trace for significant transitions.

Trace should include:

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
- repository baseline / current state comparison, if relevant;
- verification method and whether it was read-only, if relevant;
- visible-risk note, if relevant;
- risk note;
- execution result.

Example trace:

```text
Responsibility Event:
Create non-canonical working note RABA Interface Simulation v0.1

Action class:
Repository write

Approval:
Explicit Human Owner confirmation

Boundary:
No ready-for-review, no merge, no canon

Canonical impact:
None

Public-use impact:
None

Execution result:
File created as Working Note / Non-canonical
```

---

## 15. Interface requirements v0.1

The simulation suggests the first requirements for a real RABA Interface:

1. Show the current workflow.
2. Show the proposed AI action.
3. Classify the action.
4. Show current permission state.
5. Show whether Human Owner confirmation is required.
6. Show blocked actions.
7. Show the risk in accessible language.
8. Show what the Human Owner must understand.
9. Preserve English terms only when useful and explain them.
10. Separate AI recommendation from Human Owner decision.
11. Separate operational tracking from approval.
12. Separate review readiness from canon.
13. Separate external signal from validation.
14. Separate capability update pressure from architecture update.
15. Record meaningful responsibility transitions.
16. Check repository state baseline before consequential GitHub actions.
17. Detect repository drift before, during, and after AI work.
18. Treat detected repository change as not approved until reviewed.
19. Enter inspect-only mode when repository state drift is detected.
20. Classify external contributors, bots, unknown sources, and public-exposure changes.
21. Enforce read-only verification.
22. Classify tool consequence class separately from user intention.
23. Treat unsafe verification as a tool-use boundary violation.
24. Make hidden AI-related risk visible before consequential action.
25. Support justified, visible, and controlled trust rather than blind trust.

---

## 16. What this note does not do

This note does not:

- define final UI design;
- approve a RABA product roadmap;
- approve implementation;
- define compliance requirements;
- create certification requirements;
- approve public positioning;
- approve outreach;
- approve provider-facing use;
- make RABA Interface canonical;
- create a schema change;
- create a Responsibility Event Stream event family;
- change any PR status;
- claim that RABA guarantees trust;
- claim that RABA eliminates AI error.

---

## 17. Suggested future work

Possible next steps, each requiring separate Human Owner confirmation if they involve GitHub writes or status changes:

1. Create a dedicated `RABA Interface Requirements v0.1` checklist.
2. Create a simple mock dashboard in Markdown.
3. Map interface fields to Responsibility Event Stream fields.
4. Map interface fields to Decision Log fields.
5. Define escalation rules for ambiguous user commands.
6. Define language-accessibility requirements for Human Owner confirmation.
7. Define an incident pattern for accidental repository changes.
8. Define Repository State Baseline and Drift Control as a separate working note.
9. Define public exposure controls for LinkedIn / public repository attention.
10. Define Read-only Verification Boundary as a separate working note or checklist.
11. Define Trust Through Visible Risk as a separate working note.
12. Add this note to a future operational control board.

---

## 18. Working status

This is a working note.

It is non-canonical.

It is not architecture approval.

It is not implementation approval.

It is not a public-facing claim.

It is not a product roadmap.

It is not ready-for-review approval.

It is not merge approval.

It is not canon.

Final architectural approval remains with the Human Owner.
