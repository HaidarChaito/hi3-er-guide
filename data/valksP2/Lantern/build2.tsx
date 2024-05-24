import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Lantern_Ego } from '@/data/signets/tsx/EgoAdditions';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/tsx/Signets_of_Setsuna_Sakura';
import { Signets_of_Vicissitude_Hua } from '@/data/signets/tsx/Signets_of_Vicissitude_Hua';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/priority';
import { buildType } from '@/types/Build';

const build2: buildType = {
  label: 'Fidget Spinner Build',
  gear: [
    {
      gearInfo: 'Burn the Long Night: Luminare | Lantern TMB',
    },
  ],
  extra_notes: [
    {
      text: 'Hold Evade key Use Directional Keys for Mobility Ultimate as needed to restore Ultimate Evasions  ( Needs 2nd Ego )',
    },
  ],

  signets: [
    [
      Lantern_Ego.Blessing_of_lazing_torch,
      Lantern_Ego.Blessing_of_luminance,
      withPriority(Lantern_Ego.Blessing_of_illuminated_night, 'optional'),
    ],
    [
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      Signets_of_Gold_Eden.Aria_of_Gold,
    ],
    [
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Fuji,
      Signets_of_Setsuna_Sakura.Setsuna_Blade_Sakura_ni_Maku,
    ],
    [
      Signets_of_Vicissitude_Hua.Dark_Garb_No_More,
      Signets_of_Vicissitude_Hua.Old_Dreams_Again,
      Signets_of_Vicissitude_Hua.Long_Trip,
      Signets_of_Vicissitude_Hua.Suffering_Mass,
      withPriority(Signets_of_Vicissitude_Hua.Broken_Dream, 'from shop'),
    ],

    [
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter,
    ],
    [
      Signets_of_Discipline_Aponia.Sixth_No_Decadence,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing,
    ],
    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy,
    ],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Gold_Goblet, EmblemsImages.Good_Old_Days],
    [EmblemsImages.Forget_Me_Not, EmblemsImages.Stained_Sakura],
    [EmblemsImages.Memory, EmblemsImages.Resolve],
  ],
};

export default build2;
