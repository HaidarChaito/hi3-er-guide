import { Valkery } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const HerrscherofVoid: Valkery = {
  label: 'Herrscher of Void (HoV)',
  image: 'Herrscher of Void',
  build: [build1, build2],
  type: 1,
  tier: 4,
  minRank: 4.1,
  loadoutBuffs: [
    { title: 0, selected: '✓ ' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '' },
    { title: 10, selected: '✓' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '✓' },
  ],
};
export default HerrscherofVoid;
