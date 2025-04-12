import {
  CalendarIcon,
  CheckIcon,
  ClockRewindIcon,
  FileIcon,
  HourglassIcon,
} from "@/components/icons";
import { Overview, ReasonsToJoin, StudyDetails } from "@/types/course";
import React from "react";
import MainContainer from "./main-container";
import { ImageIcon } from "@/components/ui/ImageIcon";

interface OverviewProps {
  overview: Overview[];
  reasonsToJoin: ReasonsToJoin[];
  studyDetails: StudyDetails;
}

const CourseOverview = ({ overview, reasonsToJoin, studyDetails }: OverviewProps) => {
  return (
    <MainContainer hasMenu className="bg-background-cream">
      <div className="container mx-auto">
        <h2 className="text-32 font-600 mb-3">Tổng quan</h2>
        <ul className="mb-10 space-y-3">
          {overview.map((item, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="text-orange-500 mr-3" />
              {item.title}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-600 mb-4">Bạn nên tham gia khóa học này nếu bạn</h2>
        <ul className="mb-10 space-y-4">
          {reasonsToJoin.map((reason, index) => (
            <li key={index} className="flex items-center">
              <ImageIcon icon={reason.icon} alt="" className="mr-2" size="sm" />
              {reason.title}
            </li>
          ))}
        </ul>
        <div className="bg-background-tertiary px-8 py-6 rounded-12">
          <h3 className="text-24 font-bold mb-3">Thời gian học tập linh hoạt</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-16">
              <div className="mb-4">
                <FileIcon />
              </div>
              <p className="mb-1 font-600">Thời lượng khóa học:</p>
              <span>{studyDetails.duration}</span>
            </div>
            <div className="text-16">
              <div className="mb-4">
                <HourglassIcon />
              </div>
              <p className="mb-1 font-600">Số giờ học:</p>
              <span> {studyDetails.totalHours}</span>
            </div>
            <div className="text-16">
              <div className="mb-4">
                <ClockRewindIcon />
              </div>
              <p className="mb-1 font-600">Số giờ học/buổi:</p>
              <span> {studyDetails.hoursPerSession}</span>
            </div>
            <div className="text-16">
              <div className="mb-4">
                <CalendarIcon />
              </div>
              <p className="mb-1 font-600">Lịch học:</p>
              <span> {studyDetails.schedule}</span>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default CourseOverview;
