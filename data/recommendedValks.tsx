import { Valkery } from '@/types/Valkery';
import ChronoNavi from './valks/ChronoNavi/valk';
import HerrscherOfFinality from './valks/HerrscherOfFinality/valk';
import HerrscherofRebirth from './valks/HerrscherofRebirth/valk';
import Dreamweaver from './valks/Dreamweaver/valk';
import { compareValkeriesTier } from '@/helpers/functions';
import HelicalContraption from './valks/HelicalContraption/valk';
import HerrscherofHumanity from './valks/HerrscherofHumanity/valk';
import HerrscherofTruth from './valks/HerrscherofTruth/valk';
import JadeKnight from './valks/JadeKnight/valk';
import LunarVow from './valks/LunarVow/valk';
import TwilightPaladin from './valks/TwilightPaladin/valk';
import HerrscherofSentience from './valks/HerrscherofSentience/valk';
import StarryImpression from './valks/StarryImpression/valk';
import VermilionKnightEclipse from './valks/VermilionKnightEclipse/valk';
import ValkyrieQuicksand from './valks/ValkyrieQuicksand/valk';
import InfiniteOuroboros from './valks/InfiniteOuroboros/valk';
import SugaryStarburst from './valks/SugaryStarburst/valk';
import TerminalAide0017 from './valks/TerminalAide0017/valk';
import CosmicExpression from './valks/CosmicExpression/valk';
import FerventTempoDelta from './valks/FerventTempoDelta/valk';

// Add Recommended here
const recommendedValks: Valkery[] = [
  ChronoNavi,
  HerrscherOfFinality,
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
