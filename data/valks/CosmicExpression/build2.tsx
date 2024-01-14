import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { buildType } from '@/types/Build';
import { CosmicEmpression_Ego } from '@/data/signets/tsx/EgoAdditions';
import { withPriority } from '@/helpers/functions';
import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';

const build2: buildType = {
  label: 'Parry Build',
  tier: 2,
  gear: [],
  extra_notes: [
    {
      text: 'SEQUENCE: WA > Hold your parry button > While holding down the parry button, press attack for Combo 4 when the timefracture begins > Repeat',
    },
  ],

  notes:
    'Disclaimer this build feels janky is extremely weaker than the other, although looking braindead, this build needs to pay attention to the time fracture as it can be easily mistimed, ruining the SEQ 4 connect; Take BKE if you find yourself struggling with Heimdal',
  signets: [
    [
      withPriority(CosmicEmpression_Ego.Blessing_of_Meteorite, 'Start'),
      withPriority(CosmicEmpression_Ego.Blessing_of_Starlight, 'Start'),
      withPriority(CosmicEmpression_Ego.Blessing_of_Shining_Blade, 'F2 Optional'),
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
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Mask_of_the_Predator,
      Signets_of_Deliverance_Kevin.Pendant_of_the_Watcher,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
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
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Burden, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build2;
