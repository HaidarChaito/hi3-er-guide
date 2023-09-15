import FaqCard from '@/components/FaqCard';
import GenericLoadAnimation from '@/components/GenericLoadAnimation';
import { faqs } from '@/data/faq';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'FAQ',
};
export default function Faq() {
  return (
    <GenericLoadAnimation>
      {faqs.map((faq) => {
        return <FaqCard key={faq.question} faq={faq} />;
      })}
    </GenericLoadAnimation>
  );
}
