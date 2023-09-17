import { Valkery } from '@/types/Valkery';
import ChronoNavi from './valks/ChronoNavi/valk';
import HerrscherOfFinality from './valks/HerrscherOfFinality/valk';
import HerrscherofRebirth from './valks/HerrscherofRebirth/valk';
import MiracleMagicGirl from './valks/MiracleMagicGirl/valk';
import Dreamweaver from './valks/Dreamweaver/valk';
import VermilionKnightEclipse from './valks/VermilionKnightEclipse/valk';
import { compareValkeriesTier } from '@/helpers/functions';

// Add Recommended here
const recommendedValks: Valkery[] = [
  ChronoNavi,
  HerrscherOfFinality,
  HerrscherofRebirth,
  MiracleMagicGirl,
  Dreamweaver,
  VermilionKnightEclipse,
];

recommendedValks.sort(compareValkeriesTier);

export const recValks = recommendedValks;
