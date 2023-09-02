'use client';
import { Build } from '@/types/Build';

type props = {
    build: Build;
};

export default function Build({ build }: props) {

    return (
        <>
            <div>{build.label}</div>
            <div className='mx-auto'>
                {build.signets.map((signetClass, i) => (
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
        </>
    );
}
