'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import viTranslations from '@/locales/vi/home.json';
import enTranslations from '@/locales/en/home.json';
import { ELocale } from '@/constants/enum';
import { trainers } from '@/data/trainers';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ITrainer } from '@/types/trainer';

export default function TeachersTeamSection({ locale }: { locale: ELocale }) {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  const [autoplay, setAutoplay] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<ITrainer | null>(null);

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
    <div className="relative py-10 md:py-15 lg:py-20">
      <section className="section-container">
        <Image
          src={'/images/about/background.png'}
          width={385}
          height={267}
          priority
          alt="background-roadmap"
          className="absolute top-0 left-0 h-[116px] w-[175px] object-cover md:h-[197px] md:w-[297px] lg:-bottom-16 lg:h-[267px] lg:w-[385px]"
        />
        <div className="absolute top-[408px] left-[406px] z-0 hidden size-[300px] rotate-[29deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#b5e2fa_0%,_rgba(217,_217,_217,_0)_100%)] sm:size-[500px] md:top-[-20px] md:left-[635px] md:size-[963px] lg:block"></div>
        <div className="absolute right-[10px] bottom-[240px] z-0 h-[672px] w-[660px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#FD7200_0%,_rgba(217,_217,_217,_0)_100%)] opacity-[0.15] md:right-[600px] md:bottom-[160px] md:h-[1254px] md:w-[1232px]"></div>
        <h2 className="text-text-primary sm:text-32 text-24 relative mb-10 text-center font-bold lg:text-[40px] lg:leading-[72px]">
          {t.teachers.title}
        </h2>

        <div className="mx-auto max-w-[900px]">
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
            {trainers.map((teacher, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2"
              >
                <div
                  className="mx-auto w-[calc(100vw-32px)] max-w-[300px] cursor-pointer overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg md:w-auto md:max-w-[unset]"
                  onClick={() => {
                    setSelectedTrainer(teacher);
                    setOpen(true);
                  }}
                >
                  <div className="relative aspect-[3/4] w-full rounded-xl">
                    <Image
                      priority
                      src={teacher.imageUrl}
                      alt={teacher.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-10 left-0 w-full text-center text-white">
                      <h3 className="text-24 sm:text-28 mb-3 leading-tight font-bold">
                        {teacher.name}
                      </h3>
                      <p className="text-base text-gray-300">{teacher.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href={`/${locale}/teachers`} className="relative">
            <Button className="w-[137px] md:w-[142px] lg:w-[142px]">
              {t.teachers.view_all_button}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Modal hiển thị chi tiết trainer */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="font-space-grotesk shadow-outline max-w-[100svw] overflow-hidden rounded-none border-0 p-0 sm:max-w-[794px] md:max-h-[462px] [&_button]:ring-0 [&_button]:focus:ring-0 [&_button]:focus:outline-none">
          <div className="sr-only">
            <DialogTitle />
          </div>
          {selectedTrainer && (
            <>
              <div className="flex h-fit flex-col gap-3 px-4 py-12 sm:flex-row sm:gap-6 sm:p-0">
                <div className="relative aspect-[311/360] h-fit w-full overflow-hidden transition-transform duration-300 group-hover:scale-105 max-md:max-w-[360px] md:aspect-[256/360] md:w-[256px] lg:aspect-[316/462] lg:w-[316px]">
                  <Image
                    src={selectedTrainer.imageUrl}
                    alt={`Image of ${selectedTrainer.name}`}
                    fill
                    className="object-cover transition-transform duration-500 md:hover:scale-110"
                    priority
                  />
                </div>
                <div className="relative flex-1 sm:pt-[78px] sm:pr-6">
                  <h3 className="text-24 lg:text-28 font-700 hover:text-primary transition-colors duration-300">
                    {selectedTrainer.name}
                  </h3>
                  <p className="text-16 font-500">{selectedTrainer.role}</p>
                  <p className="text-14 font-400 mt-2 leading-[1.2] md:mt-3">
                    {selectedTrainer.description[locale]}
                  </p>
                  <Image
                    src={'/images/about/background.png'}
                    width={385}
                    height={267}
                    priority
                    alt="background-roadmap"
                    className="absolute bottom-0 left-0 hidden h-[116px] w-[175px] object-cover md:-bottom-16 md:-left-6 md:block md:h-[202px] md:w-[306px]"
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
