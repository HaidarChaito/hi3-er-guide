'use client';
import Image from 'next/image';
import styles from '@/styles/Card.module.css';
import { Valkery } from '@/types/Valkery';
import { useState } from 'react';
import Build from './Build';

type props = {
  valkery: Valkery;
};

export default function Card({ valkery }: props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={`${styles.card} w-full pb-1 sm:w-64`}>
        <div className='z-10 w-full text-white'>
          <Image className='h-48 w-full rounded-t-3xl	 object-cover p-2' width={200} height={100} src={'/images/valks/' + valkery.label + '.png'} alt={valkery.label} />
          <div className='py-1 text-center'>
            <span className='text-lg font-semibold'>{valkery.label}</span>
            <button className='mx-auto block rounded-full bg-cyan-600 p-1 px-2 text-base hover:bg-cyan-700' onClick={openModal}>
              Details
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className='fixed left-0	top-0 z-20 flex h-full w-full items-center justify-center overflow-auto backdrop-blur-sm backdrop-brightness-75 backdrop-saturate-50'>
          <dialog open id='myModal' className='absolute z-10 block  h-4/5 w-4/5 rounded-md bg-slate-200 '>
            <div className='flex h-full w-full flex-col '>
              <div className='flex h-auto w-full items-center justify-center'>
                <div className='flex h-auto w-full items-center justify-center text-lg font-bold sm:text-2xl'>{valkery.label}</div>
                <div onClick={closeModal} className='m-2 inline cursor-pointer'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className='feather feather-x'>
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                  </svg>
                </div>
              </div>
              <div className='mx-auto'>
                {valkery.build.map((build) => {
                  return <Build key={build.label} build={build} />;
                })}
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}
