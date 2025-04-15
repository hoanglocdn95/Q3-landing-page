'use client';
import { ChevronRightIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import React from 'react';
import viTranslations from '@/locales/vi/course.json';
import enTranslations from '@/locales/en/course.json';
import { ELocale } from '@/constants/enum';

interface IProps {
  className?: string;
  courseName: string;
  locale: ELocale;
}

const OverviewMenu = ({ className, courseName, locale }: IProps) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  const menuItems = [
    {
      title: t.menu.overview,
      id: 'course-overview',
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn('bg-background-secondary rounded-8 text-16', className)}>
      <h3 className="font-600 bg-primary before:border-l-primary relative px-6 py-[22px] text-white before:absolute before:top-1/2 before:-right-5 before:h-0 before:w-0 before:-translate-y-1/2 before:border-10 before:border-transparent before:content-['']">
        {t.menu.overview}
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
          {t.actions.registration} <ChevronRightIcon />
        </Button>
      </div>
    </nav>
  );
};

export default OverviewMenu;
