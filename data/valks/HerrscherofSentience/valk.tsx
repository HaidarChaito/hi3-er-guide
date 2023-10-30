import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const HerrscherofSentience: Valkery = {
  label: 'Herrscher of Sentience (HoS)',
  image: 'Herrscher of Sentience',
  build: [build1],
  type: 1,
  tier: 4,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '✓' },
    { title: 15, selected: ' ' },
    { title: 15, selected: ' ' },
  ],
};
export default HerrscherofSentience;
