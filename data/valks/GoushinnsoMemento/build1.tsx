import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Goushinnso_Memento_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Daybreak_Kosma } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Vicissitude_Hua } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 2,
  gear: [
    {
      gearInfo: 'Frozen Naraka | Willows/Ana Schariac TMB',
      isBudgetVisible: false,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Wep Active > Combo until SP is enough for Ult > Ult into Combo Spam > Repeat. Use Evade to reposition for the Zankeki to hit enemies properly. With kalpas start, remember to lower your HP before next floor with blood rose or on the shops floor, interacting with the shop will reset support valkyrie CD, allowing to lower your hp quickly!',
    },
  ],
  isNew: true,
  notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Goushinnso_Memento_Ego.Blessing_of_Whiteout, 'Start'),
      withPriority(Goushinnso_Memento_Ego.Blessing_of_Flourish, 'Start'),
      withPriority(Goushinnso_Memento_Ego.Blessing_of_Haste, 'F2 Ego'),
      withPriority(Goushinnso_Memento_Ego.Blessing_of_Frozen_Cloud, 'Optional'),
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      withPriority(Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity, 'After Hua2'),
      withPriority(Signets_of_Decimation_Kalpas.Inhuman_Unevil_and_Ungodly, 'After Kosma2'),
    ],

    [
      Signets_of_Vicissitude_Hua.Long_Trip,
      Signets_of_Vicissitude_Hua.Dark_Garb_No_More,
      Signets_of_Vicissitude_Hua.Old_Dreams_Again,
      withPriority(Signets_of_Vicissitude_Hua.Suffering_Mass, 'CORE'),
      withPriority(Signets_of_Vicissitude_Hua.Broken_Dream, 'Optional'),
    ],

    [
      Signets_of_Daybreak_Kosma.Wings_that_Mask_the_Sanguine_Moon,
      Signets_of_Daybreak_Kosma.Talons_that_Desecrate_the_Santuary_sic,
      Signets_of_Daybreak_Kosma.Horns_that_Rip_the_Bleak_Sky,
      Signets_of_Daybreak_Kosma.Eyes_that_Overlook_the_Vicious_Abyss,
      withPriority(Signets_of_Daybreak_Kosma.Heart_that_Committed_Seven_Crimes, 'Optional'),
      withPriority(Signets_of_Daybreak_Kosma.Daybreak_Lone_Beacon, 'CORE'),
      Signets_of_Daybreak_Kosma.Heart_Unshakable_Character,
      Signets_of_Daybreak_Kosma.Choice_Ensuing_Regret,
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
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Out_of_Reach],
    [EmblemsImages.Fragile_Friend, EmblemsImages.Out_of_Reach],
    [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
  ],
};

export default build1;
