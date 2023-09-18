import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';
import VermilionKnightEclipse from './valk';
import { Vermilion_Knight_Eclipse_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Signets_of_Discipline_Aponia } from '@/data/signets/tsx/Signets_of_Discipline_Aponia';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/tsx/Signets_of_Setsuna_Sakura';

const build2: Build = {
    label: 'Ultimate Build',
    tier: 5,
    bottomNotes: [
        {
            text: 'SEQUENCE: Spam Ultimate, but use Basics as needed to farm SP and keep using it, as well as make use of Evade connect to Guren Flash for free 20 SP (thanks to Burning Flow) and to regain Ult Charges. Use Uriel Active, always at 4 Stacks.',
        },
    ],
    isNew: true,
    signets: [
        [
            withPriority(Vermilion_Knight_Eclipse_Ego.Blessing_of_Fiery_Mind, 'Start'),
            withPriority(Vermilion_Knight_Eclipse_Ego.Blessing_of_Burning_Flow, 'Start'),
            withPriority(Vermilion_Knight_Eclipse_Ego.Blessing_of_Wild_Flare, 'F2 Ego'),
        ],

        [
            Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
            Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
            Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
            Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
            Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer,
            Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
            withPriority(Signets_of_Deliverance_Kevin.Flock_of_the_Deliverer, 'Optional'),
        ],

        [
            Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
            Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
            Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
            Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
            Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation,
            Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
            Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
        ],

        [
            Signets_of_Discipline_Aponia.Fourth_No_Insolence,
            Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
            Signets_of_Discipline_Aponia.Third_No_Brutality,
            Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_BlessingCore,
            Signets_of_Discipline_Aponia.You_Shall_Answer_Prayers
        ],

        [
            Signets_of_Reverie_Pardofelis.Motto_of_Meow,
            Signets_of_Reverie_Pardofelis.BackCurled_Tail,
            Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
            Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore,
        ],

        [
            Signets_of_Stars_Griseo.Red__Hot,
            Signets_of_Stars_Griseo.Yellow__Warm,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
        ],
    ],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy],
        [EmblemsImages.Burden, EmblemsImages.Dreamful_Gold],
        [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
    ]
};

export default build2;