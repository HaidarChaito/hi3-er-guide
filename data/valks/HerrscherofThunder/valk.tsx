import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const HerrscherofThunder: valkeryType = {
  label: 'Herrscher of Thunder (HoT)',
  image: 'Herrscher of Thunder',
  build: build1,
  type: 3,
  tier: 3,
  min_rank: 3.2,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default HerrscherofThunder;
