import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const SugaryStarburst: valkeryType = {
  label: 'Sugary Starburst (Kira)',
  image: 'Sugary Starburst',
  build: build1,
  type: 2,
  tier: 4.5,
  min_rank: 4,
  loadout_buffs: [
    { title: 0, selected: '' },
    { title: 5, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default SugaryStarburst;
