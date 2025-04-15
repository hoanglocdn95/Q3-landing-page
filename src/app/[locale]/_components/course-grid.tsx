import { courses } from '@/data/course';
import CourseCard from './course-card';

export default function CourseGrid({ locale }: { locale: string }) {
  return (
    <section className="section-container hide-scrollbar overflow-x-auto scroll-smooth py-12 pb-6 sm:overflow-hidden">
      <div className="flex w-max grid-cols-2 space-x-4 sm:grid sm:w-auto sm:gap-5 sm:space-x-0 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course, index) => (
          <CourseCard
            locale={locale}
            key={index}
            title={course.title}
            imageSrc={course.previewSrc}
            imageAlt={course.peviewAlt}
            description={course.shortDescription}
            comingSoon={course.comingSoon}
            slug={course.slug}
          />
        ))}
      </div>
    </section>
  );
}
