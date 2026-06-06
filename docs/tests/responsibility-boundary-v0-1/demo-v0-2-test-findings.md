# Demo v0.2 Test Findings

**Status:** Manual Test Findings  
**Canonical status:** Non-canonical  
**Tested file:** `demo/responsibility-boundary-v0-2.html`  
**Related PR:** #106  
**Purpose:** Record usability and boundary findings for the Responsibility Boundary demo.

## Summary

The demo is usable for manual testing. It opens locally as a self-contained HTML file, all nine stages are reachable via "Далее", "Назад", and direct stage-card clicks, the Human Review State stage is visibly distinguished, and the reset/restart controls clear the interface. One small state-clearing gap was found in the reset function (stale Human Review State packet content remained in the DOM, hidden but not cleared) and has been corrected with a one-line patch. No external dependencies, network calls, or canon-implying language were found.

## Manual Test Checklist

- [x] File opens locally in browser
- [x] Forward navigation works
- [x] Back navigation works
- [x] Direct stage selection works
- [x] Current-stage indicator updates
- [x] Active stage auto-scrolls
- [x] Human Review State is visibly highlighted
- [x] Human Review State transition message appears at the correct stage
- [x] Restart/reset fully clears interface state
- [x] No external dependencies detected
- [x] No network calls detected
- [x] Mobile layout remains usable

Testing was performed by driving the page's DOM programmatically (jsdom, with `scrollIntoView` stubbed) through the full forward/back/direct-click/reset/restart sequences, and by static review of the HTML/CSS/JS source. A GUI browser was not available in this environment; the layout/CSS was reviewed statically (including the `@media(max-width:900px)` and `@media(max-width:600px)` rules) rather than visually screenshotted.

## Functional Findings

1. **Forward/back/direct-click navigation** — Verified across all 9 stages. `Далее` advances `i` from -1 through 8, headings update (`1. Мандат` … `9. Исполнение и последствия`), `Назад` moves back correctly, and clicking any stage card directly sets `i` to that index and re-renders. `prev`/`next` disabled states correctly reflect the boundary stages (prev disabled at stage 1, next disabled at stage 9).
2. **Current-stage indicator (`#stind`)** — Becomes visible (`stind vis`) on first navigation and shows the correct "Текущий этап: N из 9 — <title>" text and progress-bar width for every stage.
3. **Auto-scroll** — `renderFlow()` calls `scrollIntoView` on `.stage.current` on every render; confirmed it is invoked for each of the 9 stages plus direct-click navigation.
4. **Human Review State highlighting** — Stage index 6 always carries the `hrs` class (`stage hrs`, `stage hrs current`, `stage hrs done` as appropriate), giving it a distinct purple border/background at every point in the flow, not only when active.
5. **HRS → Human Decision transition message (`#hrsmsg`)** — Confirmed visible (`hrsmsg vis`) only at stage index 6 (Human Review State) and hidden (`hrsmsg`) at all other 8 stages, both via forward/back navigation and via direct stage-card clicks.
6. **Decision packet (`#packetBox`/`#packet`)** — Shown only for the Human Review State stage (the only stage object carrying a `p` array), with all 10 packet items rendered.
7. **"Решение о допустимости" blocked-card marking** — The `blocked` class is correctly applied to stage index 5 once `i >= 5`, matching the intended "BLOCK persists visually once reached" behaviour.
8. **Reset (`#reset` → `resetUI`)** — Before the patch below, `resetUI` cleared the active stage, log, right-side panel fields (owner, duty, next owner, missing-owner text), decision box, distinction text, field-strip values, stage indicator, HRS transition message, `packetBox` visibility, and button disabled states — **but left `#packet`'s `innerHTML` populated** with the previously rendered Human Review State packet items (only hidden via `display:none`, not cleared). This is now fixed (see "Fix Applied" below).
9. **Restart (`#restart`)** — Calls `resetUI()` and scrolls to top; produces the same fully-cleared state as `#reset`.
10. **No console/page errors** were observed during the full navigation, reset, and restart sequence.

### Fix Applied (Outcome B — minimal patch)

In `resetUI()`, added one line clearing the packet container's contents alongside hiding the box, so reset fully clears Human Review State packet state rather than leaving stale (hidden) markup behind:

```diff
   q('facts').innerHTML='';
   q('packetBox').style.display='none';
+  q('packet').innerHTML='';
```

This is purely a state-hygiene fix (the stale content was never visible to the user because the box is hidden); it brings the reset behaviour in line with the "reset clears the Human Review State packet" requirement and prevents future regressions if the box's visibility logic ever changes.

