import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const GoldenDiva: Valkery = {
  label: 'Golden Diva',
  image:
    'https://upload-bbs.miyoushe.com/upload/2022/04/22/73565430/df1e2fed0534fb12d76c656152046b0b_3867282849239124940.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png',
  build: [build1],
  type: 3,
  tier: 2.5,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 5, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 10, selected: 'no' },
    { title: 15, selected: 'yes' },
    { title: 15, selected: 'no' },
  ],
};
export default GoldenDiva;
