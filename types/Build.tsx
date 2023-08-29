import { SignetCollection } from './SignetCollection';

export type Build = {
  label: string;
  tier: number;
  isNew: boolean;
  signets: SignetCollection[];
};
