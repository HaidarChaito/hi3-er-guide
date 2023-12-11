import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Jade_Knight_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { BuildType } from '@/types/Build';

const build1: BuildType = {
  label: 'UBW Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Nocturnal Stealth: Beam | Shenzhou Remembrance TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Any Highest ATK Fists Statstick | Willows/Ana Schariac TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Any Highest ATK Fists Statstick | Jin Shengtan TM & Any useable B piece',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Any Highest ATK Fists Statstick | Scott TMB',
    },
  ],
  isNew: true,
  notes:
    'Starting signet is whichever is +2. Bodhi +2 = Su start. Gold +2 = Eden start, then for Mid you go with whichever of these 2 wasnt started with. You can opt for swapping BR for BK by F9/F10 Shop to have an easier time against Heimdall.',
  bottomNotes: [
    {
      text: 'SEQUENCE: Do a meele base attack for the loadout > Ult > Combo attack > Spam attacks till your bar is almost empty > Combo attack > Repeat',
    },
  ],
  signets: [
    [
      withPriority(Jade_Knight_Ego.Blessing_of_Great_Blade, 'Start'),
      withPriority(Jade_Knight_Ego.Blessing_of_Cloudwalker, 'Mandatory F2'),
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Dictum_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Dictum_of_Santam,
      Signets_of_Bodhi_Su.Dictum_of_Anatman,
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Echo_of_Gold, 'CORE'),
      withPriority(Signets_of_Gold_Eden.Echo_of_Withered_Soil, 'Optional'),
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
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
    ],
  ],
  supports: [
    [AvatarImages.Lightning_Empress_Avatar, AvatarImages.Blood_Rose_Avatar],
    [
      AvatarImages.Lightning_Empress_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Lightning_Empress_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [
      EmblemsImages.Light_as_a_Bodhi_Leaf,
      EmblemsImages.Gold_Goblet,
      EmblemsImages.Empty_Like_Shala,
      EmblemsImages.Dreamful_Gold,
    ],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build1;
