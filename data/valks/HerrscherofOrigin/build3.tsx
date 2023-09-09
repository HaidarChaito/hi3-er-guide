import AponiaSignetOfDiscipline1stCore from '@/data/signets/tsx/AponiaSignetofDiscipline1stCore.g';
import HooSignetOfEgo from '@/data/signets/tsx/HoOSignetofEgo.g';
import PardofelisSignetOfReverie from '@/data/signets/tsx/PardofelisSignetofReverie.g';
import { Build } from '@/types/Build';

const build3: Build = {
  label: 'Hybrid Build',
  tier: 1,
  isNew: true,
  signets: [
    [HooSignetOfEgo.blessingofexpungement, HooSignetOfEgo.blessingoflethalsmite, HooSignetOfEgo.blessingofnature],
    [AponiaSignetOfDiscipline1stCore.firstnobetrayal, AponiaSignetOfDiscipline1stCore.fourthnoinsolence, AponiaSignetOfDiscipline1stCore.fifthnofalsehood,
    AponiaSignetOfDiscipline1stCore.nexussignet2youshallreceivedisciplinesblessing],
    [PardofelisSignetOfReverie.mottoofmeow, PardofelisSignetOfReverie.backcurledtail, PardofelisSignetOfReverie.flexiblepc,
    PardofelisSignetOfReverie.nexussignet1emptydreamsselfsetandjoy],
  ],
};

export default build3;
