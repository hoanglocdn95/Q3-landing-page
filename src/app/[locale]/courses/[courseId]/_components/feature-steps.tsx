import type { FeatureStep } from "@/types/course";
import MainContainer from "./main-container";
import { cn } from "@/utils/cn";

interface FeatureStepProps {
  step: FeatureStep;
  className?: string;
}
interface FeatureStepsProps {
  steps: FeatureStep[];
}

const FeatureStep: React.FC<FeatureStepProps> = ({ step, className }: FeatureStepProps) => {
  return (
    <div className={cn("w-full", className)}>
      <span className="text-48 font-700 text-secondary font-space-grotesk">{step.number}</span>
      <h3 className="font-600 mt-4 mb-3">{step.title}</h3>
      <p className="text-14 font-500 text-text-secondary">{step.description}</p>
    </div>
  );
};

const FeatureSteps: React.FC<FeatureStepsProps> = ({ steps }: FeatureStepsProps) => {
  return (
    <MainContainer>
      <h2 className="text-32 font-600 mb-8">Đặc Điểm Nổi Bật Của Khóa 1 Kèm 1</h2>
      <div className="flex flex-wrap gap-10">
        {steps.map((step, index) => (
          <FeatureStep key={index} step={step} className="w-[calc(100%/3-40px)]" />
        ))}
      </div>
    </MainContainer>
  );
};

export default FeatureSteps;
