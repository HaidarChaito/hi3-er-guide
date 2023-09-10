import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Bombard Build',
    tier: 4,
    isNew: true,
    signets: [],
    notes: 'On Decimation +2 weathers, Kalpas start is better. If you cannot clear F4 Double with IWBW, go with TLM instead.',
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Burden, EmblemsImages.It_Will_Be_Written, EmblemsImages.The_Lonely_Moon],
        [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Dreamful_Gold, EmblemsImages.The_Lonely_Moon],
        [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
    ],
};

export default build2;