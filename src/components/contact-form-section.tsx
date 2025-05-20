'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import viTranslations from '@/locales/vi/contact.json';
import enTranslations from '@/locales/en/contact.json';
import { PhoneIcon } from '@/components/icons';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ELocale } from '@/constants/enum';
import toast, { Toaster } from 'react-hot-toast';

interface IContactFormSectionProps {
  locale: ELocale;
  className?: string;
  isShowBackground?: boolean;
}

const CONTACT_API_URL =
  'https://script.google.com/macros/s/AKfycbwZLcNpffDFdQThmbtkAZAyJPAzhXxfMi_cXQxjLfFJtmOuEIs4GQyZkVa_RJFqGGGc/exec';

const ContactFormSection: React.FC<IContactFormSectionProps> = ({
  locale,
  className,
  isShowBackground = false,
}) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  const [isLoading, setIsLoading] = useState(false);

  const purposeOptions =
    locale === 'en'
      ? ['Select', 'Study Abroad', 'Immigration', 'Work', 'Other']
      : ['Chọn', 'Du học', 'Định cư', 'Làm việc', 'Khác'];

  const scoreOptions = ['30', '36', '42', '50', '58', '65', '73', '79'];

  const timeOptions =
    locale === 'en'
      ? ['1 month', '2 months', '3 months', '6 months', 'Flexible']
      : ['1 tháng', '2 tháng', '3 tháng', '6 tháng', 'Linh hoạt'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    purpose: purposeOptions[0],
    achieveScore: scoreOptions[0],
    deadline: timeOptions[0],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email } = formData;
    if (!name || !email) {
      toast.error('Vui lòng điền đầy đủ các trường bắt buộc.');
      return;
    }

    setIsLoading(true);
    const payload = {
      ...formData,
      timestamp: new Date().toLocaleString('en-GB', {
        hour12: false,
      }),
    };

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        redirect: 'follow',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          payload,
          type: 'insert_consultation',
        }),
      });

      const result = await res.json();
      const data = JSON.parse(result.message);
      if (data.status === 'ok') {
        toast.success('Thông tin của bạn đã được gửi thành công!');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          purpose: purposeOptions[0],
          achieveScore: scoreOptions[0],
          deadline: timeOptions[0],
        });
      } else {
        toast.error(data.status);
      }
    } catch (err) {
      toast.error('Đã xảy ra lỗi khi gửi thông tin.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={cn('overflow-hidden', className)}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <div className="section-container relative">
        <div className="flex flex-col items-center gap-6 pt-8 md:flex-row md:gap-0 md:py-16">
          <div className="relative flex w-full flex-col gap-8 md:w-[522px]">
            <h2 className="text-text-primary sm:text-32 text-24 text-center font-bold uppercase sm:text-left md:text-3xl lg:mb-6 lg:text-[40px] lg:leading-[72px] lg:whitespace-nowrap">
              {t.form.title}
            </h2>
            <form className="relative z-10 flex flex-col gap-6 lg:mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {t.form.form.name}(*)
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  className="w-full rounded-md border border-gray-200 px-3 py-2 shadow-(--shadow-input)"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    {t.form.form.phone}(*)
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    className="w-full rounded-md border border-gray-200 px-3 py-2 shadow-(--shadow-input)"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    {t.form.form.email}(*)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    placeholder="you@company.com"
                    className="w-full rounded-md border border-gray-200 px-3 py-2 shadow-(--shadow-input)"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="purpose"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {t.form.form.purpose}
                </label>
                <select
                  id="purpose"
                  value={formData.purpose}
                  className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 shadow-(--shadow-input)"
                  onChange={handleChange}
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
                    htmlFor="achieveScore"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    {t.form.form.score}
                  </label>
                  <select
                    id="achieveScore"
                    value={formData.achieveScore}
                    className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 shadow-(--shadow-input)"
                    onChange={handleChange}
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
                    htmlFor="deadline"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    {t.form.form.time}
                  </label>
                  <select
                    id="deadline"
                    value={formData.deadline}
                    className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 shadow-(--shadow-input)"
                    onChange={handleChange}
                  >
                    {timeOptions.map((option, index) => (
                      <option key={`time-${index}`} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                className={cn(
                  'relative uppercase',
                  isLoading && 'cursor-not-allowed opacity-70',
                )}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    {t.form.form.submitting || 'Đang gửi...'}
                  </div>
                ) : (
                  <>
                    {t.form.form.submit}
                    <ChevronRight size={16} className="ml-1" />
                  </>
                )}
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

          <div className="z-10 h-full w-full max-md:relative md:w-[calc(100%-522px)]">
            <Image
              src="/images/contact/hero-form.png"
              alt={t.form.hero_form_image_alt}
              width={500}
              height={600}
              priority
              className="bottom-0 h-auto w-full md:absolute md:left-1/2 md:max-w-[713px] xl:left-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
