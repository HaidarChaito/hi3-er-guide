import { valkeryType } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const ValkyrieQuicksand: valkeryType = {
  label: 'Valkyrie Quicksand (VQ)',
  image: 'Valkyrie Quicksand',
  build: [build1, build2],
  type: 1,
  tier: 4.5,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default ValkyrieQuicksand;
