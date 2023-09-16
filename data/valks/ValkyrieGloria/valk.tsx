import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const ValkyrieGloria: Valkery = {
  label: 'Valkyrie Gloria',
  image: 'https://user-images.githubusercontent.com/114035701/203185665-d64d2dfe-b830-4348-a685-6a1a71cbf644.png',
  build: [build1],
  type: 4,
  tier: 1,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 5, selected: 'no' },
    { title: 10, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'no' },
    { title: 15, selected: 'yes' },
  ],
};
export default ValkyrieGloria;
