import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Build } from '@/types/Build';
import { withPriority } from '@/helpers/functions';
import { Sugary_Starburst_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';
const build1: Build = {
  label: 'Charged Spam Build',
  tier: 4.5,
  isNew: true,
  notes: 'Starter signet depends on whether Helix is +2 or not. If yes = Start with Vill-V. If no = Start with Aponia. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Sugary_Starburst_Ego.Blessing_of_Acoustic_Spectrum, 'Start'),
      withPriority(Sugary_Starburst_Ego.Blessing_of_Astral_Path, 'Start'),
      withPriority(Sugary_Starburst_Ego.Blessing_of_Rhythm, 'Optional'),
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_V_Spider_Web,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      Signets_of_Helix_VillV.Act_III_Conflict,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_HelixCore, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
    ],

    [
      Signets_of_Discipline_Aponia.Sixth_No_Decadence,
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_BlessingCore, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Punish_Evil,
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter, 'CORE'),
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore, 'CORE')
    ],

    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
    ],



  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ]
};

export default build1;
