'use client';
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';
import styles from '@/styles/Card.module.css';
import { Valkery } from '@/types/Valkery';
import { useState } from 'react';
import Build from './Build';
import { IconContext } from "react-icons";
import { switchColor } from "@/helpers/functions";

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
      <IconContext.Provider
        value={{
          className: "inline text-" + switchColor(valkery.type),
          attr: { focusable: "false" },
        }}
      >      <div className={`${styles.card} w-full pb-1 sm:w-64`}>
          <div className='z-10 w-full text-white'>
            <Image objectFit="fill" className='h-48 w-full rounded-t-3xl	p-2' width={200} height={100} src={'/images/valks/' + valkery.label + '.webp'} alt={valkery.label} />
            <div className='py-1 text-center'>
              <span className='text-lg font-semibold'>{valkery.label}</span>
              <hr className={`border-1 border-${switchColor(valkery.type)} my-2`} />
              <button className='mx-auto block rounded-full bg-cyan-600 p-1 px-2 text-base hover:bg-cyan-700' onClick={openModal}>
                Details
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className='fixed left-0	top-0 z-20 flex h-full w-full items-center justify-center overflow-auto backdrop-blur-sm backdrop-brightness-75 backdrop-saturate-50'>
            <dialog open id='myModal' className={`absolute z-10 block  h-4/5 w-4/5 rounded-md opacity-90 bg-primary text-secondary border-2 border-${switchColor(valkery.type)}`}>
              <Image className="opacity-25 z-0" objectPosition="center" objectFit="fill" layout="fill" src={'/images/valks/' + valkery.label + '.webp'} alt={valkery.label} />
              <div className='flex flex-col z-30 relative'>
                <div className='flex h-auto w-full items-center justify-center my-2'>
                  <div className='flex h-auto w-full items-center justify-center text-lg font-bold sm:text-2xl'>{valkery.label}</div>
                  <div onClick={closeModal} className='m-2 inline cursor-pointer '>
                    <IconContext.Provider value={{ className: "text-2xl text-" + switchColor(valkery.type) }}>
                      <AiOutlineClose />
                    </IconContext.Provider>
                  </div>
                </div>
                <div className='flex justify-around relative'>
                  {valkery.build.map((build) => {
                    return <Build valkery={valkery} key={build.label} build={build} />;
                  })}
                </div>
              </div>
            </dialog>
          </div>
        )}
      </IconContext.Provider>
    </>
  );
}

