import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Herrscher_of_Rebirth_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Build } from '@/types/Build';
import { withPriority } from '@/helpers/functions';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';

const build3: Build = {
  label: 'Decay Build',
  tier: 4,
  isNew: true,
  gear: [
    {
      gearInfo: 'Life Harvester: Shared Destiny | Seele: Herrscher of Rebirth TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Life Harvester: Shared Destiny / Highest ATK Scythe Statstick | Sirin Ascendant TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Life Harvester: Shared Destiny / Highest ATK Scythe Statstick | Shattered Swords TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Life Harvester: Shared Destiny / Highest ATK Scythe Statstick | Elysia TB Dante M / Other Variants',
      isBudgetVisible: true,
    }
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Dodge > Ult > Swap to Life Binder Form > Dodges(Ultimate Evasion stacks reliant)/Attacks till bar full > Combo attack x2 > Repeat',
    },
  ],
  notes:
    'You can swap BR for BK by F9/F10 Shop to have an easier time dealing with Heimdall. Decay build, focusses on spamming sequence attack and dodges with Setsuna support to use the powerful combo attack as much as possible. With kalpas start, remember to lower your HP before next floor with blood rose or on the shops floor, interacting with the shop will reset support valkyrie CD, allowing to lower your hp quickly!',
  signets: [
    [
      withPriority(Herrscher_of_Rebirth_Ego.Blessing_of_Decay, 'Start'),
      withPriority(Herrscher_of_Rebirth_Ego.Blessing_of_Shared_Destiny, 'Optional'),
    ],
    [
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Fuji,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Kiku,
      withPriority(Signets_of_Setsuna_Sakura.Setsuna_Blade_Yasha, 'CORE'),
    ],
    [
      Signets_of_Infinity_Mobius.Lip_Poison_E,
      Signets_of_Infinity_Mobius.Entwined_P,
      Signets_of_Infinity_Mobius.Rodent_V,
      withPriority(Signets_of_Infinity_Mobius.Infinite_X, 'CORE'),
      Signets_of_Infinity_Mobius.Dead_X,
    ],
    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter, 'CORE'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
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
    [EmblemsImages.Forget_Me_Not, EmblemsImages.Tsukimi_Himiko],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build3;
