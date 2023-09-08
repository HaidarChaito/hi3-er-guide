import { Signet } from './Signet';

export type Build = {
  label: string;
  tier: number;
  isNew: boolean;
  signets: Signet[][];
  support1?: string;
  support2?: string;
  emblem1?: string;
  emblem2?: string;
};
