import type { CourseFeatures as CourseFeaturesType } from '@/types/course';
import MainContainer from './main-container';
import { cn } from '@/utils/cn';

interface CourseFeaturesItemProps {
  step: CourseFeaturesType;
  className?: string;
}
interface CourseFeaturesProps {
  steps: CourseFeaturesType[];
}

const CourseFeaturesItem: React.FC<CourseFeaturesItemProps> = ({
  step,
  className,
}: CourseFeaturesItemProps) => {
  return (
    <div className={cn('w-full', className)}>
      <span className="text-40 lg:text-48 font-700 text-secondary font-space-grotesk !leading-[30px]">
        {step.number}
      </span>
      <h3 className="font-600 mt-4 mb-1 md:mb-2 lg:mb-3">{step.title}</h3>
      <p className="text-14 font-500 text-text-secondary">{step.description}</p>
    </div>
  );
};

const CourseFeatures: React.FC<CourseFeaturesProps> = ({
  steps,
}: CourseFeaturesProps) => {
  return (
    <MainContainer id="course-features">
      <h2 className="text-24 lg:text-32 font-600 text-dark mb-4 md:mb-6 lg:mb-8">
        Đặc Điểm Nổi Bật Của Khóa 1 Kèm 1
      </h2>
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-3 md:gap-y-8">
        {steps.map((step, index) => (
          <CourseFeaturesItem key={index} step={step} className="" />
        ))}
      </div>
    </MainContainer>
  );
};

export default CourseFeatures;
