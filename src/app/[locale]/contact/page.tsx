import React from "react";
import { notFound } from "next/navigation";
import { locales } from "@/constants/common";
import { ChevronRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";

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

  const dict = dictionary[locale as keyof typeof dictionary];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[386px] flex items-center justify-center">
        <Image
          src="/images/hero-contact.webp"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl lg:text-[56px] lg:leading-[110px] text-gray-25 font-extrabold">
            Liên hệ
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <div className="section-container relative">
          <div className="flex lg:flex-row flex-col gap-6 lg:gap-0 items-center pt-8 lg:py-16">
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[72px] font-bold text-text-primary lg:mb-6">
                Đăng ký nhận tư vấn ngay
              </h2>

              <form className="flex flex-col gap-6 lg:mb-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Họ tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-custom-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-secondary mb-1"
                    >
                      Điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-custom-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@company.com"
                      className="w-full px-3 py-2 border border-custom-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="pte"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Bạn cần PTE làm gì?
                  </label>
                  <select
                    id="pte"
                    className="w-full px-3 py-2 border border-custom-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                  >
                    <option>Chọn</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="score"
                      className="block text-sm font-medium text-text-secondary mb-1"
                    >
                      Bạn cần đạt bao nhiêu điểm PTE?
                    </label>
                    <select
                      id="score"
                      className="w-full px-3 py-2 border border-custom-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                    >
                      <option>50</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-text-secondary mb-1"
                    >
                      Thời gian bạn cần đạt số điểm trên?
                    </label>
                    <select
                      id="time"
                      className="w-full px-3 py-2 border border-custom-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                    >
                      <option>3 tháng</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary mt-2 text-primary-foreground py-3 rounded-md font-medium hover:bg-primary-hover transition-colors flex items-center justify-center"
                >
                  Tư vấn ngay
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </form>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-text-primary mb-2">
                    Tư vấn nhanh
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-sm">
                      <Phone size={14} className="mr-2 text-text-secondary" />
                      <span>+61 426 812 895 (Úc - Australia)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone size={14} className="mr-2 text-text-secondary" />
                      <span>+84 888 031 854 (Việt Nam)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-2">
                    Nhận tin nhanh
                  </h3>
                  <button className="flex items-center justify-center border border-custom-border rounded-full px-4 py-2 w-full text-sm">
                    Zalo
                    <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-full lg:max-w-[673px]">
              <Image
                src="/images/hero-form.webp"
                alt="Contact support"
                width={500}
                height={600}
                className="w-full h-auto md:max-w-[713px] lg:absolute bottom-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-12">
        <div className="section-container">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="relative h-[600px] w-full">
              <Image
                src="/images/map.webp"
                alt="Google Maps"
                fill
                className="object-cover"
              />

              <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-sm">
                <h2 className="text-2xl font-bold text-secondary-foreground mb-6">
                  Địa chỉ chi nhánh
                </h2>

                <div className="flex flex-col gap-6 overflow-y-auto">
                  <div className="flex">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Hồ Chí Minh</h3>
                      <p className="text-sm text-text-secondary">
                        Q3 Language Helper
                      </p>
                      <p className="text-sm text-text-secondary">
                        440 Điện Biên Phủ, Phường 11, Quận 10, Hồ Chí Minh
                        700000
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Hà Nội</h3>
                      <p className="text-sm text-text-secondary">
                        Q3 Language Helper
                      </p>
                      <p className="text-sm text-text-secondary">
                        440 Điện Biên Phủ, Phường 11, Quận 10, Hồ Chí Minh
                        700000
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Hà Nội</h3>
                      <p className="text-sm text-text-secondary">
                        Q3 Language Helper
                      </p>
                      <p className="text-sm text-text-secondary">
                        440 Điện Biên Phủ, Phường 11, Quận 10, Hồ Chí Minh
                        700000
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Hà Nội</h3>
                      <p className="text-sm text-text-secondary">
                        Q3 Language Helper
                      </p>
                      <p className="text-sm text-text-secondary">
                        440 Điện Biên Phủ, Phường 11, Quận 10, Hồ Chí Minh
                        700000
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Hà Nội</h3>
                      <p className="text-sm text-text-secondary">
                        Q3 Language Helper
                      </p>
                      <p className="text-sm text-text-secondary">
                        440 Điện Biên Phủ, Phường 11, Quận 10, Hồ Chí Minh
                        700000
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Hà Nội</h3>
                      <p className="text-sm text-text-secondary">
                        Q3 Language Helper
                      </p>
                      <p className="text-sm text-text-secondary">
                        440 Điện Biên Phủ, Phường 11, Quận 10, Hồ Chí Minh
                        700000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
