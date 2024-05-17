'use client';
import { valks } from '@/data/visibleValks';
import Image from 'next/image';

export default function Page({ params }: { params: { valkLabel: string } }) {
  let valk;
  const decodedString = decodeURIComponent(params.valkLabel);
  for (let index = 0; index < valks.length; index++) {
    if (valks.at(index)?.label == decodedString) {
      valk = valks.at(index);
    }
  }
  return (
    <div className='mt-2'>
      <div className='text-center text-primary'>{valk?.label}</div>
      <figure>
        <Image
          className='pt-10 opacity-5 brightness-90'
          objectPosition='top'
          fill
          src={`/static/images/valks/${valk?.image}.png`}
          alt='Shoes'
        />
      </figure>{' '}
    </div>
  );
}
