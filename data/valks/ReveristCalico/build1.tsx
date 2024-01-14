import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Reverist_Calico_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { buildType } from '@/types/Build';

const build1: buildType = {
  label: 'Pardo1 Variation',
  tier: 3,
  gear: [
    {
      gearInfo: 'Purana Phantasma | Bastet/Willows TMB',
      is_budget_visible: false,
    },
    {
      gearInfo: 'Purana Phantasma / Any Highest ATK Chakram Statstick | Ana Schariac TMB',
      is_budget_visible: true,
    },
    {
      gearInfo:
        'Purana Phantasma / Any Highest ATK Chakram Statstick | Jin Shengtan TM Cecilia: Youth B',
      is_budget_visible: true,
    },
  ],
  extra_notes: [
    {
      text: 'SEQUENCE: Yellow Combo > Wep Active > Purple Combo > Breakdance (QTE) > Ult > Keep switching between both Combos and Breakdance till Ult comes off CD > Repeat.',
    },
  ],

  notes: 'Switch BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Reverist_Calico_Ego.Blessing_of_Hidden_Claws, 'Start'),
      withPriority(Reverist_Calico_Ego.Blessing_of_Cats_Eyes, 'Start'),
      withPriority(Reverist_Calico_Ego.Blessing_of_the_Tailpiece, 'Mandatory F2'),
      withPriority(Reverist_Calico_Ego.Blessing_of_Phantasma, 'Optional'),
    ],

    [
      Signets_of_Discipline_Aponia.Sixth_No_Decadence,
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Punish_Evil,
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
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      Signets_of_Reverie_Pardofelis.Shiny__Valuable,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Black__Dark,
      withPriority(Signets_of_Stars_Griseo.Blue__Cold, 'Optional'),
      withPriority(Signets_of_Stars_Griseo.Faded_Stars, 'CORE, Optional'),
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
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build1;
