import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'Thanos Snap Build',
  tier: 4.2,
  isNew: true,
  notes: 'Choose between VC or BR as your 2nd staple support choice. It depends on if you like staying at low HP for Kalpas signets or not. Bring BK by F9/F10 Shop to deal with Heimdall.',
  signets: [],
  supports: [
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Valkyrie_Chariot_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ]
};

export default build1;
