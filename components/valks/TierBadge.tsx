import { ReactNode } from 'react';

type Props = {
  tier: number;
  children: ReactNode[] | ReactNode;
};

export default function TierBadge({ tier, children }: Props) {
  if (tier >= 4)
    return (
      <div className='badge badge-error absolute bottom-0 left-1/2 z-20 -translate-x-1/2  transform '>
        {children}
      </div>
    );
  if (tier >= 3)
    return (
      <div className='badge badge-success absolute bottom-0 left-1/2 z-20 -translate-x-1/2  transform '>
        {children}
      </div>
    );
  return (
    <div className='badge badge-secondary absolute bottom-0 left-1/2 z-20 -translate-x-1/2  transform '>
      {children}
    </div>
  );
}
