import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Ultimate Build',
    tier: 4.3,
    isNew: true,
    notes: 'The Starter depends on whether Helix is +2 or not. If yes = start with Vill-V. If no = start with Kosma. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
    signets: [],
    supports: [
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Fragile_Friend, EmblemsImages.Out_of_Reach],
        [EmblemsImages.Burden, EmblemsImages.Out_of_Reach],
        [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
    ]
};

export default build2;