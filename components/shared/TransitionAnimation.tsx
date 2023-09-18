'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
type props = {
  children: ReactNode;
};
export default function TransitionAnimation({ children }: props) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  );
}
