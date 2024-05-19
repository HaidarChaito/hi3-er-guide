import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { buildType } from '@/types/Build';
import { Sugary_Starburst_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { withPriority } from '@/helpers/functions';

const build3: buildType = {
  label: 'Hybrid Build',
  tier: 4.5,
  gear: [
    {
      gearInfo: 'Star Dance: Enlightenment | Cecilia Youth TMB',
      is_budget_visible: false,
    },
    {
      gearInfo: 'Any Highest ATK Pistol Statstick | Willows TMB',
      is_budget_visible: true,
    },
  ],

  extra_notes: [{ text: 'SEQUENCE: Dodge > Attack > WA > Charged 2x > Repeat ' }],
  signets: [
    [
      withPriority(Sugary_Starburst_Ego.Blessing_of_Roller_Dance, 'Start'),
      withPriority(Sugary_Starburst_Ego.Blessing_of_Acoustic_Spectrum, 'Mandatory F2'),
      withPriority(Sugary_Starburst_Ego.Blessing_of_Astral_Path, 'Mandatory'),
      withPriority(Sugary_Starburst_Ego.Blessing_of_Rhythm, 'Optional'),
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_V_Spider_Web,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      Signets_of_Helix_VillV.Act_III_Conflict,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_Helix, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
      Signets_of_Helix_VillV.Puppetry_Interlacing_Cells,
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Aria_of_Gold, 'CORE'),
      Signets_of_Gold_Eden.Aria_of_Soil,
      Signets_of_Gold_Eden.Aria_of_Dawn,
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter, 'CORE'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [Signets_of_Stars_Griseo.Red__Hot],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [
      EmblemsImages.Pseudo_Miracle,
      EmblemsImages.Because_of_You,
      EmblemsImages.Falling_in_Past_Light,
    ],
    [EmblemsImages.Gold_Goblet, EmblemsImages.Because_of_You, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build3;
