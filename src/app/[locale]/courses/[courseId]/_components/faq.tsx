import { Accordion } from '@/components/ui/accordion';
import MainContainer from './main-container';
import type { FAQ } from '@/types/course';

interface FAQProps {
  faq: FAQ[];
}

const FAQSection = ({ faq }: FAQProps) => {
  const items = faq.map(item => ({
    title: item.question,
    description: item.answer,
  }));

  return (
    <MainContainer id="faq">
      <h2 className="text-24 lg:text-32 font-600 mb-4">Câu Hỏi Thường Gặp</h2>
      <Accordion items={items} />
    </MainContainer>
  );
};

export default FAQSection;
