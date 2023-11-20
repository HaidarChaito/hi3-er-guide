import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const TwilightPaladin: Valkery = {
  label: 'Twilight Paladin (TP)',
  image: 'Twilight Paladin',
  build: [build1],
  type: 1,
  tier: 4,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '' },
    { title: 15, selected: '✓' },
  ],
};
export default TwilightPaladin;
