import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Molotov_Cherry_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { buildType } from '@/types/Build';

const build1: buildType = {
  label: 'General Build',
  tier: 4,
  gear: [
    {
      gearInfo: 'Sleepers Dream | Michelangelo TB Dante M',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Sleepers Dream | Bianka Theatre TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Sleepers Dream | Elysia TB Dante/Polo M',
      isBudgetVisible: true,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Weave Evades and Basics to fill Juice Meter, when full perform Charged > Sleepri Active into Ult > Spam Basics until Sleepri Active and Ult are both off CD and repeat.',
    },
  ],
  isNew: true,
  notes:
    'LE is used in order to help with FTs SP problems during the first 4 floors. If you cannot clear F4 Double in time with IWBW, use Dreamful Gold instead. If a 4th Elysia door appears during your run, grab it for Fervor. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Molotov_Cherry_Ego.Blessing_of_the_Silence, 'Start'),
      withPriority(Molotov_Cherry_Ego.Blessing_of_Mixing, 'Mandatory F2'),
      withPriority(Molotov_Cherry_Ego.Blessing_of_Thorns, 'Mandatory'),
      withPriority(Molotov_Cherry_Ego.Blessing_of_Fervor, 'Optional'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Pendant_of_the_Watcher,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      Signets_of_Deliverance_Kevin.Mask_of_the_Predator,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Flock_of_the_Deliverer, 'Optional'),
    ],

    [
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      withPriority(Signets_of_Discipline_Aponia.Third_No_Brutality, 'Optional'),
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Answer_Prayers,
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
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      withPriority(Signets_of_Stars_Griseo.Yellow__Warm, 'High Priority'),
    ],
  ],
  supports: [
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [
      AvatarImages.Starlit_Astrologos_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Burden, EmblemsImages.Because_of_You, EmblemsImages.It_Will_Be_Written],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Because_of_You, EmblemsImages.An_Old_Pals_Legacy],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build1;
