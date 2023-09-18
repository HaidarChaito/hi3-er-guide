import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const SpinaAstera: Valkery = {
  label: 'Spina Astera (SpA)',
  image: 'Spina Astera',
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
