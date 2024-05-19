import { valkeryType } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const HerrscherofVoid: valkeryType = {
  label: 'Herrscher of Void (HoV)',
  image: 'Herrscher of Void',
  build: [build1, build2],
  type: 1,
  tier: 4,
  min_rank: 4.1,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default HerrscherofVoid;
