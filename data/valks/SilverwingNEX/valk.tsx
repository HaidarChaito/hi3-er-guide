import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const SilverwingNEX: valkeryType = {
  label: 'Silverwing NEX (SW)',
  image: 'Silverwing NEX',
  build: [build1],
  type: 2,
  tier: 4,
  min_rank: 3,
  loadout_buffs: [
    { title: 0, selected: '' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default SilverwingNEX;
