'use client';
import Image from 'next/image';
import { ArrowNarrowRightIcon } from '@/components/icons';
import { useRouter } from 'next/navigation';
import viTranslations from '@/locales/vi/home.json';
import enTranslations from '@/locales/en/home.json';
import { ELocale } from '@/constants/enum';

interface ICourseCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  locale: ELocale;
  slug: string;
  description: string;
  comingSoon?: boolean;
  showPopup: (title: string) => void;
}

export default function CourseCard({
  locale = ELocale.VI,
  title,
  imageSrc,
  imageAlt,
  slug,
  description,
  showPopup,
  comingSoon = false,
}: ICourseCardProps) {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  const router = useRouter();

  const handleCardClick = () => {
    if (comingSoon) {
      showPopup(title);
    } else {
      router.push(`/${locale}/courses/${slug}`);
    }
  };

  return (
    <div className="group w-[calc(100vw-32px)] max-w-[300px] cursor-pointer rounded-lg bg-white transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:max-w-[unset]">
      <div className="relative">
        <div className="relative h-48 overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt || `Course image for ${title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        {comingSoon && (
          <div className="absolute -top-[6px] right-2 bg-transparent">
            <div className="clip-polygon-flag bg-gradient-flag relative h-[61px] w-[70px] pt-[15px] pl-[5px] text-center text-[10px] leading-[11px] font-extrabold text-white uppercase">
              {t.course_card.coming_soon}
            </div>
          </div>
        )}
      </div>

      <div
        className="rounded-8 relative mx-auto mt-[-36px] w-[90%] bg-white p-4 shadow-sm transition-all duration-300 group-hover:shadow-lg"
        onClick={handleCardClick}
      >
        <h3 className="mb-2 line-clamp-2 font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mb-4 line-clamp-4 text-sm text-gray-600">{description}</p>
        <div className="flex justify-end">
          <ArrowNarrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
