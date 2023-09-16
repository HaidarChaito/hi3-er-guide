import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const DeaAnchora: Valkery = {
  label: 'Dea Anchora',
  image: 'https://pbs.twimg.com/media/E1VlpwBWUAI14AQ?format=jpg&name=4096x4096',
  build: [build1],
  type: 4,
  tier: 2,
  loadoutBuffs: [
    { title: 0, selected: 'yes' },
    { title: 5, selected: 'yes' },
    { title: 5, selected: 'no' },
    { title: 10, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'no' },
    { title: 15, selected: 'yes' },
  ],
  minRank: 3,
};
export default DeaAnchora;
