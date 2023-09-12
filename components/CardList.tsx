import { Valkery } from '@/types/Valkery';
import AnimatedCard from './AnimatedCard';
type props = {
  valkeries: Valkery[];
  recValks: Valkery[];
  setSelected: CallableFunction;
};

export default function CardList({ valkeries, recValks, setSelected }: props) {
  const cleanValks: Valkery[] = [];
  valkeries.map((valk) => {
    if (!recValks.includes(valk)) {
      cleanValks.push(valk);
    }
  });

  return (
    <>
      <div className='columns-1 gap-4 p-4 md:columns-4 lg:columns-6'>
        {recValks.map((valk) => {
          return (
            <AnimatedCard
              isRecommended={true}
              setSelected={setSelected}
              key={valk.label}
              valkery={valk}
            />
          );
        })}
      </div>
      <div className='columns-1 gap-4 p-4 md:columns-4 lg:columns-6'>
        {cleanValks.map((valk) => {
          return (
            <AnimatedCard
              isRecommended={false}
              setSelected={setSelected}
              key={valk.label}
              valkery={valk}
            />
          );
        })}
      </div>
    </>
  );
}
