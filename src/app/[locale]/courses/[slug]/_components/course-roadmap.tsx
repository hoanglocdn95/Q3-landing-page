import {
  BookIcon,
  EditIcon,
  FileCheckIcon,
  GraduationIcon,
} from '@/components/icons';
import { cn } from '@/utils/cn';
import React from 'react';
import MainContainer from './main-container';
import Image from 'next/image';
import viTranslations from '@/locales/vi/course.json';
import enTranslations from '@/locales/en/course.json';
import { ELocale } from '@/constants/enum';

interface IStage {
  id: string;
  title: string;
  description: string[];
  className?: string;
}

interface IStageProps extends IStage {
  index: number;
}

interface ICourseRoadmapProps {
  data: IStage[];
  locale: ELocale;
}

const Stage = ({ title, description, className, index }: IStageProps) => {
  const generateIcon = () => {
    switch (index) {
      case 1:
        return <EditIcon />;
      case 2:
        return <FileCheckIcon />;
      case 3:
        return <BookIcon />;
      case 4:
        return <GraduationIcon />;
      default:
        return null;
    }
  };

  return (
    <article
      className={cn(
        'flex flex-col gap-3 px-4 py-4 lg:flex-row lg:gap-4 lg:py-5',
        index % 2 === 0 ? 'bg-background-tertiary' : 'bg-white',
        className,
      )}
    >
      <div
        className={cn(
          'rounded-12 flex h-12 w-12 flex-shrink-0 items-center justify-center lg:h-16 lg:w-16',
          index % 2 === 0 ? 'bg-white' : 'bg-background-tertiary',
        )}
      >
        {generateIcon()}
      </div>
      <div>
        <h3 className="font-700 max-md:mb-1">{title}</h3>
        <ul className="text-14 list-disc space-y-1 pl-5">
          {description.map((item, index) => (
            <li key={index} className="font-500 text-14">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const CourseRoadmap = ({ data, locale }: ICourseRoadmapProps) => {
  const t = locale === 'en' ? enTranslations : viTranslations;
  return (
    <MainContainer
      id="course-roadmap"
      className="bg-secondary relative overflow-hidden"
      containerClassName="max-md:pb-[114px]"
    >
      <h2 className="text-24 lg:text-32 font-600 mb-4 text-white">
        {t.course_roadmap.learning_path}
      </h2>
      <div className="rounded-12 overflow-hidden bg-white">
        {data.map((item, index) => (
          <Stage key={item.id} {...item} index={index + 1} />
        ))}
      </div>
      <Image
        src={'/images/courses/background-roadmap.png'}
        width={864}
        height={282}
        alt="background roadmap"
        className="absolute -right-22 bottom-0 h-[126px] w-[385px] object-cover md:left-0 md:h-[236px] md:w-[603px] lg:h-[340px] lg:w-[864px]"
      />
    </MainContainer>
  );
};

export default CourseRoadmap;
