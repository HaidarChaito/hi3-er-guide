import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const DisciplinaryPerdition: Valkery = {
  label: 'Disciplinary Perdition',
  image: 'https://pbs.twimg.com/media/FRe8WdTUYAAqHR4?format=jpg&name=4096x4096',
  build: [build1],
  type: 3,
  tier: 3,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: '✓' },
    { title: 15, selected: ' ' },
  ],
};
export default DisciplinaryPerdition;
