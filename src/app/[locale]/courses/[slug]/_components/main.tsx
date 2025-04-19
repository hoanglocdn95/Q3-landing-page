'use client';

import { ELocale } from '@/constants/enum';
import { ICourse } from '@/types/course';
import OverviewMenu from './overview-menu';
import CourseOverview from './course-overview';
import CourseRoadmap from './course-roadmap';
import CourseFeatures from './course-feature';
import Evaluate from './evaluate';
import FAQ from './faq';
import Registration from './registration';
import { useEffect, useState } from 'react';

export default function Main({
  locale,
  courseDetail,
}: {
  locale: ELocale;
  courseDetail: ICourse;
}) {
  const [windowWidth, setWindowWidth] = useState<number>(1440);

  useEffect(() => {
    // Khởi tạo giá trị ban đầu
    setWindowWidth(window.innerWidth);

    // Hàm xử lý khi thay đổi kích thước màn hình
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Thêm event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener khi component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Tính toán marginTop dựa trên breakpoint
  const getMarginTop = () => {
    // Chỉ áp dụng marginTop cho màn hình medium trở lên (768px)
    if (windowWidth < 768) {
      return 0;
    }
    if (windowWidth < 1024) {
      return `-540px`;
    }
    return `-610px`;
  };

  return (
    <div className="relative pt-10 md:pt-8 lg:pt-12">
      <div className="sticky left-4 z-10 hidden h-full flex-shrink-0 md:top-8 md:left-8 md:block md:w-[225px] lg:top-12 lg:w-[258px] xl:left-[calc(50vw-600px)]">
        <div className="hidden flex-shrink-0 md:block md:w-[225px] lg:w-[258px]">
          <OverviewMenu
            courseName={courseDetail.name}
            className="sticky top-0"
            locale={locale}
          />
        </div>
      </div>
      <div className="flex-1" style={{ marginTop: getMarginTop() }}>
        <CourseOverview
          courseName={courseDetail.name}
          overview={courseDetail.overview}
          reasonsToJoin={courseDetail.reasonsToJoin}
          studyDetails={courseDetail.studyDetails}
          locale={locale}
        />
        <CourseRoadmap data={courseDetail.courseRoadmap} locale={locale} />
        <CourseFeatures
          courseName={courseDetail.name}
          steps={courseDetail.courseFeatures}
          locale={locale}
        />
        <Evaluate evaluate={courseDetail.evaluate} locale={locale} />
        <FAQ faq={courseDetail.faq} locale={locale} />
        <Registration banner={courseDetail.banner} locale={locale} />
      </div>
    </div>
  );
}
