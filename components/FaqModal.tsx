'use client';
import { motion } from 'framer-motion';
import FaqCard from './FaqCard';
import { faqs } from '@/data/faq';
import useGlobalStore, { useStore } from '@/store/mode';

export default function FaqModal() {
  const store = useStore(useGlobalStore, (state) => state);
  if (store?.isFaqOpen === undefined || store.isFaqOpen === false) return <></>;
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
        duration: 0.7,
        ease: [0.33, 1, 0.44, 1],
      }}
      onClick={store.toggleFaq}
      className='fixed inset-0 z-40 cursor-pointer overflow-hidden overflow-y-scroll bg-black/75  py-28 backdrop-blur-md'
    >
      {faqs.map((faq) => {
        return <FaqCard key={faq.question} faq={faq} />;
      })}
    </motion.div>
  );
}
