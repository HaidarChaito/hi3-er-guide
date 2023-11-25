import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Miss_Pink_Elf_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 3,
  gear: [
    {
      gearInfo: 'Whisper of the Past PRI | Elysia TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Whisper of the Past PRI / Any Highest ATK Bow Statstick | Kafka TM Michelangelo B',
      isBudgetVisible: true,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Wep Active into Charged cancel to instant Ult > Charged and spam Basic, weave Wep Active in-between to recover meter; always make sure you are not with 2 Wep Active charges remaining. Repeat.',
    },
  ],
  isNew: true,
  notes:
    'You only swap LE out when you get Edens Initial/Max SP signet. Swap LE/SA for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Miss_Pink_Elf_Ego.Blessing_of_Purity, 'Start'),
      withPriority(Miss_Pink_Elf_Ego.Blessing_of_Zenith, 'Start'),
      withPriority(Miss_Pink_Elf_Ego.Blessing_of_Beauty, 'Mandatory F2'),
    ],

    [
      Signets_of_Helix_VillV.Act_V_Spider_Web,
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      withPriority(Signets_of_Helix_VillV.Interlude_Reversed_Spiral, 'CORE'),
      Signets_of_Helix_VillV.Act_VIII_Adorned_Chamber,
      Signets_of_Helix_VillV.Act_VII_HalfClosed_Door,
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anitya,
      Signets_of_Bodhi_Su.Maxim_of_Santam,
      withPriority(Signets_of_Bodhi_Su.Maxim_of_Anatman, 'Optional'),
    ],

    [
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Answer_Prayers,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      withPriority(Signets_of_Gold_Eden.Recitatif_of_Fine_Jade, 'Optional'),
    ],
  ],
  supports: [
    [AvatarImages.Valkyrie_Chariot_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [
      AvatarImages.Valkyrie_Chariot_Avatar,
      AvatarImages.Lightning_Empress_Avatar,
      AvatarImages.Starlit_Astrologos_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [
      AvatarImages.Valkyrie_Chariot_Avatar,
      AvatarImages.Lightning_Empress_Avatar,
      AvatarImages.Starlit_Astrologos_Avatar,
    ],
  ],
  emblems: [
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Empty_Like_Shala, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Feeling],
  ],
};

export default build1;
