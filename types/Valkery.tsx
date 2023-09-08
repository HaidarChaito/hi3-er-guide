import { Build } from './Build';

export type Valkery = {
  label: string;
  image: string;
  loadBuff?: number[];
  type?: number;
  tier?: number;
  build: Build[];
};
