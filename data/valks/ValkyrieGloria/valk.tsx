import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const ValkyrieGloria: valkeryType = {
  label: 'Valkyrie Gloria (VG)',
  image: 'Valkyrie Gloria',
  build: build1,
  type: 4,
  tier: 1,
  min_rank: 5,
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
export default ValkyrieGloria;
