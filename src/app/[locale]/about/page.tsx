import React from 'react';
import Mission from './_components/mission';
import FormationProcess from './_components/formation-process';
import Trainers from './_components/trainers';
import { locales } from '@/constants/common';
import { notFound } from 'next/navigation';
import ContactFormSection from '@/components/contact-form-section';
import viTranslations from '@/locales/vi/about.json';
import enTranslations from '@/locales/en/about.json';
import { ELocale } from '@/constants/enum';
import { Metadata } from 'next';

export function generateStaticParams() {
  return locales.flatMap(locale => {
    return {
      locale,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: ELocale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === ELocale.EN) {
    return {
      title: {
        default: 'About | Q3 Language',
        template: '%s | Q3 Language',
      },
      description:
        'Learn about the mission, development journey, and dedicated PTE teaching team at Q3 Language – a leading PTE training center in Vietnam and Australia.',
      keywords: [
        'Q3 Language',
        'about Q3 Language',
        'PTE center',
        'PTE teachers',
        'PTE in Australia',
        'effective PTE learning',
      ],
      // alternates: {
      //   canonical: 'https://q3language.com/en/about',
      //   languages: {
      //     'vi': 'https://q3language.com/vi/gioi-thieu',
      //     'en': 'https://q3language.com/en/about',
      //   },
      // },
      openGraph: {
        title: 'About Q3 Language - Leading PTE Preparation Center',
        description:
          'Q3 Language offers high-quality PTE training with a dedicated team and clear learning paths.',
        // url: 'https://q3language.com/en/about',
        siteName: 'Q3 Language',
        // images: [
        //   {
        //     url: 'https://q3language.com/images/about-banner.jpg',
        //     width: 1200,
        //     height: 630,
        //     alt: 'About Q3 Language',
        //   },
        // ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'About Q3 Language',
        description:
          'Discover our mission and expert PTE instructors at Q3 Language.',
        // images: ['https://q3language.com/images/about-banner.jpg'],
      },
    };
  }

  return {
    title: 'Giới thiệu | Q3 Language',
    description:
      'Tìm hiểu về sứ mệnh, lịch sử phát triển và đội ngũ giáo viên của Q3 Language – Trung tâm luyện thi PTE hàng đầu tại Việt Nam và Úc.',
    keywords: [
      'Q3 Language',
      'giới thiệu Q3 Language',
      'trung tâm PTE',
      'giáo viên PTE',
      'luyện thi PTE Úc',
      'học PTE hiệu quả',
    ],
    // alternates: {
    //   canonical: 'https://q3language.com/vi/gioi-thieu',
    //   languages: {
    //     'vi': 'https://q3language.com/vi/gioi-thieu',
    //     'en': 'https://q3language.com/en/about',
    //   },
    // },
    openGraph: {
      title: 'Giới thiệu Q3 Language - Trung tâm luyện thi PTE hàng đầu',
      description:
        'Q3 Language mang đến chương trình luyện thi PTE chất lượng, đội ngũ giảng viên tận tâm, và lộ trình học rõ ràng.',
      // url: 'https://q3language.com/vi/gioi-thieu',
      siteName: 'Q3 Language',
      // images: [
      //   {
      //     url: 'https://q3language.com/images/about-banner.jpg',
      //     width: 1200,
      //     height: 630,
      //     alt: 'Giới thiệu Q3 Language',
      //   },
      // ],
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Giới thiệu Q3 Language',
      description:
        'Khám phá sứ mệnh và đội ngũ giáo viên giỏi tại Q3 Language.',
      // images: ['https://q3language.com/images/about-banner.jpg'],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ locale: ELocale }> }) => {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  return (
    <div className="gradient-background relative">
      <section className="flex h-[386px] items-center justify-center bg-[url('/images/about/banner-mobile.png')] bg-cover bg-center md:bg-[url('/images/about/banner-desktop.png')]">
        <h1 className="text-text-gray-white text-32 md:text-48 lg:text-[56px]">
          {t.title}
        </h1>
      </section>
      <Mission locale={locale} />
      <section className="relative flex h-[247px] items-center justify-center bg-[url('/images/about/sub-banner-mobile.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-55 before:content-[''] md:bg-[url('/images/about/sub-banner-desktop.png')] lg:h-[500px]">
        <div className="relative z-10 text-center">
          <p className="text-12 font-600 mb-5 tracking-[0.5em] text-white uppercase">
            {t.mission.introduce}
          </p>
          <h2 className="font-space-grotesk text-32 md:text-48 px-4 leading-[1.3] whitespace-pre-line text-[#E6E6E6] lg:text-[56px]">
            {t.mission.values}
          </h2>
        </div>
      </section>
      <FormationProcess locale={locale} />
      <Trainers locale={locale} />
      <ContactFormSection locale={locale} isShowBackground />
    </div>
  );
};

export default Page;
