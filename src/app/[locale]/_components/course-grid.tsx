'use client';

import { useState } from 'react';
import { courses } from '@/data/course';
import CourseCard from './course-card';
import { ELocale } from '@/constants/enum';
import { ComingSoonPopup } from '@/components/ui/dialog';
import viTranslations from '@/locales/vi/home.json';
import enTranslations from '@/locales/en/home.json';

export default function CourseGrid({ locale }: { locale: ELocale }) {
  const [open, setOpen] = useState(false);
  const [titleCourse, setTitleCourse] = useState<string>('');
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  return (
    <section className="section-container hide-scrollbar relative z-[1] overflow-x-auto scroll-smooth py-12 pb-6 sm:overflow-hidden">
      <div className="flex w-max grid-cols-2 space-x-4 sm:grid sm:w-auto sm:gap-5 sm:space-x-0 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            locale={locale}
            title={
              typeof course.title === 'string'
                ? course.title
                : course.title[locale]
            }
            imageSrc={course.previewSrc}
            imageAlt={course.previewAlt}
            description={
              typeof course.shortDescription === 'string'
                ? course.shortDescription
                : course.shortDescription[locale]
            }
            comingSoon={course.comingSoon}
            slug={course.slug}
            showPopup={(title: string) => {
              setTitleCourse(title);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <ComingSoonPopup
        title={t.course_card.coming_soon}
        featureName={`${titleCourse}${t.coming_soon_popup.title}`}
        open={open}
        onOpenChange={setOpen}
      />
    </section>
  );
}
