import { Valkery } from '@/types/Valkery';
import Build from './Build';
import { AnimatePresence, motion } from 'framer-motion';
import LoadoutBuffs from './LoadoutBuffs';
import Link from 'next/link';
type props = {
  selectedValk?: Valkery;
  setSelected: CallableFunction;
  isBudgetMode: boolean;
};
export default function ValkModal({ selectedValk, setSelected, isBudgetMode }: props) {
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
          <section
            className={`mx-auto mt-2 flex-1 flex-wrap sm:flex ${
              selectedValk.build.length == 1
                ? 'sm:w-2/4'
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
                  <div className='mx-auto w-full sm:w-1/2'>
                    <LoadoutBuffs buffs={selectedValk.loadoutBuffs} />
                  </div>
                </div>
              ))}
            <div className='mx-auto flex w-full justify-center align-middle sm:hidden'>
              {selectedValk.build.map((build, index) => {
                if (build.notBudget && isBudgetMode) return <></>;
                return (
                  <button
                    className='btn btn-secondary mx-4 inline-block w-1/4'
                    key={index}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link className='inline-block' href={`#${build.label}`}>
                      {build.label}
                    </Link>
                  </button>
                );
              })}
            </div>
            {selectedValk.build.map((build, index) => {
              if (build.notBudget && isBudgetMode) return <></>;
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
