import { Buff } from './Buff';
import { BuildType } from './Build';

export type Valkery = {
  label: string;
  image: string;
  type?: number;
  tier?: number;
  build: BuildType[];
  loadoutBuffs?: Buff[];
  minRank?: number;
};
