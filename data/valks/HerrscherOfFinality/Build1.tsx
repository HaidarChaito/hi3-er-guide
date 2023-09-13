import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Finality_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';
import { withPriority } from '@/helpers/functions';

const build1: Build = {
  label: 'Combo Build',
  tier: 1,
  notes: 'Build that focus on damage through Combo attacks with high invulnerability frames, combo build gains massive performance increase from SS rank ability, which increase both ATF damage AND Combo damage as a whole. ATF Finisher is considered a combo, gaining massive spikes from SS and Ego signet "Condescension" synergy',
  isNew: true,
  signets: [
    [
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Condescension,'Start'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_High_Flames,'Start'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Clarity,'F2 Ego'),
      withPriority(Herrscher_of_Finality_Ego.Blessing_of_Final_Moon, 'Optional'),
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      Signets_of_Helix_VillV.Intermezzo_Holistic_HelixCore,
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_Bodhi,
      Signets_of_Bodhi_Su.Maxim_of_Anatman,
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore,
    ],

    [Signets_of_Stars_Griseo.Red__Hot],
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
      EmblemsImages.Pseudo_Miracle,
      EmblemsImages.Because_of_You,
      EmblemsImages.Falling_in_Past_Light,
    ],
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build1;
