import { valkeryType } from '@/types/Valkery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Rank from './Rank';
import TierBadge from './TierBadge';
type props = {
  valkery: valkeryType;
  setSelected: CallableFunction;
  setSelectedBuild: CallableFunction;
  isRecommended?: boolean;
};
export default function AnimatedCard({
  valkery,
  setSelected,
  setSelectedBuild,
  isRecommended,
}: props) {
  let valkBorderTier = '';
  if (valkery.tier != undefined) {
    if (valkery.tier >= 4) valkBorderTier += 'rounded-lg border-2 border-error';
    else if (valkery.tier >= 3) valkBorderTier += 'rounded-lg border-2 border-success';
    else valkBorderTier += 'rounded-lg border-2 border-secondary';
  }

  return (
    <div className='group w-full'>
      <motion.div
        layoutRoot
        className='relative'
        whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.975, transition: { duration: 0.3 } }}
      >
        <div
          className={`relative ${
            isRecommended ? 'rounded-lg  border-2 border-primary' : valkBorderTier
          }`}
        >
          {valkery.minRank != undefined && (
            <Image
              className='absolute left-1/2 top-0 z-20 h-auto w-auto -translate-x-1/2  transform'
              width={60}
              height={60}
              loading='eager'
              alt={`${valkery.minRank}`}
              src={'/static/images/ranks/' + valkery.minRank + '.png'}
            />
          )}
          {isRecommended && (
            <div className='badge badge-primary absolute bottom-0 left-1/2 z-20 -translate-x-1/2  transform '>
              Recommended
            </div>
          )}
          {!isRecommended && valkery.tier != undefined && (
            <TierBadge tier={valkery.tier}>
              <Rank tier={valkery.tier} />
            </TierBadge>
          )}
          <Image
            priority
            className='relative h-80 w-full rounded-lg object-cover object-top shadow-xl'
            src={'/static/images/valks/' + valkery.image + '.png'}
            loading='eager'
            alt={valkery.label}
            height={410}
            width={400}
          />
          <div className='parent absolute top-14 hidden w-full px-3 group-hover:block'>
            {valkery.build.map((build, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelected(valkery);
                  setSelectedBuild(build);
                }}
                className='btn btn-primary m-0 mb-2 w-full overflow-hidden text-center opacity-90 hover:opacity-100'
              >
                <span>{build.label}</span>
                <span className='flex w-full justify-center'>
                  <Rank tier={build.tier ?? 1} />
                </span>
              </button>
            ))}
            {valkery.build.length > 1 && (
              <button
                onClick={() => {
                  setSelected(valkery);
                  setSelectedBuild(undefined);
                }}
                className='btn btn-primary mb-2 w-full overflow-hidden text-center opacity-90 hover:opacity-100'
              >
                <span>preview all builds</span>
              </button>
            )}
          </div>
        </div>

        <div className='mt-1 text-center text-base-300'>{valkery.label}</div>
      </motion.div>
    </div>
  );
}
