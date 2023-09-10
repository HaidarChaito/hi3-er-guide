import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 3,
  isNew: true,
  notes: 'You only swap LE out when you get Edens Initial/Max SP signet. Swap LE/SA for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [],
  supports: [
    [AvatarImages.Valkyrie_Chariot_Avatar, AvatarImages.Lightning_Empress_Avatar],
    [AvatarImages.Valkyrie_Chariot_Avatar, AvatarImages.Lightning_Empress_Avatar, AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Valkyrie_Chariot_Avatar, AvatarImages.Lightning_Empress_Avatar, AvatarImages.Starlit_Astrologos_Avatar],
  ],
  emblems: [
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Feeling],
  ]
};

export default build1;
