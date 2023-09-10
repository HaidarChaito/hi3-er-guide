import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 2,
  isNew: true,
  signets: [],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar, AvatarImages.Midnight_Absinthe_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Midnight_Absinthe_Avatar],
  ],
  emblems: [
    [EmblemsImages.Burden, EmblemsImages.Because_of_You, EmblemsImages.It_Will_Be_Written, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ]
};

export default build1;
