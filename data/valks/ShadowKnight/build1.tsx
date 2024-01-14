import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Shadow_Knight_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Vicissitude_Hua } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { buildType } from '@/types/Build';

const build1: buildType = {
  label: 'General Build',
  tier: 3.5,
  gear: [
    {
      gearInfo: 'Nuadas Revenge | Zeno TMB',
      is_budget_visible: false,
    },
    {
      gearInfo: 'Nuadas Revenge | Handel TMB / Raiden Mei T Handel MB',
      is_budget_visible: true,
    },
  ],
  extra_notes: [
    {
      text: 'SEQUENCE: Evade into Hold Ult to enter Burst Mode > Wep Active > Evade into Oraora and repeat whenever Evade comes off CD. When Ult runs out, farm SP again to repeat.',
    },
  ],

  notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Shadow_Knight_Ego.Blessing_of_Forces, 'Start'),
      withPriority(Shadow_Knight_Ego.Blessing_of_Lunar_Eclipse, 'Start'),
      withPriority(Shadow_Knight_Ego.Blessing_of_Mindfulness, 'Mandatory F2'),
      withPriority(Shadow_Knight_Ego.Blessing_of_Six_Fists, 'Optional'),
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
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Answer_Prayers,
    ],

    [
      Signets_of_Vicissitude_Hua.Long_Trip,
      Signets_of_Vicissitude_Hua.Dark_Garb_No_More,
      Signets_of_Vicissitude_Hua.Old_Dreams_Again,
      withPriority(Signets_of_Vicissitude_Hua.Suffering_Mass, 'CORE'),
      withPriority(Signets_of_Vicissitude_Hua.Broken_Dream, 'Optional'),
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      withPriority(Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity, 'Optional'),
    ],

    [Signets_of_Stars_Griseo.Red__Hot, Signets_of_Stars_Griseo.Yellow__Warm],
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
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Empty_Like_Shala],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build1;
