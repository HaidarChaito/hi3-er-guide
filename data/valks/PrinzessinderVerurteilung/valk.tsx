import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const PrinzessinderVerurteilung: valkeryType = {
  label: 'Prinzessin der Verurteilung (PV)',
  image: 'Prinzessin der Verurteilung',
  build: [build1],
  type: 3,
  tier: 2.5,
  min_rank: 5,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '' },
  ],
};
export default PrinzessinderVerurteilung;
