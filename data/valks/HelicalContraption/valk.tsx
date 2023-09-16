import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const HelicalContraption: Valkery = {
  label: 'Helical Contraption',
  image: 'https://upload-bbs.miyoushe.com/upload/2022/08/12/73565430/350232467ac2d283c5a01bbfec1e14a2_3223603059634259341.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png',
  build: [build1],
  type: 4,
  tier: 4.5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 5, selected: 'yes' },
    { title: 10, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'no' },
    { title: 15, selected: 'no' },
  ],
};
export default HelicalContraption;
