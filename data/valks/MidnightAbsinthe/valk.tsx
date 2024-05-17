import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const MidnightAbsinthe: valkeryType = {
  label: 'Midnight Absinthe (Raven)',
  image: 'Midnight Absinthe',
  build: build1,
  type: 4,
  tier: 2,
  min_rank: 5,
  loadout_buffs: [
    { title: 0, selected: '✓ ' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default MidnightAbsinthe;
