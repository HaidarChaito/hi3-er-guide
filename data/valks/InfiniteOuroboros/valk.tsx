import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const InfiniteOuroboros: Valkery = {
  label: 'Infinite Ouroboros (Mobius)',
  image: 'Infinite Ouroboros',
  build: [build1],
  type: 3,
  tier: 4.5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 10, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '✓' },
  ],
};
export default InfiniteOuroboros;
