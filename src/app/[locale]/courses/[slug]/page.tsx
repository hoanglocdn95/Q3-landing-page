/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { notFound } from 'next/navigation';
import CourseRoadmap from './_components/course-roadmap';

import { courses } from '@/data/course';
import CourseOverview from './_components/course-overview';
import FAQ from './_components/faq';
import Registration from './_components/registration';
import Image from 'next/image';
import Evaluate from './_components/evaluate';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@/components/icons';
import CourseFeatures from './_components/course-feature';
import { ICourse } from '@/types/course';
import { locales } from '@/constants/common';
import viTranslations from '@/locales/vi/course.json';
import enTranslations from '@/locales/en/course.json';
import { ELocale } from '@/constants/enum';
import { Metadata } from 'next';

export function generateStaticParams() {
  return locales.flatMap(locale => {
    return courses.map((course: any) => ({
      locale,
      slug: course.slug,
    }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: ELocale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  const course = courses.find(item => item.slug === slug);

  if (!course) return {};

  return {
    title: `${course?.[locale].name} - Q3 English Center`,
    description: course?.[locale].description?.slice(0, 160),
    openGraph: {
      title: `${course?.[locale].name} - Q3 English Center`,
      description: course?.[locale].description,
      images: [
        {
          url: course.previewSrc,
        },
      ],
      locale: locale === ELocale.EN ? 'en_US' : 'vi_VN',
    },
    twitter: {
      title: `${course?.[locale].name} - Q3 English Center`,
      description: course?.[locale].description?.slice(0, 160),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: ELocale; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  const courseItem = courses.find(course => course.slug === slug);

  const courseDetail = courseItem?.[
    locale as keyof typeof courseItem
  ] as ICourse;

  if (!courseItem || !courseDetail) {
    notFound();
  }

  return (
    <div className="gradient-background md:pt-8">
      <section className="section-container md:rounded-24 relative max-md:!mx-0 md:overflow-hidden">
        <div className="absolute max-md:inset-0 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center md:bottom-10 md:left-10">
          <h1 className="text-32 font-800 text-text-gray-white mb-4 leading-[120%] max-md:px-10 max-md:whitespace-pre-line md:mb-2 md:leading-[140%]">
            {courseDetail.name}
          </h1>
          <p className="text-20 font-500 text-text-gray-white">
            {courseDetail.description}
          </p>

          <Button variant="outline" className="mt-8 w-40 !border-0 md:hidden">
            {t.actions.registration}
            <ChevronRightIcon />
          </Button>
        </div>
        <Image
          src={courseItem.image.desktop.src}
          alt={courseItem.image.desktop.alt}
          width={1200}
          height={468}
          className="h-auto w-full max-md:hidden"
        />
        <Image
          src={courseItem.image.mobile.src}
          alt={courseItem.image.mobile.alt}
          width={375}
          height={386}
          className="h-auto w-full md:hidden"
        />
      </section>
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
  );
}
