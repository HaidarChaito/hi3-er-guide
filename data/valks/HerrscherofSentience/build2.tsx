import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Ego Mobius Build',
    tier: 3.1,
    isNew: true,
    notes: 'Prioritize getting SP Regen signets ASAP or otherwise get Dark Plumes at F5 or any other point in the run. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
    signets: [],
    supports: [
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
        [EmblemsImages.Burden, EmblemsImages.Boundless_Logos],
        [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
    ]
};

export default build2;