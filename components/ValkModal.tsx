'use client';
import { Valkery } from '@/types/Valkery';
import Build from './Build';
import { motion } from 'framer-motion';
type props = {
  selectedValk?: Valkery;
  setSelected: CallableFunction;
};
export default function ValkModal({ selectedValk, setSelected }: props) {
  if (selectedValk == null) return <></>;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.15,
      }}
      onClick={() => setSelected(null)}
      className='fixed inset-0 z-40 cursor-pointer overflow-hidden overflow-y-scroll bg-black/50 py-28 backdrop-blur-md'
    >
      <section className='mt-2 flex-1 flex-wrap sm:flex'>
        {selectedValk.build.map((build, index) => {
          return <Build key={index} build={build} valkery={selectedValk} />;
        })}
      </section>
    </motion.div>
  );
}
