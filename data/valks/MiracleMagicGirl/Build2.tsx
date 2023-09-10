import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Charged Spam Build',
    tier: 4.3,
    isNew: true,
    notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
    signets: [],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy],
        [EmblemsImages.Feast_of_Emptiness, EmblemsImages.Dreamful_Gold],
        [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
    ]
};

export default build2;