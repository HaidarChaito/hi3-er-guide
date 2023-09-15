import { Valkery } from '@/types/Valkery';
import AnimatedCard from './AnimatedCard';
import { motion } from 'framer-motion';
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
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0 },
  };
  return (
    <>
      <div className='flex w-full flex-row flex-wrap gap-4 gap-y-4'>
        {recValks.map((valk, index) => {
          return (
            <motion.div
              className='flex w-full sm:w-1/6 '
              key={index}
              variants={variants}
              custom={index}
              animate='visible'
              initial='hidden'
            >
              <AnimatedCard isRecommended={true} setSelected={setSelected} valkery={valk} />
            </motion.div>
          );
        })}
      </div>
      <div className='mt-4 flex flex-row flex-wrap gap-4 gap-y-4'>
        {cleanValks.map((valk, index) => {
          return (
            <motion.div
              className='flex w-full sm:w-1/6 '
              key={index}
              variants={variants}
              custom={index}
              animate='visible'
              initial='hidden'
            >
              <AnimatedCard
                isRecommended={false}
                setSelected={setSelected}
                key={valk.label}
                valkery={valk}
              />{' '}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
