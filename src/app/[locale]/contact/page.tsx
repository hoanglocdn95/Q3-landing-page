import React from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/constants/common';
import HeroSection from './_components/hero-section';
import ContactFormSection from '@/components/contact-form-section';
import MapSection from './_components/map-section';

export function generateStaticParams() {
  return locales.flatMap(locale => {
    return {
      locale,
    };
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
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
