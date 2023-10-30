import { Valkery } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';
import build3 from './build3';

const HerrscherofThunder: Valkery = {
  label: 'Herrscher of Thunder (HoT)',
  image: 'Herrscher of Thunder',
  build: [build1, build2, build3],
  type: 3,
  tier: 3,
  minRank: 3.2,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '✓' },
  ],
};
export default HerrscherofThunder;
