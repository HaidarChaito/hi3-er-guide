import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import AponiaSignetOfDiscipline1stCore from '@/data/signets/tsx/AponiaSignetofDiscipline1stCore.g';
import { Herrscher_of_Origin_Ego } from '@/data/signets/tsx/EgoSignets';
import PardofelisSignetOfReverie from '@/data/signets/tsx/PardofelisSignetofReverie.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'Combo Build',
  tier: 1,
  isNew: true,
  signets: [
    [
      Herrscher_of_Origin_Ego.Blessing_of_Expungement,
      Herrscher_of_Origin_Ego.Blessing_of_Lethal_Smite,
      Herrscher_of_Origin_Ego.Blessing_of_Nature,
    ],
    [
      AponiaSignetOfDiscipline1stCore.firstnobetrayal,
      AponiaSignetOfDiscipline1stCore.fourthnoinsolence,
      AponiaSignetOfDiscipline1stCore.fifthnofalsehood,
      AponiaSignetOfDiscipline1stCore.nexussignet2youshallreceivedisciplinesblessing,
    ],
    [
      PardofelisSignetOfReverie.mottoofmeow,
      PardofelisSignetOfReverie.backcurledtail,
      PardofelisSignetOfReverie.flexiblepc,
      PardofelisSignetOfReverie.nexussignet1emptydreamsselfsetandjoy,
    ],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Boundless_Logos, EmblemsImages.Boundless_Feeling],
    [EmblemsImages.Burden, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Boundless_Logos, EmblemsImages.Boundless_Feeling],
  ],
};

export default build1;
