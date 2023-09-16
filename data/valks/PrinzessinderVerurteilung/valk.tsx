import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const PrinzessinderVerurteilung: Valkery = {
  label: 'Prinzessin der Verurteilung',
  image: 'https://user-images.githubusercontent.com/114035701/203185665-d64d2dfe-b830-4348-a685-6a1a71cbf644.png',
  build: [build1],
  type: 3,
  tier: 2.5,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 5, selected: 'yes' },
    { title: 10, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'no' },
    { title: 15, selected: 'no' },
  ],
};
export default PrinzessinderVerurteilung;
