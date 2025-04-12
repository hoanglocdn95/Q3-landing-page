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
      className="bg-background-cream"
      containerClassName="pt-10 md:pt-8 lg:pt-12"
    >
      <h2 className="text-24 lg:text-32 font-600 mb-3">Tổng quan</h2>
      <ul className="mb-10 space-y-3">
        {overview.map((item, index) => (
          <li key={index} className="lg:text-16 text-14 flex items-center">
            <CheckIcon className="mr-3 text-orange-500" />
            {item.title}
          </li>
        ))}
      </ul>
      <h2 className="font-600 mb-4 text-xl">
        Bạn nên tham gia khóa học này nếu bạn
      </h2>
      <ul className="mb-10 space-y-4">
        {reasonsToJoin.map((reason, index) => (
          <li key={index} className="flex items-center">
            <ImageIcon icon={reason.icon} alt="" className="mr-2" size="sm" />
            {reason.title}
          </li>
        ))}
      </ul>
      <div className="bg-background-tertiary rounded-12 px-8 py-6">
        <h3 className="text-24 mb-3 font-bold">Thời gian học tập linh hoạt</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="text-16">
            <div className="mb-4">
              <FileIcon />
            </div>
            <p className="font-600 mb-1">Thời lượng khóa học:</p>
            <span>{studyDetails.duration}</span>
          </div>
          <div className="text-16">
            <div className="mb-4">
              <HourglassIcon />
            </div>
            <p className="font-600 mb-1">Số giờ học:</p>
            <span> {studyDetails.totalHours}</span>
          </div>
          <div className="text-16">
            <div className="mb-4">
              <ClockRewindIcon />
            </div>
            <p className="font-600 mb-1">Số giờ học/buổi:</p>
            <span> {studyDetails.hoursPerSession}</span>
          </div>
          <div className="text-16">
            <div className="mb-4">
              <CalendarIcon />
            </div>
            <p className="font-600 mb-1">Lịch học:</p>
            <span> {studyDetails.schedule}</span>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default CourseOverview;
