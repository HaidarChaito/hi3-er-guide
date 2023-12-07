import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Ritual_Imayoh_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { BuildType } from '@/types/Build';

const build1: BuildType = {
  label: 'General Build',
  tier: 3,
  gear: [
    {
      gearInfo: 'Domain of Void | Elysia TMB / Elysia TB Dante M',
      isBudgetVisible: false,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Evade into Basic till 3 full bars and repeat. Use Ult for Kevin & Mobius and for I-frames.',
    },
  ],
  isNew: true,
  notes: 'BK is a MUST by F9/F10 Shop, otherwise RI cannot deal with Heimdall.',
  signets: [
    [
      withPriority(Ritual_Imayoh_Ego.Blessing_of_Prosperity, 'Start'),
      withPriority(Ritual_Imayoh_Ego.Blessing_of_Dawn, 'Mandatory F2'),
      withPriority(Ritual_Imayoh_Ego.Blessing_of_Blossom, 'Mandatory'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Pendant_of_the_Watcher,
      Signets_of_Deliverance_Kevin.Mask_of_the_Predator,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Flock_of_the_Deliverer, 'Optional'),
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

    [Signets_of_Stars_Griseo.Red__Hot, Signets_of_Stars_Griseo.Yellow__Warm],
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
    [EmblemsImages.Burden, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build1;
