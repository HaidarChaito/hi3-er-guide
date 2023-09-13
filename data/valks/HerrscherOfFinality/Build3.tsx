import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';
import { Herrscher_of_Finality_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { withPriority } from '@/helpers/functions';


const build3: Build = {
    label: 'Hybrid Build',
    tier: 1,
    notes: 'This build is twice the efforts compared to the other builds and combines their strengths and makes full use of every ego signet, thanks to the use of cancels and low frame animation to stack rift stacks, performance will be greater at SS+ for the same reason mentioned in combo build, while it is stronger, it is designed for people with mastery over these mechanics and the higher variety of signets viability, is recommended for expert players that want to mald the perfect ego signet run. ',
    isNew: true,
    signets: [
      [
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_Condescension,'1st'),
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_Final_Moon,'2nd'),
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_High_Flames,'3rd'),
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_Rift,'4th'),
         withPriority(Herrscher_of_Finality_Ego.Blessing_of_Clarity,'Optional'),
      ],

    ],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Veil_of_Tears, EmblemsImages.Out_of_Reach],
        [EmblemsImages.Fragile_Friend, EmblemsImages.Out_of_Reach],
        [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
    ],
};

export default build3;