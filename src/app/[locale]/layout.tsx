import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { locales } from '@/constants/common';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
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
