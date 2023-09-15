import { Valkery } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const HerrscherofRebirth: Valkery = {
  label: 'Herrscher of Rebirth',
  image: 'https://user-images.githubusercontent.com/114035701/208253265-c16968a4-dfd0-4c0f-9f3d-d96b3daaa88a.png',
  build: [build1, build2],
  type: 1,
  loadoutBuffs: [
    { title: 0, selected: 'yes' },
    { title: 5, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 10, selected: 'yes' },
    { title: 10, selected: 'no' },
    { title: 15, selected: 'yes' },
    { title: 15, selected: 'no' },
  ],
};
export default HerrscherofRebirth;  
