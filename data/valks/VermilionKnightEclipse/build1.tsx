import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Vermilion_Knight_Eclipse_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/tsx/Signets_of_Setsuna_Sakura';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'Charged Spam Build',
  tier: 4.2,
  isNew: true,
  signets: [
    [
      withPriority(Vermilion_Knight_Eclipse_Ego.Blessing_of_Blaze, 'Start'),
      withPriority(Vermilion_Knight_Eclipse_Ego.Blessing_of_Sharp_Flames, 'F2 Ego'),
      withPriority(Vermilion_Knight_Eclipse_Ego.Blessing_of_Wild_Flare, '1st'),
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation,
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      Signets_of_Bodhi_Su.Motto_of_Bodhi,
      Signets_of_Bodhi_Su.Maxim_of_Anitya,
      Signets_of_Bodhi_Su.Maxim_of_Santam,
      withPriority(Signets_of_Bodhi_Su.Maxim_of_Anatman, 'Optional'),
    ],

    [
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_BlessingCore,
      Signets_of_Discipline_Aponia.You_Shall_Answer_Prayers
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore,
    ],

    [
      Signets_of_Stars_Griseo.Red__Hot,
      withPriority(Signets_of_Stars_Griseo.Yellow__Warm, 'Optional'),
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
    ],

  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ]
};

export default build1;
