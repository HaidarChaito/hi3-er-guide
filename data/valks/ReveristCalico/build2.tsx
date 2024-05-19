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

const build2: buildType = {
  label: 'Pardo2 Variation',
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

  notes:
    'Optionals are listed in priority of order! This strategy is capable of clearing Abstinence given the minimum recommended rank (S), but be warned that there are some things you have to keep in mind. For this variation, Awakening (Pardo Support Skill) is preferred to start with and use as part of the strategy; however, NOTE that the usage of Awakening is to get +999 coins from the Gacha Machine, and the odds for this are less than 1%, meaning that you can either have this happen early or after 15~30+ mins of resetting for this, with 5~7 attempts per retry. Starting with +999 from the Gacha Machine is the whole point, as it is the strongest start for this strat and allows it to scale hard. Its not recommended to try without it otherwise as Pardofelis signets give a very weak start. Also, the way this strategy works is that you need to get 3 Pardofelis Doors through F2, F3 and F4; its expected to not be able to get F4 Double Bonus in time, which is why this is done in order to guarantee you get Pardo2 done by F4 so you can then proceed with the build, then by F7 you ideally want to have your 2nd Core finished with a couple of good signets with perma or almost perma buff uptime to maximize your chances at getting past F8 Boss. Switch BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Reverist_Calico_Ego.Blessing_of_Hidden_Claws, 'Start'),
      withPriority(Reverist_Calico_Ego.Blessing_of_the_Tailpiece, 'Mandatory F2'),
      withPriority(Reverist_Calico_Ego.Blessing_of_Cats_Eyes, 'Optional'),
      withPriority(Reverist_Calico_Ego.Blessing_of_Phantasma, 'Optional'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Shiny__Valuable,
      Signets_of_Reverie_Pardofelis.Merchants_Philosophy,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Motto_of_Meow, 'Optional 1st, pref from Shop'),
      withPriority(Signets_of_Reverie_Pardofelis.BackCurled_Tail, 'Optional 2nd, pref from Shop'),
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Illusions_Empty_Fantasies, 'CORE'),
      Signets_of_Reverie_Pardofelis.Improv_Magic_Zeroing,
      Signets_of_Reverie_Pardofelis.Snowy_Paw,
      withPriority(Signets_of_Reverie_Pardofelis.My_Dreams_Will_Come_True, 'Optional'),
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
    [EmblemsImages.Feast_of_Emptiness, EmblemsImages.Awakening],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build2;
