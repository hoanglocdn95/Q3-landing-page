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
  courseName: string;
  locale: ELocale;
}

const OverviewMenu = ({ className, courseName, locale }: IProps) => {
  const [activeSection, setActiveSection] = useState('course-overview');
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  // Lưu trữ vị trí cuộn trước đó để xác định hướng cuộn
  const lastScrollTop = useRef(0);
  // Lưu trữ hướng cuộn hiện tại (1: xuống, -1: lên)
  const scrollDirection = useRef(1);

  const determineScrollDirection = () => {
    const st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop.current) {
      scrollDirection.current = 1; // cuộn xuống
    } else if (st < lastScrollTop.current) {
      scrollDirection.current = -1; // cuộn lên
    }
    lastScrollTop.current = st <= 0 ? 0 : st; // Cập nhật vị trí cuộn trước đó
  };

  useEffect(() => {
    // Theo dõi sự kiện cuộn để xác định hướng
    window.addEventListener('scroll', determineScrollDirection, {
      passive: true,
    });

    // Tìm tất cả các section có data-section attribute
    const sectionElements = document.querySelectorAll('[data-section]');

    // Biến để lưu trữ timeout ID cho debounce
    let debounceTimeout: NodeJS.Timeout | null = null;

    // Biến để lưu trữ section active hiện tại
    let currentActive = activeSection;

    // Thời gian debounce (ms)
    const debounceTime = 50;

    // Khoảng thời gian tối thiểu giữa các lần thay đổi active section (ms)
    const minChangeTime = 100;

    // Thời gian lần cuối thay đổi active section
    let lastChangeTime = 0;

    const handleScroll = () => {
      // Hủy timeout trước đó nếu có
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      // Tạo timeout mới để debounce
      debounceTimeout = setTimeout(() => {
        // Lấy thời gian hiện tại
        const now = Date.now();

        // Kiểm tra xem đã đủ thời gian từ lần thay đổi cuối chưa
        if (now - lastChangeTime < minChangeTime) {
          return;
        }

        // Lấy vị trí giữa màn hình
        const viewportHeight = window.innerHeight;
        const viewportMiddle = window.scrollY + viewportHeight / 2;

        // Khoảng dung sai (tolerance) - phần trăm của chiều cao viewport
        const tolerance = viewportHeight * 0.15; // 15% của chiều cao viewport

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

        // Chỉ cập nhật nếu section gần nhất nằm trong khoảng dung sai
        if (closestSection && minDistance <= tolerance) {
          const newActiveSection =
            (closestSection as HTMLElement).getAttribute('data-section') || '';

          // Chỉ cập nhật nếu section active thay đổi
          if (newActiveSection !== currentActive) {
            currentActive = newActiveSection;
            setActiveSection(newActiveSection);
            lastChangeTime = now;
          }
        }
      }, debounceTime);
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
      title: `${t.menu.course_features} ${courseName}`,
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
                ? "bg-primary before:!border-l-primary relative text-white before:absolute before:top-1/2 before:-right-5 before:h-0 before:w-0 before:-translate-y-1/2 before:border-10 before:border-transparent before:content-['']"
                : '',
              index === 0 && 'rounded-t-8',
            )}
            onClick={() => handleScrollTo(item.id)}
          >
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
      <div className="p-3 pt-1.5 lg:p-4">
        <Button>
          {t.actions.registration} <ChevronRightIcon />
        </Button>
      </div>
    </nav>
  );
};

export default OverviewMenu;
