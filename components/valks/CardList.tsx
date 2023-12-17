import { valkeryType } from '@/types/Valkery';
import AnimatedCard from './AnimatedCard';
import { motion } from 'framer-motion';
import useGlobalStore from '@/store/mode';
import { useStore } from '@/helpers/functions';
import { buildType } from '@/types/Build';
type props = {
  valkeries: valkeryType[];
  recValks: valkeryType[];
  brokeValks: valkeryType[];
  setSelected: (valk: valkeryType | undefined) => void;
  setSelectedBuild: (valk: buildType | undefined) => void;
};

export default function CardList({
  valkeries,
  recValks,
  setSelected,
  setSelectedBuild,
  brokeValks,
}: props) {
  const store = useStore(useGlobalStore, (state) => state);
  const cleanValks: valkeryType[] = [];
  valkeries.map((valk) => {
    if (!recValks.includes(valk)) {
      cleanValks.push(valk);
    }
  });
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.08,
      },
    }),
    hidden: { opacity: 0 },
  };

  if (store?.gamerMode === false) {
    return (
      <>
        <div className='ml-2 flex w-full flex-row flex-wrap justify-center gap-3'>
          {brokeValks.map((valk, index) => {
            return (
              <motion.div
                className='flex w-full sm:w-[19rem] '
                key={index}
                variants={variants}
                custom={index}
                animate='visible'
                initial='hidden'
              >
                <AnimatedCard
                  isRecommended={false}
                  setSelected={setSelected}
                  setSelectedBuild={setSelectedBuild}
                  valkery={valk}
                />
              </motion.div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <div className='mb-3 ml-2 flex w-full flex-row flex-wrap justify-center gap-3'>
        {recValks.map((valk, index) => {
          return (
            <motion.div
              className='flex w-full sm:w-[20rem] '
              key={valk.label}
              variants={variants}
              custom={index}
              animate='visible'
              initial='hidden'
            >
              <AnimatedCard
                isRecommended={true}
                setSelected={setSelected}
                setSelectedBuild={setSelectedBuild}
                valkery={valk}
              />
            </motion.div>
          );
        })}
      </div>
      <div className='ml-2 flex w-full flex-row flex-wrap justify-center gap-3'>
        {cleanValks.map((valk, index) => {
          return (
            <motion.div
              className='flex w-full sm:w-[19rem] '
              key={valk.label}
              variants={variants}
              custom={index}
              animate='visible'
              initial='hidden'
            >
              <AnimatedCard
                isRecommended={false}
                setSelected={setSelected}
                setSelectedBuild={setSelectedBuild}
                valkery={valk}
              />{' '}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
