import { Valkery } from '@/types/Valkery';
import { motion } from 'framer-motion';
import Image from 'next/image';
type props = {
  valkery: Valkery;
  setSelected: CallableFunction;
  isRecommended?: boolean;
};
export default function AnimatedCard({ valkery, setSelected, isRecommended }: props) {
  return (
    <div className='inline-block w-full'>
      <motion.div
        className='relative'
        whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.975, transition: { duration: 0.3 } }}
      >
        {isRecommended && (
          <div className='absolute left-0 top-0 z-20 rounded-br-lg rounded-tl-lg bg-red-500 px-2 py-1 text-sm text-white'>
            Recommended
          </div>
        )}
        <Image
          className='relative h-52 w-full cursor-pointer rounded-lg object-cover object-top shadow-xl'
          src={'/static/images/valks/' + valkery.label + '.png'}
          loading='eager'
          alt={valkery.label}
          onClick={() => setSelected(valkery)}
          fill
          sizes='(max-width: 768px) 100vw, 300px'
        />
      </motion.div>
    </div>
  );
}
