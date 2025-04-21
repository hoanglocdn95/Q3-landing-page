import React from 'react';
import Image from 'next/image';
import viTranslations from '@/locales/vi/contact.json';
import enTranslations from '@/locales/en/contact.json';
import { ELocale } from '@/constants/enum';

interface IHeroSectionProps {
  locale: ELocale;
}

const HeroSection: React.FC<IHeroSectionProps> = ({ locale }) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  return (
    <section className="relative flex h-[386px] items-center justify-center">
      <Image
        src="/images/contact/hero-contact.png"
        alt={t.hero.hero_image_alt}
        fill
        className="hidden object-cover md:block"
        priority
      />
      <Image
        src="/images/contact/contact-mobile.png"
        alt={t.hero.hero_image_alt}
        fill
        className="object-cover md:hidden"
        priority
      />

      <div className="relative z-10 text-center">
        <h1 className="text-gray-25 text-4xl font-extrabold lg:text-[56px] lg:leading-[110px]">
          {t.hero.title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
