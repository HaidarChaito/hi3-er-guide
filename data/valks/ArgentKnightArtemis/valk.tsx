import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const ArgentKnightArtemis: Valkery = {
  label: 'Argent Knight Artemis (AKA)',
  image: 'Argent Knight Artemis',
  build: [build1],
  type: 2,
  tier: 3,
  loadoutBuffs: [
    { title: 0, selected: '✓ ' },
    { title: 5, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
  minRank: 4,
};
export default ArgentKnightArtemis;
