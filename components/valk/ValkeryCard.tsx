import { valkeryType } from '@/types/Valkery';
import Image from 'next/image';
import Link from 'next/link';

export default function ValkeryCard({ valk }: { valk: valkeryType }) {
  return (
    <div className='card image-full my-2 h-52 w-72 shadow-2xl backdrop-blur-lg'>
      <figure>
        <Image
          className='rounded-2xl'
          objectPosition='top'
          fill
          src={`/static/images/valks/${valk.image}.png`}
          alt='Shoes'
        />
      </figure>
      <div className='card-body bg-transparent'>
        <h2 className='card-title line-clamp-1 font-bold text-primary'>{valk.label}</h2>
        {valk.build.map((build, index) => (
          <Link
            className='line-clamp-1 hover:text-primary'
            href={`${valk.label.replaceAll(' ', '_')}/${build.label.replaceAll(' ', '_')}`}
          >
            {build.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
