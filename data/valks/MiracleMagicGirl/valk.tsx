import { Valkery } from '@/types/Valkery';
import build1 from './Build1';
import build2 from './Build2';

const MiracleMagicGirl: Valkery = {
  label: 'Miracle Magic Girl (Sirin)',
  image: 'Miracle Magic Girl',
  build: [build1, build2],
  type: 4,
  tier: 3.5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default MiracleMagicGirl;