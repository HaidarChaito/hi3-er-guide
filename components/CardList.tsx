import { Valkery } from '@/types/Valkery';
import AnimatedCard from './AnimatedCard';
import { motion } from 'framer-motion';
import useGlobalStore, { useStore } from '@/store/mode';
import { brokeValks } from '@/data/brokeModeValks';
type props = {
  valkeries: Valkery[];
  recValks: Valkery[];
  setSelected: CallableFunction;
};

export default function CardList({ valkeries, recValks, setSelected }: props) {
  const store = useStore(useGlobalStore, (state) => state);
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

  if (store?.gamerMode === false) {
    return (
      <>
        <div className='ml-2 flex w-full flex-row flex-wrap gap-4'>
          {brokeValks.map((valk, index) => {
            return (
              <motion.div
                className='flex w-full sm:w-72 '
                key={valk.label}
                variants={variants}
                custom={index}
                animate='visible'
                initial='hidden'
              >
                <AnimatedCard isRecommended={false} setSelected={setSelected} valkery={valk} />
              </motion.div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <div className='mb-3 ml-2 flex w-full flex-row flex-wrap gap-4'>
        {recValks.map((valk, index) => {
          return (
            <motion.div
              className='flex w-full sm:w-72 '
              key={valk.label}
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
      <div className='ml-2 flex w-full flex-row flex-wrap gap-4'>
        {cleanValks.map((valk, index) => {
          return (
            <motion.div
              className='flex w-full sm:w-72 '
              key={valk.label}
              variants={variants}
              custom={index}
              animate='visible'
              initial='hidden'
            >
              <AnimatedCard isRecommended={false} setSelected={setSelected} valkery={valk} />{' '}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
