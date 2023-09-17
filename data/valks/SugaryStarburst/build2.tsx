import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Sugary_Starburst_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Build } from '@/types/Build';


const build2: Build = {
  label: 'Ultimate Build',
  tier: 4,
  isNew: true,
  notes: 'Needs SS Rank minimum. Starter Signet depends on if Deliverance is +2 or not. If yes = Start with Kevin. If no = Start with Aponia. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [

    [
      withPriority(Sugary_Starburst_Ego.Blessing_of_Roller_Dance, 'Start'),
      withPriority(Sugary_Starburst_Ego.Blessing_of_Salute, 'Start'),
      withPriority(Sugary_Starburst_Ego.Blessing_of_Rhythm, 'Optional'),

    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
      Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
      withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,

    ],
    [
      Signets_of_Discipline_Aponia.Fourth_No_Insolence,
      Signets_of_Discipline_Aponia.Sixth_No_Decadence,
      Signets_of_Discipline_Aponia.Third_No_Brutality,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Be_Subject_to_Numerous_DisciplinesCore, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Be_Witnessed_by_Thy_Heart,],


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
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore, 'CORE'),
    ],
    [
      Signets_of_Stars_Griseo.Yellow__Warm,
    ],

  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Burden, EmblemsImages.It_Will_Be_Written, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Burden, EmblemsImages.Because_of_You, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ]
};

export default build2;
