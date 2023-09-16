import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const HerrscherofSentience: Valkery = {
  label: 'Herrscher of Sentience',
  image: 'https://user-images.githubusercontent.com/114035701/203185665-d64d2dfe-b830-4348-a685-6a1a71cbf644.png',
  build: [build1],
  type: 1,
  tier: 3.5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 5, selected: 'yes' },
    { title: 10, selected: 'yes' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'no' },
    { title: 15, selected: 'no' },
  ],
};
export default HerrscherofSentience;
