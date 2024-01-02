import { valkeryType } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';
import build3 from './build3';

const CosmicExpression: valkeryType = {
  label: 'Cosmic Expression (CE)',
  image: 'Cosmic Expression',
  build: [build1, build2, build3],
  minRank: 3,
  type: 4,
  tier: 5,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default CosmicExpression;
