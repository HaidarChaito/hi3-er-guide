import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Starry_Impression_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Daybreak_Kosma } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { buildType } from '@/types/Build';

const build1: buildType = {
  label: 'General Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Elysian Astra | Cezanne TMB',
      is_budget_visible: false,
    },
    {
      gearInfo: 'Any Highest ATK Cross Statstick | Susannah Overtime T Aladdin MB',
      is_budget_visible: true,
    },
    {
      gearInfo: 'Any Highest ATK Cross Statstick | Elysia TB Dante M',
      is_budget_visible: true,
    },
  ],
  extra_notes: [
    {
      text: 'SEQUENCE: Deploy Cross > Ult > Evade (Once Cloud Valley is gotten) into gather and 3 taps of Ult. At 5 Color Markers, Hold ATK for Combo and repeat, use Cross and Ult again accordingly as they come off CD.',
    },
  ],

  notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Starry_Impression_Ego.Blessing_of_Starry_Night, 'Start'),
      withPriority(Starry_Impression_Ego.Blessing_of_River_Forest, 'Start'),
      withPriority(Starry_Impression_Ego.Blessing_of_Cloud_Valley, 'Mandatory F2'),
      withPriority(Starry_Impression_Ego.Blessing_of_Azure_Wind, 'Optional'),
    ],

    [
      Signets_of_Daybreak_Kosma.Wings_that_Mask_the_Sanguine_Moon,
      Signets_of_Daybreak_Kosma.Talons_that_Desecrate_the_Santuary_sic,
      Signets_of_Daybreak_Kosma.Horns_that_Rip_the_Bleak_Sky,
      Signets_of_Daybreak_Kosma.Eyes_that_Overlook_the_Vicious_Abyss,
      withPriority(Signets_of_Daybreak_Kosma.Heart_that_Committed_Seven_Crimes, 'Optional'),
      withPriority(Signets_of_Daybreak_Kosma.Daybreak_an_Undying_Light, 'CORE'),
      Signets_of_Daybreak_Kosma.Undetermined_Judgement_sic,
      Signets_of_Daybreak_Kosma.Unwavering_Promise,
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      withPriority(Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity, 'Optional'),
    ],

    [
      Signets_of_Infinity_Mobius.Entwined_P,
      Signets_of_Infinity_Mobius.Rodent_V,
      Signets_of_Infinity_Mobius.Lip_Poison_E,
      withPriority(Signets_of_Infinity_Mobius.Infinite_X, 'CORE'),
      Signets_of_Infinity_Mobius.Dead_X,
      withPriority(Signets_of_Infinity_Mobius.Unknown_X, 'Optional'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      withPriority(Signets_of_Stars_Griseo.Yellow__Warm, 'Optional'),
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
    [
      AvatarImages.Starlit_Astrologos_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Fragile_Friend, EmblemsImages.Out_of_Reach],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build1;
