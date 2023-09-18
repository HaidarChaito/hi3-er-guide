import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Golden_Diva_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Daybreak_Kosma } from '@/data/signets/tsx/Signets_of_Daybreak_Kosma';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 3,
  bottomNotes: [
    {
      text: 'SEQUENCE: Echo Pri Active > Basics till 6 Notes into Combo > Ult > Spam Basics till Ult comes off CD > Repeat.',
    },
  ],
  isNew: true,
  notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Golden_Diva_Ego.Blessing_of_Fugue, 'Start'),
      withPriority(Golden_Diva_Ego.Blessing_of_Arioso, 'Start'),
      withPriority(Golden_Diva_Ego.Blessing_of_Cadenza, 'F2 Ego'),
      withPriority(Golden_Diva_Ego.Blessing_of_Concerto, 'Optional'),
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      Signets_of_Gold_Eden.Recitatif_of_Good_Wine,
      withPriority(Signets_of_Gold_Eden.Aria_of_Gold, 'CORE'),
      Signets_of_Gold_Eden.Aria_of_Soil,
      Signets_of_Gold_Eden.Aria_of_Dawn,
    ],

    [
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      withPriority(Signets_of_Discipline_Aponia.Fourth_No_Insolence, 'Optional'),
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Punish_Evil,
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter, 'CORE'),
      Signets_of_Decimation_Kalpas.Homeland_and_Friends,
    ],

    [
      Signets_of_Daybreak_Kosma.Horns_that_Rip_the_Bleak_Sky,
      Signets_of_Daybreak_Kosma.Talons_that_Desecrate_the_Santuary_sic,
      Signets_of_Daybreak_Kosma.Wings_that_Mask_the_Sanguine_Moon,
      Signets_of_Daybreak_Kosma.Eyes_that_Overlook_the_Vicious_Abyss,
      withPriority(Signets_of_Daybreak_Kosma.Heart_that_Committed_Seven_Crimes, 'Optional'),
      withPriority(Signets_of_Daybreak_Kosma.Daybreak_Lone_Beacon, 'CORE'),
      Signets_of_Daybreak_Kosma.Heart_Unshakable_Character,
      withPriority(Signets_of_Daybreak_Kosma.Choice_Ensuing_Regret, 'Optional'),
    ],

    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
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
    [EmblemsImages.Gold_Goblet, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Out_of_Reach],
    [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
  ],
};

export default build1;
