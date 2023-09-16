import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const ArgentKnightArtemis: Valkery = {
  label: 'Argent Knight Artemis',
  image: 'https://i.pximg.net/img-original/img/2022/02/16/05/11/16/96290976_p5.jpg',
  build: [build1],
  type: 2,
  tier: 3,
  loadoutBuffs: [
    { title: 0, selected: 'no' },
    { title: 5, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 10, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'yes' },
    { title: 15, selected: 'no' },
  ],
  minRank: 4,
};
export default ArgentKnightArtemis;
