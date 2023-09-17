import { Valkery } from '@/types/Valkery';
import Dreamweaver from './valks/Dreamweaver/valk';
import HerrscherofHumanity from './valks/HerrscherofHumanity/valk';
import HerrscherofOrigin from './valks/HerrscherofOrigin/valk';
import HerrscherofRebirth from './valks/HerrscherofRebirth/valk';
import JadeKnight from './valks/JadeKnight/valk';
import InfiniteOuroboros from './valks/InfiniteOuroboros/valk';
import ReveristCalico from './valks/ReveristCalico/valk';
import { compareValkeriesTier } from '@/helpers/functions';

// Add Broke mode valks here
const brokValks: Valkery[] = [
  Dreamweaver,
  HerrscherofHumanity,
  HerrscherofOrigin,
  HerrscherofRebirth,
  JadeKnight,
  InfiniteOuroboros,
  ReveristCalico,
];

brokValks.sort(compareValkeriesTier);

export const brokeValks = brokValks;
