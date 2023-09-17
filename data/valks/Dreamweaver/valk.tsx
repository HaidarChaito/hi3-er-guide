import { Valkery } from '@/types/Valkery';
import build1 from './Build1';
import build2 from './Build2';

const Dreamweaver: Valkery = {
  label: 'Dreamweaver',
  image: 'https://i.pximg.net/img-original/img/2023/05/06/16/30/44/107872172_p0.jpg',
  build: [build1, build2],
  type: 1,
  tier: 5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: '✓' },
    { title: 15, selected: ' ' },
  ],
};
export default Dreamweaver;