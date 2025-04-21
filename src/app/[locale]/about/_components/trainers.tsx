import TrainerCard from '@/components/feature/cards/trainer-card';
import { trainers } from '@/data/trainers';
import React from 'react';
import viTranslations from '@/locales/vi/about.json';
import enTranslations from '@/locales/en/about.json';
import { ELocale } from '@/constants/enum';

const Trainers = ({ locale }: { locale: ELocale }) => {
  const t = locale === 'en' ? enTranslations : viTranslations;

  return (
    <section className="relative z-10 pt-[30px] md:pt-15 lg:pt-16 lg:pb-4">
      <div className="section-container">
        <h2 className="text-24 md:text-32 font-700 lg:text-40 mb-6 text-center">
          {t.title}
        </h2>
        <div className="flex flex-col gap-5 md:flex-row md:gap-4 lg:gap-5">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              locale={locale}
              trainer={trainer}
              className="flex-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
