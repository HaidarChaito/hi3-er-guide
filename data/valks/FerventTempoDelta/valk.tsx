import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const FerventTempoDelta: Valkery = {
  label: 'Fervent Tempo Delta',
  image: 'https://i.pximg.net/img-original/img/2020/10/21/19/02/17/85151250_p0.jpg',
  build: [build1],
  type: 1,
  tier: 4,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: 'no' },
    { title: 5, selected: 'yes' },
    { title: 5, selected: 'no' },
    { title: 10, selected: 'no' },
    { title: 10, selected: 'yes' },
    { title: 15, selected: 'no' },
    { title: 15, selected: 'no' },
  ],

};
export default FerventTempoDelta;
