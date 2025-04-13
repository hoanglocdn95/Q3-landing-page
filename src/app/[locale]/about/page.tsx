import React from 'react';
import Mission from './_components/mission';
import FormationProcess from './_components/formation-process';
import Trainers from './_components/trainers';
import { locales } from '@/constants/common';
import { notFound } from 'next/navigation';
import Contact from './_components/contact';

export function generateStaticParams() {
  return locales.flatMap(locale => {
    return {
      locale,
    };
  });
}

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div className="gradient-background relative">
      <section className="flex h-[386px] w-screen items-center justify-center bg-[url('/images/about/banner.png')] bg-cover bg-center">
        <h1 className="text-text-gray-white text-[56px]">Giới thiệu</h1>
      </section>
      <Mission />
      <section className="relative flex h-[500px] w-screen items-center justify-center bg-[url('/images/about/sub-banner.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-55 before:content-['']">
        <h2 className="text-text-gray-white font-space-grotesk relative z-10 text-[56px] leading-[1.3] whitespace-pre-line text-[#E6E6E6]">
          Học Không Chỉ Để Thi,
          <br />
          Học Là Để Dẫn Đầu!
        </h2>
      </section>
      <FormationProcess />
      <Trainers />
      <Contact locale={locale} />
    </div>
  );
};

export default Page;
