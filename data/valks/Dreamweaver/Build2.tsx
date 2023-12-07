import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { BuildType } from '@/types/Build';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Dreamweaver_Ego } from '@/data/signets/tsx/EgoSignets';
import { withPriority } from '@/helpers/functions';
const build2: BuildType = {
  label: 'Astral Body Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Prophetic Dreams PRI | Alexandra TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Prophetic Dreams PRI | Bianka TM Ely B',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Prophetic Dreams | Elysia TB Dante M',
      isBudgetVisible: true,
    },
  ],
  notes: `In Elysian realm the number of stacks to use Kaleidescope (Charged attack) are raised to 8, you will need two full sequences and weapon skill to use it! One more weapon skill or full sequence with the 2nd Ego, make adjustment as necessary.`,
  isNew: true,
  bottomNotes: [
    {
      text: 'SEQUENCE: WA > SEQ attacks priority to reach the Kaleidescope stacks, playstyle revolves about being understanding how fast you can stack the kaleidescope stacks',
    },
  ],
  signets: [
    [
      withPriority(Dreamweaver_Ego.Blessing_of_Absoluteness, 'Start'),
      withPriority(Dreamweaver_Ego.Blessing_of_Legacy, 'Mandatory F2'),
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
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      withPriority(Signets_of_Helix_VillV.Interlude_Reversed_Spiral, 'CORE'),
    ],
    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_CetoPariyaNana,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anitya,
    ],
    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],
    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
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
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Faraway_Ship, EmblemsImages.Boundless_Logos],
  ],
};

export default build2;
