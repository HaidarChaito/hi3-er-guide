import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const StygianNymph: valkeryType = {
  label: 'Stygian Nymph (SN)',
  image: 'Stygian Nymph',
  build: [build1],
  type: 1,
  tier: 1,
  minRank: 4,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default StygianNymph;
