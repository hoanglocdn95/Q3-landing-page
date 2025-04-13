import CourseCard from './course-card';

export default function CourseGrid({ locale }: { locale: string }) {
  const courses = [
    {
      title: 'Foundation Achievers 1',
      slug: 'foundation-achievers-1',
      imageSrc: '/images/courses/foundation-achievers-1.png',
      imageAlt: 'Foundation Achievers 1',
      description:
        'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
      comingSoon: false,
    },
    {
      title: 'PTE Achievers 30-36-42',
      slug: 'pte-achievers-30-36-42',
      imageSrc: '/images/courses/pte-achievers-30-36-42.png',
      imageAlt: 'PTE Achievers 30-36-42',
      description:
        'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
      comingSoon: false,
    },
    {
      title: 'PTE Achievers 36-42-50',
      slug: 'pte-achievers-36-42-50',
      imageSrc: '/images/courses/pte-achievers-36-42-50.png',
      imageAlt: 'PTE Achievers 36-42-50',
      description:
        'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
      comingSoon: false,
    },
    {
      title: 'Foundation Achievers 2',
      slug: 'foundation-achievers-2',
      imageSrc: '/images/courses/foundation-achievers-2.png',
      imageAlt: 'Foundation Achievers 2',
      description:
        'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
      comingSoon: true,
    },
    {
      title: 'PTE Achievers 50-58',
      slug: 'pte-achievers-50-58',
      imageSrc: '/images/courses/pte-achievers-50-58.png',
      imageAlt: 'PTE Achievers 50-58',
      description:
        'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
      comingSoon: false,
    },
    {
      title: 'PTE Achievers 65-73-79',
      slug: 'pte-achievers-65-73-79',
      imageSrc: '/images/courses/pte-achievers-65-73-79.png',
      imageAlt: 'PTE Achievers 65-73-79',
      description:
        'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
      comingSoon: true,
    },
    {
      title: 'PTE 1 kèm 1',
      slug: 'pte-1-kem-1',
      imageSrc: '/images/courses/pte-1-kem-1.png',
      imageAlt: 'PTE 1 kèm 1',
      description:
        'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
      comingSoon: false,
    },
    {
      title: 'PTE Cấp Tốc',
      slug: 'pte-cap-toc',
      imageSrc: '/images/courses/pte-cap-toc.png',
      imageAlt: 'PTE Cấp Tốc',
      description:
        'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading jjdajdjaldaldkasdkadjkasdskajd.',
      comingSoon: false,
    },
  ];

  return (
    <section className="section-container hide-scrollbar overflow-x-auto scroll-smooth py-12 pb-6 sm:overflow-hidden">
      <div className="flex w-max grid-cols-2 space-x-4 sm:grid sm:w-auto sm:gap-5 sm:space-x-0 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course, index) => (
          <CourseCard
            locale={locale}
            key={index}
            title={course.title}
            imageSrc={course.imageSrc}
            imageAlt={course.imageAlt}
            description={course.description}
            comingSoon={course.comingSoon}
            slug={course.slug}
          />
        ))}
      </div>
    </section>
  );
}
