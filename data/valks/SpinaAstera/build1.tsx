import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 3,
  isNew: true,
  notes: 'BoY start is preferred, if you cannot clear F4 Double in time, use Dreamful Gold instead and go shop F5 to swap BoY in. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Because_of_You, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Because_of_You, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ]
};

export default build1;
