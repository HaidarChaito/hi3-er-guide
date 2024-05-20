import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Signets_of_Daybreak_Kosma } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { buildType } from '@/types/Build';
import { withPriority } from '@/helpers/priority';
import { CosmicEmpression_Ego } from '@/data/signets/tsx/EgoAdditions';

const build1: buildType = {
  label: 'Griseo Skywalker - Jedi Build',
  tier: 4.5,
  gear: [],
  extra_notes: [
    {
      text: 'SEQUENCE: Start of Floor (wait for enemies to spawn) > Dodge into SEQ 4 Connect > Automatic WA (Do not use it, the Ego signet automatically does it for you) > Ult whenever its flashing > Repeat - Read notes.',
    },
  ],

  notes:
    'Ultimate Evasion connects to SEQ 4 as does parry stance, "Blessing of Kiku" from Sakura smoothens the rotation loop massively. DO NOTE - DO NOT PRESS WA, OTHERWISE YOU WILL LOSE OUT ON DPS. IT WILL SELF ACTIVATE!',
  signets: [
    [
      withPriority(CosmicEmpression_Ego.Blessing_of_Anchor, 'Start'),
      withPriority(CosmicEmpression_Ego.Blessing_of_Dazzle, 'Start'),
      withPriority(CosmicEmpression_Ego.Blessing_of_Shining_Blade, 'F2 Optional'),
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

export default build1;
