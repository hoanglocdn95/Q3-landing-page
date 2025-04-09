import React from "react";
import { notFound } from "next/navigation";

const locales = ["en", "vi"];
const slug = ["1", "2", "3"];

const dictionary = {
  en: {
    title: "Blog",
    welcome: "Welcome to Q3 Landing Page",
  },
  vi: {
    title: "Trang Blog",
    welcome: "Chào mừng đến với Q3 Landing Page",
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    return slug.map((slug) => ({
      locale,
      blog: slug,
    }));
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

  const dict = dictionary[locale as keyof typeof dictionary];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">{dict.welcome}</h1>
        <p className="text-xl">{dict.title}</p>
      </div>
    </main>
  );
}
