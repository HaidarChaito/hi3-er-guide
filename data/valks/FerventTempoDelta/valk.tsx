import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const FerventTempoDelta: valkeryType = {
  label: 'Fervent Tempo Delta (FT)',
  image: 'Fervent Tempo Delta',
  build: build1,
  type: 1,
  tier: 4,
  min_rank: 5,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '' },
    { title: 10, selected: '✓' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default FerventTempoDelta;
