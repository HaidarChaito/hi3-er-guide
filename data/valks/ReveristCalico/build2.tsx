import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
    label: 'Pardo2 Variation',
    tier: 3.3,
    isNew: true,
    notes: 'For this variation, Awakening is preferred to start with and use as part of the strategy. Its not recommended to try without it otherwise as Pardofelis signets give a very weak start. Switch BR for BK by F9/F10 Shop to deal with Heimdall.',
    signets: [],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Feast_of_Emptiness, EmblemsImages.Awakening],
        [EmblemsImages.Veil_of_Tears, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
    ]
};

export default build2;