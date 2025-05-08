'use client';

import { ChevronDownIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import viTranslations from '@/locales/vi/about.json';
import enTranslations from '@/locales/en/about.json';
import { ELocale } from '@/constants/enum';

const FormationProcess = ({ locale }: { locale: ELocale }) => {
  const t = locale === 'en' ? enTranslations : viTranslations;
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <section className="relative pt-10 pb-[138px] md:py-15 lg:py-16">
      <div className="section-container flex flex-col justify-between gap-4 md:flex-row md:gap-10 lg:gap-[105px]">
        <div className="relative order-2 aspect-[503/600] w-full md:order-1 md:w-[41%] md:max-w-[503px]">
          <Image
            src="/images/about/formation-process.png"
            alt="formation-process"
            fill
            priority
            className="rounded-12 object-cover"
          />
          <div className="absolute top-[275px] left-[106px] z-0 hidden size-[400px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#067E81_0%,_rgba(217,_217,_217,_0)_100%)] opacity-[0.3] md:block lg:right-0 lg:bottom-[10%] xl:size-[700px]" />
        </div>
        <div className="relative z-[1] order-1 flex-1 md:order-2">
          <h2 className="text-24 md:text-32 font-700 lg:text-40 leading-7 md:leading-12 lg:leading-14">
            {t.formation_process.title}
          </h2>
          <p className="font-500 text-text-secondary text-14 lg:text-16 my-3 md:my-2 lg:my-4">
            {t.formation_process.description}
          </p>
          <p className="font-500 text-text-secondary text-14 lg:text-16 mb-6">
            {t.formation_process.description_2}
          </p>
          {isShowMore && (
            <p className="font-500 text-14 lg:text-16 text-text-secondary mt-3 mb-6 md:mt-2 md:mb-8 lg:mt-4">
              {t.formation_process.description_3}
            </p>
          )}
          <Button
            className="w-[137px] md:w-[142px] lg:w-[142px]"
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? t.actions.shorten : t.actions.see_more}
            <ChevronDownIcon
              className={`transition-transform ${isShowMore ? 'rotate-180' : ''}`}
            />
          </Button>
        </div>
      </div>
      <Image
        src={'/images/about/formation-process-background.png'}
        width={732}
        height={239}
        priority
        alt="formation process background"
        className="absolute -right-12 bottom-0 h-[125px] w-[380px] object-cover md:right-0 md:-bottom-7 md:h-[180px] md:w-[549px] lg:h-[239px] lg:w-[732px]"
      />
    </section>
  );
};

export default FormationProcess;
