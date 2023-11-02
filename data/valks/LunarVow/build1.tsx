import { Build } from '@/types/Build';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { withPriority } from '@/helpers/functions';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Lunar_Vow_Crimson_Love_Ego } from '@/data/signets/tsx/EgoSignets';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';

const build1: Build = {
  label: 'WA Spam Build',
  tier: 5,
  gear: [
    {
      gearInfo: 'Bloodied Casket PRI | Sweet Dreams TMB',
      isBudgetVisible: false,
    },
    {
      gearInfo:
        'Bloodied Casket PRI or Any High ATK Statstick Cross | Linnaeus TM/Zeno TM Handel/Zhenyi/Aladdin B',
      isBudgetVisible: true,
    },
    {
      gearInfo: 'Bloodied Casket PRI or Any High ATK Statstick Cross | Zhenyi TB Linn M ',
      isBudgetVisible: true,
    },
  ],
  isNew: true,
  notes:
    'Stronger than Basic ATK Build; the only downside that this build has is that it requires F2 Ego Reset in order to unlock its full strength and work properly, otherwise it lacks the damage. It also suffers from gather. You can swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  bottomNotes: [
    {
      text: 'SEQUENCE: Gather Mobs (with AE), then tap Flashing Wep Active > Spam Tap Wep Active until Frenzy Bar is depleted into Combo (can weave Ult in-between) > When Bar is depleted, manually charge it by Holding Wep Active OR use Ultimate for this if you have Divine Pact Ego.',
    },
  ],
  signets: [
    [
      withPriority(Lunar_Vow_Crimson_Love_Ego.Blessing_of_Chase, 'Start'),
      withPriority(Lunar_Vow_Crimson_Love_Ego.Blessing_of_Hermit, 'Mandatory F2'),
      withPriority(Lunar_Vow_Crimson_Love_Ego.Blessing_of_Divine_Pact, 'Optional'),
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_I_Magic,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_Helix, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
      Signets_of_Helix_VillV.Puppetry_Interlacing_Cells,
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter, 'CORE')
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anitya,
      withPriority(Signets_of_Bodhi_Su.Maxim_of_Anatman, 'Optional'),
      withPriority(Signets_of_Bodhi_Su.Maxim_of_Santam, 'Optional'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
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
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build1;
