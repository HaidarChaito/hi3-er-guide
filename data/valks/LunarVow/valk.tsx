import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const LunarVow: Valkery = {
  label: 'LunarVow (LV)',
  image: 'Lunar Vow',
  build: [build1],
  type: 1,
  tier: 1,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '✓' },
  ],
};
export default LunarVow;
