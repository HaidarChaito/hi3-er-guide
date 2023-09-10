'use client';
import { Valkery } from '@/types/Valkery';
import { motion } from 'framer-motion';
import Image from 'next/image';
type props = {
  valkery: Valkery;
  setSelected: CallableFunction;
};
export default function AnimatedCard({ valkery, setSelected }: props) {
  return (
    <div className='inline-block w-full'>
      <motion.div
        whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.975, transition: { duration: 0.3 } }}
      >
        <Image
          className='relative h-52 w-full cursor-pointer rounded-lg object-top shadow-xl'
          src={'/images/valks/' + valkery.label + '.png'}
          objectFit='cover'
          alt={valkery.label}
          onClick={() => setSelected(valkery)}
          fill
        />
      </motion.div>
    </div>
  );
}
