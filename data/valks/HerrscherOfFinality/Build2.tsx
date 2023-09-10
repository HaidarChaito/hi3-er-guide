import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Ult Build',
    tier: 1,
    isNew: true,
    signets: [],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Burden, EmblemsImages.Because_of_You, EmblemsImages.It_Will_Be_Written],
        [EmblemsImages.Veil_of_Tears, EmblemsImages.The_Lonely_Moon],
        [EmblemsImages.Tin_Flask, EmblemsImages.The_Lonely_Moon],
    ]
};

export default build2;