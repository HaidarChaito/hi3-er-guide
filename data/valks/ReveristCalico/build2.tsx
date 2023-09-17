import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Reverist_Calico_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Pardo2 Variation',
    tier: 3,
    isNew: true,
    notes: 'This strategy is capable of clearing Abstinence given the minimum recommended rank. For this variation, Awakening is preferred to start with and use as part of the strategy. Its not recommended to try without it otherwise as Pardofelis signets give a very weak start. Also, the way this strategy works is that you need to get 3 Pardofelis Doors through F2, F3 and F4; its expected to not be able to get F4 Double Bonus in time, which is why this is done in order to guarantee you get Pardo2 done by F4 so you can then proceed with the build. Switch BR for BK by F9/F10 Shop to deal with Heimdall.',
    signets: [
        [
            withPriority(Reverist_Calico_Ego.Blessing_of_Hidden_Claws, 'Start'),
            withPriority(Reverist_Calico_Ego.Blessing_of_the_Tailpiece, 'Start'),
            withPriority(Reverist_Calico_Ego.Blessing_of_Cats_Eyes, 'Optional 1st'),
            withPriority(Reverist_Calico_Ego.Blessing_of_Phantasma, 'Optional 2nd'),
        ],

        [
            Signets_of_Reverie_Pardofelis.Shiny__Valuable,
            Signets_of_Reverie_Pardofelis.Merchants_Philosophy,
            Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
            withPriority(Signets_of_Reverie_Pardofelis.Motto_of_Meow, 'Optional 1st, pref from Shop'),
            withPriority(Signets_of_Reverie_Pardofelis.BackCurled_Tail, 'Optional 2nd, pref from Shop'),
            withPriority(Signets_of_Reverie_Pardofelis.Empty_Illusions_Empty_FantasiesCore, 'CORE'),
            Signets_of_Reverie_Pardofelis.Improv_Magic_Zeroing,
            Signets_of_Reverie_Pardofelis.Snowy_Paw,
            withPriority(Signets_of_Reverie_Pardofelis.My_Dreams_Will_Come_True, 'Optional'),
        ],

        [
            Signets_of_Helix_VillV.Act_II_Pendulum,
            Signets_of_Helix_VillV.Act_III_Conflict,
            Signets_of_Helix_VillV.Act_IV_Spoon,
            withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_HelixCore, 'CORE'),
            Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
            Signets_of_Helix_VillV.Puppetry_Interlacing_Cells,
        ],

        [
            Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
            Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
            Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
            Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
            withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
            Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
            Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
        ],

        [
            Signets_of_Discipline_Aponia.Sixth_No_Decadence,
            Signets_of_Discipline_Aponia.First_No_Betrayal,
            Signets_of_Discipline_Aponia.Third_No_Brutality,
            withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_BlessingCore, 'CORE'),
            Signets_of_Discipline_Aponia.You_Shall_Punish_Evil,
        ],

        [
            withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
            Signets_of_Stars_Griseo.Yellow__Warm,
            Signets_of_Stars_Griseo.Black__Dark,
            withPriority(Signets_of_Stars_Griseo.Blue__Cold, 'Optional'),
            withPriority(Signets_of_Stars_Griseo.Faded_StarsCore, 'CORE, Optional'),
        ],
    ],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Feast_of_Emptiness, EmblemsImages.Awakening],
        [EmblemsImages.Veil_of_Tears, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
    ]
};

export default build2;