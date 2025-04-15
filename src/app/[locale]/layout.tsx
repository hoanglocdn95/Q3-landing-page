import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { locales } from '@/constants/common';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'vi') {
    return {
      title: 'Trung tâm Anh ngữ Q3',
      description:
        'Học Khởi Đầu Ở Đây - Trung tâm đào tạo tiếng Anh và luyện thi IELTS/PTE hàng đầu với đội ngũ giáo viên chuyên nghiệp',
      keywords:
        'trung tâm anh ngữ, học tiếng Anh, luyện thi IELTS, PTE, giáo viên tiếng Anh, khóa học tiếng Anh, tiếng Anh giao tiếp',
      openGraph: {
        title: 'Trung tâm Anh ngữ Q3',
        description:
          'Học Khởi Đầu Ở Đây - Trung tâm đào tạo tiếng Anh và luyện thi IELTS/PTE hàng đầu với đội ngũ giáo viên chuyên nghiệp',
        locale: 'vi_VN',
      },
      twitter: {
        title: 'Trung tâm Anh ngữ Q3',
        description:
          'Học Khởi Đầu Ở Đây - Trung tâm đào tạo tiếng Anh và luyện thi IELTS/PTE hàng đầu với đội ngũ giáo viên chuyên nghiệp',
      },
    };
  }

  return {
    title: 'Q3 English Center - Start Your Learning Journey Here',
    description:
      'Start Your Learning Journey Here - Leading English training center for IELTS/PTE with professional teachers',
    keywords:
      'english center, learn english, IELTS preparation, PTE, english teachers, english courses, conversational english',
    openGraph: {
      title: 'Q3 English Center - Start Your Learning Journey Here',
      description:
        'Start Your Learning Journey Here - Leading English training center for IELTS/PTE with professional teachers',
      locale: 'en_US',
    },
    twitter: {
      title: 'Q3 English Center - Start Your Learning Journey Here',
      description:
        'Start Your Learning Journey Here - Leading English training center for IELTS/PTE with professional teachers',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-grow">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
