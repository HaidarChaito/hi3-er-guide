import { valkeryType } from '@/types/Valkery';
import ChronoNavi from './valks/ChronoNavi/valk';
import HerrscherofFinality from './valks/HerrscherofFinality/valk';
import HerrscherofRebirth from './valks/HerrscherofRebirth/valk';
import Dreamweaver from './valks/Dreamweaver/valk';
import { compareValkeriesTier } from '@/helpers/functions';
import HerrscherofHumanity from './valks/HerrscherofHumanity/valk';
import JadeKnight from './valks/JadeKnight/valk';
import LunarVow from './valks/LunarVow/valk';
import TwilightPaladin from './valks/TwilightPaladin/valk';
import StarryImpression from './valks/StarryImpression/valk';
import VermilionKnightEclipse from './valks/VermilionKnightEclipse/valk';
import ValkyrieQuicksand from './valks/ValkyrieQuicksand/valk';
import CosmicExpression from './valks/CosmicExpression/valk';
import FerventTempoDelta from './valks/FerventTempoDelta/valk';

// Add Recommended here
const recommendedValks: valkeryType[] = [
  ChronoNavi,
  HerrscherofFinality,
  HerrscherofRebirth,
  TwilightPaladin,
  Dreamweaver,
  HerrscherofHumanity,
  JadeKnight,
  LunarVow,
  StarryImpression,
  VermilionKnightEclipse,
  ValkyrieQuicksand,
  CosmicExpression,
  FerventTempoDelta,
];

recommendedValks.sort(compareValkeriesTier);

export const recValks = recommendedValks;
