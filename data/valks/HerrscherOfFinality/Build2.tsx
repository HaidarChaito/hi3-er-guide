import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Herrscher_of_Finality_Ego } from '@/data/signets/tsx/EgoSignets';
import { withPriority } from '@/helpers/functions';

const build2: Build = {
    label: 'Ult Build',
    tier: 1,
    notes:'Strong HoFinality build for general usages',
    isNew: true,
    signets:
    [
        [
            withPriority(Herrscher_of_Finality_Ego.Blessing_of_Final_Moon,'Start'),
            withPriority(Herrscher_of_Finality_Ego.Blessing_of_Rift,'Start'),
            withPriority(Herrscher_of_Finality_Ego.Blessing_of_Clarity,'Optional'),
        ],
      [
       Signets_of_Discipline_Aponia.Fourth_No_Insolence,
       Signets_of_Discipline_Aponia.Sixth_No_Decadence,
       Signets_of_Discipline_Aponia.Third_No_Brutality,
       Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
       Signets_of_Discipline_Aponia.You_Shall_Be_Subject_to_Numerous_DisciplinesCore,
       Signets_of_Discipline_Aponia.You_Shall_Be_Witnessed_by_Thy_Heart,],

      [
        Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
        Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
        Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
        Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer,
        Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,

      ],
    [
        Signets_of_Stars_Griseo.Red__Hot,
        Signets_of_Stars_Griseo.Yellow__Warm,
        Signets_of_Stars_Griseo.Black__Dark,
        Signets_of_Stars_Griseo.Shining_Like_StarsCore
    ],
    [
        Signets_of_Reverie_Pardofelis.Motto_of_Meow,
        Signets_of_Reverie_Pardofelis.BackCurled_Tail,
        Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
        Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore,
         ],
    [
        Signets_of_Helix_VillV.Act_II_Pendulum,
        Signets_of_Helix_VillV.Act_III_Conflict,
    ],
    ],
  
  
  
  
    
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Veil_of_Tears, EmblemsImages.Because_of_You, EmblemsImages.It_Will_Be_Written],
        [EmblemsImages.Burden, EmblemsImages.The_Lonely_Moon],
        [EmblemsImages.Tin_Flask, EmblemsImages.The_Lonely_Moon],
    ]
};

export default build2;