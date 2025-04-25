import Footer from '@/components/layout/footer-layout';
import Header from '@/components/layout/header-layout';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { locales } from '@/constants/common';
import { ELocale } from '@/constants/enum';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: ELocale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === ELocale.EN) {
    return {
      title:
        'Q3 Language - Leading PTE Training Center in Vietnam and Australia',
      description:
        'Learn to lead, not just to test! Prepare for your PTE exams with Q3 Language - structured programs, expert teachers, and real results.',
      keywords: [
        'Q3 Language',
        'PTE preparation',
        'PTE courses',
        'PTE Australia',
        'PTE center',
        'study PTE',
        'best PTE school',
        'PTE in Vietnam',
      ],
      // alternates: {
      //   canonical: 'https://q3language.com/en',
      //   languages: {
      //     'vi': 'https://q3language.com/vi',
      //     'en': 'https://q3language.com/en',
      //   },
      // },
      openGraph: {
        title:
          'Q3 Language - Leading PTE Training Center in Vietnam and Australia',
        description:
          'Explore our PTE programs and get started with Q3 Language – Learn to lead!',
        // url: 'https://q3language.com/en',
        siteName: 'Q3 Language',
        // images: [
        //   {
        //     url: 'https://q3language.com/images/home-banner.jpg',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Learn to lead, not just to test!',
        //   },
        // ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Q3 Language - PTE Training Experts',
        description:
          'Achieve your PTE goals with expert coaching and personalized programs.',
        // images: ['https://q3language.com/images/home-banner.jpg'],
      },
    };
  }
  return {
    title: 'Q3 Language - Trung tâm luyện thi PTE hàng đầu tại Việt Nam và Úc',
    description:
      'Học không chỉ để thi, học là để dẫn đầu! Luyện thi PTE hiệu quả với Q3 Language - Trung tâm PTE uy tín với giáo trình bài bản, giảng viên giàu kinh nghiệm, và kết quả vượt trội.',
    keywords: [
      'Q3 Language',
      'luyện thi PTE',
      'trung tâm PTE',
      'khóa học PTE',
      'PTE Úc',
      'thi PTE',
      'PTE chất lượng cao',
      'học PTE tại Việt Nam',
    ],
    alternates: {
      canonical: 'https://q3language.com/vi',
      languages: {
        vi: 'https://q3language.com/vi',
        en: 'https://q3language.com/en',
      },
    },
    openGraph: {
      title:
        'Q3 Language - Trung tâm luyện thi PTE hàng đầu tại Việt Nam và Úc',
      description:
        'Khám phá các khóa học PTE phù hợp với bạn tại Q3 Language – Học không chỉ để thi, học là để dẫn đầu!',
      // url: 'https://q3language.com/vi',
      siteName: 'Q3 Language',
      // images: [
      //   {
      //     url: 'https://q3language.com/images/home-banner.jpg',
      //     width: 1200,
      //     height: 630,
      //     alt: 'Học không chỉ để thi, học là để dẫn đầu!',
      //   },
      // ],
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Q3 Language - Trung tâm luyện thi PTE hàng đầu',
      description:
        'Lộ trình học rõ ràng, giáo viên tận tâm và kết quả PTE thực tế.',
      // images: ['https://q3language.com/images/home-banner.jpg'],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: ELocale }>;
}>) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header locale={locale} />
          <main className="flex-grow">{children}</main>
          <Footer locale={locale} />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
