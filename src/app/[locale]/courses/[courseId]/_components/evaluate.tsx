import React from "react";
import MainContainer from "./main-container";
import EvaluateCarousel from "@/components/feature/carousel/evaluate-carousel";
import type { Evaluate } from "@/types/course";

interface Props {
  evaluate: Evaluate[];
}

const Evaluate = ({ evaluate }: Props) => {
  return (
    <MainContainer>
      <div className="flex-1 space-y-10">
        <h2 className="text-2xl font-bold">Đánh giá khóa học</h2>
        <EvaluateCarousel evaluate={evaluate} />
      </div>
    </MainContainer>
  );
};

export default Evaluate;
