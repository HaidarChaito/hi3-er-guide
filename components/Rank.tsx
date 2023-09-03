'use client';
import Image from 'next/image';

type props = {
    tier: number;
};


export default function Rank({ tier }: props) {
    return (
        <Image className='mx-auto' src={`/images/ranks/${tier}.png`} width={33} height={33} alt={`rank${tier}`} />
    );
}
