import React from 'react';
import MainContainer from './main-container';
import EvaluateCarousel from '@/components/feature/carousel/evaluate-carousel';
import type { Evaluate } from '@/types/course';

interface Props {
  evaluate: Evaluate[];
}

const Evaluate = ({ evaluate }: Props) => {
  return (
    <MainContainer id="evaluate" className="bg-secondary">
      <div className="flex-1 space-y-4 lg:space-y-7">
        <h2 className="text-24 lg:text-32 font-600 text-white">
          Cảm nghĩ học viên
        </h2>
        <EvaluateCarousel evaluate={evaluate} />
      </div>
    </MainContainer>
  );
};

export default Evaluate;
