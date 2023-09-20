import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Stygian_Nymph_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 0,
  bottomNotes: [
    {
      text: 'SEQUENCE: Charged ATK connect into Evade through enemy (refill respective bar based on Saule or Veliona), do this twice (no UE Charges left) > Ult > Repeat.',
    },
  ],
  isNew: true,
  signets: [
    [
      withPriority(Stygian_Nymph_Ego.Blessing_of_Vulnerable_Duality, 'Start'),
      withPriority(Stygian_Nymph_Ego.Blessing_of_Intergrowth, 'Start'),
      withPriority(Stygian_Nymph_Ego.Blessing_of_Union, 'F2 Ego'),
      withPriority(Stygian_Nymph_Ego.Blessing_of_Kindred, 'Optional 1st'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Pendant_of_the_Watcher,
      Signets_of_Deliverance_Kevin.Mask_of_the_Predator,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Flock_of_the_Deliverer, 'Optional'),
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
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      withPriority(Signets_of_Discipline_Aponia.Third_No_Brutality, 'Optional'),
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Punish_Evil,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
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
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Burden, EmblemsImages.Tsukimi_Himiko],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Because_of_You, EmblemsImages.Tsukimi_Himiko],
    [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
  ],
};

export default build1;
