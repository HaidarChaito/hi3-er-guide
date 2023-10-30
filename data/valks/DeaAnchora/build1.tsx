import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Signets_of_Bodhi_Su, Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Dea_Anchora_Ego } from '@/data/signets/tsx/EgoSignets';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 2,
  gear: [
    {
      gearInfo: 'Saggitarius Astra | Shakespeare Adrift TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo: 'Saggitarius Astra | Little Joys TMB',
      isBudgetVisible: true,
    }
  ],
  bottomNotes: [
    {
      text: 'SEQUENCE: Normal DA gameplay. Spam Ultimate till full Bar > Hold ATK to enter Astral Harness > Spam Ult 2-3 times (3 times once Halo + Sheen are gotten) > Repeat.',
    },
  ],
  isNew: true,
  notes:
    'BoY start is preferred, however, you most likely will not be able to clear F4 Double in time without Kevin Support Skill. At F5 Shop, swap it out for Because of You to get your Egos at F11. Bring BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Dea_Anchora_Ego.Blessing_of_Stars, 'Start'),
      withPriority(Dea_Anchora_Ego.Blessing_of_Gale, 'Mandatory F2'),
      withPriority(Dea_Anchora_Ego.Blessing_of_Sheen, 'Mandatory'),
      withPriority(Dea_Anchora_Ego.Blessing_of_Halo, 'Mandatory'),
      withPriority(Dea_Anchora_Ego.Blessing_of_Brilliance, 'Optional'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
      Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Flock_of_the_Deliverer, 'Optional'),
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      withPriority(Signets_of_Bodhi_Su.Maxim_of_Santam, 'Optional'),
    ],

    [
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Punish_Evil,
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
      withPriority(Signets_of_Stars_Griseo.Yellow__Warm, 'Must Get'),
      withPriority(Signets_of_Stars_Griseo.Black__Dark, 'Optional'),
    ],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
      AvatarImages.Midnight_Absinthe_Avatar,
    ],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Midnight_Absinthe_Avatar],
  ],
  emblems: [
    [
      EmblemsImages.Burden,
      EmblemsImages.It_Will_Be_Written,
    ],
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Because_of_You],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build1;
