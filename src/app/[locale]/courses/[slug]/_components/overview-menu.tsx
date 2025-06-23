/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { ChevronRightIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import React, { useEffect, useRef, useState } from 'react';
import viTranslations from '@/locales/vi/course.json';
import enTranslations from '@/locales/en/course.json';
import { ELocale } from '@/constants/enum';

interface IProps {
  className?: string;
  locale: ELocale;
}

const OverviewMenu = ({ className, locale }: IProps) => {
  const [activeSection, setActiveSection] = useState('course-overview');
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  // Lưu trữ vị trí cuộn trước đó để xác định hướng cuộn
  const lastScrollTop = useRef(0);
  // Lưu trữ hướng cuộn hiện tại (1: xuống, -1: lên)
  const scrollDirection = useRef(1);
  // Lưu trữ section active hiện tại bằng ref để tránh mất đồng bộ
  const currentActiveRef = useRef('course-overview');
  // Thời gian lần cuối thay đổi active section
  const lastChangeTimeRef = useRef(0);
  // Lưu trữ tốc độ cuộn
  const scrollSpeedRef = useRef(0);
  // Timestamp của lần cuộn cuối
  const lastScrollTimeRef = useRef(Date.now());
  // Flag để kiểm tra component đã mount
  const isMounted = useRef(false);

  const determineScrollDirection = () => {
    const st = window.scrollY || document.documentElement.scrollTop;
    const now = Date.now();
    const timeDelta = now - lastScrollTimeRef.current;

    // Tính tốc độ cuộn (px/ms)
    if (timeDelta > 0) {
      const scrollDelta = Math.abs(st - lastScrollTop.current);
      scrollSpeedRef.current = scrollDelta / timeDelta;
    }

    if (st > lastScrollTop.current) {
      scrollDirection.current = 1; // cuộn xuống
    } else if (st < lastScrollTop.current) {
      scrollDirection.current = -1; // cuộn lên
    }

    lastScrollTop.current = st <= 0 ? 0 : st; // Cập nhật vị trí cuộn trước đó
    lastScrollTimeRef.current = now; // Cập nhật thời gian cuộn
  };

  // Hàm để xác định section active dựa trên vị trí cuộn hiện tại
  const updateActiveSection = () => {
    // Lấy thời gian hiện tại
    const now = Date.now();

    // Kiểm tra xem đã đủ thời gian từ lần thay đổi cuối chưa
    // Bỏ qua kiểm tra này nếu đang cuộn nhanh lên đầu hoặc khi component mới mount
    const isFastScrollingUp =
      scrollDirection.current === -1 && scrollSpeedRef.current > 1.5;
    if (
      !isFastScrollingUp &&
      !isMounted.current &&
      now - lastChangeTimeRef.current < getMinChangeTime()
    ) {
      return;
    }

    // Tìm tất cả các section có data-section attribute
    const sectionElements = document.querySelectorAll('[data-section]');

    // Lấy vị trí giữa màn hình
    const viewportHeight = window.innerHeight;
    const viewportMiddle = window.scrollY + viewportHeight / 2;

    // Khoảng dung sai (tolerance) - tăng lên khi cuộn nhanh
    const tolerance =
      isFastScrollingUp || !isMounted.current
        ? viewportHeight * 0.5 // Tăng dung sai khi cuộn nhanh lên đầu hoặc khi mới load trang
        : viewportHeight * 0.2;

    // Tìm section gần nhất với giữa màn hình
    let closestSection = null;
    let minDistance = Number.POSITIVE_INFINITY;

    sectionElements.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionMiddle = window.scrollY + rect.top + rect.height / 2;
      const distance = Math.abs(sectionMiddle - viewportMiddle);

      // Nếu section này gần giữa màn hình hơn section trước đó
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    });

    // Mở rộng điều kiện cập nhật khi cuộn nhanh lên đầu hoặc khi mới load trang
    if (
      closestSection &&
      (minDistance <= tolerance || isFastScrollingUp || !isMounted.current)
    ) {
      const newActiveSection =
        (closestSection as HTMLElement).getAttribute('data-section') || '';

      // Chỉ cập nhật nếu section active thay đổi
      if (newActiveSection !== currentActiveRef.current) {
        currentActiveRef.current = newActiveSection;
        setActiveSection(newActiveSection);
        lastChangeTimeRef.current = now;
      }
    }

    // Đánh dấu component đã mount sau lần cập nhật đầu tiên
    isMounted.current = true;
  };

  const getMinChangeTime = () => {
    // Khi cuộn nhanh lên đầu, giảm thời gian đợi giữa các thay đổi
    if (scrollDirection.current === -1 && scrollSpeedRef.current > 1.5) {
      return 0;
    }
    return 50;
  };

  const getDebounceTime = () => {
    // Khi cuộn nhanh thì giảm debounce time
    return scrollSpeedRef.current > 2 ? 5 : 20;
  };

  useEffect(() => {
    // Ngay khi component mount, cập nhật section active dựa trên vị trí cuộn hiện tại
    updateActiveSection();

    // Theo dõi sự kiện cuộn để xác định hướng
    window.addEventListener('scroll', determineScrollDirection, {
      passive: true,
    });

    // Biến để lưu trữ timeout ID cho debounce
    let debounceTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      // Hủy timeout trước đó nếu có
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      // Xử lý ngay lập tức nếu đang cuộn nhanh lên đầu
      if (scrollDirection.current === -1 && scrollSpeedRef.current > 1.5) {
        updateActiveSection();
      }

      // Tạo timeout mới để debounce cho các trường hợp khác
      debounceTimeout = setTimeout(updateActiveSection, getDebounceTime());
    };

    // Theo dõi sự kiện cuộn
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Gọi handleScroll một lần để thiết lập section active ban đầu
    handleScroll();

    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      window.removeEventListener('scroll', determineScrollDirection);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Không phụ thuộc vào activeSection

  // Cập nhật ref khi state thay đổi
  useEffect(() => {
    currentActiveRef.current = activeSection;
  }, [activeSection]);

  const menuItems = [
    {
      title: t.menu.overview,
      id: 'course-overview',
    },
    {
      title: t.menu.reasons_to_join,
      id: 'reasons-to-join',
    },
    {
      title: t.menu.study_details,
      id: 'study-details',
    },
    {
      title: t.menu.course_roadmap,
      id: 'course-roadmap',
    },
    {
      title: `${t.menu.course_features}`,
      id: 'course-features',
    },
    {
      title: t.menu.student_feedback,
      id: 'evaluate',
    },
    {
      title: t.menu.faq,
      id: 'faq',
    },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav className={cn('bg-background-secondary rounded-8 text-16', className)}>
      <ul className="space-y-4 divide-y divide-gray-300 lg:space-y-5">
        {menuItems.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              'text-dark font-500 text-14 lg:text-16 mb-0 cursor-pointer px-3 py-4 lg:px-6 lg:py-5',
              activeSection === item.id
                ? "bg-primary before:!border-l-primary relative text-white before:absolute before:top-1/2 before:-right-5 before:h-0 before:w-0 before:-translate-y-1/2 before:border-11 before:border-transparent before:content-['']"
                : '',
              index === 0 && 'rounded-t-8',
            )}
            onClick={() => handleScrollTo(item.id)}
          >
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
      <div className="p-3 pt-1.5 lg:p-4 lg:px-6">
        <Button>
          {t.actions.registration} <ChevronRightIcon />
        </Button>
      </div>
    </nav>
  );
};

export default OverviewMenu;
