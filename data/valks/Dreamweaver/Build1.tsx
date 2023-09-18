import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';
import { Signets_of_Infinity_Mobius } from '@/data/signets/tsx/Signets_of_Infinity_Mobius';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Dreamweaver_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { withPriority } from '@/helpers/functions';

const build1: Build = {
  label: 'Flag Build',
  tier: 5,
  isNew: true,
  notes:
    'This build uses the strong synergy between Kevin signets and Thousand thoughts ego signet to deal consistent high damage through Dreamweaver ideas, this build is considered the easiest and the strongest of the two.',
  bottomNotes: [
    {
      text: 'SEQUENCE: SEQ 4 or WA Sequence, they both produce similar results, make sure to never miss your SEQ 4',
    },
  ],
  signets: [
    [
      withPriority(Dreamweaver_Ego.Blessing_of_Thousand_Thoughts, 'Start'),
      withPriority(Dreamweaver_Ego.Blessing_of_Forms, 'Start'),
      withPriority(Dreamweaver_Ego.Blessing_of_Oneiromancy, 'Optional'),
    ],

    [
      Signets_of_Infinity_Mobius.Lip_Poison_E,
      Signets_of_Infinity_Mobius.Entwined_P,
      Signets_of_Infinity_Mobius.Rodent_V,
      withPriority(Signets_of_Infinity_Mobius.Infinite_M, 'CORE'),
      Signets_of_Infinity_Mobius.Immortal_M,
      Signets_of_Infinity_Mobius.Collapsed_M,
      Signets_of_Infinity_Mobius.Sacrificial_M,
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Mask_of_the_Predator,
      Signets_of_Deliverance_Kevin.Pendant_of_the_Watcher,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_V_Spider_Web,
      withPriority(Signets_of_Helix_VillV.Interlude_Reversed_Spiral, 'CORE'),
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Aria_of_Gold, 'CORE'),
    ],
    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Aria_of_Gold, 'CORE'),
    ],

    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Black__Dark,
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
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
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Burden, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Faraway_Ship, EmblemsImages.Boundless_Logos],
  ],
};

export default build1;
