'use client';
import { Valkery } from '@/types/Valkery';
import AnimatedCard from './AnimatedCard';
type props = {
  valkeries: Valkery[];
  setSelected: CallableFunction;
};
export default function CardList({ valkeries, setSelected }: props) {
  return (
    <div className='columns-1 gap-4 p-4 md:columns-4 lg:columns-6'>
      {valkeries.map((valk) => {
        return <AnimatedCard setSelected={setSelected} key={valk.label} valkery={valk} />;
      })}
    </div>
  );
}
