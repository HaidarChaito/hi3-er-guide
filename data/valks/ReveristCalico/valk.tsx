import { valkeryType } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const ReveristCalico: valkeryType = {
  label: 'Reverist Calico (RC)',
  image: 'Reverist Calico',
  build: [build1, build2],
  type: 2,
  tier: 3.5,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default ReveristCalico;
