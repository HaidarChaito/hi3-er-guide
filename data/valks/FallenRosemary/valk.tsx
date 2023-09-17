import { Valkery } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const FallenRosemary: Valkery = {
  label: 'Fallen Rosemary',
  image: 'https://i.pximg.net/img-original/img/2020/09/04/16/37/48/84147101_p0.png',
  build: [build1, build2],
  type: 3,
  tier: 4.5,
  minRank: 3.2,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: '✓' },
    { title: 15, selected: ' ' },
  ],
};
export default FallenRosemary;
