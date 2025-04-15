import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import viTranslations from '@/locales/vi/contact.json';
import enTranslations from '@/locales/en/contact.json';
import { PhoneIcon } from '@/components/icons';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ELocale } from '@/constants/enum';
interface IContactFormSectionProps {
  locale: ELocale;
  className?: string;
  isShowBackground?: boolean;
}

const ContactFormSection: React.FC<IContactFormSectionProps> = ({
  locale,
  className,
  isShowBackground = false,
}) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

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
          <div className="relative flex w-full flex-col gap-8 lg:w-[522px]">
            <h2 className="text-text-primary sm:text-32 text-24 text-center font-bold md:text-3xl lg:mb-6 lg:text-[40px] lg:leading-[72px] lg:whitespace-nowrap">
              {t.form.title}
            </h2>
            <form className="relative z-10 flex flex-col gap-6 lg:mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {t.form.form.name}
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
                    {t.form.form.phone}
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
                    {t.form.form.email}
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
                  {t.form.form.purpose}
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
                    {t.form.form.score}
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
                    {t.form.form.time}
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
                {t.form.form.submit}
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </form>
            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-dark mb-2 font-semibold">
                  {t.form.quick_consult.title}
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-sm">
                    <PhoneIcon />
                    <Link
                      href="tel:+61426812895"
                      className="text-14 font-500 text-dark hover:underline"
                    >
                      {t.form.quick_consult.australia}
                    </Link>
                  </div>

                  <div className="flex items-center gap-1 text-sm">
                    <PhoneIcon />
                    <Link
                      href="tel:+84888031854"
                      className="text-14 font-500 text-dark hover:underline"
                    >
                      {t.form.quick_consult.vietnam}
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-dark mb-2 font-semibold">
                  {t.form.quick_info.title}
                </h3>
                <Button variant="outline" size="md" asChild>
                  <Link href={t.form.quick_info.zalo} target="_blank">
                    {t.form.quick_info.zalo}
                    <ChevronRight size={14} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
            {isShowBackground && (
              <div className="absolute top-[95%] left-[-5%] z-0 size-[500px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#067E81_0%,_rgba(217,_217,_217,_0)_100%)] opacity-[0.2] md:top-[40%] md:left-[-60%] md:size-[800px]" />
            )}
          </div>

          <div className="z-10 h-full w-full max-md:relative lg:w-[calc(100%-522px)]">
            <Image
              src="/images/contact/hero-form.png"
              alt={t.form.hero_form_image_alt}
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
