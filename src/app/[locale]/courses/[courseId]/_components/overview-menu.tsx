'use client';
import { ChevronRightIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import React from 'react';

interface Props {
  className?: string;
}

const OverviewMenu = ({ className }: Props) => {
  const menuItems = [
    {
      title: 'Bạn nên tham gia khóa học này nếu bạn:',
      id: 'course-overview',
    },
    {
      title: 'Thời gian học tập linh hoạt',
      id: 'study-details',
    },
    {
      title: 'Lộ trình khóa học',
      id: 'course-roadmap',
    },
    {
      title: 'Đặc Điểm Nổi Bật Của Khóa 1 Kèm 1',
      id: 'course-features',
    },
    {
      title: 'Cảm nghĩ học viên',
      id: 'evaluate',
    },
    {
      title: 'Câu Hỏi Thường Gặp',
      id: 'faq',
    },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'bg-background-secondary rounded-8 text-16 overflow-hidden',
        className,
      )}
    >
      <h3 className="font-600 bg-primary px-6 py-[22px] text-white">
        Tổng quan
      </h3>
      <ul className="mt-4 space-y-4 divide-y divide-gray-300 px-3 lg:mt-2.5 lg:space-y-5 lg:px-6">
        {menuItems.map(item => (
          <li
            key={item.id}
            className="text-dark font-500 text-14 lg:text-16 cursor-pointer pb-4 lg:pb-5"
            onClick={() => handleScrollTo(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="p-3 pt-1.5 lg:p-4">
        <Button>
          Đăng ký ngay <ChevronRightIcon />
        </Button>
      </div>
    </nav>
  );
};

export default OverviewMenu;
