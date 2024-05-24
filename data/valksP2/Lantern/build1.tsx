import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Lantern_Ego } from '@/data/signets/tsx/EgoAdditions';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/priority';
import { buildType } from '@/types/Build';

const build1: buildType = {
  label: 'Stellar Outburst',
  gear: [
    {
      gearInfo: 'Burn the Long Night: Luminare | Lantern TMB',
    },
  ],
  extra_notes: [
    {
      text: 'Rotation: Supports -> Stellar Outburst -> Combo ATK -> Phantom -> Basic ATK to fill ke bar -> Jump + Combo -> Repeat! Ultimate as Needed after initial rotation',
    },
  ],

  signets: [
    [
      Lantern_Ego.Blessing_of_raging_fire,
      Lantern_Ego.Blessing_of_scorching_flames,
      withPriority(Lantern_Ego.Blessing_of_illuminated_night, 'optional'),
    ],
    [
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      Signets_of_Gold_Eden.Aria_of_Gold,
    ],
    [
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Dictum_of_Bodhi,
    ],
    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_V_Spider_Web,
      Signets_of_Helix_VillV.Intermezzo_Holistic_Helix,
      withPriority(Signets_of_Helix_VillV.Drama_Origin_of_Slumber, 'optional'),
      withPriority(Signets_of_Helix_VillV.Puppetry_Interlacing_Cells, 'optional'),
    ],
    [
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter,
    ],
    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy,
    ],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Gold_Goblet, EmblemsImages.Good_Old_Days],
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Heavy_as_a_Million_Lives],
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build1;
