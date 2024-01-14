import { valkeryType } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const HerrscherofTruth: valkeryType = {
  label: 'Herrscher of Truth (HoTr)',
  image: 'Herrscher of Truth',
  build: [build1, build2],
  type: 2,
  tier: 5,
  min_rank: 3,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '✓ ' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '' },
  ],
};
export default HerrscherofTruth;
