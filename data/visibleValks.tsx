import { Valkery } from '@/types/Valkery';
import ArgentKnightArtemis from './valks/ArgentKnightArtemis/valk';
import BrightKnightExcelsis from './valks/BrightKnightExcelsis/valk';
import ChronoNavi from './valks/ChronoNavi/valk';
import DeaAnchora from './valks/DeaAnchora/valk';
import DisciplinaryPerdition from './valks/DisciplinaryPerdition/valk';
import Dreamweaver from './valks/Dreamweaver/valk';
import FallenRosemary from './valks/FallenRosemary/valk';
import FerventTempoDeltaValkery from './valks/FerventTempoDelta/valk';
import GoldenDiva from './valks/GoldenDiva/valk';
import GoushinnsoMemento from './valks/GoushinnsoMemento/valk';
import HelicalContraption from './valks/HelicalContraption/valk';
import HerrscherOfFinality from './valks/HerrscherOfFinality/valk';
import HerrscherofFlamescion from './valks/HerrscherofFlamescion/valk';
import HerrscherofHumanity from './valks/HerrscherofHumanity/valk';
import HerrscherofOrigin from './valks/HerrscherofOrigin/valk';
import HerrscherofReason from './valks/HerrscherofReason/valk';
import HerrscherofRebirth from './valks/HerrscherofRebirth/valk';
import HerrscherofSentience from './valks/HerrscherofSentience/valk';
import HerrscherofThunder from './valks/HerrscherofThunder/valk';
import HerrscherofTruth from './valks/HerrscherofTruth/valk';
import HerrscherofVoid from './valks/HerrscherofVoid/valk';
import InfiniteOuroboros from './valks/InfiniteOuroboros/valk';
import JadeKnight from './valks/JadeKnight/valk';
import LunaKindred from './valks/LunaKindred/valk';
import MidnightAbsinthe from './valks/MidnightAbsinthe/valk';
import MiracleMagicGirl from './valks/MiracleMagicGirl/valk';
import MissPinkElf from './valks/MissPinkElf/valk';
import PalatinusEquinox from './valks/PalatinusEquinox/valk';
import PrinzessinderVerurteilung from './valks/PrinzessinderVerurteilung/valk';
import ReveristCalico from './valks/ReveristCalico/valk';
import RitualImayoh from './valks/RitualImayoh/valk';
import ShadowKnight from './valks/ShadowKnight/valk';
import SilverwingNEX from './valks/SilverwingNEX/valk';
import SixthSerenade from './valks/SixthSerenade/valk';
import SpinaAstera from './valks/SpinaAstera/valk';
import StarchasmNyx from './valks/StarchasmNyx/valk';
import StarryImpression from './valks/StarryImpression/valk';
import StrikerFulminata from './valks/StrikerFulminata/valk';
import StygianNymph from './valks/StygianNymph/valk';
import SugaryStarburst from './valks/SugaryStarburst/valk';
import SweetnSpicy from './valks/SweetnSpicy/valk';
import TerminalAide0017 from './valks/TerminalAide0017/valk';
import TwilightPaladin from './valks/TwilightPaladin/valk';
import ValkyrieGloria from './valks/ValkyrieGloria/valk';
import ValkyrieQuicksand from './valks/ValkyrieQuicksand/valk';
import VermilionKnightEclipse from './valks/VermilionKnightEclipse/valk';
import { compareValkeriesTier } from '@/helpers/functions';
import LunarVow from './valks/LunarVow/valk';
import CosmicExpression from './valks/CosmicExpression/valk';

// Add valkeries here
const visibleValks: Valkery[] = [
  ArgentKnightArtemis,
  LunarVow,
  BrightKnightExcelsis,
  ChronoNavi,
  DeaAnchora,
  DisciplinaryPerdition,
  Dreamweaver,
  FallenRosemary,
  CosmicExpression,
  FerventTempoDeltaValkery,
  GoldenDiva,
  GoushinnsoMemento,
  HelicalContraption,
  HerrscherOfFinality,
  HerrscherofFlamescion,
  HerrscherofHumanity,
  HerrscherofOrigin,
  HerrscherofReason,
  HerrscherofRebirth,
  HerrscherofSentience,
  HerrscherofThunder,
  HerrscherofTruth,
  HerrscherofVoid,
  InfiniteOuroboros,
  JadeKnight,
  LunaKindred,
  MidnightAbsinthe,
  MiracleMagicGirl,
  MissPinkElf,
  PalatinusEquinox,
  PrinzessinderVerurteilung,
  ReveristCalico,
  RitualImayoh,
  ShadowKnight,
  SilverwingNEX,
  SixthSerenade,
  SpinaAstera,
  StarchasmNyx,
  StarryImpression,
  StrikerFulminata,
  StygianNymph,
  SugaryStarburst,
  SweetnSpicy,
  TerminalAide0017,
  TwilightPaladin,
  ValkyrieGloria,
  ValkyrieQuicksand,
  VermilionKnightEclipse,
];

visibleValks.sort(compareValkeriesTier);
export const valks: Valkery[] = visibleValks;
