import { valkeryType } from '@/types/Valkery';
import build1 from './Build1';
import build2 from './Build2';

const Dreamweaver: valkeryType = {
  label: 'Dreamweaver (Hare)',
  image: 'Dreamweaver',
  build: [build1, build2],
  type: 1,
  tier: 5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓ Build 1' },
    { title: 5, selected: '✓ Build 1/2' },
    { title: 10, selected: '✓ Build 1' },
    { title: 10, selected: '✓ Build 1/2' },
    { title: 15, selected: '✓ Build 2 ' },
    { title: 15, selected: '' },
  ],
};
export default Dreamweaver;
