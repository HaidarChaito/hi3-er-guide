import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const SweetnSpicy: Valkery = {
  label: 'Sweet n Spicy (SnS)',
  image: 'Sweet n Spicy',
  build: [build1],
  type: 1,
  tier: 2.5,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 15, selected: '' },
    { title: 15, selected: '' },
  ],

};
export default SweetnSpicy;
