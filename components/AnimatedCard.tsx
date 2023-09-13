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
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          onClick={() => setSelected(valkery)}
          fill
          sizes='(max-width: 768px) 100vw, 300px'
        />
      </motion.div>
    </div>
  );
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
