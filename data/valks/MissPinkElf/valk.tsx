import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const MissPinkElf: valkeryType = {
  label: 'Miss Pink Elf (MPE)',
  image: 'Miss Pink Elf',
  build: build1,
  type: 1,
  tier: 3,
  min_rank: 5,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default MissPinkElf;
