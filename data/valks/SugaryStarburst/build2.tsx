import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build2: Build = {
  label: 'Ultimate Build',
  tier: 4.1,
  isNew: true,
  notes: 'Starter Signet depends on if Deliverance is +2 or not. If yes = Start with Kevin. If no = Start with Aponia. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Burden, EmblemsImages.It_Will_Be_Written, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Burden, EmblemsImages.Because_of_You, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ]
};

export default build2;
