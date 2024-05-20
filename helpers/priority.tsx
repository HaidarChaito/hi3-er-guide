import { signetType } from '@/types/Signet';

export function withPriority(signet: signetType, priority?: string) {
  const cln = structuredClone(signet);
  cln.priority = priority ?? 'Optional';
  return cln;
}
