import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Herrscher_of_Rebirth_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Build } from '@/types/Build';
import { withPriority } from '@/helpers/functions';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';

const build2: Build = {
  label: 'Soul Shaper Build',
  tier: 5,
  isNew: true,
  notes:
    'You can swap BR for BK by F9/F10 Shop to have an easier time dealing with Heimdall. Soul Shaper (Deer Support - Long haired) Herrscher of Rebirth build, focusses on dealing consistent high damaging high hit counting damage through holding your attack button.',
  bottomNotes: [
    {
      text: 'SEQUENCE: Dodge > Ult > Hold your attack button > Congratulations you have mastered this playstyle',
    },
  ],
  signets: [
    [
      withPriority(Herrscher_of_Rebirth_Ego.Blessing_of_Spirits, 'Start'),
      withPriority(Herrscher_of_Rebirth_Ego.Blessing_of_Rising_Sun, 'Start'),
      withPriority(Herrscher_of_Rebirth_Ego.Blessing_of_Shared_Destiny, 'Optional'),
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter, 'CORE'),
    ],

    [
      Signets_of_Infinity_Mobius.Lip_Poison_E,
      Signets_of_Infinity_Mobius.Entwined_P,
      Signets_of_Infinity_Mobius.Rodent_V,
      withPriority(Signets_of_Infinity_Mobius.Infinite_X, 'CORE'),
      Signets_of_Infinity_Mobius.Dead_X,
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anatman,
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Aria_of_Gold, 'CORE'),
      withPriority(Signets_of_Gold_Eden.Aria_of_Soil, 'Optional'),
      withPriority(Signets_of_Gold_Eden.Aria_of_Dawn, 'Optional'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
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
    [
      EmblemsImages.Light_as_a_Bodhi_Leaf,
      EmblemsImages.Empty_Like_Shala,
      EmblemsImages.Dreamful_Gold,
    ],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build2;
