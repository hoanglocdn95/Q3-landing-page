import Image from 'next/image';
import { ArrowNarrowRightIcon } from '@/components/icons';
import Link from 'next/link';
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
}

export default function CourseCard({
  locale = ELocale.VI,
  title,
  imageSrc,
  imageAlt,
  slug,
  description,
  comingSoon = false,
}: ICourseCardProps) {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  return (
    <div className="w-[calc(100vw-32px)] max-w-[300px] rounded-lg bg-white sm:w-auto sm:max-w-[unset]">
      <div className="relative">
        <div className="relative h-48 overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt || `Course image for ${title}`}
            fill
            className="object-cover"
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

      <Link href={`/${locale}/courses/${slug}`}>
        <div className="rounded-8 relative mx-auto mt-[-36px] w-[90%] bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="mb-2 line-clamp-2 font-bold text-gray-800">{title}</h3>
          <p className="mb-4 line-clamp-4 text-sm text-gray-600">
            {description}
          </p>
          <div className="flex justify-end">
            <ArrowNarrowRightIcon />
          </div>
        </div>
      </Link>
    </div>
  );
}
