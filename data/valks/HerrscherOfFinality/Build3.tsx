import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build3: Build = {
    label: 'Hybrid Build',
    tier: 1,
    isNew: true,
    signets: [],
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