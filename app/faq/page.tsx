import FaqCard from '@/components/FaqCard';
import { faqs } from '@/data/faq';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'FAQ',
};
export default function Faq() {
  return (
    <>
      {faqs.map((faq) => {
        return <FaqCard key={faq.question} faq={faq} />;
      })}
    </>
  );
}
