import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 2,
  isNew: true,
  signets: [],
  supports: [
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Burden, EmblemsImages.Tsukimi_Himiko],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Because_of_You, EmblemsImages.Tsukimi_Himiko],
    [EmblemsImages.Tin_Flask, EmblemsImages.Out_of_Reach],
  ]
};

export default build1;
