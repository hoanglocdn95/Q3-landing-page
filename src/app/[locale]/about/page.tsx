import React from 'react';
import Mission from './_components/mission';
import FormationProcess from './_components/formation-process';
import Trainers from './_components/trainers';
import { locales } from '@/constants/common';
import { notFound } from 'next/navigation';
import ContactFormSection from '@/components/contact-form-section';
import viTranslations from '@/locales/vi/about.json';
import enTranslations from '@/locales/en/about.json';
import { ELocale } from '@/constants/enum';

export function generateStaticParams() {
  return locales.flatMap(locale => {
    return {
      locale,
    };
  });
}

const Page = async ({ params }: { params: Promise<{ locale: ELocale }> }) => {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  return (
    <div className="gradient-background relative">
      <section className="flex h-[386px] items-center justify-center bg-[url('/images/about/banner-mobile.png')] bg-cover bg-center md:bg-[url('/images/about/banner-desktop.png')]">
        <h1 className="text-text-gray-white text-32 md:text-48 lg:text-[56px]">
          {t.title}
        </h1>
      </section>
      <Mission locale={locale} />
      <section className="relative flex h-[247px] items-center justify-center bg-[url('/images/about/sub-banner-mobile.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-55 before:content-[''] md:bg-[url('/images/about/sub-banner-desktop.png')] lg:h-[500px]">
        <div className="relative z-10 text-center">
          <p className="text-12 font-600 mb-5 tracking-[0.5em] text-white uppercase">
            {t.mission.introduce}
          </p>
          <h2 className="font-space-grotesk text-32 md:text-48 px-4 leading-[1.3] whitespace-pre-line text-[#E6E6E6] lg:text-[56px]">
            {t.mission.values}
          </h2>
        </div>
      </section>
      <FormationProcess locale={locale} />
      <Trainers locale={locale} />
      <ContactFormSection locale={locale} isShowBackground />
    </div>
  );
};

export default Page;
