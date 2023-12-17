import { valkeryType } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const FallenRosemary: valkeryType = {
  label: 'Fallen Rosemary (FR)',
  image: 'Fallen Rosemary',
  build: [build1, build2],
  type: 3,
  tier: 4.5,
  minRank: 3.2,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '' },
    { title: 5, selected: '' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default FallenRosemary;
