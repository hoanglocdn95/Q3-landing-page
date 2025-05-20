import React from 'react';
import SectionContainer from './section-container';
import EvaluateCarousel from '@/components/feature/carousel/evaluate-carousel';
import type { IEvaluate } from '@/types/course';
import viTranslations from '@/locales/vi/course.json';
import enTranslations from '@/locales/en/course.json';
import { ELocale } from '@/constants/enum';

interface IEvaluateProps {
  evaluate: IEvaluate[];
  locale: ELocale;
}

const Evaluate = ({ evaluate, locale }: IEvaluateProps) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  return (
    <SectionContainer id="evaluate" className="bg-secondary">
      <div className="flex-1 space-y-4 lg:space-y-7">
        <h2 className="text-24 lg:text-32 font-600 text-white">
          {t.evaluate.student_feedback}
        </h2>
        <EvaluateCarousel studentEvaluate={evaluate} locale={locale} />
      </div>
    </SectionContainer>
  );
};

export default Evaluate;
