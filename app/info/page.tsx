import FaqCard from '@/components/FaqCard';
import GenericLoadAnimation from '@/components/GenericLoadAnimation';
import { infos } from '@/data/info';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Info',
};
export default function Info() {
  return (
    <GenericLoadAnimation>
      {infos.map((info) => {
        return <FaqCard key={info.question} faq={info} />;
      })}
    </GenericLoadAnimation>
  );
}
