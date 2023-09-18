import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const DeaAnchora: Valkery = {
  label: 'Dea Anchora (DA)',
  image: 'Dea Anchora',
  build: [build1],
  type: 4,
  tier: 2,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '✓' },
  ],
  minRank: 3,
};
export default DeaAnchora;