## Usability Findings

- The opening panel states plainly that "Human review — не присутствие человека и не checkbox" and that the system must assemble a correct decision state before transferring it to a human — this primes a first-time reader for the central distinction the demo is testing.
- The "Постоянное поле ответственности" strip (owner / approval state / admissibility / next action) gives a persistent at-a-glance summary that helps a reader track *what changed* between stages without re-reading each card from scratch.
- The per-stage "Почему здесь активируется ответственность" (`#why`) and "Ключевое различие" (`#distinction`) boxes directly answer several of the target comprehension questions (why the AI proposal is not enough, why admissibility is checked before execution, why technical success ≠ responsible completion).
- The Human Review State packet (`#packet`, 10 items: proposed action, evidence present/missing, applicable policy version, claimed authority, stop reason, risk state, active stop condition, available options, audit packet) directly answers "what does the human reviewer receive?" and visually distinguishes a structured decision package from a simple approve/reject prompt.
- The HRS → Human Decision banner ("Human Review State сформирован... Теперь ответственность может быть содержательно передана человеку") makes the separation between *forming* the review state and *making* the decision explicit at the one point in the flow where a reader could otherwise conflate the two stages.
- Minor: the journal/log (`#log`) lists visited stages in numeric order rather than visit order, which is reasonable for a linear walkthrough but could understate the significance of "Назад" exploration for a reader who jumps around non-linearly — not a defect, just a note for any future iteration.
- Minor: stage 9 ("Исполнение и последствия") answers "why execution and consequences remain part of the responsibility flow" via its `#why`/`#distinction` text, but a first-time reader who stops at the Human Review State / Human Decision stages (the demo's apparent focus) could plausibly treat execution as an epilogue rather than as an integral part of the responsibility chain. The text is present and correct; whether it lands depends on the reader continuing to the final stage.

## Governance Boundary Findings

No instances were found where the demo implies that:

- Human Review State is canonical RABA architecture (the badge explicitly reads "Non-canonical interactive test prototype v0.2");
- RABA is validated (the intro text explicitly states the demo "не означает ... validation");
- the demo is an implementation claim;
- BLOCK is always the correct answer (the admissibility stage models BLOCK for *this* scenario; the Human Decision stage explicitly offers reject / request-evidence / escalate / re-approve as live options, i.e. BLOCK is shown as one routed outcome among several, not a universal rule);
- human accountability is automatically legal guilt (no legal-responsibility language appears anywhere in the file);
- evidence automatically determines governance decisions (the materiality and admissibility stages explicitly route to independent review/escalation rather than auto-deciding from evidence alone);
- the AI can be the final judge of its own admissibility (stage 5's text states "Исполняющий AI не может быть единственным судьёй" and stage 6 shows the admissibility decision owned by a human-designated rule owner, not the AI);
- a checkbox equals meaningful human control (the opening paragraph explicitly rejects this framing: "Human review — не присутствие человека и не checkbox");
- external projects or conceptual inputs are adopted, integrated, endorsed, or partnered (the intro explicitly states "Демо не означает adoption, integration, endorsement или validation").

The "Approval state" field in the persistent strip uses the word "VALID" (`a:'VALID для S0'`) as a scenario-internal status label for the simulated S0 approval state, not as a claim that the architecture or demo itself is validated; this reading is reinforced by the immediately-adjacent disclaimer text. No change is recommended, but it is noted here for completeness since "valid/validation" wording appears in the boundary-check criteria.

## Unresolved Questions

- This review was performed without a graphical browser (headless Chromium could not be downloaded in this environment due to network allowlisting). DOM behaviour, classes, visibility, and content were verified programmatically via jsdom, and CSS/layout was reviewed statically. A human visual check in an actual browser (including the two responsive breakpoints) is recommended to confirm there is no purely-visual rendering issue that static/DOM-level testing cannot surface.
- Whether the minor usability notes above (log ordering; execution stage potentially read as an epilogue) warrant any future copy adjustments is a product/content decision for the Human Owner, not a defect requiring code changes now.

## Recommended Next Step

Apply (or review) the one-line reset-state patch included in this PR, then have the Human Owner perform a brief visual/manual pass in an actual browser (desktop and a narrow/mobile width) to confirm the static findings above and decide whether any of the usability notes should shape future copy changes. This note does not change the demo's non-canonical status or its readiness for merge.

## Boundary

This note does not create RABA canon, validate the demo, approve the model, authorize merge, or mark PR #106 ready for review. Final architectural approval remains with the Human Owner.
