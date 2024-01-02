import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const ShadowKnight: valkeryType = {
  label: 'Shadow Knight (SK)',
  image: 'Shadow Knight',
  build: [build1],
  type: 3,
  tier: 3.5,
  minRank: 4,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default ShadowKnight;
