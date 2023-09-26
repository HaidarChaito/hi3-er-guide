import { Valkery } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';
import build3 from './build3';

const HerrscherofRebirth: Valkery = {
  label: 'Herrscher of Rebirth (HoRb)',
  image: 'Herrscher of Rebirth',
  build: [build1, build2, build3,],
  type: 1,
  tier: 5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: '' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: ' ' },
    { title: 15, selected: '✓' },
    { title: 15, selected: ' ' },
  ],
};
export default HerrscherofRebirth;  
