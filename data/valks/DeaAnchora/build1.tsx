import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Bright_Knight_Excelsis_Ego, Dea_Anchora_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 2,
  isNew: true,
  notes: 'BoY start is preferred, however, if you cannot clear F4 Double in time, take either IWBW or Dreamful Gold instead (Dreamful Gold has better chances at clearing), but if this is done, then you have to go Shop F5 and swap the Support Sigil for BoY to get the 2 Egos at F11. Bring BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Dea_Anchora_Ego.Blessing_of_Stars, 'Start'),
      withPriority(Dea_Anchora_Ego.Blessing_of_Gale, 'Start'),
      withPriority(Dea_Anchora_Ego.Blessing_of_Sheen, 'F2 Ego'),
      withPriority(Dea_Anchora_Ego.Blessing_of_Halo, '1st'),
      withPriority(Dea_Anchora_Ego.Blessing_of_Brilliance, '2nd'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
      Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Flock_of_the_Deliverer, 'Optional'),
    ],

    [
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_BlessingCore, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Punish_Evil,
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
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore, 'CORE'),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Yellow__Warm, 'Must Get'),
      withPriority(Signets_of_Stars_Griseo.Black__Dark, 'Optional'),
    ],

  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
      AvatarImages.Midnight_Absinthe_Avatar
    ],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Midnight_Absinthe_Avatar],
  ],
  emblems: [
    [
      EmblemsImages.Burden,
      EmblemsImages.Because_of_You,
      EmblemsImages.It_Will_Be_Written,
      EmblemsImages.Dreamful_Gold
    ],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ]
};

export default build1;
