import {
  CalendarIcon,
  CheckIcon,
  ClockRewindIcon,
  FileIcon,
  HourglassIcon,
} from '@/components/icons';
import { IOverview, IReasonsToJoin, IStudyDetails } from '@/types/course';
import React from 'react';
import SectionContainer from './section-container';
import { ImageIcon } from '@/components/ui/ImageIcon';
import viTranslations from '@/locales/vi/course.json';
import enTranslations from '@/locales/en/course.json';
import { ELocale } from '@/constants/enum';
interface IOverviewProps {
  courseName: string;
  overview: IOverview[];
  reasonsToJoin: IReasonsToJoin[];
  studyDetails: IStudyDetails;
  locale: ELocale;
}

const CourseOverview = ({
  courseName,
  overview,
  reasonsToJoin,
  studyDetails,
  locale,
}: IOverviewProps) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  return (
    <SectionContainer
      locale={locale}
      courseName={courseName}
      hasMenu
      containerClassName="pt-0 lg:pt-0"
    >
      <section id="course-overview" data-section="course-overview">
        <h2 className="text-24 lg:text-32 font-600 mb-4 lg:mb-3">
          {t.course_overview.overview}
        </h2>
        <ul className="mb-10 flex flex-col flex-wrap gap-x-8 gap-y-2 sm:flex-row lg:gap-x-12 lg:gap-y-3">
          {overview.map((item, index) => (
            <li
              key={index}
              className="lg:text-16 font-500 text-14 flex gap-3 sm:w-[calc(100%/2-16px)] lg:w-[calc(100%/2-24px)]"
            >
              <CheckIcon className="flex-shrink-0 text-orange-500" />
              {item.title}
            </li>
          ))}
        </ul>
      </section>
      <section id="reasons-to-join" data-section="reasons-to-join">
        <h2 className="font-600 text-24 lg:text-32 mb-4 lg:mb-3">
          {t.course_overview.reasons_to_join}
        </h2>
        <ul className="mb-10 space-y-4 md:space-y-3 lg:space-y-4">
          {reasonsToJoin.map((reason, index) => (
            <li
              key={index}
              className="text-14 font-500 lg:text-16 flex items-start"
            >
              <ImageIcon
                icon={reason.icon}
                alt={reason.icon}
                className="mt-0.5 mr-2 flex-shrink-0"
                size="sm"
              />
              {reason.title}
            </li>
          ))}
        </ul>
      </section>
      <section
        className="bg-background-tertiary rounded-12 px-6 py-5 lg:px-8 lg:py-6"
        id="study-details"
        data-section="study-details"
      >
        <h3 className="text-20 md:text-24 font-600 mb-3 max-md:text-center md:mb-5 lg:mb-6">
          {t.course_overview.study_details.flexible_study_time}
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="text-16 flex flex-row gap-3 md:flex-col md:gap-4">
            <FileIcon />
            <div>
              <p className="font-600 text-14 lg:text-16 mb-1">
                {t.course_overview.study_details.total_hours}
              </p>
              <span className="text-14 lg:text-16">
                {studyDetails.duration}
              </span>
            </div>
          </div>
          <div className="text-16 flex flex-row gap-3 md:flex-col md:gap-4">
            <HourglassIcon />
            <div>
              <p className="font-600 text-14 lg:text-16 mb-1">
                {t.course_overview.study_details.hours_per_session}
              </p>
              <span className="text-14 lg:text-16">
                {studyDetails.totalHours}
              </span>
            </div>
          </div>
          <div className="text-16 flex flex-row gap-3 md:flex-col md:gap-4">
            <ClockRewindIcon />
            <div>
              <p className="font-600 text-14 lg:text-16 mb-1">
                {t.course_overview.study_details.sessions}
              </p>
              <span className="text-14 lg:text-16">
                {studyDetails.hoursPerSession}
              </span>
            </div>
          </div>
          <div className="text-16 flex flex-row gap-3 md:flex-col md:gap-4">
            <CalendarIcon />
            <div>
              <p className="font-600 text-14 lg:text-16 mb-1">
                {t.course_overview.study_details.schedule}
              </p>
              <span className="text-14 lg:text-16">
                {studyDetails.schedule}
              </span>
            </div>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default CourseOverview;
