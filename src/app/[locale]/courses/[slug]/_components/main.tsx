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
import { useEffect, useState, useRef } from 'react';

export default function Main({
  locale,
  courseDetail,
}: {
  locale: ELocale;
  courseDetail: ICourse;
}) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const [contentReady, setContentReady] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Sử dụng useEffect để đo chiều cao sau khi component mount
  useEffect(() => {
    // Đặt timeout để đảm bảo trình duyệt có thời gian vẽ UI trước khi đo
    const timer = setTimeout(() => {
      setWindowWidth(window.innerWidth);

      if (menuRef.current) {
        setMenuHeight(menuRef.current.offsetHeight);
      }

      // Đánh dấu content đã sẵn sàng hiển thị sau khi đo xong
      setContentReady(true);
    }, 100);

    // Xử lý khi thay đổi kích thước màn hình
    const handleResize = () => {
      // Khi resize, ẩn content lại
      setContentReady(false);

      setWindowWidth(window.innerWidth);
      if (menuRef.current) {
        setMenuHeight(menuRef.current.offsetHeight);
      }

      // Hiển thị lại content sau khi tính toán xong
      setTimeout(() => {
        setContentReady(true);
      }, 100);
    };

    // Thêm event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Tính toán marginTop dựa trên chiều cao thực tế của menu và breakpoint
  const getMarginTop = () => {
    // Chỉ áp dụng marginTop cho màn hình medium trở lên (768px)
    if (windowWidth <= 768) {
      return 0;
    }

    // Sử dụng giá trị fallback tùy theo breakpoint nếu chưa đo được
    if (menuHeight === 0) {
      if (windowWidth < 1024) {
        return `-540px`;
      }
      return `-610px`;
    }

    // Sử dụng chiều cao thực tế khi đã đo được
    return `-${menuHeight}px`;
  };

  // Nếu content chưa sẵn sàng, hiển thị loading

  // Hiển thị nội dung chính khi đã sẵn sàng
  return (
    <div className="relative pt-10 md:pt-8 lg:pt-12">
      {!contentReady && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
          </div>
        </div>
      )}
      <div className="sticky left-4 z-10 hidden h-full flex-shrink-0 md:top-[100px] md:left-8 md:block md:w-[225px] lg:w-[258px] xl:left-[calc(50vw-600px)]">
        <div
          ref={menuRef}
          className="hidden flex-shrink-0 md:block md:w-[225px] lg:w-[258px]"
        >
          <OverviewMenu className="sticky top-0" locale={locale} />
        </div>
      </div>
      <div
        className="flex-1 overflow-hidden max-md:mt-0"
        style={{ marginTop: getMarginTop() }}
      >
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
