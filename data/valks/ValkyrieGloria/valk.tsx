import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const ValkyrieGloria: Valkery = {
  label: 'Valkyrie Gloria',
  image: 'Valkyrie Gloria',
  build: [build1],
  type: 4,
  tier: 1,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '✓' },
  ],
};
export default ValkyrieGloria;
