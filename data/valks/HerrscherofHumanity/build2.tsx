import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Ballista Build',
    tier: 4.3,
    isNew: true,
    signets: [],
    notes: 'Starting Support Skill is based on what is +2. Deliverance = IWBW, Decimation = AOPL, Helix = FPL.',
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Burden, EmblemsImages.It_Will_Be_Written, EmblemsImages.An_Old_Pals_Legacy, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
    ]
};

export default build2;