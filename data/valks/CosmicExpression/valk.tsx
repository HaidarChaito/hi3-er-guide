import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const CosmicExpression: Valkery = {
  label: 'Cosmic Expression (CE)',
  image: 'Cosmic Expression',
  build: [build1],
  minRank: 3,
  type: 4,
  tier: 5,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓ ' },
    { title: 10, selected: '✓ ' },
    { title: 10, selected: ' ' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default CosmicExpression;
