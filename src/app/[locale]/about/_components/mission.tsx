import { ChevronDownIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ELocale } from '@/constants/enum';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import React from 'react';
import viTranslations from '@/locales/vi/about.json';
import enTranslations from '@/locales/en/about.json';

const ImageGallery = ({ className }: { className?: string }) => {
  const images = [
    {
      src: '/images/about/mission-image-1.png',
      alt: 'image 1',
      containerClassName: 'basis-[calc(50%-8px)] flex items-end justify-end',
      className: 'w-[86px] h-[86px] md:w-[129px] md:h-[129px] xl:w-40 xl:h-40',
    },
    {
      src: '/images/about/mission-image-2.png',
      alt: 'image 2',
      containerClassName: 'basis-[calc(50%-8px)] flex justify-start',
      className: 'w-[86px] h-[144px] md:w-[129px] md:h-[192px] xl:h-60 xl:w-40',
    },
    {
      src: '/images/about/mission-image-3.png',
      alt: 'image 3',
      containerClassName: 'flex justify-start',
      className:
        'w-[112px] h-[72px] md:w-[155px] md:h-[103px] xl:h-[128px] xl:w-[192px]',
    },
    {
      src: '/images/about/mission-image-4.png',
      alt: 'image 4',
      containerClassName: 'flex justify-start',
      className: 'w-[86px] h-[144px] md:w-[129px] md:h-[192px] xl:h-60 xl:w-40',
    },
    {
      src: '/images/about/mission-image-5.png',
      alt: 'image 5',
      containerClassName: 'flex justify-start',
      className:
        'w-[112px] h-[72px] md:w-[155px] md:h-[103px] xl:h-[128px] xl:w-[192px]',
    },
  ];

  return (
    <div className={cn('mx-auto flex items-center justify-center', className)}>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
        {images.map((image, index) => (
          <div key={index} className={image.containerClassName}>
            <Image
              src={image.src}
              alt={image.alt}
              width={192}
              height={240}
              priority
              className={cn('rounded-8 object-cover', image.className)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Mission = ({ locale }: { locale: ELocale }) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  return (
    <section className="bg-background-cream relative mx-auto overflow-hidden py-10 md:py-15 lg:py-16">
      <div className="section-container relative z-10 flex flex-col flex-wrap gap-6 md:flex-row md:gap-0 lg:gap-8">
        <div className="flex-1">
          <h2 className="lg:text-40 md:text-32 text-24 font-700">
            {t.mission.mission}
          </h2>
          <p className="font-500 text-14 lg:text-16 text-text-secondary mt-3 mb-6 md:mt-2 md:mb-8 lg:mt-4">
            {t.mission.description}
          </p>
          <Button className="w-[137px] md:w-[155px]">
            {t.actions.see_more} <ChevronDownIcon />
          </Button>
        </div>
        <ImageGallery className="relative z-10 w-full md:w-[525px] lg:w-[576px]" />
      </div>
      <Image
        src={'/images/about/background.png'}
        width={385}
        height={267}
        priority
        alt="background-roadmap"
        className="absolute bottom-0 left-0 h-[116px] w-[175px] object-cover md:h-[197px] md:w-[297px] lg:-bottom-16 lg:h-[267px] lg:w-[385px]"
      />
      <div className="absolute top-[340px] left-[-210px] z-0 h-[672px] w-[660px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#FD7200_0%,_rgba(217,_217,_217,_0)_100%)] opacity-[0.15] md:top-[132px] md:left-[-600px] md:h-[1254px] md:w-[1232px]" />
    </section>
  );
};

export default Mission;
