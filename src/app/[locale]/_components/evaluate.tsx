import React from 'react';
import EvaluateCarousel from '@/components/feature/carousel/evaluate-carousel';
import Image from 'next/image';
import viTranslations from '@/locales/vi/home.json';
import enTranslations from '@/locales/en/home.json';
import { ELocale } from '@/constants/enum';
import { studentEvaluate } from '@/data/student-evaluate';

const Evaluate = ({ locale }: { locale: ELocale }) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  return (
    <section className="relative bg-[#FF8D0A] py-10 sm:py-15 lg:py-18">
      <Image
        src={'/images/home/evaluete-home.png'}
        width={732}
        height={239}
        priority
        alt="formation process background"
        className="absolute bottom-0 -left-10 hidden h-[125px] w-[380px] object-cover sm:block md:right-0 md:-bottom-7 md:h-[180px] md:w-[549px] lg:h-[239px] lg:w-[732px]"
      />
      <div className="section-container flex flex-col md:flex-row">
        <div>
          <h2 className="sm:text-32 text-24 mb-2.5 text-center font-bold text-white sm:mb-4 md:text-left lg:text-[40px] lg:leading-[72px]">
            {t.evaluate.title}
          </h2>
          <p className="mb-6 text-center text-base font-medium text-white sm:text-left">
            {t.evaluate.description}
          </p>
        </div>
        <div className="max-w-[658px]">
          <EvaluateCarousel studentEvaluate={studentEvaluate} locale={locale} />
        </div>
      </div>
    </section>
  );
};

export default Evaluate;
