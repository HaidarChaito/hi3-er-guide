import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Argent_Knight_Artemis_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/priority';
import { buildType } from '@/types/Build';

const build1: buildType = {
  label: 'General Build',
  gear: [
    {
      gearInfo: 'Skadi of Trynheim | Willows TMB',
      is_budget_visible: false,
    },
    {
      gearInfo: 'Skadi of Trynheim | Ana Schariac TMB',
      is_budget_visible: true,
    },
  ],
  extra_notes: [
    {
      text: 'SEQUENCE: Spam basic > Farm SP for ult and Watch out for Ice Orb indicator in enemies to use Charged and inflict Ice Cell > During Ult, spam Basics and Charged for Ice Cell whenever they have the indicator, weave Wep Actives in-between (Red Paint, V-V signets, never let it be at full charges), manual end Ult when SP consumption gets too high',
    },
  ],
  notes:
    'BoY is preferred start, but if you cannot clear F4 Double with it, use Dreamful Gold or Boundless Logos instead and go shop F5 to put BoY and get your 2 Egos by F11. Swap your 2nd support with BK by F9/F10 to deal with Heimdall.',
  signets: [],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Haxxor_Bunny_Avatar],
  ],
  emblems: [
    [
      EmblemsImages.Light_as_a_Bodhi_Leaf,
      EmblemsImages.Because_of_You,
      EmblemsImages.Boundless_Logos,
    ],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build1;
