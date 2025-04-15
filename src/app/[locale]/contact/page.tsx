import React from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/constants/common';
import HeroSection from './_components/hero-section';
import ContactFormSection from '@/components/contact-form-section';
import MapSection from './_components/map-section';
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
      title: 'Contact | Q3 Language',
      description:
        'Register for personalized PTE tutoring with an expert. One-on-one learning, clear study plans, flexible schedules, and guaranteed results.',
      keywords: [
        'Q3 Language',
        'contact Q3 Language',
        'learn PTE',
        'PTE consultation',
        'PTE tutoring',
        '1-on-1 PTE course',
      ],
      // alternates: {
      //   canonical: 'https://q3language.com/en/contact',
      //   languages: {
      //     'en': 'https://q3language.com/en/contact',
      //     'vi': 'https://q3language.com/vi/lien-he',
      //   },
      // },
      openGraph: {
        title: 'Contact Q3 Language - Personalized PTE Study Consultation',
        description:
          'Sign up to get a 1-on-1 consultation with a PTE expert. Personalized plans, flexible schedules, and guaranteed results.',
        // url: 'https://q3language.com/en/contact',
        siteName: 'Q3 Language',
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Contact Q3 Language - One-on-One PTE Consultation',
        description: 'Free consultation, personalized study path. Sign up now!',
        // images: ['https://q3language.com/images/contact-banner.jpg'],
      },
    };
  }

  return {
    title: 'Liên hệ | Q3 Language',
    description:
      'Đăng ký nhận tư vấn học PTE cá nhân hóa cùng chuyên gia. Học kèm 1-1, lộ trình rõ ràng, linh hoạt thời gian, cam kết đầu ra.',
    keywords: [
      'Q3 Language',
      'liên hệ Q3 Language',
      'học PTE',
      'tư vấn PTE',
      'luyện thi PTE',
      'PTE 1 kèm 1',
    ],
    // alternates: {
    //   canonical: 'https://q3language.com/vi/lien-he',
    //   languages: {
    //     'en': 'https://q3language.com/en/contact/',
    //     'vi': 'https://q3language.com/vi/contact/',
    //   },
    // },
    openGraph: {
      title: 'Liên hệ Q3 Language - Tư vấn lộ trình học PTE cá nhân hóa',
      description:
        'Đăng ký ngay để nhận tư vấn 1-1 với chuyên gia luyện thi PTE. Lộ trình rõ ràng, linh hoạt thời gian, cam kết đầu ra.',
      // url: 'https://q3language.com/vi/contact',
      siteName: 'Q3 Language',
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Liên hệ Q3 Language - Tư vấn học PTE 1 kèm 1',
      description: 'Tư vấn miễn phí, lộ trình cá nhân hóa. Đăng ký ngay!',
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: ELocale }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <>
      <HeroSection locale={locale} />
      <ContactFormSection locale={locale} />
      <MapSection locale={locale} />
    </>
  );
}
