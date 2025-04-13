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
    <footer className="relative z-10 border-t bg-white px-4 py-12 md:px-8">
      <div className="section-container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo.png"
                alt="Q3 Language"
                width={104}
                height={46}
                className="h-[46px] w-auto"
              />
            </Link>
            <p className="text-dark mb-4 text-sm font-medium">{t.slogan}</p>
          </div>

          <div>
            <h3 className="text-text-primary mb-4 font-bold">
              {t.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-dark hover:text-primary text-sm font-medium"
                >
                  {t.quickLinks.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dark hover:text-primary text-sm font-medium"
                >
                  {t.quickLinks.courses}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dark hover:text-primary text-sm font-medium"
                >
                  {t.quickLinks.policy}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dark hover:text-primary text-sm font-medium"
                >
                  {t.quickLinks.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary mb-4 font-bold">
              {t.contactInfo.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon />
                <span className="text-dark text-sm font-medium">
                  (028) 1231 456
                </span>
              </li>
              <li className="flex items-start">
                <MailIcon />
                <span className="text-dark text-sm font-medium">
                  mail@example.com
                </span>
              </li>
              <li className="flex items-start">
                <MapPinIcon />
                <span className="text-dark flex-1 text-sm font-medium">
                  {t.contactInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
          <div className="text-dark mb-4 text-sm font-medium md:mb-0">
            <span>{t.footer.legal}</span>
          </div>
          <div className="text-dark text-sm font-medium">
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
