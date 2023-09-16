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
    { title: 0, selected: 'no' },
    { title: 5, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 10, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'yes' },
    { title: 15, selected: 'no' },
  ],
};
export default DisciplinaryPerdition;
