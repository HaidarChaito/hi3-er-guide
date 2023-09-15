import { Valkery } from '@/types/Valkery';
import Build from './Build';
import { motion } from 'framer-motion';
import LoadoutBuffs from './LoadoutBuffs';
type props = {
  selectedValk?: Valkery;
  setSelected: CallableFunction;
};
export default function ValkModal({ selectedValk, setSelected }: props) {
  if (selectedValk == null) return <></>;
  return (
    <motion.div
      layoutId={selectedValk.label}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.33, 1, 0.44, 1],
      }}
      onClick={() => setSelected(null)}
      className='fixed inset-0 z-40 cursor-pointer overflow-hidden overflow-y-scroll bg-black/75  py-28 backdrop-blur-md'
    >
      <section
        className={`mx-auto mt-2 flex-1 flex-wrap sm:flex ${
          selectedValk.build.length == 1
            ? 'sm:w-1/3'
            : selectedValk.build.length == 2
            ? 'sm:w-2/3'
            : ''
        }`}
      >
        {selectedValk.loadoutBuffs != undefined &&
          (selectedValk.build.length < 2 ? (
            <div>
              <LoadoutBuffs buffs={selectedValk.loadoutBuffs} />
            </div>
          ) : (
            <div className='w-full'>
              <div className='mx-auto w-1/2'>
                <LoadoutBuffs buffs={selectedValk.loadoutBuffs} />
              </div>
            </div>
          ))}
        {selectedValk.build.map((build, index) => {
          return <Build key={index} build={build} valkery={selectedValk} />;
        })}
      </section>
    </motion.div>
  );
}
