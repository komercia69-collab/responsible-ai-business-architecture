import { readFileSync } from 'fs';
import { parse as parseYaml } from 'yaml';
import { PolicyBundleSchema } from './policy-schema';
import type { PolicyBundle } from '../types';

export function loadPolicy(path: string): PolicyBundle {
  const raw = readFileSync(path, 'utf-8');
  const parsed = parseYaml(raw) as unknown;
  const result = PolicyBundleSchema.safeParse(parsed);
  if (!result.success) {
    throw new Error(
      `Policy validation failed for ${path}:\n${result.error.message}`
    );
  }
  return result.data as PolicyBundle;
}
