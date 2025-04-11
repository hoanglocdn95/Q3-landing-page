import React from "react";
import Image from "next/image";
import viTranslations from "@/locales/vi/contact/hero.json";
import enTranslations from "@/locales/en/contact/hero.json";

interface HeroSectionProps {
  locale: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const t = locale === "en" ? enTranslations : viTranslations;

  return (
    <section className="relative h-[386px] flex items-center justify-center">
      <Image
        src="/images/hero-contact.webp"
        alt={t.heroImageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl lg:text-[56px] lg:leading-[110px] text-gray-25 font-extrabold">
          {t.title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection; 