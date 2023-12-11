import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const GoushinnsoMemento: Valkery = {
  label: 'Goushinnso Memento (Meme)',
  image: 'Goushinnso Memento',
  build: [build1],
  type: 2,
  tier: 1.5,
  minRank: 4,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '' },
    { title: 10, selected: '✓' },
    { title: 15, selected: '✓ ' },
    { title: 15, selected: '' },
  ],
};
export default GoushinnsoMemento;
