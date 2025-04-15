import { Accordion } from '@/components/ui/accordion';
import MainContainer from './main-container';
import type { IFAQ } from '@/types/course';
import viTranslations from '@/locales/vi/course.json';
import enTranslations from '@/locales/en/course.json';
import { ELocale } from '@/constants/enum';

interface IFAQProps {
  faq: IFAQ[];
  locale: ELocale;
}

const FAQSection = ({ faq, locale }: IFAQProps) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  const items = faq.map(item => ({
    title: item.question,
    description: item.answer,
  }));

  return (
    <MainContainer id="faq">
      <h2 className="text-24 lg:text-32 font-600 mb-4">
        {t.faq.frequently_asked_questions}
      </h2>
      <Accordion items={items} />
    </MainContainer>
  );
};

export default FAQSection;
