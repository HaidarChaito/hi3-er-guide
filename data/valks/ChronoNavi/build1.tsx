import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Chrono_Navi_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su, Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Rudder in Dream PRI | Idol Transformation TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Any Highest ATK Chakram Statstick | Little Joys TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Any Highest ATK Chakram Statstick | Jin Shengtan TM / Any Useable B Piece',
      isBudgetVisible: true,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Wep Active > Basics & Evade till full bar > Charged into Fire Ring > Ult > Repeat.',
    },
  ],
  isNew: true,
  notes:
    'Swap BR for BK by F9/F10 Shop for Heimdall. CN has a hard time against Heimdall without her.',
  signets: [
    [
      withPriority(Chrono_Navi_Ego.Blessing_of_Succession, 'Start'),
      withPriority(Chrono_Navi_Ego.Blessing_of_Time_Crystal, 'Mandatory F2'),
      withPriority(Chrono_Navi_Ego.Blessing_of_Constant, 'Mandatory'),
      withPriority(Chrono_Navi_Ego.Blessing_of_Final_Dream, 'Mandatory'),
      withPriority(Chrono_Navi_Ego.Blessing_of_Bladepiece, 'Optional'),
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anitya,
      Signets_of_Bodhi_Su.Maxim_of_Santam,
      withPriority(Signets_of_Bodhi_Su.Maxim_of_Anatman, 'Optional'),
    ],

    [
      Signets_of_Helix_VillV.Act_I_Magic,
      Signets_of_Helix_VillV.Act_V_Spider_Web,
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_Helix, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
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

    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Black__Dark,
      Signets_of_Stars_Griseo.Blue__Cold,
      withPriority(Signets_of_Stars_Griseo.Faded_Stars, 'CORE'),
      Signets_of_Stars_Griseo.Petals_in_the_Wind,
    ],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [
      EmblemsImages.Light_as_a_Bodhi_Leaf,
      EmblemsImages.Because_of_You,
      EmblemsImages.Empty_Like_Shala,
    ],
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build1;
