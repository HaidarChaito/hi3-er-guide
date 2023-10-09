import { Valkery } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const VermilionKnightEclipse: Valkery = {
  label: 'Vermilion Knight Eclipse (VKE)',
  image: 'Vermilion Knight Eclipse',
  build: [build1, build2],
  type: 4,
  tier: 5,
  minRank: 3.2,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: ' ' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '✓' },
  ],
};
export default VermilionKnightEclipse;
