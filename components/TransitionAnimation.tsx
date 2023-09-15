'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
type props = {
  children: ReactNode;
};
export default function TransitionAnimation({ children }: props) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={usePathname()}
        initial='init'
        animate='animate'
        transition={{
          duration: 2,
          ease: [0.33, 1, 0.44, 1],
        }}
        variants={{
          init: { opacity: 0 },
          animate: { opacity: 1 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
