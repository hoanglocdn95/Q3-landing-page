import { ChevronRightIcon, ChevronDownIcon } from '@/components/icons';
import Image from 'next/image';

export default function BannerSection({ locale }: { locale: string }) {
  console.log('🚀 ~ BannerSection ~ locale:', locale);
  return (
    <section className="relative">
      {/* Hero Section with Background Image */}
      <div className="relative h-[467px] overflow-hidden md:h-[491px] lg:h-[680px]">
        <Image
          src="/images/home/hero-home.png"
          alt="Student studying"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">
          <div className="section-container flex h-full flex-col justify-center py-12">
            <div className="max-w-[589px]">
              <Image
                alt="Logo of Q3 Language"
                width={186}
                height={88}
                className="mb-4 h-[64px] w-[135px] lg:h-[88px] lg:w-[186px]"
                src={'/icons/logo-light.svg'}
              />

              {/* Hero Text */}
              <h1 className="text-32 sm:text-40 mb-8 leading-tight font-extrabold text-white sm:mb-12 lg:text-[56px] lg:tracking-[-2px]">
                Học Không Chỉ Để Thi, <br />
                Học Là Để Dẫn Đầu!
              </h1>

              {/* CTA Button */}
              <button className="hover:bg-secondary flex h-10 items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:text-white sm:h-[52px] sm:text-base">
                Tìm khóa học phù hợp ngay
                <ChevronRightIcon className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="bg-secondary section-container relative z-10 -mt-16 rounded-4xl p-6 shadow-lg md:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="text-white md:max-w-xs">
            <p className="text-base font-semibold">
              Tìm các khóa học phù hợp với bạn và giúp con đường học vấn của bạn
              thành công
            </p>
          </div>

          <div className="hidden text-white md:block">\</div>

          <div className="w-full min-w-[200px] flex-1 md:mx-4 md:w-auto">
            <div className="relative">
              <select className="h-10 w-full appearance-none rounded-full bg-white px-4 py-2 pr-10 text-base font-medium outline-none md:h-[52px]">
                <option>Đại học Úc - visa 500 (50/50/65)</option>
                <option>Đại học Mỹ - visa F1</option>
                <option>Đại học Canada - visa SDS</option>
                <option>Đại học Anh - visa Tier 4</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDownIcon />
              </div>
            </div>
          </div>

          <button className="bg-secondary hover:border-secondary flex h-10 w-full items-center justify-center rounded-full border border-white px-4 py-2 text-base font-medium whitespace-nowrap text-white hover:bg-white hover:text-black sm:w-[unset] md:h-[52px]">
            Xem khóa học phù hợp
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
