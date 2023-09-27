import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Palatinus_Equinox_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Vicissitude_Hua } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build2: Build = {
  label: 'Knight Form Build',
  tier: 4,
  gear: [
    {
      gearInfo: 'Midnight Ataegina | Bianka Theatre TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Midnight Ataegina | Ely TB Dante M',
      isBudgetVisible: true,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Ride Horse > Hold ATK until depleting all bar > Evade and repeat > once out of UE Charges, use Ult to refresh them. If missing SP, swap into Guardian Form for extra 12 SP to Ult and change back again, repeat whole process.',
    },
  ],
  isNew: true,
  notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Palatinus_Equinox_Ego.Gallop_Blessing, 'Start'),
      withPriority(Palatinus_Equinox_Ego.Abyssal_Chant_Blessing, 'Start'),
      withPriority(Palatinus_Equinox_Ego.Equinox_Blessing, 'F2 Ego'),
    ],

    [
      Signets_of_Vicissitude_Hua.Long_Trip,
      Signets_of_Vicissitude_Hua.Days_Gone,
      Signets_of_Vicissitude_Hua.No_One_to_Share,
      withPriority(Signets_of_Vicissitude_Hua.Suffering_Mass, 'CORE'),
      Signets_of_Vicissitude_Hua.Broken_Dream,
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
      Signets_of_Decimation_Kalpas.Inhuman_Unevil_and_Ungodly,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Fuji,
      withPriority(
        Signets_of_Setsuna_Sakura.Setsuna_Blade_Sakura_ni_Maku,
        'CORE Optional, no need'
      ),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Optional'),
      withPriority(Signets_of_Stars_Griseo.Yellow__Warm, 'Optional'),
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
    [EmblemsImages.Memory, EmblemsImages.Hometown, EmblemsImages.Tsukimi_Himiko],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy, EmblemsImages.Tsukimi_Himiko],
    [EmblemsImages.Tin_Flask, EmblemsImages.Tsukimi_Himiko],
  ],
};

export default build2;
