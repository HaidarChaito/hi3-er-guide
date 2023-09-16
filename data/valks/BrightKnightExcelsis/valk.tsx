import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const BrightKnightExcelsis: Valkery = {
  label: 'Bright Knight Excelsis',
  image: 'https://i.pximg.net/img-original/img/2022/02/19/12/40/34/96360935_p0.png',
  build: [build1],
  type: 1,
  tier: 2.5,
  loadoutBuffs: [
    { title: 0, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 5, selected: 'no' },
    { title: 10, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'no' },
    { title: 15, selected: 'no' },
  ],
  minRank: 3.2,
};
export default BrightKnightExcelsis;
