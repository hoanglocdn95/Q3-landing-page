import React from 'react';
import MainContainer from './main-container';
import { ChevronRightIcon, FacebookIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Banner, Contact, Social } from '@/types/course';
import { ImageIcon } from '@/components/ui/ImageIcon';
import { cn } from '@/utils/cn';
import Image from 'next/image';

interface ContactInfoProps {
  item: Contact;
  className?: string;
}

interface SocialLinkProps {
  item: Social;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ item, className = '' }) => (
  <div className={cn('flex items-center gap-3', className)}>
    <ImageIcon icon={item.icon} alt={item.text} size="sm" />
    <Link
      href={item.link}
      className="text-14 font-500 text-dark hover:underline"
    >
      {item.text}
    </Link>
  </div>
);

const SocialLink: React.FC<SocialLinkProps> = ({ item, className }) => {
  switch (item.platform) {
    case 'facebook':
      return (
        <div className={cn('space-y-3', className)}>
          <h3 className="font-600 text-dark">Facebook</h3>
          <Link
            href={item.link}
            className="text-14 font-500 text-dark flex items-center gap-3 hover:underline"
            target="_blank"
          >
            <FacebookIcon />
            {item.text}
          </Link>
        </div>
      );
    case 'zalo':
      return (
        <div className={cn('min-w-[244px] space-y-3', className)}>
          <h3 className="font-600 text-dark">Nhắn tin nhanh</h3>
          <Button variant="outline" size="md" asChild>
            <Link href={item.link} target="_blank">
              Zalo
              <ChevronRightIcon className="text-dark" />
            </Link>
          </Button>
        </div>
      );
    default:
      return null;
  }
};

interface RegistrationProps {
  contact: Contact[];
  social: Social[];
  banner: Banner;
}

const Registration = ({ contact, social, banner }: RegistrationProps) => {
  return (
    <MainContainer containerClassName="!py-0">
      <h2 className="text-24 lg:text-32 font-600">Đăng ký ngay</h2>
      <div className="mt-4 flex flex-col flex-wrap items-start justify-between gap-8 pb-5 md:mt-6 md:flex-row lg:mt-4">
        <div className="order-1 space-y-4 md:mb-0">
          <div className="space-y-4">
            <h3 className="font-600 text-dark">Tư vấn nhanh</h3>
            {contact.map((item, index) => (
              <ContactInfo key={index} item={item} />
            ))}
          </div>
        </div>

        {social.map((item, index) => (
          <SocialLink
            key={index}
            item={item}
            className={cn(
              item.platform === 'zalo'
                ? 'order-3 basis-full max-md:w-full md:order-2 md:basis-auto lg:order-3'
                : 'order-2 basis-full md:order-3 lg:order-2',
            )}
          />
        ))}
      </div>

      <div className="relative lg:-mx-[30px]">
        <div className="absolute bottom-0 left-1/2 h-[308px] w-[463px] max-md:-translate-x-1/2 md:top-0 md:left-[-240px] md:h-[346px] md:w-[520px] lg:left-[-180px] lg:left-[-210px] lg:h-[410px] lg:w-[617px]">
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
