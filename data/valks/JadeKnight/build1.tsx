import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'UBW Build',
  tier: 5,
  isNew: true,
  notes: 'Starting signet is whichever is +2. Bodhi +2 = Su start. Gold +2 = Eden start, then for Mid you go with whichever of these 2 wasnt started with. You can opt for swapping BR for BK by F9/F10 Shop to have an easier time against Heimdall.',
  signets: [],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Gold_Goblet, EmblemsImages.Empty_Like_Shala, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ]
};

export default build1;
