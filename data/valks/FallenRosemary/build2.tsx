import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';
import FallenRosemary from './valk';
import { Fallen_Rosemary_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';

const build2: Build = {
  label: 'SS2+ Build',
  tier: 4,
  bottomNotes: [
    {
      text: 'SEQUENCE: Iris Pri Active > Evade into Charged > Ult (if have enough SP, otherwise do basics till enough) > Evade into Charged anim cancels (watch out for Bird Rune being on CD; it connects into Snake Rune) > Repeat until Ult is available again, then repeat Evade into Charged',
    },
  ],
  isNew: true,
  signets: [
    [
      withPriority(Fallen_Rosemary_Ego.Blessing_of_Valfreyja, 'Start'),
      withPriority(Fallen_Rosemary_Ego.Blessing_of_Nocturne, 'Start'),
      withPriority(Fallen_Rosemary_Ego.Blessing_of_God_Eater, 'Optional F2 Ego'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Echo_of_the_Deliverer, 'Optional'),
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Recitatif_of_Good_Wine, 'Optional'),
      withPriority(Signets_of_Gold_Eden.Echo_of_Gold, 'CORE'),
      Signets_of_Gold_Eden.Echo_of_Withered_Soil,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Answer_Prayers,
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Black__Dark,
      Signets_of_Stars_Griseo.Grey__Empty,
      withPriority(Signets_of_Stars_Griseo.Faded_Stars, 'CORE'),
    ],
  ],
  notes:
    'Build meant for FR above SS2+. BR instead of LE once you get Edens Initial/Max SP signet.',
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Lightning_Empress_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Lightning_Empress_Avatar,
      AvatarImages.Blood_Rose_Avatar,
    ],
  ],
  emblems: [
    [EmblemsImages.Burden, EmblemsImages.It_Will_Be_Written, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build2;
