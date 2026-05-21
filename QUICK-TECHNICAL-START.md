# Quick Technical Start

This is the fastest technical entry point into Responsible AI Business Architecture.

Use this path if you want to understand RABA as a runtime governance pattern rather than only as a concept.

Start here:

- [`docs/quick-technical-start.md`](docs/quick-technical-start.md)

Then run the starter kit:

```bash
python starter-kit/raba_gateway.py
```

The starter kit demonstrates:

```text
AI action request
  ↓
policy check
  ↓
gateway decision
  ↓
decision log entry
  ↓
responsibility event
```

Core state model:

```text
DRAFT → RECOMMEND → AUTHORIZED → EXECUTED
                  ↘ ESCALATE
```

Key distinction:

```text
AUTHORIZED ≠ EXECUTED
```

Authorization means the action is permitted.

Execution means the action actually produced an external effect.

Core principle:

> AI may be probabilistic. Responsibility must not be.
