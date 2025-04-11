import Link from "next/link";
import Image from "next/image";
import viTranslations from "@/locales/vi/footer.json";
import enTranslations from "@/locales/en/footer.json";

export default function Footer({ locale = "vi" }: { locale?: string }) {
  const t = locale === "en" ? enTranslations : viTranslations;

  return (
    <footer className="bg-white py-12 px-4 md:px-8 border-t">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Q3 Language"
                width={104}
                height={46}
                className="h-[46px] w-auto"
              />
            </Link>
            <p className="text-sm text-dark font-medium mb-4">{t.slogan}</p>
          </div>

          <div>
            <h3 className="font-bold text-text-primary mb-4">
              {t.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-dark font-medium hover:text-primary"
                >
                  {t.quickLinks.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-dark font-medium hover:text-primary"
                >
                  {t.quickLinks.courses}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-dark font-medium hover:text-primary"
                >
                  {t.quickLinks.policy}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-dark font-medium hover:text-primary"
                >
                  {t.quickLinks.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-text-primary mb-4">
              {t.contactInfo.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Image
                  alt="Phone"
                  height={16}
                  src="/icons/phone.svg"
                  width={16}
                  className="mr-2 mt-1 text-dark"
                />
                <span className="text-sm text-dark font-medium">
                  (028) 1231 456
                </span>
              </li>
              <li className="flex items-start">
                <Image
                  alt="Mail"
                  height={16}
                  src="/icons/mail.svg"
                  width={16}
                  className="mr-2 mt-1 text-dark"
                />
                <span className="text-sm text-dark font-medium">
                  mail@example.com
                </span>
              </li>
              <li className="flex items-start">
                <Image
                  alt="Map Pin"
                  height={16}
                  src="/icons/map-pin.svg"
                  width={16}
                  className="mr-2 mt-1 text-dark"
                />
                <span className="text-sm text-dark font-medium flex-1">
                  {t.contactInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center border-gray-200">
          <div className="text-sm text-dark font-medium mb-4 md:mb-0">
            <span>{t.footer.legal}</span>
          </div>
          <div className="text-sm text-dark font-medium">
            {t.footer.copyright}
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Link
              href="#"
              aria-label="Youtube"
              className="text-dark hover:text-primary"
            >
              <Image
                alt="Youtube"
                height={24}
                src="/icons/youtube-dark.svg"
                width={24}
              />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-dark hover:text-primary"
            >
              <Image
                alt="Instagram"
                height={24}
                src="/icons/instagram-dark.svg"
                width={24}
              />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="text-dark hover:text-primary"
            >
              <Image
                alt="Facebook"
                height={24}
                src="/icons/facebook-dark.svg"
                width={24}
              />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-dark hover:text-primary"
            >
              <Image
                alt="Twitter"
                height={24}
                src="/icons/x-dark.svg"
                width={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
