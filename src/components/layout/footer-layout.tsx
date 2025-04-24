import Link from 'next/link';
import Image from 'next/image';
import viTranslations from '@/locales/vi/footer.json';
import enTranslations from '@/locales/en/footer.json';
import {
  FacebookDarkIcon,
  InstagramDarkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  XDarkIcon,
  YoutubeDarkIcon,
} from '../icons';

export default function Footer({ locale = 'vi' }: { locale?: string }) {
  const t = locale === 'en' ? enTranslations : viTranslations;

  return (
    <footer className="relative z-10 border-t bg-white py-12">
      <div className="section-container">
        <div className="flex flex-col justify-between gap-[28px] md:flex-row md:gap-[52px]">
          <div className="md:min-w-[406px]">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo.png"
                alt="Q3 Language"
                width={104}
                height={46}
                priority
                className="h-[46px] w-auto"
              />
            </Link>
            <p className="text-dark mb-4 text-sm font-medium whitespace-pre-line">
              {t.slogan}
            </p>
          </div>

          <div className="flex-1 md:max-w-[345px] lg:min-w-[225px]">
            <h3 className="text-text-primary mb-4 font-bold">
              {t.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-dark hover:text-primary text-sm font-medium hover:underline"
                >
                  {t.quickLinks.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dark hover:text-primary text-sm font-medium hover:underline"
                >
                  {t.quickLinks.courses}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dark hover:text-primary text-sm font-medium hover:underline"
                >
                  {t.quickLinks.policy}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dark hover:text-primary text-sm font-medium hover:underline"
                >
                  {t.quickLinks.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 md:max-w-[345px] lg:min-w-[225px]">
            <h3 className="text-text-primary mb-4 font-bold">
              {t.contactInfo.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-start gap-2">
                <PhoneIcon />
                <Link
                  href="tel:+61426812895"
                  className="text-14 font-500 text-dark hover:underline"
                >
                  {t.contactInfo.phone}
                </Link>
              </li>
              <li className="flex items-center justify-start gap-2">
                <MailIcon />

                <Link
                  href="mailto:contact@q3language.com"
                  className="text-14 font-500 text-dark hover:underline"
                >
                  {t.contactInfo.email}
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon />
                <span className="text-dark flex-1 text-sm font-medium tracking-normal whitespace-pre-line">
                  {t.contactInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
          <div className="text-dark mb-4 text-sm font-medium md:mb-0">
            <Link href="#" className="text-12 font-medium hover:underline">
              {t.footer.legal}
            </Link>
          </div>
          <div className="text-dark text-12 font-medium">
            {t.footer.copyright}
          </div>
          <div className="mt-4 flex space-x-3 md:mt-0">
            <Link
              href="#"
              aria-label="Youtube"
              className="text-dark hover:text-primary"
            >
              <YoutubeDarkIcon />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-dark hover:text-primary"
            >
              <InstagramDarkIcon />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="text-dark hover:text-primary"
            >
              <FacebookDarkIcon />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-dark hover:text-primary"
            >
              <XDarkIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
