import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { IEvaluate } from '@/types/course';
import React from 'react';
import EvaluateCard from '../cards/evaluate-card';

interface IProps {
  evaluate: IEvaluate[];
}

const EvaluateCarousel = ({ evaluate }: IProps) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="max-w-[calc(100vw-32px)] px-0 sm:px-6 md:max-w-[calc(100vw-64px-225px-54px-48px)] xl:max-w-[calc(100vw-258px-66px-64px-64px-48px)]"
    >
      {evaluate.map((item, index) => (
        <CarouselItem key={index} className="basis-[287px] md:basis-full">
          <EvaluateCard evaluate={item} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default EvaluateCarousel;
