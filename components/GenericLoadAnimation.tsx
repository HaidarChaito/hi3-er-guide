'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
type props = {
  children: ReactNode[];
};

export default function GenericLoadAnimation({ children }: props) {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0 },
  };
  return (
    <div>
      {children.map((child, index) => {
        return (
          <motion.div
            key={index}
            variants={variants}
            custom={index}
            animate='visible'
            initial='hidden'
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
