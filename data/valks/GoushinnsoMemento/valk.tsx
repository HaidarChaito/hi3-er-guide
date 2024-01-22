import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const GoushinnsoMemento: valkeryType = {
  label: 'Goushinnso Memento (Meme)',
  image: 'Goushinnso Memento',
  build: [build1],
  type: 2,
  tier: 1.5,
  min_rank: 4,
  loadout_buffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '✓ (Only if using Muramasa Bloodlust tech)' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default GoushinnsoMemento;
