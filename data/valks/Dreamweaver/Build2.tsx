import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';
import { Signets_of_Infinity_Mobius } from '@/data/signets/tsx/Signets_of_Infinity_Mobius';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';
import { Dreamweaver_Ego } from '@/data/signets/tsx/EgoSignets';
import { withPriority } from '@/helpers/functions';
const build2: Build = {
    label: 'Astral Body Build',
    tier: 5,
    notes: `In Elysian realm the number of stacks to use Kaleidescope (Charged attack) are raised to 8, you will need two full sequences and weapon skill to use it! One more weapon skill or full sequence with the 2nd Ego, make adjustment as necessary.`,
    isNew: true,
    signets: [

        [
          withPriority(Dreamweaver_Ego.Blessing_of_Absoluteness,'Start'),
          withPriority(Dreamweaver_Ego.Blessing_of_Legacy,'Start'),
          withPriority(Dreamweaver_Ego.Blessing_of_Oneiromancy,'Optional'),
        ],
[
    Signets_of_Infinity_Mobius.Lip_Poison_E,
    Signets_of_Infinity_Mobius.Entwined_P,
    Signets_of_Infinity_Mobius.Rodent_V,
    withPriority(Signets_of_Infinity_Mobius.Infinite_M,'CORE'),
    Signets_of_Infinity_Mobius.Immortal_M,
    Signets_of_Infinity_Mobius.Collapsed_M,
    Signets_of_Infinity_Mobius.Sacrificial_M,

],
[
    Signets_of_Helix_VillV.Act_II_Pendulum,
    Signets_of_Helix_VillV.Act_III_Conflict,
    Signets_of_Helix_VillV.Act_IV_Spoon,
    withPriority(Signets_of_Helix_VillV.Interlude_Reversed_SpiralCore,'CORE'),
],
[
    Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
    Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
    Signets_of_Bodhi_Su.Motto_of_CetoPariyaNana,
    withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi,'CORE'),
    Signets_of_Bodhi_Su.Maxim_of_Anitya,
],
[
    Signets_of_Reverie_Pardofelis.Motto_of_Meow,
    Signets_of_Reverie_Pardofelis.BackCurled_Tail,
    Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
    withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore,'CORE'),
  ],
  [
    Signets_of_Gold_Eden.Recitatif_of_Eden,
    Signets_of_Gold_Eden.Recitatif_of_Creeks,
    Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
],
    ],
    supports: [
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
        [EmblemsImages.Pseudo_Miracle, EmblemsImages.Boundless_Logos],
        [EmblemsImages.Faraway_Ship, EmblemsImages.Boundless_Logos],
    ]
};

export default build2;