import { valkeryType } from '@/types/Valkery';
import Image from 'next/image';
import Link from 'next/link';

export default function ValkeryCard({ valk }: { valk: valkeryType }) {
  return (
    <div className='card image-full my-2 w-72 shadow-xl'>
      <figure>
        <Image
          className='rounded-3xl'
          objectPosition='top'
          fill
          src={`/static/images/valks/${valk.image}.png`}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title line-clamp-1 text-primary'>{valk.label}</h2>
        <p>{valk.build.label}</p>
        <div className='card-actions justify-end'>
          <Link href={valk.label} className='btn btn-primary'>
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
