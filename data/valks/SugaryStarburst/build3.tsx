import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build3: Build = {
    label: 'Hybrid Build',
    tier: 4.3,
    isNew: true,
    signets: [],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Pseudo_Miracle, EmblemsImages.Because_of_You, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Burden, EmblemsImages.Because_of_You, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
    ]
};

export default build3;