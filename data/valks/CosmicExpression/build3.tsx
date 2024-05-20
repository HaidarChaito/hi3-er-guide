import { AvatarImages } from '@/data/supports/AvatarImages.g';
import {
  Signets_of_Daybreak_Kosma,
  Signets_of_Decimation_Kalpas,
} from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { buildType } from '@/types/Build';
import { withPriority } from '@/helpers/priority';
import { CosmicEmpression_Ego } from '@/data/signets/tsx/EgoAdditions';

const build3: buildType = {
  label: 'Jediseo with Meteorites',
  tier: 5,
  gear: [],
  extra_notes: [
    {
      text: 'SEQUENCE: Start of Floor > Dodge into SEQ 4 Connect > Automatic WA (Do not press it) into Ult when it isnt on CD and is flashing > Repeat. Do not worry about Combo actually hitting, Meteorite Signet will automatically fill the meter for you. - Repeat - Read notes. This build takes the best of both worlds between Parry and Jedi standard build - being the best build available for Griseo.',
    },
  ],

  notes: 'DO NOTE - DO NOT PRESS WA, OTHERWISE YOU WILL LOSE OUT ON DPS. IT WILL SELF ACTIVATE!',
  signets: [
    [
      withPriority(CosmicEmpression_Ego.Blessing_of_Anchor, 'Start'),
      withPriority(CosmicEmpression_Ego.Blessing_of_Dazzle, 'Start'),
      withPriority(CosmicEmpression_Ego.Blessing_of_Meteorite, 'F2 Mandatory'),
      withPriority(CosmicEmpression_Ego.Blessing_of_Shining_Blade, 'Optional'),
    ],

    [
      Signets_of_Daybreak_Kosma.Wings_that_Mask_the_Sanguine_Moon,
      Signets_of_Daybreak_Kosma.Talons_that_Desecrate_the_Santuary_sic,
      Signets_of_Daybreak_Kosma.Horns_that_Rip_the_Bleak_Sky,
      Signets_of_Daybreak_Kosma.Eyes_that_Overlook_the_Vicious_Abyss,
      withPriority(Signets_of_Daybreak_Kosma.Heart_that_Committed_Seven_Crimes, 'Optional'),
      withPriority(Signets_of_Daybreak_Kosma.Daybreak_an_Undying_Light, 'CORE'),
      withPriority(Signets_of_Daybreak_Kosma.Undetermined_Judgement_sic, 'Optional'),
      withPriority(Signets_of_Daybreak_Kosma.Unwavering_Promise, 'Optional'),
    ],
    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_I_Magic,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      withPriority(Signets_of_Helix_VillV.Interlude_Reversed_Spiral, 'CORE'),
      Signets_of_Helix_VillV.Act_VII_HalfClosed_Door,
      Signets_of_Helix_VillV.Act_VIII_Adorned_Chamber,
    ],

    [
      Signets_of_Infinity_Mobius.Entwined_P,
      Signets_of_Infinity_Mobius.Lip_Poison_E,
      Signets_of_Infinity_Mobius.Rodent_V,
      withPriority(Signets_of_Infinity_Mobius.Infinite_X, 'CORE'),
      Signets_of_Infinity_Mobius.Dead_X,
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
      withPriority(Signets_of_Setsuna_Sakura.Bountiful_Blossom_Kiku, 'Must get'),
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      Signets_of_Stars_Griseo.Yellow__Warm,
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
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Out_of_Reach],
    [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
  ],
};

export default build3;
