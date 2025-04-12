import React from 'react';
import { notFound } from 'next/navigation';
import LearningStages from './_components/learning-stages';

import course from '@/data/course.json';
import CourseOverview from './_components/course-overview';
import FeatureSteps from './_components/feature-steps';
import FAQ from './_components/faq';
import Registration from './_components/registration';
import { Contact, Social } from '@/types/course';
import Image from 'next/image';
import Evaluate from './_components/evaluate';

const locales = ['en', 'vi'];
const slug = ['1', '2', '3'];

// const dictionary = {
//   en: {
//     title: "Blog",
//     welcome: "Welcome to Q3 Landing Page",
//   },
//   vi: {
//     title: "Trang Blog",
//     welcome: "Chào mừng đến với Q3 Landing Page",
//   },
// };

export function generateStaticParams() {
  return locales.flatMap(locale => {
    return slug.map(slug => ({
      locale,
      courseId: slug,
    }));
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; courseId: string }>;
}) {
  const { locale, courseId } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const courseDetail = course[locale as keyof typeof course].courses.find(
    course => course.id === courseId,
  );

  if (!courseDetail) {
    notFound();
  }

  return (
    <div className="bg-background-cream mt-8">
      <section className="section-container rounded-24 relative overflow-hidden">
        <div className="absolute bottom-10 left-10">
          <h1 className="text-32 font-800 text-text-gray-white">
            {courseDetail.name}
          </h1>
          <p className="text-20 font-500 text-text-gray-white">
            {courseDetail.description}
          </p>
        </div>
        <Image
          src={courseDetail.image.desktop.src}
          alt={courseDetail.image.desktop.alt}
          width={1200}
          height={468}
          className="h-auto w-full max-md:hidden"
        />
        <Image
          src={courseDetail.image.mobile.src}
          alt={courseDetail.image.mobile.alt}
          width={461}
          height={386}
          className="h-auto w-full md:hidden"
        />
      </section>

      <CourseOverview
        overview={courseDetail.overview}
        reasonsToJoin={courseDetail.reasonsToJoin}
        studyDetails={courseDetail.studyDetails}
      />
      <LearningStages data={courseDetail.learningStages} />
      <FeatureSteps steps={courseDetail.features} />
      <Evaluate evaluate={courseDetail.evaluate} />
      <FAQ faq={courseDetail.faq} />
      <Registration
        contact={courseDetail.contacts as Contact[]}
        social={courseDetail.socials as Social[]}
        banner={courseDetail.banner}
      />
    </div>
  );
}
