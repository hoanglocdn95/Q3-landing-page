import {
  CalendarIcon,
  CheckIcon,
  ClockRewindIcon,
  FileIcon,
  HourglassIcon,
} from '@/components/icons';
import { Overview, ReasonsToJoin, StudyDetails } from '@/types/course';
import React from 'react';
import MainContainer from './main-container';
import { ImageIcon } from '@/components/ui/ImageIcon';

interface OverviewProps {
  overview: Overview[];
  reasonsToJoin: ReasonsToJoin[];
  studyDetails: StudyDetails;
}

const CourseOverview = ({
  overview,
  reasonsToJoin,
  studyDetails,
}: OverviewProps) => {
  return (
    <MainContainer
      hasMenu
      containerClassName="pt-10 md:pt-8 lg:pt-12"
      id="course-overview"
    >
      <h2 className="text-24 lg:text-32 font-600 mb-4 lg:mb-3">Tổng quan</h2>
      <ul className="mb-10 flex flex-wrap gap-x-8 gap-y-2 lg:gap-x-12 lg:gap-y-3">
        {overview.map((item, index) => (
          <li
            key={index}
            className="lg:text-16 font-500 text-14 flex w-[calc(100%/2-16px)] gap-3 lg:w-[calc(100%/2-24px)]"
          >
            <CheckIcon className="flex-shrink-0 text-orange-500" />
            {item.title}
          </li>
        ))}
      </ul>
      <h2 className="font-600 text-24 lg:text-32 mb-4 lg:mb-3">
        Bạn nên tham gia khóa học này nếu bạn
      </h2>
      <ul className="mb-10 space-y-4 md:space-y-3 lg:space-y-4">
        {reasonsToJoin.map((reason, index) => (
          <li
            key={index}
            className="text-14 font-500 lg:text-16 flex items-center"
          >
            <ImageIcon
              icon={reason.icon}
              alt={reason.icon}
              className="mr-2 flex-shrink-0"
              size="sm"
            />
            {reason.title}
          </li>
        ))}
      </ul>
      <div
        className="bg-background-tertiary rounded-12 px-6 py-5 lg:px-8 lg:py-6"
        id="study-details"
      >
        <h3 className="text-20 md:text-24 font-600 mb-3 max-md:text-center md:mb-5 lg:mb-6">
          Thời gian học tập linh hoạt
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="text-16 flex flex-row gap-3 md:flex-col md:gap-4">
            <FileIcon />
            <div>
              <p className="font-600 text-14 lg:text-16 mb-1">
                Thời lượng khóa học:
              </p>
              <span className="text-14 lg:text-16">
                {studyDetails.duration}
              </span>
            </div>
          </div>
          <div className="text-16 flex flex-row gap-3 md:flex-col md:gap-4">
            <HourglassIcon />
            <div>
              <p className="font-600 text-14 lg:text-16 mb-1">Số giờ học:</p>
              <span className="text-14 lg:text-16">
                {studyDetails.totalHours}
              </span>
            </div>
          </div>
          <div className="text-16 flex flex-row gap-3 md:flex-col md:gap-4">
            <ClockRewindIcon />
            <div>
              <p className="font-600 text-14 lg:text-16 mb-1">
                Số giờ học/buổi:
              </p>
              <span className="text-14 lg:text-16">
                {studyDetails.hoursPerSession}
              </span>
            </div>
          </div>
          <div className="text-16 flex flex-row gap-3 md:flex-col md:gap-4">
            <CalendarIcon />
            <div>
              <p className="font-600 text-14 lg:text-16 mb-1">Lịch học:</p>
              <span className="text-14 lg:text-16">
                {studyDetails.schedule}
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default CourseOverview;
