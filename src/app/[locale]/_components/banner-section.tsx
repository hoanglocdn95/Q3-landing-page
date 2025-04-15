import Image from 'next/image';
import viTranslations from '@/locales/vi/home.json';
import enTranslations from '@/locales/en/home.json';
import { ELocale } from '@/constants/enum';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function BannerSection({ locale }: { locale: ELocale }) {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  return (
    <section className="relative">
      <div className="relative h-[467px] overflow-hidden md:h-[491px] lg:h-[680px]">
        <Image
          src="/images/home/hero-home.png"
          alt="Student studying"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">
          <div className="section-container flex h-full flex-col justify-center py-12">
            <div className="max-w-[589px]">
              <Image
                alt="Logo of Q3 Language"
                width={186}
                height={88}
                className="mb-4 h-[64px] w-[135px] lg:h-[88px] lg:w-[186px]"
                src={'/icons/logo-light.svg'}
              />

              {/* Hero Text */}
              <h1 className="text-32 sm:text-40 mb-8 leading-tight font-extrabold text-white sm:mb-12 lg:text-[56px] lg:tracking-[-2px]">
                {t.banner.hero_title}
              </h1>

              {/* CTA Button */}

              <button className="hover:bg-secondary flex h-10 items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:text-white sm:h-[52px] sm:text-base">
                <Link href="#" className="flex items-center">
                  {t.banner.cta_button}
                  <ChevronRight size={20} className="ml-1" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="bg-secondary section-container relative z-10 -mt-16 rounded-4xl p-6 shadow-lg md:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="text-white md:max-w-xs">
            <p className="text-base font-semibold">
              {t.banner.search_section.description}
            </p>
          </div>

          <div className="hidden text-white md:block">\</div>

          <div className="w-full min-w-[200px] flex-1 md:mx-4 md:w-auto">
            <div className="relative">
              <select className="h-10 w-full appearance-none rounded-full bg-white px-4 py-2 pr-10 text-base font-medium outline-none md:h-[52px]">
                <option>{t.banner.search_section.options.option1}</option>
                <option>{t.banner.search_section.options.option2}</option>
                <option>{t.banner.search_section.options.option3}</option>
                <option>{t.banner.search_section.options.option4}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          <button className="bg-secondary hover:border-secondary flex h-10 w-full items-center justify-center rounded-full border border-white px-4 py-2 text-base font-medium whitespace-nowrap text-white hover:bg-white hover:text-black sm:w-[unset] md:h-[52px]">
            <Link href="#" className="flex items-center">
              {t.banner.search_section.search_button}
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
