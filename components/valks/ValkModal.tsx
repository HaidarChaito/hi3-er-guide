import { valkeryType } from '@/types/Valkery';
import Build from './Build';
import { AnimatePresence, motion } from 'framer-motion';
import LoadoutBuffs from './LoadoutBuffs';
import { buildType } from '@/types/Build';
type props = {
  selectedValk?: valkeryType;
  selectedBuild?: buildType;
  setSelected: CallableFunction;
  isBudgetMode: boolean;
};
export default function ValkModal({
  selectedValk,
  setSelected,
  selectedBuild,
  isBudgetMode,
}: props) {
  return (
    <AnimatePresence mode='wait'>
      {selectedValk != undefined && (
        <motion.div
          initial={{
            opacity: 0,
            y: 150,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 150,
            transition: {
              duration: 0.3,
              ease: [0.33, 1, 0.44, 1],
            },
          }}
          transition={{
            duration: 0.7,
            ease: [0.33, 1, 0.44, 1],
          }}
          onClick={() => setSelected(null)}
          className='fixed inset-0 z-30 cursor-pointer overflow-hidden overflow-y-scroll bg-black/75  py-28 text-neutral-focus backdrop-blur-md'
        >
          <section className={`mx-auto mt-2 flex-1 flex-wrap sm:flex sm:w-3/4`}>
            {selectedValk.loadout_buffs != undefined &&
              (selectedBuild != undefined ? (
                <div className='flex justify-center align-middle sm:w-full md:w-fit'>
                  <LoadoutBuffs buffs={selectedValk.loadout_buffs} />
                </div>
              ) : (
                <div className='w-full'>
                  <LoadoutBuffs buffs={selectedValk.loadout_buffs} />
                </div>
              ))}
            {selectedValk.build.map((build, index) => {
              if (build.not_budget && isBudgetMode) return <></>;
              if (build != selectedBuild && selectedBuild != undefined) return <></>;
              return (
                <>
                  <Build key={index} build={build} valkery={selectedValk} />
                  {index < selectedValk.build.length - 1 && (
                    <div className='divider before:bg-primary after:bg-primary sm:hidden'>END</div>
                  )}
                </>
              );
            })}
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
