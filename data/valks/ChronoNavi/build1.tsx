import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 5,
  isNew: true,
  notes: 'test',
  signets: [],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Because_of_You, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ]
};

export default build1;
