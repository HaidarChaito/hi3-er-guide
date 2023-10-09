import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Spina_Astera_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 2.5,
  gear: [
    {
      gearInfo: 'Astral Divide: Pisces | Ragna TMB',
      isBudgetVisible: false,
    },
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Hold ATK to create Vortex > Hold ATK again for better Vortex (Bar turns yellow) > Wep Active into whole 1-5th Basic ATK Seq for 20 Stacks (Note to Ultimate Evasion as well; grants 5 stacks to reach 20 faster), then either reposition with Evade or Hold ATK for Rapier Stab into Ult > instant Rapier Stab. Always make sure you perform enough Basic ATK SEQ so everytime your purple bar is always full (no downtime).',
    },
  ],
  isNew: true,
  notes:
    'BoY start is preferred, if you cannot clear F4 Double in time, use Dreamful Gold instead and go shop F5 to swap BoY in. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Spina_Astera_Ego.Wild_Flare_Blessing, 'Start'),
      withPriority(Spina_Astera_Ego.Alrescha_Blessing, 'Mandatory'),
      withPriority(Spina_Astera_Ego.Radiant_Formation_Blessing, 'Mandatory'),
      withPriority(Spina_Astera_Ego.Holy_Flame_Blessing, 'Mandatory'),
      withPriority(Spina_Astera_Ego.Star_Quillon_Blessing, 'Mandatory'),
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
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
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
      Signets_of_Stars_Griseo.Black__Dark,
      Signets_of_Stars_Griseo.Blue__Cold,
      withPriority(Signets_of_Stars_Griseo.Faded_Stars, 'CORE'),
      Signets_of_Stars_Griseo.Petals_in_the_Wind,
    ],

    [
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
    ],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [
      EmblemsImages.Light_as_a_Bodhi_Leaf,
      EmblemsImages.Because_of_You,
      EmblemsImages.Dreamful_Gold,
    ],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Because_of_You, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build1;
