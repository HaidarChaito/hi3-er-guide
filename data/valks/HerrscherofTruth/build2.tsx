import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Truth_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Infinity_Mobius } from '@/data/signets/tsx/Signets_of_Infinity_Mobius';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/tsx/Signets_of_Setsuna_Sakura';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
    label: 'Ult Nuke Build',
    tier: 5,
    isNew: true,
    notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
    signets: [
        [
            withPriority(Herrscher_of_Truth_Ego.Blessing_of_Genuine_Solution, 'Start'),
            withPriority(Herrscher_of_Truth_Ego.Blessing_of_Intellect_Core, 'Start'),
            withPriority(Herrscher_of_Truth_Ego.Blessing_of_Vector, 'F2 Ego'),
        ],

        [
            Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
            Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
            Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
            Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
            withPriority(Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer, 'CORE'),
            Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
        ],

        [
            Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
            Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
            Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
            Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
            withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
            Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
            Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
        ],

        [
            Signets_of_Infinity_Mobius.Entwined_P,
            Signets_of_Infinity_Mobius.Rodent_V,
            Signets_of_Infinity_Mobius.Lip_Poison_E,
            withPriority(Signets_of_Infinity_Mobius.Infinite_X, 'CORE'),
            Signets_of_Infinity_Mobius.Dead_X,
            withPriority(Signets_of_Infinity_Mobius.Unknown_X, 'CORE'),
        ],

        [
            Signets_of_Reverie_Pardofelis.Motto_of_Meow,
            Signets_of_Reverie_Pardofelis.BackCurled_Tail,
            Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
            withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore, 'CORE'),
        ],

        [
            Signets_of_Helix_VillV.Act_V_Spider_Web,
            Signets_of_Helix_VillV.Act_II_Pendulum,
            Signets_of_Helix_VillV.Act_III_Conflict,
            Signets_of_Helix_VillV.Act_IV_Spoon,
            withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_HelixCore, 'CORE'),
            Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
        ],

        [
            Signets_of_Stars_Griseo.Red__Hot,
            Signets_of_Stars_Griseo.Yellow__Warm,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
            Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
        ],
    ],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [
            AvatarImages.Azure_Empyrea_Avatar,
            AvatarImages.Blood_Rose_Avatar,
            AvatarImages.Bright_Knight_Excelsis_Avatar
        ],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [
            EmblemsImages.Burden,
            EmblemsImages.It_Will_Be_Written,
            EmblemsImages.Boundless_Logos
        ],
        [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Boundless_Logos],
        [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
    ]
};

export default build1;