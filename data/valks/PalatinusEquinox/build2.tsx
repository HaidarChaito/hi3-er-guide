import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Knight Form Build',
    tier: 4,
    isNew: true,
    notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
    signets: [],
    supports: [
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Memory, EmblemsImages.Hometown, EmblemsImages.Tsukimi_Himiko],
        [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy, EmblemsImages.Tsukimi_Himiko],
        [EmblemsImages.Tin_Flask, EmblemsImages.Tsukimi_Himiko],
    ]
};

export default build2;