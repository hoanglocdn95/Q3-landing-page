import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { Evaluate } from '@/types/course';
import React from 'react';
import EvaluateCard from '../cards/evaluate-card';

interface Props {
  evaluate: Evaluate[];
}

const EvaluateCarousel = ({ evaluate }: Props) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="max-w-[calc(100vw-32px)] md:max-w-[calc(100vw-64px-225px-54px-48px)] xl:max-w-[calc(100vw-258px-66px-64px-64px-48px)]"
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
