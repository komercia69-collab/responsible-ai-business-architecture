# [2026-05-22] Doc Vault to GitHub Decision Log Sync

- Source: Comet
- Decision: accept with safeguard
- Canon Impact: Establishes GitHub as the durable archive for accepted RABA Decision Log entries, while Doc Vault remains a working interface for browsing, filtering, and preparing recommendation cards.
- Repo Impact:
  - `docs/decision-log/README.md`
  - `docs/decision-log/2026-05/2026-05-22-doc-vault-github-sync.md`
- Governance Gateway Check: OK — preserves a controlled handoff from Comet workspace to ChatGPT triage and GitHub Canon.
- Action Boundary Check: OK — Comet may prepare Markdown exports, but ChatGPT and the human owner decide what is committed to the repository.
- Reasoning: Accepted because the proposal strengthens continuity across sessions. GitHub becomes the long-term source of decision memory, while Doc Vault remains an operational workspace. The safeguard prevents raw working notes from becoming Canon without triage.
- Status: Active

---

## Operating Rule

After each meaningful RABA cycle:

```text
Comet / Doc Vault
→ Markdown recommendation or decision entry
→ ChatGPT triage
→ human confirmation when needed
→ GitHub Decision Log commit
```

GitHub stores the durable archive.

Doc Vault supports search, filtering, and workspace navigation.

Raw exports should not be treated as Canon until accepted through triage.
