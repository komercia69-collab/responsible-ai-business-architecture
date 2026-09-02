import { mkdirSync, appendFileSync } from 'fs';
import { dirname } from 'path';
import type { AuditLogEntry } from '../types';
import { sanitizeAuditEntry } from './sanitizer';

const DEFAULT_LOG_PATH = 'tmp/audit/raba-geg-audit.jsonl';

export function writeAuditLog(entry: AuditLogEntry, logPath?: string): void {
  const path = logPath ?? DEFAULT_LOG_PATH;
  const sanitized = sanitizeAuditEntry(entry);
  mkdirSync(dirname(path), { recursive: true });
  appendFileSync(path, JSON.stringify(sanitized) + '\n', 'utf-8');
}
