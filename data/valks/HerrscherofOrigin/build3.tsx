import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Origin_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { buildType } from '@/types/Build';

const build3: buildType = {
  label: 'Hybrid Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Domain of Unity | Raiden Mei TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Domain of Unity / Any Highest ATK Blade Statstick | Handel TMB',
      isBudgetVisible: true,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Evade (6s CD) into connect ATK > Active > Evade (Ultimate Evasion Skill) > 3 Twisted Origin Combo > Ult > 1st-3rd Basic SEQ into Evade cancel for 4 SEQ and fill 1 Twisted Origin > Repeat and modify as needed based on CDs (Delay the connection of WA, 6s Evade, UE Skill; you want to get 3 Twisted Origin everytime) > Repeat.',
    },
  ],
  isNew: true,
  notes:
    'An Old Pals Legacy for the +1 on Kalpas Signets. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Herrscher_of_Origin_Ego.Blessing_of_Expungement, 'Start'),
      withPriority(Herrscher_of_Origin_Ego.Blessing_of_Ultra, 'Mandatory F2'),
      withPriority(Herrscher_of_Origin_Ego.Blessing_of_Lethal_Smite, 'Mandatory'),
      withPriority(Herrscher_of_Origin_Ego.Blessing_of_Inscription, 'Mandatory'),
    ],

    [
      Signets_of_Helix_VillV.Act_V_Spider_Web,
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_Helix, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
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
    ],

    [
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
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
    [
      EmblemsImages.Pseudo_Miracle,
      EmblemsImages.Because_of_You,
      EmblemsImages.Falling_in_Past_Light,
    ],
    [
      EmblemsImages.Mad_Kings_Mask,
      EmblemsImages.Because_of_You,
      EmblemsImages.Falling_in_Past_Light,
    ],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build3;
