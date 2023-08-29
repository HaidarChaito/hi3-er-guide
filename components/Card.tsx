'use client';
import Image from 'next/image';
import styles from '@/styles/Card.module.css';
import { Valkery } from '@/types/Valkery';

type props = {
  valkery: Valkery;
};

export default function Card({ valkery }: props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <Image fill className={styles.image} src={valkery.image} alt={valkery.label} />
        <div className={styles.content}>
          <span className={styles.title}>{valkery.label}</span>
          {valkery.build.map((build) => {
            return (
              <button key={build.label} className={styles.action}>
                {build.label} <i className='fa-solid fa-circle-info'></i>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
