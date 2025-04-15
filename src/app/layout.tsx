import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trung tâm Anh ngữ Q3',
  description:
    'Trung tâm đào tạo tiếng Anh và luyện thi IELTS/PTE hàng đầu với đội ngũ giáo viên chuyên nghiệp',
  keywords:
    'trung tâm anh ngữ, học tiếng Anh, luyện thi IELTS, PTE, giáo viên tiếng Anh, khóa học tiếng Anh, tiếng Anh giao tiếp',
  publisher: 'Trung tâm Anh ngữ Q3',
  openGraph: {
    title: 'Trung tâm Anh ngữ Q3',
    description:
      'Trung tâm đào tạo tiếng Anh và luyện thi IELTS/PTE hàng đầu với đội ngũ giáo viên chuyên nghiệp',
    siteName: 'Trung tâm Anh ngữ Q3',
  },
  twitter: {
    title: 'Trung tâm Anh ngữ Q3',
    description:
      'Trung tâm đào tạo tiếng Anh và luyện thi IELTS/PTE hàng đầu với đội ngũ giáo viên chuyên nghiệp',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'vi-VN': '/vi',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
