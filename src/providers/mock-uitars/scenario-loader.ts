import { readFileSync } from 'fs';
import type { Scenario } from '../../types';

export function loadScenario(path: string): Scenario {
  const raw = readFileSync(path, 'utf-8');
  const parsed = JSON.parse(raw) as unknown;
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    !('name' in parsed) ||
    !('actions' in parsed)
  ) {
    throw new Error(`Invalid scenario file: ${path}`);
  }
  return parsed as Scenario;
}
