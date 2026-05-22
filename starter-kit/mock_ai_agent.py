"""
Mock AI agent for the RABA starter kit.

This file demonstrates the input side of the starter-kit contract:
an AI-like component prepares action requests as JSON objects.

Run from repository root:

    python starter-kit/mock_ai_agent.py

Then pass the generated JSON contract to the gateway simulation:

    python starter-kit/raba_gateway.py
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict, List

ROOT = Path(__file__).resolve().parent
OUTPUT_FILE = ROOT / "sample_actions.json"


def build_action_requests() -> List[Dict[str, Any]]:
    """Return example action requests that a real AI agent might submit."""
    return [
        {
            "action_id": "action-001",
            "workflow_id": "customer_message_demo",
            "agent_id": "mock-ai-agent",
            "action_type": "customer_message",
            "requested_operation": "draft",
            "external_effect": False,
            "action_boundary": "defined",
            "responsible_role": "support-lead",
            "risk_level": "low",
            "business_summary": "Draft a possible customer response for internal review.",
        },
        {
            "action_id": "action-002",
            "workflow_id": "customer_message_demo",
            "agent_id": "mock-ai-agent",
            "action_type": "customer_message",
            "requested_operation": "recommend",
            "external_effect": False,
            "action_boundary": "defined",
            "responsible_role": "support-lead",
            "risk_level": "low",
            "business_summary": "Recommend a response for human review.",
        },
        {
            "action_id": "action-003",
            "workflow_id": "customer_message_demo",
            "agent_id": "mock-ai-agent",
            "action_type": "customer_message",
            "requested_operation": "deliver",
            "external_effect": True,
            "review_state": "approved",
            "authorizer_reference": "human-review-support-lead-001",
            "action_boundary": "defined",
            "responsible_role": "support-lead",
            "risk_level": "medium",
            "business_summary": "Deliver a reviewed customer message.",
        },
        {
            "action_id": "action-004",
            "workflow_id": "customer_message_demo",
            "agent_id": "mock-ai-agent",
            "action_type": "customer_message",
            "requested_operation": "deliver",
            "external_effect": True,
            "approval_state": "AUTHORIZED",
            "external_system_result": "completed",
            "action_boundary": "defined",
            "responsible_role": "support-lead",
            "risk_level": "medium",
            "business_summary": "Record that the previously authorized delivery completed.",
        },
        {
            "action_id": "action-005",
            "workflow_id": "customer_message_demo",
            "agent_id": "mock-ai-agent",
            "action_type": "customer_message",
            "requested_operation": "deliver",
            "external_effect": True,
            "action_boundary": "unclear",
            "responsible_role": "missing",
            "risk_level": "high",
            "business_summary": "Attempt to deliver a message outside a clear boundary.",
        },
    ]


def main() -> None:
    actions = build_action_requests()
    OUTPUT_FILE.write_text(json.dumps(actions, indent=2), encoding="utf-8")
    print(f"Wrote {len(actions)} action requests to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
