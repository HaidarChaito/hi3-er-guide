import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const ChronoNavi: Valkery = {
  label: 'Chrono Navi',
  image: 'https://i.pximg.net/img-original/img/2020/02/14/23/01/13/79491688_p0.png',
  build: [build1],
  minRank: 3,
  type: 4,
  tier: 5,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default ChronoNavi;
