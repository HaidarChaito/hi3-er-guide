import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const ChronoNavi: Valkery = {
  label: 'Chrono Navi',
  image: 'https://i.pximg.net/img-original/img/2020/02/14/23/01/13/79491688_p0.png',
  build: [build1],
  type: 4,
  loadoutBuffs: [
    { title: 0, selected: 'yes' },
    { title: 5, selected: 'no' },
    { title: 5, selected: 'no' },
    { title: 10, selected: 'no' },
    { title: 15, selected: 'yes' },
    { title: 15, selected: 'yes' },
  ],
};
export default ChronoNavi;
