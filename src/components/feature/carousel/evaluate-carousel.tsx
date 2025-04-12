import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Evaluate } from "@/types/course";
import React from "react";
import EvaluateCard from "../cards/evaluate-card";

interface Props {
  evaluate: Evaluate[];
}

const EvaluateCarousel = ({ evaluate }: Props) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1,
      }}
      className="max-w-[876px]"
    >
      {evaluate.map((item, index) => (
        <CarouselItem key={index} className="w-full">
          <EvaluateCard evaluate={item} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default EvaluateCarousel;
