import React from 'react';
import MainContainer from './main-container';
import { ChevronRightIcon, FacebookIcon, PhoneIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Banner } from '@/types/course';
import { cn } from '@/utils/cn';
import Image from 'next/image';

interface RegistrationProps {
  banner: Banner;
}

const Registration = ({ banner }: RegistrationProps) => {
  return (
    <MainContainer containerClassName="!py-0">
      <h2 className="text-24 lg:text-32 font-600">Đăng ký ngay</h2>
      <div className="mt-4 flex flex-col flex-wrap items-start justify-between gap-8 pb-5 md:mt-6 md:flex-row lg:mt-4">
        <div className="order-1 space-y-4 md:mb-0">
          <div className="space-y-4">
            <h3 className="font-600 text-dark">Tư vấn nhanh</h3>
            <div className={cn('flex items-center gap-3')}>
              <PhoneIcon />
              <Link
                href="tel:+61426812895"
                className="text-14 font-500 text-dark hover:underline"
              >
                +61 426 812 895 (Úc - Australia)
              </Link>
            </div>
            <div className={cn('flex items-center gap-3')}>
              <PhoneIcon />
              <Link
                href="tel:+84888031854"
                className="text-14 font-500 text-dark hover:underline"
              >
                +84 888 031 854 (Việt Nam)
              </Link>
            </div>
          </div>
        </div>

        <div className="order-2 basis-full space-y-3 md:order-3 lg:order-2">
          <h3 className="font-600 text-dark">Facebook</h3>
          <Link
            href="https://facebook.com/q3language"
            className="text-14 font-500 text-dark flex items-center gap-3 hover:underline"
            target="_blank"
          >
            <FacebookIcon />
            Q3 Language
          </Link>
        </div>

        <div className="order-3 min-w-[244px] basis-full space-y-3 max-md:w-full md:order-2 md:basis-auto lg:order-3">
          <h3 className="font-600 text-dark">Nhắn tin nhanh</h3>
          <Button variant="outline" size="md" asChild>
            <Link href="https://zalo.me/q3language" target="_blank">
              Zalo
              <ChevronRightIcon className="text-dark" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative lg:-mx-[30px]">
        <div className="absolute bottom-0 left-1/2 h-[308px] w-[463px] max-md:-translate-x-1/2 md:top-0 md:left-[-240px] md:h-[346px] md:w-[520px] lg:left-[-180px] lg:h-[410px] lg:w-[617px]">
          <Image
            src={banner.image.src}
            alt={banner.image.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-6 pb-[270px] md:pb-[162px] lg:pt-9 lg:pb-[166px]">
          <div className="bg-background-tertiary text-24 md:text-28 lg:text-32 rounded-12 p-6 md:ml-[47px] md:py-8 md:pl-[93px] lg:ml-[134px] lg:py-12 lg:pl-35">
            <h2 className="font-600">{banner.title}</h2>
            <p className="font-600">{banner.subtitle}</p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Registration;
