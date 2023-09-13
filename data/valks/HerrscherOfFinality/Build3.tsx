import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';
import { Herrscher_of_Finality_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/tsx/Signets_of_Setsuna_Sakura';
import { withPriority } from '@/helpers/functions';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';


const build3: Build = {
    label: 'Hybrid Build',
    tier: 5,
    notes: 'This build is twice the efforts compared to the other builds and combines their strengths and makes full use of every ego signet, thanks to the use of cancels and low frame animation to stack rift stacks, performance will be greater at SS+ for the same reason mentioned in combo build, while it is stronger, it is designed for people with mastery over these mechanics and the higher variety of signets viability, is recommended for expert players that want to mald the perfect ego signet run. ',
    isNew: true,
    signets: [
      [
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_Condescension,'Start'),
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_High_Flames,'Start'),
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_Final_Moon,'F2 Ego'),
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_Rift,'1st'),
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_Clarity,'Optional'),
      ],

      [
        Signets_of_Helix_VillV.Act_II_Pendulum,
        Signets_of_Helix_VillV.Act_III_Conflict,
        Signets_of_Helix_VillV.Act_IV_Spoon,
        Signets_of_Helix_VillV.Intermezzo_Holistic_HelixCore,
        Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
      ],

      [
        Signets_of_Discipline_Aponia.Fourth_No_Insolence,
        Signets_of_Discipline_Aponia.Sixth_No_Decadence,
        Signets_of_Discipline_Aponia.Third_No_Brutality,
        Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
        Signets_of_Discipline_Aponia.You_Shall_Be_Subject_to_Numerous_DisciplinesCore,
        withPriority(Signets_of_Discipline_Aponia.You_Shall_Be_Witnessed_by_Thy_Heart,'Optional'),
    ],

   

    [
        Signets_of_Reverie_Pardofelis.Motto_of_Meow,
        Signets_of_Reverie_Pardofelis.BackCurled_Tail,
        Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
        Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore,
         ],

         [
            Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
            Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
            Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
            Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
            Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter,
          ],
          [
            Signets_of_Stars_Griseo.Red__Hot,
            Signets_of_Stars_Griseo.Yellow__Warm,
            Signets_of_Stars_Griseo.Black__Dark,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
            Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
        ],


        ],

    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Pseudo_Miracle, EmblemsImages.Because_of_You],
        [EmblemsImages.Veil_of_Tears, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
    ],
};

export default build3;