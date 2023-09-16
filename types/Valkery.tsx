import { Buff } from './Buff';
import { Build } from './Build';

export type Valkery = {
  label: string;
  image: string;
  type?: number;
  tier?: number;
  build: Build[];
  loadoutBuffs?: Buff[];
  minRank?: number;
};
