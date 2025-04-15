import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Trung tâm Anh ngữ Q3',
  description:
    'Trung tâm đào tạo tiếng Anh và luyện thi IELTS/PTE hàng đầu với đội ngũ giáo viên chuyên nghiệp',
  keywords:
    'trung tâm anh ngữ, học tiếng Anh, luyện thi IELTS, PTE, giáo viên tiếng Anh, khóa học tiếng Anh, tiếng Anh giao tiếp',
  publisher: 'Trung tâm Anh ngữ Q3',
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      vi: '/vi',
    },
  },
  openGraph: {
    title: 'Trung tâm Anh ngữ Q3',
    description:
      'Trung tâm đào tạo tiếng Anh và luyện thi IELTS/PTE hàng đầu với đội ngũ giáo viên chuyên nghiệp',
    siteName: 'Trung tâm Anh ngữ Q3',
    type: 'website',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-icon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
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
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
