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

interface Stage {
  id: string;
  title: string;
  description: string[];
  className?: string;
}

interface StageProps extends Stage {
  index: number;
}

interface CourseRoadmapProps {
  data: Stage[];
}

const Stage = ({ title, description, className, index }: StageProps) => {
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
            <li key={index} className="font-500 text-12">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const CourseRoadmap = ({ data }: CourseRoadmapProps) => {
  return (
    <MainContainer
      id="course-roadmap"
      className="bg-secondary relative overflow-hidden"
      containerClassName="max-md:pb-[144px]"
    >
      <h2 className="text-24 lg:text-32 font-600 mb-4 text-white">
        Lộ trình khóa học
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
        alt="background-roadmap"
        className="absolute -right-22 bottom-0 h-[126px] w-[385px] object-cover md:-left-24 md:h-[196px] md:w-[603px] lg:h-[282px] lg:w-[864px]"
      />
    </MainContainer>
  );
};

export default CourseRoadmap;
