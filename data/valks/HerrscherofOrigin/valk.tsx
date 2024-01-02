import { valkeryType } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';
import build3 from './build3';

const HerrscherofOrigin: valkeryType = {
  label: 'Herrscher of Origin (HoO)',
  image: 'Herrscher of Origin',
  build: [build1, build2, build3],
  type: 3,
  tier: 4.5,
  minRank: 3,
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
export default HerrscherofOrigin;
