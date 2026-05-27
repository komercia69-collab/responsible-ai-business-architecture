# Active Confirmation Demo — File Parsing Update Note

**Status:** Implementation Note  
**Canonical status:** Non-canonical. This note records a planned demo improvement, not an accepted architecture change.  
**Related file:** `demo/active-confirmation-interlock.html`  
**Related concept:** `concepts/active-confirmation-phrase-interlock.md`

## Purpose

The Active Confirmation Interlock demo should make the active check more transparent by exposing how the check was generated from the confirmation phrase.

The current demo already parses target files from the confirmation phrase and uses that information to generate active check questions.

This note records the intended improvement:

- make file parsing stricter and more explicit;
- remove duplicate file matches;
- support common repository file extensions;
- include parser output in the event record;
- show which source was used to generate the active check.

## Intended Demo Behavior

Given a confirmation phrase such as:

```text
Ben, I confirm. Create quick-check.html and update links in index.html and README.md.
```

The demo should detect:

```text
quick-check.html
index.html
README.md
```

and generate an active check such as:

```text
How many files will be affected by this action?
```

Correct answer:

```text
3
```

## Suggested Parsing Logic

```javascript
const fileMatches = phrase.match(/\b[\w.-]+\.(html|md|json|js|css|yml|yaml|txt)\b/gi) || [];
const uniqueFiles = [...new Set(fileMatches.map(file => file.trim()))];
const fileCount = uniqueFiles.length;
```

## Suggested Event Record Additions

The generated JSON event should include:

```json
{
  "action_parsing": {
    "parser_version": "0.2",
    "active_check_source": "parsed_target_files",
    "parsed_target_files": [
      "quick-check.html",
      "index.html",
      "README.md"
    ],
    "parsed_target_file_count": 3,
    "supported_file_extensions": [
      "html",
      "md",
      "json",
      "js",
      "css",
      "yml",
      "yaml",
      "txt"
    ]
  },
  "interlock_sequence": {
    "active_check_type": "file_count",
    "active_check_source": "parsed_target_files",
    "active_check_question": "How many files will be affected by this action?"
  }
}
```

## Governance Meaning

This improvement does not make the demo a real audit system.

It only improves trace transparency by showing:

- what was parsed from the phrase;
- what active check was generated;
- what evidence source the active check used.

The event record remains evidence of demo interlock execution only.

It is not proof of comprehension, decision quality, identity, or audit-chain integrity.

## Implementation Status

The improvement is planned but not yet applied to `demo/active-confirmation-interlock.html`.

A direct GitHub write attempt was blocked by the tool safety layer. The next implementation attempt should use a smaller targeted update or manual GitHub UI editing.

## Boundary

Multi-AI agreement is not approval.

This implementation note is not canonical architecture.

Human Owner confirmation is required before applying the HTML update.
