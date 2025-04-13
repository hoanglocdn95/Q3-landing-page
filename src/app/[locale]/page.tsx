import React from 'react';
import { locales } from '@/constants/common';
import BannerSection from './_components/banner-section';
import CourseGrid from './_components/course-grid';
import ScoreConversionTable from './_components/score-conversion-table';
import TeachersTeamSection from './_components/teachers-team-section';
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="overflow-hidden">
      <BannerSection locale={locale} />
      <CourseGrid locale={locale} />
      <ScoreConversionTable locale={locale} />
      <TeachersTeamSection locale={locale} />
    </div>
  );
}
