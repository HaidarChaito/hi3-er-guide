import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const GoushinnsoMemento: Valkery = {
  label: 'Goushinnso Memento',
  image: 'hhttps://i.pximg.net/img-original/img/2022/08/26/13/39/05/100769212_p0.png',
  build: [build1],
  type: 2,
  tier: 1.5,
  minRank: 4,
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
export default GoushinnsoMemento;
