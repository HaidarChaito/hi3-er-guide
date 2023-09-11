import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Finality_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
    label: 'Combo Build',
    tier: 1,
    isNew: true,
    signets: [
        
        [Herrscher_of_Finality_Ego.Blessing_of_Condescension,
        Herrscher_of_Finality_Ego.Blessing_of_High_Flames,
        Herrscher_of_Finality_Ego.Blessing_of_Clarity,
        Herrscher_of_Finality_Ego.Blessing_of_Final_Moon],

        [Signets_of_Helix_VillV.Act_II_PendulumNormal,
        Signets_of_Helix_VillV.Act_III_ConflictNormal,
        Signets_of_Helix_VillV.Act_IV_SpoonNormal,
        Signets_of_Helix_VillV.Intermezzo_Holistic_HelixCore,
        Signets_of_Helix_VillV.Drama_Origin_of_SlumberEnhanced],

        [Signets_of_Bodhi_Su.Motto_of_DibbaCakkhuNormalNormal_Signet_of_Bodhi,
        Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussatiNormalNormal_Signet_of_Bodhi,
        Signets_of_Bodhi_Su.Motto_of_AsavakkhayaNormalNormal_Signet_of_Bodhi,
        Signets_of_Bodhi_Su.Motto_of_BodhiCoreNexus_Signet_of_Bodhi,
        Signets_of_Bodhi_Su.Maxim_of_AnatmanEnhancedNormal_Signet_of_Bodhi],

        [Signets_of_Decimation_Kalpas.Blade_Grave_and_ScarNormalNormal_Signet_of_Decimation,
        Signets_of_Decimation_Kalpas.Bone_Blood_and_RibbonNormalNormal_Signet_of_Decimation,
        Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_FateNormalNormal_Signet_of_Decimation,
        Signets_of_Decimation_Kalpas.Desireless_Mindless_and_HomelessNormalNormal_Signet_of_Decimation,
        Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_SlaughterCoreNexus_Signet_of_Decimation,

        ],

        [Signets_of_Reverie_Pardofelis.Motto_of_MeowNormal,
        Signets_of_Reverie_Pardofelis.BackCurled_TailNormal,
        Signets_of_Reverie_Pardofelis.Neighborhood_ChattersNormal,
        Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore,
        ],

        [Signets_of_Stars_Griseo.Red__HotNormal,
        ]
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Pseudo_Miracle, EmblemsImages.Because_of_You, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Veil_of_Tears, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
    ],
};

export default build1;
