'use client';

import TrainerCard from '@/components/feature/cards/trainer-card';
import { trainers } from '@/data/trainers';
import React, { useCallback, useRef, useState } from 'react';
import viTranslations from '@/locales/vi/about.json';
import enTranslations from '@/locales/en/about.json';
import { ELocale } from '@/constants/enum';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselItem } from '@/components/ui/carousel';

const Trainers = ({ locale }: { locale: ELocale }) => {
  const [autoplay, setAutoplay] = useState(true);
  const t = locale === 'en' ? enTranslations : viTranslations;

  const autoplayRef = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    }),
  );

  const handleMouseEnter = useCallback(() => {
    if (autoplayRef.current && autoplay) {
      autoplayRef.current.stop();
      setAutoplay(false);
    }
  }, [autoplay]);

  const handleMouseLeave = useCallback(() => {
    if (autoplayRef.current && !autoplay) {
      autoplayRef.current.play();
      setAutoplay(true);
    }
  }, [autoplay]);

  return (
    <section className="relative z-10 pt-[30px] md:pt-15 lg:pt-16 lg:pb-4">
      <div className="section-container">
        <h2 className="text-24 md:text-32 font-700 lg:text-40 mb-6 text-center">
          {t.title}
        </h2>

        <div className="mx-auto max-w-[1200px]">
          <Carousel
            opts={{
              loop: true,
              slidesToScroll: 1,
              align: 'start',
              containScroll: 'trimSnaps',
            }}
            plugins={[autoplayRef.current]}
            className="px-0 sm:px-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {trainers.map((trainer, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2">
                <TrainerCard
                  key={index}
                  locale={locale}
                  trainer={trainer}
                  className="flex-1"
                />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
