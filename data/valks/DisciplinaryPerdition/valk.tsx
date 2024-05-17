import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const DisciplinaryPerdition: valkeryType = {
  label: 'Disciplinary Perdition (Aponia)',
  image: 'Disciplinary Perdition',
  build: build1,
  type: 3,
  tier: 3,
  min_rank: 3,
  loadout_buffs: [
    { title: 0, selected: '✓ ' },
    { title: 5, selected: '' },
    { title: 5, selected: '' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default DisciplinaryPerdition;
