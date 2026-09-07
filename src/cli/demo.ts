import { loadPolicy } from '../policy/policy-loader';
import { loadScenario } from '../providers/mock-uitars/scenario-loader';
import { createSession } from '../session/session-manager';
import { runScenario } from '../providers/mock-uitars/mock-provider';

const [, , scenarioPath, policyPath] = process.argv;

if (!scenarioPath || !policyPath) {
  console.error('[MOCK] Usage: demo <scenarioPath> <policyPath>');
  process.exit(1);
}

console.log('[MOCK] RABA Governed Execution Gateway — mock-only demo');
console.log('[MOCK] This is a non-production simulation. No real systems are controlled.');
console.log('');

const policy = loadPolicy(policyPath);
const scenario = loadScenario(scenarioPath);
const session = createSession(scenario.name, policy);

runScenario(scenario, session, policy);
