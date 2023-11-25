import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Sentience_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su, Signets_of_Deliverance_Kevin, Signets_of_Discipline_Aponia, Signets_of_Gold_Eden, Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'Victory Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Domain of Sentience | Pericles TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Incredibly Infinite Intimidator | Pericles TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Domain of Sentience/Brick | Shattered Swords TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Domain of Sentience/Brick | Sirin Ascendant TMB',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Domain of Sentience/Brick | SirinA/Dirac T Pericles MB',
      isBudgetVisible: true,
    },
  ],
  bottomNotes: [
    {
      text: 'Spear Combo > Connect Evade into Chain Combo > Sword Combo OR Ult > Tap Ult for Pillar > Spam Bonk and use Pillar if needed for gather (but preferentially do not use mid-Victory Combo otherwise you interrupt the DMG spike), once out of Ult, either instantly Ult again or farm SP for it.',
    },
  ],
  isNew: true,
  notes: 'This build strictly wants to use HoS old weapon (Domain of Sentience) over Brick, as this build is focused on the Ego Signet Victory, and Senpri is the BiS for this build over Brick. Do also note, however, that this build is better over Brick as long as you have Pericles TMB; without it, HoS lacks the perfect Crit Rate for Victory to crit at all times. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Herrscher_of_Sentience_Ego.Blessing_of_Victory, 'Start'),
      withPriority(Herrscher_of_Sentience_Ego.Blessing_of_Ego, 'Mandatory F2'),
      withPriority(Herrscher_of_Sentience_Ego.Blessing_of_Legion, 'Optional'),
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
      Signets_of_Gold_Eden.Echo_of_Silent_Night,
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

export default build1;