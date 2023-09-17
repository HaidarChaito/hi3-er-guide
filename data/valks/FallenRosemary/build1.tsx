import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Fallen_Rosemary_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: '<SS2 Build',
  tier: 4,
  isNew: true,
  signets: [
    [
      withPriority(Fallen_Rosemary_Ego.Blessing_of_Soul_Siphon, 'Start'),
      withPriority(Fallen_Rosemary_Ego.Blessing_of_Valfreyja, 'Start'),
      withPriority(Fallen_Rosemary_Ego.Blessing_of_Nocturne, 'F2 Ego'),
      withPriority(Fallen_Rosemary_Ego.Blessing_of_God_Eater, 'Optional 1st'),
      withPriority(Fallen_Rosemary_Ego.Blessing_of_Spirit_Servants, 'Optional 2nd'),
    ],

    [
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_BlessingCore, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Follow_Good,
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Good_Wine,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Aria_of_Gold, 'CORE'),
      Signets_of_Gold_Eden.Aria_of_Soil,
      Signets_of_Gold_Eden.Aria_of_Dawn,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore, 'CORE'),
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
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      Signets_of_Stars_Griseo.Yellow__Warm,
    ],

  ],
  notes: 'Build meant for FR below SS2 Rank. If you are having trouble clearing F4 Double in time with BoY start, use Dreamful Gold instead and go shop F5 to put BoY and get your 2 Ego signets by F11. Switch BR for BK by F9/F10 Shop to deal with Heimdall.',
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar
    ],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Blood_Rose_Avatar
    ],
  ],
  emblems: [
    [
      EmblemsImages.Veil_of_Tears,
      EmblemsImages.Because_of_You,
      EmblemsImages.Dreamful_Gold
    ],
    [EmblemsImages.Gold_Goblet, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build1;
