'use client';
import { Build } from '@/types/Build';
import styles from '@/styles/Build.module.css'

type props = {
    build: Build;
};

export default function Build({ build }: props) {

    return (
        <>
            <div className='inline-flex mx-2'>
                <div className='mx-auto'>
                    <div>{build.label}</div>
                    {build.signets.map((signetClass, i) => (
                        <div key={i}>
                            {signetClass.map((signet, j) => (
                                <div key={j}>
                                    {signet.label}
                                </div>
                            ))}
                            {build.signets.length - 1 > i && (
                                <hr className={styles.hr} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}
