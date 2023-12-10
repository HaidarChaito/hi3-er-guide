import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const HelicalContraption: Valkery = {
  label: 'Helical Contraption (VV)',
  image: 'Helical Contraption',
  build: [build1],
  type: 4,
  tier: 4.5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: '' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '' },
  ],
};
export default HelicalContraption;
