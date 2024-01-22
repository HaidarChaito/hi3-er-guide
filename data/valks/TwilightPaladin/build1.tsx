import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { buildType } from '@/types/Build';
import { Violet_Executer_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Daybreak_Kosma } from '@/data/signets/extra/extra';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';

const build1: buildType = {
  label: 'General Build',
  tier: 4,
  gear: [
    {
      gearInfo: 'Hekate Sombre | Kafka TMB',
      is_budget_visible: false,
    },
  ],
  extra_notes: [
    {
      text: 'SEQUENCE: Use Basic ATK SEQ until Bar is filled > Hold ATK to enter Fervent Mode > Deploy Cross > Ult > Spam ATK and Hold ATK when Hit Count reaches 300, or once Dusk is gotten, only spam ATK and Hold ATK when you have Polarized Agent Charges to deal massive damage. Keep using Ult to refresh Fervent Mode and avoid letting it end if possible.',
    },
  ],

  notes:
    'If you get an Ego door during your run, take it for Radiance yes or yes. Bring BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Violet_Executer_Ego.Blessing_of_Banishment, 'Start'),
      withPriority(Violet_Executer_Ego.Blessing_of_Penalty, 'Mandatory F2'),
      withPriority(Violet_Executer_Ego.Blessing_of_Dusk, 'Mandatory'),
      withPriority(Violet_Executer_Ego.Blessing_of_Radiance, 'Optional'),
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Santam,
      Signets_of_Bodhi_Su.Maxim_of_Anatman,
    ],

    [
      Signets_of_Daybreak_Kosma.Talons_that_Desecrate_the_Santuary_sic,
      Signets_of_Daybreak_Kosma.Wings_that_Mask_the_Sanguine_Moon,
      Signets_of_Daybreak_Kosma.Horns_that_Rip_the_Bleak_Sky,
      Signets_of_Daybreak_Kosma.Eyes_that_Overlook_the_Vicious_Abyss,
      withPriority(Signets_of_Daybreak_Kosma.Heart_that_Committed_Seven_Crimes, 'Optional'),
      withPriority(Signets_of_Daybreak_Kosma.Daybreak_an_Undying_Light, 'CORE'),
      Signets_of_Daybreak_Kosma.Undetermined_Judgement_sic,
      Signets_of_Daybreak_Kosma.Unwavering_Promise,
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

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
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
      EmblemsImages.Because_of_You,
      EmblemsImages.Empty_Like_Shala,
    ],
    [EmblemsImages.Fragile_Friend, EmblemsImages.Because_of_You, EmblemsImages.Out_of_Reach],
    [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
  ],
};

export default build1;
