import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Soul Shaper Build',
    tier: 4.3,
    isNew: true,
    notes: 'You can swap BR for BK by F9/F10 Shop to have an easier time dealing with Heimdall.',
    signets: [],
    supports: [
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Empty_Like_Shala, EmblemsImages.Dreamful_Gold],
        [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
        [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
    ]
};

export default build2;