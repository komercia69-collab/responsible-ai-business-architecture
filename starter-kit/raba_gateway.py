"""
Minimal RABA Governance Gateway starter kit.

Run from repository root:

    python starter-kit/raba_gateway.py

This script intentionally has no external dependencies.
It reads JSON action samples and a JSON policy file, evaluates each action,
and prints RABA-style gateway decisions, decision log entries, and responsibility events.
"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional
import hashlib
import json

ROOT = Path(__file__).resolve().parent
ACTIONS_FILE = ROOT / "sample_actions.json"
POLICY_FILE = ROOT / "sample_policy.json"


@dataclass
class GatewayResult:
    action_id: str
    approval_state: str
    reason: str
    next_step: str
    event_type: str
    policy_id: str
    policy_version: str
    matched_rule_id: str
    corridor: str
    escalation_payload: Optional[Dict[str, Any]] = None


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def stable_hash(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()[:16]


def conditions_match(action: Dict[str, Any], conditions: Dict[str, Any]) -> bool:
    for key, expected in conditions.items():
        if action.get(key) != expected:
            return False
    return True


def conditions_any_match(action: Dict[str, Any], conditions_any: List[Dict[str, Any]]) -> bool:
    return any(conditions_match(action, condition) for condition in conditions_any)


def build_escalation_payload(action: Dict[str, Any], result_reason: str) -> Dict[str, Any]:
    return {
        "action_id": action.get("action_id", "unknown-action"),
        "workflow_id": action.get("workflow_id", "unknown-workflow"),
        "risk_level": action.get("risk_level", "unknown"),
        "action_boundary": action.get("action_boundary", "undefined"),
        "responsible_role": action.get("responsible_role", "missing"),
        "reason": result_reason,
        "suggested_escalation_owner": "workflow-owner-or-risk-reviewer",
    }


def evaluate_action(action: Dict[str, Any], policy: Dict[str, Any]) -> GatewayResult:
    """Evaluate one action using an external JSON policy."""
    action_id = action.get("action_id", "unknown-action")
    policy_id = policy.get("policy_id", "unknown-policy")
    policy_version = policy.get("policy_version", "unknown-version")

    # Red corridor is evaluated first so unclear/high-impact cases cannot fall through.
    for rule in policy.get("rules", []):
        if rule.get("corridor") != "red":
            continue
        if conditions_any_match(action, rule.get("conditions_any", [])):
            reason = "red corridor matched: escalation required for boundary, responsibility, or impact review"
            return GatewayResult(
                action_id=action_id,
                approval_state=rule["approval_state"],
                reason=reason,
                next_step=rule["next_step"],
                event_type=rule["event_type"],
                policy_id=policy_id,
                policy_version=policy_version,
                matched_rule_id=rule["rule_id"],
                corridor=rule["corridor"],
                escalation_payload=build_escalation_payload(action, reason),
            )

    for rule in policy.get("rules", []):
        if conditions_match(action, rule.get("conditions", {})):
            if rule.get("requires_authorizer_reference") and not action.get("authorizer_reference"):
                reason = "authorization reference is required before AUTHORIZED state"
                return GatewayResult(
                    action_id=action_id,
                    approval_state="ESCALATE",
                    reason=reason,
                    next_step="request authorizer reference",
                    event_type="EscalationTriggered",
                    policy_id=policy_id,
                    policy_version=policy_version,
                    matched_rule_id=rule["rule_id"],
                    corridor="red",
                    escalation_payload=build_escalation_payload(action, reason),
                )

            return GatewayResult(
                action_id=action_id,
                approval_state=rule["approval_state"],
                reason=f"matched policy rule: {rule['rule_id']}",
                next_step=rule["next_step"],
                event_type=rule["event_type"],
                policy_id=policy_id,
                policy_version=policy_version,
                matched_rule_id=rule["rule_id"],
                corridor=rule.get("corridor", "unspecified"),
            )

    reason = "no matching governance rule found"
    return GatewayResult(
        action_id=action_id,
        approval_state="ESCALATE",
        reason=reason,
        next_step="hold action and request policy clarification",
        event_type="EscalationTriggered",
        policy_id=policy_id,
        policy_version=policy_version,
        matched_rule_id="no_rule_matched",
        corridor="red",
        escalation_payload=build_escalation_payload(action, reason),
    )


def make_decision_log(action: Dict[str, Any], result: GatewayResult) -> Dict[str, Any]:
    now = datetime.now(timezone.utc).isoformat()
    authorizer_reference = action.get("authorizer_reference")
    auth_hash = stable_hash(authorizer_reference) if authorizer_reference else None
    return {
        "decision_log_id": f"log-{result.action_id}",
        "timestamp": now,
        "workflow_id": action.get("workflow_id", "unknown-workflow"),
        "action_id": result.action_id,
        "agent_id": action.get("agent_id", "unknown-agent"),
        "action_type": action.get("action_type", "unknown-action-type"),
        "business_summary": action.get("business_summary", ""),
        "action_boundary": action.get("action_boundary", "undefined"),
        "approval_state": result.approval_state,
        "corridor": result.corridor,
        "responsible_role": action.get("responsible_role", "missing"),
        "authorizer_reference": authorizer_reference,
        "auth_hash": auth_hash,
        "policy_id": result.policy_id,
        "policy_version": result.policy_version,
        "matched_rule_id": result.matched_rule_id,
        "outcome": result.next_step,
        "reason": result.reason,
        "escalation_payload": result.escalation_payload,
    }


def make_responsibility_event(action: Dict[str, Any], result: GatewayResult) -> Dict[str, Any]:
    now = datetime.now(timezone.utc).isoformat()
    return {
        "event_type": result.event_type,
        "timestamp": now,
        "workflow_id": action.get("workflow_id", "unknown-workflow"),
        "action_id": result.action_id,
        "approval_state": result.approval_state,
        "corridor": result.corridor,
        "policy_id": result.policy_id,
        "policy_version": result.policy_version,
        "matched_rule_id": result.matched_rule_id,
        "business_summary": action.get("business_summary", ""),
        "reason": result.reason,
        "escalation_payload": result.escalation_payload,
    }


def print_json(title: str, record: Dict[str, Any]) -> None:
    print(title)
    print(json.dumps(record, indent=2, ensure_ascii=False))


def run(actions: Iterable[Dict[str, Any]], policy: Dict[str, Any]) -> None:
    for action in actions:
        result = evaluate_action(action, policy)
        decision_log = make_decision_log(action, result)
        event = make_responsibility_event(action, result)

        print("=" * 72)
        print(f"Action: {result.action_id}")
        print(f"Gateway decision: {result.approval_state}")
        print(f"Corridor: {result.corridor}")
        print(f"Reason: {result.reason}")
        print(f"Next step: {result.next_step}")
        print_json("Decision log:", decision_log)
        print_json("Responsibility event:", event)


if __name__ == "__main__":
    run(load_json(ACTIONS_FILE), load_json(POLICY_FILE))
