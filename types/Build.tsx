import { Signet } from './Signet';

export type Build = {
  label: string;
  tier: number;
  isNew: boolean;
  signets: Signet[][];
};
