import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { MiracleMagicGirl } from '@/data/signets/tsx/EgoAdditions';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { BuildType } from '@/types/Build';
import { withPriority } from '@/helpers/functions';

const build2: BuildType = {
  label: 'Charged Spam Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Dream Cutter: Polar Star | Little Joys TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo:
        'Dream Cutter OR Any Highest ATK Chakram Statstick | Leuwenhooek TB Broboli/Himeko M',
      isBudgetVisible: true,
    },
  ],
  isNew: true,
  notes:
    'Swap BR for BK by F9/F10 Shop to deal with Heimdall. This build focus on using charged attacks, similiarly to the weapon active build, your absolute evasion stacks will be consumed to refresh your glitter bar for more charged attacks to deal very heavy damage.',
  bottomNotes: [
    {
      text: 'SEQUENCE: Charged attack > WA > Charged attack > WA > Repeat; Build makes uses of glitter stacks to spam its attacks and ultimate evasions to refresh glitter stacks, ult to refresh resources',
    },
  ],
  signets: [
    [
      withPriority(MiracleMagicGirl.Blessing_of_Resplendence, 'Start'),
      withPriority(MiracleMagicGirl.Blessing_of_Inner_Blaze, 'Mandatory F2'),
      withPriority(MiracleMagicGirl.Blessing_of_Stellar_Breach, 'Mandatory'),
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter, 'CORE'),
      Signets_of_Decimation_Kalpas.Homeland_and_Friends,
      withPriority(Signets_of_Decimation_Kalpas.Body_Bones_Heart_and_Soul, 'After Other Cores'),
      withPriority(Signets_of_Decimation_Kalpas.Death_Life_Oblivion_and_Existence, 'Optional'),
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anatman,
      Signets_of_Bodhi_Su.Maxim_of_Santam,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_Helix, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
      Signets_of_Helix_VillV.Puppetry_Interlacing_Cells,
    ],

    [
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Fuji,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Black__Dark,
    ],
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
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy],
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build2;
