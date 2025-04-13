import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import viTranslations from '@/locales/vi/contact/form.json';
import enTranslations from '@/locales/en/contact/form.json';
import { PhoneIcon } from '@/components/icons';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
interface ContactFormSectionProps {
  locale: string;
  className?: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  locale,
  className,
}) => {
  const t = locale === 'en' ? enTranslations : viTranslations;

  // Thêm các options cho các dropdown
  const purposeOptions =
    locale === 'en'
      ? ['Select', 'Study Abroad', 'Immigration', 'Work', 'Other']
      : ['Chọn', 'Du học', 'Định cư', 'Làm việc', 'Khác'];

  const scoreOptions = ['50', '65', '70', '79', '79+'];

  const timeOptions =
    locale === 'en'
      ? ['1 month', '2 months', '3 months', '6 months', 'Flexible']
      : ['1 tháng', '2 tháng', '3 tháng', '6 tháng', 'Linh hoạt'];

  return (
    <section className={cn('overflow-hidden', className)}>
      <div className="section-container relative">
        <div className="flex flex-col items-center gap-6 pt-8 lg:flex-row lg:gap-0 lg:py-16">
          <div className="flex w-full flex-col gap-8 lg:w-[522px]">
            <h2 className="text-text-primary text-2xl font-bold md:text-3xl lg:mb-6 lg:text-[40px] lg:leading-[72px] lg:whitespace-nowrap">
              {t.title}
            </h2>

            <form className="flex flex-col gap-6 lg:mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 shadow-(--shadow-input)"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-gray-200 px-3 py-2 shadow-(--shadow-input)"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full rounded-md border border-gray-200 px-3 py-2 shadow-(--shadow-input)"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="pte"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {t.form.purpose}
                </label>
                <select
                  id="pte"
                  className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 shadow-(--shadow-input)"
                >
                  {purposeOptions.map((option, index) => (
                    <option key={`purpose-${index}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="score"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    {t.form.score}
                  </label>
                  <select
                    id="score"
                    className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 shadow-(--shadow-input)"
                  >
                    {scoreOptions.map((option, index) => (
                      <option key={`score-${index}`} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    {t.form.time}
                  </label>
                  <select
                    id="time"
                    className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 shadow-(--shadow-input)"
                  >
                    {timeOptions.map((option, index) => (
                      <option key={`time-${index}`} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Button type="submit">
                {t.form.submit}
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </form>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-dark mb-2 font-semibold">
                  {t.quickConsult.title}
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-sm">
                    <Image
                      alt="Phone"
                      height={16}
                      src="/icons/phone.svg"
                      width={16}
                      className="text-dark mr-2"
                    />
                    <span>{t.quickConsult.australia}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <PhoneIcon className="text-dark mr-2" />
                    <span>{t.quickConsult.vietnam}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-dark mb-2 font-semibold">
                  {t.quickInfo.title}
                </h3>
                <Button variant="outline" size="md" asChild>
                  <Link href={t.quickInfo.zalo} target="_blank">
                    {t.quickInfo.zalo}
                    <ChevronRight size={14} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="h-full w-full lg:w-[calc(100%-522px)]">
            <Image
              src="/images/contact/hero-form.webp"
              alt={t.heroFormImageAlt}
              width={500}
              height={600}
              className="bottom-0 h-auto w-full md:max-w-[713px] lg:absolute lg:left-1/2 xl:left-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
