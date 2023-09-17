import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const SpinaAstera: Valkery = {
  label: 'Spina Astera',
  image: 'https://user-images.githubusercontent.com/114035701/203185665-d64d2dfe-b830-4348-a685-6a1a71cbf644.png',
  build: [build1],
  type: 4,
  tier: 2.5,
  minRank: 3.2,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '✓' },
  ],
};
export default SpinaAstera;
