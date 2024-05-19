import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const StygianNymph: valkeryType = {
  label: 'Stygian Nymph (SN)',
  image: 'Stygian Nymph',
  build: [build1],
  type: 1,
  tier: 1,
  min_rank: 4,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '' },
    { title: 5, selected: '' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default StygianNymph;
