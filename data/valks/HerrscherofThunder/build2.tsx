import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Herrscher_of_Thunder_Ego } from '@/data/signets/tsx/EgoSignets';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { buildType } from '@/types/Build';

const build2: buildType = {
  label: 'Bombard Build',
  tier: 4,
  gear: [
    {
      gearInfo: '7 Thunders of Retribution | Handel TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: '7 Thunders of Retribution | Benares: Awakening TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: '7 Thunders of Retribution | Zhenyi TB Handel/BennyA M',
      isBudgetVisible: true,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Evade into 7T Active > Basic ATK till Shinzan > Ult > 7T Active into Bombard > Spam Basics until Tornado to recharge Bar > Bombard till Ult Mode duration almost done > Finisher > Repeat.',
    },
  ],
  isNew: true,
  notes:
    'Needs SS0 Rank, otherwise it doesnt work. On Decimation +2 weathers, Kalpas start is better. If you cannot clear F4 Double with IWBW, go with Dreamful Gold instead.',
  signets: [
    [
      withPriority(Herrscher_of_Thunder_Ego.Blessing_of_Divine_Penalty, 'Start'),
      withPriority(Herrscher_of_Thunder_Ego.Blessing_of_Mitama, 'Mandatory F2'),
      withPriority(Herrscher_of_Thunder_Ego.Blessing_of_Tsukuyomi, 'Mandatory'),
    ],
    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
      withPriority(Signets_of_Deliverance_Kevin.Shadow_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Dream_of_the_Deliverer,
      Signets_of_Deliverance_Kevin.Resolve_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Triumph_of_the_Deliverer, 'Optional'),
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
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
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
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      Signets_of_Stars_Griseo.Yellow__Warm,
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
    [EmblemsImages.Burden, EmblemsImages.It_Will_Be_Written, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Dreamful_Gold, EmblemsImages.The_Lonely_Moon],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build2;
