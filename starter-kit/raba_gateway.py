"""
Minimal RABA Governance Gateway starter kit.

Run from repository root:

    python starter-kit/raba_gateway.py

This script intentionally has no external dependencies.
It reads simple line-based action samples, evaluates them, and prints
RABA-style gateway decisions, decision log entries, and responsibility events.
"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Iterable, List

ROOT = Path(__file__).resolve().parent
ACTIONS_FILE = ROOT / "sample_actions.txt"


@dataclass
class GatewayResult:
    action_id: str
    approval_state: str
    reason: str
    next_step: str
    event_type: str


def parse_action_line(line: str) -> Dict[str, str]:
    """Parse a simple key=value; key=value action line."""
    result: Dict[str, str] = {}
    for part in line.split(";"):
        part = part.strip()
        if not part or "=" not in part:
            continue
        key, value = part.split("=", 1)
        result[key.strip()] = value.strip()
    return result


def load_actions(path: Path) -> List[Dict[str, str]]:
    actions: List[Dict[str, str]] = []
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#"):
            continue
        actions.append(parse_action_line(line))
    return actions


def evaluate_action(action: Dict[str, str]) -> GatewayResult:
    """Evaluate one action using a minimal RABA-style policy."""
    action_id = action.get("action_id", "unknown-action")
    operation = action.get("requested_operation", "")
    external_effect = action.get("external_effect", "false") == "true"
    boundary = action.get("action_boundary", "undefined")
    responsible_role = action.get("responsible_role", "missing")
    risk_level = action.get("risk_level", "unknown")
    review_state = action.get("review_state", "")
    approval_state = action.get("approval_state", "")
    external_result = action.get("external_system_result", "")

    if boundary == "unclear" or responsible_role == "missing" or risk_level == "high":
        return GatewayResult(
            action_id=action_id,
            approval_state="ESCALATE",
            reason="action boundary, responsibility owner, or impact level requires escalation",
            next_step="route to escalation owner",
            event_type="EscalationTriggered",
        )

    if operation == "draft" and not external_effect:
        return GatewayResult(
            action_id=action_id,
            approval_state="DRAFT",
            reason="draft action has no external effect",
            next_step="allow editing or recommendation",
            event_type="ActionDrafted",
        )

    if operation == "recommend" and not external_effect:
        return GatewayResult(
            action_id=action_id,
            approval_state="RECOMMEND",
            reason="recommendation should be reviewed before external effect",
            next_step="request review",
            event_type="ActionRecommended",
        )

    if operation == "deliver" and external_effect and review_state == "approved":
        return GatewayResult(
            action_id=action_id,
            approval_state="AUTHORIZED",
            reason="responsible role approved the action before external effect",
            next_step="allow controlled execution",
            event_type="ApprovalGranted",
        )

    if operation == "deliver" and approval_state == "AUTHORIZED" and external_result == "completed":
        return GatewayResult(
            action_id=action_id,
            approval_state="EXECUTED",
            reason="external system confirmed completion after authorization",
            next_step="record execution outcome",
            event_type="ActionExecuted",
        )

    return GatewayResult(
        action_id=action_id,
        approval_state="ESCALATE",
        reason="no matching governance rule found",
        next_step="hold action and request policy clarification",
        event_type="EscalationTriggered",
    )


def make_decision_log(action: Dict[str, str], result: GatewayResult) -> Dict[str, str]:
    now = datetime.now(timezone.utc).isoformat()
    return {
        "decision_log_id": f"log-{result.action_id}",
        "timestamp": now,
        "workflow_id": action.get("workflow_id", "unknown-workflow"),
        "action_id": result.action_id,
        "agent_id": action.get("agent_id", "unknown-agent"),
        "action_type": action.get("action_type", "unknown-action-type"),
        "action_boundary": action.get("action_boundary", "undefined"),
        "approval_state": result.approval_state,
        "responsible_role": action.get("responsible_role", "missing"),
        "outcome": result.next_step,
        "reason": result.reason,
    }


def make_responsibility_event(action: Dict[str, str], result: GatewayResult) -> Dict[str, str]:
    now = datetime.now(timezone.utc).isoformat()
    return {
        "event_type": result.event_type,
        "timestamp": now,
        "workflow_id": action.get("workflow_id", "unknown-workflow"),
        "action_id": result.action_id,
        "approval_state": result.approval_state,
        "reason": result.reason,
    }


def print_record(title: str, record: Dict[str, str]) -> None:
    print(title)
    for key, value in record.items():
        print(f"  {key}: {value}")


def run(actions: Iterable[Dict[str, str]]) -> None:
    for action in actions:
        result = evaluate_action(action)
        decision_log = make_decision_log(action, result)
        event = make_responsibility_event(action, result)

        print("=" * 72)
        print(f"Action: {result.action_id}")
        print(f"Gateway decision: {result.approval_state}")
        print(f"Reason: {result.reason}")
        print(f"Next step: {result.next_step}")
        print_record("Decision log:", decision_log)
        print_record("Responsibility event:", event)


if __name__ == "__main__":
    run(load_actions(ACTIONS_FILE))
