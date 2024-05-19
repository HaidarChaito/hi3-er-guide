import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const SpinaAstera: valkeryType = {
  label: 'Spina Astera (SpA)',
  image: 'Spina Astera',
  build: [build1],
  type: 4,
  tier: 2.5,
  min_rank: 3.2,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default SpinaAstera;
