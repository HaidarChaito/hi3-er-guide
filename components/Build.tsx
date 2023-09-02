'use client';
import { Signet } from '@/types/Signet';

type props = {
    build: Signet[][];
};

export default function Build({ build }: props) {

    return (
        <div className='mx-auto'>
            {build.map((signetClass, i) => (
                <div key={i}>
                    {signetClass.map((signet, j) => (
                        <div key={j}>
                            {signet.label}
                        </div>
                    ))}
                </div>
            ))}
            <hr />
        </div>
    );
}
