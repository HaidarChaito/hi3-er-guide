import { buffType } from './Buff';
import { buildType } from './Build';

export type valkeryType = {
  label: string;
  image: string;
  type?: number;
  tier?: number;
  build: buildType;
  loadout_buffs?: buffType[];
  min_rank?: number;
};
