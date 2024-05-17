import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const BrightKnightExcelsis: valkeryType = {
  label: 'Bright Knight Excelsis (BKE)',
  image: 'Bright Knight Excelsis',
  build: build1,
  type: 1,
  tier: 2.5,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
  min_rank: 3.2,
};
export default BrightKnightExcelsis;
