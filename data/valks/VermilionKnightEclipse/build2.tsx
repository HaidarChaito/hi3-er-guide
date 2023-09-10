import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Ultimate Build',
    tier: 4.3,
    isNew: true,
    signets: [],
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