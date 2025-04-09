import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locales } from "@/constants/common";

const dictionary = {
  en: {
    title: "Home",
    welcome: "Welcome to Q3 Landing Page",
  },
  vi: {
    title: "Trang chủ",
    welcome: "Chào mừng đến với Q3 Landing Page",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
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

        <div className="mt-8">
          <h2 className="text-2xl mb-4">Chuyển đổi ngôn ngữ:</h2>
          <div className="flex gap-4">
            <Link
              href="/"
              className={`px-4 py-2 rounded ${
                locale === "vi"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Tiếng Việt
            </Link>
            <Link
              href="/en"
              className={`px-4 py-2 rounded ${
                locale === "en"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
