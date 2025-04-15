import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import viTranslations from '@/locales/vi/home.json';
import enTranslations from '@/locales/en/home.json';
import { ELocale } from '@/constants/enum';
import { trainers } from '@/data/trainers';

export default function TeachersTeamSection({ locale }: { locale: ELocale }) {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  return (
    <div className="relative py-10 md:py-15 lg:py-20">
      <section className="section-container">
        <Image
          src={'/images/about/background.png'}
          width={385}
          height={267}
          alt="background-roadmap"
          className="absolute top-0 left-0 h-[116px] w-[175px] object-cover md:h-[197px] md:w-[297px] lg:-bottom-16 lg:h-[267px] lg:w-[385px]"
        />
        <div className="absolute top-[408px] left-[406px] z-0 size-[300px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#067E81_0%,_rgba(217,_217,_217,_0)_100%)] opacity-[0.4] sm:size-[500px] md:top-[-20px] md:left-[635px] md:size-[963px]"></div>
        <div className="absolute right-[10px] bottom-[240px] z-0 h-[672px] w-[660px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#FD7200_0%,_rgba(217,_217,_217,_0)_100%)] opacity-[0.15] md:right-[600px] md:bottom-[160px] md:h-[1254px] md:w-[1232px]"></div>
        <h2 className="text-text-primary sm:text-32 text-24 relative mb-10 text-center font-bold lg:text-[40px] lg:leading-[72px]">
          {t.teachers.title}
        </h2>

        <div className="hide-scrollbar overflow-x-auto scroll-smooth pb-6 md:overflow-hidden md:pb-0">
          <div className="mx-auto flex w-max space-x-4 md:grid md:w-auto md:grid-cols-2 md:gap-5 md:space-x-0 lg:max-w-[794px]">
            {trainers.map((teacher, index) => (
              <div
                key={index}
                className="w-[calc(100vw-32px)] max-w-[300px] overflow-hidden rounded-xl shadow-md md:w-auto md:max-w-[unset]"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={teacher.imageUrl}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-10 left-0 w-full text-center text-white">
                    <h3 className="text-24 sm:text-28 mb-3 leading-tight font-bold">
                      {teacher.name}
                    </h3>
                    <p className="text-base text-gray-300">{teacher.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/teachers"
            className="relative inline-flex h-10 items-center rounded-full bg-[#03044f] px-4 py-2 text-sm font-medium text-white md:h-[52px]"
          >
            {t.teachers.view_all_button}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
