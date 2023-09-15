import FaqCard from '@/components/FaqCard';
import { infos } from '@/data/info';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Info',
};
export default function Info() {
  return (
    <>
      {infos.map((info) => {
        return <FaqCard key={info.question} faq={info} />;
      })}
    </>
  );
}
