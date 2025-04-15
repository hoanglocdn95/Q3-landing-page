import type { ICourseFeatures } from '@/types/course';
import MainContainer from './main-container';
import { cn } from '@/utils/cn';
import viTranslations from '@/locales/vi/course.json';
import enTranslations from '@/locales/en/course.json';
import { ELocale } from '@/constants/enum';
interface ICourseFeaturesItemProps {
  step: ICourseFeatures;
  className?: string;
}
interface ICourseFeaturesProps {
  courseName: string;
  steps: ICourseFeatures[];
  locale: ELocale;
}

const CourseFeaturesItem: React.FC<ICourseFeaturesItemProps> = ({
  step,
  className,
}: ICourseFeaturesItemProps) => {
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

const CourseFeatures: React.FC<ICourseFeaturesProps> = ({
  courseName,
  steps,
  locale,
}: ICourseFeaturesProps) => {
  const t = locale === 'en' ? enTranslations : viTranslations;

  return (
    <MainContainer id="course-features">
      <h2 className="text-24 lg:text-32 font-600 text-dark mb-4 md:mb-6 lg:mb-8">
        {t.course_features.highlighted_features} {courseName}
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
