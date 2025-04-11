import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import viTranslations from "@/locales/vi/contact/form.json";
import enTranslations from "@/locales/en/contact/form.json";

interface ContactFormSectionProps {
  locale: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ locale }) => {
  const t = locale === "en" ? enTranslations : viTranslations;

  // Thêm các options cho các dropdown
  const purposeOptions = locale === "en" 
    ? ["Select", "Study Abroad", "Immigration", "Work", "Other"] 
    : ["Chọn", "Du học", "Định cư", "Làm việc", "Khác"];
  
  const scoreOptions = ["50", "65", "70", "79", "79+"];
  
  const timeOptions = locale === "en"
    ? ["1 month", "2 months", "3 months", "6 months", "Flexible"]
    : ["1 tháng", "2 tháng", "3 tháng", "6 tháng", "Linh hoạt"];

  return (
    <section className="overflow-hidden">
      <div className="section-container relative">
        <div className="flex lg:flex-row flex-col gap-6 lg:gap-0 items-center pt-8 lg:py-16">
          <div className="flex flex-col lg:w-[522px] w-full gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[72px] font-bold text-text-primary lg:mb-6 lg:whitespace-nowrap">
              {t.title}
            </h2>

            <form className="flex flex-col gap-6 lg:mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-(--shadow-input)"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-(--shadow-input)"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-(--shadow-input)"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="pte"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.form.purpose}
                </label>
                <select
                  id="pte"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-(--shadow-input) appearance-none bg-white"
                >
                  {purposeOptions.map((option, index) => (
                    <option key={`purpose-${index}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="score"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.form.score}
                  </label>
                  <select
                    id="score"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-(--shadow-input) appearance-none bg-white"
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
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.form.time}
                  </label>
                  <select
                    id="time"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-(--shadow-input) appearance-none bg-white"
                  >
                    {timeOptions.map((option, index) => (
                      <option key={`time-${index}`} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary mt-2 cursor-pointer rounded-full text-white py-3 font-medium hover:bg-primary-hover transition-colors flex items-center justify-center"
              >
                {t.form.submit}
                <ChevronRight size={16} className="ml-1" />
              </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-dark mb-2">
                  {t.quickConsult.title}
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-sm">
                    <Image
                      alt="Phone"
                      height={16}
                      src="/icons/phone.svg"
                      width={16}
                      className="mr-2 text-dark"
                    />
                    <span>{t.quickConsult.australia}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Image
                      alt="Phone"
                      height={16}
                      src="/icons/phone.svg"
                      width={16}
                      className="mr-2 text-dark"
                    />
                    <span>{t.quickConsult.vietnam}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">
                  {t.quickInfo.title}
                </h3>
                <button className="flex items-center justify-center cursor-pointer border border-custom-border rounded-full px-4 py-2 w-full text-sm text-dark font-semibold">
                  {t.quickInfo.zalo}
                  <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-full lg:w-[calc(100%-522px)]">
            <Image
              src="/images/hero-form.webp"
              alt={t.heroFormImageAlt}
              width={500}
              height={600}
              className="w-full h-auto md:max-w-[713px] lg:absolute bottom-0 lg:left-1/2 xl:left-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection; 