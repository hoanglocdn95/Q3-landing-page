import React from 'react';
import Image from 'next/image';
import viTranslations from '@/locales/vi/contact/hero.json';
import enTranslations from '@/locales/en/contact/hero.json';

interface HeroSectionProps {
  locale: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const t = locale === 'en' ? enTranslations : viTranslations;

  return (
    <section className="relative flex h-[386px] items-center justify-center">
      <Image
        src="/images/hero-contact.png"
        alt={t.heroImageAlt}
        fill
        className="hidden object-cover md:block"
        priority
      />
      <Image
        src="/images/contact-mobile.png"
        alt={t.heroImageAlt}
        fill
        className="object-cover md:hidden"
        priority
      />

      <div className="relative z-10 text-center">
        <h1 className="text-gray-25 text-4xl font-extrabold lg:text-[56px] lg:leading-[110px]">
          {t.title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
