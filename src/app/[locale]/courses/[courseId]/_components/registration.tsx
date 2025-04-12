import React from "react";
import MainContainer from "./main-container";
import { ChevronRightIcon, FacebookIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Banner, Contact, Social } from "@/types/course";
import { ImageIcon } from "@/components/ui/ImageIcon";
import { cn } from "@/utils/cn";
import Image from "next/image";

interface ContactInfoProps {
  item: Contact;
  className?: string;
}

interface SocialLinkProps {
  item: Social;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ item, className = "" }) => (
  <div className={cn("flex items-center gap-3", className)}>
    <ImageIcon icon={item.icon} alt={item.text} size="sm" />
    <Link href={item.link} className="text-14 font-500 text-dark hover:underline">
      {item.text}
    </Link>
  </div>
);

const SocialLink: React.FC<SocialLinkProps> = ({ item }) => {
  switch (item.platform) {
    case "facebook":
      return (
        <div className="space-y-3">
          <h3 className="font-600 text-dark">Facebook</h3>
          <Link
            href={item.link}
            className="flex items-center gap-3 text-14 font-500 text-dark hover:underline"
            target="_blank"
          >
            <FacebookIcon />
            {item.text}
          </Link>
        </div>
      );
    case "zalo":
      return (
        <div className="space-y-3 min-w-[244px]">
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
    <MainContainer containerClassName="pb-0">
      <h2 className="text-32 font-600">Đăng ký ngay</h2>
      <div className="mt-4 flex flex-col md:flex-row justify-between items-start gap-8 pb-5">
        <div className="space-y-4 mb-4 md:mb-0">
          <div className="space-y-4">
            <h3 className="font-medium">Tư vấn nhanh</h3>
            {contact.map((item, index) => (
              <ContactInfo key={index} item={item} />
            ))}
          </div>
        </div>

        {social.map((item, index) => (
          <SocialLink key={index} item={item} />
        ))}
      </div>

      {/* Hero Banner */}
      <div className="relative min-h-[410px] -mx-[30px]">
        <div className="absolute -top-5 left-[-210px] w-[617px] h-[410px]">
          <Image src={banner.image.src} alt={banner.image.alt} fill className="object-cover" />
        </div>
        <div className="ml-[134px] pl-35 py-12 pl-13 mt-9 bg-background-tertiary rounded-12">
          <h2 className="text-32 font-600">{banner.title}</h2>
          <p className="text-32 font-600">{banner.subtitle}</p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Registration;
