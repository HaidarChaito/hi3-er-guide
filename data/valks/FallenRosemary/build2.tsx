import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'SS2+ Build',
    tier: 4.2,
    isNew: true,
    signets: [],
    notes: 'BR instead of LE once you get Edens Initial/Max SP signet.',
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Burden, EmblemsImages.It_Will_Be_Written, EmblemsImages.Dreamful_Gold],
        [EmblemsImages.Veil_of_Tears, EmblemsImages.Dreamful_Gold],
        [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
    ]
};

export default build2;