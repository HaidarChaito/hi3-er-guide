import AponiaSignetOfDiscipline1stCore from '@/data/signets/AponiaSignetofDiscipline1stCore.g';
import HooSignetOfEgo from '@/data/signets/HoOSignetofEgo.g';
import PardofelisSignetOfReverie from '@/data/signets/PardofelisSignetofReverie.g';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'Combo Build',
  tier: 1,
  isNew: true,
  signets:
    [
      [HooSignetOfEgo.blessingofexpungement, HooSignetOfEgo.blessingoflethalsmite, HooSignetOfEgo.blessingofnature],
      [AponiaSignetOfDiscipline1stCore.firstnobetrayal, AponiaSignetOfDiscipline1stCore.fourthnoinsolence, AponiaSignetOfDiscipline1stCore.fifthnofalsehood,
      AponiaSignetOfDiscipline1stCore.nexussignet2youshallreceivedisciplinesblessing],
      [PardofelisSignetOfReverie.mottoofmeow, PardofelisSignetOfReverie.backcurledtail, PardofelisSignetOfReverie.flexiblepc,
      PardofelisSignetOfReverie.nexussignet1emptydreamsselfsetandjoy],
    ],
};

export default build1;
