import { IoMdStarHalf } from 'react-icons/io';
import { IoIosStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';

type Props = {
  tier: number;
};

export default function Rank({ tier }: Props) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (tier >= 1) {
      stars.push(<IoIosStar key={i} />);
      tier -= 1;
    } else if (tier.toString().includes('0.5')) {
      stars.push(<IoMdStarHalf />);
      tier -= 0.5;
    } else {
      stars.push(<IoIosStarOutline key={i} />);
    }
  }

  return <div className='flex flex-row'>{stars}</div>;
}
