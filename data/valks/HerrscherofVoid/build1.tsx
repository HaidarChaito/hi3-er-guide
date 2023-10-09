import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_the_Void_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'Thanos Snap Build',
  tier: 4.5,
  gear: [
    {
      gearInfo: 'Domain of Void | Sirin Ascendant TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Domain of Void | Elysia TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Domain of Void | Kafka/Michelangelo TB Elysia/SirinA M',
      isBudgetVisible: true,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Hold ATK (Enter Herrscher Form) > KoV/DoV Active > Evade > Basic and wait 1 sec for WA CD > WA into Evade > Repeat. When needed, use Basics into Space Core for the CDs.',
    },
  ],
  isNew: true,
  notes:
    'Optional Ego signets are listed in priority of order! Choose between VC or BR as your 2nd staple support choice. It depends on if you like staying at low HP for Kalpas signets or not. Bring BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Herrscher_of_the_Void_Ego.Blessing_of_Innateness, 'Start'),
      withPriority(Herrscher_of_the_Void_Ego.Blessing_of_Coleus, 'Mandatory F2'),
      withPriority(Herrscher_of_the_Void_Ego.Blessing_of_Virtuality, 'Optional'),
      withPriority(Herrscher_of_the_Void_Ego.Blessing_of_Annihilation, 'Optional'),
    ],

    [
      Signets_of_Helix_VillV.Act_V_Spider_Web,
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      withPriority(Signets_of_Helix_VillV.Act_IV_Spoon, 'wants Annihilation Ego'),
      withPriority(Signets_of_Helix_VillV.Interlude_Reversed_Spiral, 'CORE'),
      Signets_of_Helix_VillV.Act_VII_HalfClosed_Door,
      Signets_of_Helix_VillV.Act_VIII_Adorned_Chamber,
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
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
    ],

    [
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Fuji,
      withPriority(Signets_of_Setsuna_Sakura.Setsuna_Blade_Sakura_ni_Maku, 'CORE'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
    ],
  ],
  supports: [
    [
      AvatarImages.Starlit_Astrologos_Avatar,
      AvatarImages.Valkyrie_Chariot_Avatar,
      AvatarImages.Blood_Rose_Avatar,
    ],
    [
      AvatarImages.Starlit_Astrologos_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build1;
