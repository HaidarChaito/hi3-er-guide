import { Valkery } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';
import build3 from './build3';

const HerrscherofOrigin: Valkery = {
  label: 'Herrscher of Origin',
  image: 'https://i.pximg.net/img-original/img/2022/02/19/12/40/34/96360935_p0.png',
  build: [build1, build2, build3],
  type: 3,
  tier: 4.5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 5, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'no' },
    { title: 15, selected: 'no' },
  ],
};
export default HerrscherofOrigin;
