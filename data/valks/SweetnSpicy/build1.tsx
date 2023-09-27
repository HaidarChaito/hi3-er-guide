import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Sweet_n_Spicy_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 2.5,
  gear: [
    {
      gearInfo: 'Miracle Pissy Killow | Paganini TMB',
      isBudgetVisible: false,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Charged till 3rd Stage (4th with Rupture) > Ult > Repeat. Can use Aerial Charged if need to gather or for Skyfall purposes.',
    },
  ],
  isNew: true,
  notes: 'You can bring BK by F9/F10 Shop to deal with Heimdall faster.',
  signets: [
    [
      withPriority(Sweet_n_Spicy_Ego.Blessing_of_Revolution, 'Start'),
      withPriority(Sweet_n_Spicy_Ego.Blessing_of_Brake, 'Start'),
      withPriority(Sweet_n_Spicy_Ego.Blessing_of_Rupture, 'F2 Ego'),
      withPriority(Sweet_n_Spicy_Ego.Blessing_of_Impulse, 'Optional 1st'),
      withPriority(Sweet_n_Spicy_Ego.Blessing_of_Skyfall, 'Optional 2nd'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Pendant_of_the_Watcher,
      Signets_of_Deliverance_Kevin.Mask_of_the_Predator,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Flock_of_the_Deliverer, 'Optional'),
    ],

    [
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Answer_Prayers,
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
      withPriority(Signets_of_Stars_Griseo.Yellow__Warm, 'Must Get'),
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'High Priority'),
      Signets_of_Stars_Griseo.Black__Dark,
      Signets_of_Stars_Griseo.Grey__Empty,
      withPriority(Signets_of_Stars_Griseo.Blue__Cold, 'Optional'),
      withPriority(Signets_of_Stars_Griseo.Faded_Stars, 'CORE, Not necessary'),
    ],
  ],
  supports: [
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    [
      AvatarImages.Starlit_Astrologos_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Burden, EmblemsImages.Because_of_You, EmblemsImages.It_Will_Be_Written],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build1;
