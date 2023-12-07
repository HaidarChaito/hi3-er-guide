import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Sentience_Ego } from '@/data/signets/tsx/EgoSignets';
import {
  Signets_of_Deliverance_Kevin,
  Signets_of_Discipline_Aponia,
  Signets_of_Gold_Eden,
  Signets_of_Infinity_Mobius,
} from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { BuildType } from '@/types/Build';

const build2: BuildType = {
  label: 'Ego Brick Build',
  tier: 4.5,
  gear: [
    {
      gearInfo: 'Incredibly Infinite Intimidator | Pericles TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Incredibly Infinite Intimidator | Shattered Swords TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Incredibly Infinite Intimidator | Sirin Ascendant TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Incredibly Infinite Intimidator | SirinA/Dirac T Pericles MB',
      isBudgetVisible: true,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Spear Combo (gather all mobs) > Evade into Chain Combo > Wep Active > Supports into Ult > Tap Ult for Kick > Tap ATK 10 times for whole Combo into EITHER second Kick + one Combo into Finisher or just Finisher (this latter only when damage is enough to finish off a wave).',
    },
  ],
  isNew: true,
  notes:
    'Assuming full Pericles, Brick is weaker than Domain of Sentience & Victory combo. Also, this build is capable of functioning with just 1 Ego only if you want. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Herrscher_of_Sentience_Ego.Blessing_of_Ego, 'Start'),
      withPriority(Herrscher_of_Sentience_Ego.Blessing_of_Legion, 'Optional Mandatory F2'),
      withPriority(Herrscher_of_Sentience_Ego.Blessing_of_Supremacy, 'Optional'),
    ],

    [
      Signets_of_Infinity_Mobius.Entwined_P,
      Signets_of_Infinity_Mobius.Lip_Poison_E,
      Signets_of_Infinity_Mobius.Rodent_V,
      withPriority(Signets_of_Infinity_Mobius.Lodging_C, 'Optional'),
      withPriority(Signets_of_Infinity_Mobius.Infinite_X, 'CORE'),
      Signets_of_Infinity_Mobius.Dead_X,
      withPriority(Signets_of_Infinity_Mobius.Unknown_X, 'Optional'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Pendant_of_the_Watcher,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      withPriority(Signets_of_Deliverance_Kevin.Mask_of_the_Predator, 'Optional, From Shop'),
      withPriority(Signets_of_Deliverance_Kevin.Shadow_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Dream_of_the_Deliverer,
    ],

    [
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Punish_Evil,
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Echo_of_Gold, 'CORE'),
      withPriority(Signets_of_Gold_Eden.Echo_of_Withered_Soil, 'Optional'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Grey__Empty,
      withPriority(Signets_of_Stars_Griseo.Faded_Stars, 'CORE, Not Necessary'),
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
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build2;
