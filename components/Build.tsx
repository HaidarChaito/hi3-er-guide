'use client';
import { Build } from '@/types/Build';
import styles from '@/styles/Build.module.css'
import { LuSwords } from 'react-icons/lu';
import Rank from './Rank';
import { Valkery } from '@/types/Valkery';
import { switchColor } from '@/helpers/functions';

type props = {
    build: Build;
    valkery: Valkery;
};


export default function Build({ build, valkery }: props) {
    return (
        <>
            <div className='inline-flex mx-2'>
                <div className='mx-auto '>
                    <Rank tier={build.tier} />
                    <div className='font-bold'><LuSwords /> {build.label} <LuSwords /></div>
                    <hr className={`border-1 border-${switchColor(valkery.type)}`} />
                    {build.signets.map((signetClass, i) => (
                        <div key={i}>
                            {signetClass.map((signet, j) => (
                                <div key={j} className='flex justify-between '>
                                    <div>
                                        {signet.label}
                                    </div>
                                    <div className={`text-${switchColor(valkery.type)}`}>
                                        {signet.priority}
                                    </div>
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
