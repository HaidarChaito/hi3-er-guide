import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Finality_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { BuildType } from '@/types/Build';
import { withPriority } from '@/helpers/functions';

const build1: BuildType = {
  label: 'Combo Build',
  tier: 3.5,
  gear: [
    {
      gearInfo: 'Domain of Genesis | Kiana TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Domain of Genesis | Little Joys TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Domain of Genesis | Leuweenhoek TB Kiana/Broboli/Thales M',
      isBudgetVisible: true,
    },
  ],
  notes:
    ' Combo build that focusses on spamming the combo actions through condescension descent stacks and weapon active to quickly gain 8 stacks and spam combo attack, has high survivability, gains massive power spike from the SS rank and Ego signet "Condescension" synergy',
  isNew: true,
  bottomNotes: [
    {
      text: 'SEQUENCE: ATF (Do not use your WA inside)> x5 attacks > WA > Combo > Wa Combo > Repeat when ATF up ',
    },
  ],
  signets: [
    [
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Condescension, 'Start'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_High_Flames, 'Mandatory F2'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Clarity, 'Mandatory'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Final_Moon, 'Optional'),
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_Helix, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anatman,
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
    [
      EmblemsImages.Light_as_a_Bodhi_Leaf,
      EmblemsImages.Because_of_You,
      EmblemsImages.Falling_in_Past_Light,
    ],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build1;
