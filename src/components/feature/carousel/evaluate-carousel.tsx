import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { IEvaluate } from '@/types/course';
import React from 'react';
import EvaluateCard from '../cards/evaluate-card';
import { ELocale } from '@/constants/enum';

interface IProps {
  studentEvaluate: IEvaluate[];
  locale: ELocale;
}

const EvaluateCarousel = ({ studentEvaluate, locale = ELocale.VI }: IProps) => {
  console.log(' EvaluateCarousel ~ studentEvaluate:', studentEvaluate);
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="max-w-[calc(100vw-32px)] px-0 sm:px-6 md:max-w-[calc(100vw-64px-225px-54px-48px)] xl:max-w-[calc(100vw-258px-66px-64px-64px-48px)]"
    >
      {studentEvaluate.map((item, index) => (
        <CarouselItem key={index} className="basis-[287px] md:basis-full">
          <EvaluateCard evaluate={item} locale={locale} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default EvaluateCarousel;
